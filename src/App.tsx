import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RiskMatrix } from './components/RiskMatrix';
import { StrategicPillars } from './components/StrategicPillars';
import { LaudoShowcase } from './components/LaudoShowcase';
import { Methodology } from './components/Methodology';
import { FoundersAuthority } from './components/FoundersAuthority';
import { DiagnosticForm } from './components/DiagnosticForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-dark-bg font-body-md text-body-md text-on-surface min-h-screen flex flex-col antialiased selection:bg-brand-red selection:text-white">
      <Navbar />
      <main className="w-full pt-20 bg-dark-bg min-h-screen focus:outline-none flex-grow" id="main-content" tabIndex={-1}>
        <HeroSection />
        <RiskMatrix />
        <StrategicPillars />
        <LaudoShowcase />
        <Methodology />
        <FoundersAuthority />
        <DiagnosticForm />
      </main>
      <Footer />
    </div>
  );
}
