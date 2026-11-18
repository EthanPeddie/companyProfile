'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Code2,
  Building2,
} from 'lucide-react';

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#03060E] border-t border-white/[0.08] text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/[0.08]">
          {/* Column 1: Corporate Dossier (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex rounded-xl overflow-hidden border border-amber-500/35 p-0 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <Image
                src="/images/thet-and-thu-logo.webp"
                alt="THET & THU CO., LTD."
                width={180}
                height={120}
                className="h-12 w-auto block object-cover"
                unoptimized
              />
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              &ldquo;{t.footer.parentTagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.footer.holdingDesc}
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs text-slate-400">
                {language === 'MM' ? 'ဘာသာစကား ရွေးချယ်ရန်:' : 'Select Language:'}
              </span>
              <div className="inline-flex rounded-lg bg-[#071326] p-0.5 border border-white/10">
                <button
                  type="button"
                  onClick={() => setLanguage('EN')}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                    language === 'EN'
                      ? 'bg-[#D4AF37] text-[#03060E] font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('MM')}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                    language === 'MM'
                      ? 'bg-[#D4AF37] text-[#03060E] font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  မြန်မာ
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Subsidiaries Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.divisionsHeading}
            </h4>
            <div className="space-y-3 pt-1">
              <Link
                href="/polaris"
                className="block p-3.5 rounded-xl bg-[#071326] border border-cyan-500/20 hover:border-cyan-400 transition-colors group"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 group-hover:text-cyan-200">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.nav.polarisDropdownTitle}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  {t.nav.polarisDropdownDesc}
                </div>
              </Link>

              <Link
                href="/trust-one"
                className="block p-3.5 rounded-xl bg-[#071326] border border-amber-500/20 hover:border-amber-400 transition-colors group"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 group-hover:text-amber-200">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.nav.trustOneDropdownTitle}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  {t.nav.trustOneDropdownDesc}
                </div>
              </Link>
            </div>
          </div>

          {/* Column 3: Physical Corporate Hubs (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.contactHeading}
            </h4>

            <div className="space-y-3 text-xs pt-1">
              <div className="p-3 rounded-xl bg-[#071326] border border-white/5 space-y-1.5">
                <div className="font-bold text-amber-300 flex flex-wrap items-center justify-between gap-1.5">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.offices.headOfficeTitle}</span>
                  </span>
                  <span className="font-mono text-[11px] text-amber-400 font-semibold space-x-1">
                    <a href="tel:+9595056524" className="hover:underline">09 505 6524</a>
                    <span className="text-white/20">/</span>
                    <a href="tel:+959443212306" className="hover:underline">09 443 212 306</a>
                  </span>
                </div>
                <div className="text-slate-300 leading-relaxed text-[11px]">
                  {t.offices.headOfficeAddress}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#071326] border border-white/5 space-y-1.5">
                <div className="font-bold text-cyan-300 flex flex-wrap items-center justify-between gap-1.5">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.offices.branchOfficeTitle}</span>
                  </span>
                  <span className="font-mono text-[11px] space-x-1.5 text-slate-300 font-medium">
                    <a href="tel:+959780654277" className="text-cyan-400 hover:underline">Polaris: 09 780 654 277</a>
                    <span className="text-white/20">|</span>
                    <a href="tel:+959795056524" className="text-amber-400 hover:underline">Trust One: 09 795 056 524</a>
                  </span>
                </div>
                <div className="text-slate-300 leading-relaxed text-[11px]">
                  {t.offices.branchOfficeAddress}
                </div>
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <a
                  href="mailto:info@thetandthu.com"
                  className="hover:text-amber-400 flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>info@thetandthu.com</span>
                </a>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <a href="tel:+9595056524" className="hover:text-amber-300 transition-colors">
                    09 505 6524
                  </a>
                  <span className="text-white/20">/</span>
                  <a href="tel:+959443212306" className="hover:text-amber-300 transition-colors">
                    09 443 212 306
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Regulatory Compliance Notice */}
        <div className="py-6 border-b border-white/[0.08] text-[11px] text-slate-400 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p>{t.footer.complianceStatement}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>{t.footer.copyright}</div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
