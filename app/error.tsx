'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console / error reporting service
    console.error('Next.js Client Runtime Exception caught by ErrorBoundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050B16] text-slate-100 p-6 text-center">
      <div className="relative mb-6">
        <Image
          src="/images/thet-and-thu-logo.webp"
          alt="THET & THU CO., LTD."
          width={220}
          height={70}
          className="h-16 w-auto object-contain mx-auto"
          unoptimized
        />
      </div>

      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/10 text-red-300 border border-red-500/30 mb-4">
        <AlertTriangle className="w-4 h-4 text-red-400" />
        <span>System Operational Notice / စနစ်ချို့ယွင်းချက် သတိပေးချက်</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-white font-heading">
        An Unexpected Error Occurred
      </h1>
      <p className="mt-1.5 text-base sm:text-lg text-amber-300 font-medium">
        မမျှော်လင့်ထားသော စနစ်ချို့ယွင်းချက် ဖြစ်ပေါ်နေပါသည်
      </p>

      <p className="mt-3 text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
        Our technical monitoring has recorded this event. You can attempt to refresh the application state or return to the corporate homepage.
      </p>
      <p className="mt-1 text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
        ကျေးဇူးပြု၍ စာမျက်နှာကို ပြန်လည်စတင်ပါ သို့မဟုတ် ကုမ္ပဏီ ပင်မစာမျက်နှာသို့ ပြန်သွားနိုင်ပါသည်။
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#D4AF37] text-[#050B16] hover:bg-[#F3C65F] transition-colors shadow-lg shadow-amber-500/20"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try Again / ပြန်လည်စတင်ရန်</span>
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/15 text-white transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage / ပင်မစာမျက်နှာ</span>
        </Link>
      </div>

      {/* Emergency Hotline Contact */}
      <div className="mt-10 pt-6 border-t border-white/10 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
        <span className="flex items-center gap-1.5 text-slate-300">
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Emergency Hotline:</span>
        </span>
        <a href="tel:+9595056524" className="text-amber-300 font-mono font-semibold hover:underline">
          09 505 6524
        </a>
        <span className="text-white/20">/</span>
        <a href="tel:+959443212306" className="text-amber-300 font-mono font-semibold hover:underline">
          09 443 212 306
        </a>
      </div>
    </div>
  );
}
