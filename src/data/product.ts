import type { ProductFeature } from './types';

export const productProfile = {
  title: 'Sillines para podadoras',
  image:
    'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=1200&q=80',
  materials: ['Espuma de alta densidad', 'Base reforzada en polímero', 'Recubrimiento resistente al clima'],
  clients: ['Distribuidores de repuestos', 'Talleres especializados', 'Empresas agrícolas'],
  channels: ['B2B directo', 'Mayoristas regionales', 'Marketplace industrial'],
  adaptationLevel: 'Medio',
  developmentStatus: 'Prototipado funcional'
};

export const productFeatures: ProductFeature[] = [
  { title: 'Resistencia', description: 'Estructura para uso continuo en campo.', status: 'En proceso' },
  { title: 'Comodidad', description: 'Diseño ergonómico para largas jornadas.', status: 'Completado' },
  { title: 'Durabilidad', description: 'Materiales con mayor vida útil y menor desgaste.', status: 'En proceso' },
  { title: 'Adaptabilidad', description: 'Compatibilidad gradual con diferentes modelos.', status: 'Pendiente' },
  { title: 'Fabricación colombiana', description: 'Producción local con enfoque exportador.', status: 'Completado' },
  { title: 'Precio competitivo', description: 'Costo objetivo frente a referentes del mercado.', status: 'En proceso' }
];
