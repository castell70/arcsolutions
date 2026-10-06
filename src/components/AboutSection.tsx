import React from 'react';
import { EXECUTIVE_MEMBERS } from '../data/mockData';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Briefcase,
  Quote,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Trayectoria & Excelencia Corporativa
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Transformamos Organizaciones a través de la Innovación Integrada
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong className="text-blue-900">ARC Solutions</strong> nació con el objetivo firme de cerrar la brecha entre la estrategia de negocios tradicional y las soluciones de tecnología avanzada. Ayudamos a empresas medianas y corporativos en la región a reestructurar sus flujos de trabajo.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Combinamos consultoría en gestión operativa de nivel senior, análisis de datos en tiempo real y desarrollo tecnológico ágil para entregar proyectos de alto impacto con retorno de inversión comprobado.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-blue-800 space-y-2">
                <div className="flex items-center space-x-2 text-blue-900 font-bold text-sm">
                  <Target className="w-4 h-4 text-blue-800" />
                  <span>Misión</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Optimizar el potencial de nuestros clientes mediante la integración inteligente de tecnología, la reingeniería de procesos e inteligencia de negocios.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-emerald-700 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm">
                  <Eye className="w-4 h-4 text-emerald-700" />
                  <span>Visión</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ser la firma consultora de referencia en Latinoamérica para la transformación digital e incremento de la eficiencia operativa empresarial.
                </p>
              </div>
            </div>
          </div>

          {/* Right Graphic Photo Box */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Equipo de Consultoría ARC Solutions"
                className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center">
                  <Briefcase className="w-3.5 h-3.5 mr-1.5" />
                  Sesiones Estratégicas de Campo
                </p>
                <h4 className="text-lg font-bold">
                  Acompañamiento Directivo C-Level en Cada Etapa
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team / Partners Section */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">
              Sostén Estratégico y Socios Directores
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm">
              Especialistas senior liderando la transformación y resultados de nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXECUTIVE_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 text-center space-y-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/90 group flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-4">
                  {/* Homologated Image Frame */}
                  <div className="relative mx-auto w-44 h-52 sm:w-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 group-hover:shadow-xl transition-shadow bg-slate-100 ring-1 ring-slate-900/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (member.name.includes('Ada')) {
                          target.src = target.src.includes('partners') ? '/images/ada.jpg' : '/partners/ada.jpg';
                        } else if (member.name.includes('Ricardo')) {
                          target.src = target.src.includes('partners') ? '/images/ricardo.jpg' : '/partners/ricardo.jpg';
                        } else if (member.name.includes('Carlos')) {
                          target.src = target.src.includes('partners') ? '/images/carlos.jpg' : '/partners/carlos.jpg';
                        }
                      }}
                    />
                    <div className="absolute top-2.5 right-2.5 bg-slate-950/70 backdrop-blur-xs text-white px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase border border-white/20">
                      Socio Director
                    </div>
                    <div className={`absolute bottom-0 inset-x-0 h-1.5 ${
                      idx === 0 ? 'bg-blue-600' : idx === 1 ? 'bg-emerald-600' : 'bg-amber-500'
                    }`} />
                  </div>

                  <div>
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200/70 px-3 py-1 rounded-full inline-block mt-2 leading-tight">
                      {member.title}
                    </p>
                    <h5 className="text-xs font-bold text-blue-900 mt-2.5">
                      {member.role}
                    </h5>
                  </div>
                </div>

                <div className="text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-left leading-relaxed mt-2 shadow-2xs space-y-2.5">
                  <div>
                    <span className="font-extrabold text-slate-700 text-[10.5px] block mb-1 uppercase tracking-wider">
                      Área de Experticia:
                    </span>
                    <p className="leading-relaxed text-slate-600">{member.expertise}</p>
                  </div>
                  {member.tags && member.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-200/70">
                      {member.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-flex items-center text-[10px] font-semibold text-slate-700 bg-white border border-slate-200/90 rounded-md px-2 py-0.5 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Mission-Driven Quote from the CEO beneath Leadership Profiles */}
          <div className="mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 border border-blue-900/40 p-8 sm:p-12 shadow-2xl text-white">
            {/* Background Ambient Elements */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <Quote className="absolute top-8 right-8 sm:top-10 sm:right-12 w-20 h-20 sm:w-28 sm:h-28 text-white/[0.05] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Vision Badge */}
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mensaje de Dirección Ejecutiva & Visión ARC</span>
                </span>
              </div>

              {/* The Quote Statement */}
              <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed max-w-4xl tracking-tight">
                «Nuestra visión trasciende la simple automatización de procesos: transformamos la incertidumbre operativa en <span className="text-amber-300 font-semibold underline decoration-amber-400/40 underline-offset-4">certidumbre matemática y valor estratégico tangible</span>. Cuando la ciencia de datos, la reingeniería y el talento humano convergen con método, la organización alcanza una ventaja competitiva perdurable.»
              </blockquote>

              {/* CEO Attribution & Pillars */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-md bg-slate-800 shrink-0">
                    <img
                      src="/images/ricardo.jpg"
                      alt="Dr. Ricardo Morales"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/partners/ricardo.jpg';
                      }}
                    />
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-amber-400" />
                  </div>
                  <div>
                    <h5 className="text-base sm:text-lg font-black text-white tracking-tight">
                      Dr. Ricardo Morales
                    </h5>
                    <p className="text-xs sm:text-sm font-semibold text-amber-400">
                      CEO & Socio Director | ARC Solutions
                    </p>
                    <p className="text-xs text-slate-400">
                      PhD en Planeación Estratégica y Dirección de Tecnología
                    </p>
                  </div>
                </div>

                {/* Core Vision Pillars */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs text-slate-300">
                  <div className="flex items-center space-x-1.5 bg-slate-900/80 border border-slate-700/80 rounded-xl px-3 py-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Rigor Científico</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-slate-900/80 border border-slate-700/80 rounded-xl px-3 py-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Impacto Operativo Real</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-slate-900/80 border border-slate-700/80 rounded-xl px-3 py-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Acompañamiento C-Level</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
