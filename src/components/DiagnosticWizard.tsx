import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { WIZARD_QUESTIONS } from '../data/mockData';
import { 
  CheckCircle2, 
  RotateCcw, 
  Send, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  Award,
  AlertTriangle
} from 'lucide-react';

interface DiagnosticWizardProps {
  onSendToContact: (diagnosticText: string) => void;
}

export const DiagnosticWizard: React.FC<DiagnosticWizardProps> = ({ onSendToContact }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleSelectOption = (stepId: number, score: number) => {
    const updated = { ...answers, [stepId]: score };
    setAnswers(updated);

    if (stepId < 4) {
      setCurrentStep(stepId + 1);
    } else {
      setIsCompleted(true);
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore if not supported
      }
    }
  };

  const resetWizard = () => {
    setAnswers({});
    setCurrentStep(1);
    setIsCompleted(false);
  };

  // Compute results
  const totalScore = (answers[1] || 2) + (answers[2] || 2) + (answers[3] || 2) + (answers[4] || 2);
  const percentage = Math.round((totalScore / 16) * 100);

  let levelTitle = "Nivel de Madurez Operativa: Básico";
  let levelDesc = "Su empresa presenta alta dependencia de tareas manuales y hojas de cálculo aisladas. Hay un potencial de ahorro de costos inmediato mediante automatización de flujos y centralización.";
  let rec1Title = "Centralización e Integración de ERP";
  let rec1Desc = "Migrar datos fragmentados a una sola plataforma en la nube para eliminar silos de información y reprocesos.";
  let rec2Title = "Reingeniería de Flujos Manuales";
  let rec2Desc = "Mapear procesos críticos e implementar bots RPA para la captura y sincronización repetitiva de datos.";

  if (percentage >= 70) {
    levelTitle = "Nivel de Madurez Operativa: Avanzado";
    levelDesc = "Su organización cuenta con sistemas modernos. El siguiente paso estratégico es la analítica predictiva avanzada, modelos de IA y optimización continua de la cadena de valor.";
    rec1Title = "Business Intelligence Predictivo";
    rec1Desc = "Implementar algoritmos predictivos para pronósticos precisos de ventas, demanda y niveles de inventario.";
    rec2Title = "Gobierno Corporativo Digital";
    rec2Desc = "Fortalecer comités directivos con alertas KPI automatizadas en tiempo real e integración omnicanal.";
  } else if (percentage >= 45) {
    levelTitle = "Nivel de Madurez Operativa: Intermedio";
    levelDesc = "Cuenta con bases sólidas, pero existen cuellos de botella notables en la integración entre ventas, contabilidad y operaciones cotidianas.";
    rec1Title = "Automatización RPA & Middleware";
    rec1Desc = "Conectar su CRM y ERP para sincronización automática de facturación, inventario y pedidos sin recaptura.";
    rec2Title = "Estandarización BPMN de Procesos";
    rec2Desc = "Documentar manuales SOP y definir indicadores de rendimiento clave (KPIs) por área funcional.";
  }

  const handleTransferToContact = () => {
    const summary = `Deseo recibir una propuesta personalizada basada en mi evaluación de madurez digital (${levelTitle} - Puntaje: ${percentage}%). Principales necesidades: ${rec1Title} y ${rec2Title}.`;
    onSendToContact(summary);
    
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentQ = WIZARD_QUESTIONS.find((q) => q.id === currentStep);

  return (
    <section id="diagnostico" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/70 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            Evaluación Guiada
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Diagnóstico de Madurez Tecnológica y Operativa (360°)
          </h2>
          <p className="text-slate-400 text-sm">
            Responda 4 preguntas clave para recibir una evaluación instantánea sobre el estado de sus sistemas y procesos empresariales.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-2xl relative">
          {!isCompleted ? (
            <div>
              {/* Progress Header */}
              <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                    {currentStep}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {currentQ?.id}. {currentQ?.category}
                  </span>
                </div>
                <span className="text-xs font-bold text-amber-400">
                  Paso {currentStep} de 4
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-700 h-1.5 rounded-full mb-8 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 h-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>

              {/* Question Content */}
              {currentQ && (
                <div className="space-y-5 animate-fadeIn">
                  <h4 className="text-base sm:text-lg font-bold text-slate-100">
                    {currentQ.question}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    {currentQ.options.map((opt, idx) => {
                      const isSelected = answers[currentQ.id] === opt.score;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectOption(currentQ.id, opt.score)}
                          className={`p-4 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'bg-blue-900/60 border-blue-500 ring-2 ring-blue-500/40'
                              : 'bg-slate-700/60 border-slate-600 hover:border-blue-500 hover:bg-slate-700'
                          }`}
                        >
                          <div>
                            <strong className="block text-slate-100 mb-1.5 font-semibold text-xs sm:text-sm">
                              {opt.title}
                            </strong>
                            <span className="text-slate-400 leading-relaxed block text-xs">
                              {opt.description}
                            </span>
                          </div>
                          <div className="mt-3 flex items-center justify-end text-slate-400 text-[11px] font-medium">
                            <span className="hover:text-blue-400 flex items-center">
                              Seleccionar opción <ArrowRight className="w-3 h-3 ml-1" />
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Results Presentation */
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-900/40 border-2 border-blue-500 text-3xl font-black text-amber-400 mx-auto">
                  {percentage}%
                </div>
                <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                  <Award className="w-6 h-6 text-amber-400" />
                  {levelTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                  {levelDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600 space-y-2">
                  <span className="font-bold text-amber-400 uppercase text-[10px] tracking-wider block">
                    Recomendación Prioritaria #1
                  </span>
                  <h5 className="font-bold text-white text-sm">
                    {rec1Title}
                  </h5>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {rec1Desc}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600 space-y-2">
                  <span className="font-bold text-emerald-400 uppercase text-[10px] tracking-wider block">
                    Recomendación Prioritaria #2
                  </span>
                  <h5 className="font-bold text-white text-sm">
                    {rec2Title}
                  </h5>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {rec2Desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleTransferToContact}
                  className="flex-1 py-3.5 px-4 rounded-xl font-bold text-white bg-emerald-700 hover:bg-emerald-600 transition text-center text-xs shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Recibir Diagnóstico Técnico Detallado</span>
                </button>
                <button
                  type="button"
                  onClick={resetWizard}
                  className="py-3.5 px-6 rounded-xl font-semibold text-slate-300 bg-slate-700 hover:bg-slate-600 transition text-xs flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reiniciar Evaluación</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
