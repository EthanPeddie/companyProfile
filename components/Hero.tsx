'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import {
  Code2,
  Building2,
  Lock,
  ChevronRight,
  Shield,
  Layers,
} from 'lucide-react';

export default function Hero() {
  const { isMM, t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#050B16] bg-corporate-grid border-b border-white/[0.08]">
      {/* Discreet Atmospheric Focal Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-amber-500/10 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Established Corporate Register */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-[#0A1526]/90 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.hero.estBadge}</span>
          </div>
        </div>

        {/* Grand Holding Monument Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className={`text-white transition-all ${
              isMM
                ? 'text-2xl sm:text-3xl lg:text-4xl font-semibold leading-relaxed tracking-normal font-sans'
                : 'text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-wide leading-tight'
            }`}
          >
            <span className="block text-slate-100">{t.hero.headlinePart1}</span>
            <span className="block text-gold-gradient mt-1">{t.hero.headlinePart2}</span>
          </h1>

          <p
            className={`mt-4 text-amber-200/90 font-medium ${
              isMM
                ? 'text-sm sm:text-base leading-relaxed tracking-normal'
                : 'text-base sm:text-lg tracking-wide'
            }`}
          >
            &ldquo;{t.hero.tagline}&rdquo;
          </p>

          <p
            className={`mt-4 text-slate-300 max-w-3xl mx-auto ${
              isMM
                ? 'text-xs sm:text-sm leading-relaxed tracking-normal'
                : 'text-sm sm:text-base leading-relaxed tracking-normal'
            }`}
          >
            {t.hero.subheadline}
          </p>

          {/* Direct Navigation Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="#polaris"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-950/40 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500 hover:text-[#050B16] transition-all duration-200 shadow-lg shadow-cyan-950/40"
            >
              <Code2 className="w-4 h-4" />
              <span>{t.hero.explorePolaris}</span>
            </Link>

            <Link
              href="#trust-one"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-amber-950/40 text-amber-300 border border-amber-500/40 hover:bg-[#D4AF37] hover:text-[#050B16] transition-all duration-200 shadow-lg shadow-amber-950/40"
            >
              <Building2 className="w-4 h-4" />
              <span>{t.hero.exploreTrustOne}</span>
            </Link>

            <Link
              href="#about"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-colors"
            >
              <Layers className="w-4 h-4 text-slate-400" />
              <span>{t.hero.exploreHolding}</span>
            </Link>
          </div>
        </div>

        {/* The Holding Keystone Exhibition */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Wing: Polaris Tech Solution */}
          <div className="lg:col-span-6 rounded-2xl glass-panel-cyan p-6 sm:p-8 flex flex-col justify-between group hover:border-cyan-400/60 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-cyan-950/80 text-cyan-400 border border-cyan-500/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {t.hero.quickCardPolarisBadge}
                </span>
                <span className="text-xs text-cyan-400 font-medium">Bespoke Systems</span>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#040C18] border border-cyan-500/40 p-1.5 flex-shrink-0">
                  <Image
                    src="/images/polaris-logo.webp"
                    alt="Polaris Tech Solution"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {t.hero.quickCardPolarisTitle}
                  </h2>
                  <p className="text-xs text-cyan-300/80 mt-0.5">
                    {t.hero.bespokeBadge}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {t.hero.quickCardPolarisDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                <div className="p-2.5 rounded-lg bg-[#040C18]/80 border border-cyan-500/20 text-xs text-slate-300">
                  <div className="font-semibold text-cyan-300">{t.hero.heroPolarisFeat1Title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.hero.heroPolarisFeat1Desc}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#040C18]/80 border border-cyan-500/20 text-xs text-slate-300">
                  <div className="font-semibold text-cyan-300">{t.hero.heroPolarisFeat2Title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.hero.heroPolarisFeat2Desc}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#040C18]/80 border border-cyan-500/20 text-xs text-slate-300">
                  <div className="font-semibold text-cyan-300">{t.hero.heroPolarisFeat3Title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.hero.heroPolarisFeat3Desc}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#040C18]/80 border border-cyan-500/20 text-xs text-slate-300">
                  <div className="font-semibold text-cyan-300">{t.hero.heroPolarisFeat4Title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.hero.heroPolarisFeat4Desc}</div>
                </div>
              </div>
            </div>

            <Link
              href="/polaris"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-cyan-500/20 text-xs sm:text-sm font-semibold text-cyan-400 group-hover:text-cyan-300"
            >
              <span>{t.hero.explorePolarisBtn}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Wing: Trust One Properties */}
          <div className="lg:col-span-6 rounded-2xl glass-panel-gold p-6 sm:p-8 flex flex-col justify-between group hover:border-amber-400/60 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-950/80 text-amber-400 border border-amber-500/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {t.hero.quickCardTrustBadge}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-medium">
                  <Lock className="w-3 h-3 text-amber-400" />
                  {t.hero.domesticBadge}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#071326] border border-amber-500/40 p-1.5 flex-shrink-0">
                  <Image
                    src="/images/trust-one-logo.webp"
                    alt="Trust One Properties"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {t.hero.quickCardTrustTitle}
                  </h2>
                  <p className="text-xs text-amber-300/80 mt-0.5">
                    {t.trustOne.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {t.hero.quickCardTrustDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                <div className="p-2.5 rounded-lg bg-[#071326]/80 border border-amber-500/20 text-xs text-slate-300">
                  <div className="font-semibold text-amber-300">{t.hero.heroTrustFeat1Title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.hero.heroTrustFeat1Desc}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#071326]/80 border border-amber-500/20 text-xs text-slate-300">
                  <div className="font-semibold text-amber-300">{t.hero.heroTrustFeat2Title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.hero.heroTrustFeat2Desc}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#071326]/80 border border-amber-500/20 text-xs text-slate-300">
                  <div className="font-semibold text-amber-300">{t.hero.heroTrustFeat3Title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.hero.heroTrustFeat3Desc}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#071326]/80 border border-amber-500/20 text-xs text-slate-300">
                  <div className="font-semibold text-amber-300">{t.hero.heroTrustFeat4Title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.hero.heroTrustFeat4Desc}</div>
                </div>
              </div>
            </div>

            <Link
              href="/trust-one"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-amber-500/20 text-xs sm:text-sm font-semibold text-amber-400 group-hover:text-amber-300"
            >
              <span>{t.hero.exploreTrustBtn}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Institutional Metrics Matrix */}
        <div className="mt-12 lg:mt-16 rounded-2xl glass-panel p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r border-b md:border-b-0 border-white/10 pb-4 md:pb-0 pr-2">
              <div
                className={`text-2xl sm:text-4xl font-extrabold text-gold-gradient ${
                  isMM ? 'font-sans' : 'font-heading'
                }`}
              >
                {t.hero.statYears}
              </div>
              <div className="mt-1.5 text-xs text-slate-300 font-medium">
                {t.hero.statYearsLabel}
              </div>
            </div>

            <div className="border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 pl-2 md:pl-0 md:pr-2">
              <div
                className={`text-2xl sm:text-4xl font-extrabold text-cyan-400 ${
                  isMM ? 'font-sans' : 'font-heading'
                }`}
              >
                {t.hero.statDivisions}
              </div>
              <div className="mt-1.5 text-xs text-slate-300 font-medium">
                {t.hero.statDivisionsLabel}
              </div>
            </div>

            <div className="border-r border-white/10 pt-4 md:pt-0 pr-2">
              <div
                className={`text-2xl sm:text-4xl font-extrabold text-gold-gradient ${
                  isMM ? 'font-sans' : 'font-heading'
                }`}
              >
                {t.hero.statReliability}
              </div>
              <div className="mt-1.5 text-xs text-slate-300 font-medium">
                {t.hero.statReliabilityLabel}
              </div>
            </div>

            <div className="pt-4 md:pt-0 pl-2 md:pl-0">
              <div
                className={`text-2xl sm:text-4xl font-extrabold text-amber-400 ${
                  isMM ? 'font-sans' : 'font-heading'
                }`}
              >
                {t.hero.statCompliance}
              </div>
              <div className="mt-1.5 text-xs text-slate-300 font-medium">
                {t.hero.statComplianceLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
