import { GBM_COMMISSIONS, CASH_TICKER } from "./constants";

export interface Position {
  ticker: string;
  titles: number;
  currentPriceMXN: number;
  isLegacy: boolean;
  targetPct: number;
}

export interface RebalanceLine {
  ticker: string;
  currentTitles: number;
  titlesToBuy: number;
  pricePerTitle: number;
  grossCost: number;
  commissionMXN: number;
  totalCost: number;
  newTitles: number;
  currentPct: number;
  newPct: number;
  targetPct: number;
  drift: number;
}

export interface RebalanceResult {
  lines: RebalanceLine[];
  totals: {
    cashIn: number;
    spent: number;
    commissions: number;
    cashRemainder: number;
    portfolioValueBefore: number;
    portfolioValueAfter: number;
  };
}

/**
 * Greedy whole-title rebalancer.
 * - Sums portfolio value (existing positions + new + existing cash) as the denominator.
 * - At each step, picks the active (non-legacy, non-cash) instrument with the largest
 *   underweight drift whose next whole title still fits the remaining cash budget
 *   (price × (1 + commission)).
 * - Stops when no active instrument can be afforded.
 * - Remainder stays in cash (GBMF2).
 */
export function calculateRebalance(
  positions: Position[],
  availableCash: number,
  existingCash: number,
): RebalanceResult {
  const totalCash = availableCash + existingCash;
  const commissionRate = GBM_COMMISSIONS.effectiveRate;

  const positionsValue = positions.reduce(
    (sum, p) => sum + p.titles * p.currentPriceMXN,
    0,
  );
  const portfolioValueBefore = positionsValue + existingCash;
  const denominator = positionsValue + totalCash;

  // Active = non-legacy, has target, not cash, has a valid price.
  const activeTickers = new Set(
    positions
      .filter(
        (p) =>
          !p.isLegacy &&
          p.targetPct > 0 &&
          p.ticker !== CASH_TICKER &&
          p.currentPriceMXN > 0,
      )
      .map((p) => p.ticker),
  );

  const sim = new Map<string, number>();
  for (const t of activeTickers) sim.set(t, 0);

  let remainingCash = totalCash;

  while (true) {
    let best: { ticker: string; drift: number; cost: number } | null = null;

    for (const p of positions) {
      if (!activeTickers.has(p.ticker)) continue;
      const bought = sim.get(p.ticker) ?? 0;
      const titles = p.titles + bought;
      const value = titles * p.currentPriceMXN;
      const currentPct = denominator > 0 ? value / denominator : 0;
      const drift = p.targetPct - currentPct;
      const cost = p.currentPriceMXN * (1 + commissionRate);

      if (cost > remainingCash) continue;
      if (!best || drift > best.drift) {
        best = { ticker: p.ticker, drift, cost };
      }
    }

    if (!best) break;
    // Only buy if instrument is underweight; if everyone is at/over target, stop.
    if (best.drift <= 0) break;

    sim.set(best.ticker, (sim.get(best.ticker) ?? 0) + 1);
    remainingCash -= best.cost;
  }

  // Build lines (include all positions, even legacy and cash, for display).
  let totalSpent = 0;
  let totalCommissions = 0;

  const lines: RebalanceLine[] = positions.map((p) => {
    const titlesToBuy = sim.get(p.ticker) ?? 0;
    const grossCost = titlesToBuy * p.currentPriceMXN;
    const commissionMXN = grossCost * (p.ticker === CASH_TICKER ? 0 : commissionRate);
    const totalCost = grossCost + commissionMXN;
    const newTitles = p.titles + titlesToBuy;

    totalSpent += grossCost;
    totalCommissions += commissionMXN;

    const currentValue = p.titles * p.currentPriceMXN;
    const newValue = newTitles * p.currentPriceMXN;
    const currentPct = denominator > 0 ? currentValue / denominator : 0;
    const newPct = denominator > 0 ? newValue / denominator : 0;

    return {
      ticker: p.ticker,
      currentTitles: p.titles,
      titlesToBuy,
      pricePerTitle: p.currentPriceMXN,
      grossCost,
      commissionMXN,
      totalCost,
      newTitles,
      currentPct,
      newPct,
      targetPct: p.targetPct,
      drift: newPct - p.targetPct,
    };
  });

  const cashRemainder = remainingCash;
  const portfolioValueAfter =
    positions.reduce(
      (sum, p) => sum + (p.titles + (sim.get(p.ticker) ?? 0)) * p.currentPriceMXN,
      0,
    ) + cashRemainder;

  return {
    lines,
    totals: {
      cashIn: availableCash,
      spent: totalSpent,
      commissions: totalCommissions,
      cashRemainder,
      portfolioValueBefore,
      portfolioValueAfter,
    },
  };
}
