import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import ScamAlertsInfographic from './components/ScamAlertsInfographic';
import LegalTipsSection from './components/LegalTipsSection';
import PosterGallery from './components/PosterGallery';
import InteractiveQuiz from './components/InteractiveQuiz';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0d18] text-slate-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <VideoShowcase />
        <ScamAlertsInfographic />
        <LegalTipsSection />
        <PosterGallery />
        <InteractiveQuiz />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
