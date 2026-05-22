import { motion } from 'framer-motion';
import { Leaf, TrendingUp, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { smartObjectiveText, sustainabilityDimensions, sustainabilitySummary } from '../data/sustainabilityIndicators';

const iconByDimension = {
  economica: TrendingUp,
  social: Users,
  ambiental: Leaf
};

const colorByDimension = {
  economica: 'border-umoRed/40 bg-umoRed/10 text-red-100',
  social: 'border-techBlue/40 bg-techBlue/10 text-blue-100',
  ambiental: 'border-agriGreen/45 bg-agriGreen/10 text-green-100'
};

export function SustainabilityIndicatorsPage() {
  const [activeDimensionId, setActiveDimensionId] = useState<'economica' | 'social' | 'ambiental'>('economica');

  const activeDimension = useMemo(
    () => sustainabilityDimensions.find((dimension) => dimension.id === activeDimensionId) ?? sustainabilityDimensions[0],
    [activeDimensionId]
  );

  const ActiveIcon = iconByDimension[activeDimension.id];

  return (
    <div className="space-y-8">
      <section>
        <SectionHeader
          eyebrow="Sostenibilidad"
          title="Indicadores de sostenibilidad"
          description="Sistema de seguimiento por dimensión económica, social y ambiental para evaluar la internacionalización de UMO en Iowa."
        />

        <div className="mb-4 flex flex-wrap gap-2">
          {sustainabilityDimensions.map((dimension) => {
            const Icon = iconByDimension[dimension.id];
            const isActive = activeDimension.id === dimension.id;

            return (
              <button
                key={dimension.id}
                type="button"
                onClick={() => setActiveDimensionId(dimension.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-wide transition ${
                  isActive ? colorByDimension[dimension.id] : 'border-white/20 bg-white/5 text-zinc-300 hover:bg-white/10'
                }`}
              >
                <Icon size={14} />
                {dimension.title}
              </button>
            );
          })}
        </div>

        <motion.article
          key={activeDimension.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl glass p-5 shadow-glow"
        >
          <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className={`inline-flex rounded-lg border p-2 ${colorByDimension[activeDimension.id]}`}>
                  <ActiveIcon size={16} />
                </span>
                <h3 className="text-lg font-semibold text-fogWhite">{activeDimension.title}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-300">{activeDimension.context}</p>

              <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-white/10 text-zinc-100">
                    <tr>
                      <th className="px-3 py-3">Indicador</th>
                      <th className="px-3 py-3">Qué mide</th>
                      <th className="px-3 py-3">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeDimension.indicators.map((item) => (
                      <tr key={item.indicator} className="border-t border-white/10 bg-charcoal/35">
                        <td className="px-3 py-3 align-top font-medium text-fogWhite">{item.indicator}</td>
                        <td className="px-3 py-3 align-top text-zinc-300">{item.measures}</td>
                        <td className="px-3 py-3 align-top">
                          <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide text-zinc-200">
                            Definir línea base
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <article className={`rounded-xl border p-4 ${colorByDimension[activeDimension.id]}`}>
                <p className="text-xs uppercase tracking-[0.18em]">Justificación corta</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-100">{activeDimension.shortJustification}</p>
              </article>

              <article className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-metallicGray">Vista rápida</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
                  <div className="rounded-lg bg-charcoal/50 p-3">
                    <p className="text-xs uppercase tracking-wide text-zinc-400">Indicadores activos</p>
                    <p className="mt-1 text-2xl font-semibold text-fogWhite">{activeDimension.indicators.length}</p>
                  </div>
                  <div className="rounded-lg bg-charcoal/50 p-3">
                    <p className="text-xs uppercase tracking-wide text-zinc-400">Frecuencia sugerida</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-200">Seguimiento mensual</p>
                  </div>
                  <div className="rounded-lg bg-charcoal/50 p-3">
                    <p className="text-xs uppercase tracking-wide text-zinc-400">Ruta de implementación</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-200">Piloto → validación → escalamiento</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </motion.article>
      </section>

      <section>
        <article className="rounded-2xl border border-techBlue/35 bg-techBlue/10 p-5 shadow-glow">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-100">Resumen general</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-100">{sustainabilitySummary}</p>
        </article>
      </section>

      <section>
        <article className="rounded-2xl border border-umoRed/35 bg-umoRed/10 p-5 shadow-glow">
          <p className="text-xs uppercase tracking-[0.2em] text-red-100">Objetivo SMART del proyecto</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-100">{smartObjectiveText}</p>
        </article>
      </section>
    </div>
  );
}
