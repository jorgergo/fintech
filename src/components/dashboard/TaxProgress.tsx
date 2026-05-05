import { ProgressBar } from "@/components/ui/ProgressBar";
import { Stat } from "@/components/ui/Stat";
import { formatMXN, formatPct } from "@/lib/format";
import type { TaxSummary } from "@/lib/tax";

export default function TaxProgress({ summary }: { summary: TaxSummary }) {
  return (
    <div className="space-y-5">
      <div>
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-xs text-[var(--color-muted)]">
            Deducción {summary.year}
          </span>
          <span className="text-xs tabular text-[var(--color-muted)]">
            {formatMXN(summary.deductibleAmount)} / {formatMXN(summary.maxDeduction)}
          </span>
        </div>
        <ProgressBar
          value={summary.deductibleAmount}
          max={summary.maxDeduction || 1}
          tone={summary.progressPct >= 1 ? "positive" : "accent"}
        />
        <div className="text-[11px] text-[var(--color-muted)] mt-1 tabular">
          {formatPct(summary.progressPct)} del tope anual
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Stat
          label="Devolución estimada"
          value={formatMXN(summary.estimatedRefund)}
          tone="positive"
        />
        <Stat
          label="Faltante para tope"
          value={formatMXN(summary.remainingDeduction)}
          hint={
            summary.monthlyTargetToMax > 0
              ? `${formatMXN(summary.monthlyTargetToMax)}/mes restante`
              : "Tope alcanzado"
          }
        />
        <Stat
          label="Aportado total"
          value={formatMXN(summary.totalContributed)}
        />
        <Stat
          label="Excedente no deducible"
          value={formatMXN(summary.excessAmount)}
          tone={summary.excessAmount > 0 ? "warning" : "neutral"}
        />
      </div>
    </div>
  );
}
