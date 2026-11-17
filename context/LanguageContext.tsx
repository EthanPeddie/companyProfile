'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';
import { Language, translations, TranslationDictionary } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isMM: boolean;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

let memoryLanguage: Language = 'EN';
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === 'tt_preferred_language') {
      if (e.newValue === 'EN' || e.newValue === 'MM') {
        memoryLanguage = e.newValue;
        callback();
      }
    }
  };
  window.addEventListener('storage', handleStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('storage', handleStorage);
  };
}

function getSnapshot(): Language {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('tt_preferred_language') as Language | null;
      if (saved === 'EN' || saved === 'MM') {
        memoryLanguage = saved;
        return saved;
      }
    } catch {
      // storage disabled or sandboxed
    }
  }
  return memoryLanguage;
}

function getServerSnapshot(): Language {
  return 'EN';
}

function setLanguageStore(lang: Language) {
  memoryLanguage = lang;
  try {
    localStorage.setItem('tt_preferred_language', lang);
  } catch {
    // ignore
  }
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = (lang: Language) => {
    setLanguageStore(lang);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'MM' ? 'my' : 'en';
      if (language === 'MM') {
        document.documentElement.classList.add('lang-my');
      } else {
        document.documentElement.classList.remove('lang-my');
      }
    }
  }, [language]);

  const t = translations[language];
  const isMM = language === 'MM';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isMM, t }}>
      <div className={isMM ? 'font-myanmar' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

