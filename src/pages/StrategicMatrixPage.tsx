import { ExternalLink, Grid2x2Check, ListChecks, Sparkles } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { strategicMatrix } from '../data/strategicMatrix';

const icons = [Grid2x2Check, ListChecks, Sparkles, Grid2x2Check];

export function StrategicMatrixPage() {
  return (
    <div className="space-y-8">
      <section>
        <SectionHeader eyebrow="Matriz" title={strategicMatrix.title} description={strategicMatrix.subtitle} />

        <article className="rounded-2xl glass p-6 shadow-glow">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm leading-relaxed text-zinc-200">
                Este espacio conecta la analítica del portal con la ejecución colaborativa en hoja de cálculo. Úsala para registrar decisiones,
                hipótesis, avances y próximos pasos de forma centralizada.
              </p>

              <a
                href={strategicMatrix.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-umoRed/45 bg-umoRed/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-red-100 transition hover:bg-umoRed/25"
              >
                Abrir matriz en Google Sheets <ExternalLink size={13} />
              </a>
            </div>

            <div className="rounded-xl border border-white/15 bg-charcoal/40 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-metallicGray">Enlace directo</p>
              <p className="mt-2 break-all text-sm text-zinc-200">{strategicMatrix.url}</p>
            </div>
          </div>
        </article>
      </section>

      <section>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {strategicMatrix.highlights.map((highlight, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article key={highlight} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <Icon size={16} className="text-red-100" />
                <p className="mt-2 text-sm text-zinc-200">{highlight}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
