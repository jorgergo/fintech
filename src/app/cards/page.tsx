import { prisma } from "@/lib/db";
import CardManager from "@/components/cards/CardManager";

export const dynamic = "force-dynamic";

export default async function CardsPage() {
  const cards = await prisma.creditCard.findMany({ orderBy: { name: "asc" } });
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-[var(--font-heading)] text-3xl uppercase tracking-tight">
          Tarjetas de credito
        </h2>
        <p className="text-sm text-[var(--color-muted)] font-[var(--font-mono)] mt-2 uppercase tracking-wider">
          Manten tu utilizacion por debajo del 30% y paga antes del dia 5.
        </p>
      </div>
      <CardManager cards={cards} />
    </div>
  );
}
