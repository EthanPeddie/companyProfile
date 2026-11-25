import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutParent from '@/components/AboutParent';
import PolarisSection from '@/components/PolarisSection';
import TrustOneSection from '@/components/TrustOneSection';
import OfficesSection from '@/components/OfficesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#F4FAF7] text-[#1B0D36]">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <AboutParent />
          <PolarisSection />
          <TrustOneSection />
          <OfficesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
