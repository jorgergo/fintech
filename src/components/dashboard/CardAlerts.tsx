import { Badge } from "@/components/ui/Badge";
import { Stat } from "@/components/ui/Stat";
import { formatMXN, formatPct } from "@/lib/format";
import type { CardAlert } from "@/lib/cards";

export default function CardAlerts({
  alerts,
  totalBalance,
  totalLimit,
  utilization,
}: {
  alerts: CardAlert[];
  totalBalance: number;
  totalLimit: number;
  utilization: number;
}) {
  const utilTone =
    utilization > 0.5 ? "negative" : utilization > 0.3 ? "warning" : "positive";

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <Stat
          label="Utilización global"
          value={formatPct(utilization)}
          hint={`${formatMXN(totalBalance)} / ${formatMXN(totalLimit)}`}
          tone={utilTone}
        />
        <Stat label="Alertas activas" value={alerts.length} />
      </div>
      <div className="space-y-2">
        {alerts.length === 0 && (
          <div className="text-xs text-[var(--color-muted)]">
            Sin alertas — todo en orden.
          </div>
        )}
        {alerts.slice(0, 5).map((a, i) => {
          const tone =
            a.severity === "danger"
              ? "negative"
              : a.severity === "warning"
                ? "warning"
                : "accent";
          return (
            <div
              key={i}
              className="flex items-center justify-between gap-3 text-xs px-3 py-2 rounded-md bg-[var(--color-surface-2)]"
            >
              <div className="flex items-center gap-2 min-w-0">
                <Badge tone={tone}>{a.cardName}</Badge>
                <span className="truncate text-[var(--color-text)]">
                  {a.message}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
