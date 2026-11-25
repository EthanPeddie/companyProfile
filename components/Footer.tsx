'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#E8F2EE] text-[#291550] pt-16 pb-10 border-t border-[#4A2B88]/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#4A2B88]/12">
          {/* Column 1: Corporate Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#4A2B88] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/thet-and-thu-emblem.webp"
                  alt="THET & THU Emblem"
                  width={28}
                  height={28}
                  className="w-6 h-6 object-contain"
                  unoptimized
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm tracking-wide text-[#291550] font-heading">
                  THET &amp; THU CO., LTD.
                </span>
                <span className="text-[11px] font-semibold text-[#4A2B88] mt-1">
                  EST. 2014 • YANGON, MYANMAR
                </span>
              </div>
            </div>

            <p className="text-xs font-semibold text-[#9A540E]">
              &ldquo;{t.footer.parentTagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#433B54] leading-relaxed max-w-md">
              {t.footer.holdingDesc}
            </p>

            <div className="pt-2 flex items-center gap-2">
              <div className="inline-flex rounded-lg bg-white p-0.5 border border-[#4A2B88]/15">
                <button
                  type="button"
                  onClick={() => setLanguage('MM')}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                    language === 'MM'
                      ? 'bg-[#4A2B88] text-white'
                      : 'text-[#433B54] hover:text-[#291550]'
                  }`}
                >
                  မြန်မာ
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('EN')}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                    language === 'EN'
                      ? 'bg-[#4A2B88] text-white'
                      : 'text-[#433B54] hover:text-[#291550]'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Divisions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#291550]">
              {t.footer.divisionsHeading}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#433B54]">
              <li>
                <Link href="/polaris" className="hover:text-[#4A2B88] transition-colors">
                  Polaris Tech Solution
                </Link>
              </li>
              <li>
                <Link href="/trust-one" className="hover:text-[#4A2B88] transition-colors">
                  Trust One Properties
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#4A2B88] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/#offices" className="hover:text-[#4A2B88] transition-colors">
                  {t.nav.offices}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#291550]">
              {t.footer.contactHeading}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#433B54]">
              <div>
                <a href="mailto:info@thetandthu.com" className="hover:text-[#4A2B88] transition-colors">
                  info@thetandthu.com
                </a>
              </div>
              <div className="font-mono font-semibold text-[#291550]">
                <a href="tel:+9595056524" className="hover:text-[#4A2B88] transition-colors">
                  09 505 6524
                </a>
                <span className="mx-2 text-[#4A2B88]/30">/</span>
                <a href="tel:+959443212306" className="hover:text-[#4A2B88] transition-colors">
                  09 443 212 306
                </a>
              </div>
              <p className="text-xs text-[#6B637A] leading-relaxed pt-1">
                No.(3), Room (9D), Grand Kan Yeik Thar Condo, Mingalar Taung Nyunt, Yangon.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Compliance & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#6B637A]">
          <div className="space-y-1 max-w-2xl">
            <p>{t.footer.complianceStatement}</p>
            <p>{t.footer.copyright}</p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#4A2B88] hover:text-white border border-[#4A2B88]/15 text-xs font-semibold text-[#291550] transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
