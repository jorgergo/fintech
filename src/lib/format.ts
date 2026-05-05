const mxn = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const mxnCompact = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  notation: "compact",
  maximumFractionDigits: 1,
});

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const pct = new Intl.NumberFormat("es-MX", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const num = new Intl.NumberFormat("es-MX", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const numDec = new Intl.NumberFormat("es-MX", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 6,
});

export function formatMXN(v: number): string {
  if (!Number.isFinite(v)) return "—";
  return mxn.format(v);
}

export function formatMXNCompact(v: number): string {
  if (!Number.isFinite(v)) return "—";
  return mxnCompact.format(v);
}

export function formatUSD(v: number): string {
  if (!Number.isFinite(v)) return "—";
  return usd.format(v);
}

export function formatPct(v: number, decimals = 2): string {
  if (!Number.isFinite(v)) return "—";
  return pct.format(v).replace(/(\d+)\.(\d{2})/, (_, a, b) => `${a}.${b.slice(0, decimals)}`);
}

export function formatInt(v: number): string {
  return num.format(v);
}

export function formatDecimal(v: number): string {
  return numDec.format(v);
}

export function formatSignedMXN(v: number): string {
  const sign = v > 0 ? "+" : "";
  return sign + formatMXN(v);
}

export function formatSignedPct(v: number): string {
  const sign = v > 0 ? "+" : "";
  return sign + formatPct(v);
}

export function monthNameES(m: number): string {
  return [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ][m - 1] ?? "";
}

export function monthShortES(m: number): string {
  return ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"][m - 1] ?? "";
}
