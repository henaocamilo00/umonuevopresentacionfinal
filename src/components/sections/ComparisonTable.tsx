import type { ComparisonRow } from '../../data/types';

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-white/10">
          <tr>
            <th className="px-4 py-3">Indicador</th>
            <th className="px-4 py-3">Iowa</th>
            <th className="px-4 py-3">Nebraska</th>
            <th className="px-4 py-3">Mejor opción</th>
            <th className="px-4 py-3">Justificación breve</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.indicator} className="border-t border-white/10 bg-charcoal/30">
              <td className="px-4 py-3 font-medium">{row.indicator}</td>
              <td className="px-4 py-3">{row.iowa}</td>
              <td className="px-4 py-3">{row.nebraska}</td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-umoRed/20 px-2 py-1 text-xs text-red-200">{row.bestOption}</span>
              </td>
              <td className="px-4 py-3 text-zinc-300">{row.justification}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
