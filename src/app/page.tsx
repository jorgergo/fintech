import Link from "next/link";
import { prisma } from "@/lib/db";
import PortfolioSummary from "@/components/dashboard/PortfolioSummary";
import TaxProgress from "@/components/dashboard/TaxProgress";
import CardAlerts from "@/components/dashboard/CardAlerts";
import SnapshotTable from "@/components/dashboard/SnapshotTable";
import PDFUploader from "@/components/upload/PDFUploader";
import { calculateTaxSummary } from "@/lib/tax";
import { getCardAlerts, totalUtilization } from "@/lib/cards";
import { formatMXN, formatSignedMXN, formatSignedPct } from "@/lib/format";
import { ArrowUpRight, TrendingUp, AlertTriangle } from "lucide-react";

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

  // Compute hero stats
  const enriched = positions.map((p) => {
    const value = p.titles * p.currentPriceMXN;
    const cost = p.titles * p.avgPriceMXN;
    return { value, cost, pl: value - cost, plPct: cost > 0 ? (value - cost) / cost : 0 };
  });
  const totalValue = enriched.reduce((s, p) => s + p.value, 0);
  const totalPL = enriched.reduce((s, p) => s + p.pl, 0);
  const totalCost = enriched.reduce((s, p) => s + p.cost, 0);
  const totalPLPct = totalCost > 0 ? totalPL / totalCost : 0;

  return (
    <div className="space-y-0">
      {/* ─── HERO: Portfolio Value ─── */}
      <section className="relative pb-10 mb-8 border-b-3 border-[var(--color-border)]">
        {/* Decorative geometric element */}
        <div className="absolute top-0 right-0 w-32 h-32 border-3 border-[var(--color-border)] opacity-20 -translate-y-4 translate-x-4 rotate-12" aria-hidden="true" />
        <div className="absolute top-8 right-12 w-16 h-16 bg-[var(--color-primary)] opacity-10 rotate-45" aria-hidden="true" />

        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs font-[var(--font-mono)] text-[var(--color-muted)] uppercase tracking-[0.2em] mb-2">
              Portafolio PPR · Valor total
            </p>
            <h1 className="font-[var(--font-heading)] text-6xl lg:text-7xl tracking-tight text-[var(--color-primary)] leading-none">
              {formatMXN(totalValue)}
            </h1>
            <div className="flex items-center gap-4 mt-4">
              <span className={`flex items-center gap-1.5 text-lg font-[var(--font-mono)] font-bold ${totalPL >= 0 ? "text-[var(--color-positive)]" : "text-[var(--color-negative)]"}`}>
                <TrendingUp size={18} strokeWidth={2.5} />
                {formatSignedMXN(totalPL)}
              </span>
              <span className={`text-sm font-[var(--font-mono)] px-2 py-0.5 border-2 ${totalPL >= 0 ? "border-[var(--color-positive)] text-[var(--color-positive)]" : "border-[var(--color-negative)] text-[var(--color-negative)]"}`}>
                {formatSignedPct(totalPLPct)}
              </span>
            </div>
          </div>
          <Link
            href="/rebalance"
            className="nb-btn px-5 py-3 bg-[var(--color-primary)] text-black font-[var(--font-heading)] text-sm uppercase group flex items-center gap-2"
          >
            Calcular compra del mes
            <ArrowUpRight size={16} strokeWidth={3} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* ─── BENTO GRID ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column: Positions snapshot + uploader */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Snapshot table — always visible */}
          <SnapshotTable />

          {/* PDF Uploader — compact */}
          <PDFUploader />
        </div>

        {/* Right column: Portfolio composition, tax, cards */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Portfolio composition — compact */}
          <section className="nb-card p-0">
            <div className="flex items-start justify-between p-4 border-b-3 border-[var(--color-border)]">
              <div>
                <h2 className="font-[var(--font-heading)] text-sm font-black uppercase tracking-wider text-[var(--color-text)]">
                  Composicion
                </h2>
                <p className="text-xs text-[var(--color-muted)] mt-0.5 font-[var(--font-mono)]">
                  Drift y asignacion
                </p>
              </div>
              <Link href="/rebalance" className="text-xs font-[var(--font-mono)] text-[var(--color-primary)] uppercase tracking-wider hover:underline cursor-pointer">
                Rebalancear →
              </Link>
            </div>
            <div className="p-4">
              <PortfolioSummary
                positions={positions}
                commissionsYTD={commissionsYTD}
              />
            </div>
          </section>

          {/* Tax progress */}
          <section className="nb-card p-0">
            <div className="p-4 border-b-3 border-[var(--color-border)]">
              <h2 className="font-[var(--font-heading)] text-sm font-black uppercase tracking-wider text-[var(--color-text)]">
                Deducciones {year}
              </h2>
              <p className="text-xs text-[var(--color-muted)] mt-0.5 font-[var(--font-mono)]">
                LISR Art. 151
              </p>
            </div>
            <div className="p-4">
              {summary ? (
                <TaxProgress summary={summary} />
              ) : (
                <div className="text-xs text-[var(--color-muted)] font-[var(--font-mono)]">
                  Configura el ano {year} en{" "}
                  <Link href="/tax" className="text-[var(--color-primary)] underline">
                    Deducciones
                  </Link>
                  .
                </div>
              )}
            </div>
          </section>

          {/* Card alerts */}
          <section className={`nb-card p-0 ${alerts.length > 0 ? "border-[var(--color-warning)]" : ""}`}>
            <div className="p-4 border-b-3 border-[var(--color-border)] flex items-center gap-2">
              {alerts.length > 0 && <AlertTriangle size={14} className="text-[var(--color-warning)]" />}
              <div>
                <h2 className="font-[var(--font-heading)] text-sm font-black uppercase tracking-wider text-[var(--color-text)]">
                  Tarjetas
                </h2>
                <p className="text-xs text-[var(--color-muted)] mt-0.5 font-[var(--font-mono)]">
                  {alerts.length > 0 ? `${alerts.length} alertas activas` : "Todo en orden"}
                </p>
              </div>
            </div>
            <div className="p-4">
              <CardAlerts
                alerts={alerts}
                totalBalance={util.totalBalance}
                totalLimit={util.totalLimit}
                utilization={util.pct}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
