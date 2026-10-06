import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  X 
} from 'lucide-react';

interface ContactSectionProps {
  prefilledMessage: string;
  prefilledService: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledMessage,
  prefilledService,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(prefilledService || 'procesos');
  const [message, setMessage] = useState(prefilledMessage || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if props change
  React.useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
  }, [prefilledMessage]);

  React.useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCloseToast = () => {
    setIsSubmitted(false);
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                Contacto Inmediato
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Agende una Sesión Estratégica
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Analicemos juntos los desafíos actuales de su organización. Le mostraremos cómo optimizar procesos e integrar tecnología para elevar la rentabilidad.
              </p>
            </div>

            <div className="space-y-5 pt-2">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center text-lg shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Oficinas Centrales</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Torre Futura, Nivel 12, San Salvador, El Salvador.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-lg shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Atención Directa</h4>
                  <p className="text-xs text-slate-600 mt-0.5">PBX Corporativo: +503 2200-8900</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Correo Institucional</h4>
                  <p className="text-xs text-slate-600 mt-0.5">contacto@arcsolutions.com.sv</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5 mt-4">
                <div className="flex items-center text-slate-800 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-blue-800 mr-1.5" />
                  Compromiso de Respuesta ARC
                </div>
                <p className="text-slate-500">
                  Un consultor senior asignado se pondrá en contacto en menos de 24 horas hábiles para coordinar la sesión inicial sin compromiso.
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Solicitud de Consultoría y Diagnóstico
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Roberto Rodríguez"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:outline-hidden transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-company" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                      Empresa / Organización *
                    </label>
                    <input
                      id="form-company"
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ej. Corporación Global"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:outline-hidden transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="form-email" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                      Correo Corporativo *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="correo@empresa.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:outline-hidden transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                      Teléfono *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+503 7000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:outline-hidden transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-service" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Servicio Principal Requerido
                  </label>
                  <select
                    id="form-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:outline-hidden transition bg-white"
                  >
                    <option value="procesos">Reingeniería & Optimización de Procesos</option>
                    <option value="tecnologia">Integración Tecnológica (ERP, CRM, RPA)</option>
                    <option value="bi">Inteligencia de Negocios & BI Dashboards</option>
                    <option value="escalamiento">Desarrollo Empresarial & Escalamiento</option>
                    <option value="cambio">Gestión del Cambio & Capacitación Digital</option>
                    <option value="diagnostico_completo">Diagnóstico de Madurez Digital Completo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Detalles del Proyecto / Mensaje *
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describa brevemente los cuellos de botella actuales o sistemas a integrar..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:outline-hidden transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white bg-emerald-700 hover:bg-emerald-600 transition shadow-lg shadow-emerald-700/25 text-base flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitud de Consultoría</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Toast Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl text-center space-y-4 relative border border-slate-200">
            <button
              onClick={handleCloseToast}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-3xl mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              ¡Solicitud Registrada con Éxito!
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Gracias por comunicarse con <strong className="text-blue-900">ARC Solutions</strong>. Un consultor senior revisará la información y se pondrá en contacto en menos de 24 horas hábiles.
            </p>
            <button
              type="button"
              onClick={handleCloseToast}
              className="w-full py-3.5 rounded-xl font-bold text-white bg-blue-800 hover:bg-blue-700 transition text-xs cursor-pointer shadow-md"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
