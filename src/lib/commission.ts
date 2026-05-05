import { GBM_COMMISSIONS, CASH_TICKER } from "./constants";

export function isCommissionable(ticker: string): boolean {
  return ticker !== CASH_TICKER;
}

export function commissionFor(ticker: string, amountMXN: number): number {
  if (!isCommissionable(ticker)) return 0;
  return amountMXN * GBM_COMMISSIONS.effectiveRate;
}

export function totalCostWithCommission(
  ticker: string,
  pricePerTitle: number,
  titles: number,
): { gross: number; commission: number; total: number } {
  const gross = pricePerTitle * titles;
  const commission = commissionFor(ticker, gross);
  return { gross, commission, total: gross + commission };
}

export function effectiveRate(ticker: string): number {
  return isCommissionable(ticker) ? GBM_COMMISSIONS.effectiveRate : 0;
}
