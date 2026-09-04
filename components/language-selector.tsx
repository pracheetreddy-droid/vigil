'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import { useVigilContext } from '@/lib/store';
import { SupportedLanguage } from '@/lib/translations';

const LANGUAGES: { code: SupportedLanguage; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिंदी' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
];

export function LanguageSelector() {
  const { language, setLanguage } = useVigilContext();

  return (
    <div className="relative inline-flex items-center">
      <Globe className="w-3.5 h-3.5 text-zinc-400 absolute left-2 pointer-events-none" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
        className="pl-7 pr-3 py-1 text-xs font-mono bg-zinc-900/90 border border-zinc-800 rounded-lg text-zinc-300 focus:outline-none focus:border-brand-500 hover:bg-zinc-800 transition cursor-pointer appearance-none"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-zinc-950 text-zinc-200">
            {lang.native} ({lang.code.toUpperCase()})
          </option>
        ))}
      </select>
    </div>
  );
}
