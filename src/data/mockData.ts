import { ConsultingService, WizardQuestion, ChartDataPoint, ExecutiveMember } from '../types';

export const SERVICES_DATA: ConsultingService[] = [
  {
    id: 'procesos',
    title: 'Reingeniería & Análisis de Procesos',
    subtitle: 'Eficiencia Operativa & Reducción de Desperdicios',
    iconName: 'PieChart',
    accentColor: 'text-blue-700',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Mapeo integral de flujos operativos (BPMN), identificación de desperdicios y rediseño estructural enfocado en maximizar la productividad de cada departamento.',
    keyBenefits: [
      'Mapeo AS-IS / TO-BE de Operaciones',
      'Eliminación de Cuellos de Botella',
      'Manuales de Procedimientos Estándar (SOP)'
    ],
    phases: [
      'Diagnóstico de flujos operativos AS-IS y diseño de arquitectura TO-BE',
      'Reducción de tiempos de ciclo y procesamiento hasta en un 40%',
      'Estandarización de Manuales de Procedimientos Estándar (SOP)',
      'Matriz de asignación de responsabilidades RACI y tableros de control'
    ],
    deliverables: [
      'Diagrama BPMN detallado por área funcional',
      'Manual integral de políticas y procedimientos aprobados',
      'Matriz de riesgos operacionales y mitigación'
    ],
    metrics: '+45% en velocidad de entrega de pedidos'
  },
  {
    id: 'tecnologia',
    title: 'Integración Tecnológica (ERP / CRM / RPA)',
    subtitle: 'Unificación Digital & Automatización',
    iconName: 'Network',
    accentColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Selección, arquitectura e implementación de soluciones de software empresarial para interconectar departamentos, automatizar tareas repetitivas y unificar bases de datos.',
    keyBenefits: [
      'Implementación & Asesoría en ERP / CRM',
      'Automatización Robótica de Procesos (RPA)',
      'Desarrollo de API & Middleware Personalizado'
    ],
    phases: [
      'Evaluación y selección objetiva de plataformas ERP / CRM',
      'Desarrollo de Bots RPA para captura y migración masiva de datos',
      'Construcción de Middleware y APIs entre sistemas legados',
      'Pruebas de estrés, seguridad informática y despliegue en la nube'
    ],
    deliverables: [
      'Ecosistema tecnológico interconectado en tiempo real',
      'Bots de automatización configurados y supervisados',
      'Documentación técnica y guías de administración de APIs'
    ],
    metrics: '-70% en tiempo de digitación de facturas y órdenes'
  },
  {
    id: 'bi',
    title: 'Inteligencia de Negocios (BI) & Analytics',
    subtitle: 'Decisiones Basadas en Datos en Tiempo Real',
    iconName: 'BarChart3',
    accentColor: 'text-amber-600',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Diseño de almacenes de datos y tableros gerenciales en tiempo real para tomar decisiones fundamentadas en información exacta y actualizada.',
    keyBenefits: [
      'Dashboards Gerenciales PowerBI / Tableau',
      'Arquitectura de Datos ETL & Cloud Data Lake',
      'Modelos de Proyección & Ventas Predictivas'
    ],
    phases: [
      'Diseño de Tableros Gerenciales ejecutivos en PowerBI y herramientas web',
      'Integración de Data Warehouse centralizado con ETL automatizado',
      'Alertas automáticas de desviación de metas presupuestarias e inventarios',
      'Modelado analítico predictivo para demanda y forecasting de ventas'
    ],
    deliverables: [
      'Cuadro de mando C-Level accesible vía móvil y web',
      'Gobernanza de datos con catálogo de métricas unificadas',
      'Automatización de reportes ejecutivos semanales'
    ],
    metrics: '98.4% de precisión en proyecciones comerciales'
  },
  {
    id: 'escalamiento',
    title: 'Desarrollo Empresarial & Escalamiento',
    subtitle: 'Estructura Corporativa para Crecimiento Rápido',
    iconName: 'TrendingUp',
    accentColor: 'text-rose-700',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
    description: 'Estrategias de estructuración corporativa, expansión regional, modelo de gobierno y optimización de la cadena de valor para empresas en crecimiento rápido.',
    keyBenefits: [
      'Planes Estratégicos de Expansión Corporativa',
      'Estructuración de Gobierno Corporativo',
      'Diseño de Modelos de Negocio Escalables'
    ],
    phases: [
      'Estrategia de expansión de mercado e infraestructura comercial',
      'Estructuración de comités directivos, comités de auditoría y metas OKR',
      'Optimización de la cadena de valor, abastecimiento y compras',
      'Alineación presupuestaria estratégica y plan financiero quinquenal'
    ],
    deliverables: [
      'Plan maestro de escalamiento a 3 y 5 años',
      'Estatutos y protocolos de gobierno corporativo',
      'Estructura organizacional y planes de compensación por objetivos'
    ],
    metrics: '3.2x Retorno de Inversión promedio en 18 meses'
  },
  {
    id: 'cambio',
    title: 'Gestión del Cambio Organizacional & Capacitación',
    subtitle: 'Adopción Cultural & Desarrollo del Talento',
    iconName: 'Users',
    accentColor: 'text-sky-700',
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
    description: 'Garantizamos la adopción fluida de nuevas herramientas e innovaciones mediante programas de capacitación gerencial, cultura de datos y reducción de resistencia al cambio.',
    keyBenefits: [
      'Capacitación Ejecutiva Senior',
      'Planes de Adopción Digital Medibles',
      'Alineación de Indicadores KPI por Área'
    ],
    phases: [
      'Diagnóstico de clima y evaluación de fricción ante el cambio tecnológico',
      'Workshops prácticos de liderazgo digital para mandos medios y directores',
      'Campañas internas de comunicación del valor de la transformación',
      'Certificación interna de usuarios clave ("Super-Users") por módulo'
    ],
    deliverables: [
      'Matriz de evaluación de adopción y NPS interno',
      'Repositorio de micro-aprendizajes y manuales interactivos',
      'Plan de sostenibilidad y mejora continua'
    ],
    metrics: '94% de adopción activa en los primeros 60 días'
  }
];

export const WIZARD_QUESTIONS: WizardQuestion[] = [
  {
    id: 1,
    category: 'Infraestructura de Software & ERP',
    question: '¿Cómo gestiona actualmente la información operativa, contable e inventarios?',
    options: [
      {
        score: 1,
        title: 'Archivos Excel / Hojas de Cálculo Descentralizadas',
        description: 'Cada departamento maneja sus propios datos manualmente sin sincronización.'
      },
      {
        score: 2,
        title: 'Sistemas Legados o Software Contable Básico',
        description: 'Poca integración entre facturación, ventas, inventarios y operaciones.'
      },
      {
        score: 3,
        title: 'ERP Moderno en la Nube con Módulos Conectados',
        description: 'Información centralizada pero con oportunidades de automatización de flujos.'
      },
      {
        score: 4,
        title: 'Ecosistema Integrado con Automatizaciones Activas',
        description: 'Sistemas totalmente sincrónicos con APIs y arquitectura escalable.'
      }
    ]
  },
  {
    id: 2,
    category: 'Digitalización & Business Intelligence',
    question: '¿Cuál es el nivel de digitalización en la toma de decisiones directivas?',
    options: [
      {
        score: 1,
        title: 'Reportes Manuales a Fin de Mes',
        description: 'Demoras de semanas para consolidar indicadores gerenciales en papel o email.'
      },
      {
        score: 2,
        title: 'Tableros Básicos en Excel o PDF',
        description: 'Datos visuales pero actualización lenta y altamente propensa a errores humanos.'
      },
      {
        score: 3,
        title: 'Dashboards BI Interactivos (PowerBI / Tableau)',
        description: 'Visualización periódica en tiempo real accesible por directores.'
      },
      {
        score: 4,
        title: 'Analytics Predictivo e Inteligencia Artificial',
        description: 'Modelos automatizados para previsión de demanda, compras y tendencias.'
      }
    ]
  },
  {
    id: 3,
    category: 'Estandarización de Procesos (SOP)',
    question: '¿Qué tan estandarizados están los procedimientos operativos estándar (SOP)?',
    options: [
      {
        score: 1,
        title: 'Procesos Informalmente Transmitidos',
        description: 'Alto nivel de dependencia en el personal clave individual y memoria histórica.'
      },
      {
        score: 2,
        title: 'Manuales Documentados en Papel o PDFs Estáticos',
        description: 'Raras veces revisados o aplicados en el día a día por los equipos.'
      },
      {
        score: 3,
        title: 'Flujos BPMN Mapeados e Implementados',
        description: 'Mapeo estructurado con indicadores KPI claros y responsabilidades asignadas.'
      },
      {
        score: 4,
        title: 'Gestión Continua Reingenieril Acreditada',
        description: 'Optimización constante guiada por metodología Lean/Kaizen e ISO.'
      }
    ]
  },
  {
    id: 4,
    category: 'Objetivos y Retos Principales',
    question: '¿Cuál es el principal reto que busca resolver este año?',
    options: [
      {
        score: 1,
        title: 'Reducción de Costos Operativos y Tiempos de Entrega',
        description: 'Eliminar desperdicios de horas y reprocesos innecesarios en la operación.'
      },
      {
        score: 2,
        title: 'Integración Tecnológica y Unificación de Sistemas',
        description: 'Conectar CRM, ERP y logística en una sola fuente de verdad sin fricciones.'
      },
      {
        score: 3,
        title: 'Preparación para Escalar Operaciones a Nivel Regional',
        description: 'Estructurar el negocio y el gobierno corporativo para soportar mayor volumen.'
      },
      {
        score: 4,
        title: 'Cultura Organizacional Digital y Gestión del Cambio',
        description: 'Capacitar a los colaboradores y acelerar la adopción de nuevas herramientas.'
      }
    ]
  }
];

export const EXECUTIVE_MEMBERS: ExecutiveMember[] = [
  {
    name: 'Ricardo Morales',
    title: 'PhD Planeación Estratégica y Dirección de Tecnología',
    role: 'Director de Business Intelligence y Ciencia de datos',
    expertise: 'Especialista en administración y gestión de soluciones empresariales, desarrollo e implementación de proyectos de innovación empresarial, Business Intelligence y ciencia de datos. Lidera la formulación de modelos analíticos predictivos y gobernanza de datos para la toma de decisiones directivas de alto nivel. Cuenta con amplia trayectoria asesorando a corporaciones en transformación digital y modernización tecnológica orientada a resultados.',
    image: '/images/ricardo.jpg',
    accent: 'border-blue-600',
    tags: ['Planeación Estratégica', 'Business Intelligence', 'Ciencia de Datos', 'Gobernanza de Datos']
  },
  {
    name: 'Ada Torres',
    title: 'PhD en Dirección y Mercadotecnia',
    role: 'Directora de reingeniería de procesos y marketing',
    expertise: 'Desarrollo de integraciones estratégicas en marketing, reingeniería de procesos, liderazgo y formación integral, con experiencia en proyectos nacionales e internacionales. Especialista en optimización de cadenas de valor operativo, diseño de cultura organizacional y posicionamiento de marcas en mercados altamente competitivos. Ha encabezado programas de reestructuración corporativa y desarrollo de talento ejecutivo de alto rendimiento.',
    image: '/images/ada.jpg',
    accent: 'border-emerald-600',
    tags: ['Reingeniería de Procesos', 'Marketing Estratégico', 'Liderazgo Ejecutivo', 'Cultura Organizacional']
  },
  {
    name: 'Carlos Castillo',
    title: 'Licdo. en Computación con Maestría en Asesoría Educativa',
    role: 'Director de Desarrollo e Integraciones Tecnológicas',
    expertise: 'Desarrollo e integración de soluciones basadas en Inteligencia Artificial (IA) y automatización avanzada. Especialista en seguridad de procesos críticos y ciberseguridad corporativa, protegiendo infraestructuras tecnológicas y garantizando la resiliencia operativa. Experto en el diseño y uso de simuladores de procesos para el análisis de escenarios predictivos y en la creación de tableros de mando ejecutivos para el monitoreo en tiempo real y optimización de sistemas de gestión empresarial.',
    image: '/images/carlos.jpg',
    accent: 'border-amber-500',
    tags: ['Inteligencia Artificial (IA)', 'Ciberseguridad', 'Simuladores de Procesos', 'Tableros de Mando', 'Seguridad de Procesos', 'Automatización']
  }
];

export const PARTNERS_DATA = [
  { name: 'Banco Mercantil', type: 'Sector Financiero', icon: 'Building2' },
  { name: 'Logística Expresa', type: 'Supply Chain Regional', icon: 'Truck' },
  { name: 'Microsoft Partner', type: 'Alianza Tecnológica', icon: 'Cloud' },
  { name: 'SAP Solutions', type: 'Integración ERP', icon: 'Boxes' },
  { name: 'Farma Salud', type: 'Sector Farmacéutico', icon: 'HeartPulse' },
  { name: 'Grupo Industrial', type: 'Manufactura & Planta', icon: 'Factory' }
];

export const CHART_DATA_EFFICIENCY: ChartDataPoint[] = [
  { month: 'Ene', efficiencyBefore: 45, efficiencyAfter: 55 },
  { month: 'Feb', efficiencyBefore: 48, efficiencyAfter: 68 },
  { month: 'Mar', efficiencyBefore: 50, efficiencyAfter: 79 },
  { month: 'Abr', efficiencyBefore: 47, efficiencyAfter: 88 },
  { month: 'May', efficiencyBefore: 52, efficiencyAfter: 92 },
  { month: 'Jun', efficiencyBefore: 50, efficiencyAfter: 96 },
  { month: 'Jul', efficiencyBefore: 51, efficiencyAfter: 98.4 }
];

export const CHART_DATA_COSTS: ChartDataPoint[] = [
  { month: 'Ene', operationalCost: 85000 },
  { month: 'Feb', operationalCost: 78000 },
  { month: 'Mar', operationalCost: 69000 },
  { month: 'Abr', operationalCost: 58000 },
  { month: 'May', operationalCost: 51000 },
  { month: 'Jun', operationalCost: 46000 },
  { month: 'Jul', operationalCost: 42000 }
];

export const CHART_DATA_ADOPTION: ChartDataPoint[] = [
  { month: 'Ene', userAdoption: 15 },
  { month: 'Feb', userAdoption: 38 },
  { month: 'Mar', userAdoption: 62 },
  { month: 'Abr', userAdoption: 81 },
  { month: 'May', userAdoption: 93 },
  { month: 'Jun', userAdoption: 97 },
  { month: 'Jul', userAdoption: 99.2 }
];
