'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Building2,
  Code2,
  Shield,
} from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, isMM, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [divisionsDropdown, setDivisionsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
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
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Executive Ticker Bar */}
      <div className="hidden lg:block bg-[#040812] border-b border-white/[0.06] py-1.5 text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center text-slate-300 font-medium">
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center gap-1.5 text-amber-300/90 text-[11px] uppercase font-semibold whitespace-nowrap">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>THET &amp; THU CO., LTD. • Est. 2014</span>
            </span>
            <span className="text-white/20 hidden xl:inline">/</span>
            <span className="hidden xl:inline-flex items-center gap-1.5 text-slate-400 text-xs whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-amber-400/80" />
              <span>Yangon City Head Office &amp; Thanlyin Star City Desk</span>
            </span>
          </div>

          <div className="flex items-center space-x-5 text-xs whitespace-nowrap">
            <a
              href="mailto:info@thetandthu.com"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400/70" />
              <span>info@thetandthu.com</span>
            </a>
            <span className="text-white/20">/</span>
            <div className="inline-flex items-center gap-1.5 text-slate-400">
              <Phone className="w-3.5 h-3.5 text-amber-400/70" />
              <a
                href="tel:+9595056524"
                className="hover:text-amber-300 transition-colors"
                title="Call Thet & Thu Corporate Desk"
              >
                09 505 6524
              </a>
              <span className="text-white/20">/</span>
              <a
                href="tel:+959443212306"
                className="hover:text-amber-300 transition-colors"
                title="Call Thet & Thu Corporate Desk"
              >
                09 443 212 306
              </a>
            </div>

            {/* Language Toggle */}
            <div className="inline-flex items-center rounded-lg bg-[#0B192C] p-0.5 border border-white/10 text-xs ml-2">
              <button
                type="button"
                onClick={() => setLanguage('EN')}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold transition-all ${
                  language === 'EN'
                    ? 'bg-[#D4AF37] text-[#050B16] font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('MM')}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold transition-all ${
                  language === 'MM'
                    ? 'bg-[#D4AF37] text-[#050B16] font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                မြန်မာ
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* Main Corporate Glass Header */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#050B16]/95 backdrop-blur-md shadow-2xl border-b border-amber-500/20 py-2.5'
            : 'bg-[#050B16]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Corporate Logo & Mark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-hidden flex-shrink-0"
          >
            <div className="relative inline-flex rounded-xl overflow-hidden border border-amber-500/35 p-0 shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300 group-hover:border-amber-400/60 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]">
              <Image
                src="/images/thet-and-thu-logo.webp"
                alt="THET & THU CO., LTD."
                width={150}
                height={100}
                className="h-9 sm:h-11 w-auto block object-cover transition-transform duration-300 group-hover:scale-105"
                unoptimized
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/#about"
              className={`px-2.5 xl:px-3 py-2 rounded-lg font-medium text-slate-300 hover:text-amber-300 hover:bg-white/[0.04] transition-colors whitespace-nowrap ${
                isMM ? 'text-xs xl:text-sm tracking-normal' : 'text-sm'
              }`}
            >
              {t.nav.about}
            </Link>

            {/* Divisions Dropdown */}
            <div
              className="relative group/dropdown z-50"
              onMouseEnter={() => setDivisionsDropdown(true)}
              onMouseLeave={() => setDivisionsDropdown(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  divisionsDropdown
                    ? 'bg-white/[0.08] text-amber-300'
                    : 'text-slate-300 hover:text-amber-300 hover:bg-white/[0.04]'
                } ${isMM ? 'text-xs xl:text-sm tracking-normal' : 'text-sm'}`}
                onClick={() => setDivisionsDropdown((prev) => !prev)}
                aria-expanded={divisionsDropdown}
                aria-haspopup="true"
              >
                <span>{t.nav.divisions}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    divisionsDropdown ? 'rotate-180 text-amber-400' : 'text-slate-400 group-hover/dropdown:text-amber-300'
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 pt-1.5 z-50 transition-all duration-200 ${
                  divisionsDropdown
                    ? 'opacity-100 visible pointer-events-auto translate-y-0'
                    : 'opacity-0 invisible pointer-events-none -translate-y-1 lg:group-hover/dropdown:opacity-100 lg:group-hover/dropdown:visible lg:group-hover/dropdown:pointer-events-auto lg:group-hover/dropdown:translate-y-0 group-focus-within/dropdown:opacity-100 group-focus-within/dropdown:visible group-focus-within/dropdown:pointer-events-auto group-focus-within/dropdown:translate-y-0'
                }`}
              >
                <div
                  className={`dropdown-card w-[420px] sm:w-[480px] lg:w-[500px] rounded-2xl bg-[#081220] border border-amber-500/35 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] p-4 space-y-2.5 transition-all ${
                    isMM ? 'tracking-normal' : ''
                  }`}
                >
                  <div className="flex items-center justify-between px-2 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-white/[0.08] mb-1 pb-2">
                    <span>{isMM ? 'ကုမ္ပဏီကြီး၏ အဓိကလုပ်ငန်းခွဲများ' : 'Operating Business Divisions'}</span>
                    <span className="text-[10px] text-amber-400/90 font-mono tracking-normal">THET &amp; THU</span>
                  </div>

                  {/* Division 1: Polaris Tech */}
                  <Link
                    href="/polaris"
                    onClick={() => setDivisionsDropdown(false)}
                    className="dropdown-item flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-cyan-950/40 border border-cyan-500/10 hover:border-cyan-500/40 transition-all group/item"
                  >
                    <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 group-hover/item:scale-105 group-hover/item:border-cyan-400 group-hover/item:bg-cyan-900/50 transition-all flex-shrink-0 mt-0.5">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0 pr-1">
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className="text-sm sm:text-[15px] font-bold text-white group-hover/item:text-cyan-300 transition-colors truncate">
                          {t.nav.polarisDropdownTitle}
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex-shrink-0 tracking-normal">
                          {t.nav.polarisDropdownBadge}
                        </span>
                      </div>
                      <p
                        className={`whitespace-normal text-xs text-slate-300/80 leading-relaxed group-hover/item:text-slate-100 transition-colors break-words [overflow-wrap:anywhere] ${
                          isMM ? 'font-sans text-[12px] leading-relaxed' : ''
                        }`}
                      >
                        {t.nav.polarisDropdownDesc}
                      </p>
                    </div>
                  </Link>

                  {/* Division 2: Trust One */}
                  <Link
                    href="/trust-one"
                    onClick={() => setDivisionsDropdown(false)}
                    className="dropdown-item flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-amber-950/40 border border-amber-500/10 hover:border-amber-500/40 transition-all group/item"
                  >
                    <div className="p-2.5 rounded-xl bg-amber-950/80 border border-amber-500/30 text-amber-400 group-hover/item:scale-105 group-hover/item:border-amber-400 group-hover/item:bg-amber-900/50 transition-all flex-shrink-0 mt-0.5">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0 pr-1">
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className="text-sm sm:text-[15px] font-bold text-white group-hover/item:text-amber-300 transition-colors truncate">
                          {t.nav.trustOneDropdownTitle}
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 flex-shrink-0 tracking-normal">
                          {t.nav.trustOneDropdownBadge}
                        </span>
                      </div>
                      <p
                        className={`whitespace-normal text-xs text-slate-300/80 leading-relaxed group-hover/item:text-slate-100 transition-colors break-words [overflow-wrap:anywhere] ${
                          isMM ? 'font-sans text-[12px] leading-relaxed' : ''
                        }`}
                      >
                        {t.nav.trustOneDropdownDesc}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/#values"
              className={`px-2.5 xl:px-3 py-2 rounded-lg font-medium text-slate-300 hover:text-amber-300 hover:bg-white/[0.04] transition-colors whitespace-nowrap ${
                isMM ? 'text-xs xl:text-sm tracking-normal' : 'text-sm'
              }`}
            >
              {t.nav.whyUs}
            </Link>

            <Link
              href="/#offices"
              className={`px-2.5 xl:px-3 py-2 rounded-lg font-medium text-slate-300 hover:text-amber-300 hover:bg-white/[0.04] transition-colors whitespace-nowrap ${
                isMM ? 'text-xs xl:text-sm tracking-normal' : 'text-sm'
              }`}
            >
              {t.nav.offices}
            </Link>

            <Link
              href="/#contact"
              className={`px-2.5 xl:px-3 py-2 rounded-lg font-medium text-slate-300 hover:text-amber-300 hover:bg-white/[0.04] transition-colors whitespace-nowrap ${
                isMM ? 'text-xs xl:text-sm tracking-normal' : 'text-sm'
              }`}
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Quick Division Direct Indicators & Primary CTA */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
            <Link
              href="/#polaris"
              className="hidden xl:inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/50 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/40 transition-colors whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Polaris Tech</span>
            </Link>

            <Link
              href="/#trust-one"
              className="hidden xl:inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-950/50 text-amber-300 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-900/40 transition-colors whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Trust One</span>
            </Link>

            <Link
              href="/#contact"
              className={`inline-flex items-center justify-center px-3.5 xl:px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all shadow-lg shadow-amber-500/15 whitespace-nowrap ${
                isMM
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3C65F] to-[#D4AF37] text-[#050B16] hover:brightness-110 active:scale-98 tracking-normal font-sans'
                  : 'bg-gradient-to-r from-[#D4AF37] via-[#F3C65F] to-[#D4AF37] text-[#050B16] hover:brightness-110 active:scale-98 tracking-wider'
              }`}
            >
              {t.nav.inquireNow}
            </Link>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <div className="inline-flex items-center rounded-xl bg-[#0B192C] p-1 border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setLanguage('EN')}
                className={`min-w-[40px] min-h-[38px] px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${
                  language === 'EN'
                    ? 'bg-[#D4AF37] text-[#050B16] shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Switch language to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('MM')}
                className={`min-w-[44px] min-h-[38px] px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${
                  language === 'MM'
                    ? 'bg-[#D4AF37] text-[#050B16] shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Switch language to Myanmar"
              >
                မြန်မာ
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[42px] min-w-[42px] flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-hidden"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-amber-400" />
              ) : (
                <Menu className="w-6 h-6 text-slate-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-amber-500/20 bg-[#050B16] px-5 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2.5 pb-3 border-b border-white/10">
              <Link
                href="/polaris"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs font-semibold text-cyan-300"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>{t.nav.polaris}</span>
              </Link>
              <Link
                href="/trust-one"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-amber-950/40 border border-amber-500/30 text-xs font-semibold text-amber-300"
              >
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>{t.nav.trustOne}</span>
              </Link>
            </div>

            <div className="space-y-1">
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/polaris"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-cyan-400 hover:bg-cyan-950/30"
              >
                {t.nav.polaris}
              </Link>
              <Link
                href="/trust-one"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-amber-400 hover:bg-amber-950/30"
              >
                {t.nav.trustOne}
              </Link>
              <Link
                href="/#values"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {t.nav.whyUs}
              </Link>
              <Link
                href="/#offices"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {t.nav.offices}
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {t.nav.contact}
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#F3C65F] text-[#050B16]"
              >
                <span>{t.nav.inquireNow}</span>
              </Link>
            </div>

            {/* Quick Mobile Hotline Tickers */}
            <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                {isMM ? 'တိုက်ရိုက် ဖုန်းခေါ်ဆိုရန်' : 'Direct Call Lines'}
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                <a
                  href="tel:+9595056524"
                  className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-amber-300"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Thet &amp; Thu Co., Ltd.</span>
                  </span>
                  <span className="font-mono text-amber-400 font-semibold">09 505 6524</span>
                </a>
                <a
                  href="tel:+959780654277"
                  className="flex items-center justify-between p-2 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-slate-200 hover:text-cyan-300"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Polaris Tech Solution</span>
                  </span>
                  <span className="font-mono text-cyan-400 font-semibold">09 780 654 277</span>
                </a>
                <a
                  href="tel:+959795056524"
                  className="flex items-center justify-between p-2 rounded-lg bg-amber-950/30 border border-amber-500/20 text-slate-200 hover:text-amber-300"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Trust One Properties</span>
                  </span>
                  <span className="font-mono text-amber-400 font-semibold">09 795 056 524</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
