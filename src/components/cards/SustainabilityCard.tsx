import { Leaf, Handshake, LineChart } from 'lucide-react';

interface SustainabilityCardProps {
  dimension: 'Económica' | 'Social' | 'Ambiental';
  description: string;
}

const iconByDimension = {
  Económica: LineChart,
  Social: Handshake,
  Ambiental: Leaf
};

export function SustainabilityCard({ dimension, description }: SustainabilityCardProps) {
  const Icon = iconByDimension[dimension];

  return (
    <article className="rounded-2xl glass p-6 shadow-glow">
      <div className="flex items-center gap-3">
        <Icon className="text-umoRed" size={20} />
        <h3 className="text-lg font-semibold">{dimension}</h3>
      </div>
      <p className="mt-3 text-sm text-zinc-300">{description}</p>
    </article>
  );
}
