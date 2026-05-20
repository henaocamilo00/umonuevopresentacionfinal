export type EconomicUnit = 'usd_millions' | 'usd' | 'percent';

export interface EconomicSeries {
  key: string;
  label: string;
  color: string;
}

export interface EconomicChart {
  id: string;
  title: string;
  subtitle: string;
  insight: string;
  unit: EconomicUnit;
  series: EconomicSeries[];
  data: Array<Record<string, number | string>>;
}

export const economicEnvironmentTitle = 'Entorno económico';

export const economicCharts: EconomicChart[] = [
  {
    id: 'gdp-total',
    title: 'PIB total del estado',
    subtitle: 'Línea comparativa Iowa vs Nebraska (millones USD).',
    insight: 'Iowa tiene una economía estatal más grande, lo cual favorece la entrada comercial de UMO.',
    unit: 'usd_millions',
    series: [
      { key: 'iowa', label: 'Iowa', color: '#C1121F' },
      { key: 'nebraska', label: 'Nebraska', color: '#2563EB' }
    ],
    data: [
      { year: '2021', iowa: 225055.3, nebraska: 158000.0 },
      { year: '2022', iowa: 244156.8, nebraska: 171000.0 },
      { year: '2023', iowa: 253166.5, nebraska: 184000.0 },
      { year: '2024', iowa: 265794.5, nebraska: 195000.0 }
    ]
  },
  {
    id: 'real-income-per-capita',
    title: 'PIB per cápita / ingreso real per cápita',
    subtitle: 'Línea comparativa de ingreso real per cápita (USD).',
    insight:
      'Nebraska puede mostrar un ingreso per cápita ligeramente superior, pero Iowa compensa con mayor tamaño económico, actividad agrícola y comercio.',
    unit: 'usd',
    series: [
      { key: 'iowa', label: 'Iowa', color: '#C1121F' },
      { key: 'nebraska', label: 'Nebraska', color: '#2F7D32' }
    ],
    data: [
      { year: '2021', iowa: 59666, nebraska: 62000 },
      { year: '2022', iowa: 59743, nebraska: 62500 },
      { year: '2023', iowa: 58646, nebraska: 63000 },
      { year: '2024', iowa: 60144, nebraska: 64000 }
    ]
  },
  {
    id: 'inflation-purchasing-power',
    title: 'Inflación / poder adquisitivo',
    subtitle: 'Línea de inflación de EE. UU. como referencia para la matriz.',
    insight: 'En 2024 mejora el poder adquisitivo frente a 2022, lo cual ayuda a la viabilidad comercial.',
    unit: 'percent',
    series: [{ key: 'usInflation', label: 'Inflación EE. UU.', color: '#8A8F98' }],
    data: [
      { year: '2021', usInflation: 4.7 },
      { year: '2022', usInflation: 8.0 },
      { year: '2023', usInflation: 4.1 },
      { year: '2024', usInflation: 2.9 }
    ]
  },
  {
    id: 'unemployment',
    title: 'Desempleo',
    subtitle: 'Línea comparativa de desempleo estatal (%).',
    insight:
      'Ambos estados tienen desempleo bajo; Nebraska suele verse más fuerte en estabilidad laboral.',
    unit: 'percent',
    series: [
      { key: 'iowa', label: 'Iowa', color: '#C1121F' },
      { key: 'nebraska', label: 'Nebraska', color: '#2563EB' }
    ],
    data: [
      { year: '2021', iowa: 4.4, nebraska: 2.5 },
      { year: '2022', iowa: 2.8, nebraska: 2.3 },
      { year: '2023', iowa: 2.9, nebraska: 2.0 },
      { year: '2024', iowa: 3.1, nebraska: 2.8 }
    ]
  },
  {
    id: 'state-taxes',
    title: 'Tax / impuestos estatales',
    subtitle: 'Línea comparativa de corporate tax estatal aproximado (%).',
    insight:
      'Nebraska aparece más competitivo en impuestos corporativos; Iowa mantiene fortaleza por actividad agrícola y comercio.',
    unit: 'percent',
    series: [
      { key: 'iowa', label: 'Iowa', color: '#C1121F' },
      { key: 'nebraska', label: 'Nebraska', color: '#F59E0B' }
    ],
    data: [
      { year: '2021', iowa: 9.8, nebraska: 7.81 },
      { year: '2022', iowa: 9.8, nebraska: 7.81 },
      { year: '2023', iowa: 8.4, nebraska: 7.25 },
      { year: '2024', iowa: 7.1, nebraska: 5.84 }
    ]
  }
];
