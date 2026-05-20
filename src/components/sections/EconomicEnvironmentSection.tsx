import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import type { EconomicChart, EconomicUnit } from '../../data/economicEnvironment';

interface EconomicEnvironmentSectionProps {
  charts: EconomicChart[];
}

function formatMetric(value: number, unit: EconomicUnit) {
  if (unit === 'percent') {
    return `${value.toFixed(1)}%`;
  }

  if (unit === 'usd_millions') {
    return `${new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 1
    }).format(value)} M`;
  }

  return `$${new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0
  }).format(value)}`;
}

export function EconomicEnvironmentSection({ charts }: EconomicEnvironmentSectionProps) {
  return (
    <div className="space-y-5">
      {charts.map((chart) => (
        <article key={chart.id} className="rounded-2xl glass p-5 shadow-glow">
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-fogWhite">{chart.title}</h3>
            <p className="mt-1 text-sm text-zinc-300">{chart.subtitle}</p>
          </div>

          <div className="h-64 rounded-xl bg-charcoal/35 p-2 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chart.data} margin={{ top: 10, right: 14, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" />
                <XAxis dataKey="year" stroke="#8A8F98" />
                <YAxis stroke="#8A8F98" tickFormatter={(value) => formatMetric(value, chart.unit)} width={95} />
                <Tooltip
                  formatter={(value) => {
                    if (typeof value !== 'number') {
                      return value;
                    }
                    return formatMetric(value, chart.unit);
                  }}
                  contentStyle={{
                    background: '#1A1A1F',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '10px'
                  }}
                  labelStyle={{ color: '#F5F5F5' }}
                />
                <Legend />
                {chart.series.map((series) => (
                  <Line
                    key={series.key}
                    type="monotone"
                    dataKey={series.key}
                    name={series.label}
                    stroke={series.color}
                    strokeWidth={3}
                    dot={{ r: 3, fill: series.color }}
                    activeDot={{ r: 5 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>

          <p className="mt-3 text-sm text-zinc-300">
            <span className="font-semibold text-fogWhite">Lectura:</span> {chart.insight}
          </p>
        </article>
      ))}
    </div>
  );
}
