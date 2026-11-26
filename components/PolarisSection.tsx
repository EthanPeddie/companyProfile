'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal } from '@/components/MotionPrimitives';
import { Check, ArrowRight } from 'lucide-react';

export default function PolarisSection({
  isStandalonePage = false,
}: {
  isStandalonePage?: boolean;
}) {
  const { language, isMM, t } = useLanguage();
  const isZH = language === 'ZH';
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const HeadingTag = isStandalonePage ? 'h1' : 'h2';

  const services = [
    {
      title: t.polaris.service1Title,
      desc: t.polaris.service1Desc,
      features: t.polaris.service1Features,
      image: '/images/service-web-enterprise.jpg',
    },
    {
      title: t.polaris.service2Title,
      desc: t.polaris.service2Desc,
      features: t.polaris.service2Features,
      image: '/images/service-pos-inventory.jpg',
    },
    {
      title: t.polaris.service3Title,
      desc: t.polaris.service3Desc,
      features: t.polaris.service3Features,
      image: '/images/service-mobile-apps.jpg',
    },
    {
      title: t.polaris.service4Title,
      desc: t.polaris.service4Desc,
      features: t.polaris.service4Features,
      image: '/images/service-cloud-api.jpg',
    },
  ];

  const activeService = services[activeServiceIdx];

  return (
    <section
      id="polaris"
      className="relative py-20 lg:py-28 bg-[#F4F7FC] text-[#001749] border-b border-[#0A2463]/10 scroll-mt-14 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Division Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-10 border-b border-[#0A2463]/12">
          <div className="flex items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-white border border-[#0A2463]/12 flex items-center justify-center flex-shrink-0 shadow-xs p-1.5">
              <Image
                src="/images/logo-polaris.svg"
                alt="Polaris Tech Solution"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
                unoptimized
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0A2463]">{t.polaris.badge}</p>
              <HeadingTag className="mt-1 text-2xl sm:text-4xl font-extrabold text-[#001749] tracking-tight">
                Polaris Tech Solution
              </HeadingTag>
              <p className="text-xs sm:text-sm text-[#42526E] mt-1">{t.polaris.tagline}</p>
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
            <span>{t.polaris.ctaButton}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Engineering Manifesto */}
        <div className="mt-12 max-w-3xl border-l-2 border-[#0A2463] pl-5">
          <h3
            className={`text-[#001749] ${
              isMM ? 'text-lg sm:text-xl font-bold leading-relaxed' : 'text-xl sm:text-2xl font-bold'
            }`}
          >
            {t.polaris.title}
          </h3>
          <p className="mt-2.5 text-xs sm:text-sm text-[#42526E] leading-relaxed">
            {t.polaris.positioningHighlight}
          </p>
        </div>

        {/* Interactive 4-Service Showcase */}
        <div className="mt-16">
          <div className="max-w-2xl mb-8">
            <h3
              className={`text-[#001749] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold tracking-tight'
              }`}
            >
              {t.polaris.servicesTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#42526E]">{t.polaris.servicesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 cols: Interactive Service Selector */}
            <div className="lg:col-span-5 space-y-2.5" role="tablist" aria-label="Polaris Engineering Services">
              {services.map((service, idx) => {
                const isActive = idx === activeServiceIdx;
                return (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveServiceIdx(idx)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2463] ${
                      isActive
                        ? 'bg-white border-[#0A2463] shadow-[0_8px_24px_-6px_rgba(10,36,99,0.14)]'
                        : 'bg-white/65 border-[#0A2463]/12 hover:bg-white hover:border-[#0A2463]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`text-sm sm:text-base font-bold ${
                          isActive ? 'text-[#0A2463]' : 'text-[#001749]'
                        }`}
                      >
                        {service.title}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${
                          isActive ? 'bg-[#D4AF37]' : 'bg-[#0A2463]/20'
                        }`}
                      />
                    </div>
                    <p className="mt-1.5 text-xs line-clamp-2 text-[#42526E]">{service.desc}</p>
                  </button>
                );
              })}
            </div>

            {/* Right 7 cols: Active Service Preview & Deliverables */}
            <div
              key={activeServiceIdx}
              role="tabpanel"
              className="lg:col-span-7 rounded-2xl bg-white border border-[#0A2463]/15 overflow-hidden shadow-xs animate-panel-enter"
            >
              <div className="relative h-60 sm:h-72 w-full bg-[#EDF2FA] bg-shimmer border-b border-[#0A2463]/10">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-opacity duration-200"
                  unoptimized
                />
              </div>

              <div className="p-6 sm:p-8">
                <h4 className="text-xl sm:text-2xl font-bold text-[#001749]">{activeService.title}</h4>
                <p className="mt-2.5 text-xs sm:text-sm text-[#42526E] leading-relaxed">
                  {activeService.desc}
                </p>

                <div className="mt-6 pt-5 border-t border-[#0A2463]/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#001749]">
                      <Check className="w-4 h-4 text-[#0A2463] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Engineering Values */}
        <div className="mt-20 pt-14 border-t border-[#0A2463]/12">
          <h3 className="text-lg sm:text-xl font-bold text-[#001749] mb-8">{t.polaris.valuesTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t.polaris.val1Title, desc: t.polaris.val1Desc },
              { title: t.polaris.val2Title, desc: t.polaris.val2Desc },
              { title: t.polaris.val3Title, desc: t.polaris.val3Desc },
            ].map((val, idx) => (
              <div key={idx} className="border-t-2 border-[#0A2463]/20 pt-5">
                <h4 className="text-base font-bold text-[#001749]">{val.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#42526E] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Advisory & Lead Consultant */}
        <ScrollReveal className="mt-20 pt-14 border-t border-[#0A2463]/12">
          <div className="card-interactive rounded-2xl bg-white border border-[#0A2463]/12 p-6 sm:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 shadow-xs">
            <div className="relative w-32 h-40 sm:w-40 sm:h-48 rounded-xl overflow-hidden bg-[#E6ECF7] bg-shimmer border border-[#0A2463]/15 flex-shrink-0">
              <Image
                src="/images/polaris-consultant.jpg"
                alt="Lead Software Engineer & IT Consultant — Polaris Tech Solution"
                fill
                sizes="(max-width: 640px) 128px, 160px"
                className="object-cover object-top"
                loading="eager"
                unoptimized
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9A6B12]">
                {isMM
                  ? 'နည်းပညာအကြံပေးနှင့် စနစ်တည်ဆောက်မှု ဦးဆောင်သူ'
                  : isZH
                  ? '技术咨询与系统架构负责人'
                  : 'Technical Advisory & Architecture'}
              </p>
              <h3 className="mt-1.5 text-xl sm:text-2xl font-bold text-[#001749]">
                Lead Software Engineer &amp; IT Consultant
              </h3>
              <p className="text-xs sm:text-sm font-medium text-[#0A2463] mt-0.5">
                {isMM
                  ? 'အကြီးတန်း ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာနှင့် အိုင်တီအကြံပေး — Polaris Tech Solution'
                  : isZH
                  ? '首席软件工程师兼 IT 顾问 — Polaris Tech Solution'
                  : 'Polaris Tech Solution • THET & THU CO., LTD.'}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[#42526E] leading-relaxed max-w-2xl">
                {isMM
                  ? 'လုပ်ငန်းရှင်များ၏ လက်တွေ့လုပ်ငန်းလည်ပတ်မှု လိုအပ်ချက်များကို နားလည်အောင် ဆွေးနွေးပြီး POS, ERP, Mobile App နှင့် Cloud စနစ်များကို စတင်ဒီဇိုင်းဆွဲချိန်မှစ၍ လက်တွေ့အသုံးပြုနိုင်သည်အထိ တိုက်ရိုက် ဦးဆောင်အကြံပေး တည်ဆောက်ပေးပါသည်။'
                  : isZH
                  ? '直接与企业负责人及管理团队对接，将实际业务流程转化为稳定可靠的定制 ERP、多门店 POS、移动应用及云端系统，全程把控从需求梳理到正式上线。'
                  : 'Works directly with business owners and leadership teams to translate day-to-day operational requirements into reliable custom ERP, multi-store POS, mobile, and cloud architectures—from initial discovery through production rollout.'}
              </p>

              <div className="mt-5">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-interactive btn-sheen inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#0A2463] text-white hover:bg-[#001749]"
                >
                  <span>
                    {isMM
                      ? 'အိုင်တီအကြံပေးနှင့် တိုက်ရိုက်ဆွေးနွေးရန်'
                      : isZH
                      ? '直接预约技术顾问咨询'
                      : 'Consult With Our Lead Engineer'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Industries & Delivery Process */}
        <div className="mt-20 pt-14 border-t border-[#0A2463]/12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#001749]">{t.polaris.industriesTitle}</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#42526E]">{t.polaris.industriesSubtitle}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: t.polaris.indRetail, desc: t.polaris.indRetailDesc },
                { title: t.polaris.indRealEstate, desc: t.polaris.indRealEstateDesc },
                { title: t.polaris.indEducation, desc: t.polaris.indEducationDesc },
                { title: t.polaris.indLogistics, desc: t.polaris.indLogisticsDesc },
              ].map((ind, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#0A2463]/10">
                  <div className="text-sm font-bold text-[#001749]">{ind.title}</div>
                  <p className="mt-1 text-xs text-[#42526E] leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#001749]">{t.polaris.processTitle}</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#42526E]">{t.polaris.processSubtitle}</p>

            <div className="mt-6 relative pl-6 border-l-2 border-[#0A2463]/15 space-y-5">
              {[
                { num: '01', title: t.polaris.step1Title, desc: t.polaris.step1Desc },
                { num: '02', title: t.polaris.step2Title, desc: t.polaris.step2Desc },
                { num: '03', title: t.polaris.step3Title, desc: t.polaris.step3Desc },
                { num: '04', title: t.polaris.step4Title, desc: t.polaris.step4Desc },
              ].map((step, idx) => (
                <ScrollReveal key={step.num} delayMs={idx * 90} className="relative">
                  <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#0A2463] shadow-xs" />
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#9A6B12] pt-0.5">{step.num}</span>
                    <div>
                      <div className="text-sm font-bold text-[#001749]">{step.title}</div>
                      <p className="mt-1 text-xs text-[#42526E] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
