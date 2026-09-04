'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Lock, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-10 px-4 text-xs font-mono text-zinc-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-base tracking-widest">
            <Shield className="w-4 h-4 text-brand-400" /> VIGIL
          </div>
          <p className="text-zinc-400 leading-relaxed text-xs">
            Always aware. Always with you.
            <br />
            AI-powered tourist safety intelligence ecosystem connecting travelers, risk algorithms, and emergency services.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-zinc-300 font-semibold uppercase text-[11px]">TOURIST SUITE</div>
          <ul className="space-y-1.5">
            <li><Link href="/dashboard" className="hover:text-zinc-300 transition">Safety Dashboard</Link></li>
            <li><Link href="/map" className="hover:text-zinc-300 transition">Interactive Risk Map</Link></li>
            <li><Link href="/saferoute" className="hover:text-zinc-300 transition">VIGIL SafeRoute Engine</Link></li>
            <li><Link href="/copilot" className="hover:text-zinc-300 transition">VIGIL AI Safety Copilot</Link></li>
            <li><Link href="/id" className="hover:text-zinc-300 transition">Digital Tourist ID & QR</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <div className="text-zinc-300 font-semibold uppercase text-[11px]">AUTHORITY OPERATIONS</div>
          <ul className="space-y-1.5">
            <li><Link href="/authority" className="hover:text-zinc-300 transition">VIGIL COMMAND Center</Link></li>
            <li><Link href="/authority/intelligence" className="hover:text-zinc-300 transition">AI Hotspot Intelligence</Link></li>
            <li><Link href="/authority/analytics" className="hover:text-zinc-300 transition">Safety Analytics Suite</Link></li>
            <li><Link href="/emergency" className="hover:text-zinc-300 transition">Emergency Contacts Hub</Link></li>
          </ul>
        </div>

        <div className="space-y-3 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
          <div className="flex items-center gap-2 text-zinc-300 font-semibold text-[11px]">
            <Lock className="w-3.5 h-3.5 text-emerald-400" /> PRIVACY & DATA GUARANTEE
          </div>
          <p className="text-zinc-400 text-[11px] leading-relaxed">
            Your location is shared only during active journey sharing or emergency mode. All telemetry is encrypted and identity hashes are privacy-preserved.
          </p>
          <div className="text-[10px] text-zinc-500">
            VIGIL DEMO PROTOCOL v2.4 • PROTOTYPE ECOSYSTEM
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-zinc-600 text-[11px]">
        <div>© 2026 VIGIL Safety Technologies. All rights reserved.</div>
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <span>College Vibe-Coding Prototype</span>
          <span>•</span>
          <Link href="/authority" className="text-brand-400 hover:underline">Authority Portal</Link>
        </div>
      </div>
    </footer>
  );
}
