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
          {/* Column 1: Parent Holding Dossier (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block rounded-xl overflow-hidden bg-[#071326] border border-amber-500/30 p-2">
              <Image
                src="/images/thet-and-thu-logo.png"
                alt="THET & THU CO., LTD."
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
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
              <span className="text-xs text-slate-500">Language / ဘာသာစကား:</span>
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
                  English
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
                  <span>Polaris Tech Solution</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Bespoke ERP, Multi-Branch POS &amp; Mobile
                </div>
              </Link>

              <Link
                href="/trust-one"
                className="block p-3.5 rounded-xl bg-[#071326] border border-amber-500/20 hover:border-amber-400 transition-colors group"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 group-hover:text-amber-200">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Trust One Properties</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Domestic Myanmar Land, Condos &amp; Advisory
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
              <div className="p-3 rounded-xl bg-[#071326] border border-white/5 space-y-1">
                <div className="font-bold text-amber-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Head Office (Yangon City)</span>
                </div>
                <div className="text-slate-300 leading-relaxed text-[11px]">
                  No.(3), Room No.(9D), Grand Kan Yeik Thar Condo, Kan Yeik Thar Road, Mingalar Taung Nyunt Township, Yangon, Myanmar.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#071326] border border-white/5 space-y-1">
                <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Branch Office (Thanlyin)</span>
                </div>
                <div className="text-slate-300 leading-relaxed text-[11px]">
                  ARA Building Y20, 105/B, Star City, ThanLyin Township, Yangon, Myanmar.
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
                <a
                  href="tel:+959450000000"
                  className="hover:text-amber-400 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+95 9 450 000 000</span>
                </a>
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
