'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useVigilContext } from '@/lib/store';
import { InteractiveMap } from '@/components/interactive-map';
import { Radio, AlertTriangle, ShieldCheck, Users, Activity, PhoneCall, MapPin, Eye, Bot, ChevronRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function AuthorityCommandPage() {
  const { sosAlerts, incidents, riskZones, tourist } = useVigilContext();
  const [selectedTouristId, setSelectedTouristId] = useState<string | null>(null);
  const [dispatchedUnits, setDispatchedUnits] = useState<Record<string, boolean>>({});

  const handleDispatch = (alertId: string) => {
    setDispatchedUnits((prev) => ({ ...prev, [alertId]: true }));
  };

  return (
    <div className="space-y-6 py-4 font-mono">
      {/* Top Header Bar for VIGIL COMMAND */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <div className="text-xs text-red-500 font-bold uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-red-500" /> STATE EMERGENCY OPERATIONS CENTER
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-sans">
            VIGIL COMMAND PLATFORM
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Real-time emergency alert triage, tourist telemetry tracking & AI hotspot intelligence.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/authority/intelligence"
            className="px-4 py-2 rounded-xl bg-brand-500/20 border border-brand-500/40 text-brand-400 text-xs font-bold hover:bg-brand-500/30 transition flex items-center gap-2"
          >
            <Bot className="w-4 h-4" /> AI HOTSPOT INTELLIGENCE
          </Link>
          <Link
            href="/authority/analytics"
            className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold hover:bg-zinc-800 transition"
          >
            ANALYTICS
          </Link>
        </div>
      </div>

      {/* TOP METRICS CARDS (Required by Spec 18) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-red-950/40 border border-red-900/60 space-y-1 shadow-lg">
          <div className="flex items-center justify-between text-red-400">
            <span className="text-xs font-bold uppercase">ACTIVE SOS</span>
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
          <div className="text-3xl font-black text-white font-mono">03</div>
          <div className="text-[10px] text-red-400">2 Dispatched • 1 Pending</div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
          <div className="flex items-center justify-between text-amber-400">
            <span className="text-xs font-bold uppercase">INCIDENTS LOGGED</span>
            <Activity className="w-4 h-4" />
          </div>
          <div className="text-3xl font-black text-white font-mono">27</div>
          <div className="text-[10px] text-zinc-400">Past 24 Hours</div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
          <div className="flex items-center justify-between text-cyan-400">
            <span className="text-xs font-bold uppercase">MONITORED TOURISTS</span>
            <Users className="w-4 h-4" />
          </div>
          <div className="text-3xl font-black text-white font-mono">1,284</div>
          <div className="text-[10px] text-emerald-400">Bengaluru Sector</div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
          <div className="flex items-center justify-between text-emerald-400">
            <span className="text-xs font-bold uppercase">HIGH-RISK ZONES</span>
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div className="text-3xl font-black text-white font-mono">08</div>
          <div className="text-[10px] text-amber-400">1 AI Advisory Issued</div>
        </div>
      </div>

      {/* MAIN COMMAND AREA: Tactical Map & Live SOS Feed Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
              COMMAND TACTICAL MAP & LIVE TELEMETRY
            </h2>
          </div>
          <InteractiveMap heightClass="h-[520px]" />
        </div>

        {/* ACTIVE SOS QUEUE RIGHT PANEL (Spec 18) */}
        <div className="lg:col-span-4 p-5 rounded-2xl glass-panel border border-zinc-800 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs text-red-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Radio className="w-4 h-4 animate-pulse" /> ACTIVE SOS ALERTS (03)
              </span>
              <span className="text-[10px] text-zinc-500">LIVE FEED</span>
            </div>

            <div className="space-y-3 overflow-y-auto max-h-[420px] pr-1">
              {sosAlerts.map((alert) => {
                const isDispatched = dispatchedUnits[alert.id];
                return (
                  <div
                    key={alert.id}
                    className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3 shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-white text-sm font-sans">{alert.touristName}</div>
                      <span className="px-2 py-0.5 rounded bg-red-600/30 text-red-400 text-[10px] font-bold border border-red-500/40">
                        {alert.riskLevel}
                      </span>
                    </div>

                    <div className="text-xs text-zinc-400 space-y-0.5 font-mono">
                      <div>Tourist ID: <span className="text-white font-bold">{alert.touristId}</span> ({alert.nationality})</div>
                      <div>Location: <span className="text-cyan-400 font-bold">{alert.locationName}</span></div>
                      <div>GPS: {alert.lat.toFixed(4)}, {alert.lng.toFixed(4)}</div>
                      <div>Time: {alert.timestamp}</div>
                    </div>

                    {/* Spec 18 Action Buttons */}
                    <div className="flex gap-2 pt-1">
                      <button
                        onClick={() => handleDispatch(alert.id)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition ${
                          isDispatched
                            ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/40'
                            : 'bg-red-600 hover:bg-red-500 text-white shadow-md'
                        }`}
                      >
                        {isDispatched ? 'PATROL DISPATCHED ✓' : '[DISPATCH]'}
                      </button>

                      <a
                        href="tel:+918022942222"
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition"
                      >
                        [CALL]
                      </a>

                      <button
                        onClick={() => setSelectedTouristId(alert.touristId)}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition"
                      >
                        [PROFILE]
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* LIVE INCIDENT FEED TICKER (Spec 18) */}
      <div className="p-5 rounded-2xl glass-panel border border-zinc-800 space-y-3 font-mono">
        <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider flex items-center justify-between">
          <span>REAL-TIME INCIDENT STREAM AUDIT LOG</span>
          <span className="text-[10px] text-emerald-400">STREAM ACTIVE ●</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {incidents.map((inc) => (
            <div key={inc.id} className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 space-y-1">
              <div className="flex justify-between text-zinc-400 text-[10px]">
                <span>{inc.timestamp}</span>
                <span className="font-bold text-white">{inc.id}</span>
              </div>
              <div className="font-bold text-white text-sm font-sans">{inc.title}</div>
              <div className="text-zinc-400 text-[11px]">{inc.locationName}</div>
              <div className="text-amber-400 text-[10px] font-bold">STATUS: {inc.status}</div>
            </div>
          ))}
        </div>
      </div>

      {/* AUTHORITY TOURIST PROFILE INSPECTOR MODAL (Spec 19) */}
      {selectedTouristId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-zinc-950 border border-zinc-700 rounded-2xl p-6 max-w-lg w-full space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase">AUTHORITY TOURIST INSPECTION</span>
                <h3 className="text-lg font-bold text-white font-sans">{tourist.name}</h3>
              </div>
              <button
                onClick={() => setSelectedTouristId(null)}
                className="px-3 py-1 rounded bg-zinc-900 text-zinc-400 hover:text-white text-xs"
              >
                CLOSE [X]
              </button>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-xs">
              <div>Tourist ID: <span className="font-bold text-white">{tourist.id}</span></div>
              <div>Verification Status: <span className="font-bold text-emerald-400">VERIFIED ✓ (KA-TOURISM)</span></div>
              <div>Current Location: <span className="font-bold text-cyan-400">{tourist.location.address}</span></div>
              <div>Current Journey: <span className="font-bold text-white">{tourist.currentJourney?.destination} (ETA {tourist.currentJourney?.eta})</span></div>
              <div>Last Check-in: <span className="font-bold text-zinc-300">{tourist.lastCheckIn}</span></div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-zinc-400 uppercase">EMERGENCY CONTACTS</span>
              <div className="space-y-1 text-xs text-zinc-300">
                {tourist.contacts.map((c, idx) => (
                  <div key={idx} className="p-2 bg-zinc-900 rounded border border-zinc-800 flex justify-between">
                    <span>{c.name} ({c.relation})</span>
                    <span className="font-bold text-white">{c.phone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
