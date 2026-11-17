import React from 'react';
import type { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import SubpageHeader from '@/components/SubpageHeader';
import PolarisSection from '@/components/PolarisSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Polaris Tech Solution | Bespoke Enterprise Software & Systems Architecture',
  description:
    'Custom-engineered software systems, ERP/POS platforms, and mobile workflows tailored to exact business operations. A division of THET & THU CO., LTD.',
};

export default function PolarisPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#040C18] text-slate-100">
        <Navbar />
        <SubpageHeader division="polaris" />

        <main className="flex-1">
          <PolarisSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
