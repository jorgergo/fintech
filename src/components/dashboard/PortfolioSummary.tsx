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

const COLORS = ["#ffd93d", "#a3e635", "#c084fc", "#ff6b6b", "#f59e0b", "#06b6d4"];

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
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <Stat label="Valor" value={formatMXN(totalValue)} />
        <Stat
          label="G/P"
          value={formatSignedMXN(totalPL)}
          hint={formatSignedPct(totalPLPct)}
          tone={totalPL >= 0 ? "positive" : "negative"}
        />
        <Stat
          label="Comisiones (YTD)"
          value={formatMXN(commissionsYTD)}
          tone="warning"
        />
        <Stat
          label="Posiciones"
          value={enriched.filter((p) => p.titles > 0).length}
        />
      </div>

      <div className="h-48" role="img" aria-label="Grafica de asignacion del portafolio">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={40}
              outerRadius={70}
              paddingAngle={2}
              stroke="var(--color-surface)"
              strokeWidth={3}
            >
              {chartData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "var(--color-surface-2)",
                border: "3px solid var(--color-border)",
                borderRadius: 0,
                fontSize: 11,
                fontFamily: "Space Mono, monospace",
                boxShadow: "3px 3px 0px #000000",
              }}
              formatter={(v, _n, item) => {
                const pct = ((item as { payload?: { pct: number } }).payload as { pct: number }).pct;
                return [`${formatMXN(Number(v))} (${formatPct(pct)})`, (item as { payload?: { name: string } }).payload?.name];
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-[var(--font-mono)]">
          {chartData.map((d, i) => (
            <div key={d.name} className="flex items-center gap-1 tabular">
              <span
                className="inline-block w-2.5 h-2.5 border-2 border-black"
                style={{ background: COLORS[i % COLORS.length] }}
                aria-hidden="true"
              />
              <span className="text-[var(--color-muted)]">{d.name}</span>
              <span className="font-bold">{formatPct(d.pct)}</span>
            </div>
          ))}
        </div>
      </div>

      {drift.length > 0 && (
        <div>
          <div className="text-[10px] uppercase tracking-wider text-[var(--color-muted)] font-[var(--font-mono)] font-bold mb-2">
            Drift vs objetivo
          </div>
          <div className="space-y-2">
            {drift.map((d) => {
              const tone =
                Math.abs(d.drift) < 0.02
                  ? "var(--color-positive)"
                  : Math.abs(d.drift) < 0.05
                    ? "var(--color-warning)"
                    : "var(--color-negative)";
              return (
                <div key={d.ticker} className="flex items-center gap-2 text-[10px] tabular font-[var(--font-mono)]">
                  <div className="w-16 truncate text-[var(--color-muted)] font-bold">{d.ticker}</div>
                  <div className="flex-1 h-2.5 border-2 border-[var(--color-border)] bg-[var(--color-surface-2)] overflow-hidden">
                    <div
                      className="h-full"
                      style={{
                        width: `${Math.min(100, d.actual * 100)}%`,
                        background: tone,
                      }}
                    />
                  </div>
                  <div className="w-12 text-right">{formatPct(d.actual)}</div>
                  <div className="w-14 text-right text-[var(--color-muted)]">
                    obj {formatPct(d.target)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
