import React, { useState, useMemo } from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend 
} from 'recharts';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Layers,
  Sliders,
  Building,
  RotateCcw,
  Sparkles,
  Zap,
  DollarSign,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface ExecutiveDashboardDemoProps {
  onExportProjection?: (text: string) => void;
}

type DepartmentKey = 'operaciones' | 'finanzas' | 'ventas' | 'atencion';
type TimeframeKey = '6m' | '12m';

interface DepartmentConfig {
  name: string;
  baseCost: number;
  baseEfficiency: number;
  cycleTimeMin: number;
  errorBase: number;
}

const DEPARTMENTS: Record<DepartmentKey, DepartmentConfig> = {
  operaciones: {
    name: 'Operaciones & Cadena de Suministro',
    baseCost: 38000,
    baseEfficiency: 44,
    cycleTimeMin: 48,
    errorBase: 8.5
  },
  finanzas: {
    name: 'Finanzas, Facturación & Cobranza',
    baseCost: 29000,
    baseEfficiency: 40,
    cycleTimeMin: 36,
    errorBase: 6.8
  },
  ventas: {
    name: 'Comercial, Ventas & CRM',
    baseCost: 34000,
    baseEfficiency: 50,
    cycleTimeMin: 42,
    errorBase: 9.2
  },
  atencion: {
    name: 'Atención al Cliente & Soporte',
    baseCost: 24000,
    baseEfficiency: 46,
    cycleTimeMin: 28,
    errorBase: 11.5
  }
};

export const ExecutiveDashboardDemo: React.FC<ExecutiveDashboardDemoProps> = ({ onExportProjection }) => {
  // Interactive Variables for the User to Control:
  const [selectedDept, setSelectedDept] = useState<DepartmentKey>('operaciones');
  const [automationLevel, setAutomationLevel] = useState<number>(75); // 25%, 50%, 75%, 100%
  const [txVolume, setTxVolume] = useState<number>(14500); // 1,000 to 50,000
  const [timeframe, setTimeframe] = useState<TimeframeKey>('12m');
  const [activeTab, setActiveTab] = useState<'eficiencia' | 'costos' | 'adopcion' | 'tiempos'>('eficiencia');

  const currentDept = DEPARTMENTS[selectedDept];

  // Dynamic calculations based on selected variables
  const metrics = useMemo(() => {
    // Efficiency gained scales with automation level (25% -> +18%, 100% -> +52%)
    const efficiencyBoost = (automationLevel / 100) * 52;
    const finalEfficiency = Math.min(98.8, currentDept.baseEfficiency + efficiencyBoost);

    // Cost reduction factor
    const costReductionFactor = (automationLevel / 100) * 0.58;
    const monthlySavings = Math.round(currentDept.baseCost * costReductionFactor * (txVolume / 10000));
    const finalMonthlyCost = Math.max(8000, currentDept.baseCost - monthlySavings);

    // Cycle time reduction in minutes
    const cycleReduction = (automationLevel / 100) * 0.78;
    const optimizedCycleTime = Math.max(3.2, +(currentDept.cycleTimeMin * (1 - cycleReduction)).toFixed(1));

    // Error reduction
    const errorReductionFactor = (automationLevel / 100) * 0.88;
    const finalErrorRate = +(currentDept.errorBase * (1 - errorReductionFactor)).toFixed(1);

    // Estimated Payback in months
    const estimatedPayback = +(Math.max(2.8, 12 - (automationLevel / 100) * 7.5)).toFixed(1);

    return {
      finalEfficiency: +finalEfficiency.toFixed(1),
      monthlySavings,
      finalMonthlyCost,
      optimizedCycleTime,
      finalErrorRate,
      estimatedPayback
    };
  }, [selectedDept, automationLevel, txVolume, currentDept]);

  // Generate dynamic chart data depending on timeframe and variables
  const dynamicChartData = useMemo(() => {
    const months6 = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'];
    const months12 = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const months = timeframe === '6m' ? months6 : months12;

    const totalSteps = months.length;

    return months.map((m, idx) => {
      const progressRatio = (idx + 1) / totalSteps;
      const progressCurve = Math.pow(progressRatio, 0.75); // smooth exponential ramp

      // Efficiency
      const effBefore = Math.round(currentDept.baseEfficiency + (Math.sin(idx) * 2));
      const effGain = (metrics.finalEfficiency - currentDept.baseEfficiency) * progressCurve;
      const effAfter = Math.round(currentDept.baseEfficiency + effGain);

      // Cost curve (descending)
      const costStart = currentDept.baseCost * (txVolume / 10000);
      const costDrop = (costStart - metrics.finalMonthlyCost) * progressCurve;
      const costCurrent = Math.round(costStart - costDrop);

      // User adoption curve (accelerating)
      const adoption = Math.round(15 + (84 * Math.min(1, progressRatio * (0.8 + (automationLevel / 200)))));

      // Cycle time
      const cycleDrop = (currentDept.cycleTimeMin - metrics.optimizedCycleTime) * progressCurve;
      const currentCycle = +(currentDept.cycleTimeMin - cycleDrop).toFixed(1);

      return {
        month: m,
        efficiencyBefore: effBefore,
        efficiencyAfter: effAfter,
        operationalCost: costCurrent,
        userAdoption: Math.min(99, adoption),
        cycleTime: currentCycle
      };
    });
  }, [timeframe, currentDept, metrics, automationLevel, txVolume]);

  const handleSendToContact = () => {
    const text = `Hola equipo de ARC Solutions, configuré una simulación ejecutiva de BI con los siguientes parámetros:
- Unidad Operativa: ${currentDept.name}
- Nivel de Automatización aplicado: ${automationLevel}%
- Volumen mensual de transacciones: ${txVolume.toLocaleString('en-US')} ops/mes
- Horizonte de análisis: ${timeframe === '6m' ? 'Semestral (6 meses)' : 'Anual (12 meses)'}
- Resultados proyectados: Eficiencia del ${metrics.finalEfficiency}%, Ahorro mensual estimado de $${metrics.monthlySavings.toLocaleString('en-US')} USD, y Reducción del ciclo operativo a ${metrics.optimizedCycleTime} minutos.
Deseo agendar una sesión para revisar la viabilidad de este tablero para nuestra empresa.`;

    if (onExportProjection) {
      onExportProjection(text);
    }
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResetDefaults = () => {
    setSelectedDept('operaciones');
    setAutomationLevel(75);
    setTxVolume(14500);
    setTimeframe('12m');
  };

  return (
    <section id="dashboard-demo" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/70 px-3.5 py-1.5 rounded-full border border-amber-500/40 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Simulador Interactivo de Inteligencia de Negocios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Demostrador de Tableros de Control Ejecutivos
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              Personalice las variables operativas de su empresa para visualizar en tiempo real cómo impactan la eficiencia, la reducción de costos y los tiempos de entrega.
            </p>
          </div>

          {/* Reset button */}
          <button
            type="button"
            onClick={handleResetDefaults}
            className="text-xs font-semibold text-slate-400 hover:text-white flex items-center space-x-1.5 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restablecer Variables</span>
          </button>
        </div>

        {/* CONTROLS PANEL: Interactive Variables */}
        <div className="bg-slate-900/95 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-2xl mb-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-4 h-4 text-emerald-400" />
              Variables de Configuración Operativa (Modifique en vivo):
            </h3>
            <span className="text-[11px] text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-md">
              Cálculo Dinámico Activo
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Variable 1: Unidad de Negocio */}
            <div className="space-y-2">
              <label htmlFor="dept-select" className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                <span>1. Unidad o Departamento:</span>
              </label>
              <div className="relative">
                <select
                  id="dept-select"
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value as DepartmentKey)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value="operaciones">Operaciones & Cadena de Suministro</option>
                  <option value="finanzas">Finanzas, Facturación & Cobranza</option>
                  <option value="ventas">Comercial, Ventas & CRM</option>
                  <option value="atencion">Atención al Cliente & Soporte</option>
                </select>
              </div>
              <p className="text-[10.5px] text-slate-400">
                Base actual: ${currentDept.baseCost.toLocaleString()} USD/mes · Ciclo: {currentDept.cycleTimeMin} min
              </p>
            </div>

            {/* Variable 2: Nivel de Automatización Implementado */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>2. Nivel de Automatización:</span>
                <span className="text-amber-400 font-bold font-mono">{automationLevel}%</span>
              </div>
              <input
                id="automation-slider"
                type="range"
                min="20"
                max="100"
                step="5"
                value={automationLevel}
                onChange={(e) => setAutomationLevel(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>20% (BPMN inicial)</span>
                <span>60% (ERP/RPA)</span>
                <span>100% (Predictivo)</span>
              </div>
            </div>

            {/* Variable 3: Volumen de Transacciones */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>3. Transacciones Mensuales:</span>
                <span className="text-emerald-400 font-bold font-mono">{txVolume.toLocaleString('en-US')} ops</span>
              </div>
              <input
                id="tx-volume-slider"
                type="range"
                min="2000"
                max="50000"
                step="1000"
                value={txVolume}
                onChange={(e) => setTxVolume(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>2k</span>
                <span>25k ops</span>
                <span>50k ops</span>
              </div>
            </div>

            {/* Variable 4: Horizonte de Visualización */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                4. Horizonte de Proyección:
              </label>
              <div className="grid grid-cols-2 gap-2 bg-slate-800 p-1 rounded-xl border border-slate-700">
                <button
                  type="button"
                  onClick={() => setTimeframe('6m')}
                  className={`py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                    timeframe === '6m' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Semestral (6M)
                </button>
                <button
                  type="button"
                  onClick={() => setTimeframe('12m')}
                  className={`py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                    timeframe === '12m' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Anual (12M)
                </button>
              </div>
              <p className="text-[10.5px] text-slate-400">
                Curva de maduración y estabilización de procesos
              </p>
            </div>
          </div>
        </div>

        {/* REAL-TIME KPI SUMMARY TILES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {/* Tile 1: Eficiencia Final */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
            <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
              Eficiencia Proyectada
            </span>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-extrabold text-emerald-400">{metrics.finalEfficiency}%</span>
              <span className="text-xs font-bold text-emerald-500 bg-emerald-950 px-1.5 py-0.5 rounded">
                +{Math.round(metrics.finalEfficiency - currentDept.baseEfficiency)}%
              </span>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">vs. {currentDept.baseEfficiency}% inicial</span>
          </div>

          {/* Tile 2: Ahorro Mensual */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
            <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
              Ahorro Estimado / Mes
            </span>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-extrabold text-amber-400">
                ${metrics.monthlySavings.toLocaleString('en-US')}
              </span>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">
              ${(metrics.monthlySavings * 12).toLocaleString('en-US')} USD / año
            </span>
          </div>

          {/* Tile 3: Tiempo de Ciclo */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
            <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
              Tiempo Ciclo x Tarea
            </span>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-extrabold text-sky-400">
                {metrics.optimizedCycleTime} min
              </span>
              <span className="text-xs font-bold text-sky-400 bg-sky-950 px-1.5 py-0.5 rounded">
                -{Math.round(((currentDept.cycleTimeMin - metrics.optimizedCycleTime) / currentDept.cycleTimeMin) * 100)}%
              </span>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">De {currentDept.cycleTimeMin} min antes</span>
          </div>

          {/* Tile 4: Tasa de Error */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
            <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
              Margen de Error Residual
            </span>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-extrabold text-rose-400">
                {metrics.finalErrorRate}%
              </span>
              <span className="text-xs font-bold text-rose-400 bg-rose-950 px-1.5 py-0.5 rounded">
                -85%
              </span>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">Base inicial: {currentDept.errorBase}%</span>
          </div>

          {/* Tile 5: Payback */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md col-span-2 sm:col-span-1">
            <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
              Payback Estimado
            </span>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-extrabold text-indigo-400">
                {metrics.estimatedPayback}
              </span>
              <span className="text-xs font-semibold text-slate-300">meses</span>
            </div>
            <span className="text-[10px] text-emerald-400 mt-1 block">Retorno acelerado</span>
          </div>
        </div>

        {/* MAIN VISUALIZATION STAGE */}
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
          {/* Visualizer Tab Selector */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div className="flex bg-slate-800/90 p-1 rounded-xl border border-slate-700/80 space-x-1">
              <button
                type="button"
                onClick={() => setActiveTab('eficiencia')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'eficiencia'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Eficiencia Operativa</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('costos')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'costos'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Curva de Reducción de Costos</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('adopcion')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'adopcion'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Adopción de Usuarios</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tiempos')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'tiempos'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Tiempos de Ciclo</span>
              </button>
            </div>

            <span className="text-xs text-slate-400 hidden sm:inline-block">
              Área simulada: <strong className="text-white">{currentDept.name}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Chart Canvas */}
            <div className="lg:col-span-8 h-80 sm:h-96 w-full relative">
              {activeTab === 'eficiencia' && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dynamicChartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                    <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={12} domain={[30, 100]} unit="%" tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0B192C',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '12px',
                        color: '#F8FAFC',
                        fontSize: '12px'
                      }}
                    />
                    <Legend 
                      wrapperStyle={{ paddingTop: '15px' }}
                      formatter={(val) => <span className="text-xs text-slate-300">{val}</span>} 
                    />
                    <Line
                      type="monotone"
                      name="Proceso Tradicional sin Optimizar (%)"
                      dataKey="efficiencyBefore"
                      stroke="#EF4444"
                      strokeWidth={2}
                      strokeDasharray="4 4"
                      dot={{ r: 3, fill: '#EF4444' }}
                    />
                    <Line
                      type="monotone"
                      name="Con ARC Solutions & Automatización (%)"
                      dataKey="efficiencyAfter"
                      stroke="#10B981"
                      strokeWidth={3.5}
                      dot={{ r: 5, fill: '#10B981' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}

              {activeTab === 'costos' && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dynamicChartData} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="costGradDyn" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                    <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={12} tickFormatter={(v) => `$${Math.round(v / 1000)}k`} tickLine={false} />
                    <Tooltip
                      formatter={(v: number) => [`$${v.toLocaleString('en-US')} USD`, 'Gasto Operativo Mensual']}
                      contentStyle={{
                        backgroundColor: '#0B192C',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '12px',
                        color: '#F8FAFC',
                        fontSize: '12px'
                      }}
                    />
                    <Area
                      type="monotone"
                      name="Gasto Operativo Proyectado"
                      dataKey="operationalCost"
                      stroke="#F59E0B"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#costGradDyn)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}

              {activeTab === 'adopcion' && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dynamicChartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="adoptGradDyn" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                    <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={12} domain={[0, 100]} unit="%" tickLine={false} />
                    <Tooltip
                      formatter={(v: number) => [`${v}%`, 'Tasa de Adopción de Colaboradores']}
                      contentStyle={{
                        backgroundColor: '#0B192C',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '12px',
                        color: '#F8FAFC',
                        fontSize: '12px'
                      }}
                    />
                    <Area
                      type="monotone"
                      name="Curva de Aceptación y Manejo de Herramientas"
                      dataKey="userAdoption"
                      stroke="#10B981"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#adoptGradDyn)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}

              {activeTab === 'tiempos' && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dynamicChartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                    <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={12} unit=" min" tickLine={false} />
                    <Tooltip
                      formatter={(v: number) => [`${v} minutos`, 'Tiempo Medio de Ciclo']}
                      contentStyle={{
                        backgroundColor: '#0B192C',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '12px',
                        color: '#F8FAFC',
                        fontSize: '12px'
                      }}
                    />
                    <Bar
                      dataKey="cycleTime"
                      name="Duración por Transacción (min)"
                      fill="#38BDF8"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Right Action & Analysis Card */}
            <div className="lg:col-span-4 space-y-5">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider">
                    Análisis Ejecutivo
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Nivel: {automationLevel}%
                  </span>
                </div>

                <h4 className="text-base font-bold text-white">
                  Diagnóstico Proyectado para {currentDept.name}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Con un nivel de automatización configurado al <strong>{automationLevel}%</strong> y un volumen de <strong>{txVolume.toLocaleString()} transacciones mensuales</strong>, su empresa alcanzará una tasa de eficiencia operativa del <strong>{metrics.finalEfficiency}%</strong>, liberando aproximadamente <strong>${(metrics.monthlySavings * 12).toLocaleString()} USD</strong> al año en horas operativas y reprocesos.
                </p>

                <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center text-emerald-400 gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Reducción de tiempos muertos: -{Math.round(((currentDept.cycleTimeMin - metrics.optimizedCycleTime) / currentDept.cycleTimeMin) * 100)}%</span>
                  </div>
                  <div className="flex items-center text-sky-400 gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Control centralizado en tableros Cloud</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={handleSendToContact}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-700 to-emerald-700 hover:from-blue-600 hover:to-emerald-600 transition font-bold text-xs text-white shadow-lg shadow-blue-950 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Solicitar Propuesta con estos Parámetros</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
