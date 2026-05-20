import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Building2, Factory, Globe, Package, Route, TrendingUp } from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { HeroDashboard } from './components/sections/HeroDashboard';
import { SectionHeader } from './components/ui/SectionHeader';
import { InfoCard } from './components/cards/InfoCard';
import { ProductFeatureCard } from './components/cards/ProductFeatureCard';
import { ComparisonTable } from './components/sections/ComparisonTable';
import { DofaSection } from './components/sections/DofaSection';
import { EconomicEnvironmentSection } from './components/sections/EconomicEnvironmentSection';
import { Timeline } from './components/sections/Timeline';
import { SustainabilityCard } from './components/cards/SustainabilityCard';
import { MetricCard } from './components/cards/MetricCard';
import { DocumentCard } from './components/cards/DocumentCard';
import { UpdateCard } from './components/cards/UpdateCard';
import { companyCapabilities, companySummary, companyTimeline } from './data/company';
import { documents } from './data/documents';
import { indicators } from './data/indicators';
import { marketOpportunities, marketSummary } from './data/market';
import { dofaQuadrants } from './data/dofa';
import { economicCharts, economicEnvironmentTitle } from './data/economicEnvironment';
import { potentialClients, viabilityChannels, viabilityNarrative, viabilityOverview, viabilityReadiness } from './data/internationalViability';
import { productFeatures, productProfile } from './data/product';
import { projectOverview, quickActions } from './data/project';
import { sustainabilityItems } from './data/sustainability';
import { statesComparison } from './data/statesComparison';
import { strategyTimeline } from './data/timeline';
import { updates } from './data/updates';

const sections = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'empresa', label: 'Empresa' },
  { id: 'producto', label: 'Producto' },
  { id: 'mercado', label: 'Mercado' },
  { id: 'dofa', label: 'DOFA' },
  { id: 'estados', label: 'Estados' },
  { id: 'viabilidad', label: 'Viabilidad' },
  { id: 'entorno-economico', label: 'Entorno Económico' },
  { id: 'estrategia', label: 'Estrategia' },
  { id: 'sostenibilidad', label: 'Sostenibilidad' },
  { id: 'indicadores', label: 'Indicadores' },
  { id: 'documentos', label: 'Documentos' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'conclusiones', label: 'Conclusiones' }
];

function App() {
  const [docCategory, setDocCategory] = useState('Todos');
  const [docQuery, setDocQuery] = useState('');
  const [kpiCategory, setKpiCategory] = useState('todos');
  const [viewMode, setViewMode] = useState<'resumen' | 'detalle'>('resumen');

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

  const filteredIndicators = useMemo(
    () => indicators.filter((indicator) => kpiCategory === 'todos' || indicator.category === kpiCategory),
    [kpiCategory]
  );

  const chartData = useMemo(
    () =>
      filteredIndicators.map((item) => ({
        name: item.title.length > 16 ? `${item.title.slice(0, 16)}...` : item.title,
        avance: Math.round((item.value / item.goal) * 100)
      })),
    [filteredIndicators]
  );

  const copySummary = async () => {
    const summary = {
      project: projectOverview,
      indicators: filteredIndicators,
      documents: filteredDocuments,
      updates
    };
    await navigator.clipboard.writeText(JSON.stringify(summary, null, 2));
  };

  return (
    <div className="min-h-screen text-fogWhite">
      <Navbar sections={sections} />
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-6 md:px-6">
        <Sidebar sections={sections} />
        <main className="w-full space-y-10">
          <section id="dashboard">
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
          </section>

          <motion.section id="empresa" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader eyebrow="Empresa" title="UMO como base manufacturera" description={companySummary} />
            <div className="section-grid">
              {companyCapabilities.map((capability) => (
                <InfoCard key={capability.title} title={capability.title} description={capability.description} meta={capability.metric} icon={<Building2 size={18} />} />
              ))}
            </div>
            <div className="mt-4 rounded-2xl glass p-5">
              <p className="text-sm font-semibold">Mini línea de tiempo UMO</p>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {companyTimeline.map((item) => (
                  <div key={item.year} className="rounded-xl bg-white/5 p-3">
                    <p className="text-xs uppercase tracking-wide text-metallicGray">{item.year}</p>
                    <p className="mt-1 text-sm text-zinc-300">{item.milestone}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section id="producto" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader eyebrow="Producto" title="Sillines para podadoras" />
            <div className="grid gap-4 lg:grid-cols-2">
              <article className="rounded-2xl glass p-5">
                <img src={productProfile.image} alt={productProfile.title} className="h-64 w-full rounded-xl object-cover" />
                <p className="mt-4 text-sm text-zinc-300">Estado: {productProfile.developmentStatus}</p>
                <p className="text-sm text-zinc-300">Adaptación requerida: {productProfile.adaptationLevel}</p>
              </article>
              <article className="rounded-2xl glass p-5">
                <p className="text-sm font-semibold">Materiales</p>
                <ul className="mt-2 space-y-1 text-sm text-zinc-300">
                  {productProfile.materials.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold">Clientes potenciales</p>
                <ul className="mt-2 space-y-1 text-sm text-zinc-300">
                  {productProfile.clients.map((client) => (
                    <li key={client}>• {client}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold">Canales</p>
                <ul className="mt-2 space-y-1 text-sm text-zinc-300">
                  {productProfile.channels.map((channel) => (
                    <li key={channel}>• {channel}</li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="mt-4 section-grid">
              {productFeatures.map((feature) => (
                <ProductFeatureCard key={feature.title} title={feature.title} description={feature.description} status={feature.status} />
              ))}
            </div>
          </motion.section>

          <motion.section id="mercado" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader eyebrow="Mercado" title={marketSummary.title} description={marketSummary.note} />
            <div className="section-grid">
              {marketOpportunities.map((opportunity) => (
                <InfoCard key={opportunity.title} title={opportunity.title} description={opportunity.description} meta={opportunity.segment} icon={<Globe size={18} />} />
              ))}
            </div>
          </motion.section>

          <motion.section id="dofa" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader
              eyebrow="Estrategia"
              title="Análisis DOFA del Proyecto"
              description="Matriz dinámica editable desde data/dofa.ts para fortalecer la toma de decisiones en la entrada al mercado estadounidense."
            />
            <DofaSection quadrants={dofaQuadrants} />
          </motion.section>

          <motion.section id="estados" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader eyebrow="Estados" title="Análisis comparativo: Iowa vs Nebraska" />
            <ComparisonTable rows={statesComparison} />
            <article className="mt-4 rounded-2xl border border-umoRed/40 bg-umoRed/10 p-5">
              <p className="text-lg font-semibold text-red-100">Estado recomendado: Iowa</p>
              <p className="mt-2 text-sm text-zinc-200">
                Iowa se recomienda como punto de entrada inicial porque combina alta actividad agrícola, mayor potencial comercial, demanda relacionada con maquinaria y mejores oportunidades para conectar con distribuidores, talleres y empresas del sector.
              </p>
            </article>
          </motion.section>

          <motion.section id="viabilidad" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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

            <article className="mt-4 rounded-2xl glass p-5 shadow-glow">
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
          </motion.section>

          <motion.section id="entorno-economico" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader
              eyebrow="Análisis"
              title={economicEnvironmentTitle}
              description="Datos para gráficas de línea comparativas entre Iowa y Nebraska sobre PIB, ingreso, inflación, desempleo e impuestos."
            />
            <EconomicEnvironmentSection charts={economicCharts} />
          </motion.section>

          <motion.section id="estrategia" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader eyebrow="Estrategia" title="Ruta de entrada al mercado estadounidense" description="Roadmap editable desde data/timeline.ts" />
            <Timeline steps={strategyTimeline} />
          </motion.section>

          <motion.section id="sostenibilidad" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader eyebrow="Sostenibilidad" title="Sostenibilidad del proyecto" />
            <div className="section-grid">
              {sustainabilityItems.map((item) => (
                <SustainabilityCard key={item.dimension} dimension={item.dimension} description={item.description} />
              ))}
            </div>
          </motion.section>

          <motion.section id="indicadores" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader eyebrow="KPI" title="Indicadores de seguimiento" />
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {['todos', 'comercial', 'producto', 'mercado', 'sostenibilidad'].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setKpiCategory(category)}
                  className={`rounded-full px-3 py-2 text-xs uppercase tracking-wide ${kpiCategory === category ? 'bg-umoRed/25 text-red-100' : 'bg-white/10 text-zinc-200'}`}
                >
                  {category}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setViewMode((prev) => (prev === 'resumen' ? 'detalle' : 'resumen'))}
                className="rounded-full border border-white/20 px-3 py-2 text-xs uppercase tracking-wide"
              >
                Vista: {viewMode}
              </button>
            </div>
            <div className="section-grid">
              {filteredIndicators.map((indicator) => (
                <MetricCard
                  key={indicator.title}
                  title={indicator.title}
                  value={indicator.value}
                  goal={indicator.goal}
                  status={indicator.status}
                  category={indicator.category}
                />
              ))}
            </div>
            {viewMode === 'detalle' ? (
              <div className="mt-5 h-72 rounded-2xl glass p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" />
                    <XAxis dataKey="name" stroke="#8A8F98" fontSize={11} />
                    <YAxis stroke="#8A8F98" />
                    <Tooltip contentStyle={{ background: '#1A1A1F', border: '1px solid rgba(255,255,255,0.1)' }} />
                    <Bar dataKey="avance" fill="#C1121F" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : null}
          </motion.section>

          <motion.section id="documentos" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
          </motion.section>

          <motion.section id="timeline" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader eyebrow="Actualizaciones" title="Actualizaciones del proyecto" />
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
          </motion.section>

          <motion.section id="conclusiones" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader eyebrow="Conclusión" title="Conclusión estratégica" />
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
          </motion.section>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
