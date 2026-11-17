'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface LogoImageProps {
  type: 'holding' | 'polaris' | 'trust-one';
  variant?: 'full' | 'mark' | 'badge';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function LogoImage({
  type,
  variant = 'full',
  className = '',
  size = 'md',
}: LogoImageProps) {
  const [imgError, setImgError] = useState(false);

  // Asset paths
  const config = {
    holding: {
      name: 'THET & THU CO., LTD.',
      sub: 'Holding Company',
      src: '/images/thet-and-thu-logo.webp',
      svg: '/images/thet-and-thu-logo.svg',
      glow: 'shadow-[0_0_20px_rgba(212,175,55,0.2)]',
      border: 'border-amber-500/30',
      badgeBg: 'bg-[#0B192C]/90',
      accentColor: '#D4AF37',
    },
    polaris: {
      name: 'POLARIS TECH SOLUTION',
      sub: 'IT & Software Division',
      src: '/images/polaris-logo.webp',
      svg: '/images/polaris-logo.svg',
      glow: 'shadow-[0_0_20px_rgba(0,210,255,0.25)]',
      border: 'border-cyan-500/30',
      badgeBg: 'bg-[#071326]/90',
      accentColor: '#00D2FF',
    },
    'trust-one': {
      name: 'TRUST ONE PROPERTIES',
      sub: 'Real Estate Division',
      src: '/images/trust-one-logo.webp',
      svg: '/images/trust-one-logo.svg',
      glow: 'shadow-[0_0_20px_rgba(212,175,55,0.2)]',
      border: 'border-amber-500/30',
      badgeBg: 'bg-[#071326]/90',
      accentColor: '#D4AF37',
    },
  }[type];

  const sizeClasses = {
    sm: 'h-10 w-auto',
    md: 'h-14 w-auto',
    lg: 'h-20 w-auto',
    xl: 'h-28 w-auto',
  }[size];

  // If mark/icon requested (e.g. for badges, circle avatar, or compact header)
  if (variant === 'mark') {
    return (
      <div
        className={`relative inline-flex items-center justify-center rounded-xl overflow-hidden border ${config.border} ${config.badgeBg} ${config.glow} p-1 transition-all duration-300 hover:scale-105 ${className}`}
      >
        <Image
          src={imgError ? config.svg : config.src}
          alt={config.name}
          width={80}
          height={80}
          className="h-10 w-10 object-contain rounded-lg"
          onError={() => setImgError(true)}
          unoptimized
        />
      </div>
    );
  }

  // Full presentation with contrast protection
  return (
    <div
      className={`relative inline-flex items-center rounded-xl p-1.5 transition-all duration-300 ${className}`}
    >
      <div className="relative overflow-hidden rounded-lg bg-[#071326]/60 backdrop-blur-xs border border-white/10 p-1">
        <Image
          src={imgError ? config.svg : config.src}
          alt={config.name}
          width={360}
          height={100}
          className={`${sizeClasses} object-contain max-w-[280px] sm:max-w-[340px] transition-transform duration-300 hover:brightness-110`}
          onError={() => setImgError(true)}
          unoptimized
          priority
        />
      </div>
    </div>
  );
}
