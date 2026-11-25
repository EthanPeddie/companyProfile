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
    console.error('Next.js Client Runtime Exception caught by ErrorBoundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4FAF7] text-[#1B0D36] p-6 text-center">
      <div className="mb-6">
        <Image
          src="/images/thet-and-thu-official-logo.webp"
          alt="THET & THU CO., LTD."
          width={240}
          height={52}
          className="h-12 w-auto block object-contain mx-auto rounded-xl"
          unoptimized
        />
      </div>

      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200 mb-4">
        <AlertTriangle className="w-4 h-4 text-rose-600" />
        <span>System Operational Notice / စနစ်ချို့ယွင်းချက် သတိပေးချက်</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-[#1B0D36] font-heading">
        An Unexpected Error Occurred
      </h1>
      <p className="mt-1.5 text-base sm:text-lg text-[#FFA62B] font-semibold">
        မမျှော်လင့်ထားသော စနစ်ချို့ယွင်းချက် ဖြစ်ပေါ်နေပါသည်
      </p>

      <p className="mt-3 text-sm text-[#44365C] max-w-lg mx-auto leading-relaxed">
        Our technical monitoring has recorded this event. You can attempt to refresh the application state or return to the corporate homepage.
      </p>
      <p className="mt-1 text-xs text-[#5C4F75] max-w-lg mx-auto leading-relaxed">
        ကျေးဇူးပြု၍ စာမျက်နှာကို ပြန်လည်စတင်ပါ သို့မဟုတ် ကုမ္ပဏီ ပင်မစာမျက်နှာသို့ ပြန်သွားနိုင်ပါသည်။
      </p>

      {error.digest && (
        <div className="mt-4 px-3 py-1.5 rounded-md bg-white border border-[#DAEFE6] text-xs font-mono text-[#5C4F75]">
          Incident ID: {error.digest}
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[#FFA62B] text-[#1B0D36] hover:bg-[#E88D17] shadow-lg shadow-[#FFA62B]/20"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Retry Operation / ပြန်လည်ကြိုးစားရန်</span>
        </button>

        <Link
          href="/"
          className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white text-[#291550] border border-[#DAEFE6] hover:bg-[#DAEFE6]"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage / ပင်မစာမျက်နှာ</span>
        </Link>
      </div>

      <div className="mt-8 pt-6 border-t border-[#DAEFE6] flex items-center justify-center gap-2 text-xs text-[#5C4F75]">
        <Phone className="w-3.5 h-3.5 text-[#FFA62B]" />
        <span>Urgent IT Support Desk: +95 9 505 6524</span>
      </div>
    </div>
  );
}
