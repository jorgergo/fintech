import { prisma } from "@/lib/db";
import SettingsManager from "@/components/settings/SettingsManager";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const profile = await prisma.userProfile.findFirst();
  const positions = await prisma.portfolioPosition.findMany({
    orderBy: { ticker: "asc" },
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text)]">Configuración</h2>
        <p className="text-sm text-[var(--color-muted)] mt-1">
          Perfil, instrumentos y gestión de datos
        </p>
      </div>

      <SettingsManager profile={profile} positions={positions} />
    </div>
  );
}
