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

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Executive Ticker Bar */}
      <div className="hidden lg:block bg-[#040812] border-b border-white/[0.06] py-1.5 text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center text-slate-300 font-medium">
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center gap-1.5 text-amber-300/90 text-[11px] uppercase font-semibold whitespace-nowrap">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>THET &amp; THU CO., LTD. • Est. 2014 • Holding Group</span>
            </span>
            <span className="text-white/20">/</span>
            <span className="inline-flex items-center gap-1.5 text-slate-400 text-xs whitespace-nowrap">
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
            <a
              href="tel:+959450000000"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400/70" />
              <span>+95 9 450 000 000</span>
            </a>

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
          {/* Holding Logo & Mark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-hidden flex-shrink-0"
          >
            <div className="relative rounded-xl overflow-hidden border border-amber-500/25 bg-[#0A1526]/80 p-1.5 transition-transform duration-300 group-hover:border-amber-400/50">
              <Image
                src="/images/thet-and-thu-logo.png"
                alt="THET & THU CO., LTD."
                width={200}
                height={60}
                className="h-9 sm:h-11 w-auto object-contain transition-opacity duration-200 group-hover:brightness-105"
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
              className="relative"
              onMouseEnter={() => setDivisionsDropdown(true)}
              onMouseLeave={() => setDivisionsDropdown(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-lg font-medium text-slate-300 hover:text-amber-300 hover:bg-white/[0.04] transition-colors whitespace-nowrap ${
                  isMM ? 'text-xs xl:text-sm tracking-normal' : 'text-sm'
                }`}
                onClick={() => setDivisionsDropdown(!divisionsDropdown)}
              >
                <span>{t.nav.divisions}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {divisionsDropdown && (
                <div className="absolute top-full left-0 mt-1.5 w-84 rounded-xl bg-[#0A1526] border border-amber-500/25 shadow-2xl p-2.5 z-50">
                  <Link
                    href="/polaris"
                    onClick={() => setDivisionsDropdown(false)}
                    className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-cyan-950/40 border border-transparent hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform flex-shrink-0">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-cyan-300 flex items-center gap-1.5 whitespace-nowrap">
                        Polaris Tech Solution
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-sm bg-cyan-500/20 text-cyan-400">
                          IT
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Custom ERP, multi-store POS, enterprise mobile &amp; cloud systems.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/trust-one"
                    onClick={() => setDivisionsDropdown(false)}
                    className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-amber-950/40 border border-transparent hover:border-amber-500/30 transition-all group mt-1"
                  >
                    <div className="p-2.5 rounded-lg bg-amber-950/60 border border-amber-500/30 text-amber-400 group-hover:scale-105 transition-transform flex-shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-amber-300 flex items-center gap-1.5 whitespace-nowrap">
                        Trust One Properties
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-sm bg-amber-500/20 text-amber-400">
                          Real Estate
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Verified Myanmar land, luxury condominiums &amp; private residences.
                      </p>
                    </div>
                  </Link>
                </div>
              )}
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
            <div className="inline-flex items-center rounded-lg bg-[#0B192C] p-0.5 border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setLanguage('EN')}
                className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                  language === 'EN'
                    ? 'bg-[#D4AF37] text-[#050B16]'
                    : 'text-slate-400'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('MM')}
                className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                  language === 'MM'
                    ? 'bg-[#D4AF37] text-[#050B16]'
                    : 'text-slate-400'
                }`}
              >
                MM
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-hidden"
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
                <span>Polaris Tech</span>
              </Link>
              <Link
                href="/trust-one"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-amber-950/40 border border-amber-500/30 text-xs font-semibold text-amber-300"
              >
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Trust One</span>
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
          </div>
        )}
      </nav>
    </header>
  );
}
