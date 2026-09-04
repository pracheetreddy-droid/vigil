'use client';

import React from 'react';
import { PhoneCall, Shield, Hospital, Flame, HeartHandshake, MapPin, ExternalLink, HelpCircle, BookOpen } from 'lucide-react';
import { DEMO_EMERGENCY_SERVICES } from '@/lib/demo-data';

export default function EmergencyHubPage() {
  const emergencyNumbers = [
    { title: 'POLICE EMERGENCY', number: '112', icon: Shield, color: 'text-red-400 border-red-500/40 bg-red-500/10' },
    { title: 'AMBULANCE & MEDICAL', number: '108', icon: Hospital, color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10' },
    { title: 'FIRE DEPARTMENT', number: '101', icon: Flame, color: 'text-amber-400 border-amber-500/40 bg-amber-500/10' },
    { title: 'WOMEN HELPLINE', number: '181', icon: HeartHandshake, color: 'text-purple-400 border-purple-500/40 bg-purple-500/10' },
    { title: 'NATIONAL TOURIST HELPLINE', number: '1363', icon: HelpCircle, color: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10' },
  ];

  return (
    <div className="space-y-8 py-4 font-sans max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <div className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4" /> NATIONAL & REGIONAL SAFETY HUB
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-sans">
            VIGIL EMERGENCY HUB
          </h1>
          <p className="text-xs text-zinc-400 font-mono mt-1">
            Configurable direct emergency hotlines, verified medical centers, and tourist safety protocols.
          </p>
        </div>
      </div>

      {/* Emergency Hotlines Grid (Spec 23) */}
      <div className="space-y-3 font-mono">
        <h2 className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
          EMERGENCY DIRECT HOTLINES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {emergencyNumbers.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`p-4 rounded-2xl border space-y-2 ${item.color}`}>
                <div className="flex items-center justify-between">
                  <Icon className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase">24/7 ACTIVE</span>
                </div>
                <div className="text-xs font-bold text-zinc-300">{item.title}</div>
                <div className="text-2xl font-black text-white font-mono">{item.number}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Nearby Verified Emergency Facilities */}
      <div className="space-y-3 font-mono">
        <h2 className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
          NEARBY VERIFIED HOSPITALS & POLICE KIOSKS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DEMO_EMERGENCY_SERVICES.map((facility) => (
            <div key={facility.id} className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2 flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-base font-sans">{facility.name}</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-cyan-400 font-mono">
                    {facility.type}
                  </span>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{facility.distanceKm} km away from your GPS location</span>
                </div>
              </div>

              <a
                href={`tel:${facility.phone}`}
                className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-mono font-bold text-xs transition flex items-center gap-1.5 shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>CALL</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Guidelines & Preparation */}
      <div className="p-6 rounded-2xl glass-panel border border-zinc-800 space-y-4 font-sans">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-brand-400 uppercase">
          <BookOpen className="w-4 h-4" /> SOLO TRAVELER SAFETY GUIDELINES
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-300 font-mono">
          <div className="p-4 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1">
            <div className="font-bold text-white">1. Use Monitored SafeRoutes</div>
            <p className="text-zinc-400 leading-relaxed font-sans">
              Always select VIGIL SafeRoute navigation when traveling after dusk. It routes through well-lit streets with active police kiosks.
            </p>
          </div>

          <div className="p-4 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1">
            <div className="font-bold text-white">2. Enable Journey Check-Ins</div>
            <p className="text-zinc-400 leading-relaxed font-sans">
              Maintain active 15-minute check-in intervals so VIGIL can automatically escalate missed check-ins to Authorities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
