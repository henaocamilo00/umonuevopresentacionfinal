import { SectionHeader } from '../components/ui/SectionHeader';
import { potentialClients, viabilityChannels, viabilityNarrative, viabilityOverview, viabilityReadiness } from '../data/internationalViability';

export function ViabilityPage() {
  return (
    <div className="space-y-8">
      <section>
        <SectionHeader eyebrow="Viabilidad" title={viabilityOverview.title} description={viabilityOverview.subtitle} />

        <div className="grid gap-4 xl:grid-cols-[1.35fr_1fr]">
          <article className="rounded-2xl glass p-5 shadow-glow">
            <p className="text-xs uppercase tracking-[0.2em] text-metallicGray">Diagnóstico estratégico</p>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-300">
              {viabilityNarrative.map((paragraph) => (
                <p key={paragraph.slice(0, 52)}>{paragraph}</p>
              ))}
            </div>
          </article>

          <div className="space-y-4">
            <article className="rounded-2xl glass p-5 shadow-glow">
              <p className="text-sm font-semibold text-fogWhite">Factores críticos antes de escalar</p>
              <div className="mt-3 space-y-3">
                {viabilityReadiness.map((item) => (
                  <div key={item.title} className="rounded-xl border border-white/10 bg-charcoal/45 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium text-fogWhite">{item.title}</p>
                      <span className="rounded-full border border-umoRed/40 bg-umoRed/15 px-2 py-1 text-[10px] uppercase tracking-wide text-red-100">
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-techBlue/35 bg-techBlue/10 p-5">
              <p className="text-sm font-semibold text-blue-100">Canales posibles de entrada</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {viabilityChannels.map((channel) => (
                  <span key={channel.name} className="rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1 text-xs text-blue-100">
                    {channel.name}
                  </span>
                ))}
              </div>
              <div className="mt-3 space-y-2 text-xs text-zinc-200">
                {viabilityChannels.map((channel) => (
                  <p key={channel.name + channel.note}>
                    <span className="font-semibold text-fogWhite">{channel.name}:</span> {channel.note}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <article className="rounded-2xl glass p-5 shadow-glow">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-fogWhite">Posibles clientes y aliados comerciales</h3>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-wide text-zinc-200">
              Referentes de mercado
            </span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {potentialClients.map((client) => (
              <div key={client.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal/60">
                <img src={client.image} alt={client.name} className="h-40 w-full object-cover opacity-75 transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-smokeBlack via-smokeBlack/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex items-center gap-2">
                    <img src={client.logo} alt={`${client.name} logo`} className="h-8 w-8 rounded-md bg-white p-1 object-contain" />
                    <p className="text-sm font-semibold text-fogWhite">{client.name}</p>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wide text-metallicGray">{client.segment}</p>
                  <p className="mt-1 text-sm text-zinc-200">{client.note}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section>
        <article className="rounded-2xl border border-umoRed/35 bg-umoRed/10 p-5 shadow-glow">
          <p className="text-xs uppercase tracking-[0.2em] text-red-100">Recurso recomendado</p>
          <h3 className="mt-2 text-lg font-semibold text-fogWhite">Bussines Model Canvas / UMO</h3>
          <p className="mt-2 text-sm text-zinc-200">Documento de referencia para estructurar el modelo de negocio del proyecto.</p>
          <a
            href="https://canva.link/1ewrjy91qyn8iqa"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-xl border border-red-300/40 bg-red-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-red-100 transition hover:bg-red-300/20"
          >
            Abrir enlace
          </a>
        </article>
      </section>
    </div>
  );
}
