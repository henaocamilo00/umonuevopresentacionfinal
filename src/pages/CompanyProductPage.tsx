import { Building2 } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { InfoCard } from '../components/cards/InfoCard';
import { ProductFeatureCard } from '../components/cards/ProductFeatureCard';
import { companyCapabilities, companySummary } from '../data/company';
import { productFeatures, productProfile } from '../data/product';

export function CompanyProductPage() {
  return (
    <div className="space-y-8">
      <section>
        <SectionHeader eyebrow="Empresa" title="UMO como base manufacturera" description={companySummary} />
        <div className="section-grid">
          {companyCapabilities.map((capability) => (
            <InfoCard key={capability.title} title={capability.title} description={capability.description} meta={capability.metric} icon={<Building2 size={18} />} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Producto" title="Sillines para podadoras" description="Ficha técnica visual del producto objetivo y sus atributos de entrada al mercado." />
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl glass p-5 shadow-glow">
            <img src={productProfile.image} alt={productProfile.title} className="h-64 w-full rounded-xl object-cover" />
            <div className="mt-4 grid gap-2 text-sm text-zinc-200 md:grid-cols-2">
              <p>
                <span className="text-zinc-400">Estado:</span> {productProfile.developmentStatus}
              </p>
              <p>
                <span className="text-zinc-400">Adaptación:</span> {productProfile.adaptationLevel}
              </p>
            </div>
          </article>

          <article className="rounded-2xl glass p-5 shadow-glow">
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
      </section>
    </div>
  );
}
