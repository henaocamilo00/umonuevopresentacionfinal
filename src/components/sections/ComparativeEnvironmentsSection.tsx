import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import type { ComparativeEnvironmentBlock } from '../../data/comparativeEnvironments';

interface ComparativeEnvironmentsSectionProps {
  blocks: ComparativeEnvironmentBlock[];
}

export function ComparativeEnvironmentsSection({ blocks }: ComparativeEnvironmentsSectionProps) {
  return (
    <div className="space-y-8">
      {blocks.map((block) => {
        const chartData = block.rows.map((row) => ({
          indicador: row.indicator.length > 30 ? `${row.indicator.slice(0, 30)}...` : row.indicator,
          iowa: row.iowaScore,
          nebraska: row.nebraskaScore
        }));

        return (
          <article key={block.id} className="rounded-2xl glass p-5 shadow-glow">
            <h3 className="text-2xl font-semibold text-fogWhite">{block.title}</h3>

            <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-zinc-100">
                  <tr>
                    <th className="px-3 py-3">Indicador</th>
                    <th className="px-3 py-3">Sentido</th>
                    <th className="px-3 py-3">Iowa</th>
                    <th className="px-3 py-3">Nebraska</th>
                    <th className="px-3 py-3">Calif. Iowa</th>
                    <th className="px-3 py-3">Calif. Nebraska</th>
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.indicator} className="border-t border-white/10 bg-charcoal/40">
                      <td className="px-3 py-3 align-top text-zinc-100">{row.indicator}</td>
                      <td className="px-3 py-3 align-top text-zinc-300">{row.evaluationDirection}</td>
                      <td className="px-3 py-3 align-top text-zinc-200">{row.iowa}</td>
                      <td className="px-3 py-3 align-top text-zinc-200">{row.nebraska}</td>
                      <td className="px-3 py-3 align-top text-red-100">{row.iowaScore.toFixed(2)}</td>
                      <td className="px-3 py-3 align-top text-blue-100">{row.nebraskaScore.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[1.25fr_1fr]">
              <div className="h-72 rounded-xl border border-white/10 bg-charcoal/40 p-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" />
                    <XAxis dataKey="indicador" stroke="#8A8F98" fontSize={11} />
                    <YAxis domain={[0, 5]} stroke="#8A8F98" />
                    <Tooltip
                      contentStyle={{
                        background: '#1A1A1F',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '10px'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="iowa" name="Iowa" fill="#C1121F" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="nebraska" name="Nebraska" fill="#2563EB" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4">
                <article className="rounded-xl border border-umoRed/35 bg-umoRed/10 p-4">
                  <p className="text-xs uppercase tracking-wide text-red-100">Justificación corta</p>
                  <p className="mt-2 text-sm text-zinc-100">{block.shortJustification}</p>
                </article>

                <article className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-metallicGray">Promedio del entorno</p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-charcoal/50 p-3">
                      <p className="text-xs uppercase tracking-wide text-zinc-400">Iowa</p>
                      <p className="mt-1 text-2xl font-semibold text-red-100">{block.averages.iowa.toFixed(2)}</p>
                    </div>
                    <div className="rounded-lg bg-charcoal/50 p-3">
                      <p className="text-xs uppercase tracking-wide text-zinc-400">Nebraska</p>
                      <p className="mt-1 text-2xl font-semibold text-blue-100">{block.averages.nebraska.toFixed(2)}</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
