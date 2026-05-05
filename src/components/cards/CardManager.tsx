"use client";

import { useState, useTransition } from "react";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Stat } from "@/components/ui/Stat";
import {
  formatMXN,
  formatPct,
  monthShortES,
} from "@/lib/format";
import {
  calculateUtilization,
  utilizationSeverity,
  nextOccurrence,
  daysUntil,
  totalUtilization,
  type CreditCardLite,
} from "@/lib/cards";
import { updateCard, createCard, deleteCard } from "@/actions/cards";

export default function CardManager({ cards }: { cards: CreditCardLite[] }) {
  const today = new Date();
  const util = totalUtilization(cards);
  const [adding, setAdding] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardBody>
            <Stat
              label="Utilización global"
              value={formatPct(util.pct)}
              hint={`${formatMXN(util.totalBalance)} / ${formatMXN(util.totalLimit)}`}
              tone={
                util.pct > 0.5
                  ? "negative"
                  : util.pct > 0.3
                    ? "warning"
                    : "positive"
              }
            />
            {util.pct > 0.3 && (
              <div className="mt-3 text-xs text-amber-400">
                Por debajo de 30% es lo recomendado para historial crediticio.
              </div>
            )}
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stat
              label="Crédito total disponible"
              value={formatMXN(util.totalLimit - util.totalBalance)}
            />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stat label="Tarjetas activas" value={cards.length} />
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardHeader
          title="Mis tarjetas"
          subtitle="Edita el saldo, fecha de corte y fecha de pago directamente."
          action={
            <button
              className="px-3 py-1.5 rounded-md text-xs bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:border-[var(--color-accent)]"
              onClick={() => setAdding(true)}
            >
              + Agregar tarjeta
            </button>
          }
        />
        <CardBody className="space-y-3">
          {cards.map((c) => (
            <CardRow key={c.id} card={c} today={today} />
          ))}
          {adding && <NewCardForm onClose={() => setAdding(false)} />}
        </CardBody>
      </Card>

      <Card>
        <CardHeader
          title="Calendario de pagos"
          subtitle="Próximas fechas de corte y pago."
        />
        <CardBody>
          <PaymentCalendar cards={cards} today={today} />
        </CardBody>
      </Card>
    </div>
  );
}

function CardRow({ card, today }: { card: CreditCardLite; today: Date }) {
  const util = calculateUtilization(card.currentBalance, card.creditLimit);
  const sev = utilizationSeverity(util);
  const tone =
    sev === "danger" ? "negative" : sev === "warning" ? "warning" : "positive";
  const [editing, setEditing] = useState(false);
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3 min-w-0">
          <div className="text-sm font-semibold">{card.name}</div>
          {card.isSecured && <Badge tone="accent">Garantizada</Badge>}
          <Badge tone={tone}>{formatPct(util)}</Badge>
        </div>
        <div className="flex items-center gap-4 text-xs tabular text-[var(--color-muted)]">
          <span>Corte día {card.cutDay || "—"}</span>
          <span>Pago día {card.paymentDay || "—"}</span>
          <button
            onClick={() => setEditing((v) => !v)}
            className="px-2 py-1 rounded-md border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text)]"
          >
            {editing ? "Cerrar" : "Editar"}
          </button>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <div className="flex-1">
          <ProgressBar value={card.currentBalance} max={card.creditLimit || 1} tone={tone} />
        </div>
        <div className="text-xs tabular text-[var(--color-muted)]">
          {formatMXN(card.currentBalance)} / {formatMXN(card.creditLimit)}
        </div>
      </div>
      {editing && <CardEditor card={card} onClose={() => setEditing(false)} />}
    </div>
  );
}

function CardEditor({
  card,
  onClose,
}: {
  card: CreditCardLite;
  onClose: () => void;
}) {
  const [balance, setBalance] = useState(String(card.currentBalance));
  const [limit, setLimit] = useState(String(card.creditLimit));
  const [cut, setCut] = useState(String(card.cutDay));
  const [pay, setPay] = useState(String(card.paymentDay));
  const [pending, start] = useTransition();

  function save() {
    start(async () => {
      await updateCard(card.id, {
        currentBalance: Number(balance) || 0,
        creditLimit: Number(limit) || 0,
        cutDay: Math.min(31, Math.max(0, Number(cut) || 0)),
        paymentDay: Math.min(31, Math.max(0, Number(pay) || 0)),
      });
      onClose();
    });
  }

  function remove() {
    if (!confirm(`¿Eliminar ${card.name}?`)) return;
    start(async () => {
      await deleteCard(card.id);
      onClose();
    });
  }

  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-2">
      <Input label="Saldo" value={balance} onChange={setBalance} />
      <Input label="Límite" value={limit} onChange={setLimit} />
      <Input label="Día corte" value={cut} onChange={setCut} />
      <Input label="Día pago" value={pay} onChange={setPay} />
      <div className="flex items-end gap-2">
        <button
          onClick={save}
          disabled={pending}
          className="flex-1 px-3 py-2 rounded-md text-xs bg-[var(--color-accent)] text-white"
        >
          Guardar
        </button>
        <button
          onClick={remove}
          disabled={pending}
          className="px-3 py-2 rounded-md text-xs border border-red-500/30 text-red-400 hover:bg-red-500/10"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

function NewCardForm({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [limit, setLimit] = useState("");
  const [secured, setSecured] = useState(false);
  const [pending, start] = useTransition();

  function save() {
    if (!name || !limit) return;
    start(async () => {
      await createCard({
        name,
        creditLimit: Number(limit) || 0,
        isSecured: secured,
      });
      onClose();
    });
  }

  return (
    <div className="rounded-lg border border-dashed border-[var(--color-border)] p-4 grid grid-cols-1 md:grid-cols-4 gap-2 items-end">
      <Input label="Nombre" value={name} onChange={setName} type="text" />
      <Input label="Límite" value={limit} onChange={setLimit} />
      <label className="flex items-center gap-2 text-xs">
        <input
          type="checkbox"
          checked={secured}
          onChange={(e) => setSecured(e.target.checked)}
        />
        Garantizada
      </label>
      <div className="flex gap-2">
        <button
          onClick={save}
          disabled={pending}
          className="flex-1 px-3 py-2 rounded-md text-xs bg-emerald-600 text-white"
        >
          Crear
        </button>
        <button
          onClick={onClose}
          className="px-3 py-2 rounded-md text-xs border border-[var(--color-border)]"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "number",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-wider">
        {label}
      </span>
      <input
        type={type}
        step="0.01"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-0.5 w-full px-2 py-1.5 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-xs tabular focus:outline-none focus:border-[var(--color-accent)]"
      />
    </label>
  );
}

function PaymentCalendar({
  cards,
  today,
}: {
  cards: CreditCardLite[];
  today: Date;
}) {
  const events = cards
    .flatMap((c) => {
      const out: { card: string; type: "Corte" | "Pago"; date: Date; days: number }[] = [];
      if (c.cutDay > 0) {
        const d = nextOccurrence(c.cutDay, today);
        out.push({ card: c.name, type: "Corte", date: d, days: daysUntil(d, today) });
      }
      if (c.paymentDay > 0) {
        const d = nextOccurrence(c.paymentDay, today);
        out.push({ card: c.name, type: "Pago", date: d, days: daysUntil(d, today) });
      }
      return out;
    })
    .sort((a, b) => a.days - b.days);

  if (events.length === 0) {
    return (
      <div className="text-xs text-[var(--color-muted)]">
        Configura los días de corte y pago en cada tarjeta.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm tabular">
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-wider text-[var(--color-muted)] border-b border-[var(--color-border)]">
            <th className="py-2 pr-3">Tarjeta</th>
            <th className="py-2 pr-3">Tipo</th>
            <th className="py-2 pr-3">Fecha</th>
            <th className="py-2 pr-3 text-right">Días</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e, i) => {
            const tone =
              e.type === "Pago" && e.days <= 5
                ? "text-red-400"
                : e.days <= 3
                  ? "text-amber-400"
                  : "text-[var(--color-muted)]";
            return (
              <tr key={i} className="border-b border-[var(--color-border)]/50">
                <td className="py-2 pr-3">{e.card}</td>
                <td className="py-2 pr-3">
                  <Badge tone={e.type === "Pago" ? "warning" : "accent"}>
                    {e.type}
                  </Badge>
                </td>
                <td className="py-2 pr-3">
                  {monthShortES(e.date.getMonth() + 1)} {e.date.getDate()}
                </td>
                <td className={`py-2 pr-3 text-right ${tone}`}>
                  {e.days === 0 ? "Hoy" : `${e.days} día${e.days === 1 ? "" : "s"}`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
