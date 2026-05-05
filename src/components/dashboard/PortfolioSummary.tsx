"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { formatMXN, formatPct, formatSignedMXN, formatSignedPct } from "@/lib/format";
import { Stat } from "@/components/ui/Stat";

interface PositionView {
  ticker: string;
  titles: number;
  avgPriceMXN: number;
  currentPriceMXN: number;
  isLegacy: boolean;
  targetPct: number;
}

const COLORS = ["#5b9dff", "#22c55e", "#f59e0b", "#a855f7", "#ec4899", "#06b6d4"];

export default function PortfolioSummary({
  positions,
  commissionsYTD,
}: {
  positions: PositionView[];
  commissionsYTD: number;
}) {
  const enriched = positions.map((p) => {
    const value = p.titles * p.currentPriceMXN;
    const cost = p.titles * p.avgPriceMXN;
    const pl = value - cost;
    const plPct = cost > 0 ? pl / cost : 0;
    return { ...p, value, cost, pl, plPct };
  });

  const totalValue = enriched.reduce((s, p) => s + p.value, 0);
  const totalCost = enriched.reduce((s, p) => s + p.cost, 0);
  const totalPL = totalValue - totalCost;
  const totalPLPct = totalCost > 0 ? totalPL / totalCost : 0;

  const chartData = enriched
    .filter((p) => p.value > 0)
    .map((p) => ({
      name: p.ticker,
      value: p.value,
      pct: totalValue > 0 ? p.value / totalValue : 0,
    }));

  // Drift from target (only for active non-legacy with target > 0)
  const activeValue = enriched
    .filter((p) => !p.isLegacy && p.targetPct > 0)
    .reduce((s, p) => s + p.value, 0);
  const drift = enriched
    .filter((p) => !p.isLegacy && p.targetPct > 0)
    .map((p) => {
      const actual = activeValue > 0 ? p.value / activeValue : 0;
      return { ticker: p.ticker, actual, target: p.targetPct, drift: actual - p.targetPct };
    });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="grid grid-cols-2 gap-6">
        <Stat label="Valor del portafolio" value={formatMXN(totalValue)} />
        <Stat
          label="Ganancia / pérdida"
          value={formatSignedMXN(totalPL)}
          hint={formatSignedPct(totalPLPct)}
          tone={totalPL >= 0 ? "positive" : "negative"}
        />
        <Stat
          label="Comisiones (año en curso)"
          value={formatMXN(commissionsYTD)}
          tone="warning"
        />
        <Stat
          label="Posiciones"
          value={enriched.filter((p) => p.titles > 0).length}
        />
        <div className="col-span-2">
          <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)] mb-2">
            Drift vs objetivo (activos)
          </div>
          <div className="space-y-2">
            {drift.length === 0 && (
              <div className="text-xs text-[var(--color-muted)]">
                Sin instrumentos activos con objetivo configurado.
              </div>
            )}
            {drift.map((d) => {
              const tone =
                Math.abs(d.drift) < 0.02
                  ? "positive"
                  : Math.abs(d.drift) < 0.05
                    ? "warning"
                    : "negative";
              const color =
                tone === "positive"
                  ? "var(--color-positive)"
                  : tone === "warning"
                    ? "var(--color-warning)"
                    : "var(--color-negative)";
              return (
                <div key={d.ticker} className="flex items-center gap-3 text-xs tabular">
                  <div className="w-20 truncate text-[var(--color-muted)]">{d.ticker}</div>
                  <div className="flex-1 h-1.5 bg-[var(--color-surface-2)] rounded-full overflow-hidden">
                    <div
                      className="h-full"
                      style={{
                        width: `${Math.min(100, d.actual * 100)}%`,
                        background: color,
                      }}
                    />
                  </div>
                  <div className="w-16 text-right">{formatPct(d.actual)}</div>
                  <div className="w-16 text-right text-[var(--color-muted)]">
                    obj {formatPct(d.target)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-64 -mx-2 -mb-2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={2}
              stroke="var(--color-surface)"
            >
              {chartData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "var(--color-surface-2)",
                border: "1px solid var(--color-border)",
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v, _n, item) => {
                const pct = ((item as { payload?: { pct: number } }).payload as { pct: number }).pct;
                return [`${formatMXN(Number(v))} (${formatPct(pct)})`, (item as { payload?: { name: string } }).payload?.name];
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 px-2 text-[11px]">
          {chartData.map((d, i) => (
            <div key={d.name} className="flex items-center gap-1.5 tabular">
              <span
                className="inline-block w-2 h-2 rounded-sm"
                style={{ background: COLORS[i % COLORS.length] }}
              />
              <span className="text-[var(--color-muted)]">{d.name}</span>
              <span>{formatPct(d.pct)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
