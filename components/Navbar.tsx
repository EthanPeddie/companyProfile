'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, isMM, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsDropdown, setDivisionsDropdown] = useState(false);

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
      {/* Top Corporate Banner (Full-Width Edge-to-Edge on Desktop, Compact on Mobile) */}
      <div className="w-full bg-[#001749] border-b border-[#D4AF37]/40 overflow-hidden">
        {/* Desktop & Tablet Full-Width Official Banner */}
        <Link href="/" className="hidden md:block w-full overflow-hidden">
          <Image
            src="/images/corporate-banner.jpg"
            alt="THET & THU CO., LTD. — Building A Better Tomorrow Together"
            width={1920}
            height={280}
            className="w-full h-auto block scale-[1.004]"
            priority
            unoptimized
          />
        </Link>

        {/* Mobile Compact Brand Banner */}
        <Link
          href="/"
          className="md:hidden flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-[#001749] via-[#062261] to-[#0A2C7A]"
        >
          <Image
            src="/images/logo-thet-thu.svg"
            alt="THET & THU CO., LTD."
            width={40}
            height={40}
            className="w-10 h-10 rounded-lg object-contain bg-[#001749] border border-[#D4AF37]/40 p-1 flex-shrink-0"
            priority
            unoptimized
          />
          <div className="min-w-0">
            <div className="font-heading text-sm font-bold tracking-wider text-[#F4D06F] truncate">
              THET &amp; THU CO., LTD.
            </div>
            <div className="text-[10px] tracking-wide text-white/85 uppercase truncate">
              Building A Better Tomorrow Together
            </div>
          </div>
        </Link>
      </div>

      {/* Centered Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 w-full h-14 bg-[#071D4E]/95 backdrop-blur-md border-b-2 border-[#D4AF37]/60 shadow-sm">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left Spacer on Desktop to keep nav truly centered */}
          <div className="hidden lg:flex items-center w-28">
            <Link
              href="/"
              className="text-xs font-bold tracking-wider text-[#F4D06F] font-heading hover:text-white transition-colors"
            >
              EST. 2014
            </Link>
          </div>

          {/* Mobile Home Link */}
          <Link
            href="/"
            className="lg:hidden text-xs font-bold tracking-wider text-[#F4D06F] font-heading"
            onClick={() => setMobileMenuOpen(false)}
          >
            THET &amp; THU
          </Link>

          {/* Desktop Centered 4-Link Navigation (Zero Redundancy) */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            <Link
              href="/#about"
              className="text-xs font-semibold uppercase tracking-wider text-white/90 hover:text-[#F4D06F] transition-colors whitespace-nowrap"
            >
              {isMM ? 'ကုမ္ပဏီအကြောင်း' : language === 'ZH' ? '公司简介' : 'ABOUT'}
            </Link>

            <Link
              href="/#vision"
              className="text-xs font-semibold uppercase tracking-wider text-white/90 hover:text-[#F4D06F] transition-colors whitespace-nowrap"
            >
              {isMM ? 'ရည်မှန်းချက်များ' : language === 'ZH' ? '愿景与价值' : 'VISION & VALUES'}
            </Link>

            {/* Our Companies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDivisionsDropdown(true)}
              onMouseLeave={() => setDivisionsDropdown(false)}
            >
              <button
                type="button"
                onClick={() => setDivisionsDropdown(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 hover:text-[#F4D06F] transition-colors whitespace-nowrap focus:outline-none py-2"
                aria-expanded={divisionsDropdown}
              >
                <span>{isMM ? 'လုပ်ငန်းခွဲများ' : language === 'ZH' ? '旗下业务' : 'OUR COMPANIES'}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#F4D06F] transition-transform duration-200 ${
                    divisionsDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {divisionsDropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 w-80 z-50">
                  <div className="rounded-xl bg-white border border-[#0A2463]/15 shadow-xl p-2 space-y-1">
                    <Link
                      href="/polaris"
                      onClick={() => setDivisionsDropdown(false)}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F4F7FC] transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#0A2463]/12 flex items-center justify-center flex-shrink-0 p-1">
                        <Image
                          src="/images/logo-polaris.svg"
                          alt="Polaris Tech Solution"
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-xs font-bold text-[#0A2463]">
                          <span>Polaris Tech Solution</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-[11px] text-[#52607A] mt-0.5 line-clamp-2">
                          {isMM
                            ? 'လုပ်ငန်းသုံး ERP, POS နှင့် Custom Software စနစ်များ'
                            : 'Bespoke Enterprise ERP, POS & Mobile Systems'}
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/trust-one"
                      onClick={() => setDivisionsDropdown(false)}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#FFF9EC] transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#0A2463]/12 flex items-center justify-center flex-shrink-0 p-1">
                        <Image
                          src="/images/logo-trust-one.svg"
                          alt="Trust One Properties"
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-xs font-bold text-[#0A2463]">
                          <span>Trust One Properties</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-[11px] text-[#52607A] mt-0.5 line-clamp-2">
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
              href="/#contact"
              className="text-xs font-semibold uppercase tracking-wider text-white/90 hover:text-[#F4D06F] transition-colors whitespace-nowrap"
            >
              {isMM ? 'ဆက်သွယ်ရန်' : language === 'ZH' ? '联系我们' : 'CONTACT'}
            </Link>
          </nav>

          {/* Right Language Toggle */}
          <div className="hidden lg:flex items-center justify-end w-36">
            <div
              className="inline-flex items-center rounded-lg bg-[#001749] p-0.5 border border-[#D4AF37]/30"
              role="group"
              aria-label="Language switcher"
            >
              <button
                type="button"
                onClick={() => setLanguage('MM')}
                className={`px-2 py-1.5 rounded-md text-[11px] font-semibold leading-none transition-all duration-150 ${
                  language === 'MM'
                    ? 'bg-[#D4AF37] text-[#001749]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                မြန်မာ
              </button>
              <button
                type="button"
                onClick={() => setLanguage('EN')}
                className={`px-2 py-1.5 rounded-md text-[11px] font-semibold leading-none transition-all duration-150 ${
                  language === 'EN'
                    ? 'bg-[#D4AF37] text-[#001749]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ZH')}
                className={`px-2 py-1.5 rounded-md text-[11px] font-semibold leading-none transition-all duration-150 ${
                  language === 'ZH'
                    ? 'bg-[#D4AF37] text-[#001749]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                中文
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-1.5">
            <div className="inline-flex items-center rounded-lg bg-[#001749] p-0.5 border border-[#D4AF37]/40">
              {(['MM', 'EN', 'ZH'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 rounded-md text-[11px] font-semibold leading-none transition-colors ${
                    language === lang
                      ? 'bg-[#D4AF37] text-[#001749]'
                      : 'text-white/80'
                  }`}
                >
                  {lang === 'MM' ? 'မြန်မာ' : lang === 'ZH' ? '中文' : 'EN'}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (full-screen z-[60] with its own Close bar so it never occludes/hides close button) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[60] overflow-y-auto flex flex-col">
          <div className="h-14 px-4 bg-[#071D4E] border-b-2 border-[#D4AF37]/60 flex items-center justify-between flex-shrink-0">
            <span className="text-xs font-bold tracking-wider text-[#F4D06F] font-heading">
              THET &amp; THU CO., LTD.
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="px-5 py-6 flex-1">
          <nav className="space-y-1">
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-semibold text-[#0A2463] hover:bg-[#F4F7FC]"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/#vision"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-semibold text-[#0A2463] hover:bg-[#F4F7FC]"
            >
              {isMM ? 'ရည်မှန်းချက်များ' : 'Vision & Values'}
            </Link>
            <Link
              href="/polaris"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold text-[#0A2463] hover:bg-[#F4F7FC]"
            >
              <span className="inline-flex items-center gap-2.5">
                <Image
                  src="/images/logo-polaris.svg"
                  alt="Polaris Tech Solution"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                  unoptimized
                />
                <span>Polaris Tech Solution</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#52607A]" />
            </Link>
            <Link
              href="/trust-one"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold text-[#0A2463] hover:bg-[#F4F7FC]"
            >
              <span className="inline-flex items-center gap-2.5">
                <Image
                  src="/images/logo-trust-one.svg"
                  alt="Trust One Properties"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                  unoptimized
                />
                <span>Trust One Properties</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#52607A]" />
            </Link>
            <Link
              href="/#offices"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-semibold text-[#0A2463] hover:bg-[#F4F7FC]"
            >
              {t.nav.offices}
            </Link>
          </nav>

          <div className="mt-6 pt-6 border-t border-[#0A2463]/10">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-[#0A2463] text-white text-sm font-semibold flex items-center justify-center"
            >
              {t.nav.contact}
            </Link>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
