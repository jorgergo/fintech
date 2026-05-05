import { TAX_RULES_2025 } from "./constants";

export interface TaxConfigSnapshot {
  year: number;
  annualGrossIncome: number;
  annualTaxableIncome: number;
  marginalTaxRate: number;
  umaAnnualValue: number;
  maxDeduction: number;
}

export interface TaxSummary {
  year: number;
  totalContributed: number;
  deductibleAmount: number;
  excessAmount: number;
  maxDeduction: number;
  remainingDeduction: number;
  estimatedRefund: number;
  monthlyTargetToMax: number;
  progressPct: number;
}

export interface MonthlyContribution {
  month: number;
  amount: number;
}

export function calculateMaxDeduction(
  annualTaxableIncome: number,
  umaAnnual: number,
): number {
  const tenPercent = annualTaxableIncome * TAX_RULES_2025.maxDeductionMultiplier;
  const fiveUMAs = umaAnnual * TAX_RULES_2025.maxDeductionUMAs;
  return Math.min(tenPercent, fiveUMAs);
}

export function calculateTaxSummary(
  contributions: MonthlyContribution[],
  config: TaxConfigSnapshot,
  currentMonth: number,
): TaxSummary {
  const maxDeduction = config.maxDeduction;
  const totalContributed = contributions.reduce((s, c) => s + c.amount, 0);
  const deductibleAmount = Math.min(totalContributed, maxDeduction);
  const excessAmount = Math.max(0, totalContributed - maxDeduction);
  const remainingDeduction = Math.max(0, maxDeduction - deductibleAmount);
  const remainingMonths = Math.max(0, 12 - currentMonth);

  return {
    year: config.year,
    totalContributed,
    deductibleAmount,
    excessAmount,
    maxDeduction,
    remainingDeduction,
    estimatedRefund: deductibleAmount * config.marginalTaxRate,
    monthlyTargetToMax:
      remainingMonths > 0 ? remainingDeduction / remainingMonths : 0,
    progressPct: maxDeduction > 0 ? deductibleAmount / maxDeduction : 0,
  };
}

/**
 * Splits a contribution into deductible vs excess portions, given how much
 * has already been contributed this year and the annual cap.
 */
export function splitContribution(
  amount: number,
  alreadyContributedThisYear: number,
  maxDeduction: number,
): { deductible: number; excess: number } {
  const remainingCap = Math.max(0, maxDeduction - alreadyContributedThisYear);
  const deductible = Math.min(amount, remainingCap);
  const excess = amount - deductible;
  return { deductible, excess };
}
