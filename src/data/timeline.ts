import type { StrategyStep } from './types';

export const strategyTimeline: StrategyStep[] = [
  { step: 1, title: 'Validación técnica del producto', description: 'Pruebas de resistencia, confort y desempeño.', status: 'En proceso' },
  { step: 2, title: 'Fichas técnicas internacionales', description: 'Estandarización documental para compradores B2B.', status: 'En proceso' },
  { step: 3, title: 'Búsqueda de distribuidores', description: 'Mapeo y contacto inicial en Iowa.', status: 'En proceso' },
  { step: 4, title: 'Prueba piloto en Iowa', description: 'Validación comercial con clientes objetivo.', status: 'Pendiente' },
  { step: 5, title: 'Primeras cotizaciones B2B', description: 'Oferta de lotes iniciales y condiciones de entrega.', status: 'Pendiente' },
  { step: 6, title: 'Pedido piloto', description: 'Primera orden controlada para medir respuesta.', status: 'Pendiente' },
  { step: 7, title: 'Ajustes del producto', description: 'Optimización basada en retroalimentación de campo.', status: 'Pendiente' },
  { step: 8, title: 'Expansión gradual', description: 'Escalamiento a otros estados agrícolas.', status: 'Pendiente' }
];
