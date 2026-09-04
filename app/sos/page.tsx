'use client';

import React from 'react';
import Link from 'next/link';
import { useVigilContext } from '@/lib/store';
import { Radio, AlertTriangle, CheckCircle2, ShieldAlert, PhoneCall, MapPin, ArrowRight } from 'lucide-react';

export default function SosPage() {
  const { tourist, sosActive, triggerSos, cancelSos } = useVigilContext();

  return (
    <div className="space-y-8 py-4 font-sans max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <div className="text-xs font-mono text-red-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Radio className="w-4 h-4 animate-pulse" /> EMERGENCY RESPONSE PROTOCOL
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-sans">
            VIGIL SOS WORKFLOW
          </h1>
          <p className="text-xs text-zinc-400 font-mono mt-1">
            Instant 1-touch emergency telemetry broadcast sharing GPS coordinates, tourist identity & safety circle notification.
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono">
          {!sosActive ? (
            <button
              onClick={triggerSos}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-600/40 transition animate-pulse"
            >
              TRIGGER SOS EMERGENCY NOW
            </button>
          ) : (
            <button
              onClick={cancelSos}
              className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-200 font-bold text-sm transition"
            >
              RESOLVE & CANCEL SOS
            </button>
          )}
        </div>
      </div>

      {/* Main SOS Status Board */}
      <div className="p-8 rounded-3xl glass-panel border border-zinc-800 space-y-6 font-mono">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-zinc-800 pb-6 gap-4">
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-2xl ${sosActive ? 'bg-red-600 text-white animate-pulse' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'}`}>
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs text-zinc-400">EMERGENCY SYSTEM STATUS</div>
              <div className={`text-xl font-bold uppercase ${sosActive ? 'text-red-500 animate-pulse' : 'text-emerald-400'}`}>
                {sosActive ? '● EMERGENCY SOS ACTIVE — TELEMETRY BROADCASTING' : '● STANDBY — SYSTEM READY'}
              </div>
            </div>
          </div>
        </div>

        {/* Status Check Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
            <div className="text-xs text-zinc-500">AUTHORITY TELEMETRY</div>
            <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> {sosActive ? 'Alert Transmitted' : 'Ready'}
            </div>
            <div className="text-[10px] text-zinc-500">Target: VIGIL COMMAND</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
            <div className="text-xs text-zinc-500">GPS COORDINATES</div>
            <div className="text-sm font-bold text-white font-mono">12.9716° N, 77.5946° E</div>
            <div className="text-[10px] text-cyan-400">Near MG Road Metro</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
            <div className="text-xs text-zinc-500">SAFETY CIRCLE</div>
            <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> {tourist.contacts.length} Contacts Linked
            </div>
            <div className="text-[10px] text-zinc-500">Mother, Father, Companion</div>
          </div>
        </div>

        {/* Nearby Emergency Services */}
        <div className="space-y-3 pt-2">
          <h2 className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
            NEARBY ASSISTANCE FACILITY METRICS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-1">
              <div className="text-xs text-zinc-400">Cubbon Park Police Station</div>
              <div className="text-lg font-bold text-white">1.2 km</div>
              <div className="text-xs text-emerald-400">+91 80 2294 2222</div>
            </div>

            <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-1">
              <div className="text-xs text-zinc-400">Bowring Hospital ER</div>
              <div className="text-lg font-bold text-white">2.4 km</div>
              <div className="text-xs text-emerald-400">+91 80 2559 1325</div>
            </div>

            <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-1">
              <div className="text-xs text-zinc-400">Tactical Patrol Unit #4</div>
              <div className="text-lg font-bold text-white">1.8 km</div>
              <div className="text-xs text-emerald-400">Monitored Corridor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
