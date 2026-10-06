import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  Cpu, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Sparkles 
} from 'lucide-react';

interface HeroProps {
  onScrollToRoi: () => void;
  onScrollToDiagnostic: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToRoi, onScrollToDiagnostic }) => {
  const [hours, setHours] = useState<number>(40);

  const savedHours = Math.round(hours * 0.7);
  const savedMoney = Math.round(savedHours * 52 * 12.5);

  const getTechFocus = (h: number) => {
    if (h < 40) {
      return {
        primary: 'Marco lógico & Modelado Probabilístico de Recursos',
        desc: 'Estructuración estratégica de objetivos operativos con cálculo probabilístico de capacidad instalada para eliminar reprocesos tempranos.'
      };
    } else if (h <= 90) {
      return {
        primary: 'Simulación de Procesos de Negocio Basada en Datos & Marco lógico',
        desc: 'Reconstrucción cuantitativa de flujos a partir de logs de transacciones para identificar cuellos de botella y optimizar tiempos de ciclo.'
      };
    } else {
      return {
        primary: 'Simulación de eventos discretos & Modelado Probabilístico de Recursos',
        desc: 'Modelado computacional estocástico avanzado para simular escenarios de alta demanda, estrés operativo y redistribución óptima de recursos.'
      };
    }
  };

  return (
    <section id="inicio" className="relative gradient-hero text-white overflow-hidden py-18 lg:py-26">
      {/* Geometric background ambient glows */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-emerald-600 blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-amber-500 blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-emerald-300 badge-pulse">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Consultoría Tecnológica & Rediseño de Procesos</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none">
              Evolucionamos la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400">
                Eficiencia Operativa
              </span>{' '}
              de su Empresa
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
              Diagnosticamos cuellos de botella, integramos soluciones tecnológicas avanzadas 
              (ERP, CRM, BI, RPA) y reestructuramos flujos de trabajo para maximizar la rentabilidad y escalabilidad de su negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#calculadora"
                onClick={onScrollToRoi}
                className="px-7 py-4 rounded-xl font-bold text-white bg-emerald-700 hover:bg-emerald-600 transition shadow-lg shadow-emerald-900/30 flex items-center justify-center space-x-3 text-base group"
              >
                <span>Calcular Mi Ahorro Operativo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#diagnostico"
                onClick={onScrollToDiagnostic}
                className="px-7 py-4 rounded-xl font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition flex items-center justify-center space-x-3 text-base"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Iniciar Diagnóstico Digital</span>
              </a>
            </div>

            {/* Impact Metrics */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <span className="block text-3xl font-extrabold text-white tracking-tight">+45%</span>
                <span className="text-xs text-slate-400 font-medium">Incremento Eficiencia</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-amber-400 tracking-tight">-35%</span>
                <span className="text-xs text-slate-400 font-medium">Reducción Costos Op.</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-emerald-400 tracking-tight">+120</span>
                <span className="text-xs text-slate-400 font-medium">Empresas Optimizadas</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-sky-400 tracking-tight">3.2x</span>
                <span className="text-xs text-slate-400 font-medium">Retorno de Inversión (ROI)</span>
              </div>
            </div>
          </div>

          {/* Hero Right Interactive Simulator Card */}
          <div className="lg:col-span-5">
            <div className="glass-dark p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 relative border border-white/15">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-mono text-slate-300 ml-2">ARC_Process_Optimizer_v4.2</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Simulador en Vivo
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-white flex items-center">
                  <Sliders className="w-4 h-4 text-amber-400 mr-2" />
                  Simulación de Automatización de Procesos Empresariales
                </h3>

                {/* Range Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Horas manuales por semana:</span>
                    <span className="font-bold text-amber-400">{hours} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>10 hrs</span>
                    <span>80 hrs</span>
                    <span>150 hrs</span>
                  </div>
                </div>

                {/* Output metrics */}
                <div className="grid grid-cols-2 gap-3.5 pt-1">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold flex items-center justify-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      Tiempo Automatizable
                    </span>
                    <span className="text-xl font-bold text-emerald-400 mt-1 block">
                      {savedHours} hrs/sem
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold flex items-center justify-center gap-1">
                      <DollarSign className="w-3 h-3 text-sky-400" />
                      Ahorro Anual Estimado
                    </span>
                    <span className="text-xl font-bold text-sky-400 mt-1 block">
                      ${savedMoney.toLocaleString('en-US')}
                    </span>
                  </div>
                </div>

                {/* Tech recommendations with the 4 core methodologies */}
                <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-500/30 text-xs text-slate-300 space-y-2.5">
                  <div className="flex items-center text-amber-300 font-semibold text-xs">
                    <Cpu className="w-3.5 h-3.5 mr-1.5" /> Tecnologías & Metodologías ARC Sugeridas:
                  </div>

                  {/* Badges for the 4 core technologies */}
                  <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                    <span className="px-2 py-1 rounded-md bg-white/10 border border-white/10 text-[10.5px] font-semibold text-slate-200 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5 shrink-0"></span>
                      Marco lógico
                    </span>
                    <span className="px-2 py-1 rounded-md bg-white/10 border border-white/10 text-[10.5px] font-semibold text-slate-200 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 shrink-0"></span>
                      Simulación de eventos discretos
                    </span>
                    <span className="px-2 py-1 rounded-md bg-white/10 border border-white/10 text-[10.5px] font-semibold text-slate-200 flex items-center col-span-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-1.5 shrink-0"></span>
                      Simulación de Procesos de Negocio Basada en Datos
                    </span>
                    <span className="px-2 py-1 rounded-md bg-white/10 border border-white/10 text-[10.5px] font-semibold text-slate-200 flex items-center col-span-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mr-1.5 shrink-0"></span>
                      Modelado Probabilístico de Recursos
                    </span>
                  </div>

                  {/* Contextual dynamic recommendation */}
                  <div className="pt-1 border-t border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold block mb-0.5">
                      Enfoque Recomendado ({getTechFocus(hours).primary}):
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {getTechFocus(hours).desc}
                    </p>
                  </div>
                </div>

                <a
                  href="#contacto"
                  className="block text-center py-3.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-600 transition font-bold text-xs text-white shadow-md shadow-blue-900/40"
                >
                  Reclamar Sesión de Diagnóstico Completa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
