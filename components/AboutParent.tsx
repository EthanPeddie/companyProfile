'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import {
  Award,
  Shield,
  Scale,
  Sparkles,
  Target,
  Compass,
  Building2,
  Code2,
  Check,
} from 'lucide-react';

export default function AboutParent() {
  const { isMM, t } = useLanguage();

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#050B16] border-b border-white/[0.08] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.about.badge}</span>
          </div>
          <h2
            className={`mt-4 text-white transition-all ${
              isMM
                ? 'text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed tracking-normal font-sans'
                : 'text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-wide leading-tight'
            }`}
          >
            {t.about.title}
          </h2>
          <p
            className={`mt-4 text-slate-300 ${
              isMM
                ? 'text-xs sm:text-sm leading-loose tracking-normal'
                : 'text-base sm:text-lg leading-relaxed'
            }`}
          >
            {t.about.subtitle}
          </p>
        </div>

        {/* Narrative & Institutional Ledger */}
        <div className="mt-14 lg:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Narrative Dossier */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-2xl glass-panel p-6 sm:p-8">
              <h3
                className={`text-white mb-4 flex items-center gap-2 ${
                  isMM
                    ? 'text-base sm:text-lg font-semibold leading-relaxed tracking-normal font-sans'
                    : 'text-xl font-bold font-heading'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{t.about.genesisTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-loose">
                {t.about.overviewP1}
              </p>
              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-loose">
                {t.about.overviewP2}
              </p>
            </div>

            {/* Mission & Vision Distinct Panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-xl glass-panel p-6 border-l-4 border-l-amber-500 h-full flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4
                    className={`text-white mb-2 ${
                      isMM
                        ? 'text-sm sm:text-base font-semibold leading-relaxed tracking-normal font-sans'
                        : 'text-base font-bold font-heading'
                    }`}
                  >
                    {t.about.missionTitle}
                  </h4>
                  <p className="text-xs text-slate-300 leading-loose">
                    {t.about.missionDesc}
                  </p>
                </div>
              </div>

              <div className="rounded-xl glass-panel p-6 border-l-4 border-l-cyan-500 h-full flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h4
                    className={`text-white mb-2 ${
                      isMM
                        ? 'text-sm sm:text-base font-semibold leading-relaxed tracking-normal font-sans'
                        : 'text-base font-bold font-heading'
                    }`}
                  >
                    {t.about.visionTitle}
                  </h4>
                  <p className="text-xs text-slate-300 leading-loose">
                    {t.about.visionDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Governance Structure Diagram */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl glass-panel-gold p-6 sm:p-8">
              <div className="text-center pb-6 border-b border-white/10">
                <div className="relative inline-block mx-auto mb-3">
                  <Image
                    src="/images/thet-and-thu-logo.webp"
                    alt="Thet & Thu Co., Ltd."
                    width={220}
                    height={70}
                    className="h-16 w-auto object-contain mx-auto"
                    unoptimized
                  />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  {t.about.parentHolding}
                </div>
                <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {t.about.parentSub}
                </div>
              </div>

              <div className="py-3 flex flex-col items-center">
                <div className="w-px h-5 bg-gradient-to-b from-amber-400 to-amber-500/50" />
                <div className="w-2 h-2 rounded-full bg-amber-400 -mt-1 shadow-xs shadow-amber-400/50" />
              </div>

              {/* Subsidiaries Branch Display */}
              <div className="space-y-3">
                <Link
                  href="/polaris"
                  className="p-4 rounded-xl bg-[#050B16] border border-cyan-500/30 flex items-start gap-3.5 hover:border-cyan-400 transition-colors group block"
                >
                  <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      {isMM ? 'လုပ်ငန်းခွဲ (က)' : 'Division A'}
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5 group-hover:text-cyan-300">
                      Polaris Tech Solution
                    </div>
                    <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {t.about.divASub}
                    </div>
                  </div>
                </Link>

                <Link
                  href="/trust-one"
                  className="p-4 rounded-xl bg-[#050B16] border border-amber-500/30 flex items-start gap-3.5 hover:border-amber-400 transition-colors group block"
                >
                  <div className="p-2 rounded-lg bg-amber-950/60 text-amber-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      {isMM ? 'လုပ်ငန်းခွဲ (ခ)' : 'Division B'}
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5 group-hover:text-amber-300">
                      Trust One Properties
                    </div>
                    <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {t.about.divBSub}
                    </div>
                  </div>
                </Link>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="text-amber-300 font-semibold">{t.about.integrityBadge}</span>
                <span>{t.about.locationBadge}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div id="values" className="mt-20 lg:mt-24 scroll-mt-24">
          <div className="max-w-2xl mb-10">
            <h3
              className={`text-white ${
                isMM
                  ? 'text-xl sm:text-2xl font-semibold leading-relaxed tracking-normal font-sans'
                  : 'text-xl sm:text-3xl font-extrabold font-heading'
              }`}
            >
              {t.about.pillarsTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.about.pillarsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl glass-panel p-6 border-t-2 border-t-amber-500 hover:border-amber-400/60 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Shield className="w-4 h-4" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-relaxed">
                {t.about.pillar1Title}
              </h4>
              <p className="text-xs text-slate-300 leading-loose">
                {t.about.pillar1Desc}
              </p>
            </div>

            <div className="rounded-xl glass-panel p-6 border-t-2 border-t-cyan-500 hover:border-cyan-400/60 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Code2 className="w-4 h-4" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-relaxed">
                {t.about.pillar2Title}
              </h4>
              <p className="text-xs text-slate-300 leading-loose">
                {t.about.pillar2Desc}
              </p>
            </div>

            <div className="rounded-xl glass-panel p-6 border-t-2 border-t-amber-500 hover:border-amber-400/60 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Check className="w-4 h-4" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-relaxed">
                {t.about.pillar3Title}
              </h4>
              <p className="text-xs text-slate-300 leading-loose">
                {t.about.pillar3Desc}
              </p>
            </div>

            <div className="rounded-xl glass-panel p-6 border-t-2 border-t-amber-500 hover:border-amber-400/60 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Scale className="w-4 h-4" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-relaxed">
                {t.about.pillar4Title}
              </h4>
              <p className="text-xs text-slate-300 leading-loose">
                {t.about.pillar4Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
