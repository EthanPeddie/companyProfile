import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Home } from 'lucide-react';

export default function NotFound() {
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

      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DAEFE6] text-[#291550] border border-[#4A2B88]/20 mb-4">
        <ShieldCheck className="w-3.5 h-3.5 text-[#4A2B88]" />
        <span>THET &amp; THU CO., LTD.</span>
      </div>

      <h1 className="text-6xl sm:text-8xl font-black text-[#FFA62B] font-heading tracking-tight">
        404
      </h1>
      <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#1B0D36]">
        Page Not Found / စာမျက်နှာ ရှာမတွေ့ပါ
      </h2>
      <p className="mt-2 text-sm text-[#44365C] max-w-md mx-auto leading-relaxed">
        The requested corporate document or sub-division page does not exist or has been relocated.
      </p>
      <p className="mt-1 text-xs text-[#5C4F75] max-w-md mx-auto leading-relaxed">
        သင်ရှာဖွေနေသော စာမျက်နှာသည် တည်ရှိခြင်း မရှိပါ သို့မဟုတ် ရွှေ့ပြောင်းသွားခြင်း ဖြစ်နိုင်ပါသည်။
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[#FFA62B] text-[#1B0D36] hover:bg-[#E88D17] shadow-lg shadow-[#FFA62B]/20"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage / ပင်မစာမျက်နှာသို့ ပြန်သွားရန်</span>
        </Link>
      </div>

      <div className="mt-12 text-xs text-[#5C4F75]">
        © 2026 THET &amp; THU CO., LTD. • All Rights Reserved.
      </div>
    </div>
  );
}
