export interface SustainabilityIndicatorItem {
  indicator: string;
  measures: string;
}

export interface SustainabilityDimensionBlock {
  id: 'economica' | 'social' | 'ambiental';
  title: string;
  context: string;
  indicators: SustainabilityIndicatorItem[];
  shortJustification: string;
}

export const sustainabilityDimensions: SustainabilityDimensionBlock[] = [
  {
    id: 'economica',
    title: 'Sostenibilidad económica',
    context:
      'Se relaciona con el crecimiento de UMO, el aumento de ventas y la diversificación del mercado.',
    indicators: [
      {
        indicator: 'Ventas internacionales piloto',
        measures: 'Mide si UMO logra concretar ventas de sillines para podadoras en Iowa.'
      },
      {
        indicator: 'Número de distribuidores aliados',
        measures: 'Mide cuántos talleres, distribuidores o aliados comerciales se vinculan al proceso.'
      },
      {
        indicator: 'Rentabilidad del producto exportado',
        measures: 'Evalúa si vender sillines en Estados Unidos deja margen positivo para UMO.'
      },
      {
        indicator: 'Diversificación de mercado',
        measures: 'Mide si UMO reduce su dependencia del mercado colombiano entrando a un mercado internacional.'
      }
    ],
    shortJustification:
      'La dimensión económica es importante porque la internacionalización debe generar ingresos reales, abrir nuevos canales de venta y permitir que UMO crezca sin depender únicamente del mercado nacional.'
  },
  {
    id: 'social',
    title: 'Sostenibilidad social',
    context:
      'Se relaciona con el impacto positivo en las personas: trabajadores, clientes, usuarios finales y aliados.',
    indicators: [
      {
        indicator: 'Comodidad del usuario final',
        measures: 'Evalúa si el sillín mejora la experiencia de quienes usan podadoras durante largas jornadas.'
      },
      {
        indicator: 'Fortalecimiento del talento humano',
        measures: 'Mide si el equipo de UMO desarrolla capacidades en comercio exterior, ventas B2B y logística internacional.'
      },
      {
        indicator: 'Satisfacción de distribuidores o clientes',
        measures: 'Mide la aceptación del producto por parte de talleres, distribuidores o compradores en Iowa.'
      },
      {
        indicator: 'Generación de aprendizaje organizacional',
        measures: 'Evalúa si la empresa aprende del proceso piloto para futuras exportaciones.'
      }
    ],
    shortJustification:
      'La dimensión social se justifica porque los sillines de UMO no solo buscan venderse, sino mejorar la comodidad del usuario y fortalecer las capacidades internas de la empresa para competir internacionalmente.'
  },
  {
    id: 'ambiental',
    title: 'Sostenibilidad ambiental',
    context:
      'Se relaciona con el uso responsable de materiales, la durabilidad del producto y la reducción de desperdicios.',
    indicators: [
      {
        indicator: 'Durabilidad del sillín',
        measures: 'Evalúa si el producto tiene una vida útil larga y evita reemplazos frecuentes.'
      },
      {
        indicator: 'Reducción de devoluciones',
        measures: 'Mide si la calidad del producto disminuye fallas, cambios o desperdicio logístico.'
      },
      {
        indicator: 'Uso eficiente de materiales',
        measures: 'Evalúa si UMO aprovecha mejor insumos como espuma, cuero sintético, bases y empaques.'
      },
      {
        indicator: 'Disminución de residuos por producto defectuoso',
        measures: 'Mide si hay menos desperdicio por errores de fabricación o mala calidad.'
      }
    ],
    shortJustification:
      'La dimensión ambiental es importante porque un sillín más resistente y durable reduce la necesidad de reemplazos constantes, disminuye desperdicios y mejora el uso de materiales dentro del proceso productivo.'
  }
];

export const sustainabilitySummary =
  'Los indicadores de sostenibilidad de UMO se dividen en tres dimensiones: económica, social y ambiental. En lo económico, se busca medir el crecimiento de la empresa mediante ventas internacionales, alianzas comerciales y rentabilidad. En lo social, se analiza la comodidad del usuario final, la satisfacción de clientes y el fortalecimiento del talento humano de UMO. En lo ambiental, se evalúa la durabilidad del sillín, la reducción de desperdicios y el uso eficiente de materiales. Estas dimensiones permiten que la internacionalización hacia Iowa no solo sea una oportunidad comercial, sino también un proceso responsable y sostenible.';

export const smartObjectiveText =
  'UMO buscará ingresar al mercado de Iowa, Estados Unidos, con su línea de sillines para podadoras en un plazo de 12 meses, mediante un modelo de exportación directa apoyado en alianzas estratégicas con al menos dos distribuidores o talleres especializados. El objetivo es concretar una venta piloto internacional, validar la aceptación del producto en el mercado agrícola estadounidense y fortalecer la capacidad comercial de la empresa para futuras expansiones.';
