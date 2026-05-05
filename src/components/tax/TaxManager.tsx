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
        <span className="text-xs text-[var(--color-muted)]">Año fiscal</span>
        <div className="flex gap-1">
          {configs.map((c) => (
            <button
              key={c.year}
              onClick={() => setYear(c.year)}
              className={`px-3 py-1.5 rounded-md text-xs ${
                c.year === year
                  ? "bg-[var(--color-accent)] text-white"
                  : "bg-[var(--color-surface-2)] text-[var(--color-muted)] hover:text-[var(--color-text)]"
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
                  label="Devolución est."
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
                tone={summary.progressPct >= 1 ? "positive" : "accent"}
              />
              <div className="text-xs text-[var(--color-muted)] tabular">
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
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis
                      dataKey="month"
                      stroke="var(--color-muted)"
                      fontSize={11}
                    />
                    <YAxis
                      stroke="var(--color-muted)"
                      fontSize={11}
                      tickFormatter={(v) => (v >= 1000 ? `${(v / 1000).toFixed(0)}k` : `${v}`)}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "var(--color-surface-2)",
                        border: "1px solid var(--color-border)",
                        borderRadius: 8,
                        fontSize: 12,
                      }}
                      formatter={(v) => formatMXN(Number(v))}
                    />
                    <ReferenceLine
                      y={cfg.maxDeduction / 12}
                      stroke="var(--color-accent)"
                      strokeDasharray="3 3"
                      label={{
                        value: "Meta mensual",
                        fill: "var(--color-accent)",
                        fontSize: 10,
                        position: "right",
                      }}
                    />
                    <Bar
                      dataKey="deducible"
                      stackId="a"
                      fill="#22c55e"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar
                      dataKey="excedente"
                      stackId="a"
                      fill="#f59e0b"
                      radius={[4, 4, 0, 0]}
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
          title="Bitácora de aportaciones"
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
        <CardHeader title="Configuración fiscal" subtitle={`Año ${year}`} />
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
      <table className="w-full text-sm tabular">
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-wider text-[var(--color-muted)] border-b border-[var(--color-border)]">
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
              <tr key={month} className="border-b border-[var(--color-border)]/50">
                <td className="py-2 pr-3">{monthNameES(month)}</td>
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
                    <td className="py-2 pr-3 text-right text-emerald-400">
                      {c ? formatMXN(c.deductibleAmount) : "—"}
                    </td>
                    <td className="py-2 pr-3 text-right text-amber-400">
                      {c ? formatMXN(c.excessAmount) : "—"}
                    </td>
                    <td className="py-2 pr-3 text-right">
                      <button
                        className="text-xs text-[var(--color-accent)] hover:underline"
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
          className="w-32 px-2 py-1 rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs tabular"
          autoFocus
        />
        <button
          onClick={save}
          disabled={pending}
          className="px-2 py-1 rounded-md text-xs bg-[var(--color-accent)] text-white"
        >
          Guardar
        </button>
        {existing && (
          <button
            onClick={remove}
            disabled={pending}
            className="px-2 py-1 rounded-md text-xs border border-red-500/30 text-red-400"
          >
            Eliminar
          </button>
        )}
        <button
          onClick={onClose}
          className="px-2 py-1 rounded-md text-xs border border-[var(--color-border)]"
        >
          Cancelar
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
        <Input
          label="Ingreso anual bruto"
          value={annualGross}
          onChange={setAnnualGross}
        />
        <Input
          label="Ingreso anual gravable"
          value={annualTaxable}
          onChange={setAnnualTaxable}
        />
        <Input
          label="Tasa marginal (0–1)"
          value={rate}
          onChange={setRate}
          step="0.01"
        />
        <Input
          label="UMA anual"
          value={uma}
          onChange={setUma}
        />
      </div>
      <div className="grid grid-cols-3 gap-3 text-xs tabular">
        <div className="rounded-md bg-[var(--color-surface-2)] p-3">
          <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
            10% gravable
          </div>
          <div className="mt-0.5">{formatMXN(ten)}</div>
        </div>
        <div className="rounded-md bg-[var(--color-surface-2)] p-3">
          <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
            5 UMAs
          </div>
          <div className="mt-0.5">{formatMXN(fiveU)}</div>
        </div>
        <div className="rounded-md bg-emerald-500/10 border border-emerald-500/20 p-3">
          <div className="text-[11px] uppercase tracking-wider text-emerald-400">
            Tope (mín.)
          </div>
          <div className="mt-0.5 text-emerald-400">{formatMXN(max)}</div>
        </div>
      </div>
      <button
        onClick={save}
        disabled={pending}
        className="px-4 py-2 rounded-md bg-[var(--color-accent)] text-white text-sm"
      >
        {pending ? "Guardando..." : "Guardar configuración"}
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
      <span className="text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
        {label}
      </span>
      <input
        type="number"
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full px-3 py-2 rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] text-sm tabular focus:outline-none focus:border-[var(--color-accent)]"
      />
    </label>
  );
}
