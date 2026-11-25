import React from 'react';
import type { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import SubpageHeader from '@/components/SubpageHeader';
import TrustOneSection from '@/components/TrustOneSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Trust One Properties | Professional Real Estate Service (Domestic Myanmar)',
  description:
    'Prime land, commercial plots, luxury condominiums, and private residences across Yangon and Thanlyin. Exclusively domestic Myanmar properties.',
};

export default function TrustOnePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#F4FAF7] text-[#1B0D36]">
        <Navbar />
        <SubpageHeader division="trust-one" />

        <main className="flex-1">
          <TrustOneSection isStandalonePage />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
