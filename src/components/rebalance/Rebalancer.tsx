"use client";

import { useState, useTransition } from "react";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  formatMXN,
  formatPct,
  formatInt,
  formatDecimal,
} from "@/lib/format";
import { CASH_TICKER } from "@/lib/constants";
import { runRebalance, recordRebalance } from "@/actions/rebalance";
import type { RebalanceResult } from "@/lib/rebalance";

interface PositionInput {
  id: number;
  ticker: string;
  titles: number;
  currentPriceMXN: number;
  isLegacy: boolean;
  targetPct: number;
  currency: string;
}

export default function Rebalancer({
  positions,
  defaultMonthlyContribution,
}: {
  positions: PositionInput[];
  defaultMonthlyContribution: number;
}) {
  const cashPos = positions.find((p) => p.ticker === CASH_TICKER);
  const existingCash = cashPos ? cashPos.titles * cashPos.currentPriceMXN : 0;

  const [prices, setPrices] = useState<Record<string, string>>(() => {
    const out: Record<string, string> = {};
    for (const p of positions) {
      if (!p.isLegacy && p.ticker !== CASH_TICKER) {
        out[p.ticker] = p.currentPriceMXN > 0 ? String(p.currentPriceMXN) : "";
      }
    }
    return out;
  });
  const [usdRate, setUsdRate] = useState<string>("");
  const [usdPrices, setUsdPrices] = useState<Record<string, string>>({});
  const [cashIn, setCashIn] = useState<string>(String(defaultMonthlyContribution));
  const [result, setResult] = useState<RebalanceResult | null>(null);
  const [isPending, startTransition] = useTransition();
  const [recorded, setRecorded] = useState(false);

  function applyUSDRate() {
    const rate = Number(usdRate);
    if (!rate || rate <= 0) return;
    const out: Record<string, string> = { ...prices };
    for (const [t, usd] of Object.entries(usdPrices)) {
      const v = Number(usd);
      if (v > 0) out[t] = (v * rate).toFixed(2);
    }
    setPrices(out);
  }

  function calculate() {
    setRecorded(false);
    const numericPrices: Record<string, number> = {};
    for (const [t, v] of Object.entries(prices)) {
      const n = Number(v);
      if (n > 0) numericPrices[t] = n;
    }
    startTransition(async () => {
      const r = await runRebalance({
        prices: numericPrices,
        availableCash: Number(cashIn) || 0,
      });
      setResult(r);
    });
  }

  function record() {
    if (!result) return;
    startTransition(async () => {
      await recordRebalance({
        lines: result.lines
          .filter((l) => l.titlesToBuy > 0)
          .map((l) => ({
            ticker: l.ticker,
            titlesToBuy: l.titlesToBuy,
            pricePerTitle: l.pricePerTitle,
            commissionMXN: l.commissionMXN,
          })),
        cashIn: result.totals.cashIn,
        cashRemainder: result.totals.cashRemainder,
      });
      setRecorded(true);
    });
  }

  const activePositions = positions.filter(
    (p) => !p.isLegacy && p.ticker !== CASH_TICKER,
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader
          title="Datos de entrada"
          subtitle="Captura los precios actuales en MXN. Si lo prefieres, ingresa precios en USD y el tipo de cambio."
        />
        <CardBody className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs text-[var(--color-muted)]">
                Aportación de este mes (MXN)
              </span>
              <input
                type="number"
                step="0.01"
                value={cashIn}
                onChange={(e) => setCashIn(e.target.value)}
                className="mt-1 w-full px-3 py-2 rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] text-sm tabular focus:outline-none focus:border-[var(--color-accent)]"
              />
            </label>
            <div>
              <span className="text-xs text-[var(--color-muted)]">
                Efectivo existente en PPR (GBMF2 + liquidez)
              </span>
              <div className="mt-1 px-3 py-2 rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] text-sm tabular text-[var(--color-muted)]">
                {formatMXN(existingCash)}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between mb-2 gap-3 flex-wrap">
              <div className="text-xs text-[var(--color-muted)] uppercase tracking-wider">
                Precios (MXN por título)
              </div>
              <div className="flex items-end gap-2">
                <label className="block">
                  <span className="text-[10px] text-[var(--color-muted)]">
                    USD/MXN (opcional)
                  </span>
                  <input
                    type="number"
                    step="0.01"
                    value={usdRate}
                    onChange={(e) => setUsdRate(e.target.value)}
                    placeholder="20.00"
                    className="mt-0.5 w-28 px-2 py-1 rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs tabular"
                  />
                </label>
                <button
                  type="button"
                  onClick={applyUSDRate}
                  className="px-3 py-1.5 rounded-md text-xs bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:border-[var(--color-accent)]"
                >
                  Convertir USD → MXN
                </button>
              </div>
            </div>
            <div className="space-y-2">
              {activePositions.map((p) => (
                <div
                  key={p.ticker}
                  className="grid grid-cols-12 gap-2 items-center"
                >
                  <div className="col-span-3 text-sm font-medium">
                    {p.ticker}
                  </div>
                  <div className="col-span-3 text-xs text-[var(--color-muted)] tabular">
                    {formatPct(p.targetPct)} objetivo · {formatInt(p.titles)} títulos
                  </div>
                  <label className="col-span-3 block">
                    <span className="text-[10px] text-[var(--color-muted)]">USD</span>
                    <input
                      type="number"
                      step="0.01"
                      value={usdPrices[p.ticker] ?? ""}
                      onChange={(e) =>
                        setUsdPrices((s) => ({ ...s, [p.ticker]: e.target.value }))
                      }
                      placeholder="0.00"
                      className="mt-0.5 w-full px-2 py-1.5 rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs tabular"
                    />
                  </label>
                  <label className="col-span-3 block">
                    <span className="text-[10px] text-[var(--color-muted)]">MXN</span>
                    <input
                      type="number"
                      step="0.01"
                      value={prices[p.ticker] ?? ""}
                      onChange={(e) =>
                        setPrices((s) => ({ ...s, [p.ticker]: e.target.value }))
                      }
                      placeholder="0.00"
                      className="mt-0.5 w-full px-2 py-1.5 rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs tabular focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              onClick={calculate}
              disabled={isPending}
              className="px-4 py-2 rounded-md bg-[var(--color-accent)] text-white text-sm font-medium hover:opacity-90 disabled:opacity-50"
            >
              {isPending ? "Calculando..." : "Calcular compra óptima"}
            </button>
          </div>
        </CardBody>
      </Card>

      {result && <ResultCard result={result} onRecord={record} recorded={recorded} pending={isPending} />}
    </div>
  );
}

function ResultCard({
  result,
  onRecord,
  recorded,
  pending,
}: {
  result: RebalanceResult;
  onRecord: () => void;
  recorded: boolean;
  pending: boolean;
}) {
  const buys = result.lines.filter((l) => l.titlesToBuy > 0);
  return (
    <Card>
      <CardHeader
        title="Recomendación"
        subtitle="Whole-title greedy, balanceando contra el objetivo. Comisión 0.87% incluida."
        action={
          <button
            onClick={onRecord}
            disabled={pending || recorded || buys.length === 0}
            className="px-3 py-1.5 rounded-md text-xs font-medium bg-emerald-600 text-white hover:opacity-90 disabled:opacity-50"
          >
            {recorded ? "✓ Registrado" : "Registrar esta compra"}
          </button>
        }
      />
      <CardBody className="space-y-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
              Aportación
            </div>
            <div className="tabular mt-0.5">{formatMXN(result.totals.cashIn)}</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
              Invertido
            </div>
            <div className="tabular mt-0.5">{formatMXN(result.totals.spent)}</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
              Comisiones
            </div>
            <div className="tabular mt-0.5 text-amber-400">
              {formatMXN(result.totals.commissions)}
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
              Remanente → GBMF2
            </div>
            <div className="tabular mt-0.5">
              {formatMXN(result.totals.cashRemainder)}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm tabular">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-[var(--color-muted)] border-b border-[var(--color-border)]">
                <th className="py-2 pr-3">Ticker</th>
                <th className="py-2 pr-3 text-right">Comprar</th>
                <th className="py-2 pr-3 text-right">Precio</th>
                <th className="py-2 pr-3 text-right">Bruto</th>
                <th className="py-2 pr-3 text-right">Comisión</th>
                <th className="py-2 pr-3 text-right">Total</th>
                <th className="py-2 pr-3 text-right">Títulos finales</th>
                <th className="py-2 pr-3 text-right">% antes</th>
                <th className="py-2 pr-3 text-right">% después</th>
                <th className="py-2 pr-3 text-right">Drift</th>
              </tr>
            </thead>
            <tbody>
              {result.lines.map((l) => {
                const buyTone =
                  l.titlesToBuy > 0
                    ? "text-emerald-400"
                    : "text-[var(--color-muted)]";
                const driftAbs = Math.abs(l.drift);
                const driftTone =
                  l.targetPct === 0
                    ? "text-[var(--color-muted)]"
                    : driftAbs < 0.02
                      ? "text-emerald-400"
                      : driftAbs < 0.05
                        ? "text-amber-400"
                        : "text-red-400";
                return (
                  <tr
                    key={l.ticker}
                    className="border-b border-[var(--color-border)]/50"
                  >
                    <td className="py-2 pr-3 font-medium">{l.ticker}</td>
                    <td className={`py-2 pr-3 text-right ${buyTone}`}>
                      {l.titlesToBuy > 0 ? `+${formatInt(l.titlesToBuy)}` : "—"}
                    </td>
                    <td className="py-2 pr-3 text-right">
                      {formatDecimal(l.pricePerTitle)}
                    </td>
                    <td className="py-2 pr-3 text-right">
                      {l.grossCost > 0 ? formatMXN(l.grossCost) : "—"}
                    </td>
                    <td className="py-2 pr-3 text-right text-amber-400">
                      {l.commissionMXN > 0 ? formatMXN(l.commissionMXN) : "—"}
                    </td>
                    <td className="py-2 pr-3 text-right">
                      {l.totalCost > 0 ? formatMXN(l.totalCost) : "—"}
                    </td>
                    <td className="py-2 pr-3 text-right">
                      {formatInt(l.newTitles)}
                    </td>
                    <td className="py-2 pr-3 text-right text-[var(--color-muted)]">
                      {formatPct(l.currentPct)}
                    </td>
                    <td className="py-2 pr-3 text-right">
                      {formatPct(l.newPct)}
                    </td>
                    <td className={`py-2 pr-3 text-right ${driftTone}`}>
                      {l.targetPct === 0
                        ? "—"
                        : `${l.drift > 0 ? "+" : ""}${formatPct(l.drift)}`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <AllocationCompare lines={result.lines} />
      </CardBody>
    </Card>
  );
}

function AllocationCompare({
  lines,
}: {
  lines: RebalanceResult["lines"];
}) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)] mb-2">
        Asignación: antes → después
      </div>
      <div className="space-y-2">
        {lines.map((l) => (
          <div key={l.ticker} className="space-y-1">
            <div className="flex items-center justify-between text-xs tabular">
              <span className="font-medium">{l.ticker}</span>
              <span className="text-[var(--color-muted)]">
                {formatPct(l.currentPct)} → {formatPct(l.newPct)}
                {l.targetPct > 0 && (
                  <Badge tone="neutral" className="ml-2">
                    obj {formatPct(l.targetPct)}
                  </Badge>
                )}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <ProgressBar value={l.currentPct} tone="warning" />
              <ProgressBar
                value={l.newPct}
                tone={
                  l.targetPct === 0
                    ? "accent"
                    : Math.abs(l.newPct - l.targetPct) < 0.02
                      ? "positive"
                      : "warning"
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
