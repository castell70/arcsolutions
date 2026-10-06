import React from 'react';
import { ConsultingService } from '../types';
import { 
  X, 
  Check, 
  Layers, 
  FileCheck2, 
  TrendingUp, 
  ArrowRight,
  PieChart,
  Network,
  BarChart3,
  Users
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ConsultingService | null;
  onClose: () => void;
  onSelectForContact: (serviceId: string, serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForContact,
}) => {
  if (!service) return null;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'PieChart': return <PieChart className="w-7 h-7 text-blue-800" />;
      case 'Network': return <Network className="w-7 h-7 text-emerald-700" />;
      case 'BarChart3': return <BarChart3 className="w-7 h-7 text-amber-600" />;
      case 'TrendingUp': return <TrendingUp className="w-7 h-7 text-rose-700" />;
      case 'Users': return <Users className="w-7 h-7 text-sky-700" />;
      default: return <PieChart className="w-7 h-7 text-blue-800" />;
    }
  };

  const handleConsultService = () => {
    onSelectForContact(service.id, service.title);
    onClose();
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative space-y-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 transition p-1 rounded-lg"
          aria-label="Cerrar modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0">
            {renderIcon(service.iconName)}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {service.title}
            </h3>
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mt-0.5">
              {service.subtitle}
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Phases */}
        <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <h5 className="text-xs font-bold text-slate-800 uppercase flex items-center">
            <Layers className="w-3.5 h-3.5 mr-1.5 text-blue-800" />
            Metodología y Fases de Ejecución:
          </h5>
          <ul className="space-y-2 text-xs text-slate-600 pt-1">
            {service.phases.map((phase, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold mr-2 mt-0.5 shrink-0">
                  {idx + 1}
                </span>
                <span>{phase}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables & Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1">
            <span className="font-bold text-blue-900 block flex items-center">
              <FileCheck2 className="w-3.5 h-3.5 mr-1 text-blue-800" /> Entregables Clave:
            </span>
            <ul className="text-slate-600 text-[11.5px] space-y-1">
              {service.deliverables.map((d, i) => (
                <li key={i} className="flex items-center">
                  <Check className="w-3 h-3 text-emerald-700 mr-1 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 space-y-1">
            <span className="font-bold text-emerald-900 block flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-1 text-emerald-700" /> Impacto Comprobado:
            </span>
            <p className="text-emerald-800 font-semibold text-sm pt-1">
              {service.metrics}
            </p>
            <p className="text-[11px] text-slate-500">
              Garantía de transferencia metodológica con soporte directo.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleConsultService}
            className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-emerald-700 hover:bg-emerald-600 transition text-xs shadow-md shadow-emerald-700/20 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Solicitar Diagnóstico para esta Área</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
