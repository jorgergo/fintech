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
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Rebalanceo del PPR
        </h2>
        <p className="text-sm text-[var(--color-muted)] mt-1">
          Calcula cuántos títulos comprar este mes para acercarte a tu objetivo
          60/40 sin pasarte del efectivo.
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
