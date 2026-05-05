"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updateCard(
  id: number,
  data: Partial<{
    currentBalance: number;
    creditLimit: number;
    cutDay: number;
    paymentDay: number;
    annualRate: number;
    isSecured: boolean;
    notes: string | null;
  }>,
) {
  await prisma.creditCard.update({ where: { id }, data });
  revalidatePath("/cards");
  revalidatePath("/");
}

export async function createCard(data: {
  name: string;
  creditLimit: number;
  isSecured?: boolean;
}) {
  await prisma.creditCard.create({
    data: {
      name: data.name,
      creditLimit: data.creditLimit,
      isSecured: data.isSecured ?? false,
    },
  });
  revalidatePath("/cards");
}

export async function deleteCard(id: number) {
  await prisma.creditCard.delete({ where: { id } });
  revalidatePath("/cards");
}
