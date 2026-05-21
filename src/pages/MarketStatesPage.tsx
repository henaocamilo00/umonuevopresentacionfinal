import { Globe } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { InfoCard } from '../components/cards/InfoCard';
import { DofaSection } from '../components/sections/DofaSection';
import { ComparisonTable } from '../components/sections/ComparisonTable';
import { marketOpportunities, marketSummary } from '../data/market';
import { dofaQuadrants } from '../data/dofa';
import { statesComparison } from '../data/statesComparison';

export function MarketStatesPage() {
  return (
    <div className="space-y-8">
      <section>
        <SectionHeader eyebrow="Mercado" title={marketSummary.title} description={marketSummary.note} />
        <div className="section-grid">
          {marketOpportunities.map((opportunity) => (
            <InfoCard key={opportunity.title} title={opportunity.title} description={opportunity.description} meta={opportunity.segment} icon={<Globe size={18} />} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Estrategia"
          title="Análisis DOFA del proyecto"
          description="Matriz dinámica para revisar fortalezas, oportunidades, debilidades y amenazas en la entrada al mercado estadounidense."
        />
        <DofaSection quadrants={dofaQuadrants} />
      </section>

      <section>
        <SectionHeader eyebrow="Estados" title="Análisis comparativo: Iowa vs Nebraska" />
        <ComparisonTable rows={statesComparison} />
        <article className="mt-4 rounded-2xl border border-umoRed/40 bg-umoRed/10 p-5">
          <p className="text-lg font-semibold text-red-100">Estado recomendado: Iowa</p>
          <p className="mt-2 text-sm text-zinc-200">
            Iowa se recomienda como punto de entrada inicial porque combina alta actividad agrícola, mayor potencial comercial, demanda relacionada con maquinaria y mejores oportunidades para conectar con distribuidores, talleres y empresas del sector.
          </p>
        </article>
      </section>
    </div>
  );
}
