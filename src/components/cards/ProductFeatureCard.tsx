interface ProductFeatureCardProps {
  title: string;
  description: string;
  status: string;
}

export function ProductFeatureCard({ title, description, status }: ProductFeatureCardProps) {
  return (
    <article className="rounded-2xl glass p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold">{title}</h3>
        <span className="rounded-full bg-umoRed/20 px-2 py-1 text-[10px] uppercase tracking-wide text-red-200">{status}</span>
      </div>
      <p className="mt-2 text-sm text-zinc-300">{description}</p>
    </article>
  );
}
