export interface OptionComparison {
  name: string;
  example: string;
  summary: string;
  fit: 'elegida' | 'descartada';
  reason: string;
}

export interface BulletItem {
  title: string;
  detail: string;
}

export interface PersonaItem {
  name: string;
  profile: string;
  pain: string;
  trigger: string;
}

export interface BenefitItem {
  feature: string;
  customerBenefit: string;
}

export interface ChannelPhase {
  phase: string;
  detail: string;
}

export interface ExecutionPhase {
  phase: string;
  detail: string;
}

export const entryPage = {
  eyebrow: 'Modo de Entrada',
  title: 'Estrategia internacional elegida: Estrategia Internacional',
  subtitle: 'UMO produce en Guarne y exporta su saber-hacer a Iowa, manteniendo el control en la matriz.',
  paragraphs: [
    'Existen cuatro grandes estrategias para internacionalizar una empresa: la internacional, la multidoméstica, la global y la transnacional. Se diferencian en una pregunta clave: dónde se concentra la producción y el conocimiento, y cuánto se adapta el producto a cada país. Tras analizarlas, la que mejor se ajusta a UMO en esta etapa es la estrategia internacional.',
    'En la estrategia internacional, la empresa fabrica desde su país de origen (la matriz) y desde ahí lleva su producto al exterior, protegiendo en casa su conocimiento clave y manteniendo la coordinación centralizada. Es exactamente el caso de UMO: toda la producción y la ingeniería permanecen en la planta de Guarne, y la podadora se exporta a Iowa con una adaptación mínima. La empresa no dispersa su producción por el mundo ni rediseña el producto para cada país; conserva su ventaja de calidad de fabricación automotriz concentrada en Colombia.'
  ]
};

export const strategyComparison: OptionComparison[] = [
  {
    name: 'Internacional',
    example: 'Modelo elegido para UMO',
    summary: 'Se produce en la matriz y se exporta con coordinación centralizada.',
    fit: 'elegida',
    reason: 'Encaja con UMO, que fabrica en Guarne y solo adapta lo mínimo para Iowa.'
  },
  {
    name: 'Multidoméstica',
    example: 'Nestlé, Unilever',
    summary: 'Alta adaptación local y producción repartida en varios países.',
    fit: 'descartada',
    reason: 'UMO no va a rediseñar la podadora por país ni a producir fuera de Colombia.'
  },
  {
    name: 'Global',
    example: 'IBM, Huawei',
    summary: 'Producto uniforme para todos los mercados y máxima escala de costos.',
    fit: 'descartada',
    reason: 'UMO entra de forma gradual y requiere ajustes de cumplimiento para Iowa.'
  },
  {
    name: 'Transnacional',
    example: 'Zara, Toyota',
    summary: 'Combina adaptación local y eficiencia global, con alta complejidad operativa.',
    fit: 'descartada',
    reason: 'Es demasiado compleja para una primera exportación de alcance estatal.'
  }
];

export const entryMode = {
  title: 'El modo de entrada: exportación directa por canal digital',
  subtitle: 'Venta directa desde Colombia, sin montar fábrica ni oficinas en Estados Unidos.',
  paragraphs: [
    'Dentro de la estrategia internacional, la forma concreta de entrar es la exportación directa apoyada en canal digital. UMO vende por internet, a través de Amazon y de una tienda propia, y se apoya en una bodega aliada en Estados Unidos que almacena el producto, lo despacha al cliente final y atiende la posventa. Así, la empresa llega al mercado sin abrir sede propia y conserva el control del precio, de la marca y de la relación con el cliente.',
    'Se descartaron otras formas de entrada por razones claras: la exportación indirecta reduce contacto con el cliente; la franquicia y la licencia no aplican a un producto físico en fase inicial de marca; y abrir planta propia en Estados Unidos implica una inversión y un riesgo demasiado altos para la primera incursión.'
  ]
};

export const entryAdvantages: BulletItem[] = [
  {
    title: 'Bajo riesgo y baja inversión',
    detail: 'No se compra terreno ni se construye bodega; la operación se apoya en un aliado logístico en EE.UU.'
  },
  {
    title: 'Control total',
    detail: 'UMO define precio, maneja marca y conserva datos del cliente.'
  },
  {
    title: 'Arancel casi cero',
    detail: 'El TLC Colombia - Estados Unidos favorece la competitividad de precio.'
  },
  {
    title: 'Comercio seguro listo',
    detail: 'La certificación CTPAT ayuda a agilizar y abaratar procesos aduaneros.'
  }
];

export const practicalImplications: BulletItem[] = [
  {
    title: 'Adecuación técnica obligatoria',
    detail: 'Voltaje 120V, enchufe compatible, manual en inglés, medidas en pulgadas y certificación de seguridad eléctrica.'
  },
  {
    title: 'Ruta logística definida',
    detail: 'Contenedor marítimo desde Colombia a bodega aliada en el centro de EE.UU., con entrega a Iowa en 1-2 días.'
  },
  {
    title: 'Control de costos clave',
    detail: 'La publicidad es el componente más optimizable y crítico para escalar ventas digitales.'
  },
  {
    title: 'Posicionamiento de marca',
    detail: 'Promesa de calidad confiable a buen precio, sin sobreprecio de marcas líderes.'
  }
];

export const marketingPage = {
  eyebrow: 'Estrategia de Marketing',
  title: 'Estrategia comercial para Iowa',
  subtitle: 'Entrada digital enfocada, propuesta de valor clara y crecimiento por etapas.',
  whyIowa: [
    'Iowa es un punto de entrada ideal porque allí la vivienda con jardín es muy común: cerca del 70% de las familias son dueñas de su casa y predomina la vivienda unifamiliar. Esto crea una demanda natural para podadoras en hogares.',
    'Además, anunciar en Iowa suele costar menos que en grandes ciudades de las costas y hay menor presión competitiva publicitaria, lo que reduce el costo de adquisición de cliente. A esto se suma la transición a equipos a batería por menor ruido, menos humo y mantenimiento simplificado.'
  ],
  productAdaptation:
    'La estrategia es de adaptación mínima: no se reinventa la podadora, se ajusta para cumplir norma y uso en Iowa (120V, enchufe, manual e interfaz en inglés, medidas en pulgadas y certificación eléctrica).',
  closing:
    'UMO entra con enfoque de valor: calidad industrial, precio competitivo y canal digital ágil para iterar rápido con base en datos de mercado.'
};

export const marketingStats = [
  { label: 'Hogares propietarios en Iowa', value: '≈70%', note: 'Base sólida para compra de podadoras residenciales.' },
  { label: 'Canales de venta inicial', value: '2', note: 'Amazon + tienda propia.' },
  { label: 'Modelo de precio', value: 'Penetración', note: 'Entrar por debajo de marcas premium para ganar mercado.' },
  { label: 'Foco geográfico', value: 'Iowa', note: 'Concentración para construir tracción y reputación.' }
];

export const digitalTools: BulletItem[] = [
  {
    title: 'SEO en Google',
    detail: 'Web y blog con contenido de jardinería para capturar demanda orgánica local.'
  },
  {
    title: 'SEM en Google',
    detail: 'Anuncios de búsqueda geolocalizados en Iowa para evitar gasto fuera de mercado.'
  },
  {
    title: 'Redes sociales',
    detail: 'Campañas en Facebook, Instagram y YouTube con video demostrativo y prueba de uso real.'
  },
  {
    title: 'Email marketing',
    detail: 'Captura de leads con descuento inicial y secuencias de fidelización por temporada.'
  }
];

export const personas: PersonaItem[] = [
  {
    name: 'Propietario práctico',
    profile: '45 años, suburbios de Des Moines, ingreso medio.',
    pain: 'Cansado de podadora a gasolina ruidosa y de alto mantenimiento.',
    trigger: 'Durabilidad, buen precio y reseñas confiables.'
  },
  {
    name: 'Compradora consciente',
    profile: '34 años, jardín pequeño-mediano, activa en redes.',
    pain: 'Busca solución moderna, silenciosa y más limpia.',
    trigger: 'Sostenibilidad, diseño y validación social (reseñas).'
  },
  {
    name: 'Usuario de terreno grande',
    profile: '52 años, zona rural, uso intensivo.',
    pain: 'Necesita autonomía, robustez y capacidad sostenida.',
    trigger: 'Potencia, garantía y respaldo postventa.'
  }
];

export const benefitMap: BenefitItem[] = [
  {
    feature: 'Motor eléctrico a batería',
    customerBenefit: 'No más gasolina ni humo, menos ruido y arranque inmediato.'
  },
  {
    feature: 'Calidad de fabricación automotriz',
    customerBenefit: 'Mayor confiabilidad y durabilidad en uso continuo.'
  },
  {
    feature: 'Batería utilizable en varios equipos',
    customerBenefit: 'Ahorro progresivo al compartir batería entre herramientas.'
  },
  {
    feature: 'Bajo mantenimiento',
    customerBenefit: 'Sin aceite, bujías ni filtros; menos costo operativo.'
  },
  {
    feature: 'Garantía de 2 a 3 años',
    customerBenefit: 'Mayor confianza en la compra y respaldo de marca.'
  },
  {
    feature: 'Precio competitivo',
    customerBenefit: 'Relación calidad-precio superior sin pagar prima premium.'
  }
];

export const channelsRoadmap: ChannelPhase[] = [
  {
    phase: 'Fase 1: Amazon',
    detail: 'Canal de arranque para captar ventas iniciales y construir reseñas.'
  },
  {
    phase: 'Fase 2: Tienda propia',
    detail: 'Mayor margen y control de marca/datos del cliente.'
  },
  {
    phase: 'Fase 3: Redes como vitrina',
    detail: 'Tráfico calificado hacia marketplace y ecommerce propio.'
  },
  {
    phase: 'Fase 4: Escalamiento',
    detail: 'Expandir a Walmart en línea y evaluar entrada a retail físico regional.'
  }
];

export const priceStrategy = [
  'Se usa precio de penetración para ganar mercado y reseñas en etapa inicial.',
  'Posicionamiento por debajo de EGO/Greenworks y por encima de opciones low-cost de baja calidad.',
  'El arancel cercano a cero y el costo competitivo en Guarne permiten sostener el margen.',
  'Luego de construir reputación, el precio se ajusta gradualmente hacia niveles de competencia.'
];

export const competitiveAdvantages: BulletItem[] = [
  {
    title: 'Calidad de origen automotriz',
    detail: 'Promesa de durabilidad respaldada por estándares exigentes de manufactura.'
  },
  {
    title: 'Ventaja de costo por TLC',
    detail: 'Facilita propuesta de valor agresiva sin sacrificar rentabilidad.'
  },
  {
    title: 'Costo de fabricación competitivo',
    detail: 'Da espacio a la estrategia de entrada por precio y promoción inicial.'
  },
  {
    title: 'Agilidad digital',
    detail: 'Permite ajustar precio, mensaje y oferta con mayor velocidad que canales físicos.'
  },
  {
    title: 'Concentración geográfica',
    detail: 'Foco en Iowa para consolidar tracción antes de escalar a nuevos estados.'
  }
];

export const executionRoadmap: ExecutionPhase[] = [
  {
    phase: 'Preparación (meses 1 a 4)',
    detail: 'Certificar y adaptar producto, registrar marca y preparar materiales en inglés.'
  },
  {
    phase: 'Lanzamiento (meses 4 a 8)',
    detail: 'Activar bodega aliada, abrir Amazon/tienda propia, enviar primer contenedor y arrancar pauta en Iowa.'
  },
  {
    phase: 'Tracción (meses 8 a 14)',
    detail: 'Acumular reseñas, optimizar fichas/campañas y lanzar promociones estacionales.'
  },
  {
    phase: 'Crecimiento (mes 14+)',
    detail: 'Escalar a nuevos canales, ampliar línea y ajustar precio hacia niveles de competencia.'
  }
];
