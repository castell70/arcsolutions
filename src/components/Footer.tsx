import React from 'react';
import { LogoARC } from './LogoARC';
import { 
  ChevronRight, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter, 
  ShieldCheck 
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          {/* Column 1: Logo & Summary */}
          <div className="space-y-4">
            <a href="#inicio" className="block focus:outline-hidden">
              <LogoARC className="h-14 w-auto" />
            </a>
            <p className="text-xs text-slate-500 leading-relaxed">
              Firma especializada en consultoría en análisis y desarrollo empresarial, optimización operativa e integración tecnológica en la región.
            </p>
            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded-md bg-slate-100 text-[11px] font-semibold text-slate-600 border border-slate-200">
                NIT: 0614-120516-102-1
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#inicio" className="hover:text-blue-800 transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-blue-800 transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Servicios Integrales
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-blue-800 transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Calculadora ROI
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-blue-800 transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Diagnóstico 360°
                </a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-blue-800 transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-blue-800 transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Networks */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
              Redes Sociales
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#" className="hover:text-blue-800 transition flex items-center space-x-2 text-slate-600">
                  <Linkedin className="w-4 h-4 text-blue-800" />
                  <span>LinkedIn Corporativo</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800 transition flex items-center space-x-2 text-slate-600">
                  <Facebook className="w-4 h-4 text-blue-800" />
                  <span>Facebook Oficial</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition flex items-center space-x-2 text-slate-600">
                  <Instagram className="w-4 h-4 text-amber-600" />
                  <span>Instagram Corporativo</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition flex items-center space-x-2 text-slate-600">
                  <Twitter className="w-4 h-4 text-slate-800" />
                  <span>X (Twitter)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Rights & Security */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
              Seguridad & Calidad
            </h4>
            <div className="flex items-center space-x-2 text-xs text-emerald-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Alineados a estándares ISO 9001</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              © {new Date().getFullYear()} ARC Solutions. Todos los derechos reservados.
            </p>
            <p className="text-[11px] text-slate-400">
              Queda prohibida la reproducción parcial o total sin autorización previa de la firma.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>ARC Solutions – Soluciones Empresariales & Consultoría Tecnológica</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:underline">Políticas de Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:underline">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
