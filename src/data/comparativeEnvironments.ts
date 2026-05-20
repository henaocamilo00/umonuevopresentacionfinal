export interface ComparativeRow {
  indicator: string;
  evaluationDirection: 'Mayor es mejor' | 'Menor es mejor';
  iowa: string;
  nebraska: string;
  iowaScore: number;
  nebraskaScore: number;
}

export interface ComparativeEnvironmentBlock {
  id: string;
  title: string;
  shortJustification: string;
  averages: {
    iowa: number;
    nebraska: number;
  };
  rows: ComparativeRow[];
}

export const comparativeEnvironmentBlocks: ComparativeEnvironmentBlock[] = [
  {
    id: 'entorno-social-cultural',
    title: '2. Entorno social / cultural',
    shortJustification:
      'Iowa obtiene mejor resultado porque tiene más granjas, mayor valor de productos agrícolas vendidos y más acres sembrados en cultivos principales. Esto indica una cultura agrícola más activa y un mercado más conectado con maquinaria, repuestos y productos como los sillines para podadoras.',
    averages: {
      iowa: 4.6,
      nebraska: 3.75
    },
    rows: [
      {
        indicator: 'Número de granjas 2022',
        evaluationDirection: 'Mayor es mejor',
        iowa: '86,911',
        nebraska: '44,479',
        iowaScore: 5,
        nebraskaScore: 2.56
      },
      {
        indicator: 'Valor de productos agrícolas vendidos 2022, billones USD',
        evaluationDirection: 'Mayor es mejor',
        iowa: '43.9',
        nebraska: '29.4',
        iowaScore: 5,
        nebraskaScore: 3.35
      },
      {
        indicator: 'Tierra en granjas 2022, millones de acres',
        evaluationDirection: 'Mayor es mejor',
        iowa: '29.98',
        nebraska: '44.0',
        iowaScore: 3.41,
        nebraskaScore: 5
      },
      {
        indicator: 'Acres sembrados en cultivos principales 2024, miles',
        evaluationDirection: 'Mayor es mejor',
        iowa: '24,250',
        nebraska: '19,813',
        iowaScore: 5,
        nebraskaScore: 4.09
      }
    ]
  },
  {
    id: 'entorno-tecnologico-geografico',
    title: '3. Entorno tecnológico / geográfico',
    shortJustification:
      'Iowa se destaca porque tiene mayor conexión con comercio internacional, más empleos relacionados con actividad comercial y mayor volumen de exportaciones. Además, su relación con maquinaria agrícola favorece la entrada de un producto como los sillines para podadoras.',
    averages: {
      iowa: 5,
      nebraska: 3.64
    },
    rows: [
      {
        indicator: 'Empleos apoyados por comercio internacional',
        evaluationDirection: 'Mayor es mejor',
        iowa: '380,000',
        nebraska: '260,000',
        iowaScore: 5,
        nebraskaScore: 3.42
      },
      {
        indicator: 'Mercados internacionales alcanzados por exportaciones',
        evaluationDirection: 'Mayor es mejor',
        iowa: '180',
        nebraska: '170',
        iowaScore: 5,
        nebraskaScore: 4.72
      },
      {
        indicator: 'Exportaciones totales de bienes y servicios 2023, billones USD',
        evaluationDirection: 'Mayor es mejor',
        iowa: '27',
        nebraska: '13',
        iowaScore: 5,
        nebraskaScore: 2.41
      },
      {
        indicator: 'Relación con maquinaria agrícola, calificación base',
        evaluationDirection: 'Mayor es mejor',
        iowa: '5',
        nebraska: '4',
        iowaScore: 5,
        nebraskaScore: 4
      }
    ]
  },
  {
    id: 'entorno-politico-legal',
    title: '4. Entorno político / legal',
    shortJustification:
      'El entorno político/legal es muy parejo. Nebraska tiene ventaja por menor impuesto corporativo, pero Iowa compensa con mejor apoyo institucional al comercio internacional y un ambiente favorable para negocios agrícolas. Por eso, Iowa queda apenas por encima en el promedio general.',
    averages: {
      iowa: 4.78,
      nebraska: 4.75
    },
    rows: [
      {
        indicator: 'Corporate tax 2024 %',
        evaluationDirection: 'Menor es mejor',
        iowa: '7.10',
        nebraska: '5.84',
        iowaScore: 4.11,
        nebraskaScore: 5
      },
      {
        indicator: 'Apoyo institucional al comercio internacional, calificación base',
        evaluationDirection: 'Mayor es mejor',
        iowa: '5',
        nebraska: '4',
        iowaScore: 5,
        nebraskaScore: 4
      },
      {
        indicator: 'Ambiente favorable para negocios agrícolas, calificación base',
        evaluationDirection: 'Mayor es mejor',
        iowa: '5',
        nebraska: '5',
        iowaScore: 5,
        nebraskaScore: 5
      },
      {
        indicator: 'Facilidad para entrada comercial, calificación base',
        evaluationDirection: 'Mayor es mejor',
        iowa: '4',
        nebraska: '4',
        iowaScore: 5,
        nebraskaScore: 5
      }
    ]
  },
  {
    id: 'comercio-internacional',
    title: '5. Comercio internacional',
    shortJustification:
      'Iowa muestra una ventaja clara en comercio internacional porque tiene mayores exportaciones agrícolas, mejor posición en el ranking exportador, más empresas exportadoras y mayor volumen total de exportaciones. Esto lo hace más atractivo para iniciar la entrada comercial de UMO.',
    averages: {
      iowa: 5,
      nebraska: 2.54
    },
    rows: [
      {
        indicator: 'Exportaciones agrícolas 2024, billones USD',
        evaluationDirection: 'Mayor es mejor',
        iowa: '13.7',
        nebraska: '8.2',
        iowaScore: 5,
        nebraskaScore: 2.99
      },
      {
        indicator: 'Ranking agrícola exportador en EE. UU.',
        evaluationDirection: 'Menor es mejor',
        iowa: '2',
        nebraska: '5',
        iowaScore: 5,
        nebraskaScore: 2
      },
      {
        indicator: 'Empresas exportadoras 2023',
        evaluationDirection: 'Mayor es mejor',
        iowa: '3,172',
        nebraska: '1,753',
        iowaScore: 5,
        nebraskaScore: 2.76
      },
      {
        indicator: 'Exportaciones totales bienes y servicios 2023, billones USD',
        evaluationDirection: 'Mayor es mejor',
        iowa: '27',
        nebraska: '13',
        iowaScore: 5,
        nebraskaScore: 2.41
      }
    ]
  },
  {
    id: 'inversion-extranjera',
    title: '6. Inversión extranjera',
    shortJustification:
      'Iowa obtiene mejor calificación porque tiene más empleo apoyado por inversión extranjera, mayor presencia de manufactura extranjera y más empresas internacionales. Esto es importante para UMO porque facilita alianzas, contactos comerciales y entrada a redes empresariales.',
    averages: {
      iowa: 5,
      nebraska: 3.5
    },
    rows: [
      {
        indicator: 'Empleo apoyado por inversión extranjera',
        evaluationDirection: 'Mayor es mejor',
        iowa: '66,700',
        nebraska: '39,000',
        iowaScore: 5,
        nebraskaScore: 2.92
      },
      {
        indicator: 'Empleo FDI en manufactura',
        evaluationDirection: 'Mayor es mejor',
        iowa: '37,900',
        nebraska: '19,600',
        iowaScore: 5,
        nebraskaScore: 2.59
      },
      {
        indicator: 'Empresas internacionales presentes',
        evaluationDirection: 'Mayor es mejor',
        iowa: '540',
        nebraska: '442',
        iowaScore: 5,
        nebraskaScore: 4.09
      },
      {
        indicator: 'Porcentaje de empleos FDI en manufactura',
        evaluationDirection: 'Mayor es mejor',
        iowa: '57%',
        nebraska: '50%',
        iowaScore: 5,
        nebraskaScore: 4.39
      }
    ]
  }
];
