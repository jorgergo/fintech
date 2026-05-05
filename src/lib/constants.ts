export const USER_PROFILE = {
  name: "Jorge",
  birthYear: 2002,
  retirementAge: 65,
  taxRegime: "SUELDOS_Y_SALARIOS" as const,

  monthlySalaryGross: 32_550.0,
  annualBaseSalary: 390_600.0,
  annualTaxableIncome: 460_186.05,
  annualTotalComp: 555_303.0,
  estimatedMarginalTaxRate: 0.30,

  monthlyContribution: 5_500.0,
  pprCommissionRate: 0.0075,
  pprCommissionIVA: 0.16,
  pprEffectiveCommission: 0.0087,

  hasW8Ben: null as boolean | null,
} as const;

export const TAX_RULES_2025 = {
  umaDaily: 113.14,
  umaMonthly: 3_439.46,
  umaAnnual: 41_273.52,

  maxDeductionMultiplier: 0.10,
  maxDeductionUMAs: 5,
  maxDeductionCap: 206_367.60,

  earlyWithdrawalRetention: 0.20,

  singleWithdrawalExemptUMAs: 90,
  singleWithdrawalExempt: 3_714_616.80,
  partialWithdrawalExemptUMAs: 15,
  partialWithdrawalExempt: 619_102.80,

  capitalGainsTaxExempt: true,
  dividendTaxExempt: true,
  fibraRetentionExempt: true,
} as const;

export const GBM_COMMISSIONS = {
  executionCommission: 0.0075,
  iva: 0.16,
  effectiveRate: 0.0087,
  gbmf2Commission: 0,
} as const;

export type TickerKey = "VWRA" | "QQQM" | "VUAA" | "GBMF2";

export const TARGET_ALLOCATION: Record<TickerKey, {
  ticker: string;
  targetPct: number;
  currency: "USD" | "MXN";
  isLegacy: boolean;
  description: string;
}> = {
  VWRA: {
    ticker: "VWRA N",
    targetPct: 0.60,
    currency: "USD",
    isLegacy: false,
    description: "Global equity - ~3,900 stocks across 50 countries",
  },
  QQQM: {
    // TODO: VERIFY TICKER ON GBM SIC
    ticker: "QQQM N",
    targetPct: 0.40,
    currency: "USD",
    isLegacy: false,
    description: "Nasdaq 100 - US large-cap tech/growth tilt",
  },
  VUAA: {
    ticker: "VUAA N",
    targetPct: 0,
    currency: "USD",
    isLegacy: true,
    description: "S&P 500 - legacy position, do not sell (avoid commission)",
  },
  GBMF2: {
    ticker: "GBMF2 BE",
    targetPct: 0,
    currency: "MXN",
    isLegacy: false,
    description: "Money market fund - holds cash remnants between purchases",
  },
};

export const INITIAL_PORTFOLIO = [
  {
    ticker: "VUAA N",
    titles: 5,
    avgPriceMXN: 2_391.36,
    currentPriceMXN: 2_311.0,
    isLegacy: true,
    targetPct: 0,
    currency: "USD",
    description: TARGET_ALLOCATION.VUAA.description,
  },
  {
    ticker: "VWRA N",
    titles: 9,
    avgPriceMXN: 3_058.23,
    currentPriceMXN: 3_020.0,
    isLegacy: false,
    targetPct: 0.60,
    currency: "USD",
    description: TARGET_ALLOCATION.VWRA.description,
  },
  {
    ticker: "QQQM N",
    titles: 0,
    avgPriceMXN: 0,
    currentPriceMXN: 0,
    isLegacy: false,
    targetPct: 0.40,
    currency: "USD",
    description: TARGET_ALLOCATION.QQQM.description,
  },
  {
    ticker: "GBMF2 BE",
    titles: 915,
    avgPriceMXN: 1.345823,
    currentPriceMXN: 1.345823,
    isLegacy: false,
    targetPct: 0,
    currency: "MXN",
    description: TARGET_ALLOCATION.GBMF2.description,
  },
];

export const INITIAL_CARDS = [
  { name: "Plata Card", creditLimit: 40_000, isSecured: false },
  { name: "Amex Platinum Credit", creditLimit: 91_000, isSecured: false },
  { name: "Klar", creditLimit: 39_682.67, isSecured: true },
  { name: "BBVA Azul", creditLimit: 41_700, isSecured: false },
  { name: "Nu", creditLimit: 16_000, isSecured: false },
  { name: "Revolut", creditLimit: 60_000, isSecured: false },
  { name: "Didi", creditLimit: 16_000, isSecured: false },
];

export const CASH_TICKER = "GBMF2 BE";
export const CASH_PSEUDO_TICKER = "CASH";
