'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal, CountUp } from '@/components/MotionPrimitives';
import { ArrowUpRight, Check } from 'lucide-react';

export default function AboutParent() {
  const { language, isMM, t } = useLanguage();
  const isZH = language === 'ZH';

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white border-b border-[#0A2463]/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-[#0A2463] mb-3">
            {t.about.badge}
          </p>
          <h2
            className={`text-[#001749] [text-wrap:balance] ${
              isMM
                ? 'text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed'
                : 'text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold font-heading tracking-tight leading-tight'
            }`}
          >
            {t.about.title}
          </h2>
          <p
            className={`mt-4 text-[#42526E] ${
              isMM ? 'text-sm sm:text-base leading-relaxed' : 'text-base sm:text-lg leading-relaxed'
            }`}
          >
            {t.about.subtitle}
          </p>
        </div>

        {/* Animated Key Metrics Strip */}
        <ScrollReveal className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-[#F4F7FC] border border-[#0A2463]/10">
          <div className="border-l-2 border-[#D4AF37] pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#001749] font-heading tabular-nums">
              <CountUp end={10} suffix="+" />
            </div>
            <div className="text-xs text-[#42526E] mt-1">{t.hero.statYearsLabel}</div>
          </div>
          <div className="border-l-2 border-[#0A2463] pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#001749] font-heading tabular-nums">
              <CountUp end={2} />
            </div>
            <div className="text-xs text-[#42526E] mt-1">{t.hero.statDivisionsLabel}</div>
          </div>
          <div className="border-l-2 border-[#D4AF37] pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#001749] font-heading tabular-nums">
              <CountUp end={100} suffix="%" />
            </div>
            <div className="text-xs text-[#42526E] mt-1">{t.hero.statReliabilityLabel}</div>
          </div>
          <div className="border-l-2 border-[#0A2463] pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#001749] font-heading tabular-nums">
              <CountUp end={100} suffix="%" />
            </div>
            <div className="text-xs text-[#42526E] mt-1">{t.hero.statComplianceLabel}</div>
          </div>
        </ScrollReveal>

        {/* Narrative & Holding Structure */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 7 cols: Genesis + Mission & Vision */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3
                className={`text-[#001749] mb-4 ${
                  isMM ? 'text-lg sm:text-xl font-bold' : 'text-xl sm:text-2xl font-bold font-heading'
                }`}
              >
                {t.about.genesisTitle}
              </h3>
              <p className="text-sm text-[#42526E] leading-loose">{t.about.overviewP1}</p>
              <p className="mt-4 text-sm text-[#42526E] leading-loose">{t.about.overviewP2}</p>
            </div>

            <div id="vision" className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-[#0A2463]/10 scroll-mt-20">
              <div className="border-l-2 border-[#D4AF37] pl-5">
                <h4 className="text-base font-bold text-[#001749] mb-2">{t.about.missionTitle}</h4>
                <p className="text-xs sm:text-sm text-[#42526E] leading-relaxed">{t.about.missionDesc}</p>
              </div>
              <div className="border-l-2 border-[#0A2463] pl-5">
                <h4 className="text-base font-bold text-[#001749] mb-2">{t.about.visionTitle}</h4>
                <p className="text-xs sm:text-sm text-[#42526E] leading-relaxed">{t.about.visionDesc}</p>
              </div>
            </div>
          </div>

          {/* Right 5 cols: Holding Architecture Ledger */}
          <div className="lg:col-span-5 rounded-2xl bg-[#F4F7FC] border border-[#0A2463]/10 p-6 sm:p-8">
            <div className="pb-5 border-b border-[#0A2463]/10">
              <div className="text-xs font-semibold text-[#0A2463]">{t.about.integrityBadge}</div>
              <h3 className="mt-1 text-lg font-bold text-[#001749]">{t.about.parentHolding}</h3>
              <p className="text-xs text-[#52607A] mt-0.5">{t.about.parentSub}</p>
            </div>

            <div className="divide-y divide-[#0A2463]/10">
              <Link href="/polaris" className="py-5 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3.5">
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
                  <div>
                    <div className="text-sm font-bold text-[#001749] group-hover:text-[#0A2463] transition-colors">
                      Polaris Tech Solution
                    </div>
                    <div className="text-xs text-[#52607A] mt-0.5">{t.about.divASub}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#52607A] group-hover:text-[#0A2463] flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link href="/trust-one" className="py-5 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3.5">
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
                  <div>
                    <div className="text-sm font-bold text-[#001749] group-hover:text-[#9A6B12] transition-colors">
                      Trust One Properties
                    </div>
                    <div className="text-xs text-[#52607A] mt-0.5">{t.about.divBSub}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#52607A] group-hover:text-[#9A6B12] flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="pt-4 border-t border-[#0A2463]/10 text-xs text-[#52607A]">
              {t.about.locationBadge}
            </div>
          </div>
        </div>

        {/* Executive Leadership */}
        <div className="mt-20 pt-16 border-t border-[#0A2463]/10">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold text-[#0A2463] mb-2">{t.about.leadershipBadge}</p>
            <h3
              className={`text-[#001749] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold font-heading'
              }`}
            >
              {t.about.leadershipTitle}
            </h3>
            <p className="mt-2 text-sm text-[#42526E]">{t.about.leadershipSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delayMs={0}>
              <div className="card-interactive flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-[#F4F7FC] border border-[#0A2463]/10 h-full">
              <div className="relative w-28 h-28 sm:w-32 sm:h-36 rounded-xl overflow-hidden bg-[#E6ECF7] flex-shrink-0">
                <Image
                  src="/images/leadership-ceo.jpg"
                  alt={t.about.ceoTitle}
                  fill
                  sizes="128px"
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-[#0A2463]">{t.about.ceoRole}</div>
                <h4 className="text-lg font-bold text-[#001749] mt-1">{t.about.ceoTitle}</h4>
                <div className="text-xs font-medium text-[#52607A] mt-0.5">{t.about.ceoCompany}</div>
                <p className="mt-3 text-xs sm:text-sm text-[#42526E] leading-relaxed">{t.about.ceoDesc}</p>
              </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <div className="card-interactive flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-[#F4F7FC] border border-[#0A2463]/10 h-full">
              <div className="relative w-28 h-28 sm:w-32 sm:h-36 rounded-xl overflow-hidden bg-[#E6ECF7] flex-shrink-0">
                <Image
                  src="/images/leadership-director.jpg"
                  alt={t.about.directorTitle}
                  fill
                  sizes="128px"
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-[#9A6B12]">{t.about.directorRole}</div>
                <h4 className="text-lg font-bold text-[#001749] mt-1">{t.about.directorTitle}</h4>
                <div className="text-xs font-medium text-[#52607A] mt-0.5">{t.about.directorCompany}</div>
                <p className="mt-3 text-xs sm:text-sm text-[#42526E] leading-relaxed">{t.about.directorDesc}</p>
              </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Corporate Activity */}
        <div className="mt-20 pt-16 border-t border-[#0A2463]/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#0A2463]/10 bg-[#EDF2FA] bg-shimmer">
            <Image
              src="/images/corporate-activity.jpg"
              alt={t.about.activityTitle}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="lg:col-span-6">
            <p className="text-xs font-semibold text-[#0A2463] mb-2">{t.about.activityBadge}</p>
            <h3
              className={`text-[#001749] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold font-heading'
              }`}
            >
              {t.about.activityTitle}
            </h3>
            <p className="mt-3 text-sm text-[#42526E] leading-relaxed">{t.about.activitySubtitle}</p>

            <ul className="mt-6 space-y-3">
              {[t.about.activityPoint1, t.about.activityPoint2, t.about.activityPoint3].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#001749]">
                  <Check className="w-4 h-4 text-[#0A2463] flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mt-20 pt-16 border-t border-[#0A2463]/10">
          <div className="max-w-2xl mb-10">
            <h3
              className={`text-[#001749] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold font-heading'
              }`}
            >
              {t.about.pillarsTitle}
            </h3>
            <p className="mt-2 text-sm text-[#42526E]">{t.about.pillarsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t.about.pillar1Title, desc: t.about.pillar1Desc },
              { title: t.about.pillar2Title, desc: t.about.pillar2Desc },
              { title: t.about.pillar3Title, desc: t.about.pillar3Desc },
              { title: t.about.pillar4Title, desc: t.about.pillar4Desc },
            ].map((pillar, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80} className="border-t-2 border-[#0A2463]/20 pt-5 hover:border-[#D4AF37] transition-colors duration-300">
                <h4 className="text-base font-bold text-[#001749]">{pillar.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#42526E] leading-relaxed">{pillar.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Community Impact & Corporate Social Responsibility (CSR) */}
        <div className="mt-20 pt-16 border-t border-[#0A2463]/10">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold text-[#9A6B12] mb-2">
              {isMM
                ? 'လူမှုအကျိုးပြု လုပ်ငန်းများ (CSR)'
                : isZH
                ? '企业社会责任 (CSR)'
                : 'COMMUNITY IMPACT & CSR'}
            </p>
            <h3
              className={`text-[#001749] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold font-heading'
              }`}
            >
              {isMM
                ? 'လူမှုအသိုင်းအဝိုင်းနှင့် အရေးပေါ်ကယ်ဆယ်ရေး ပံ့ပိုးကူညီမှုများ'
                : isZH
                ? '公益关怀与社区紧急救援行动'
                : 'Giving Back to Communities Across Myanmar'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: '/images/csr-community.jpg',
                pos: 'object-top',
                caption: isMM
                  ? 'လူငယ်နှင့် ကလေးသူငယ်များအား ပံ့ပိုးကူညီခြင်း'
                  : isZH
                  ? '关爱青少年与社区公益慰问'
                  : 'Youth & Community Support Outreach',
              },
              {
                src: '/images/csr-flood-relief-1.jpg',
                pos: 'object-top',
                caption: isMM
                  ? 'ရေဘေးသင့်ဒေသများသို့ ကယ်ဆယ်ရေးပစ္စည်းများ ပို့ဆောင်ခြင်း'
                  : isZH
                  ? '深入洪灾一线运送救援物资'
                  : 'Emergency Flood Relief Supply Mobilization',
              },
              {
                src: '/images/csr-flood-relief-2.jpg',
                pos: 'object-center',
                caption: isMM
                  ? 'ဒေသခံပြည်သူများထံ စားနပ်ရိက္ခာများ တိုက်ရိုက်ဝေငှခြင်း'
                  : isZH
                  ? '向受灾民众直接发放生活物资'
                  : 'Direct Food & Essential Aid Distribution',
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 90}>
                <div className="card-interactive rounded-2xl bg-[#F4F7FC] border border-[#0A2463]/10 overflow-hidden h-full flex flex-col">
                  <div className="relative h-56 w-full bg-[#E6ECF7] bg-shimmer overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`object-cover ${item.pos} transition-transform duration-500 hover:scale-[1.03]`}
                      unoptimized
                    />
                  </div>
                  <div className="p-4 text-xs sm:text-sm font-semibold text-[#001749]">
                    {item.caption}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
