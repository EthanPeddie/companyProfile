'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, Check } from 'lucide-react';

export default function AboutParent() {
  const { isMM, t } = useLanguage();

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white border-b border-[#140B29]/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-[#4A2B88] mb-3">
            {t.about.badge}
          </p>
          <h2
            className={`text-[#140B29] [text-wrap:balance] ${
              isMM
                ? 'text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed'
                : 'text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold font-heading tracking-tight leading-tight'
            }`}
          >
            {t.about.title}
          </h2>
          <p
            className={`mt-4 text-[#433B54] ${
              isMM ? 'text-sm sm:text-base leading-relaxed' : 'text-base sm:text-lg leading-relaxed'
            }`}
          >
            {t.about.subtitle}
          </p>
        </div>

        {/* Corporate Banner */}
        <div className="mt-10 rounded-xl overflow-hidden border border-[#140B29]/10 bg-[#001749]">
          <Image
            src="/images/corporate-banner.webp"
            alt="THET & THU CO., LTD. - Building A Better Tomorrow Together"
            width={1200}
            height={200}
            style={{ width: '100%', height: 'auto' }}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>

        {/* Narrative & Holding Structure */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 7 cols: Genesis + Mission & Vision */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3
                className={`text-[#140B29] mb-4 ${
                  isMM ? 'text-lg sm:text-xl font-bold' : 'text-xl sm:text-2xl font-bold font-heading'
                }`}
              >
                {t.about.genesisTitle}
              </h3>
              <p className="text-sm text-[#433B54] leading-loose">{t.about.overviewP1}</p>
              <p className="mt-4 text-sm text-[#433B54] leading-loose">{t.about.overviewP2}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-[#140B29]/10">
              <div className="border-l-2 border-[#FFA62B] pl-5">
                <h4 className="text-base font-bold text-[#140B29] mb-2">{t.about.missionTitle}</h4>
                <p className="text-xs sm:text-sm text-[#433B54] leading-relaxed">{t.about.missionDesc}</p>
              </div>
              <div className="border-l-2 border-[#4A2B88] pl-5">
                <h4 className="text-base font-bold text-[#140B29] mb-2">{t.about.visionTitle}</h4>
                <p className="text-xs sm:text-sm text-[#433B54] leading-relaxed">{t.about.visionDesc}</p>
              </div>
            </div>
          </div>

          {/* Right 5 cols: Holding Architecture Ledger */}
          <div className="lg:col-span-5 rounded-2xl bg-[#F7FAF8] border border-[#140B29]/10 p-6 sm:p-8">
            <div className="pb-5 border-b border-[#140B29]/10">
              <div className="text-xs font-semibold text-[#4A2B88]">{t.about.integrityBadge}</div>
              <h3 className="mt-1 text-lg font-bold text-[#140B29]">{t.about.parentHolding}</h3>
              <p className="text-xs text-[#6B637A] mt-0.5">{t.about.parentSub}</p>
            </div>

            <div className="divide-y divide-[#140B29]/10">
              <Link
                href="/polaris"
                className="py-5 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#4A2B88] flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/polaris-emblem.webp"
                      alt="Polaris Tech Solution"
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full object-contain"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#140B29] group-hover:text-[#4A2B88] transition-colors">
                      Polaris Tech Solution
                    </div>
                    <div className="text-xs text-[#6B637A] mt-0.5">{t.about.divASub}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6B637A] group-hover:text-[#4A2B88] flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/trust-one"
                className="py-5 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#4A2B88] flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/trust-one-emblem.webp"
                      alt="Trust One Properties"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#140B29] group-hover:text-[#9A540E] transition-colors">
                      Trust One Properties
                    </div>
                    <div className="text-xs text-[#6B637A] mt-0.5">{t.about.divBSub}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6B637A] group-hover:text-[#9A540E] flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="pt-4 border-t border-[#140B29]/10 text-xs text-[#6B637A]">
              {t.about.locationBadge}
            </div>
          </div>
        </div>

        {/* Executive Leadership */}
        <div className="mt-20 pt-16 border-t border-[#140B29]/10">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold text-[#4A2B88] mb-2">{t.about.leadershipBadge}</p>
            <h3
              className={`text-[#140B29] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold font-heading'
              }`}
            >
              {t.about.leadershipTitle}
            </h3>
            <p className="mt-2 text-sm text-[#433B54]">{t.about.leadershipSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CEO */}
            <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-[#F7FAF8] border border-[#140B29]/10">
              <div className="relative w-28 h-28 sm:w-32 sm:h-36 rounded-xl overflow-hidden bg-[#F4F0FA] flex-shrink-0">
                <Image
                  src="/images/leadership-ceo.webp"
                  alt={t.about.ceoTitle}
                  fill
                  sizes="128px"
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-[#4A2B88]">{t.about.ceoRole}</div>
                <h4 className="text-lg font-bold text-[#140B29] mt-1">{t.about.ceoTitle}</h4>
                <div className="text-xs font-medium text-[#6B637A] mt-0.5">{t.about.ceoCompany}</div>
                <p className="mt-3 text-xs sm:text-sm text-[#433B54] leading-relaxed">{t.about.ceoDesc}</p>
              </div>
            </div>

            {/* Managing Director */}
            <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-[#F7FAF8] border border-[#140B29]/10">
              <div className="relative w-28 h-28 sm:w-32 sm:h-36 rounded-xl overflow-hidden bg-[#F4F0FA] flex-shrink-0">
                <Image
                  src="/images/leadership-director.webp"
                  alt={t.about.directorTitle}
                  fill
                  sizes="128px"
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-[#9A540E]">{t.about.directorRole}</div>
                <h4 className="text-lg font-bold text-[#140B29] mt-1">{t.about.directorTitle}</h4>
                <div className="text-xs font-medium text-[#6B637A] mt-0.5">{t.about.directorCompany}</div>
                <p className="mt-3 text-xs sm:text-sm text-[#433B54] leading-relaxed">{t.about.directorDesc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Activity & 4 Core Pillars */}
        <div className="mt-20 pt-16 border-t border-[#140B29]/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#140B29]/10">
            <Image
              src="/images/corporate-activity.webp"
              alt={t.about.activityTitle}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="lg:col-span-6">
            <p className="text-xs font-semibold text-[#4A2B88] mb-2">{t.about.activityBadge}</p>
            <h3
              className={`text-[#140B29] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold font-heading'
              }`}
            >
              {t.about.activityTitle}
            </h3>
            <p className="mt-3 text-sm text-[#433B54] leading-relaxed">{t.about.activitySubtitle}</p>

            <ul className="mt-6 space-y-3">
              {[t.about.activityPoint1, t.about.activityPoint2, t.about.activityPoint3].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#140B29]">
                  <Check className="w-4 h-4 text-[#4A2B88] flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mt-20 pt-16 border-t border-[#140B29]/10">
          <div className="max-w-2xl mb-10">
            <h3
              className={`text-[#140B29] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold font-heading'
              }`}
            >
              {t.about.pillarsTitle}
            </h3>
            <p className="mt-2 text-sm text-[#433B54]">{t.about.pillarsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t.about.pillar1Title, desc: t.about.pillar1Desc },
              { title: t.about.pillar2Title, desc: t.about.pillar2Desc },
              { title: t.about.pillar3Title, desc: t.about.pillar3Desc },
              { title: t.about.pillar4Title, desc: t.about.pillar4Desc },
            ].map((pillar, idx) => (
              <div key={idx} className="border-t-2 border-[#140B29]/15 pt-5">
                <h4 className="text-base font-bold text-[#140B29]">{pillar.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#433B54] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
