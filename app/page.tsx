'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Compass, Navigation, Radar, CheckCircle2, ArrowRight, Activity, MapPin, Bot, QrCode, AlertTriangle, ShieldCheck, Award, Zap, Radio } from 'lucide-react';
import { InteractiveMap } from '@/components/interactive-map';
import { sound } from '@/lib/sound';

export default function LandingPage() {
  return (
    <div className="space-y-16 py-4">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-2 pb-12">
        {/* Glow backdrop blob */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 font-mono text-xs shadow-lg shadow-brand-500/10">
              <SparklesIcon className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>NEXORA ROUND 2 • TOURIST SAFETY ECOSYSTEM</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans leading-none">
                ALWAYS AWARE.
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-200 to-zinc-400 text-glow-brand">
                  ALWAYS WITH YOU.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl font-sans">
                AI-powered safety intelligence for every journey. Connecting tourists, real-time risk algorithms, SafeRoute navigation, and emergency authorities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/dashboard"
                onClick={() => sound.playClick()}
                className="px-7 py-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-sm font-mono shadow-2xl hover:scale-105 transition-all flex items-center gap-2 group"
              >
                <span>EXPLORE SAFELY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/map"
                onClick={() => sound.playRadarPing()}
                className="px-6 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-white font-mono text-sm transition flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>VIEW SAFETY MAP</span>
              </Link>
            </div>

            {/* Live System Panel required by spec */}
            <div className="p-5 rounded-2xl glass-panel-glow border border-brand-500/30 font-mono text-xs space-y-3.5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
                <span className="text-zinc-300 font-bold flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-400 animate-pulse" /> VIGIL LIVE TELEMETRY
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  LOCATION DETECTED ✓
                </span>
              </div>

              <div className="text-zinc-400 flex items-center gap-2">
                <Radar className="w-4 h-4 text-cyan-400 animate-spin" />
                <span>ANALYZING SURROUNDING SECTORS...</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-zinc-200 pt-1">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" /> Emergency services
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" /> Recent incidents
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" /> Risk zones
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" /> Safer routes
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-zinc-400 font-bold">SAFETY SCORE INDEX</span>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-emerald-400 text-glow-emerald">87 / 100</span>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px] border border-emerald-500/40">
                    LOW RISK
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Radar Map */}
          <div className="lg:col-span-6">
            <InteractiveMap heightClass="h-[520px]" />
          </div>
        </div>
      </section>

      {/* CORE PRODUCT VISION MAPPER */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-mono text-brand-400 font-bold uppercase tracking-wider">
            CONNECTED ECOSYSTEM ARCHITECTURE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-mono">
            TOURIST → LOCATION INTELLIGENCE → AI RISK ANALYSIS → EMERGENCY RESPONSE → AUTHORITIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          <div className="p-6 rounded-2xl glass-panel-hover border border-zinc-800 space-y-3">
            <div className="p-3 w-max rounded-xl bg-brand-500/20 border border-brand-500/40 text-brand-400">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">VIGIL AI Copilot</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Context-aware AI safety assistant that understands surrounding incident logs, active risk zones, and hospital distances.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel-hover border border-zinc-800 space-y-3">
            <div className="p-3 w-max rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
              <Navigation className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">SafeRoute Engine</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Compares Fastest vs Balanced vs Safest routes, guiding tourists past monitored corridors while avoiding high-risk alleys.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel-hover border border-zinc-800 space-y-3">
            <div className="p-3 w-max rounded-xl bg-red-500/20 border border-red-500/40 text-red-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">VIGIL COMMAND</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Authority Operations Center enabling live SOS monitoring, incident triage, hotspot pattern recognition, and emergency response.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK LAUNCH CALL TO ACTION */}
      <section className="p-10 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-brand-500/30 text-center space-y-5 font-mono shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-500/5 pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">READY TO DEMO VIGIL FOR RECRUITMENT?</h2>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
          Walk through the complete simulated journey in Bengaluru. Test real-time safety calculations, QR verification, SafeRoute, and VIGIL COMMAND.
        </p>
        <div className="pt-2">
          <Link
            href="/dashboard"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm transition shadow-xl shadow-brand-600/40 hover:scale-105"
          >
            <span>LAUNCH TOURIST DASHBOARD</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function SparklesIcon(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4m0 0v4m0-4h4m-4 0H1m15-4v4m0 0v4m0-4h4m-4 0h-4M6 18l2.25-2.25m0 0L10.5 18m-2.25-2.25L6 13.5m2.25 2.25L10.5 13.5" />
    </svg>
  );
}
