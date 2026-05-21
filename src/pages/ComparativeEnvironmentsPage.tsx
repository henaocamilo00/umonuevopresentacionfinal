import { SectionHeader } from '../components/ui/SectionHeader';
import { ComparativeEnvironmentsSection } from '../components/sections/ComparativeEnvironmentsSection';
import { comparativeEnvironmentBlocks } from '../data/comparativeEnvironments';

export function ComparativeEnvironmentsPage() {
  return (
    <section className="space-y-6">
      <SectionHeader
        eyebrow="Entornos"
        title="Análisis comparativo complementario"
        description="Bloques con tabla, gráfico y justificación corta para los entornos social/cultural, tecnológico/geográfico, político/legal, comercio internacional e inversión extranjera."
      />
      <ComparativeEnvironmentsSection blocks={comparativeEnvironmentBlocks} />
    </section>
  );
}
