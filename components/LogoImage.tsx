'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface LogoImageProps {
  type: 'holding' | 'polaris' | 'trust-one';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function LogoImage({
  type,
  className = '',
  size = 'md',
}: LogoImageProps) {
  const [imgError, setImgError] = useState(false);

  // Asset paths and color configs aligned with 60% Mint, 30% Purple, 10% Mango
  const config = {
    holding: {
      name: 'THET & THU CO., LTD.',
      sub: 'Company Limited',
      src: '/images/thet-and-thu-logo.svg',
      svg: '/images/thet-and-thu-logo.svg',
      accentColor: '#FFA62B',
    },
    polaris: {
      name: 'POLARIS TECH SOLUTION',
      sub: 'IT & Software Division',
      src: '/images/polaris-logo.svg',
      svg: '/images/polaris-logo.svg',
      accentColor: '#4A2B88',
    },
    'trust-one': {
      name: 'TRUST ONE PROPERTIES',
      sub: 'Real Estate Division',
      src: '/images/trust-one-logo.svg',
      svg: '/images/trust-one-logo.svg',
      accentColor: '#FFA62B',
    },
  }[type];

  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-14 w-auto',
    xl: 'h-20 w-auto',
  }[size];

  // Full presentation within Midnight Purple capsule for native high-contrast
  return (
    <div
      className={`relative inline-flex items-center px-3.5 py-2 rounded-xl bg-[#4A2B88] border border-[#4A2B88]/30 shadow-xs transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      <Image
        src={imgError ? config.src : config.svg}
        alt={config.name}
        width={360}
        height={90}
        className={`${sizeClasses} object-contain max-w-[240px] sm:max-w-[300px]`}
        onError={() => setImgError(true)}
        unoptimized
        priority
      />
    </div>
  );
}
