'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';

interface SubpageHeaderProps {
  division: 'polaris' | 'trust-one';
}

export default function SubpageHeader({ division }: SubpageHeaderProps) {
  const { isMM } = useLanguage();

  if (division === 'polaris') {
    return (
      <div className="bg-[#071326] border-b border-cyan-500/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>
              {isMM
                ? 'သက်နှင့်သူ ဟိုးဒင်းပင်မစာမျက်နှာသို့ ပြန်သွားရန်'
                : 'Back to THET & THU Holding Overview'}
            </span>
          </Link>

          <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {isMM
                ? 'သက်နှင့်သူ ကုမ္ပဏီလီမိတက်၏ အထူးပြုလုပ်ငန်းခွဲ (က)'
                : 'Division of THET & THU CO., LTD.'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0B192C] border-b border-amber-500/20 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>
            {isMM
              ? 'သက်နှင့်သူ ဟိုးဒင်းပင်မစာမျက်နှာသို့ ပြန်သွားရန်'
              : 'Back to THET & THU Holding Overview'}
          </span>
        </Link>

        <div className="inline-flex items-center gap-2 text-xs text-amber-300/90 font-medium">
          <Lock className="w-3.5 h-3.5 text-amber-400" />
          <span>
            {isMM
              ? '၁၀၀% မြန်မာပြည်တွင်း အိမ်ခြံမြေ သီးသန့်'
              : 'Strict Domestic Myanmar Real Estate Only'}
          </span>
        </div>
      </div>
    </div>
  );
}
