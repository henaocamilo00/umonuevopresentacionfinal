export type BadgeStatus = 'Completado' | 'En proceso' | 'Pendiente' | 'Requiere revisión';

export interface CompanyCapability {
  title: string;
  description: string;
  metric: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  status: BadgeStatus;
}

export interface MarketOpportunity {
  title: string;
  description: string;
  segment: string;
}

export interface ComparisonRow {
  indicator: string;
  iowa: string;
  nebraska: string;
  bestOption: 'Iowa' | 'Nebraska';
  justification: string;
}

export interface StrategyStep {
  step: number;
  title: string;
  description: string;
  status: BadgeStatus;
}

export interface SustainabilityItem {
  dimension: 'Económica' | 'Social' | 'Ambiental';
  description: string;
}

export interface Indicator {
  title: string;
  value: number;
  goal: number;
  status: 'bajo' | 'medio' | 'alto';
  category: 'comercial' | 'producto' | 'mercado' | 'sostenibilidad';
}

export interface ProjectDocument {
  title: string;
  category: string;
  description: string;
  date: string;
  status: BadgeStatus;
  link: string;
}

export interface ProjectUpdate {
  date: string;
  title: string;
  description: string;
  category: string;
  author?: string;
}

export type DofaType = 'Fortalezas' | 'Oportunidades' | 'Debilidades' | 'Amenazas';

export interface DofaItem {
  title: string;
  description: string;
  impact: 'Alto' | 'Medio' | 'Bajo';
}

export interface DofaQuadrant {
  type: DofaType;
  summary: string;
  items: DofaItem[];
}
