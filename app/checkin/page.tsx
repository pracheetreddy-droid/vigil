'use client';

import React from 'react';
import { useVigilContext } from '@/lib/store';
import { Clock, ShieldCheck, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react';

export default function CheckinPage() {
  const {
    tourist,
    checkInMinutesRemaining,
    resetCheckInTimer,
    simulateMissedCheckIn,
    missedCheckInSimulated,
  } = useVigilContext();

  return (
    <div className="space-y-8 py-4 font-sans max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> AUTOMATED TOURIST CHECK-IN ENGINE
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-sans">
            VIGIL CHECK-IN PROTOCOL
          </h1>
          <p className="text-xs text-zinc-400 font-mono mt-1">
            Periodic safety status confirmation that escalates automatically to Authority Command if missed.
          </p>
        </div>
      </div>

      {/* Main Timer Display */}
      <div className="p-8 rounded-3xl glass-panel border border-zinc-800 space-y-6 text-center font-mono">
        {!missedCheckInSimulated ? (
          <div className="space-y-4">
            <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">NEXT REQUIRED CHECK-IN</div>
            
            <div className="text-6xl font-black text-white tracking-tight">
              {checkInMinutesRemaining}:00 <span className="text-lg text-zinc-500 font-normal">MINUTES</span>
            </div>

            <p className="text-xs text-zinc-400 font-sans max-w-md mx-auto">
              Tap "I'M SAFE ✓" before the countdown expires to reset your journey timer.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <button
                onClick={resetCheckInTimer}
                className="flex-1 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>I'M SAFE ✓</span>
              </button>

              <button
                onClick={simulateMissedCheckIn}
                className="px-4 py-4 rounded-2xl bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-amber-400 text-xs font-bold transition"
              >
                Simulate Missed Check-In
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center text-red-500 animate-pulse">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white uppercase text-red-400">
                ⚠️ MISSED SAFETY CHECK-IN
              </h2>
              <p className="text-xs text-zinc-300 font-sans">
                Automated escalation protocol triggered. Authority Command and Safety Circle have been alerted.
              </p>
            </div>

            {/* Spec 16 Missed Check-in Data Box */}
            <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-zinc-800 pb-1">
                <span className="text-zinc-500">Tourist ID:</span>
                <span className="font-bold text-white">{tourist.id} ({tourist.name})</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-1">
                <span className="text-zinc-500">Last known location:</span>
                <span className="font-bold text-white">{tourist.location.address}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-1">
                <span className="text-zinc-500">Last check-in:</span>
                <span className="font-bold text-zinc-300">{tourist.lastCheckIn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Time elapsed:</span>
                <span className="font-bold text-red-400">67 minutes</span>
              </div>
            </div>

            <button
              onClick={resetCheckInTimer}
              className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition"
            >
              RESOLVE & RESET CHECK-IN TIMER ✓
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
