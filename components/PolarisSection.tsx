'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  Database,
  Store,
  Smartphone,
  Server,
  CheckCircle,
  ShoppingBag,
  Building,
  GraduationCap,
  Truck,
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  Globe,
  Phone,
} from 'lucide-react';

export default function PolarisSection() {
  const { isMM, t } = useLanguage();

  return (
    <section
      id="polaris"
      className="relative py-20 lg:py-28 bg-[#040812] bg-cyan-grid border-b border-cyan-500/20 scroll-mt-20 overflow-hidden"
    >
      <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Division Header & Verified Identity */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-cyan-500/20">
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#050B16] border-2 border-cyan-500/40 p-2 shadow-xl shadow-cyan-950/60 flex-shrink-0 group">
              <Image
                src="/images/polaris-logo.webp"
                alt="Polaris Tech Solution"
                width={120}
                height={120}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                unoptimized
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                <Cpu className="w-3.5 h-3.5" />
                <span>{t.polaris.badge}</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Polaris Tech Solution
              </h2>
              <p className="text-xs sm:text-sm text-cyan-300 font-medium mt-1 leading-relaxed">
                {t.polaris.tagline}
              </p>
            </div>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-400 text-[#040812] hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20 whitespace-nowrap"
          >
            {t.polaris.ctaButton}
          </Link>
        </div>

        {/* Bespoke vs Generic SaaS Architectural Manifesto */}
        <div className="mt-10 rounded-2xl glass-panel-cyan p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="p-3.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex-shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                {isMM ? 'အင်ဂျင်နီယာကျင့်ဝတ်နှင့် တိကျမှု' : 'Engineering Integrity'}
              </div>
              <h3
                className={`text-white mt-1 ${
                  isMM
                    ? 'text-base sm:text-xl font-semibold leading-relaxed tracking-normal font-sans'
                    : 'text-lg sm:text-2xl font-bold'
                }`}
              >
                {t.polaris.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-loose">
                {t.polaris.positioningHighlight}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Engineering Services */}
        <div className="mt-16 lg:mt-20">
          <div className="max-w-2xl mb-8">
            <h3
              className={`text-white ${
                isMM
                  ? 'text-xl sm:text-2xl font-semibold leading-relaxed tracking-normal font-sans'
                  : 'text-xl sm:text-3xl font-extrabold tracking-wide'
              }`}
            >
              {t.polaris.servicesTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.polaris.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Service 1 */}
            <div className="rounded-2xl bg-[#050B16] border border-cyan-500/25 p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-5">
                  <Database className="w-6 h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-relaxed">
                  {t.polaris.service1Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-loose mb-6">
                  {t.polaris.service1Desc}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                  {t.polaris.service1Features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="rounded-2xl bg-[#050B16] border border-cyan-500/25 p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-5">
                  <Store className="w-6 h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-relaxed">
                  {t.polaris.service2Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-loose mb-6">
                  {t.polaris.service2Desc}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                  {t.polaris.service2Features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="rounded-2xl bg-[#050B16] border border-cyan-500/25 p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-5">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-relaxed">
                  {t.polaris.service3Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-loose mb-6">
                  {t.polaris.service3Desc}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                  {t.polaris.service3Features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="rounded-2xl bg-[#050B16] border border-cyan-500/25 p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-5">
                  <Server className="w-6 h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-relaxed">
                  {t.polaris.service4Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-loose mb-6">
                  {t.polaris.service4Desc}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                  {t.polaris.service4Features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Value Propositions */}
        <div className="mt-16 lg:mt-20">
          <div className="max-w-2xl mb-8">
            <h3
              className={`text-white ${
                isMM
                  ? 'text-xl sm:text-2xl font-semibold leading-relaxed tracking-normal font-sans'
                  : 'text-xl sm:text-3xl font-extrabold font-heading'
              }`}
            >
              {t.polaris.valuesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl glass-panel-cyan">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-relaxed">
              {t.polaris.val1Title}
            </h4>
            <p className="text-xs text-slate-300 leading-loose">
              {t.polaris.val1Desc}
            </p>
          </div>

          <div className="p-6 rounded-xl glass-panel-cyan">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
              <Globe className="w-4 h-4" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-relaxed">
              {t.polaris.val2Title}
            </h4>
            <p className="text-xs text-slate-300 leading-loose">
              {t.polaris.val2Desc}
            </p>
          </div>

          <div className="p-6 rounded-xl glass-panel-cyan">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-relaxed">
              {t.polaris.val3Title}
            </h4>
            <p className="text-xs text-slate-300 leading-loose">
              {t.polaris.val3Desc}
            </p>
          </div>
        </div>
      </div>

        {/* Industries Served */}
        <div className="mt-16 lg:mt-24">
          <div className="max-w-2xl mb-8">
            <h3
              className={`text-white ${
                isMM
                  ? 'text-xl sm:text-2xl font-semibold leading-relaxed tracking-normal font-sans'
                  : 'text-xl sm:text-3xl font-extrabold tracking-wide'
              }`}
            >
              {t.polaris.industriesTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.polaris.industriesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-xl bg-[#050B16] border border-cyan-500/20">
              <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5 leading-relaxed">
                {t.polaris.indRetail}
              </h4>
              <p className="text-xs text-slate-400 leading-loose">
                {t.polaris.indRetailDesc}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#050B16] border border-cyan-500/20">
              <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                <Building className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5 leading-relaxed">
                {t.polaris.indRealEstate}
              </h4>
              <p className="text-xs text-slate-400 leading-loose">
                {t.polaris.indRealEstateDesc}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#050B16] border border-cyan-500/20">
              <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5 leading-relaxed">
                {t.polaris.indEducation}
              </h4>
              <p className="text-xs text-slate-400 leading-loose">
                {t.polaris.indEducationDesc}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#050B16] border border-cyan-500/20">
              <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                <Truck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5 leading-relaxed">
                {t.polaris.indLogistics}
              </h4>
              <p className="text-xs text-slate-400 leading-loose">
                {t.polaris.indLogisticsDesc}
              </p>
            </div>
          </div>
        </div>

        {/* 4-Stage Engagement Process */}
        <div className="mt-16 lg:mt-24 rounded-2xl bg-[#081528]/50 border border-cyan-500/25 p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <h3
              className={`text-white ${
                isMM
                  ? 'text-xl sm:text-2xl font-semibold leading-relaxed tracking-normal font-sans'
                  : 'text-xl sm:text-3xl font-extrabold tracking-wide'
              }`}
            >
              {t.polaris.processTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.polaris.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-xl bg-[#040812] border border-cyan-500/20 h-full flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  {isMM ? 'အဆင့် ၁' : 'Phase 1'}
                </div>
                <h4 className="text-sm font-bold text-white mb-2 leading-relaxed">
                  {t.polaris.step1Title}
                </h4>
                <p className="text-xs text-slate-400 leading-loose">
                  {t.polaris.step1Desc}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#040812] border border-cyan-500/20 h-full flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  {isMM ? 'အဆင့် ၂' : 'Phase 2'}
                </div>
                <h4 className="text-sm font-bold text-white mb-2 leading-relaxed">
                  {t.polaris.step2Title}
                </h4>
                <p className="text-xs text-slate-400 leading-loose">
                  {t.polaris.step2Desc}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#040812] border border-cyan-500/20 h-full flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  {isMM ? 'အဆင့် ၃' : 'Phase 3'}
                </div>
                <h4 className="text-sm font-bold text-white mb-2 leading-relaxed">
                  {t.polaris.step3Title}
                </h4>
                <p className="text-xs text-slate-400 leading-loose">
                  {t.polaris.step3Desc}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#040812] border border-cyan-500/20 h-full flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  {isMM ? 'အဆင့် ၄' : 'Phase 4'}
                </div>
                <h4 className="text-sm font-bold text-white mb-2 leading-relaxed">
                  {t.polaris.step4Title}
                </h4>
                <p className="text-xs text-slate-400 leading-loose">
                  {t.polaris.step4Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Direct Engineering Consultation Banner */}
          <div className="mt-12 rounded-2xl glass-panel-cyan p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-cyan-500/30">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isMM ? 'ဆော့ဖ်ဝဲလ် အင်ဂျင်နီယာနှင့် တိုက်ရိုက်ဆွေးနွေးရန်' : 'Direct Tech Architecture Discovery'}</span>
              </div>
              <h4
                className={`text-white mt-2 ${
                  isMM
                    ? 'text-lg sm:text-xl font-semibold leading-relaxed tracking-normal font-sans'
                    : 'text-xl sm:text-2xl font-bold font-heading'
                }`}
              >
                {isMM
                  ? 'လုပ်ငန်းသုံး ဆော့ဖ်ဝဲလ်နှင့် စနစ်များအတွက် အခမဲ့ ကနဦး ဆွေးနွေးနိုင်ပါသည်'
                  : 'Ready to Architect Your Custom Software Platform?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                {isMM
                  ? 'သင်၏ လုပ်ငန်းလည်ပတ်ပုံနှင့် အတိအကျ ကိုက်ညီသော စနစ်တည်ဆောက်ရန် Polaris Tech အင်ဂျင်နီယာအဖွဲ့ထံ တိုက်ရိုက်ဖုန်းခေါ်ဆို၍ ဆွေးနွေးနိုင်ပါသည်။'
                  : 'Speak directly with our senior systems architects to scope your tailored ERP, CRM, or POS workflows.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <a
                href="tel:+959780654277"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 transition-colors shadow-lg shadow-cyan-500/10 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>09 780 654 277</span>
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-cyan-400 text-[#050B16] hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20 whitespace-nowrap"
              >
                <span>{isMM ? 'ပရောဂျက် အဆိုပြုလွှာ တောင်းခံရန်' : 'Request Architecture Scoping'}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
