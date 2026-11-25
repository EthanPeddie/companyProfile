'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const { language, isMM, t } = useLanguage();
  const isZH = language === 'ZH';

  return (
    <section className="relative bg-[#F4F7FC] border-b border-[#0A2463]/10 pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Holding Statement */}
        <div className="max-w-4xl">
          <p className="text-xs font-semibold tracking-wide text-[#0A2463] mb-3">
            {isMM
              ? 'သက်နှင့်သူ ကုမ္ပဏီလီမိတက် — ရန်ကုန်မြို့ (Est. 2014)'
              : isZH
              ? 'THET & THU CO., LTD. — 缅甸仰光 (成立于 2014 年)'
              : 'THET & THU CO., LTD. — Yangon, Myanmar (Est. 2014)'}
          </p>

          <h1
            className={`text-[#001749] [text-wrap:balance] ${
              isMM
                ? 'text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.35]'
                : 'text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold font-heading tracking-tight leading-[1.12]'
            }`}
          >
            {isMM
              ? 'ပိုမိုကောင်းမွန်သော မနက်ဖြန်ကို အတူတကွ တည်ဆောက်ကြမည်'
              : isZH
              ? '携手共建更美好的明天'
              : 'Building A Better Tomorrow Together'}
          </h1>

          <p
            className={`mt-5 text-[#42526E] max-w-2xl [text-wrap:pretty] ${
              isMM ? 'text-sm sm:text-base leading-relaxed' : 'text-base sm:text-lg leading-relaxed'
            }`}
          >
            {isMM
              ? 'ဆယ်စုနှစ်တစ်ခုကျော် ယုံကြည်စိတ်ချရမှုဖြင့် လုပ်ငန်းသုံး Enterprise Software ဗိသုကာပညာနှင့် မြန်မာပြည်တွင်း အိမ်ခြံမြေ အတိုင်ပင်ခံ ဝန်ဆောင်မှုများကို တစ်စုတစ်စည်းတည်း ပေးအပ်နေသော မြန်မာကုမ္ပဏီကြီး ဖြစ်ပါသည်။'
              : isZH
              ? '十余年稳健企业治理经验，旗下统筹定制企业软件工程与缅甸本土合规房地产咨询两大核心业务板块。'
              : 'Over a decade of established corporate governance uniting bespoke enterprise software engineering and verified domestic Myanmar real estate advisory under one corporate group.'}
          </p>

          {/* Primary Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/#about"
              className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A2463] text-white text-xs sm:text-sm font-semibold hover:bg-[#001749] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2463]"
            >
              <span>
                {isMM
                  ? 'ကုမ္ပဏီအကြောင်း လေ့လာရန်'
                  : isZH
                  ? '了解公司简介'
                  : 'Explore Corporate Profile'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#contact"
              className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#0A2463] border border-[#0A2463]/20 text-xs sm:text-sm font-semibold hover:border-[#0A2463]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2463]"
            >
              <span>{t.nav.contact}</span>
            </Link>
          </div>
        </div>

        {/* Clean Dual-Division Visual Gateway */}
        <div
          id="divisions-showcase"
          className="mt-12 lg:mt-16 pt-10 border-t border-[#0A2463]/12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 scroll-mt-20"
        >
          {/* Division 1: Polaris Tech Solution */}
          <Link
            href="/polaris"
            className="group relative rounded-2xl bg-white border border-[#0A2463]/12 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-[#0A2463]/50 hover:shadow-[0_12px_32px_-8px_rgba(10,36,99,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2463]"
          >
            <div className="relative h-56 sm:h-64 w-full bg-[#EDF2FA] bg-shimmer overflow-hidden">
              <Image
                src="/images/service-web-enterprise.jpg"
                alt="Polaris Tech Solution — Business Software & ERP"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001749]/75 via-[#001749]/15 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-white/95 backdrop-blur-md border border-white flex items-center justify-center p-1">
                    <Image
                      src="/images/logo-polaris.svg"
                      alt="Polaris"
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-xs font-semibold text-white">
                    {t.hero.quickCardPolarisBadge}
                  </span>
                </div>
                <span className="w-8 h-8 rounded-full bg-white text-[#0A2463] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#001749] group-hover:text-[#0A2463] transition-colors">
                  {t.hero.quickCardPolarisTitle}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#42526E] leading-relaxed line-clamp-2">
                  {t.hero.quickCardPolarisDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#0A2463]/8 flex items-center justify-between text-xs font-semibold text-[#0A2463]">
                <span>{t.hero.bespokeBadge}</span>
                <span>{isMM ? 'ဝင်ရောက်ကြည့်ရှုရန်' : 'Explore Division'} →</span>
              </div>
            </div>
          </Link>

          {/* Division 2: Trust One Properties */}
          <Link
            href="/trust-one"
            className="group relative rounded-2xl bg-white border border-[#0A2463]/12 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-[#D4AF37] hover:shadow-[0_12px_32px_-8px_rgba(10,36,99,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <div className="relative h-56 sm:h-64 w-full bg-[#FFF8EB] overflow-hidden">
              <Image
                src="/images/corporate-activity.jpg"
                alt="Trust One Properties — Domestic Myanmar Real Estate"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001749]/75 via-[#001749]/15 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-white/95 backdrop-blur-md border border-white flex items-center justify-center p-1">
                    <Image
                      src="/images/logo-trust-one.svg"
                      alt="Trust One"
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-xs font-semibold text-[#F4D06F]">
                    {t.hero.quickCardTrustBadge}
                  </span>
                </div>
                <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#001749] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#001749] group-hover:text-[#9A6B12] transition-colors">
                  {t.hero.quickCardTrustTitle}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#42526E] leading-relaxed line-clamp-2">
                  {t.hero.quickCardTrustDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#0A2463]/8 flex items-center justify-between text-xs font-semibold text-[#9A6B12]">
                <span>{t.hero.domesticBadge}</span>
                <span>{isMM ? 'ဝင်ရောက်ကြည့်ရှုရန်' : 'Explore Division'} →</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
