import React, { useState } from 'react';
import { LogoARC } from './LogoARC';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  TrendingUp, 
  Menu, 
  X, 
  Calculator, 
  Cpu, 
  BarChart3, 
  Zap,
  Linkedin,
  Facebook,
  Twitter
} from 'lucide-react';

interface NavbarProps {
  onOpenDiagnostic: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiagnostic, onOpenCalculator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 transition-all duration-300">
      {/* Top Corporate Metadata Bar */}
      <div className="bg-[#0A192F] text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-300">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400 mr-2" />
              Consultoría Estratégica & Optimización Tecnológica de Procesos
            </span>
            <span className="flex items-center text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-2" />
              Certificados ISO 27001 & Agile Management
            </span>
          </div>
          <div className="flex items-center space-x-5 text-slate-300">
            <a href="tel:+50322008900" className="flex items-center hover:text-blue-400 transition">
              <Phone className="w-3.5 h-3.5 text-sky-400 mr-1.5" />
              +503 2200-8900
            </a>
            <a href="mailto:contacto@arcsolutions.com.sv" className="flex items-center hover:text-amber-400 transition">
              <Mail className="w-3.5 h-3.5 text-slate-400 mr-1.5" />
              contacto@arcsolutions.com.sv
            </a>
            <div className="flex items-center space-x-2.5 pl-3 border-l border-slate-700">
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-amber-400 transition">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-amber-400 transition">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-amber-400 transition">
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Exact Brand Logo with High-Resolution SVG */}
          <a href="#inicio" className="flex items-center focus:outline-hidden group">
            <LogoARC className="h-15 sm:h-16 w-auto transition-transform group-hover:scale-[1.02]" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 font-medium text-slate-700 text-sm">
            <a href="#inicio" className="hover:text-blue-800 transition py-2 font-semibold text-blue-900">
              Inicio
            </a>
            <a href="#servicios" className="hover:text-blue-800 transition py-2 text-slate-700">
              Servicios Integrales
            </a>
            <a 
              href="#calculadora" 
              onClick={onOpenCalculator}
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition py-2"
            >
              <Calculator className="w-3.5 h-3.5 mr-1" />
              Calculadora ROI
            </a>
            <a 
              href="#diagnostico" 
              onClick={onOpenDiagnostic}
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold transition py-2"
            >
              <Cpu className="w-3.5 h-3.5 mr-1" />
              Diagnóstico 360°
            </a>
            <a href="#dashboard-demo" className="inline-flex items-center hover:text-blue-800 transition py-2 text-slate-700">
              <BarChart3 className="w-3.5 h-3.5 mr-1 text-slate-500" />
              Dashboard BI
            </a>
            <a href="#quienes-somos" className="hover:text-blue-800 transition py-2 text-slate-700">
              Quiénes Somos
            </a>
            <a href="#contacto" className="hover:text-blue-800 transition py-2 text-slate-700">
              Contacto
            </a>
          </nav>

          {/* Header Action CTAs */}
          <div className="flex items-center space-x-3">
            <a 
              href="#diagnostico"
              onClick={onOpenDiagnostic}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-700 hover:bg-emerald-600 transition shadow-md shadow-emerald-700/20"
            >
              <Zap className="w-3.5 h-3.5 mr-1.5 fill-current" />
              Evaluar Mi Empresa
            </a>
            <button 
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-slate-700 hover:text-blue-800 focus:outline-hidden p-2 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Top Brand Gradient Ribbon (Logo color spectrum) */}
      <div className="h-1 w-full gradient-accent-line"></div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          <a 
            href="#inicio" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block px-3 py-2.5 rounded-xl font-bold text-blue-900 bg-blue-50"
          >
            Inicio
          </a>
          <a 
            href="#servicios" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block px-3 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
          >
            Servicios Integrales
          </a>
          <a 
            href="#calculadora" 
            onClick={() => { setMobileMenuOpen(false); onOpenCalculator(); }} 
            className="flex items-center px-3 py-2.5 rounded-xl font-semibold text-amber-700 bg-amber-50"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Calculadora ROI
          </a>
          <a 
            href="#diagnostico" 
            onClick={() => { setMobileMenuOpen(false); onOpenDiagnostic(); }} 
            className="flex items-center px-3 py-2.5 rounded-xl font-semibold text-emerald-800 bg-emerald-50"
          >
            <Cpu className="w-4 h-4 mr-2" />
            Diagnóstico Digital 360°
          </a>
          <a 
            href="#dashboard-demo" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block px-3 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
          >
            Demo BI Executive
          </a>
          <a 
            href="#quienes-somos" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block px-3 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
          >
            Quiénes Somos
          </a>
          <a 
            href="#contacto" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block px-3 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
          >
            Contacto
          </a>
          <a 
            href="#contacto" 
            onClick={() => setMobileMenuOpen(false)} 
            className="w-full text-center block px-4 py-3 rounded-xl font-bold text-white bg-emerald-700 hover:bg-emerald-600 transition mt-3"
          >
            Agendar Consultoría Senior
          </a>
        </div>
      )}
    </header>
  );
};
