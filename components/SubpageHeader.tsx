'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft, ShieldCheck, Lock, Phone } from 'lucide-react';

interface SubpageHeaderProps {
  division: 'polaris' | 'trust-one';
}

export default function SubpageHeader({ division }: SubpageHeaderProps) {
  const { isMM } = useLanguage();

  if (division === 'polaris') {
    return (
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#4A2B88]/12 py-2.5 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
            <Link
              href="/"
              className="btn-interactive inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#4A2B88] hover:text-[#291550] bg-[#F4F0FA] hover:bg-[#E8E0F7] transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>
                {isMM
                  ? 'ပင်မစာမျက်နှာသို့'
                  : 'THET & THU Home'}
              </span>
            </Link>

            <span className="text-[#DAEFE6]">/</span>

            <div className="inline-flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#4A2B88] p-0.5 flex items-center justify-center">
                <Image
                  src="/images/polaris-emblem.webp"
                  alt="Polaris"
                  width={20}
                  height={20}
                  className="w-4 h-4 rounded-full object-contain"
                  unoptimized
                />
              </div>
              <span className="text-xs font-bold text-[#1B0D36]">Polaris Tech Solution</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#291550] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFA62B]" />
              <span>
                {isMM
                  ? 'သက်နှင့်သူ အထူးပြုလုပ်ငန်းခွဲ (က)'
                  : 'Division of THET & THU CO., LTD.'}
              </span>
            </div>

            <a
              href="tel:+959780654277"
              className="btn-interactive hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold font-mono tabular-nums bg-[#F4F0FA] text-[#4A2B88] hover:bg-[#E8E0F7] border border-[#4A2B88]/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2B88]"
            >
              <Phone className="w-3 h-3 text-[#4A2B88]" />
              <span>09 780 654 277</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#4A2B88]/12 py-2.5 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
          <Link
            href="/"
            className="btn-interactive inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#9A540E] hover:text-[#291550] bg-[#FFF4E0] hover:bg-[#FFE6B8] transition-colors whitespace-nowrap"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>
              {isMM
                ? 'ပင်မစာမျက်နှာသို့'
                : 'THET & THU Home'}
            </span>
          </Link>

          <span className="text-[#DAEFE6]">/</span>

          <div className="inline-flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#4A2B88] p-0.5 flex items-center justify-center">
              <Image
                src="/images/trust-one-emblem.webp"
                alt="Trust One"
                width={20}
                height={20}
                className="w-4 h-4 object-contain"
                unoptimized
              />
            </div>
            <span className="text-xs font-bold text-[#1B0D36]">Trust One Properties</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 text-xs text-[#9A540E] font-bold">
            <Lock className="w-3.5 h-3.5 text-[#FFA62B]" />
            <span>
              {isMM
                ? '၁၀၀% မြန်မာပြည်တွင်း အိမ်ခြံမြေ သီးသန့်'
                : 'Strict Domestic Myanmar Real Estate Only'}
            </span>
          </div>

          <a
            href="tel:+9595056524"
            className="btn-interactive hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold font-mono tabular-nums bg-[#FFF0D4] text-[#9A540E] hover:bg-[#FFE6B8] border border-[#FFA62B]/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA62B]"
          >
            <Phone className="w-3 h-3 text-[#FFA62B]" />
            <span>09 505 6524</span>
          </a>
        </div>
      </div>
    </div>
  );
}
