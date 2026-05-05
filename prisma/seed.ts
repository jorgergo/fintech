import { PrismaClient } from "../src/generated/prisma/index.js";
import {
  USER_PROFILE,
  TAX_RULES_2025,
  INITIAL_PORTFOLIO,
  INITIAL_CARDS,
} from "../src/lib/constants.ts";
import { calculateMaxDeduction } from "../src/lib/tax.ts";

const prisma = new PrismaClient();

async function main() {
  console.log("→ Seeding UserProfile...");
  const existingProfile = await prisma.userProfile.findFirst();
  if (!existingProfile) {
    await prisma.userProfile.create({
      data: {
        birthYear: USER_PROFILE.birthYear,
        retirementAge: USER_PROFILE.retirementAge,
        monthlyContribution: USER_PROFILE.monthlyContribution,
        taxRegime: USER_PROFILE.taxRegime,
        hasW8Ben: USER_PROFILE.hasW8Ben,
        commissionRate: USER_PROFILE.pprEffectiveCommission,
      },
    });
  }

  console.log("→ Seeding portfolio positions...");
  for (const p of INITIAL_PORTFOLIO) {
    await prisma.portfolioPosition.upsert({
      where: { ticker: p.ticker },
      update: {},
      create: {
        ticker: p.ticker,
        titles: p.titles,
        avgPriceMXN: p.avgPriceMXN,
        currentPriceMXN: p.currentPriceMXN,
        isLegacy: p.isLegacy,
        targetPct: p.targetPct,
        currency: p.currency,
        description: p.description,
      },
    });
  }

  console.log("→ Seeding credit cards...");
  for (const c of INITIAL_CARDS) {
    await prisma.creditCard.upsert({
      where: { name: c.name },
      update: {},
      create: {
        name: c.name,
        creditLimit: c.creditLimit,
        currentBalance: 0,
        cutDay: 0,
        paymentDay: 0,
        isSecured: c.isSecured,
        annualRate: 0,
      },
    });
  }

  console.log("→ Seeding TaxConfig 2025 + 2026...");
  const max2025 = calculateMaxDeduction(
    USER_PROFILE.annualTaxableIncome,
    TAX_RULES_2025.umaAnnual,
  );
  await prisma.taxConfig.upsert({
    where: { year: 2025 },
    update: {},
    create: {
      year: 2025,
      annualGrossIncome: USER_PROFILE.annualTotalComp,
      annualTaxableIncome: USER_PROFILE.annualTaxableIncome,
      marginalTaxRate: USER_PROFILE.estimatedMarginalTaxRate,
      umaAnnualValue: TAX_RULES_2025.umaAnnual,
      maxDeduction: max2025,
    },
  });

  // 2026 — placeholder, copies 2025 UMA. User updates when SAT publishes.
  await prisma.taxConfig.upsert({
    where: { year: 2026 },
    update: {},
    create: {
      year: 2026,
      annualGrossIncome: USER_PROFILE.annualTotalComp,
      annualTaxableIncome: USER_PROFILE.annualTaxableIncome,
      marginalTaxRate: USER_PROFILE.estimatedMarginalTaxRate,
      umaAnnualValue: TAX_RULES_2025.umaAnnual,
      maxDeduction: max2025,
    },
  });

  console.log("✓ Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
