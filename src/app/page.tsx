import Link from "next/link";
import { prisma } from "@/lib/db";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import PortfolioSummary from "@/components/dashboard/PortfolioSummary";
import TaxProgress from "@/components/dashboard/TaxProgress";
import CardAlerts from "@/components/dashboard/CardAlerts";
import PDFUploader from "@/components/upload/PDFUploader";
import { calculateTaxSummary } from "@/lib/tax";
import { getCardAlerts, totalUtilization } from "@/lib/cards";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  const [positions, cards, taxConfig, contributions, txns] = await Promise.all([
    prisma.portfolioPosition.findMany({ orderBy: { ticker: "asc" } }),
    prisma.creditCard.findMany({ orderBy: { name: "asc" } }),
    prisma.taxConfig.findUnique({ where: { year } }),
    prisma.taxContribution.findMany({ where: { year } }),
    prisma.transaction.findMany({
      where: { executedAt: { gte: new Date(year, 0, 1) } },
    }),
  ]);

  const commissionsYTD = txns.reduce((s, t) => s + t.commissionMXN, 0);

  const summary = taxConfig
    ? calculateTaxSummary(
        contributions.map((c) => ({ month: c.month, amount: c.amountMXN })),
        {
          year,
          annualGrossIncome: taxConfig.annualGrossIncome,
          annualTaxableIncome: taxConfig.annualTaxableIncome,
          marginalTaxRate: taxConfig.marginalTaxRate,
          umaAnnualValue: taxConfig.umaAnnualValue,
          maxDeduction: taxConfig.maxDeduction,
        },
        month,
      )
    : null;

  const alerts = getCardAlerts(cards, now);
  const util = totalUtilization(cards);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Hola, Jorge.
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Resumen de tu PPR, deducciones y tarjetas.
          </p>
        </div>
        <Link
          href="/rebalance"
          className="px-4 py-2 rounded-md bg-[var(--color-accent)] text-white text-sm font-medium hover:opacity-90"
        >
          Calcular compra del mes →
        </Link>
      </div>

      <Card>
        <CardHeader
          title="Portafolio PPR"
          subtitle="Asignación, valor y deriva contra objetivo 60/40"
        />
        <CardBody>
          <PortfolioSummary
            positions={positions}
            commissionsYTD={commissionsYTD}
          />
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader
            title="Deducciones fiscales"
            subtitle={`Avance del año ${year} · LISR Art. 151`}
          />
          <CardBody>
            {summary ? (
              <TaxProgress summary={summary} />
            ) : (
              <div className="text-xs text-[var(--color-muted)]">
                Configura el año {year} en{" "}
                <Link href="/tax" className="underline">
                  Deducciones
                </Link>
                .
              </div>
            )}
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            title="Tarjetas de crédito"
            subtitle="Alertas de pago y utilización"
          />
          <CardBody>
            <CardAlerts
              alerts={alerts}
              totalBalance={util.totalBalance}
              totalLimit={util.totalLimit}
              utilization={util.pct}
            />
          </CardBody>
        </Card>
      </div>

      {/* PDF Upload */}
      <PDFUploader />
    </div>
  );
}
