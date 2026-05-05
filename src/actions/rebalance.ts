"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { calculateRebalance, type Position } from "@/lib/rebalance";
import { CASH_TICKER } from "@/lib/constants";
import { splitContribution } from "@/lib/tax";

export interface RebalanceInput {
  prices: Record<string, number>;
  availableCash: number;
}

export async function runRebalance(input: RebalanceInput) {
  const positions = await prisma.portfolioPosition.findMany();

  // Apply submitted prices to active instruments (and persist them).
  const priceUpdates: Promise<unknown>[] = [];
  for (const p of positions) {
    const submitted = input.prices[p.ticker];
    if (typeof submitted === "number" && submitted > 0 && submitted !== p.currentPriceMXN) {
      priceUpdates.push(
        prisma.portfolioPosition.update({
          where: { id: p.id },
          data: { currentPriceMXN: submitted },
        }),
      );
      p.currentPriceMXN = submitted;
    }
  }
  if (priceUpdates.length) await Promise.all(priceUpdates);

  const cashPos = positions.find((p) => p.ticker === CASH_TICKER);
  const existingCash = cashPos ? cashPos.titles * cashPos.currentPriceMXN : 0;

  const simInput: Position[] = positions.map((p) => ({
    ticker: p.ticker,
    titles: p.titles,
    currentPriceMXN: p.currentPriceMXN,
    isLegacy: p.isLegacy,
    targetPct: p.targetPct,
  }));

  const result = calculateRebalance(simInput, input.availableCash, existingCash);
  return result;
}

/**
 * Records the rebalance result as actual transactions, updates positions,
 * moves remainder cash into GBMF2, and creates a TaxContribution row for
 * the current year/month.
 */
export async function recordRebalance(input: {
  lines: {
    ticker: string;
    titlesToBuy: number;
    pricePerTitle: number;
    commissionMXN: number;
  }[];
  cashIn: number;
  cashRemainder: number;
  notes?: string;
}) {
  const positions = await prisma.portfolioPosition.findMany();
  const byTicker = new Map(positions.map((p) => [p.ticker, p]));

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  // Tax split: figure out how much of cashIn is deductible.
  const taxConfig = await prisma.taxConfig.findUnique({ where: { year } });
  const existing = await prisma.taxContribution.findMany({
    where: { year },
  });
  const alreadyContributed = existing
    .filter((e) => e.month !== month)
    .reduce((s, e) => s + e.amountMXN, 0);
  const max = taxConfig?.maxDeduction ?? 0;
  const { deductible, excess } = splitContribution(
    input.cashIn,
    alreadyContributed,
    max,
  );

  await prisma.$transaction(async (tx) => {
    for (const line of input.lines) {
      if (line.titlesToBuy <= 0) continue;
      const pos = byTicker.get(line.ticker);
      if (!pos) continue;

      const grossCost = line.titlesToBuy * line.pricePerTitle;
      const totalCost = grossCost + line.commissionMXN;

      // New weighted-avg price (over titles owned, excluding commission).
      const newTitles = pos.titles + line.titlesToBuy;
      const newAvg =
        newTitles > 0
          ? (pos.titles * pos.avgPriceMXN + grossCost) / newTitles
          : pos.avgPriceMXN;

      await tx.portfolioPosition.update({
        where: { id: pos.id },
        data: {
          titles: newTitles,
          avgPriceMXN: newAvg,
          currentPriceMXN: line.pricePerTitle,
        },
      });

      await tx.transaction.create({
        data: {
          positionId: pos.id,
          type: "BUY",
          titles: line.titlesToBuy,
          pricePerTitle: line.pricePerTitle,
          commissionMXN: line.commissionMXN,
          totalCostMXN: totalCost,
          isDeductible: true,
          notes: input.notes ?? null,
        },
      });
    }

    // Move remainder into GBMF2 (cash).
    const cashPos = byTicker.get(CASH_TICKER);
    if (cashPos && input.cashRemainder > 0) {
      const price = cashPos.currentPriceMXN || 1;
      const newTitles = cashPos.titles + input.cashRemainder / price;
      await tx.portfolioPosition.update({
        where: { id: cashPos.id },
        data: { titles: Math.round(newTitles) },
      });
    }

    // Upsert this month's tax contribution.
    const prior = await tx.taxContribution.findUnique({
      where: { year_month: { year, month } },
    });
    if (prior) {
      await tx.taxContribution.update({
        where: { year_month: { year, month } },
        data: {
          amountMXN: prior.amountMXN + input.cashIn,
          deductibleAmount: prior.deductibleAmount + deductible,
          excessAmount: prior.excessAmount + excess,
        },
      });
    } else {
      await tx.taxContribution.create({
        data: {
          year,
          month,
          amountMXN: input.cashIn,
          deductibleAmount: deductible,
          excessAmount: excess,
        },
      });
    }
  });

  revalidatePath("/");
  revalidatePath("/rebalance");
  revalidatePath("/tax");
  return { ok: true };
}
