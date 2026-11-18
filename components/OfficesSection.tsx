'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  MapPin,
  Building,
  Navigation,
  Copy,
  Check,
  Clock,
  ExternalLink,
  Phone,
} from 'lucide-react';

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
      className="relative py-20 lg:py-28 bg-[#040812] border-b border-white/[0.08] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.offices.badge}</span>
          </div>
          <h2
            className={`mt-4 text-white transition-all ${
              isMM
                ? 'text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed tracking-normal font-sans'
                : 'text-2xl sm:text-4xl font-extrabold font-heading tracking-wide'
            }`}
          >
            {t.offices.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.offices.subtitle}
          </p>
        </div>

        {/* Dual Corporate Office Monoliths */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Head Office (Yangon City) */}
          <div className="rounded-2xl glass-panel-gold p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-500/30">
                  <Building className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isMM ? 'ရန်ကုန်မြို့ ကော်ပိုရိတ်ရုံးချုပ်' : 'Yangon City Corporate Hub'}</span>
                </span>
                <span className="text-xs text-amber-300 font-mono">
                  Suite 9D
                </span>
              </div>

              <h3
                className={`text-white ${
                  isMM
                    ? 'text-lg sm:text-xl font-semibold leading-relaxed tracking-normal font-sans'
                    : 'text-xl sm:text-2xl font-bold font-heading'
                }`}
              >
                {t.offices.headOfficeTitle}
              </h3>
              <p className="text-xs sm:text-sm text-amber-300/90 font-medium mt-1">
                {t.offices.headOfficeRole}
              </p>

              {/* Physical Address */}
              <div className="mt-6 p-4 rounded-xl bg-[#050B16] border border-white/10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {t.offices.headOfficeAddress}
                  </p>
                </div>
              </div>

              {/* Telephone Hotline Row */}
              <div className="mt-3 p-3.5 rounded-xl bg-[#050B16] border border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
                <span className="text-slate-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{isMM ? 'ရုံးချုပ် တိုက်ရိုက်ဖုန်း' : 'Executive Hotline'}</span>
                </span>
                <span className="font-mono font-semibold space-x-2">
                  <a href="tel:+9595056524" className="text-amber-300 hover:text-white transition-colors">
                    09 505 6524
                  </a>
                  <span className="text-white/20">/</span>
                  <a href="tel:+959443212306" className="text-amber-300 hover:text-white transition-colors">
                    09 443 212 306
                  </a>
                </span>
              </div>

              {/* Operating Hours Table */}
              <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {t.offices.openHours}
                  </span>
                  <span className="font-semibold text-white">
                    {t.offices.openHoursVal}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
                  <span className="text-slate-400">{t.offices.satHours}</span>
                  <span className="font-semibold text-white">
                    {t.offices.satHoursVal}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1.5 gap-1">
                  <span className="text-slate-400">{t.offices.sundayHours}</span>
                  <span className="text-amber-400 font-medium">
                    {t.offices.sundayHoursVal}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions: Copy & Maps */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={handleCopyHead}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 border border-white/10 transition-colors"
              >
                {copiedHead ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">{t.offices.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.offices.copyAddress}</span>
                  </>
                )}
              </button>

              <a
                href="https://maps.app.goo.gl/KFqzrtMZiGCdD9haA?g_st=iv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.offices.getDirections}</span>
                <ExternalLink className="w-3 h-3 ml-0.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Card 2: Branch Office (Thanlyin) */}
          <div className="rounded-2xl glass-panel-cyan p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  <Building className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isMM ? 'သန်လျင် နည်းပညာနှင့် အိမ်ခြံမြေစင်တာ' : 'Thanlyin Tech & Property Center'}</span>
                </span>
                <span className="text-xs text-cyan-400 font-mono">
                  ARA Y20
                </span>
              </div>

              <h3
                className={`text-white ${
                  isMM
                    ? 'text-lg sm:text-xl font-semibold leading-relaxed tracking-normal font-sans'
                    : 'text-xl sm:text-2xl font-bold font-heading'
                }`}
              >
                {t.offices.branchOfficeTitle}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-300 font-medium mt-1">
                {t.offices.branchOfficeRole}
              </p>

              {/* Physical Address */}
              <div className="mt-6 p-4 rounded-xl bg-[#040812] border border-white/10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {t.offices.branchOfficeAddress}
                  </p>
                </div>
              </div>

              {/* Telephone Desk Row */}
              <div className="mt-3 p-3.5 rounded-xl bg-[#040812] border border-white/10 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>Polaris Tech:</span>
                  </span>
                  <a href="tel:+959780654277" className="font-mono font-semibold text-cyan-300 hover:text-white transition-colors">
                    09 780 654 277
                  </a>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-2">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>Trust One:</span>
                  </span>
                  <span className="font-mono font-semibold space-x-2">
                    <a href="tel:+9595056524" className="text-amber-300 hover:text-white transition-colors">
                      09 505 6524
                    </a>
                    <span className="text-white/20">/</span>
                    <a href="tel:+959795056524" className="text-amber-300 hover:text-white transition-colors">
                      09 795 056 524
                    </a>
                  </span>
                </div>
              </div>

              {/* Operating Hours Table */}
              <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    {t.offices.openHours}
                  </span>
                  <span className="font-semibold text-white">
                    {t.offices.openHoursVal}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
                  <span className="text-slate-400">{t.offices.satHours}</span>
                  <span className="font-semibold text-white">
                    {t.offices.satHoursVal}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1.5 gap-1">
                  <span className="text-slate-400">{t.offices.sundayHours}</span>
                  <span className="text-cyan-400 font-medium">
                    {t.offices.sundayHoursVal}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions: Copy & Maps */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={handleCopyBranch}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 border border-white/10 transition-colors"
              >
                {copiedBranch ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">{t.offices.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.offices.copyAddress}</span>
                  </>
                )}
              </button>

              <a
                href="https://maps.google.com/?q=Star+City+Thanlyin+Yangon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.offices.getDirections}</span>
                <ExternalLink className="w-3 h-3 ml-0.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
