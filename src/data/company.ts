import type { CompanyCapability } from './types';

export const companySummary =
  'UMO es una empresa colombiana con experiencia en fabricación de productos relacionados con movilidad, especialmente sillines para motocicletas y componentes como sistemas de escape. Esta trayectoria permite identificar una oportunidad de diversificación hacia sillines para podadoras, un producto relacionado con comodidad, resistencia y uso continuo.';

export const companyCapabilities: CompanyCapability[] = [
  {
    title: 'Experiencia manufacturera',
    description: 'Procesos industriales consolidados para producción en serie.',
    metric: '10+ años'
  },
  {
    title: 'Flexibilidad técnica',
    description: 'Capacidad de adaptar moldes y estructuras a nuevas líneas.',
    metric: 'Alta'
  },
  {
    title: 'Control de calidad',
    description: 'Estandarización para resistencia y confort prolongado.',
    metric: 'ISO en curso'
  }
];

export const companyTimeline = [
  { year: '2015', milestone: 'Consolidación de línea de sillines para movilidad urbana.' },
  { year: '2019', milestone: 'Escalamiento de capacidades de fabricación y acabados.' },
  { year: '2023', milestone: 'Evaluación de diversificación hacia componentes agroindustriales.' },
  { year: '2026', milestone: 'Inicio formal del proyecto de internacionalización UMO - USA.' }
];
