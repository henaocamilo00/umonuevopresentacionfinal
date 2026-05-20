import { motion } from 'framer-motion';

interface HeroDashboardProps {
  title: string;
  subtitle: string;
  status: string;
  progress: number;
  recommendedState: string;
  product: string;
  market: string;
  actions: string[];
}

export function HeroDashboard({ title, subtitle, status, progress, recommendedState, product, market, actions }: HeroDashboardProps) {
  return (
    <section className="rounded-3xl glass p-6 md:p-8">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
        <p className="text-xs uppercase tracking-[0.2em] text-metallicGray">Dashboard principal</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-fogWhite md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-4xl text-sm text-zinc-300 md:text-base">{subtitle}</p>
      </motion.div>
      <div className="mt-6 section-grid">
        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-xs uppercase tracking-wide text-metallicGray">Estado actual</p>
          <p className="mt-2 text-xl font-semibold">{status}</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-xs uppercase tracking-wide text-metallicGray">Avance general</p>
          <p className="mt-2 text-xl font-semibold">{progress}%</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-xs uppercase tracking-wide text-metallicGray">Estado recomendado</p>
          <p className="mt-2 text-xl font-semibold text-red-200">{recommendedState}</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-xs uppercase tracking-wide text-metallicGray">Producto / Mercado</p>
          <p className="mt-2 text-sm font-semibold">{product} • {market}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {actions.map((action) => (
          <button key={action} type="button" className="rounded-full border border-umoRed/40 bg-umoRed/20 px-3 py-2 text-xs uppercase tracking-wide text-red-100 transition hover:bg-umoRed/30">
            {action}
          </button>
        ))}
      </div>
    </section>
  );
}
