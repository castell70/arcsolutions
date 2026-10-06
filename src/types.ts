export interface ConsultingService {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  accentColor: string;
  badgeBg: string;
  description: string;
  keyBenefits: string[];
  phases: string[];
  deliverables: string[];
  metrics: string;
}

export interface RoiSimulation {
  industry: string;
  employees: number;
  hourlyCost: number;
  wastedHoursPerWeek: number;
  currentYearlyLoss: number;
  netSavingsYearly: number;
  hoursLiberatedYearly: number;
  paybackMonths: number;
}

export interface WizardQuestion {
  id: number;
  category: string;
  question: string;
  options: {
    score: number;
    title: string;
    description: string;
  }[];
}

export interface DiagnosticResult {
  scorePercentage: number;
  levelTitle: string;
  levelDescription: string;
  rec1Title: string;
  rec1Desc: string;
  rec2Title: string;
  rec2Desc: string;
}

export interface ChartDataPoint {
  month: string;
  efficiencyBefore?: number;
  efficiencyAfter?: number;
  operationalCost?: number;
  userAdoption?: number;
}

export interface ExecutiveMember {
  name: string;
  title: string;
  role: string;
  expertise: string;
  image: string;
  accent: string;
  tags?: string[];
}
