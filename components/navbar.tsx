'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Radar, MapPin, Compass, Sparkles, User, AlertCircle, LayoutDashboard, Radio } from 'lucide-react';
import { useVigilContext } from '@/lib/store';
import { LanguageSelector } from './language-selector';

export function Navbar() {
  const pathname = usePathname();
  const { triggerSos, t } = useVigilContext();

  const isAuthority = pathname.startsWith('/authority');

  const navLinks = isAuthority
    ? [
        { href: '/authority', label: 'Command Center' },
        { href: '/authority/intelligence', label: 'AI Intelligence' },
        { href: '/authority/analytics', label: 'Analytics' },
        { href: '/', label: 'Exit Authority' },
      ]
    : [
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/map', label: t.navSafetyMap },
        { href: '/saferoute', label: t.navSafeRoute },
        { href: '/copilot', label: t.navAiCopilot },
        { href: '/id', label: t.navTouristId },
        { href: '/emergency', label: t.navResources },
        { href: '/authority', label: t.navAuthority, isBadge: true },
      ];

  return (
    <header className="sticky top-0 z-30 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white group-hover:border-brand-500 transition">
            <Shield className="w-4 h-4 text-brand-400" />
            <div className="absolute inset-0 rounded-lg bg-brand-500/10 animate-pulse pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-lg font-black tracking-widest text-white uppercase flex items-center gap-1">
              VIGIL
              {isAuthority && (
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-red-600/30 border border-red-500/50 text-red-400 tracking-normal">
                  COMMAND
                </span>
              )}
            </span>
            <span className="text-[9px] font-mono text-zinc-400 tracking-tight hidden sm:inline">
              ALWAYS AWARE.
            </span>
          </div>
        </Link>

        {/* System Online Status Pill (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>VIGIL SYSTEM ONLINE</span>
          <span className="text-zinc-600">|</span>
          <span className="text-emerald-400">GPS DETECTED ✓</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-zinc-800 text-white font-medium border border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                } ${link.isBadge ? 'text-amber-400 border border-amber-500/30 bg-amber-500/10' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Language Selector & SOS */}
        <div className="flex items-center gap-3">
          <LanguageSelector />

          {!isAuthority && (
            <button
              onClick={triggerSos}
              className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs shadow-lg shadow-red-600/30 transition flex items-center gap-1.5 animate-pulse"
            >
              <Radio className="w-3.5 h-3.5" />
              <span>SOS</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Links Bar */}
      <div className="flex md:hidden items-center overflow-x-auto px-4 py-2 border-t border-zinc-900 gap-2 no-scrollbar text-xs font-mono">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-1 rounded bg-zinc-900 shrink-0 ${
              pathname === link.href ? 'text-white border border-zinc-700' : 'text-zinc-400'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
