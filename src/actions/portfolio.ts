"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updatePositionPrice(id: number, currentPriceMXN: number) {
  await prisma.portfolioPosition.update({
    where: { id },
    data: { currentPriceMXN },
  });
  revalidatePath("/");
  revalidatePath("/rebalance");
  revalidatePath("/settings");
}

export async function updatePositionTargets(
  updates: { id: number; targetPct: number; isLegacy: boolean }[],
) {
  await prisma.$transaction(
    updates.map((u) =>
      prisma.portfolioPosition.update({
        where: { id: u.id },
        data: { targetPct: u.targetPct, isLegacy: u.isLegacy },
      }),
    ),
  );
  revalidatePath("/settings");
  revalidatePath("/rebalance");
  revalidatePath("/");
}

export async function upsertPosition(data: {
  ticker: string;
  titles: number;
  avgPriceMXN: number;
  currentPriceMXN: number;
  isLegacy: boolean;
  targetPct: number;
  currency: string;
  description?: string;
}) {
  await prisma.portfolioPosition.upsert({
    where: { ticker: data.ticker },
    update: data,
    create: data,
  });
  revalidatePath("/settings");
  revalidatePath("/");
}

export async function deletePosition(id: number) {
  await prisma.portfolioPosition.delete({ where: { id } });
  revalidatePath("/settings");
  revalidatePath("/");
}
