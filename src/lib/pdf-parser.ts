import { PDFParse } from "pdf-parse";

export interface ParsedPosition {
  ticker: string;
  titles: number;
  avgPriceMXN: number;
  currentPriceMXN: number;
  valueMXN: number;
  gainLossMXN: number;
  gainLossPct: number;
  portfolioPct: number;
}

export interface ParsedStatement {
  date: string | null;
  positions: ParsedPosition[];
  cashMXN: number;
  totalValueMXN: number;
}

/**
 * Parses a GBM "Consulta de posición" PDF.
 *
 * Each instrument row is a single line like:
 *   "VUAA N 5 +$2,391.360000 +$2,311.000000 +$11,555.00 -$401.80 -3.36% 28.91%"
 *
 * Liquidez line:
 *   "Liquidez +$0.31 0.00%"
 *
 * Total line:
 *   "+$39,966.74"  (line before "Total")
 */
export async function parseGBMPositionPDF(buffer: Uint8Array): Promise<ParsedStatement> {
  const parser = new PDFParse(buffer);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (parser as any).load();
  const result = await parser.getText();
  const text: string = result.text;
  parser.destroy();

  return parseGBMText(text);
}

/** Exported for testing with raw text */
export function parseGBMText(text: string): ParsedStatement {
  const lines = text
    .split("\n")
    .map((l: string) => l.trim())
    .filter((l: string) => l.length > 0);

  const positions: ParsedPosition[] = [];
  let cashMXN = 0;
  let totalValueMXN = 0;
  let date: string | null = null;

  // Extract date from "Actual • DD/MM/YYYY" or "Actual · DD/MM/YYYY"
  const dateMatch = text.match(/Actual\s*[•·]\s*(\d{2}\/\d{2}\/\d{4})/);
  if (dateMatch) {
    date = dateMatch[1];
  }

  // Regex for instrument rows:
  // <TICKER> <TITLES> <AVG_PRICE> <LAST_PRICE> <VALUE> <GAIN$> <GAIN%> <PORT%>
  // e.g. "VUAA N 5 +$2,391.360000 +$2,311.000000 +$11,555.00 -$401.80 -3.36% 28.91%"
  const instrumentRegex =
    /^([A-Z][A-Z0-9]+(?:\s+[A-Z0-9*]+)?)\s+(\d[\d,]*)\s+([+-]\$[\d,.]+)\s+([+-]\$[\d,.]+)\s+([+-]\$[\d,.]+)\s+([+-]\$[\d,.]+)\s+([+-]?[\d.]+%)\s+([\d.]+%)$/;

  for (const line of lines) {
    const match = line.match(instrumentRegex);
    if (match) {
      const ticker = match[1];
      // Skip EFEC. lines (cash breakdown)
      if (ticker.startsWith("EFEC")) continue;

      positions.push({
        ticker,
        titles: parseInt(match[2].replace(/,/g, ""), 10),
        avgPriceMXN: parseGBMNumber(match[3]),
        currentPriceMXN: parseGBMNumber(match[4]),
        valueMXN: parseGBMNumber(match[5]),
        gainLossMXN: parseGBMNumber(match[6]),
        gainLossPct: parseFloat(match[7].replace(/[+%]/g, "")),
        portfolioPct: parseFloat(match[8].replace(/%/, "")),
      });
    }
  }

  // Extract cash from "Liquidez +$X.XX ..."
  const liquidezMatch = text.match(/Liquidez\s+([+-]\$[\d,.]+)/);
  if (liquidezMatch) {
    cashMXN = parseGBMNumber(liquidezMatch[1]);
  }

  // Extract total: line before first "Total" that looks like a number
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === "Total" && i > 0) {
      const candidate = lines[i - 1];
      if (candidate.match(/^[+-]\$[\d,.]+$/)) {
        totalValueMXN = parseGBMNumber(candidate);
        break;
      }
    }
  }

  // Fallback
  if (totalValueMXN === 0) {
    totalValueMXN = positions.reduce((s, p) => s + p.valueMXN, 0) + cashMXN;
  }

  return { date, positions, cashMXN, totalValueMXN };
}

/** Parse GBM number format: "+$2,391.360000" or "-$401.80" */
function parseGBMNumber(str: string): number {
  const cleaned = str.replace(/[$,\s]/g, "").replace(/^\+/, "");
  return parseFloat(cleaned) || 0;
}
