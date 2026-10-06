import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingDown, 
  TrendingUp, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Building2, 
  DollarSign, 
  Users 
} from 'lucide-react';

interface RoiCalculatorProps {
  onPrefillContact: (roiSummary: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onPrefillContact }) => {
  const [industry, setIndustry] = useState<string>('finanzas');
  const [employees, setEmployees] = useState<number>(25);
  const [hourlyCost, setHourlyCost] = useState<number>(15);
  const [wastedHours, setWastedHours] = useState<number>(12);

  const calculations = useMemo(() => {
    const totalYearlyWastedHours = employees * wastedHours * 52;
    const currentYearlyLoss = totalYearlyWastedHours * hourlyCost;
    const netSavings = Math.round(currentYearlyLoss * 0.65);
    const hoursLiberated = Math.round(totalYearlyWastedHours * 0.65);

    let payback = (18000 / (netSavings / 12)).toFixed(1);
    if (parseFloat(payback) < 1.5) payback = '1.8';

    return {
      totalYearlyWastedHours,
      currentYearlyLoss,
      netSavings,
      hoursLiberated,
      paybackMonths: payback,
    };
  }, [employees, wastedHours, hourlyCost]);

  const handleApplyRoiToContact = () => {
    const summary = `Deseo recibir una propuesta basada en mi cálculo de ahorro operativo estimado de $${calculations.netSavings.toLocaleString('en-US')} USD / año (${employees} colaboradores, ${wastedHours} hrs/sem desperdiciadas, Payback estimado: ${calculations.paybackMonths} meses).`;
    onPrefillContact(summary);
    
    // Smooth scroll to contact
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculadora" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Herramienta Ejecutiva de Valor
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculadora de Retorno de Inversión (ROI) y Ahorro Operativo
          </h2>
          <p className="text-slate-600 text-sm">
            Estime de manera cuantificable cuánto capital y tiempo pierde actualmente en procesos manuales y el impacto directo de una intervención tecnológica con ARC Solutions.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center">
              <Calculator className="w-5 h-5 text-blue-800 mr-2.5" />
              Parámetros de su Organización
            </h3>

            {/* Industry Selector */}
            <div>
              <label htmlFor="roi-industry" className="block text-xs font-bold text-slate-700 uppercase mb-2 flex items-center">
                <Building2 className="w-3.5 h-3.5 mr-1 text-slate-500" />
                Sector o Industria *
              </label>
              <select
                id="roi-industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-blue-700 focus:outline-hidden transition"
              >
                <option value="finanzas">Servicios Financieros, Banca y Contabilidad</option>
                <option value="manufactura">Manufactura, Producción e Industria</option>
                <option value="logistica">Logística, Cadena de Suministro y Distribución</option>
                <option value="salud">Servicios de Salud, Clínicas y Farmacéuticas</option>
                <option value="comercio">Comercio, Retail & E-Commerce</option>
                <option value="servicios">Consultoría, Servicios Profesionales y BPO</option>
              </select>
            </div>

            {/* Employees Range */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center">
                  <Users className="w-3.5 h-3.5 mr-1 text-blue-800" />
                  Colaboradores involucrados en procesos operativos:
                </span>
                <span className="text-blue-800 font-extrabold text-sm">{employees} Personas</span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-800"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>5 personas</span>
                <span>100 personas</span>
                <span>200 personas</span>
              </div>
            </div>

            {/* Hourly cost range */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center">
                  <DollarSign className="w-3.5 h-3.5 mr-1 text-emerald-700" />
                  Costo hora promedio por colaborador ($ USD):
                </span>
                <span className="text-emerald-700 font-extrabold text-sm">${hourlyCost} / hr</span>
              </div>
              <input
                type="range"
                min="8"
                max="60"
                value={hourlyCost}
                onChange={(e) => setHourlyCost(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>$8 / hr</span>
                <span>$34 / hr</span>
                <span>$60 / hr</span>
              </div>
            </div>

            {/* Wasted hours range */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1 text-amber-600" />
                  Horas semanales en tareas repetitivas por persona:
                </span>
                <span className="text-amber-600 font-extrabold text-sm">{wastedHours} horas/semana</span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                value={wastedHours}
                onChange={(e) => setWastedHours(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>2 hrs/sem</span>
                <span>16 hrs/sem</span>
                <span>30 hrs/sem</span>
              </div>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-5 bg-[#0A192F] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-700 shadow-2xl relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Proyección Anual ARC
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-sm font-bold border border-emerald-500/30">
                  Basado en clientes ARC
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold flex items-center">
                  <TrendingDown className="w-3.5 h-3.5 text-rose-400 mr-1" />
                  Costo Anual Actual por Ineficiencia:
                </span>
                <p className="text-2xl sm:text-3xl font-extrabold text-rose-400 mt-1">
                  ${calculations.currentYearlyLoss.toLocaleString('en-US')} USD
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs text-slate-300 uppercase font-semibold flex items-center">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                  Ahorro Neto Estimado con ARC Solutions:
                </span>
                <p className="text-3xl font-black text-emerald-400">
                  ${calculations.netSavings.toLocaleString('en-US')} USD / año
                </p>
                <p className="text-[11px] text-slate-400">
                  Recuperación de hasta un 65% del tiempo invertido mediante automatización e integración.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="block text-slate-400 text-[10px] flex items-center">
                    <Clock className="w-3 h-3 text-amber-400 mr-1" />
                    Horas Liberadas / Año
                  </span>
                  <span className="text-base font-bold text-amber-400 mt-0.5 block">
                    {calculations.hoursLiberated.toLocaleString('en-US')} hrs
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="block text-slate-400 text-[10px] flex items-center">
                    <Calendar className="w-3 h-3 text-sky-400 mr-1" />
                    Payback Estimado
                  </span>
                  <span className="text-base font-bold text-sky-400 mt-0.5 block">
                    {calculations.paybackMonths} Meses
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 relative z-10">
              <button
                type="button"
                onClick={handleApplyRoiToContact}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 transition font-bold text-xs text-white shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Solicitar Propuesta Personalizada con este ROI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
