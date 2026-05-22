export interface ReferenceItem {
  id: string;
  category: 'Economía' | 'Agricultura' | 'Comercio' | 'Inversión' | 'Impuestos' | 'Empleo' | 'Marco institucional';
  source: string;
  title: string;
  url: string;
  note: string;
}

export const references: ReferenceItem[] = [
  {
    id: 'fred-gdp-iowa',
    category: 'Economía',
    source: 'FRED / Federal Reserve Bank of St. Louis',
    title: 'Gross Domestic Product: Iowa (State)',
    url: 'https://fred.stlouisfed.org/',
    note: 'Base para series de PIB estatal y comparación macroeconómica.'
  },
  {
    id: 'fred-gdp-nebraska',
    category: 'Economía',
    source: 'FRED / Federal Reserve Bank of St. Louis',
    title: 'Gross Domestic Product: Nebraska (State)',
    url: 'https://fred.stlouisfed.org/',
    note: 'Referencia para evolución económica de Nebraska frente a Iowa.'
  },
  {
    id: 'bea-regional',
    category: 'Economía',
    source: 'U.S. Bureau of Economic Analysis (BEA)',
    title: 'Regional Data: GDP & Personal Income by State',
    url: 'https://www.bea.gov/data',
    note: 'Fuente oficial para PIB estatal e ingreso personal per cápita.'
  },
  {
    id: 'bls-unemployment',
    category: 'Empleo',
    source: 'U.S. Bureau of Labor Statistics (BLS)',
    title: 'Local Area Unemployment Statistics',
    url: 'https://www.bls.gov/lau/',
    note: 'Indicadores de desempleo estatal para evaluación laboral.'
  },
  {
    id: 'usda-census',
    category: 'Agricultura',
    source: 'USDA National Agricultural Statistics Service',
    title: 'Census of Agriculture',
    url: 'https://www.nass.usda.gov/AgCensus/',
    note: 'Datos de granjas, tierra agrícola y cultivos principales.'
  },
  {
    id: 'usda-ers',
    category: 'Agricultura',
    source: 'USDA Economic Research Service',
    title: 'Farm Economy and Farm Income',
    url: 'https://www.ers.usda.gov/topics/farm-economy/',
    note: 'Contexto para valor de producción agrícola y dinámica sectorial.'
  },
  {
    id: 'ustr',
    category: 'Comercio',
    source: 'Office of the United States Trade Representative',
    title: 'State-by-State Trade Facts',
    url: 'https://ustr.gov/issue-areas/economy-trade',
    note: 'Marco de comercio internacional para análisis por estado.'
  },
  {
    id: 'ita-trade',
    category: 'Comercio',
    source: 'International Trade Administration',
    title: 'U.S. Trade Data and Analysis',
    url: 'https://www.trade.gov/data-visualization',
    note: 'Apoyo para exportaciones, mercados y oportunidades B2B.'
  },
  {
    id: 'selectusa-fdi',
    category: 'Inversión',
    source: 'SelectUSA / U.S. Department of Commerce',
    title: 'Foreign Direct Investment in the United States',
    url: 'https://www.trade.gov/selectusa',
    note: 'Referencia para empleo e impacto de inversión extranjera.'
  },
  {
    id: 'bea-fdi',
    category: 'Inversión',
    source: 'U.S. BEA',
    title: 'Direct Investment by Country and Industry',
    url: 'https://www.bea.gov/international/di1fdibal',
    note: 'Series para contrastar dinámica de inversión internacional.'
  },
  {
    id: 'taxfoundation-state-corporate-tax',
    category: 'Impuestos',
    source: 'Tax Foundation',
    title: 'State Corporate Income Tax Rates and Brackets',
    url: 'https://taxfoundation.org/data/all/state/state-corporate-income-tax-rates-brackets/',
    note: 'Comparativo de impuestos corporativos estatales.'
  },
  {
    id: 'minneapolis-fed-inflation',
    category: 'Economía',
    source: 'Federal Reserve Bank of Minneapolis',
    title: 'Inflation and Purchasing Power Data',
    url: 'https://www.minneapolisfed.org/',
    note: 'Apoyo para interpretación de inflación y poder adquisitivo.'
  },
  {
    id: 'iowa-economic-dev',
    category: 'Marco institucional',
    source: 'Iowa Economic Development Authority',
    title: 'Business and Trade Programs',
    url: 'https://iowaeda.com/',
    note: 'Información institucional para entrada comercial y alianzas.'
  },
  {
    id: 'nebraska-economic-dev',
    category: 'Marco institucional',
    source: 'Nebraska Department of Economic Development',
    title: 'Business Development Resources',
    url: 'https://opportunity.nebraska.gov/',
    note: 'Fuente de apoyo institucional para comparación de entorno.'
  }
];
