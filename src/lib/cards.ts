import {
  addMonths,
  differenceInCalendarDays,
  setDate,
  startOfDay,
  lastDayOfMonth,
  isBefore,
} from "date-fns";

export type AlertType = "PAYMENT_DUE" | "HIGH_UTILIZATION" | "APPROACHING_CUT";
export type Severity = "info" | "warning" | "danger";

export interface CreditCardLite {
  id: number;
  name: string;
  creditLimit: number;
  currentBalance: number;
  cutDay: number;
  paymentDay: number;
  isSecured: boolean;
}

export interface CardAlert {
  cardId: number;
  cardName: string;
  type: AlertType;
  message: string;
  daysUntil: number;
  severity: Severity;
}

export function calculateUtilization(balance: number, limit: number): number {
  return limit > 0 ? Math.max(0, balance) / limit : 0;
}

export function utilizationSeverity(util: number): Severity {
  if (util > 0.5) return "danger";
  if (util > 0.3) return "warning";
  return "info";
}

/**
 * Given a day-of-month (1-31), returns the next occurrence on or after `from`.
 * If the day exceeds the month length, falls back to the last day of that month.
 */
export function nextOccurrence(dayOfMonth: number, from: Date): Date {
  if (!dayOfMonth || dayOfMonth < 1) return new Date(8640000000000000);
  const today = startOfDay(from);
  for (let offset = 0; offset < 3; offset++) {
    const month = addMonths(today, offset);
    const lastDay = lastDayOfMonth(month).getDate();
    const candidate = setDate(month, Math.min(dayOfMonth, lastDay));
    if (!isBefore(candidate, today)) return candidate;
  }
  return today;
}

export function daysUntil(date: Date, from: Date): number {
  return differenceInCalendarDays(startOfDay(date), startOfDay(from));
}

export function getCardAlerts(cards: CreditCardLite[], today: Date): CardAlert[] {
  const alerts: CardAlert[] = [];
  for (const c of cards) {
    const util = calculateUtilization(c.currentBalance, c.creditLimit);

    if (c.paymentDay > 0) {
      const next = nextOccurrence(c.paymentDay, today);
      const d = daysUntil(next, today);
      if (d <= 5 && c.currentBalance > 0) {
        alerts.push({
          cardId: c.id,
          cardName: c.name,
          type: "PAYMENT_DUE",
          message:
            d <= 0
              ? `Pago vencido — paga hoy`
              : `Pago en ${d} día${d === 1 ? "" : "s"}`,
          daysUntil: d,
          severity: d <= 2 ? "danger" : "warning",
        });
      }
    }

    if (util > 0.3) {
      alerts.push({
        cardId: c.id,
        cardName: c.name,
        type: "HIGH_UTILIZATION",
        message: `Utilización ${(util * 100).toFixed(1)}% — considera abonar`,
        daysUntil: 0,
        severity: utilizationSeverity(util),
      });
    }

    if (c.cutDay > 0) {
      const nextCut = nextOccurrence(c.cutDay, today);
      const d = daysUntil(nextCut, today);
      if (d <= 3) {
        alerts.push({
          cardId: c.id,
          cardName: c.name,
          type: "APPROACHING_CUT",
          message:
            d === 0
              ? `Corte hoy`
              : `Corte en ${d} día${d === 1 ? "" : "s"}`,
          daysUntil: d,
          severity: "info",
        });
      }
    }
  }

  alerts.sort((a, b) => {
    const order: Record<Severity, number> = { danger: 0, warning: 1, info: 2 };
    if (order[a.severity] !== order[b.severity]) return order[a.severity] - order[b.severity];
    return a.daysUntil - b.daysUntil;
  });

  return alerts;
}

export function totalUtilization(cards: CreditCardLite[]): {
  totalBalance: number;
  totalLimit: number;
  pct: number;
} {
  const totalBalance = cards.reduce((s, c) => s + c.currentBalance, 0);
  const totalLimit = cards.reduce((s, c) => s + c.creditLimit, 0);
  return {
    totalBalance,
    totalLimit,
    pct: calculateUtilization(totalBalance, totalLimit),
  };
}
