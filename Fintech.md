# CLAUDE.md — FinTech-AI: Personal Finance App

## CRITICAL INSTRUCTIONS FOR CLAUDE CODE

- **Use the LATEST stable versions** of every library, framework, and dependency. Before installing anything, search the web or check npm/package registries to confirm you are using the most recent stable release. Do NOT hallucinate version numbers.
- **Do NOT assume you know the latest API** of any library. If unsure, look up the current docs. APIs change between major versions (especially Next.js App Router, Prisma 6+, Tailwind 4+, etc.).
- **Verify every dependency exists** before adding it to package.json. If a package name looks wrong or unfamiliar, search for it first.
- **Test after every major step.** Run `npm run build` frequently to catch errors early.

---

## 1. Project overview

**App name:** FinTech-AI (working title)

**Purpose:** A personal finance web app for a single user (Jorge, 23 years old, based in Mexico) to manage his PPR (Plan Personal de Retiro) investment portfolio, track credit card utilization, and optimize tax deductions under Mexican tax law (LISR Art. 151).

**This is a personal tool, not a SaaS product.** No auth system needed. Single user. Local SQLite database. Runs on localhost or a personal VPS.

---

## 2. Tech stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Next.js (App Router) | Latest stable. Use server components by default, client components only when needed (interactivity). |
| Language | TypeScript | Strict mode enabled. |
| Styling | Tailwind CSS | Latest stable. Minimal custom CSS. |
| Database | SQLite | Via Prisma ORM. Single file, no external DB server. |
| ORM | Prisma | Latest stable. SQLite provider. |
| Charts | Recharts or Chart.js | For portfolio visualization. Pick whichever has better React integration in its latest version. |
| Date handling | date-fns | For date calculations (payment dates, fiscal year tracking). |
| State | React state + Server Actions | No Redux or Zustand needed for this scale. |

**Do NOT use:**
- Any authentication library (no NextAuth, no Clerk)
- Any external database (no Postgres, no Supabase, no PlanetScale)
- Any AI/LLM library in v1 (no Vercel AI SDK, no LangChain)

---

## 3. User profile (hardcoded constants for v1)

```typescript
// lib/constants.ts

export const USER_PROFILE = {
  name: "Jorge",
  birthYear: 2002, // Age ~23 in 2025
  retirementAge: 65,
  yearsToRetirement: 42,
  taxRegime: "SUELDOS_Y_SALARIOS" as const,
  
  // Income (from Ford Motor Company comp sheet)
  monthlySalaryGross: 32_550.00,      // MXN bruto mensual
  annualBaseSalary: 390_600.00,        // MXN
  annualTaxableIncome: 460_186.05,     // MXN (gravable)
  annualTotalComp: 555_303.00,         // MXN (bruto total con prestaciones)
  estimatedMarginalTaxRate: 0.30,      // ~30% for this income bracket
  
  // PPR Configuration
  monthlyContribution: 5_500.00,       // MXN target mensual
  pprCommissionRate: 0.0075,           // 0.75% por compra/venta
  pprCommissionIVA: 0.16,             // 16% IVA sobre la comisión
  pprEffectiveCommission: 0.0087,      // 0.75% * 1.16 = 0.87% total
  
  // Has W-8BEN: unknown (null until confirmed)
  hasW8Ben: null as boolean | null,
} as const;
```

---

## 4. PPR financial rules (Mexican tax law)

These rules govern the PPR (Plan Personal de Retiro) under GBM and Mexican LISR. They MUST be implemented exactly as described. Do not simplify or approximate.

### 4.1 Tax deduction rules (LISR Art. 151, fracción V)

```typescript
// lib/tax-rules.ts

export const TAX_RULES_2025 = {
  // UMA (Unidad de Medida y Actualización) — updated annually
  umaDaily: 113.14,                    // MXN, valor 2025
  umaMonthly: 3_439.46,               // MXN
  umaAnnual: 41_273.52,               // MXN
  
  // PPR deduction limits
  maxDeductionMultiplier: 0.10,        // 10% of annual taxable income
  maxDeductionUMAs: 5,                 // or 5 annual UMAs, whichever is LESS
  maxDeductionCap: 206_367.60,         // 5 × $41,273.52 = $206,367.60 MXN (2025)
  
  // For Jorge specifically:
  // 10% of $460,186.05 = $46,018.61
  // 5 UMAs = $206,367.60
  // His limit = min($46,018.61, $206,367.60) = $46,018.61
  
  // Early withdrawal penalty
  earlyWithdrawalRetention: 0.20,      // 20% withholding if withdrawn before age 65
  
  // Retirement withdrawal exemptions (at age 65+)
  singleWithdrawalExemptUMAs: 90,      // Pago único: up to 90 UMAs annual
  singleWithdrawalExempt: 3_714_616.80,// MXN (2025)
  partialWithdrawalExemptUMAs: 15,     // Pagos parciales: up to 15 UMAs annual  
  partialWithdrawalExempt: 619_102.80, // MXN (2025)
  
  // Tax exemptions inside PPR
  capitalGainsTaxExempt: true,         // No 10% capital gains tax
  dividendTaxExempt: true,             // No dividend tax (Mexico-side)
  fibraRetentionExempt: true,          // No 30% FIBRA retention
  // NOTE: US-side dividend withholding still applies on SIC instruments
  // 30% without W-8BEN, 10% with W-8BEN
};

// Function to calculate max deduction for any income level
export function calculateMaxDeduction(annualTaxableIncome: number, year: number): number {
  const umaAnnual = getUMAForYear(year); // Must be updated yearly
  const tenPercent = annualTaxableIncome * 0.10;
  const fiveUMAs = umaAnnual * 5;
  return Math.min(tenPercent, fiveUMAs);
}
```

### 4.2 GBM PPR commission structure

```typescript
export const GBM_COMMISSIONS = {
  // PPR "por ejecución" (non-discretionary)
  executionCommission: 0.0075,    // 0.75% on buy/sell of stocks, FIBRAs, ETFs
  iva: 0.16,                     // 16% IVA on top of commission
  effectiveRate: 0.0087,          // 0.75% × 1.16 = 0.87%
  
  // GBMF2 (money market fund) — no buy/sell commission
  gbmf2Commission: 0,            // No commission on buy/sell
  // GBMF2 has its own internal management fee (built into NAV)
  
  // Important: commission applies PER TRANSACTION, not per title
  // If you buy 3 VWRA in one order, commission = 0.87% × (3 × price)
};
```

### 4.3 PPR operational rules

- Orders must be placed by phone call or email to GBM (not through the app/website).
- Portfolio is viewable via monthly statements (first 5 business days) or position statements (on request).
- No minimum opening amount.
- No mandatory contribution schedule.
- No penalty for stopping contributions.
- Cannot contribute after age 65, but portfolio remains invested.
- GBM issues CFDI (tax receipt) in February/March for the previous year's deductible contributions.
- The app does NOT execute trades — it only RECOMMENDS what to buy.

---

## 5. Portfolio configuration

### 5.1 Target allocation

```typescript
export const TARGET_ALLOCATION = {
  // Active instruments (new purchases target these percentages)
  VWRA: {
    ticker: "VWRA N",           // Vanguard FTSE All-World UCITS ETF (SIC)
    targetPct: 0.60,            // 60% of new purchases
    currency: "USD",            // Priced in USD, converted to MXN on SIC
    isLegacy: false,
    description: "Global equity - ~3,900 stocks across 50 countries",
  },
  QQQM: {
    ticker: "QQQM N",          // Invesco Nasdaq 100 ETF (SIC) — VERIFY TICKER ON GBM SIC
    targetPct: 0.40,            // 40% of new purchases
    currency: "USD",
    isLegacy: false,
    description: "Nasdaq 100 - US large-cap tech/growth tilt",
  },
  
  // Legacy instruments (do NOT sell, let them dilute naturally)
  VUAA: {
    ticker: "VUAA N",          // Vanguard S&P 500 UCITS ETF (SIC)
    targetPct: 0,              // No target — legacy holding
    currency: "USD",
    isLegacy: true,
    description: "S&P 500 - legacy position, do not sell (avoid commission)",
  },
  
  // Cash equivalent
  GBMF2: {
    ticker: "GBMF2 BE",       // GBM money market fund
    targetPct: 0,              // Absorbs remainder only
    currency: "MXN",
    isLegacy: false,
    description: "Money market fund - holds cash remnants between purchases",
  },
};

// IMPORTANT: Target percentages (60/40) apply ONLY to non-legacy, non-cash positions.
// The actual portfolio % will differ because VUAA legacy dilutes over time
// and GBMF2 holds residual cash.
```

### 5.2 Current portfolio (as of January 2025 — user will update)

```typescript
export const INITIAL_PORTFOLIO = [
  {
    ticker: "VUAA N",
    titles: 5,
    avgPriceMXN: 2_391.36,
    lastPriceMXN: 2_311.00,    // January 2025
    valueMXN: 11_555.00,
    gainLossMXN: -401.80,
    gainLossPct: -3.36,
    portfolioPct: 28.91,
  },
  {
    ticker: "VWRA N",
    titles: 9,
    avgPriceMXN: 3_058.23,
    lastPriceMXN: 3_020.00,    // January 2025
    valueMXN: 27_180.00,
    gainLossMXN: -344.10,
    gainLossPct: -1.25,
    portfolioPct: 68.01,
  },
  {
    ticker: "GBMF2 BE",
    titles: 915,
    avgPriceMXN: 1.345823,
    lastPriceMXN: 1.345823,
    valueMXN: 1_231.43,
    gainLossMXN: 0,
    gainLossPct: 0,
    portfolioPct: 3.08,
  },
  // Efectivo / Liquidez
  {
    ticker: "CASH",
    titles: 0,
    avgPriceMXN: 0,
    lastPriceMXN: 0,
    valueMXN: 0.31,
    gainLossMXN: 0,
    gainLossPct: 0,
    portfolioPct: 0,
  },
];
```

---

## 6. Core algorithms

### 6.1 Rebalancing engine (THE most important piece)

```typescript
// lib/rebalance.ts

interface Position {
  ticker: string;
  titles: number;
  currentPriceMXN: number;
  isLegacy: boolean;
  targetPct: number; // 0 for legacy and cash
}

interface RebalanceResult {
  ticker: string;
  currentTitles: number;
  titlesToBuy: number;
  estimatedCost: number;
  commissionMXN: number;
  newTitles: number;
  currentPct: number;
  newPct: number;
  targetPct: number;
  drift: number; // newPct - targetPct
}

/**
 * Greedy rebalancing algorithm for whole-title-only constraint (SIC).
 * 
 * 1. Calculate total portfolio value including new cash
 * 2. For each non-legacy instrument, calculate current % vs target %
 * 3. Iteratively buy 1 title of the most underweight instrument
 * 4. Stop when no more whole titles can be purchased
 * 5. Remainder stays in cash (GBMF2)
 * 
 * Commission is factored into cost: each purchase costs price × (1 + 0.0087)
 */
function calculateRebalance(
  positions: Position[],
  availableCash: number, // New cash to deploy (monthly contribution)
  existingCash: number,  // Cash already in PPR (GBMF2 value + liquidez)
): RebalanceResult[] {
  const totalCash = availableCash + existingCash;
  
  // Total portfolio value = sum of all positions + total cash
  const totalValue = positions.reduce(
    (sum, p) => sum + p.titles * p.currentPriceMXN, 0
  ) + totalCash;
  
  // Filter to active (non-legacy) instruments with targets
  const activePositions = positions.filter(p => !p.isLegacy && p.targetPct > 0);
  
  // Clone for simulation
  const simulation = activePositions.map(p => ({
    ...p,
    titlesToBuy: 0,
    totalCost: 0,
  }));
  
  let remainingCash = totalCash;
  const commissionRate = 0.0087; // 0.75% + IVA
  
  // Greedy loop: buy 1 title at a time of the most underweight instrument
  while (true) {
    // Recalculate percentages after each simulated purchase
    const currentTotal = positions.reduce(
      (sum, p) => sum + p.titles * p.currentPriceMXN, 0
    ) + simulation.reduce(
      (sum, s) => sum + s.titlesToBuy * s.currentPriceMXN, 0
    ) + remainingCash;
    
    // Find most underweight instrument that we can afford
    let bestCandidate = null;
    let maxDrift = -Infinity;
    
    for (const s of simulation) {
      const currentTitles = (positions.find(p => p.ticker === s.ticker)?.titles ?? 0) + s.titlesToBuy;
      const currentValue = currentTitles * s.currentPriceMXN;
      const currentPct = currentValue / currentTotal;
      const drift = s.targetPct - currentPct; // Positive = underweight
      
      const costForOneTitle = s.currentPriceMXN * (1 + commissionRate);
      
      if (drift > maxDrift && costForOneTitle <= remainingCash) {
        maxDrift = drift;
        bestCandidate = s;
      }
    }
    
    if (!bestCandidate) break; // Can't afford any more titles
    
    const cost = bestCandidate.currentPriceMXN * (1 + commissionRate);
    bestCandidate.titlesToBuy += 1;
    bestCandidate.totalCost += cost;
    remainingCash -= cost;
  }
  
  // Build results
  // ... (map simulation to RebalanceResult[])
  
  return results;
}
```

### 6.2 Tax deduction tracker

```typescript
// lib/tax.ts

interface TaxSummary {
  year: number;
  totalContributed: number;
  deductibleAmount: number;
  excessAmount: number;         // Contributed but not deductible
  maxDeduction: number;         // Calculated limit for this year
  remainingDeduction: number;   // How much more can be deducted this year
  estimatedRefund: number;      // deductibleAmount × marginal tax rate
  monthlyTargetToMax: number;   // Monthly amount to max out deduction by Dec
}

function calculateTaxSummary(
  contributions: { month: number; amount: number }[],
  annualTaxableIncome: number,
  marginalRate: number,
  currentMonth: number, // 1-12
): TaxSummary {
  const maxDeduction = calculateMaxDeduction(annualTaxableIncome, currentYear);
  const totalContributed = contributions.reduce((s, c) => s + c.amount, 0);
  const deductibleAmount = Math.min(totalContributed, maxDeduction);
  const excessAmount = Math.max(0, totalContributed - maxDeduction);
  const remainingDeduction = Math.max(0, maxDeduction - deductibleAmount);
  const remainingMonths = 12 - currentMonth;
  
  return {
    year: currentYear,
    totalContributed,
    deductibleAmount,
    excessAmount,
    maxDeduction,
    remainingDeduction,
    estimatedRefund: deductibleAmount * marginalRate,
    monthlyTargetToMax: remainingMonths > 0 
      ? remainingDeduction / remainingMonths 
      : 0,
  };
}
```

### 6.3 Credit card utilization

```typescript
// lib/cards.ts

interface CardAlert {
  cardName: string;
  type: "PAYMENT_DUE" | "HIGH_UTILIZATION" | "APPROACHING_CUT";
  message: string;
  daysUntil: number;
  severity: "info" | "warning" | "danger";
}

function calculateUtilization(balance: number, limit: number): number {
  return limit > 0 ? balance / limit : 0;
}

function getCardAlerts(cards: CreditCard[], today: Date): CardAlert[] {
  // For each card:
  // 1. Check if payment date is within 5 days → danger alert
  // 2. Check if utilization > 30% → warning alert
  // 3. Check if cut date is within 3 days → info alert
  // ...
}
```

---

## 7. Credit cards (initial data to seed)

```typescript
export const INITIAL_CARDS = [
  {
    name: "Plata Card",
    creditLimit: 40_000,
    currentBalance: 0,        // User will update
    cutDay: 0,                // User will provide
    paymentDay: 0,            // User will provide
    isSecured: false,
    annualRate: 0,            // User will provide
  },
  {
    name: "Amex Platinum Credit",
    creditLimit: 91_000,
    currentBalance: 0,
    cutDay: 0,
    paymentDay: 0,
    isSecured: false,
    annualRate: 0,
  },
  {
    name: "Klar",
    creditLimit: 39_682.67,   // Secured, grows with deposits
    currentBalance: 0,
    cutDay: 0,
    paymentDay: 0,
    isSecured: true,          // Deposit-backed, yields ~13% annual
    annualRate: 0,
  },
  {
    name: "BBVA Azul",
    creditLimit: 41_700,
    currentBalance: 0,
    cutDay: 0,
    paymentDay: 0,
    isSecured: false,
    annualRate: 0,
  },
  {
    name: "Nu",
    creditLimit: 16_000,
    currentBalance: 0,
    cutDay: 0,
    paymentDay: 0,
    isSecured: false,
    annualRate: 0,
  },
  {
    name: "Revolut",
    creditLimit: 60_000,
    currentBalance: 0,
    cutDay: 0,
    paymentDay: 0,
    isSecured: false,
    annualRate: 0,
  },
  {
    name: "Didi",
    creditLimit: 16_000,
    currentBalance: 0,
    cutDay: 0,
    paymentDay: 0,
    isSecured: false,
    annualRate: 0,
  },
];
// Total credit available: ~$304,382 MXN
```

---

## 8. Database schema (Prisma)

Create the schema in `prisma/schema.prisma`. Use SQLite provider.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model PortfolioPosition {
  id              Int       @id @default(autoincrement())
  ticker          String    // e.g. "VWRA N", "QQQM N", "VUAA N", "GBMF2 BE"
  titles          Int       // Number of whole titles owned
  avgPriceMXN     Float     // Weighted average purchase price in MXN
  currentPriceMXN Float     // Last known market price in MXN
  isLegacy        Boolean   @default(false) // true for VUAA (don't sell)
  targetPct       Float     @default(0)     // Target allocation (0.60, 0.40, 0, etc.)
  updatedAt       DateTime  @updatedAt

  transactions    Transaction[]
}

model Transaction {
  id              Int       @id @default(autoincrement())
  positionId      Int
  position        PortfolioPosition @relation(fields: [positionId], references: [id])
  type            String    // "BUY" or "SELL"
  titles          Int
  pricePerTitle   Float     // MXN price at time of transaction
  commissionMXN   Float     // Actual commission paid
  totalCostMXN    Float     // (titles × price) + commission
  isDeductible    Boolean   @default(true) // Whether this counts toward deduction
  executedAt      DateTime  @default(now())
  notes           String?
}

model CreditCard {
  id              Int       @id @default(autoincrement())
  name            String    // "Amex Platinum Credit", "Nu", etc.
  creditLimit     Float
  currentBalance  Float     @default(0)
  cutDay          Int       // Day of month (1-31)
  paymentDay      Int       // Day of month (1-31)
  isSecured       Boolean   @default(false) // e.g. Klar
  annualRate      Float     @default(0)     // CAT/interest rate
  notes           String?
  updatedAt       DateTime  @updatedAt
}

model TaxContribution {
  id                  Int     @id @default(autoincrement())
  year                Int
  month               Int     // 1-12
  amountMXN           Float   // Total contributed this month to PPR
  deductibleAmount    Float   // Portion that counts toward deduction
  excessAmount        Float   // Portion that exceeds deduction limit
  createdAt           DateTime @default(now())

  @@unique([year, month])
}

model TaxConfig {
  id                    Int     @id @default(autoincrement())
  year                  Int     @unique
  annualGrossIncome     Float   // Total bruto anual
  annualTaxableIncome   Float   // Gravable (for deduction calc)
  marginalTaxRate       Float   // Estimated marginal rate
  umaAnnualValue        Float   // UMA anualizada for this year
  maxDeduction          Float   // Computed: min(10% taxable, 5 × UMA)
}

model UserProfile {
  id                    Int     @id @default(autoincrement())
  birthYear             Int     @default(2002)
  retirementAge         Int     @default(65)
  monthlyContribution   Float   @default(5500)
  taxRegime             String  @default("SUELDOS_Y_SALARIOS")
  hasW8Ben              Boolean?
  commissionRate        Float   @default(0.0087) // Effective rate with IVA
}
```

---

## 9. App pages and UI requirements

### 9.1 Dashboard (`/` or `/dashboard`)

The main overview page. Shows:

1. **Portfolio summary card:**
   - Total portfolio value (MXN)
   - Total gain/loss ($, %)
   - Total commissions paid YTD
   - Allocation pie/donut chart (VWRA, QQQM, VUAA legacy, GBMF2/cash)
   - Drift indicator (how far from 60/40 target)

2. **Tax progress card:**
   - Progress bar: deducted so far / max deduction ($46,019)
   - Estimated ISR refund
   - "Months remaining to max out" indicator

3. **Cards alert card:**
   - Next payment due (which card, how many days)
   - Any card with utilization > 30%
   - Total utilization across all cards

4. **Quick action button:**
   - "Calculate this month's purchase" → navigates to /rebalance

### 9.2 Rebalancer (`/rebalance`)

The core tool. Flow:

1. **Input form:**
   - Current price for each active instrument (VWRA N, QQQM N) in MXN
   - Optional: current USD/MXN rate (to auto-calculate from USD prices)
   - Cash available to invest this month (default: $5,500)
   - Existing cash in PPR (GBMF2 value + liquidez)
   - Button: "Calculate optimal purchase"

2. **Output (after calculation):**
   - Table showing for each instrument:
     - Current titles → New titles
     - Titles to buy
     - Cost per title
     - Commission
     - Total cost
   - Cash remainder (goes to GBMF2)
   - Allocation before → after (visual bar chart)
   - Drift before → after
   - **"Record this purchase" button** — saves the transaction to DB when user confirms they executed the order with GBM

### 9.3 Credit cards (`/cards`)

Simple CRUD + dashboard:

1. **Card list:**
   - All 7 cards with current balance, limit, utilization bar
   - Color-coded: green < 30%, yellow 30-50%, red > 50%
   - Edit balance inline or via modal

2. **Payment calendar:**
   - Visual calendar or list showing upcoming payment dates
   - Days until next payment for each card
   - Days until next cut date

3. **Global utilization:**
   - Total balance / total credit limit
   - Recommendation if over 30%

### 9.4 Tax tracker (`/tax`)

1. **Annual progress:**
   - Year selector (2025, 2026, ...)
   - Bar chart: monthly contributions
   - Running total vs max deduction
   - Projected refund at current rate

2. **Contribution log:**
   - Table of all monthly contributions
   - Deductible vs excess breakdown per month
   - Editable (in case of corrections)

3. **Configuration:**
   - Update annual income, UMA values, tax rate for each year
   - Auto-calculates new max deduction when values change

### 9.5 Settings (`/settings`)

- Edit user profile (birth year, contribution target, commission rate)
- Edit portfolio targets (allocation percentages)
- Manage instruments (add/remove tickers)
- Export data as JSON
- Seed/reset database

---

## 10. UI design guidelines

- **Clean, minimal, professional.** Think of a Bloomberg terminal meets a modern fintech app.
- Use Tailwind CSS utility classes. No custom component library needed.
- **Dark mode support** via Tailwind's `dark:` variants.
- Numbers should always be formatted:
  - Currency: `$32,550.00` (use `Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' })`)
  - Percentages: `60.00%` (2 decimal places)
  - Titles: integer, no decimals
- **Color coding:**
  - Green: positive returns, low utilization, on track
  - Red: negative returns, high utilization, behind schedule
  - Yellow/Amber: warnings, approaching limits
  - Blue: informational, neutral
- **Mobile responsive** but desktop-first (Jorge uses this at his desk primarily).
- **Spanish language UI.** All labels, headers, and messages in Spanish. Code and variable names in English.

---

## 11. Seed data script

Create a seed script (`prisma/seed.ts`) that:

1. Creates the UserProfile with default values
2. Creates all 7 credit cards (with 0 balances and placeholder dates — user updates later)
3. Creates the initial portfolio positions (VUAA, VWRA, GBMF2 from January data)
4. Creates TaxConfig for 2025 with UMA and income values
5. Does NOT create fake transactions — start clean

---

## 12. Project structure

```
fintech-ai/
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── dev.db (generated)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with nav
│   │   ├── page.tsx             # Dashboard
│   │   ├── rebalance/
│   │   │   └── page.tsx         # Rebalancer
│   │   ├── cards/
│   │   │   └── page.tsx         # Credit cards
│   │   ├── tax/
│   │   │   └── page.tsx         # Tax tracker
│   │   └── settings/
│   │       └── page.tsx         # Settings
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx      # Navigation sidebar
│   │   │   └── Header.tsx
│   │   ├── dashboard/
│   │   │   ├── PortfolioSummary.tsx
│   │   │   ├── TaxProgress.tsx
│   │   │   └── CardAlerts.tsx
│   │   ├── rebalance/
│   │   │   ├── PriceInputForm.tsx
│   │   │   └── RebalanceResult.tsx
│   │   ├── cards/
│   │   │   ├── CardList.tsx
│   │   │   └── PaymentCalendar.tsx
│   │   ├── tax/
│   │   │   ├── ContributionChart.tsx
│   │   │   └── DeductionProgress.tsx
│   │   └── ui/
│   │       ├── Card.tsx          # Reusable card wrapper
│   │       ├── ProgressBar.tsx
│   │       ├── Badge.tsx
│   │       └── CurrencyDisplay.tsx
│   ├── lib/
│   │   ├── db.ts                # Prisma client singleton
│   │   ├── constants.ts         # User profile, financial constants
│   │   ├── rebalance.ts         # Rebalancing algorithm
│   │   ├── tax.ts               # Tax calculation functions
│   │   ├── cards.ts             # Card utility functions
│   │   ├── commission.ts        # Commission calculations
│   │   └── format.ts            # Number/date formatting helpers
│   ├── actions/
│   │   ├── portfolio.ts         # Server actions for portfolio CRUD
│   │   ├── cards.ts             # Server actions for cards CRUD
│   │   ├── tax.ts               # Server actions for tax entries
│   │   └── rebalance.ts         # Server action to run rebalance calc
│   └── types/
│       └── index.ts             # Shared TypeScript types
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── CLAUDE.md                    # This file
```

---

## 13. Important constraints and edge cases

### 13.1 Whole titles only
The SIC only allows buying complete shares. `Math.floor()` is your friend. Never suggest buying 0.5 titles.

### 13.2 VUAA is legacy
Never recommend selling VUAA. Never include it in rebalance targets. It should appear in the portfolio view but be clearly marked as "legacy — no trades."

### 13.3 GBMF2 absorbs remainders
Any cash that can't buy a whole title of an active instrument stays in GBMF2 (or liquidez). This is not a problem — it gets used in the next cycle.

### 13.4 Commission on every trade
The 0.87% commission applies to EVERY buy/sell of stocks, FIBRAs, and ETFs. GBMF2 (money market fund) has NO buy/sell commission. Always factor commission into the rebalancer's cost calculation.

### 13.5 Deductible vs non-deductible tracking
If monthly contribution = $5,500 and max deduction / 12 ≈ $3,835:
- First $3,835 each month is deductible
- Remaining $1,665 is non-deductible BUT still tax-exempt on gains
- The tax tracker must separately track both amounts
- NOTE: deduction is calculated ANNUALLY, not monthly. The monthly split is just a convenience estimate. The actual deduction happens once per year in the annual declaration.

### 13.6 Prices change
The rebalancer asks for current prices each time. It does NOT store historical market prices. The user manually inputs prices from GBM's platform before running the calculation.

### 13.7 Currency
Everything in the app is in MXN. ETF prices on SIC are already in MXN (converted from USD at trading time). The user may optionally input a USD price + exchange rate, and the app converts to MXN.

### 13.8 UMA updates yearly
The UMA value changes every year (usually announced in January/February). The tax config should be updatable per year. When a new year starts, the user creates a new TaxConfig entry with updated UMA values.

---

## 14. Build order (suggested)

1. **Initialize project:** Next.js + TypeScript + Tailwind + Prisma + SQLite
2. **Set up database:** Schema, migrations, seed script
3. **Build core lib:** rebalance.ts, tax.ts, cards.ts, commission.ts, format.ts
4. **Build layout:** Sidebar navigation + header
5. **Build Dashboard:** Portfolio summary, tax progress, card alerts
6. **Build Rebalancer:** Price input form, calculation, results display, record transaction
7. **Build Cards page:** Card list with utilization, payment calendar
8. **Build Tax page:** Contribution chart, deduction progress, log table
9. **Build Settings:** User profile, allocation targets, instrument management
10. **Test end-to-end:** Seed data → dashboard → rebalance → record → verify

---

## 15. Reminders

- This app is in SPANISH (UI text). Code is in English.
- All monetary values are in MXN unless explicitly noted.
- The user (Jorge) is the ONLY user. No multi-tenancy.
- The app does NOT connect to any external API for prices. Prices are manually input.
- The app does NOT execute trades. It only recommends and records.
- No authentication. No API keys. No secrets.
- If you are unsure about ANY financial rule, flag it with a `// TODO: VERIFY` comment rather than guessing.
- When in doubt about a library version or API, **search for the latest docs** rather than assuming.
