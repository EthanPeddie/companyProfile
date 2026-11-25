'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Check, ArrowRight } from 'lucide-react';

export default function PolarisSection({
  isStandalonePage = false,
}: {
  isStandalonePage?: boolean;
}) {
  const { isMM, t } = useLanguage();
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
      className="relative py-20 lg:py-28 bg-[#F4F0FA] text-[#291550] border-b border-[#4A2B88]/12 scroll-mt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Division Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-10 border-b border-[#4A2B88]/12">
          <div className="flex items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#4A2B88] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Image
                src="/images/polaris-emblem.webp"
                alt="Polaris Tech Solution"
                width={36}
                height={36}
                className="w-8 h-8 rounded-full object-contain"
                unoptimized
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#4A2B88]">{t.polaris.badge}</p>
              <HeadingTag className="mt-1 text-2xl sm:text-4xl font-extrabold text-[#291550] tracking-tight">
                Polaris Tech Solution
              </HeadingTag>
              <p className="text-xs sm:text-sm text-[#433B54] mt-1">{t.polaris.tagline}</p>
            </div>
          </div>

          <Link
            href="/#contact"
            className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#4A2B88] text-white hover:bg-[#381F6A] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2B88]"
          >
            <span>{t.polaris.ctaButton}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Engineering Manifesto */}
        <div className="mt-12 max-w-3xl border-l-2 border-[#4A2B88] pl-5">
          <h3
            className={`text-[#291550] ${
              isMM ? 'text-lg sm:text-xl font-bold leading-relaxed' : 'text-xl sm:text-2xl font-bold'
            }`}
          >
            {t.polaris.title}
          </h3>
          <p className="mt-2.5 text-xs sm:text-sm text-[#433B54] leading-relaxed">
            {t.polaris.positioningHighlight}
          </p>
        </div>

        {/* Interactive 4-Service Showcase */}
        <div className="mt-16">
          <div className="max-w-2xl mb-8">
            <h3
              className={`text-[#291550] ${
                isMM ? 'text-xl sm:text-2xl font-bold' : 'text-2xl sm:text-3xl font-bold tracking-tight'
              }`}
            >
              {t.polaris.servicesTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#433B54]">{t.polaris.servicesSubtitle}</p>
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
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2B88] ${
                      isActive
                        ? 'bg-white border-[#4A2B88] shadow-[0_8px_24px_-6px_rgba(74,43,136,0.14)]'
                        : 'bg-white/60 border-[#4A2B88]/12 hover:bg-white hover:border-[#4A2B88]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`text-sm sm:text-base font-bold ${
                          isActive ? 'text-[#4A2B88]' : 'text-[#291550]'
                        }`}
                      >
                        {service.title}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${
                          isActive ? 'bg-[#FFA62B]' : 'bg-[#4A2B88]/20'
                        }`}
                      />
                    </div>
                    <p className="mt-1.5 text-xs line-clamp-2 text-[#433B54]">{service.desc}</p>
                  </button>
                );
              })}
            </div>

            {/* Right 7 cols: Active Service Preview & Deliverables */}
            <div
              role="tabpanel"
              className="lg:col-span-7 rounded-2xl bg-white border border-[#4A2B88]/15 overflow-hidden shadow-xs"
            >
              <div className="relative h-60 sm:h-72 w-full bg-[#F7FAF8] border-b border-[#4A2B88]/10">
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
                <h4 className="text-xl sm:text-2xl font-bold text-[#291550]">{activeService.title}</h4>
                <p className="mt-2.5 text-xs sm:text-sm text-[#433B54] leading-relaxed">
                  {activeService.desc}
                </p>

                <div className="mt-6 pt-5 border-t border-[#4A2B88]/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#291550]">
                      <Check className="w-4 h-4 text-[#4A2B88] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Engineering Values (3 columns) */}
        <div className="mt-20 pt-14 border-t border-[#4A2B88]/12">
          <h3 className="text-lg sm:text-xl font-bold text-[#291550] mb-8">{t.polaris.valuesTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t.polaris.val1Title, desc: t.polaris.val1Desc },
              { title: t.polaris.val2Title, desc: t.polaris.val2Desc },
              { title: t.polaris.val3Title, desc: t.polaris.val3Desc },
            ].map((val, idx) => (
              <div key={idx} className="border-t-2 border-[#4A2B88]/20 pt-5">
                <h4 className="text-base font-bold text-[#291550]">{val.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#433B54] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries & Delivery Process */}
        <div className="mt-20 pt-14 border-t border-[#4A2B88]/12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Industries (6 cols) */}
          <div className="lg:col-span-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#291550]">{t.polaris.industriesTitle}</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#433B54]">{t.polaris.industriesSubtitle}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: t.polaris.indRetail, desc: t.polaris.indRetailDesc },
                { title: t.polaris.indRealEstate, desc: t.polaris.indRealEstateDesc },
                { title: t.polaris.indEducation, desc: t.polaris.indEducationDesc },
                { title: t.polaris.indLogistics, desc: t.polaris.indLogisticsDesc },
              ].map((ind, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#4A2B88]/10">
                  <div className="text-sm font-bold text-[#291550]">{ind.title}</div>
                  <p className="mt-1 text-xs text-[#433B54] leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Delivery Process (6 cols) */}
          <div className="lg:col-span-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#291550]">{t.polaris.processTitle}</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#433B54]">{t.polaris.processSubtitle}</p>

            <div className="mt-6 divide-y divide-[#4A2B88]/10 border-t border-[#4A2B88]/10">
              {[
                { num: '01', title: t.polaris.step1Title, desc: t.polaris.step1Desc },
                { num: '02', title: t.polaris.step2Title, desc: t.polaris.step2Desc },
                { num: '03', title: t.polaris.step3Title, desc: t.polaris.step3Desc },
                { num: '04', title: t.polaris.step4Title, desc: t.polaris.step4Desc },
              ].map((step) => (
                <div key={step.num} className="py-4 flex items-start gap-4">
                  <span className="text-xs font-mono font-bold text-[#4A2B88] pt-0.5">{step.num}</span>
                  <div>
                    <div className="text-sm font-bold text-[#291550]">{step.title}</div>
                    <p className="mt-1 text-xs text-[#433B54] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
