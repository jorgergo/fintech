import { prisma } from "@/lib/db";
import SettingsManager from "@/components/settings/SettingsManager";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const profile = await prisma.userProfile.findFirst();
  const positions = await prisma.portfolioPosition.findMany({
    orderBy: { ticker: "asc" },
  });

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-[var(--font-heading)] text-3xl uppercase tracking-tight">
          Configuracion
        </h2>
        <p className="text-sm text-[var(--color-muted)] font-[var(--font-mono)] mt-2 uppercase tracking-wider">
          Perfil, instrumentos y gestion de datos
        </p>
      </div>

      <SettingsManager profile={profile} positions={positions} />
    </div>
  );
}
