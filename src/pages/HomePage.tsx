import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Compass, ExternalLink, Factory, Globe, PlayCircle } from 'lucide-react';
import { HeroDashboard } from '../components/sections/HeroDashboard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { InfoCard } from '../components/cards/InfoCard';
import { companyTimeline } from '../data/company';
import { homeContext, homeModules, homePillars } from '../data/homeContext';
import { projectOverview, quickActions } from '../data/project';
import { strategicMatrix } from '../data/strategicMatrix';

const iconMap = [Factory, Globe, Compass, Building2];

export function HomePage() {
  return (
    <div className="space-y-8">
      <HeroDashboard
        title={projectOverview.title}
        subtitle={projectOverview.subtitle}
        status={projectOverview.projectStatus}
        progress={projectOverview.progress}
        recommendedState={projectOverview.recommendedState}
        product={projectOverview.product}
        market={projectOverview.targetMarket}
        actions={quickActions}
      />

      <section>
        <article className="rounded-2xl border border-techBlue/35 bg-techBlue/10 p-5 shadow-glow">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-100">Video del proyecto</p>
              <h2 className="mt-2 text-xl font-semibold text-fogWhite">{strategicMatrix.video.title}</h2>
              <p className="mt-1 text-sm text-zinc-200">
                Recurso audiovisual ubicado en Inicio para acceso rápido del equipo y presentación del proyecto.
              </p>
            </div>
            <a
              href={strategicMatrix.video.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-300/40 bg-blue-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-100 transition hover:bg-blue-300/20"
            >
              <PlayCircle size={14} />
              Ver video
              <ExternalLink size={12} />
            </a>
          </div>
        </article>
      </section>

      <section>
        <SectionHeader
          eyebrow="Contexto"
          title="Panorama general de UMO"
          description="Visión ampliada para que cualquier lector entienda rápido la base empresarial y la lógica del proyecto de internacionalización."
        />
        <div className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
          <article className="rounded-2xl glass p-6 shadow-glow">
            <p className="text-sm leading-relaxed text-zinc-200">{homeContext.intro}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-200">{homeContext.extended}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-200">{homeContext.vision}</p>
          </article>

          <article className="rounded-2xl glass p-6 shadow-glow">
            <p className="text-xs uppercase tracking-[0.2em] text-metallicGray">Línea de evolución</p>
            <div className="mt-4 space-y-3">
              {companyTimeline.map((item) => (
                <div key={item.year} className="rounded-xl border border-white/10 bg-charcoal/40 p-3">
                  <p className="text-xs uppercase tracking-wide text-metallicGray">{item.year}</p>
                  <p className="mt-1 text-sm text-zinc-200">{item.milestone}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Pilares" title="Fundamentos estratégicos" />
        <div className="section-grid">
          {homePillars.map((pillar, index) => {
            const Icon = iconMap[index % iconMap.length];
            return <InfoCard key={pillar.title} title={pillar.title} description={pillar.description} meta={pillar.meta} icon={<Icon size={18} />} />;
          })}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Explorar" title="Módulos del portal" description="Navega por subpáginas organizadas para analizar cada dimensión sin depender de un scroll largo." />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {homeModules.map((module, index) => (
            <motion.div key={module.route} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
              <Link to={module.route} className="group block rounded-2xl border border-white/10 bg-charcoal/45 p-4 transition hover:border-umoRed/50 hover:bg-charcoal/65">
                <p className="text-base font-semibold text-fogWhite">{module.title}</p>
                <p className="mt-2 text-sm text-zinc-300">{module.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-wide text-red-100">
                  Abrir módulo <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
