import React from 'react';
import { PARTNERS_DATA } from '../data/mockData';
import { 
  Building2, 
  Truck, 
  Cloud, 
  Boxes, 
  HeartPulse, 
  Factory 
} from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-6 h-6 text-blue-800" />;
      case 'Truck': return <Truck className="w-6 h-6 text-emerald-700" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-sky-500" />;
      case 'Boxes': return <Boxes className="w-6 h-6 text-amber-600" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-600" />;
      case 'Factory': return <Factory className="w-6 h-6 text-slate-700" />;
      default: return <Building2 className="w-6 h-6 text-blue-800" />;
    }
  };

  return (
    <section id="aliados" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Respaldo Institucional
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Clientes y Partners Tecnológicos
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Trabajamos junto a corporaciones destacadas y alianzas líderes en tecnología de nivel global.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {PARTNERS_DATA.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-center justify-center text-center hover:shadow-md transition group"
            >
              <div className="mb-2 p-3 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
                {getIcon(partner.icon)}
              </div>
              <span className="block text-xs font-extrabold text-slate-900 group-hover:text-blue-800 transition">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
