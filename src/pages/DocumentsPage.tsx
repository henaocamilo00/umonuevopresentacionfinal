import { useMemo, useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { DocumentCard } from '../components/cards/DocumentCard';
import { UpdateCard } from '../components/cards/UpdateCard';
import { documents } from '../data/documents';
import { updates } from '../data/updates';

export function DocumentsPage() {
  const [docCategory, setDocCategory] = useState('Todos');
  const [docQuery, setDocQuery] = useState('');

  const documentCategories = useMemo(() => ['Todos', ...Array.from(new Set(documents.map((doc) => doc.category)))], []);

  const filteredDocuments = useMemo(
    () =>
      documents.filter(
        (doc) =>
          (docCategory === 'Todos' || doc.category === docCategory) &&
          [doc.title, doc.description, doc.category].join(' ').toLowerCase().includes(docQuery.toLowerCase())
      ),
    [docCategory, docQuery]
  );

  const copySummary = async () => {
    await navigator.clipboard.writeText(
      JSON.stringify(
        {
          documents: filteredDocuments,
          updates
        },
        null,
        2
      )
    );
  };

  return (
    <div className="space-y-8">
      <section>
        <SectionHeader eyebrow="Biblioteca" title="Centro de información UMO" />
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <input
            type="search"
            placeholder="Buscar documento"
            value={docQuery}
            onChange={(event) => setDocQuery(event.target.value)}
            className="rounded-xl border border-white/20 bg-charcoal/50 px-3 py-2 text-sm text-fogWhite placeholder:text-zinc-400"
          />
          <select
            value={docCategory}
            onChange={(event) => setDocCategory(event.target.value)}
            className="rounded-xl border border-white/20 bg-charcoal/50 px-3 py-2 text-sm"
          >
            {documentCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button type="button" onClick={copySummary} className="rounded-xl bg-umoRed/20 px-3 py-2 text-xs uppercase tracking-wide text-red-100">
            Copiar resumen
          </button>
        </div>
        <div className="section-grid">
          {filteredDocuments.map((document) => (
            <DocumentCard
              key={document.title}
              title={document.title}
              category={document.category}
              description={document.description}
              date={document.date}
              status={document.status}
              link={document.link}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Actualizaciones" title="Registro reciente del proyecto" />
        <div className="grid gap-3 md:grid-cols-2">
          {updates.map((update) => (
            <UpdateCard
              key={`${update.date}-${update.title}`}
              date={update.date}
              title={update.title}
              description={update.description}
              category={update.category}
              author={update.author}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
