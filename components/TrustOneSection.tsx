'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal } from '@/components/MotionPrimitives';
import { Check, Lock, ArrowRight } from 'lucide-react';

export default function TrustOneSection({
  isStandalonePage = false,
}: {
  isStandalonePage?: boolean;
}) {
  const { language, isMM, t } = useLanguage();
  const isZH = language === 'ZH';
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
      className="relative py-20 lg:py-28 bg-white border-b border-[#0A2463]/10 scroll-mt-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Division Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-10 border-b border-[#0A2463]/10">
          <div className="flex items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-white border border-[#0A2463]/12 flex items-center justify-center flex-shrink-0 shadow-xs p-1.5">
              <Image
                src="/images/logo-trust-one.svg"
                alt="Trust One Properties"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
                unoptimized
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#9A6B12]">{t.trustOne.badge}</p>
              <HeadingTag className="mt-1 text-2xl sm:text-4xl font-extrabold text-[#001749] font-heading tracking-tight">
                Trust One Properties
              </HeadingTag>
              <p className="text-xs sm:text-sm text-[#42526E] mt-1">
                &ldquo;{t.trustOne.tagline}&rdquo;
              </p>
            </div>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#0A2463] text-white hover:bg-[#001749] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2463]"
          >
            <span>{t.trustOne.ctaButton}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Domestic Compliance Notice */}
        <div className="mt-12 rounded-r-xl bg-[#F4F7FC] border border-[#0A2463]/10 border-l-4 border-l-[#D4AF37] p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#9A6B12] mb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>{t.trustOne.complianceBadge}</span>
          </div>
          <h3
            className={`text-[#001749] ${
              isMM ? 'text-base sm:text-xl font-bold leading-relaxed' : 'text-lg sm:text-xl font-bold font-heading'
            }`}
          >
            {t.trustOne.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#42526E] leading-relaxed max-w-4xl">
            {t.trustOne.complianceNotice}
          </p>
        </div>

        {/* 4 Domestic Property Portfolios */}
        <div className="mt-16">
          <div className="max-w-2xl mb-10">
            <h3
              className={`text-[#001749] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold font-heading'
              }`}
            >
              {t.trustOne.categoriesTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#42526E]">{t.trustOne.categoriesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {portfolios.map((cat, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80}>
                <div className="card-interactive h-full rounded-2xl bg-[#F4F7FC] border border-[#0A2463]/10 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-[#D4AF37]">
                <div>
                  <h4
                    className={`text-[#001749] ${
                      isMM ? 'text-lg font-bold' : 'text-xl font-bold font-heading'
                    }`}
                  >
                    {cat.title}
                  </h4>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#42526E] leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <ul className="mt-6 pt-5 border-t border-[#0A2463]/10 space-y-2.5">
                  {cat.highlights.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#001749]">
                      <Check className="w-4 h-4 text-[#C68B17] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Advisory & Due Diligence Standards */}
        <div className="mt-20 pt-14 border-t border-[#0A2463]/10">
          <div className="max-w-2xl mb-10">
            <h3
              className={`text-[#001749] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold font-heading'
              }`}
            >
              {t.trustOne.advisoryTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#42526E]">{t.trustOne.advisorySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisories.map((adv, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 80} className="border-t-2 border-[#0A2463]/20 pt-5 hover:border-[#D4AF37] transition-colors duration-300">
                <h4 className="text-base font-bold text-[#001749]">{adv.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#42526E] leading-relaxed">{adv.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Public Seminars & Client Advisory Showcase */}
        <div className="mt-20 pt-14 border-t border-[#0A2463]/10">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold text-[#9A6B12] mb-2">
              {isMM
                ? 'အသိပညာပေး ဟောပြောပွဲများနှင့် ဖောက်သည်ဝန်ဆောင်မှု'
                : isZH
                ? '行业讲座与客户咨询实景'
                : 'PUBLIC SEMINARS & CLIENT ADVISORY'}
            </p>
            <h3
              className={`text-[#001749] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold font-heading'
              }`}
            >
              {isMM
                ? 'အိမ်ခြံမြေ အသိပညာပေး ဟောပြောပွဲများနှင့် တွေ့ဆုံဆွေးနွေးမှုများ'
                : isZH
                ? '房地产知识讲座与专业客户交流'
                : 'Knowledge Sharing & Client Engagement'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: '/images/trust-one-stage.jpg',
                pos: 'object-top',
                title: isMM
                  ? 'Trust One Properties တရားဝင် မိတ်ဆက်ပွဲ'
                  : isZH
                  ? 'Trust One Properties 官方推介会'
                  : 'Trust One Properties Official Showcase',
              },
              {
                src: '/images/trust-one-seminar-hall.jpg',
                pos: 'object-center',
                title: isMM
                  ? 'ဖောက်သည်များနှင့် လုပ်ငန်းရှင်များ တွေ့ဆုံဆွေးနွေးပွဲ'
                  : isZH
                  ? '企业客户与投资者专题交流会'
                  : 'Corporate & Investor Property Briefing',
              },
              {
                src: '/images/trust-one-seminar-talk.jpg',
                pos: 'object-top',
                title: isMM
                  ? 'အိမ်၊ ခြံ၊ မြေနှင့် အာမခံဆိုင်ရာ ဗဟုသုတ ဟောပြောပွဲ'
                  : isZH
                  ? '房地产与保险合规知识专题讲座'
                  : 'Real Estate & Compliance Knowledge Seminar',
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delayMs={idx * 90}>
                <div className="card-interactive rounded-2xl bg-[#F4F7FC] border border-[#0A2463]/10 overflow-hidden h-full flex flex-col">
                  <div className="relative h-52 w-full bg-[#E6ECF7] bg-shimmer overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`object-cover ${item.pos} transition-transform duration-500 hover:scale-[1.03]`}
                      unoptimized
                    />
                  </div>
                  <div className="p-4 text-xs sm:text-sm font-semibold text-[#001749]">
                    {item.title}
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
