import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { ConsultingService } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { 
  Check, 
  ArrowRight, 
  PieChart, 
  Network, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Sparkles 
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceId: string, serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForContact,
}) => {
  const [selectedService, setSelectedService] = useState<ConsultingService | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'PieChart': return <PieChart className="w-6 h-6" />;
      case 'Network': return <Network className="w-6 h-6" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      default: return <PieChart className="w-6 h-6" />;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-800 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Soluciones de Alto Valor
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nuestros Servicios Principales de Consultoría
          </h2>
          <p className="text-slate-600 text-sm">
            Acompañamos a su organización desde el análisis estratégico y la arquitectura de procesos hasta la selección e integración tecnológica total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv, index) => {
            const isWide = index === 4; // 5th item takes 2 cols on lg
            return (
              <div
                key={srv.id}
                className={`bg-white rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between group hover:-translate-y-1.5 ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="space-y-5">
                  <div className="w-13 h-13 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                    {getIcon(srv.iconName)}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-800 transition">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {srv.description}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-600 font-semibold pt-2">
                    {srv.keyBenefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center">
                        <Check className="w-4 h-4 text-emerald-700 mr-2 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-7 border-t border-slate-100 mt-6">
                  <button
                    type="button"
                    onClick={() => setSelectedService(srv)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-blue-800 hover:text-white text-slate-700 font-bold text-xs transition flex items-center justify-between cursor-pointer"
                  >
                    <span>Explorar Detalle Técnico</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForContact={onSelectServiceForContact}
      />
    </section>
  );
};
