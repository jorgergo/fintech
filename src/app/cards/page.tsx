import { prisma } from "@/lib/db";
import CardManager from "@/components/cards/CardManager";

export const dynamic = "force-dynamic";

export default async function CardsPage() {
  const cards = await prisma.creditCard.findMany({ orderBy: { name: "asc" } });
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Tarjetas de crédito
        </h2>
        <p className="text-sm text-[var(--color-muted)] mt-1">
          Mantén tu utilización por debajo del 30% y paga antes del día 5.
        </p>
      </div>
      <CardManager cards={cards} />
    </div>
  );
}
