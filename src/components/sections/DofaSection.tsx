import { useMemo, useState } from 'react';
import type { DofaQuadrant, DofaType } from '../../data/types';

interface DofaSectionProps {
  quadrants: DofaQuadrant[];
}

const quadrantStyles: Record<DofaType, string> = {
  Fortalezas: 'border-agriGreen/60 bg-agriGreen/10 text-green-100',
  Oportunidades: 'border-techBlue/60 bg-techBlue/10 text-blue-100',
  Debilidades: 'border-amber-500/60 bg-amber-500/10 text-amber-100',
  Amenazas: 'border-umoRed/60 bg-umoRed/10 text-red-100'
};

const impactStyles = {
  Alto: 'bg-umoRed/20 text-red-200 border-umoRed/50',
  Medio: 'bg-amber-500/15 text-amber-100 border-amber-500/40',
  Bajo: 'bg-techBlue/15 text-blue-100 border-techBlue/40'
};

export function DofaSection({ quadrants }: DofaSectionProps) {
  const [activeType, setActiveType] = useState<DofaType>('Fortalezas');

  const activeQuadrant = useMemo(
    () => quadrants.find((quadrant) => quadrant.type === activeType) ?? quadrants[0],
    [activeType, quadrants]
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        {quadrants.map((quadrant) => (
          <button
            key={quadrant.type}
            type="button"
            onClick={() => setActiveType(quadrant.type)}
            className={`rounded-2xl border p-4 text-left transition ${quadrantStyles[quadrant.type]} ${
              quadrant.type === activeType ? 'shadow-redGlow ring-1 ring-white/30' : 'opacity-90 hover:opacity-100'
            }`}
          >
            <p className="text-xs uppercase tracking-[0.2em]">{quadrant.type}</p>
            <p className="mt-2 text-sm text-zinc-100">{quadrant.summary}</p>
          </button>
        ))}
      </div>

      {activeQuadrant ? (
        <article className="rounded-2xl glass p-5 shadow-glow">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-semibold text-fogWhite">Detalle: {activeQuadrant.type}</h3>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-wide text-zinc-200">
              {activeQuadrant.items.length} factores
            </span>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {activeQuadrant.items.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-charcoal/50 p-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-fogWhite">{item.title}</p>
                  <span className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-wide ${impactStyles[item.impact]}`}>
                    {item.impact}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      ) : null}
    </div>
  );
}
