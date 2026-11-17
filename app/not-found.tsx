import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#071326] text-slate-100 p-6 text-center">
      <div className="relative mb-6">
        <Image
          src="/images/thet-and-thu-logo.png"
          alt="THET & THU CO., LTD."
          width={220}
          height={70}
          className="h-16 w-auto object-contain mx-auto"
          unoptimized
        />
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-4">
        <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
        <span>THET &amp; THU CO., LTD.</span>
      </div>

      <h1 className="text-5xl sm:text-7xl font-extrabold text-[#F3C65F] font-heading">
        404
      </h1>
      <h2 className="mt-3 text-xl sm:text-2xl font-bold text-white">
        Page Not Found
      </h2>
      <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
        The requested corporate document or sub-division page does not exist or has been relocated.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#D4AF37] text-[#071326] hover:bg-[#F3C65F] transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Corporate Homepage</span>
        </Link>
      </div>

      <div className="mt-12 text-xs text-slate-500">
        © 2026 THET &amp; THU CO., LTD. • All Rights Reserved.
      </div>
    </div>
  );
}
