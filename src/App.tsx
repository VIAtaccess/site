import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RiskSimulator } from './components/RiskSimulator';
import { PipelineFlowchart } from './components/PipelineFlowchart';
import { RiskAgitation } from './components/RiskAgitation';
import { EnginePillars } from './components/EnginePillars';
import { QAMethodology } from './components/QAMethodology';
import { SentinelaSection } from './components/SentinelaSection';
import { FoundersAuthority } from './components/FoundersAuthority';
import { ScanRequestSection } from './components/ScanRequestSection';
import { Footer } from './components/Footer';
import { LiveScanModal } from './components/LiveScanModal';
import { A11yToolbar } from './components/A11yToolbar';

export default function App() {
  const [scanModalOpen, setScanModalOpen] = useState(false);
  const [scanTargetUrl, setScanTargetUrl] = useState('https://app.suaempresa.com.br');

  const handleOpenScan = (target?: string) => {
    if (target) setScanTargetUrl(target);
    setScanModalOpen(true);
  };

  return (
    <div className="bg-[#0B0F17] text-[#E2E8F0] min-h-screen flex flex-col font-body selection:bg-[#EB4A4C] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenScanModal={() => handleOpenScan()} />

      {/* Main Content Area with Skip Link Anchor */}
      <main className="w-full pt-20 bg-[#0B0F17] min-h-screen focus:outline-none flex-grow" id="main-content" tabIndex={-1}>
        {/* 1. Hero Section with Interactive Terminal */}
        <HeroSection onOpenScanModal={() => handleOpenScan()} />

        {/* 2. Interactive TAC and Legal Risk Simulator */}
        <RiskSimulator onOpenScanModal={() => handleOpenScan()} />

        {/* 3. DevSecOps Pipeline Flowchart */}
        <PipelineFlowchart />

        {/* 4. Legal Risk and NBR 17255 Agitation */}
        <RiskAgitation />

        {/* 5. VIA Engine Technological Pillars */}
        <EnginePillars />

        {/* 6. Precision Hybrid QA Methodology & Comparison Matrix */}
        <QAMethodology />

        {/* 7. Sentinela Inclusivo Edge AI Telemetry */}
        <SentinelaSection />

        {/* 8. Founders Authority & QA DNA in Brazil */}
        <FoundersAuthority />

        {/* 9. B2B Diagnostic Scan Request Form */}
        <ScanRequestSection onStartLiveScan={(url) => handleOpenScan(url)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Live Scan Modal */}
      <LiveScanModal
        isOpen={scanModalOpen}
        onClose={() => setScanModalOpen(false)}
        defaultTarget={scanTargetUrl}
      />

      {/* Accessibility Adjustment Toolbar */}
      <A11yToolbar />
    </div>
  );
}
