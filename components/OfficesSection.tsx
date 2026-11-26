'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal } from '@/components/MotionPrimitives';
import { MapPin, Copy, Check, ExternalLink, Phone } from 'lucide-react';

export default function OfficesSection() {
  const { isMM, t } = useLanguage();
  const [copiedHead, setCopiedHead] = useState(false);
  const [copiedBranch, setCopiedBranch] = useState(false);

  const handleCopyHead = () => {
    navigator.clipboard.writeText(t.offices.headOfficeAddress);
    setCopiedHead(true);
    setTimeout(() => setCopiedHead(false), 2000);
  };

  const handleCopyBranch = () => {
    navigator.clipboard.writeText(t.offices.branchOfficeAddress);
    setCopiedBranch(true);
    setTimeout(() => setCopiedBranch(false), 2000);
  };

  return (
    <section
      id="offices"
      className="relative py-20 lg:py-28 bg-[#F4F7FC] border-b border-[#0A2463]/10 scroll-mt-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-[#0A2463] mb-2">{t.offices.badge}</p>
          <h2
            className={`text-[#001749] [text-wrap:balance] ${
              isMM
                ? 'text-2xl sm:text-3xl font-bold leading-relaxed'
                : 'text-3xl sm:text-4xl font-extrabold font-heading tracking-tight'
            }`}
          >
            {t.offices.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#42526E] leading-relaxed">
            {t.offices.subtitle}
          </p>
        </div>

        {/* Dual Corporate Offices */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Head Office (Yangon City) */}
          <ScrollReveal delayMs={0}>
            <div className="card-interactive h-full rounded-2xl bg-white border border-[#0A2463]/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-semibold text-[#4A2B88]">
                  {isMM ? 'ရန်ကုန်မြို့ ကော်ပိုရိတ်ရုံးချုပ်' : 'Yangon City Corporate Hub'}
                </span>
                <span className="text-xs font-mono font-semibold text-[#6B637A]">Suite 9D</span>
              </div>

              <h3
                className={`text-[#140B29] ${
                  isMM ? 'text-lg sm:text-xl font-bold' : 'text-xl sm:text-2xl font-bold font-heading'
                }`}
              >
                {t.offices.headOfficeTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B637A] mt-1">{t.offices.headOfficeRole}</p>

              {/* Address */}
              <div className="mt-6 p-4 rounded-xl bg-white border border-[#140B29]/8 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#4A2B88] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#140B29] leading-relaxed">
                  {t.offices.headOfficeAddress}
                </p>
              </div>

              {/* Hotlines */}
              <div className="mt-3 p-3.5 rounded-xl bg-white border border-[#140B29]/8 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
                <span className="text-[#433B54] flex items-center gap-2 font-medium">
                  <Phone className="w-4 h-4 text-[#4A2B88]" />
                  <span>{isMM ? 'ရုံးချုပ် ဖုန်း:' : 'Direct Desk:'}</span>
                </span>
                <div className="flex items-center gap-3 font-mono font-semibold tabular-nums">
                  <a href="tel:+9595056524" className="text-[#140B29] hover:text-[#4A2B88]">
                    09 505 6524
                  </a>
                  <span className="text-[#140B29]/20">/</span>
                  <a href="tel:+959443212306" className="text-[#140B29] hover:text-[#4A2B88]">
                    09 443 212 306
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="mt-5 pt-5 border-t border-[#140B29]/8 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#6B637A]">{t.offices.openHours}</span>
                  <span className="font-semibold text-[#140B29]">{t.offices.openHoursVal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B637A]">{t.offices.satHours}</span>
                  <span className="font-semibold text-[#140B29]">{t.offices.satHoursVal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B637A]">{t.offices.sundayHours}</span>
                  <span className="font-semibold text-[#6B637A]">{t.offices.sundayHoursVal}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#140B29]/8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleCopyHead}
                className="btn-interactive sm:flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-white border border-[#140B29]/15 text-xs font-semibold text-[#140B29] hover:border-[#140B29]/35 whitespace-nowrap"
              >
                {copiedHead ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="text-emerald-700">{t.offices.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#6B637A] flex-shrink-0" />
                    <span>{t.offices.copyAddress}</span>
                  </>
                )}
              </button>

              <a
                href="https://maps.app.goo.gl/KFqzrtMZiGCdD9haA?g_st=iv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive sm:flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#0A2463] text-white text-xs font-semibold hover:bg-[#001749] whitespace-nowrap"
              >
                <span>{t.offices.getDirections}</span>
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
              </a>
            </div>
          </div>
          </ScrollReveal>

          {/* Card 2: Branch Office (Star City, Thanlyin) */}
          <ScrollReveal delayMs={100}>
            <div className="card-interactive h-full rounded-2xl bg-white border border-[#0A2463]/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-semibold text-[#9A540E]">
                  {isMM ? 'သန်လျင် Star City ရုံးခွဲ' : 'Thanlyin Star City Branch'}
                </span>
                <span className="text-xs font-mono font-semibold text-[#6B637A]">Zone A • A5</span>
              </div>

              <h3
                className={`text-[#140B29] ${
                  isMM ? 'text-lg sm:text-xl font-bold' : 'text-xl sm:text-2xl font-bold font-heading'
                }`}
              >
                {t.offices.branchOfficeTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B637A] mt-1">{t.offices.branchOfficeRole}</p>

              {/* Address */}
              <div className="mt-6 p-4 rounded-xl bg-white border border-[#140B29]/8 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E88D17] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#140B29] leading-relaxed">
                  {t.offices.branchOfficeAddress}
                </p>
              </div>

              {/* Division Hotlines */}
              <div className="mt-3 p-3.5 rounded-xl bg-white border border-[#140B29]/8 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#433B54] font-medium">Polaris Tech:</span>
                  <a
                    href="tel:+959780654277"
                    className="font-mono font-semibold tabular-nums text-[#140B29] hover:text-[#4A2B88]"
                  >
                    09 780 654 277
                  </a>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#433B54] font-medium">Trust One:</span>
                  <div className="flex items-center gap-2 font-mono font-semibold tabular-nums">
                    <a href="tel:+9595056524" className="text-[#140B29] hover:text-[#9A540E]">
                      09 505 6524
                    </a>
                    <span className="text-[#140B29]/20">/</span>
                    <a href="tel:+959795056524" className="text-[#140B29] hover:text-[#9A540E]">
                      09 79 505 6524
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="mt-5 pt-5 border-t border-[#140B29]/8 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#6B637A]">{t.offices.openHours}</span>
                  <span className="font-semibold text-[#140B29]">{t.offices.openHoursVal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B637A]">{t.offices.satHours}</span>
                  <span className="font-semibold text-[#140B29]">{t.offices.satHoursVal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B637A]">{t.offices.sundayHours}</span>
                  <span className="font-semibold text-[#6B637A]">{t.offices.sundayHoursVal}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#140B29]/8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleCopyBranch}
                className="btn-interactive sm:flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-white border border-[#140B29]/15 text-xs font-semibold text-[#140B29] hover:border-[#140B29]/35 whitespace-nowrap"
              >
                {copiedBranch ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="text-emerald-700">{t.offices.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#6B637A] flex-shrink-0" />
                    <span>{t.offices.copyAddress}</span>
                  </>
                )}
              </button>

              <a
                href="https://maps.google.com/?q=Star+City+Thanlyin+Yangon"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive sm:flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#0A2463] text-white text-xs font-semibold hover:bg-[#001749] whitespace-nowrap"
              >
                <span>{t.offices.getDirections}</span>
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
              </a>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
