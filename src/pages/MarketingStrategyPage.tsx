import { motion } from 'framer-motion';
import { BadgeDollarSign, Megaphone, ShoppingCart, Star } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import {
  benefitMap,
  channelsRoadmap,
  competitiveAdvantages,
  digitalTools,
  executionRoadmap,
  marketingPage,
  marketingStats,
  personas,
  priceStrategy
} from '../data/entryMarketingStrategy';

const personaStyles = ['border-umoRed/35 bg-umoRed/10', 'border-techBlue/35 bg-techBlue/10', 'border-agriGreen/35 bg-agriGreen/10'];

export function MarketingStrategyPage() {
  return (
    <div className="space-y-8">
      <section>
        <SectionHeader eyebrow={marketingPage.eyebrow} title={marketingPage.title} description={marketingPage.subtitle} />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {marketingStats.map((stat) => (
            <article key={stat.label} className="rounded-2xl glass p-4 shadow-glow">
              <p className="text-xs uppercase tracking-wide text-metallicGray">{stat.label}</p>
              <p className="mt-2 text-2xl font-semibold text-fogWhite">{stat.value}</p>
              <p className="mt-1 text-xs text-zinc-400">{stat.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Mercado" title="Por qué Iowa" description="Un estado de casas con jardín, donde cuidar el césped es costumbre." />
        <article className="rounded-2xl glass p-5 shadow-glow">
          <div className="space-y-3 text-sm leading-relaxed text-zinc-200">
            {marketingPage.whyIowa.map((paragraph) => (
              <p key={paragraph.slice(0, 52)}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      <section>
        <SectionHeader eyebrow="Producto" title="Lo adaptamos, no lo reinventamos" />
        <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <p className="text-sm leading-relaxed text-zinc-200">{marketingPage.productAdaptation}</p>
        </article>
      </section>

      <section>
        <SectionHeader eyebrow="Adquisición" title="Cómo nos damos a conocer y vendemos por internet" />
        <div className="grid gap-3 md:grid-cols-2">
          {digitalTools.map((tool) => (
            <article key={tool.title} className="rounded-2xl glass p-4 shadow-glow">
              <p className="text-sm font-semibold text-fogWhite">{tool.title}</p>
              <p className="mt-2 text-sm text-zinc-300">{tool.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Personas" title="A quién le vendemos" />
        <div className="grid gap-3 md:grid-cols-3">
          {personas.map((persona, index) => (
            <motion.article
              key={persona.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl border p-4 ${personaStyles[index % personaStyles.length]}`}
            >
              <p className="text-sm font-semibold text-fogWhite">{persona.name}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-zinc-300">{persona.profile}</p>
              <p className="mt-3 text-sm text-zinc-100">
                <span className="font-semibold">Dolor:</span> {persona.pain}
              </p>
              <p className="mt-2 text-sm text-zinc-100">
                <span className="font-semibold">Activa compra:</span> {persona.trigger}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Propuesta de valor" title="Qué tiene de bueno el producto y cómo se cuenta" />
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-white/10 text-zinc-100">
              <tr>
                <th className="px-4 py-3">Lo que es</th>
                <th className="px-4 py-3">Lo que significa para el cliente</th>
              </tr>
            </thead>
            <tbody>
              {benefitMap.map((item) => (
                <tr key={item.feature} className="border-t border-white/10 bg-charcoal/35">
                  <td className="px-4 py-3 font-medium text-fogWhite">{item.feature}</td>
                  <td className="px-4 py-3 text-zinc-300">{item.customerBenefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Canales" title="Dónde se vende" description="Secuencia de canales para construir confianza y luego mejorar margen." />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {channelsRoadmap.map((phase, index) => {
            const icons = [ShoppingCart, Star, Megaphone, BadgeDollarSign];
            const Icon = icons[index % icons.length];
            return (
              <article key={phase.phase} className="rounded-2xl glass p-4 shadow-glow">
                <Icon size={18} className="text-umoRed" />
                <p className="mt-2 text-sm font-semibold text-fogWhite">{phase.phase}</p>
                <p className="mt-2 text-sm text-zinc-300">{phase.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Precio" title="A qué precio se vende" description="Entrada con precio de penetración para ganar terreno y reseñas." />
        <div className="grid gap-3 md:grid-cols-2">
          {priceStrategy.map((item) => (
            <article key={item} className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm text-zinc-200">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Competencia" title="Por qué UMO puede ganar" />
        <div className="grid gap-3 md:grid-cols-2">
          {competitiveAdvantages.map((item) => (
            <article key={item.title} className="rounded-2xl glass p-4 shadow-glow">
              <p className="text-sm font-semibold text-fogWhite">{item.title}</p>
              <p className="mt-2 text-sm text-zinc-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Implementación" title="En qué orden se hace todo" description="Roadmap de ejecución para pasar de preparación a escalamiento." />
        <div className="space-y-3">
          {executionRoadmap.map((phase) => (
            <article key={phase.phase} className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm font-semibold text-fogWhite">{phase.phase}</p>
              <p className="mt-1 text-sm text-zinc-300">{phase.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <article className="rounded-2xl border border-umoRed/35 bg-umoRed/10 p-5 shadow-glow">
          <p className="text-sm leading-relaxed text-zinc-100">{marketingPage.closing}</p>
        </article>
      </section>
    </div>
  );
}
