"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { calculateMaxDeduction, splitContribution } from "@/lib/tax";

export async function upsertTaxConfig(data: {
  year: number;
  annualGrossIncome: number;
  annualTaxableIncome: number;
  marginalTaxRate: number;
  umaAnnualValue: number;
}) {
  const maxDeduction = calculateMaxDeduction(
    data.annualTaxableIncome,
    data.umaAnnualValue,
  );
  await prisma.taxConfig.upsert({
    where: { year: data.year },
    update: { ...data, maxDeduction },
    create: { ...data, maxDeduction },
  });
  revalidatePath("/tax");
  revalidatePath("/");

  // Recompute deductible/excess for all contributions in that year.
  const contribs = await prisma.taxContribution.findMany({
    where: { year: data.year },
    orderBy: { month: "asc" },
  });
  let acc = 0;
  for (const c of contribs) {
    const split = splitContribution(c.amountMXN, acc, maxDeduction);
    await prisma.taxContribution.update({
      where: { id: c.id },
      data: {
        deductibleAmount: split.deductible,
        excessAmount: split.excess,
      },
    });
    acc += c.amountMXN;
  }
}

export async function upsertContribution(data: {
  year: number;
  month: number;
  amountMXN: number;
  notes?: string;
}) {
  const cfg = await prisma.taxConfig.findUnique({ where: { year: data.year } });
  const max = cfg?.maxDeduction ?? 0;
  const others = await prisma.taxContribution.findMany({
    where: { year: data.year, NOT: { month: data.month } },
  });
  const already = others.reduce((s, c) => s + c.amountMXN, 0);
  const { deductible, excess } = splitContribution(data.amountMXN, already, max);

  await prisma.taxContribution.upsert({
    where: { year_month: { year: data.year, month: data.month } },
    update: {
      amountMXN: data.amountMXN,
      deductibleAmount: deductible,
      excessAmount: excess,
      notes: data.notes ?? null,
    },
    create: {
      year: data.year,
      month: data.month,
      amountMXN: data.amountMXN,
      deductibleAmount: deductible,
      excessAmount: excess,
      notes: data.notes ?? null,
    },
  });
  revalidatePath("/tax");
  revalidatePath("/");
}

export async function deleteContribution(id: number) {
  await prisma.taxContribution.delete({ where: { id } });
  revalidatePath("/tax");
}
