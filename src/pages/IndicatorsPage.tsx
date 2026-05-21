import { useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { SectionHeader } from '../components/ui/SectionHeader';
import { MetricCard } from '../components/cards/MetricCard';
import { indicators } from '../data/indicators';

export function IndicatorsPage() {
  const [kpiCategory, setKpiCategory] = useState('todos');
  const [viewMode, setViewMode] = useState<'resumen' | 'detalle'>('resumen');

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

  return (
    <section>
      <SectionHeader eyebrow="KPI" title="Indicadores de seguimiento" description="Monitoreo del avance comercial, técnico y de mercado del proyecto de internacionalización." />
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
    </section>
  );
}
