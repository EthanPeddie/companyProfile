'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  Building2,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Home,
  Layers,
  Key,
  Landmark,
  Scale,
  Lock,
  Phone,
} from 'lucide-react';

export default function TrustOneSection() {
  const { isMM, t } = useLanguage();

  return (
    <section
      id="trust-one"
      className="relative py-20 lg:py-28 bg-[#050B16] border-b border-amber-500/20 scroll-mt-20 overflow-hidden"
    >
      {/* Subtle Gold Ambient Warmth */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Division Header & Verified Identity */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-amber-500/20">
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#071326] border-2 border-amber-500/40 p-2 shadow-xl shadow-amber-950/60 flex-shrink-0 group">
              <Image
                src="/images/trust-one-logo.webp"
                alt="Trust One Properties"
                width={120}
                height={120}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                unoptimized
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-500/30">
                <Landmark className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.trustOne.badge}</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-wide">
                Trust One Properties
              </h2>
              <p className="text-xs sm:text-sm text-amber-300 font-medium mt-1 leading-relaxed">
                &ldquo;{t.trustOne.tagline}&rdquo;
              </p>
            </div>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#D4AF37] text-[#050B16] hover:bg-[#F3C65F] transition-colors shadow-lg shadow-amber-500/20 whitespace-nowrap"
          >
            {t.trustOne.ctaButton}
          </Link>
        </div>

        {/* STRICT COMPLIANCE CALLOUT BANNER */}
        <div className="mt-10 rounded-2xl glass-panel-gold p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="p-3.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 flex-shrink-0">
              <Lock className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.trustOne.complianceBadge}</span>
              </div>
              <h3
                className={`text-white ${
                  isMM
                    ? 'text-base sm:text-xl font-semibold leading-relaxed tracking-normal font-sans'
                    : 'text-lg sm:text-xl font-bold font-heading'
                }`}
              >
                {t.trustOne.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-loose">
                {t.trustOne.complianceNotice}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Domestic Property Portfolios */}
        <div className="mt-16 lg:mt-20">
          <div className="max-w-2xl mb-8">
            <h3
              className={`text-white ${
                isMM
                  ? 'text-xl sm:text-2xl font-semibold leading-relaxed tracking-normal font-sans'
                  : 'text-xl sm:text-3xl font-extrabold font-heading tracking-wide'
              }`}
            >
              {t.trustOne.categoriesTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.trustOne.categoriesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Category 1 */}
            <div className="rounded-2xl bg-[#071326] border border-amber-500/25 p-6 sm:p-8 hover:border-amber-400/50 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4
                  className={`text-white mb-2 ${
                    isMM
                      ? 'text-base sm:text-lg font-semibold leading-relaxed tracking-normal font-sans'
                      : 'text-lg sm:text-xl font-bold font-heading'
                  }`}
                >
                  {t.trustOne.cat1Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-loose mb-6">
                  {t.trustOne.cat1Desc}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                  {t.trustOne.cat1Highlights.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Category 2 */}
            <div className="rounded-2xl bg-[#071326] border border-amber-500/25 p-6 sm:p-8 hover:border-amber-400/50 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-5">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4
                  className={`text-white mb-2 ${
                    isMM
                      ? 'text-base sm:text-lg font-semibold leading-relaxed tracking-normal font-sans'
                      : 'text-lg sm:text-xl font-bold font-heading'
                  }`}
                >
                  {t.trustOne.cat2Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-loose mb-6">
                  {t.trustOne.cat2Desc}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                  {t.trustOne.cat2Highlights.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Category 3 */}
            <div className="rounded-2xl bg-[#071326] border border-amber-500/25 p-6 sm:p-8 hover:border-amber-400/50 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-5">
                  <Home className="w-6 h-6" />
                </div>
                <h4
                  className={`text-white mb-2 ${
                    isMM
                      ? 'text-base sm:text-lg font-semibold leading-relaxed tracking-normal font-sans'
                      : 'text-lg sm:text-xl font-bold font-heading'
                  }`}
                >
                  {t.trustOne.cat3Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-loose mb-6">
                  {t.trustOne.cat3Desc}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                  {t.trustOne.cat3Highlights.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Category 4 */}
            <div className="rounded-2xl bg-[#071326] border border-amber-500/25 p-6 sm:p-8 hover:border-amber-400/50 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-5">
                  <Layers className="w-6 h-6" />
                </div>
                <h4
                  className={`text-white mb-2 ${
                    isMM
                      ? 'text-base sm:text-lg font-semibold leading-relaxed tracking-normal font-sans'
                      : 'text-lg sm:text-xl font-bold font-heading'
                  }`}
                >
                  {t.trustOne.cat4Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-loose mb-6">
                  {t.trustOne.cat4Desc}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                  {t.trustOne.cat4Highlights.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Capabilities & Due Diligence */}
        <div className="mt-16 lg:mt-24">
          <div className="max-w-2xl mb-8">
            <h3
              className={`text-white ${
                isMM
                  ? 'text-xl sm:text-2xl font-semibold leading-relaxed tracking-normal font-sans'
                  : 'text-xl sm:text-3xl font-extrabold font-heading tracking-wide'
              }`}
            >
              {t.trustOne.advisoryTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.trustOne.advisorySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-xl bg-[#071326] border border-amber-500/20">
              <div className="w-9 h-9 rounded-lg bg-amber-950/80 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
                <FileText className="w-4 h-4" />
              </div>
              <h4
                className={`text-white mb-1.5 ${
                  isMM
                    ? 'text-xs sm:text-sm font-semibold leading-relaxed tracking-normal font-sans'
                    : 'text-sm font-bold font-heading'
                }`}
              >
                {t.trustOne.adv1Title}
              </h4>
              <p className="text-xs text-slate-400 leading-loose">
                {t.trustOne.adv1Desc}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#071326] border border-amber-500/20">
              <div className="w-9 h-9 rounded-lg bg-amber-950/80 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
                <Scale className="w-4 h-4" />
              </div>
              <h4
                className={`text-white mb-1.5 ${
                  isMM
                    ? 'text-xs sm:text-sm font-semibold leading-relaxed tracking-normal font-sans'
                    : 'text-sm font-bold font-heading'
                }`}
              >
                {t.trustOne.adv2Title}
              </h4>
              <p className="text-xs text-slate-400 leading-loose">
                {t.trustOne.adv2Desc}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#071326] border border-amber-500/20">
              <div className="w-9 h-9 rounded-lg bg-amber-950/80 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4
                className={`text-white mb-1.5 ${
                  isMM
                    ? 'text-xs sm:text-sm font-semibold leading-relaxed tracking-normal font-sans'
                    : 'text-sm font-bold font-heading'
                }`}
              >
                {t.trustOne.adv3Title}
              </h4>
              <p className="text-xs text-slate-400 leading-loose">
                {t.trustOne.adv3Desc}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#071326] border border-amber-500/20">
              <div className="w-9 h-9 rounded-lg bg-amber-950/80 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
                <Key className="w-4 h-4" />
              </div>
              <h4
                className={`text-white mb-1.5 ${
                  isMM
                    ? 'text-xs sm:text-sm font-semibold leading-relaxed tracking-normal font-sans'
                    : 'text-sm font-bold font-heading'
                }`}
              >
                {t.trustOne.adv4Title}
              </h4>
              <p className="text-xs text-slate-400 leading-loose">
                {t.trustOne.adv4Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Featured Regional Desk Highlight */}
        <div className="mt-16 lg:mt-24 rounded-2xl glass-panel-gold p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {isMM ? 'အဓိက အိမ်ခြံမြေဌာန' : 'Strategic Real Estate Desk'}
              </div>
              <h4
                className={`text-white mt-1 ${
                  isMM
                    ? 'text-base sm:text-xl font-semibold leading-relaxed tracking-normal font-sans'
                    : 'text-lg sm:text-2xl font-bold font-heading'
                }`}
              >
                {t.trustOne.showcaseTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                {t.trustOne.showcaseSubtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <a
                href="tel:+9595056524"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 transition-colors shadow-lg shadow-amber-500/10 whitespace-nowrap"
                title="Call Trust One Desk"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>09 505 6524</span>
              </a>
              <a
                href="tel:+959795056524"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 transition-colors shadow-lg shadow-amber-500/10 whitespace-nowrap"
                title="Call Trust One Mobile Desk"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>09 795 056 524</span>
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#D4AF37] text-[#050B16] hover:bg-[#F3C65F] transition-colors shadow-lg shadow-amber-500/20 whitespace-nowrap"
              >
                <span>{t.trustOne.ctaButton}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
