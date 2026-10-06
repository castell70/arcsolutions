import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoiCalculator } from './components/RoiCalculator';
import { DiagnosticWizard } from './components/DiagnosticWizard';
import { ServicesSection } from './components/ServicesSection';
import { ExecutiveDashboardDemo } from './components/ExecutiveDashboardDemo';
import { AboutSection } from './components/AboutSection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [contactPrefillMessage, setContactPrefillMessage] = useState<string>('');
  const [contactPrefillService, setContactPrefillService] = useState<string>('procesos');

  const handlePrefillContactFromRoi = (roiText: string) => {
    setContactPrefillMessage(roiText);
    setContactPrefillService('procesos');
  };

  const handlePrefillContactFromDiagnostic = (diagText: string) => {
    setContactPrefillMessage(diagText);
    setContactPrefillService('diagnostico_completo');
  };

  const handlePrefillContactFromDashboard = (dashboardText: string) => {
    setContactPrefillMessage(dashboardText);
    setContactPrefillService('bi_analytics');
  };

  const handleSelectServiceForContact = (serviceId: string, serviceTitle: string) => {
    setContactPrefillService(serviceId);
    setContactPrefillMessage(`Deseo solicitar información y una cotización para el servicio de: ${serviceTitle}.`);
  };

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar 
        onOpenCalculator={() => scrollToElement('calculadora')} 
        onOpenDiagnostic={() => scrollToElement('diagnostico')} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero with Interactive Process Optimizer Simulator */}
        <Hero 
          onScrollToRoi={() => scrollToElement('calculadora')} 
          onScrollToDiagnostic={() => scrollToElement('diagnostico')} 
        />

        {/* 2. ROI and Operating Savings Calculator */}
        <RoiCalculator onPrefillContact={handlePrefillContactFromRoi} />

        {/* 3. 360° Technological and Operational Maturity Diagnostic Wizard */}
        <DiagnosticWizard onSendToContact={handlePrefillContactFromDiagnostic} />

        {/* 4. Core Corporate Consulting Services */}
        <ServicesSection onSelectServiceForContact={handleSelectServiceForContact} />

        {/* 5. Executive BI Interactive Dashboards Demo */}
        <ExecutiveDashboardDemo onExportProjection={handlePrefillContactFromDashboard} />

        {/* 6. About ARC Solutions, Mission, Vision & Executive Leadership */}
        <AboutSection />

        {/* 7. Institutional Allies, Clients & Tech Partners */}
        <PartnersSection />

        {/* 8. Contact & Consultation Request Form */}
        <ContactSection 
          prefilledMessage={contactPrefillMessage} 
          prefilledService={contactPrefillService} 
        />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
