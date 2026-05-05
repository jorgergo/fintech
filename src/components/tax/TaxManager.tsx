"use client";

import { useState, useTransition } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Stat } from "@/components/ui/Stat";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { formatMXN, formatPct, monthShortES, monthNameES } from "@/lib/format";
import { calculateTaxSummary } from "@/lib/tax";
import { upsertTaxConfig, upsertContribution, deleteContribution } from "@/actions/tax";

interface TaxConfig {
  year: number;
  annualGrossIncome: number;
  annualTaxableIncome: number;
  marginalTaxRate: number;
  umaAnnualValue: number;
  maxDeduction: number;
}

interface Contribution {
  id: number;
  year: number;
  month: number;
  amountMXN: number;
  deductibleAmount: number;
  excessAmount: number;
  notes: string | null;
}

export default function TaxManager({
  configs,
  contributions,
  initialYear,
}: {
  configs: TaxConfig[];
  contributions: Contribution[];
  initialYear: number;
}) {
  const [year, setYear] = useState<number>(initialYear);
  const cfg = configs.find((c) => c.year === year);
  const yearContribs = contributions.filter((c) => c.year === year);

  const summary = cfg
    ? calculateTaxSummary(
        yearContribs.map((c) => ({ month: c.month, amount: c.amountMXN })),
        cfg,
        new Date().getMonth() + 1,
      )
    : null;

  const monthly = Array.from({ length: 12 }, (_, i) => {
    const m = i + 1;
    const c = yearContribs.find((x) => x.month === m);
    return {
      month: monthShortES(m),
      monthNum: m,
      deducible: c?.deductibleAmount ?? 0,
      excedente: c?.excessAmount ?? 0,
    };
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-[11px] text-[var(--color-muted)] font-[var(--font-mono)] uppercase tracking-wider font-bold">
          Ano fiscal
        </span>
        <div className="flex gap-1">
          {configs.map((c) => (
            <button
              key={c.year}
              onClick={() => setYear(c.year)}
              className={`nb-btn px-3 py-1.5 text-xs font-[var(--font-mono)] font-bold uppercase ${
                c.year === year
                  ? "bg-[var(--color-primary)] text-black"
                  : "bg-[var(--color-surface-2)] text-[var(--color-muted)]"
              }`}
            >
              {c.year}
            </button>
          ))}
        </div>
      </div>

      {summary && cfg && (
        <>
          <Card>
            <CardHeader
              title={`Avance ${year}`}
              subtitle={`Tope: ${formatMXN(cfg.maxDeduction)} · Tasa marginal: ${formatPct(cfg.marginalTaxRate)}`}
            />
            <CardBody className="space-y-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Stat
                  label="Aportado"
                  value={formatMXN(summary.totalContributed)}
                />
                <Stat
                  label="Deducible"
                  value={formatMXN(summary.deductibleAmount)}
                  tone="positive"
                />
                <Stat
                  label="Devolucion est."
                  value={formatMXN(summary.estimatedRefund)}
                  tone="positive"
                />
                <Stat
                  label="Excedente"
                  value={formatMXN(summary.excessAmount)}
                  tone={summary.excessAmount > 0 ? "warning" : "neutral"}
                />
              </div>
              <ProgressBar
                value={summary.deductibleAmount}
                max={summary.maxDeduction || 1}
                tone={summary.progressPct >= 1 ? "positive" : "primary"}
              />
              <div className="text-xs text-[var(--color-muted)] tabular font-[var(--font-mono)]">
                {formatPct(summary.progressPct)} del tope ·{" "}
                {summary.monthlyTargetToMax > 0
                  ? `${formatMXN(summary.monthlyTargetToMax)}/mes para llegar al tope`
                  : "Tope alcanzado"}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader title="Aportaciones mensuales" />
            <CardBody>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthly}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-surface-3)" />
                    <XAxis
                      dataKey="month"
                      stroke="var(--color-muted)"
                      fontSize={11}
                      fontFamily="Space Mono, monospace"
                    />
                    <YAxis
                      stroke="var(--color-muted)"
                      fontSize={11}
                      fontFamily="Space Mono, monospace"
                      tickFormatter={(v) => (v >= 1000 ? `${(v / 1000).toFixed(0)}k` : `${v}`)}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "var(--color-surface-2)",
                        border: "3px solid var(--color-border)",
                        borderRadius: 0,
                        fontSize: 12,
                        fontFamily: "Space Mono, monospace",
                        boxShadow: "3px 3px 0px #000000",
                      }}
                      formatter={(v) => formatMXN(Number(v))}
                    />
                    <ReferenceLine
                      y={cfg.maxDeduction / 12}
                      stroke="var(--color-primary)"
                      strokeDasharray="3 3"
                      strokeWidth={2}
                      label={{
                        value: "META",
                        fill: "var(--color-primary)",
                        fontSize: 10,
                        position: "right",
                        fontFamily: "Space Mono, monospace",
                      }}
                    />
                    <Bar
                      dataKey="deducible"
                      stackId="a"
                      fill="#a3e635"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar
                      dataKey="excedente"
                      stackId="a"
                      fill="#f59e0b"
                      radius={[0, 0, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
          </Card>
        </>
      )}

      <Card>
        <CardHeader
          title="Bitacora de aportaciones"
          subtitle="Edita un mes haciendo clic en su fila."
        />
        <CardBody>
          <ContributionsTable
            year={year}
            contributions={yearContribs}
          />
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="Configuracion fiscal" subtitle={`Ano ${year}`} />
        <CardBody>
          {cfg ? (
            <ConfigForm config={cfg} />
          ) : (
            <ConfigForm
              config={{
                year,
                annualGrossIncome: 0,
                annualTaxableIncome: 0,
                marginalTaxRate: 0.3,
                umaAnnualValue: 0,
                maxDeduction: 0,
              }}
            />
          )}
        </CardBody>
      </Card>
    </div>
  );
}

function ContributionsTable({
  year,
  contributions,
}: {
  year: number;
  contributions: Contribution[];
}) {
  const [editing, setEditing] = useState<number | null>(null);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm tabular font-[var(--font-mono)]">
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-wider text-[var(--color-muted)] border-b-3 border-[var(--color-border)]">
            <th className="py-2 pr-3">Mes</th>
            <th className="py-2 pr-3 text-right">Aportado</th>
            <th className="py-2 pr-3 text-right">Deducible</th>
            <th className="py-2 pr-3 text-right">Excedente</th>
            <th className="py-2 pr-3"></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 12 }, (_, i) => {
            const month = i + 1;
            const c = contributions.find((x) => x.month === month);
            const isEditing = editing === month;
            return (
              <tr key={month} className="border-b border-[var(--color-border)]">
                <td className="py-2 pr-3 font-bold">{monthNameES(month)}</td>
                {isEditing ? (
                  <ContributionEditRow
                    year={year}
                    month={month}
                    existing={c}
                    onClose={() => setEditing(null)}
                  />
                ) : (
                  <>
                    <td className="py-2 pr-3 text-right">
                      {c ? formatMXN(c.amountMXN) : "—"}
                    </td>
                    <td className="py-2 pr-3 text-right text-[var(--color-positive)]">
                      {c ? formatMXN(c.deductibleAmount) : "—"}
                    </td>
                    <td className="py-2 pr-3 text-right text-[var(--color-warning)]">
                      {c ? formatMXN(c.excessAmount) : "—"}
                    </td>
                    <td className="py-2 pr-3 text-right">
                      <button
                        className="text-xs text-[var(--color-primary)] font-bold hover:underline uppercase"
                        onClick={() => setEditing(month)}
                      >
                        {c ? "Editar" : "Agregar"}
                      </button>
                    </td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function ContributionEditRow({
  year,
  month,
  existing,
  onClose,
}: {
  year: number;
  month: number;
  existing: Contribution | undefined;
  onClose: () => void;
}) {
  const [amount, setAmount] = useState(String(existing?.amountMXN ?? ""));
  const [pending, start] = useTransition();

  function save() {
    start(async () => {
      await upsertContribution({
        year,
        month,
        amountMXN: Number(amount) || 0,
      });
      onClose();
    });
  }

  function remove() {
    if (!existing) return onClose();
    start(async () => {
      await deleteContribution(existing.id);
      onClose();
    });
  }

  return (
    <td colSpan={4} className="py-2 pr-3">
      <div className="flex items-center gap-2 justify-end">
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="nb-input w-32 px-2 py-1 text-xs tabular"
          autoFocus
        />
        <button
          onClick={save}
          disabled={pending}
          className="nb-btn px-2 py-1 text-xs bg-[var(--color-primary)] text-black font-bold uppercase"
        >
          OK
        </button>
        {existing && (
          <button
            onClick={remove}
            disabled={pending}
            aria-label="Eliminar aportacion"
            className="nb-btn px-2 py-1 text-xs bg-[var(--color-negative)] text-black font-bold"
          >
            ✕
          </button>
        )}
        <button
          onClick={onClose}
          className="nb-btn px-2 py-1 text-xs bg-[var(--color-surface-2)] text-[var(--color-text)]"
        >
          ESC
        </button>
      </div>
    </td>
  );
}

function ConfigForm({ config }: { config: TaxConfig }) {
  const [annualGross, setAnnualGross] = useState(String(config.annualGrossIncome));
  const [annualTaxable, setAnnualTaxable] = useState(
    String(config.annualTaxableIncome),
  );
  const [rate, setRate] = useState(String(config.marginalTaxRate));
  const [uma, setUma] = useState(String(config.umaAnnualValue));
  const [pending, start] = useTransition();

  const ten = Number(annualTaxable) * 0.1;
  const fiveU = Number(uma) * 5;
  const max = Math.min(ten, fiveU);

  function save() {
    start(async () => {
      await upsertTaxConfig({
        year: config.year,
        annualGrossIncome: Number(annualGross) || 0,
        annualTaxableIncome: Number(annualTaxable) || 0,
        marginalTaxRate: Number(rate) || 0,
        umaAnnualValue: Number(uma) || 0,
      });
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Input label="Ingreso anual bruto" value={annualGross} onChange={setAnnualGross} />
        <Input label="Ingreso anual gravable" value={annualTaxable} onChange={setAnnualTaxable} />
        <Input label="Tasa marginal (0-1)" value={rate} onChange={setRate} step="0.01" />
        <Input label="UMA anual" value={uma} onChange={setUma} />
      </div>
      <div className="grid grid-cols-3 gap-3 text-xs tabular font-[var(--font-mono)]">
        <div className="border-3 border-[var(--color-border)] bg-[var(--color-surface-2)] p-3">
          <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)] font-bold">
            10% GRAVABLE
          </div>
          <div className="mt-1 text-sm font-bold">{formatMXN(ten)}</div>
        </div>
        <div className="border-3 border-[var(--color-border)] bg-[var(--color-surface-2)] p-3">
          <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)] font-bold">
            5 UMAS
          </div>
          <div className="mt-1 text-sm font-bold">{formatMXN(fiveU)}</div>
        </div>
        <div className="border-3 border-[var(--color-positive)] bg-[var(--color-positive)]/10 p-3">
          <div className="text-[11px] uppercase tracking-wider text-[var(--color-positive)] font-bold">
            TOPE (MIN.)
          </div>
          <div className="mt-1 text-sm font-bold text-[var(--color-positive)]">{formatMXN(max)}</div>
        </div>
      </div>
      <button
        onClick={save}
        disabled={pending}
        className="nb-btn px-5 py-2.5 bg-[var(--color-primary)] text-black font-[var(--font-heading)] text-sm uppercase disabled:opacity-50"
      >
        {pending ? "GUARDANDO\u2026" : "GUARDAR CONFIGURACION"}
      </button>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  step = "0.01",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  step?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-wider text-[var(--color-muted)] font-[var(--font-mono)] font-bold">
        {label}
      </span>
      <input
        type="number"
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="nb-input mt-1 w-full px-3 py-2 text-sm tabular"
      />
    </label>
  );
}
