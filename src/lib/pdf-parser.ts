// pdf-parse v1 tries to read a test file on import; bypass by requiring the lib directly
// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any
const pdf: (buf: Buffer) => Promise<{ text: string }> = require("pdf-parse/lib/pdf-parse.js");

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
 */
export async function parseGBMPositionPDF(buffer: Uint8Array): Promise<ParsedStatement> {
  const result = await pdf(Buffer.from(buffer));
  return parseGBMText(result.text);
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
  // PDF text extraction may or may not have spaces between fields.
  // e.g. "VUAA N5+$2,391.360000+$2,311.000000+$11,555.00-$401.80-3.36%28.91%"
  // Ticker ends with a letter (A-Z) or *, then titles (digits) follow.
  const instrumentRegex =
    /^([A-Z][A-Z0-9]+(?:\s+[A-Z*]+))(?:\s*)(\d[\d,]*)\s*([+-]\$[\d,.]+)\s*([+-]\$[\d,.]+)\s*([+-]\$[\d,.]+)\s*([+-]\$[\d,.]+)\s*([+-]?[\d.]+%)\s*([\d.]+%)$/;

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

  // Extract cash from "Liquidez +$X.XX" — value has 2 decimal places
  const liquidezMatch = text.match(/Liquidez\s*([+-]\$[\d,]+\.\d{2})/);
  if (liquidezMatch) {
    cashMXN = parseGBMNumber(liquidezMatch[1]);
  }

  // Extract total: look for pattern like "+$39,966.74" followed by "Total"
  const totalMatch = text.match(/([+-]\$[\d,.]+)\s*\n?\s*Total/);
  if (totalMatch) {
    totalValueMXN = parseGBMNumber(totalMatch[1]);
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
