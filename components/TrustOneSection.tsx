'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Check, Lock, ArrowRight } from 'lucide-react';

export default function TrustOneSection({
  isStandalonePage = false,
}: {
  isStandalonePage?: boolean;
}) {
  const { isMM, t } = useLanguage();
  const HeadingTag = isStandalonePage ? 'h1' : 'h2';

  const portfolios = [
    {
      title: t.trustOne.cat1Title,
      desc: t.trustOne.cat1Desc,
      highlights: t.trustOne.cat1Highlights,
    },
    {
      title: t.trustOne.cat2Title,
      desc: t.trustOne.cat2Desc,
      highlights: t.trustOne.cat2Highlights,
    },
    {
      title: t.trustOne.cat3Title,
      desc: t.trustOne.cat3Desc,
      highlights: t.trustOne.cat3Highlights,
    },
    {
      title: t.trustOne.cat4Title,
      desc: t.trustOne.cat4Desc,
      highlights: t.trustOne.cat4Highlights,
    },
  ];

  const advisories = [
    { title: t.trustOne.adv1Title, desc: t.trustOne.adv1Desc },
    { title: t.trustOne.adv2Title, desc: t.trustOne.adv2Desc },
    { title: t.trustOne.adv3Title, desc: t.trustOne.adv3Desc },
    { title: t.trustOne.adv4Title, desc: t.trustOne.adv4Desc },
  ];

  return (
    <section
      id="trust-one"
      className="relative py-20 lg:py-28 bg-[#F7FAF8] border-b border-[#140B29]/10 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Division Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-10 border-b border-[#140B29]/10">
          <div className="flex items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#4A2B88] flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/trust-one-emblem.webp"
                alt="Trust One Properties"
                width={36}
                height={36}
                className="w-8 h-8 object-contain"
                unoptimized
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#9A540E]">{t.trustOne.badge}</p>
              <HeadingTag className="mt-1 text-2xl sm:text-4xl font-extrabold text-[#291550] font-heading tracking-tight">
                Trust One Properties
              </HeadingTag>
              <p className="text-xs sm:text-sm text-[#433B54] mt-1">
                &ldquo;{t.trustOne.tagline}&rdquo;
              </p>
            </div>
          </div>

          <Link
            href="/#contact"
            className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#4A2B88] text-white hover:bg-[#381F6A] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2B88]"
          >
            <span>{t.trustOne.ctaButton}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Domestic Compliance Notice (Left-Accented Architectural Callout) */}
        <div className="mt-12 rounded-r-xl bg-white border border-[#140B29]/10 border-l-4 border-l-[#E88D17] p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#9A540E] mb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>{t.trustOne.complianceBadge}</span>
          </div>
          <h3
            className={`text-[#140B29] ${
              isMM ? 'text-base sm:text-xl font-bold leading-relaxed' : 'text-lg sm:text-xl font-bold font-heading'
            }`}
          >
            {t.trustOne.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#433B54] leading-relaxed max-w-4xl">
            {t.trustOne.complianceNotice}
          </p>
        </div>

        {/* 4 Domestic Property Portfolios */}
        <div className="mt-16">
          <div className="max-w-2xl mb-10">
            <h3
              className={`text-[#140B29] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold font-heading'
              }`}
            >
              {t.trustOne.categoriesTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#433B54]">{t.trustOne.categoriesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {portfolios.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#140B29]/10 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-[#E88D17]/60"
              >
                <div>
                  <h4
                    className={`text-[#140B29] ${
                      isMM ? 'text-lg font-bold' : 'text-xl font-bold font-heading'
                    }`}
                  >
                    {cat.title}
                  </h4>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#433B54] leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <ul className="mt-6 pt-5 border-t border-[#140B29]/8 space-y-2.5">
                  {cat.highlights.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#140B29]">
                      <Check className="w-4 h-4 text-[#E88D17] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory & Due Diligence Standards */}
        <div className="mt-20 pt-14 border-t border-[#140B29]/10">
          <div className="max-w-2xl mb-10">
            <h3
              className={`text-[#140B29] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold font-heading'
              }`}
            >
              {t.trustOne.advisoryTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#433B54]">{t.trustOne.advisorySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisories.map((adv, idx) => (
              <div key={idx} className="border-t-2 border-[#140B29]/15 pt-5">
                <h4 className="text-base font-bold text-[#140B29]">{adv.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#433B54] leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Private Consultation Strip */}
        <div className="mt-16 rounded-2xl bg-[#FFF8EC] border border-[#FFA62B]/40 text-[#291550] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-xl sm:text-2xl font-bold text-[#291550]">{t.trustOne.showcaseTitle}</h4>
            <p className="mt-2 text-xs sm:text-sm text-[#433B54] leading-relaxed">
              {t.trustOne.showcaseSubtitle}
            </p>
          </div>
          <Link
            href="/#contact"
            className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FFA62B] text-[#291550] text-xs sm:text-sm font-semibold hover:bg-[#FFB144] whitespace-nowrap"
          >
            <span>{t.trustOne.ctaButton}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
