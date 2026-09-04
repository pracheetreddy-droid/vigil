'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ShieldAlert, PhoneCall, MapPin, CheckCircle2, X, Radio, Navigation } from 'lucide-react';
import { useVigilContext } from '@/lib/store';

export function SosModal() {
  const { sosActive, cancelSos, tourist, t } = useVigilContext();
  const [countdown, setCountdown] = useState<number>(3);
  const [confirmed, setConfirmed] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (sosActive && !confirmed) {
      setCountdown(3);
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setConfirmed(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [sosActive, confirmed]);

  if (!sosActive) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-zinc-950 border border-red-600/60 rounded-2xl p-6 max-w-lg w-full shadow-2xl shadow-red-900/30 relative overflow-hidden"
        >
          {/* Subtle red emergency pulse top bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600 animate-pulse" />

          {!confirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center text-red-500 animate-pulse">
                <AlertTriangle className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase font-mono">
                  EMERGENCY SOS TRIGGERED
                </h3>
                <p className="text-sm text-zinc-400">
                  Transmitting emergency payload in <span className="text-red-500 font-mono font-bold text-lg">{countdown}s</span>...
                </p>
              </div>

              <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800 text-xs font-mono text-left space-y-1 text-zinc-300">
                <div className="text-zinc-500 uppercase">TELEMETRY PAYLOAD PREVIEW</div>
                <div>ID: <span className="text-zinc-100">{tourist.id}</span> ({tourist.name})</div>
                <div>GPS: <span className="text-zinc-100">{tourist.location.lat.toFixed(4)}, {tourist.location.lng.toFixed(4)}</span></div>
                <div>CONTACTS: <span className="text-zinc-100">{tourist.contacts.length} Safety Circle Members</span></div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={cancelSos}
                  className="flex-1 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-300 font-semibold text-sm hover:bg-zinc-800 transition"
                >
                  CANCEL (ACCIDENTAL)
                </button>
                <button
                  onClick={() => setConfirmed(true)}
                  className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/40 transition"
                >
                  BROADCAST NOW
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-red-600/20 border border-red-500 text-red-500 animate-pulse">
                    <Radio className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight uppercase font-mono">
                      EMERGENCY ACTIVATED
                    </h3>
                    <p className="text-xs text-red-400 font-mono flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      LIVE TELEMETRY BROADCAST ACTIVE
                    </p>
                  </div>
                </div>
                <button
                  onClick={cancelSos}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status checklist */}
              <div className="space-y-2 bg-zinc-900/90 rounded-xl p-3.5 border border-zinc-800 text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Alert sent to VIGIL COMMAND</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Real-time location sharing active ({tourist.location.lat.toFixed(4)}, {tourist.location.lng.toFixed(4)})</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Emergency contacts notified ({tourist.contacts.map((c) => c.name).join(', ')})</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Nearest response unit alerted</span>
                </div>
              </div>

              {/* Nearby Assistance */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                  NEARBY ASSISTANCE
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                    <div className="text-[10px] text-zinc-500 font-mono">POLICE</div>
                    <div className="text-sm font-bold text-white font-mono">1.2 km</div>
                    <div className="text-[10px] text-emerald-400 font-mono">Cubbon Park</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                    <div className="text-[10px] text-zinc-500 font-mono">HOSPITAL</div>
                    <div className="text-sm font-bold text-white font-mono">2.4 km</div>
                    <div className="text-[10px] text-emerald-400 font-mono">Bowring ER</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                    <div className="text-[10px] text-zinc-500 font-mono">PATROL</div>
                    <div className="text-sm font-bold text-white font-mono">1.8 km</div>
                    <div className="text-[10px] text-emerald-400 font-mono">Unit #4</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-red-950/40 border border-red-900/60 rounded-xl text-xs text-red-200 leading-relaxed font-mono">
                ⚠️ PROTOTYPE SIMULATION NOTICE: This is an emergency workflow demo. No actual 911/112 calls or SMS messages are transmitted.
              </div>

              <button
                onClick={cancelSos}
                className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs uppercase font-bold tracking-wider transition"
              >
                RESOLVE & CLOSE EMERGENCY ALERT
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
