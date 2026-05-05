import { prisma } from "@/lib/db";
import { formatMXN, formatPct } from "@/lib/format";
import { TrendingUp, TrendingDown } from "lucide-react";

const MONTH_NAMES = [
  "", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

export default async function SnapshotTable() {
  // Get the most recent snapshot (by year desc, month desc)
  const latest = await prisma.positionSnapshot.findFirst({
    orderBy: [{ year: "desc" }, { month: "desc" }],
    select: { year: true, month: true },
  });

  if (!latest) return null;

  const positions = await prisma.positionSnapshot.findMany({
    where: { year: latest.year, month: latest.month },
    orderBy: { ticker: "asc" },
  });

  if (positions.length === 0) return null;

  const totalValueMXN = positions[0].totalValueMXN;
  const cashMXN = positions[0].cashMXN;

  return (
    <section className="nb-card p-0">
      <div className="p-5 border-b-3 border-[var(--color-border)]">
        <h2 className="font-[var(--font-heading)] text-sm font-black uppercase tracking-wider text-[var(--color-text)]">
          Posiciones GBM
        </h2>
        <p className="text-xs text-[var(--color-muted)] mt-1 font-[var(--font-mono)]">
          {MONTH_NAMES[latest.month]} {latest.year}
        </p>
      </div>
      <div className="p-5 overflow-x-auto">
        <table className="w-full text-xs font-[var(--font-mono)]">
          <thead>
            <tr className="text-left text-[var(--color-muted)] border-b-3 border-[var(--color-border)] uppercase tracking-wider">
              <th className="py-2 pr-3">Instrumento</th>
              <th className="py-2 pr-3 text-right">Titulos</th>
              <th className="py-2 pr-3 text-right">Precio</th>
              <th className="py-2 pr-3 text-right">Valor</th>
              <th className="py-2 pr-3 text-right">+/- $</th>
              <th className="py-2 pr-3 text-right">+/- %</th>
              <th className="py-2 text-right">% Port.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((p) => {
              const gainPct = p.avgPriceMXN > 0
                ? (p.currentPriceMXN - p.avgPriceMXN) / p.avgPriceMXN
                : 0;
              const isPositive = p.gainLossMXN >= 0;
              return (
                <tr key={p.ticker} className="border-b border-[var(--color-border)]">
                  <td className="py-2 pr-3 font-bold">{p.ticker}</td>
                  <td className="py-2 pr-3 text-right tabular">{p.titles}</td>
                  <td className="py-2 pr-3 text-right tabular">{formatMXN(p.currentPriceMXN)}</td>
                  <td className="py-2 pr-3 text-right tabular">{formatMXN(p.valueMXN)}</td>
                  <td className={`py-2 pr-3 text-right tabular ${isPositive ? "text-[var(--color-positive)]" : "text-[var(--color-negative)]"}`}>
                    {formatMXN(p.gainLossMXN)}
                  </td>
                  <td className={`py-2 pr-3 text-right tabular ${isPositive ? "text-[var(--color-positive)]" : "text-[var(--color-negative)]"}`}>
                    <span className="inline-flex items-center justify-end gap-1">
                      {isPositive
                        ? <TrendingUp size={12} strokeWidth={3} />
                        : <TrendingDown size={12} strokeWidth={3} />
                      }
                      {formatPct(gainPct)}
                    </span>
                  </td>
                  <td className="py-2 text-right tabular">{p.portfolioPct.toFixed(2)}%</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="border-t-3 border-[var(--color-border)]">
              <td className="py-2 pr-3 font-bold">TOTAL</td>
              <td></td>
              <td></td>
              <td className="py-2 pr-3 text-right tabular font-bold text-[var(--color-primary)]">
                {formatMXN(totalValueMXN)}
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {cashMXN > 0 && (
              <tr>
                <td className="py-2 pr-3 text-[var(--color-muted)]">LIQUIDEZ</td>
                <td></td>
                <td></td>
                <td className="py-2 pr-3 text-right tabular text-[var(--color-muted)]">
                  {formatMXN(cashMXN)}
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tfoot>
        </table>
      </div>
    </section>
  );
}
