'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Code2,
  ArrowUpRight,
} from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, isMM, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [divisionsDropdown, setDivisionsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full h-16 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#140B29]/10 shadow-[0_1px_12px_rgba(20,11,41,0.04)]'
            : 'bg-[#F7FAF8]/90 backdrop-blur-md border-b border-[#140B29]/6'
        }`}
      >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Mark */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2B88] rounded-lg"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-9 h-9 rounded-lg bg-[#4A2B88] flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-[1.03]">
            <Image
              src="/images/thet-and-thu-emblem.webp"
              alt="THET & THU CO., LTD."
              width={28}
              height={28}
              className="w-6 h-6 object-contain"
              priority
              unoptimized
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-sm tracking-wide text-[#291550] font-heading">
              THET &amp; THU
            </span>
            <span className="text-[10px] font-medium text-[#6B637A] mt-0.5">
              {isMM ? 'ကုမ္ပဏီလီမိတက်' : 'CO., LTD. • EST. 2014'}
            </span>
          </div>
        </Link>

        {/* Desktop Single-Row Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/#about"
            className="px-3.5 py-2 rounded-lg text-[13px] font-medium text-[#433B54] hover:text-[#140B29] hover:bg-[#140B29]/5 transition-colors"
          >
            {t.nav.about}
          </Link>

          {/* Divisions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDivisionsDropdown(true)}
            onMouseLeave={() => setDivisionsDropdown(false)}
          >
            <button
              type="button"
              onClick={() => setDivisionsDropdown(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13px] font-medium text-[#433B54] hover:text-[#140B29] hover:bg-[#140B29]/5 transition-colors focus:outline-none"
              aria-expanded={divisionsDropdown}
            >
              <span>{t.nav.divisions}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#6B637A] transition-transform duration-200 ${
                  divisionsDropdown ? 'rotate-180' : ''
                }`}
              />
            </button>

            {divisionsDropdown && (
              <div className="absolute left-0 top-full pt-2 w-80 z-50">
                <div className="rounded-xl bg-white border border-[#140B29]/10 shadow-xl p-2 space-y-1">
                  <Link
                    href="/polaris"
                    onClick={() => setDivisionsDropdown(false)}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F7FAF8] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#4A2B88] text-white flex items-center justify-center flex-shrink-0">
                      <Code2 className="w-4 h-4 text-[#FFA62B]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs font-bold text-[#140B29] group-hover:text-[#4A2B88]">
                        <span>Polaris Tech Solution</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-[#6B637A] mt-0.5 line-clamp-2">
                        {isMM
                          ? 'လုပ်ငန်းသုံး ERP, POS နှင့် Custom Software စနစ်များ'
                          : 'Bespoke Enterprise ERP, POS & Mobile Systems'}
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/trust-one"
                    onClick={() => setDivisionsDropdown(false)}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F7FAF8] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FFF4E0] text-[#9A540E] flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4 text-[#E88D17]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs font-bold text-[#140B29] group-hover:text-[#9A540E]">
                        <span>Trust One Properties</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-[#6B637A] mt-0.5 line-clamp-2">
                        {isMM
                          ? 'မြန်မာပြည်တွင်း အိမ်ခြံမြေနှင့် ကွန်ဒို ဝန်ဆောင်မှု'
                          : 'Verified Domestic Myanmar Real Estate Advisory'}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/polaris"
            className="px-3.5 py-2 rounded-lg text-[13px] font-medium text-[#433B54] hover:text-[#140B29] hover:bg-[#140B29]/5 transition-colors"
          >
            {t.nav.polaris}
          </Link>
          <Link
            href="/trust-one"
            className="px-3.5 py-2 rounded-lg text-[13px] font-medium text-[#433B54] hover:text-[#140B29] hover:bg-[#140B29]/5 transition-colors"
          >
            {t.nav.trustOne}
          </Link>
          <Link
            href="/#offices"
            className="px-3.5 py-2 rounded-lg text-[13px] font-medium text-[#433B54] hover:text-[#140B29] hover:bg-[#140B29]/5 transition-colors"
          >
            {t.nav.offices}
          </Link>
        </nav>

        {/* Right Controls: Language Switch + Single Primary CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div
            className="inline-flex items-center rounded-lg bg-[#EDF4F0] p-0.5 border border-[#140B29]/8"
            role="group"
            aria-label="Language switcher"
          >
            <button
              type="button"
              onClick={() => setLanguage('MM')}
              className={`px-2.5 py-1.5 rounded-md text-[11px] font-semibold leading-none transition-all duration-150 ${
                language === 'MM'
                  ? 'bg-white text-[#140B29] shadow-xs'
                  : 'text-[#6B637A] hover:text-[#140B29]'
              }`}
            >
              မြန်မာ
            </button>
            <button
              type="button"
              onClick={() => setLanguage('EN')}
              className={`px-2.5 py-1.5 rounded-md text-[11px] font-semibold leading-none transition-all duration-150 ${
                language === 'EN'
                  ? 'bg-white text-[#140B29] shadow-xs'
                  : 'text-[#6B637A] hover:text-[#140B29]'
              }`}
            >
              EN
            </button>
          </div>

          <Link
            href="/#contact"
            className="btn-interactive inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold bg-[#4A2B88] text-white hover:bg-[#381F6A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2B88]"
          >
            {t.nav.contact}
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setLanguage(language === 'MM' ? 'EN' : 'MM')}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-[#EDF4F0] text-[#140B29] border border-[#140B29]/10"
            aria-label="Toggle language"
          >
            {language === 'MM' ? 'EN' : 'မြန်မာ'}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="p-2 rounded-lg text-[#140B29] hover:bg-[#140B29]/5 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Drawer (rendered outside <header> so backdrop-blur doesn't clip fixed positioning) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-50 overflow-y-auto border-t border-[#140B29]/10 px-5 py-6">
          <nav className="space-y-1">
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-semibold text-[#140B29] hover:bg-[#F7FAF8]"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/polaris"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold text-[#140B29] hover:bg-[#F7FAF8]"
            >
              <span>Polaris Tech Solution</span>
              <ArrowUpRight className="w-4 h-4 text-[#6B637A]" />
            </Link>
            <Link
              href="/trust-one"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold text-[#140B29] hover:bg-[#F7FAF8]"
            >
              <span>Trust One Properties</span>
              <ArrowUpRight className="w-4 h-4 text-[#6B637A]" />
            </Link>
            <Link
              href="/#offices"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-semibold text-[#140B29] hover:bg-[#F7FAF8]"
            >
              {t.nav.offices}
            </Link>
          </nav>

          <div className="mt-6 pt-6 border-t border-[#140B29]/10">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-[#4A2B88] text-white text-sm font-semibold flex items-center justify-center"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
