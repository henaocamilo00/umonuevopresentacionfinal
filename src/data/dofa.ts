import type { DofaQuadrant } from './types';

export const dofaQuadrants: DofaQuadrant[] = [
  {
    type: 'Fortalezas',
    summary: 'UMO cuenta con base manufacturera, conocimiento técnico y capacidad de adaptación productiva.',
    items: [
      {
        title: 'Experiencia industrial acumulada',
        description: 'Trayectoria en fabricación de sillines y componentes de movilidad con enfoque en calidad.',
        impact: 'Alto'
      },
      {
        title: 'Capacidad de ajuste de producto',
        description: 'Facilidad para adaptar materiales y diseño a requerimientos del segmento de podadoras.',
        impact: 'Alto'
      },
      {
        title: 'Control de procesos',
        description: 'Estructura operativa que permite estandarizar producción para exportación gradual.',
        impact: 'Medio'
      }
    ]
  },
  {
    type: 'Oportunidades',
    summary: 'El mercado estadounidense ofrece demanda sostenida de repuestos y accesorios agrícolas B2B.',
    items: [
      {
        title: 'Crecimiento del mercado de mantenimiento agrícola',
        description: 'Mayor uso de maquinaria y necesidades recurrentes de confort y reposición de partes.',
        impact: 'Alto'
      },
      {
        title: 'Entrada por estado objetivo (Iowa)',
        description: 'Condiciones favorables para iniciar pilotos comerciales y alianzas con distribuidores.',
        impact: 'Alto'
      },
      {
        title: 'Expansión a red de talleres especializados',
        description: 'Canal estratégico para validar producto y acelerar aprendizaje de mercado.',
        impact: 'Medio'
      }
    ]
  },
  {
    type: 'Debilidades',
    summary: 'El proyecto aún requiere validaciones técnicas y consolidación documental para escalar exportaciones.',
    items: [
      {
        title: 'Línea de producto en etapa inicial',
        description: 'Aún no hay historial comercial amplio en sillines para podadoras.',
        impact: 'Alto'
      },
      {
        title: 'Documentación internacional incompleta',
        description: 'Fichas técnicas y certificaciones deben fortalecerse para acelerar cierres B2B.',
        impact: 'Medio'
      },
      {
        title: 'Capacidad comercial internacional en formación',
        description: 'Se requiere ampliar estructura de negociación y seguimiento en EE.UU.',
        impact: 'Medio'
      }
    ]
  },
  {
    type: 'Amenazas',
    summary: 'Competencia establecida y cambios regulatorios pueden afectar tiempos y márgenes del ingreso al mercado.',
    items: [
      {
        title: 'Competidores posicionados',
        description: 'Marcas ya consolidadas pueden responder con presión de precios y distribución.',
        impact: 'Alto'
      },
      {
        title: 'Cambios en costos logísticos y arancelarios',
        description: 'Variaciones en flete o normativa pueden impactar rentabilidad inicial.',
        impact: 'Alto'
      },
      {
        title: 'Exigencias técnicas del comprador',
        description: 'Niveles altos de especificación pueden requerir ciclos adicionales de ajuste.',
        impact: 'Medio'
      }
    ]
  }
];
