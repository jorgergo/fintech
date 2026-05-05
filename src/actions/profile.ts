"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updateProfile(data: {
  birthYear: number;
  retirementAge: number;
  monthlyContribution: number;
  taxRegime: string;
  hasW8Ben: boolean | null;
  commissionRate: number;
}) {
  const existing = await prisma.userProfile.findFirst();
  if (existing) {
    await prisma.userProfile.update({ where: { id: existing.id }, data });
  } else {
    await prisma.userProfile.create({ data });
  }
  revalidatePath("/settings");
  revalidatePath("/");
}

export async function resetDatabase() {
  await prisma.transaction.deleteMany();
  await prisma.taxContribution.deleteMany();
  await prisma.portfolioPosition.deleteMany();
  await prisma.creditCard.deleteMany();
  await prisma.taxConfig.deleteMany();
  await prisma.userProfile.deleteMany();
  revalidatePath("/", "layout");
}
