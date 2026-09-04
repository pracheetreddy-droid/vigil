'use client';

import React, { useState } from 'react';
import { Bot, AlertTriangle, ShieldCheck, CheckCircle2, TrendingUp, Sparkles, MapPin } from 'lucide-react';

export default function AuthorityIntelligencePage() {
  const [patrolDeployed, setPatrolDeployed] = useState<boolean>(false);

  return (
    <div className="space-y-8 py-4 font-mono max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <div className="text-xs text-brand-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Bot className="w-4 h-4" /> AI HOTSPOT RECOGNITION ENGINE
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-sans">
            VIGIL INTELLIGENCE
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Predictive spatio-temporal cluster analysis detecting emerging risk zones before critical escalation.
          </p>
        </div>
      </div>

      {/* Main AI Hotspot Detection Card (Spec 12) */}
      <div className="p-8 rounded-3xl glass-panel border-2 border-amber-500/50 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-brand-500 to-amber-500 animate-pulse" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-4 gap-3">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="text-xs text-amber-400 font-bold uppercase tracking-widest">
                POTENTIAL HOTSPOT DETECTED
              </div>
              <h2 className="text-xl font-bold text-white font-sans">MG ROAD JUNCTION & PERIPHERY</h2>
            </div>
          </div>

          <div className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/40">
            ELEVATED RISK TREND (+34%)
          </div>
        </div>

        {/* Hotspot Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 space-y-1">
            <div className="text-zinc-500">INCIDENT CLUSTER</div>
            <div className="text-xl font-bold text-white">7 incidents</div>
            <div className="text-[10px] text-zinc-400">Past 48 hours</div>
          </div>

          <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 space-y-1">
            <div className="text-zinc-500">GEOGRAPHIC RADIUS</div>
            <div className="text-xl font-bold text-white">1.8 km radius</div>
            <div className="text-[10px] text-zinc-400">Sector 4 Corridor</div>
          </div>

          <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 space-y-1">
            <div className="text-zinc-500">TEMPORAL WINDOW</div>
            <div className="text-xl font-bold text-white">48 hours</div>
            <div className="text-[10px] text-zinc-400">Evening peak (8 PM - 12 AM)</div>
          </div>
        </div>

        {/* Pattern & Recommendation (Spec 12) */}
        <div className="space-y-3 pt-2">
          <div className="space-y-1">
            <div className="text-xs font-bold text-zinc-400 uppercase">INCIDENT PATTERN RECOGNITION</div>
            <p className="text-sm text-zinc-300 font-sans leading-relaxed p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              "Incident activity increased by <strong className="text-amber-400">34%</strong> compared with the previous 48-hour observation window. Concentrated opportunist theft & harassment reported along unmonitored rear alleyways."
            </p>
          </div>

          <div className="space-y-1 pt-2">
            <div className="text-xs font-bold text-emerald-400 uppercase flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> AI RECOMMENDATION
            </div>
            <p className="text-sm text-zinc-200 font-sans leading-relaxed p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 font-bold">
              "Consider increased patrol presence between 8:00 PM – 12:00 AM around MG Road Junction and deploy mobile illumination kiosks to secondary thoroughfares."
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {!patrolDeployed ? (
            <button
              onClick={() => setPatrolDeployed(true)}
              className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-xl shadow-brand-600/30 transition flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>DEPLOY RECOMMENDED PATROL UNIT #4</span>
            </button>
          ) : (
            <div className="p-4 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 text-sm font-bold text-center flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>MOBILE PATROL UNIT #4 DISPATCHED TO MG ROAD JUNCTION ✓</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
