import { Factory, Package, Route, TrendingUp } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Timeline } from '../components/sections/Timeline';
import { SustainabilityCard } from '../components/cards/SustainabilityCard';
import { InfoCard } from '../components/cards/InfoCard';
import { strategyTimeline } from '../data/timeline';
import { sustainabilityItems } from '../data/sustainability';

export function StrategyPage() {
  return (
    <div className="space-y-8">
      <section>
        <SectionHeader eyebrow="Estrategia" title="Ruta de entrada al mercado estadounidense" description="Roadmap por fases para ejecutar la internacionalización con menor riesgo." />
        <Timeline steps={strategyTimeline} />
      </section>

      <section>
        <SectionHeader eyebrow="Sostenibilidad" title="Sostenibilidad del proyecto" />
        <div className="section-grid">
          {sustainabilityItems.map((item) => (
            <SustainabilityCard key={item.dimension} dimension={item.dimension} description={item.description} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Conclusión" title="Cierre estratégico" />
        <article className="rounded-2xl glass p-6 text-sm leading-relaxed text-zinc-200">
          <p>
            La internacionalización de sillines para podadoras representa una oportunidad viable para UMO porque conecta su experiencia manufacturera actual con una necesidad del mercado estadounidense. El proyecto permite diversificar el portafolio, fortalecer capacidades internas y construir una entrada gradual a un mercado con alta demanda de maquinaria, repuestos y accesorios.
          </p>
          <p className="mt-4">
            Iowa se identifica como el estado más atractivo para iniciar, debido a su actividad agrícola, potencial comercial y posibilidad de establecer alianzas con distribuidores y empresas relacionadas con maquinaria agrícola.
          </p>
        </article>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <InfoCard title="Industria" description="Base productiva consolidada" icon={<Factory size={18} />} />
          <InfoCard title="Exportación" description="Ruta de expansión gradual" icon={<Route size={18} />} />
          <InfoCard title="Innovación" description="Producto adaptable y competitivo" icon={<Package size={18} />} />
          <InfoCard title="Crecimiento" description="KPIs para seguimiento continuo" icon={<TrendingUp size={18} />} />
        </div>
      </section>
    </div>
  );
}
