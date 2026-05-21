import { SectionHeader } from '../components/ui/SectionHeader';
import { EconomicEnvironmentSection } from '../components/sections/EconomicEnvironmentSection';
import { economicCharts, economicEnvironmentTitle } from '../data/economicEnvironment';

export function EconomicPage() {
  return (
    <section className="space-y-6">
      <SectionHeader
        eyebrow="Análisis"
        title={economicEnvironmentTitle}
        description="Datos para gráficas de línea comparativas entre Iowa y Nebraska sobre PIB, ingreso, inflación, desempleo e impuestos."
      />
      <EconomicEnvironmentSection charts={economicCharts} />
    </section>
  );
}
