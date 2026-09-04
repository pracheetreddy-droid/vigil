'use client';

import React, { useState } from 'react';
import { useVigilContext } from '@/lib/store';
import { Users, Share2, ShieldCheck, CheckCircle2, Copy, MapPin, UserPlus } from 'lucide-react';

export default function SafetyCirclePage() {
  const { tourist } = useVigilContext();
  const [copied, setCopied] = useState<boolean>(false);

  const journeyShareText = `VIGIL Live Journey Broadcast — ${tourist.name} is currently traveling to ${tourist.currentJourney?.destination}. Status: ${tourist.currentJourney?.safetyStatus}. ETA: ${tourist.currentJourney?.eta}. Track live: https://vigil-safety.app/journey/VG-284921`;

  const handleCopy = () => {
    navigator.clipboard.writeText(journeyShareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-8 py-4 font-sans max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <div className="text-xs font-mono text-brand-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Users className="w-4 h-4" /> TRUSTED CONTACT NETWORK
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-sans">
            MY VIGIL SAFETY CIRCLE
          </h1>
          <p className="text-xs text-zinc-400 font-mono mt-1">
            Share live journey telemetry and location updates with verified trusted contacts.
          </p>
        </div>
      </div>

      {/* Share My Journey Card (Spec 15) */}
      <div className="p-6 rounded-2xl glass-panel border border-zinc-800 space-y-4 font-mono">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Share2 className="w-5 h-5 text-emerald-400" /> SHARE MY JOURNEY BROADCAST
          </div>
          <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-xs">
            LIVE BROADCAST READY
          </span>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-zinc-300">
            <div>LOCATION: <span className="text-white font-bold">{tourist.location.address}</span></div>
            <div>DESTINATION: <span className="text-white font-bold">{tourist.currentJourney?.destination}</span></div>
            <div>ETA: <span className="text-white font-bold">{tourist.currentJourney?.eta}</span></div>
            <div>STATUS: <span className="text-emerald-400 font-bold">{tourist.currentJourney?.safetyStatus}</span></div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleCopy}
            className="flex-1 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-brand-600/30"
          >
            <Copy className="w-4 h-4" />
            <span>{copied ? 'COPIED JOURNEY LINK ✓' : 'COPY LIVE SHARE LINK'}</span>
          </button>
        </div>
      </div>

      {/* Trusted Contacts List */}
      <div className="space-y-4 font-mono">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
            VERIFIED TRUSTED CONTACTS ({tourist.contacts.length})
          </h2>
          <button className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs hover:bg-zinc-800 transition flex items-center gap-1.5">
            <UserPlus className="w-3.5 h-3.5 text-brand-400" /> Add Contact
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tourist.contacts.map((contact, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base font-sans">{contact.name}</span>
                <span className="text-emerald-400 text-xs flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
                </span>
              </div>
              <div className="text-xs text-zinc-400">{contact.relation}</div>
              <div className="text-xs font-bold text-zinc-300 pt-1">{contact.phone}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
