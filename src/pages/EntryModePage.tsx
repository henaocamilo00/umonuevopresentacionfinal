import { motion } from 'framer-motion';
import { ArrowRightLeft, CheckCircle2, Globe2, ShieldCheck, Target } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { entryAdvantages, entryMode, entryPage, practicalImplications, strategyComparison } from '../data/entryMarketingStrategy';

const fitStyles = {
  elegida: 'border-agriGreen/45 bg-agriGreen/10 text-green-100',
  descartada: 'border-white/20 bg-white/5 text-zinc-300'
};

const iconByIndex = [ShieldCheck, Target, ArrowRightLeft, Globe2];

export function EntryModePage() {
  return (
    <div className="space-y-8">
      <section>
        <SectionHeader eyebrow={entryPage.eyebrow} title={entryPage.title} description={entryPage.subtitle} />
        <article className="rounded-2xl glass p-6 shadow-glow">
          <div className="space-y-3 text-sm leading-relaxed text-zinc-200">
            {entryPage.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 56)}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      <section>
        <SectionHeader
          eyebrow="Comparativo"
          title="Por qué la estrategia internacional y no las otras tres"
          description="Matriz comparativa de opciones de internacionalización para justificar la decisión de UMO."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {strategyComparison.map((option) => (
            <motion.article
              key={option.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl border p-4 shadow-glow ${fitStyles[option.fit]}`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{option.name}</h3>
                <span className={`rounded-full px-2 py-1 text-[10px] uppercase tracking-wide ${option.fit === 'elegida' ? 'bg-green-200/15 text-green-100' : 'bg-zinc-400/20 text-zinc-200'}`}>
                  {option.fit === 'elegida' ? 'Elegida' : 'Descartada'}
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-wide text-metallicGray">{option.example}</p>
              <p className="mt-3 text-sm text-zinc-100">{option.summary}</p>
              <p className="mt-3 text-sm text-zinc-200">
                <span className="font-semibold text-fogWhite">Razón:</span> {option.reason}
              </p>
            </motion.article>
          ))}
        </div>

        <article className="mt-4 rounded-2xl border border-umoRed/40 bg-umoRed/10 p-4">
          <p className="text-sm text-zinc-100">
            <span className="font-semibold text-red-100">Aclaración clave:</span> adaptar voltaje, enchufe, idioma del manual y certificación es un ajuste técnico obligatorio de cumplimiento, no un rediseño del producto por país.
          </p>
        </article>
      </section>

      <section>
        <SectionHeader eyebrow="Entrada" title={entryMode.title} description={entryMode.subtitle} />
        <div className="grid gap-4 xl:grid-cols-[1.25fr_1fr]">
          <article className="rounded-2xl glass p-5 shadow-glow">
            <div className="space-y-3 text-sm leading-relaxed text-zinc-200">
              {entryMode.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 54)}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="rounded-2xl glass p-5 shadow-glow">
            <p className="text-xs uppercase tracking-[0.2em] text-metallicGray">Arquitectura operativa</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-white/10 bg-charcoal/40 p-3">
                <p className="text-xs uppercase tracking-wide text-zinc-400">Origen</p>
                <p className="mt-1 text-sm text-fogWhite">Planta UMO en Guarne</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-charcoal/40 p-3">
                <p className="text-xs uppercase tracking-wide text-zinc-400">Canal digital</p>
                <p className="mt-1 text-sm text-fogWhite">Amazon + tienda propia</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-charcoal/40 p-3">
                <p className="text-xs uppercase tracking-wide text-zinc-400">Logística local EE. UU.</p>
                <p className="mt-1 text-sm text-fogWhite">Bodega aliada + despacho final + posventa</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Ventajas" title="Por qué este modelo le conviene a UMO" />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {entryAdvantages.map((item, index) => {
            const Icon = iconByIndex[index % iconByIndex.length];
            return (
              <article key={item.title} className="rounded-2xl glass p-4 shadow-glow">
                <Icon size={18} className="text-umoRed" />
                <p className="mt-2 text-sm font-semibold text-fogWhite">{item.title}</p>
                <p className="mt-2 text-sm text-zinc-300">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Operación" title="Qué implica en la práctica" />
        <div className="grid gap-3 md:grid-cols-2">
          {practicalImplications.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 text-red-100" />
                <div>
                  <p className="text-sm font-semibold text-fogWhite">{item.title}</p>
                  <p className="mt-1 text-sm text-zinc-300">{item.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
