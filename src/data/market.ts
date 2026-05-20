import type { MarketOpportunity } from './types';

export const marketSummary = {
  title: 'Estados Unidos como mercado objetivo',
  note: 'Entrada gradual con enfoque B2B y validación por estado.'
};

export const marketOpportunities: MarketOpportunity[] = [
  {
    title: 'Demanda de maquinaria agrícola',
    description: 'Alto uso de equipos de mantenimiento y operación agrícola.',
    segment: 'Demanda'
  },
  {
    title: 'Ecosistema de distribuidores',
    description: 'Red activa de repuestos y accesorios para maquinaria.',
    segment: 'Canales'
  },
  {
    title: 'Potencial B2B',
    description: 'Compras recurrentes por parte de talleres y empresas del sector.',
    segment: 'Comercial'
  },
  {
    title: 'Ingreso progresivo',
    description: 'Posibilidad de iniciar con pilotos regionales antes de escalar.',
    segment: 'Estrategia'
  }
];
