import { ExternalLink, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { references } from '../data/references';

export function ReferencesPage() {
  const [category, setCategory] = useState('Todas');
  const [query, setQuery] = useState('');

  const categories = useMemo(
    () => ['Todas', ...Array.from(new Set(references.map((reference) => reference.category)))],
    []
  );

  const filteredReferences = useMemo(
    () =>
      references.filter((reference) => {
        const categoryMatches = category === 'Todas' || reference.category === category;
        const queryMatches = [reference.title, reference.source, reference.note, reference.category]
          .join(' ')
          .toLowerCase()
          .includes(query.toLowerCase());

        return categoryMatches && queryMatches;
      }),
    [category, query]
  );

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Referencias"
        title="Fuentes consultadas"
        description="Biblioteca de referencias del proyecto para validar datos, profundizar análisis y sustentar decisiones estratégicas."
      />

      <div className="flex flex-wrap items-center gap-2">
        <div className="relative">
          <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar fuente"
            className="rounded-xl border border-white/20 bg-charcoal/50 py-2 pl-9 pr-3 text-sm text-fogWhite placeholder:text-zinc-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-3 py-2 text-xs uppercase tracking-wide transition ${
                item === category ? 'bg-umoRed/25 text-red-100' : 'bg-white/10 text-zinc-200 hover:bg-white/15'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {filteredReferences.map((reference) => (
          <article key={reference.id} className="rounded-2xl glass p-5 shadow-glow">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide text-zinc-200">
                {reference.category}
              </span>
              <span className="text-[11px] uppercase tracking-wide text-metallicGray">{reference.source}</span>
            </div>

            <h3 className="mt-3 text-base font-semibold text-fogWhite">{reference.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{reference.note}</p>

            <a
              href={reference.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-umoRed/40 bg-umoRed/15 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-red-100 transition hover:bg-umoRed/25"
            >
              Abrir fuente <ExternalLink size={12} />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
