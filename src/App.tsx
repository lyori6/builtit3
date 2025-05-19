import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatIsSection } from './components/WhatIsSection';
import { FeatureSection } from './components/FeatureSection';
import { SprintSection } from './components/SprintSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AdvantageSection } from './components/AdvantageSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-[#0D0E11] text-[#E0E0E0] min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <FeatureSection />
      <SprintSection />
      <PortfolioSection />
      <AdvantageSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>;
}