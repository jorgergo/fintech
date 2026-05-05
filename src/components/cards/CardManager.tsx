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
              label="Utilizacion global"
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
              <div className="mt-3 text-xs text-[var(--color-warning)] font-[var(--font-mono)]">
                Por debajo de 30% es lo recomendado.
              </div>
            )}
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stat
              label="Credito disponible"
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
              className="nb-btn px-3 py-1.5 text-xs font-[var(--font-mono)] font-bold uppercase bg-[var(--color-surface-2)] text-[var(--color-text)]"
              onClick={() => setAdding(true)}
            >
              + AGREGAR
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
          subtitle="Proximas fechas de corte y pago."
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
    <div className="border-3 border-[var(--color-border)] bg-[var(--color-surface-2)] p-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3 min-w-0">
          <div className="text-sm font-[var(--font-heading)] uppercase">{card.name}</div>
          {card.isSecured && <Badge tone="accent">GARANTIZADA</Badge>}
          <Badge tone={tone}>{formatPct(util)}</Badge>
        </div>
        <div className="flex items-center gap-4 text-xs tabular text-[var(--color-muted)] font-[var(--font-mono)]">
          <span>CORTE {card.cutDay || "—"}</span>
          <span>PAGO {card.paymentDay || "—"}</span>
          <button
            onClick={() => setEditing((v) => !v)}
            className="nb-btn px-2 py-1 text-[var(--color-text)] bg-[var(--color-surface)]"
          >
            {editing ? "CERRAR" : "EDITAR"}
          </button>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <div className="flex-1">
          <ProgressBar value={card.currentBalance} max={card.creditLimit || 1} tone={tone} />
        </div>
        <div className="text-xs tabular text-[var(--color-muted)] font-[var(--font-mono)]">
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
      <Input label="Limite" value={limit} onChange={setLimit} />
      <Input label="Dia corte" value={cut} onChange={setCut} />
      <Input label="Dia pago" value={pay} onChange={setPay} />
      <div className="flex items-end gap-2">
        <button
          onClick={save}
          disabled={pending}
          className="nb-btn flex-1 px-3 py-2 text-xs bg-[var(--color-primary)] text-black font-[var(--font-mono)] font-bold uppercase"
        >
          GUARDAR
        </button>
        <button
          onClick={remove}
          disabled={pending}
          aria-label="Eliminar tarjeta"
          className="nb-btn px-3 py-2 text-xs bg-[var(--color-negative)] text-black font-[var(--font-mono)] font-bold"
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
    <div className="border-3 border-dashed border-[var(--color-border)] p-4 grid grid-cols-1 md:grid-cols-4 gap-2 items-end">
      <Input label="Nombre" value={name} onChange={setName} type="text" />
      <Input label="Limite" value={limit} onChange={setLimit} />
      <label className="flex items-center gap-2 text-xs font-[var(--font-mono)] uppercase">
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
          className="nb-btn flex-1 px-3 py-2 text-xs bg-[var(--color-positive)] text-black font-[var(--font-mono)] font-bold uppercase"
        >
          CREAR
        </button>
        <button
          onClick={onClose}
          className="nb-btn px-3 py-2 text-xs bg-[var(--color-surface-2)] text-[var(--color-text)] font-[var(--font-mono)]"
        >
          CANCELAR
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
      <span className="text-[10px] text-[var(--color-muted)] font-[var(--font-mono)] uppercase tracking-wider font-bold">
        {label}
      </span>
      <input
        type={type}
        step="0.01"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="nb-input mt-0.5 w-full px-2 py-1.5 text-xs tabular"
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
      <div className="text-xs text-[var(--color-muted)] font-[var(--font-mono)]">
        Configura los dias de corte y pago en cada tarjeta.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm tabular font-[var(--font-mono)]">
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-wider text-[var(--color-muted)] border-b-3 border-[var(--color-border)]">
            <th className="py-2 pr-3">Tarjeta</th>
            <th className="py-2 pr-3">Tipo</th>
            <th className="py-2 pr-3">Fecha</th>
            <th className="py-2 pr-3 text-right">Dias</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e, i) => {
            const tone =
              e.type === "Pago" && e.days <= 5
                ? "text-[var(--color-negative)]"
                : e.days <= 3
                  ? "text-[var(--color-warning)]"
                  : "text-[var(--color-muted)]";
            return (
              <tr key={i} className="border-b border-[var(--color-border)]">
                <td className="py-2 pr-3 font-bold">{e.card}</td>
                <td className="py-2 pr-3">
                  <Badge tone={e.type === "Pago" ? "warning" : "accent"}>
                    {e.type.toUpperCase()}
                  </Badge>
                </td>
                <td className="py-2 pr-3">
                  {monthShortES(e.date.getMonth() + 1)} {e.date.getDate()}
                </td>
                <td className={`py-2 pr-3 text-right font-bold ${tone}`}>
                  {e.days === 0 ? "HOY" : `${e.days}d`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
