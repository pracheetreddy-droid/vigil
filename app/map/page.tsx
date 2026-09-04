'use client';

import React from 'react';
import { useVigilContext } from '@/lib/store';
import { InteractiveMap } from '@/components/interactive-map';
import { Shield, AlertTriangle, Compass, MapPin, Search } from 'lucide-react';

export default function SafetyMapPage() {
  const { riskZones, incidents, setSelectedRiskZone } = useVigilContext();

  return (
    <div className="space-y-6 py-4 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            LOCATION INTELLIGENCE PLATFORM
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-sans">
            VIGIL INTERACTIVE SAFETY MAP
          </h1>
          <p className="text-xs text-zinc-400 font-mono mt-1">
            Real-time geospatial risk heatmaps, active incident telemetry, and emergency service proximity.
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <div className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>4 ACTIVE SECTORS MONITORED</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Map Component */}
      <InteractiveMap heightClass="h-[620px]" />

      {/* Risk Zones Quick Selector Grid Below Map */}
      <div className="space-y-3 font-mono">
        <h2 className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
          BENGALURU MONITORED SECTORS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {riskZones.map((zone) => (
            <div
              key={zone.id}
              onClick={() => setSelectedRiskZone(zone)}
              className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-sm group-hover:text-cyan-400 transition">{zone.name}</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    zone.level === 'HIGH'
                      ? 'bg-red-500/20 text-red-400'
                      : zone.level === 'MODERATE'
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-emerald-500/20 text-emerald-400'
                  }`}
                >
                  {zone.level}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs pt-1 border-t border-zinc-900 text-zinc-400">
                <span>Risk Index:</span>
                <span className="font-bold text-white">{zone.riskScore} / 100</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
