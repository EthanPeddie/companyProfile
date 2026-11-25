'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  // Complete progress bar when pathname changes
  useEffect(() => {
    if (!visible) return;
    const finishTimer = setTimeout(() => {
      setProgress(100);
      const hideTimer = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 220);
      return () => clearTimeout(hideTimer);
    }, 80);
    return () => clearTimeout(finishTimer);
  }, [pathname, visible]);

  // Start progress bar on internal route link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }
      if (target.target === '_blank') return;

      const nextPath = href.split('#')[0] || '/';
      if (nextPath !== pathname) {
        setVisible(true);
        setProgress(35);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[70] h-[3px] pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F6E27A] to-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.65)] transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
