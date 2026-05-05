import { prisma } from "@/lib/db";
import TaxManager from "@/components/tax/TaxManager";

export const dynamic = "force-dynamic";

export default async function TaxPage() {
  const configs = await prisma.taxConfig.findMany({ orderBy: { year: "desc" } });
  const contributions = await prisma.taxContribution.findMany({
    orderBy: [{ year: "desc" }, { month: "asc" }],
  });

  const currentYear = new Date().getFullYear();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-[var(--font-heading)] text-3xl uppercase tracking-tight">
          Deducciones fiscales
        </h2>
        <p className="text-sm text-[var(--color-muted)] font-[var(--font-mono)] mt-2 uppercase tracking-wider">
          Seguimiento de aportaciones al PPR y calculo de deducciones (LISR Art. 151)
        </p>
      </div>

      <TaxManager
        configs={configs}
        contributions={contributions}
        initialYear={currentYear}
      />
    </div>
  );
}
