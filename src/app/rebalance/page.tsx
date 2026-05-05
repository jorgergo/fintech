import { prisma } from "@/lib/db";
import Rebalancer from "@/components/rebalance/Rebalancer";
import { USER_PROFILE } from "@/lib/constants";

export const dynamic = "force-dynamic";

export default async function RebalancePage() {
  const positions = await prisma.portfolioPosition.findMany({
    orderBy: { ticker: "asc" },
  });
  const profile = await prisma.userProfile.findFirst();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-[var(--font-heading)] text-3xl uppercase tracking-tight">
          Rebalanceo del PPR
        </h2>
        <p className="text-sm text-[var(--color-muted)] font-[var(--font-mono)] mt-2 uppercase tracking-wider">
          Calcula cuantos titulos comprar este mes para acercarte a tu objetivo 60/40.
        </p>
      </div>
      <Rebalancer
        positions={positions}
        defaultMonthlyContribution={
          profile?.monthlyContribution ?? USER_PROFILE.monthlyContribution
        }
      />
    </div>
  );
}
