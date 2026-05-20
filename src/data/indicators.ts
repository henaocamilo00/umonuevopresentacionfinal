import type { Indicator } from './types';

export const indicators: Indicator[] = [
  { title: 'Distribuidores contactados', value: 15, goal: 30, status: 'medio', category: 'comercial' },
  { title: 'Prototipos desarrollados', value: 4, goal: 6, status: 'alto', category: 'producto' },
  { title: 'Cotizaciones enviadas', value: 9, goal: 20, status: 'medio', category: 'comercial' },
  { title: 'Estados evaluados', value: 2, goal: 5, status: 'medio', category: 'mercado' },
  { title: 'Avance del plan (%)', value: 62, goal: 100, status: 'medio', category: 'mercado' },
  { title: 'Aceptación del producto (%)', value: 71, goal: 85, status: 'alto', category: 'producto' },
  { title: 'Primer pedido piloto', value: 0, goal: 1, status: 'bajo', category: 'comercial' },
  { title: 'Documentos técnicos creados', value: 11, goal: 15, status: 'alto', category: 'sostenibilidad' }
];
