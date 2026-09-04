'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';
import { useVigilContext } from '@/lib/store';
import { ShieldCheck, QrCode, Download, ExternalLink, Share2, CheckCircle2, User, Lock, Edit2, Save } from 'lucide-react';

export default function DigitalIdPage() {
  const { tourist, updateTouristName } = useVigilContext();
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>(tourist.name);

  const verificationUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/verify/${tourist.id}`
    : `https://vigil-safety.app/verify/${tourist.id}`;

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      updateTouristName(nameInput.trim());
      setIsEditingName(false);
    }
  };

  return (
    <div className="space-y-8 py-4 font-sans max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            CRYPTOGRAPHIC TOURIST IDENTITY
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-sans">
            VIGIL DIGITAL TOURIST ID
          </h1>
          <p className="text-xs text-zinc-400 font-mono mt-1">
            Tamper-proof, QR-verifiable tourist identity credentials recognized by Karnataka State Tourism Authorities.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/verify/${tourist.id}`}
            className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold hover:bg-emerald-500/30 transition flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>TEST QR VERIFICATION PORTAL</span>
          </Link>
        </div>
      </div>

      {/* Main Digital ID Card Frame */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Futuristic Glassmorphic Dark ID Card */}
        <div className="w-full max-w-sm p-6 rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 border-2 border-zinc-700 shadow-2xl space-y-6 relative overflow-hidden font-mono">
          {/* Subtle brand watermark line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-cyan-400 to-brand-600" />
          
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2 text-white font-bold tracking-widest text-base">
              <ShieldCheck className="w-5 h-5 text-brand-400" /> VIGIL
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              VERIFIED ✓
            </span>
          </div>

          <div className="text-center space-y-1">
            <div className="text-[10px] text-zinc-500 tracking-widest uppercase">DIGITAL TOURIST IDENTITY</div>
          </div>

          {/* Photo & Editable Details */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-24 h-24 rounded-2xl bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center text-zinc-400 overflow-hidden relative shadow-lg">
              <User className="w-12 h-12 text-zinc-300" />
              <div className="absolute bottom-0 inset-x-0 bg-brand-600/90 text-white text-[9px] font-bold text-center py-0.5 uppercase tracking-wider truncate px-1">
                {tourist.name}
              </div>
            </div>

            <div className="text-center space-y-1 w-full">
              {!isEditingName ? (
                <div className="flex items-center justify-center gap-2">
                  <h2 className="text-lg font-bold text-white font-sans tracking-wide">{tourist.name}</h2>
                  <button
                    onClick={() => {
                      setNameInput(tourist.name);
                      setIsEditingName(true);
                    }}
                    className="p-1 text-zinc-400 hover:text-cyan-400 transition"
                    title="Edit Name"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSaveName} className="flex items-center justify-center gap-1.5">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="px-2 py-1 text-xs rounded bg-zinc-900 border border-brand-500 text-white text-center font-bold font-sans"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-2 py-1 rounded bg-brand-600 text-white text-[10px] font-bold"
                  >
                    SAVE
                  </button>
                </form>
              )}

              <div className="text-xs text-zinc-400">{tourist.nationality} • {tourist.passportHash}</div>
              <div className="text-xs font-bold text-cyan-400 pt-0.5">ID: {tourist.id}</div>
            </div>
          </div>

          {/* QR Code Component inside dark container */}
          <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-700 w-max mx-auto shadow-xl flex flex-col items-center">
            <Link href={`/verify/${tourist.id}`}>
              <QRCodeSVG value={verificationUrl} size={140} level="H" fgColor="#f4f4f5" bgColor="transparent" />
            </Link>
          </div>

          <div className="text-center text-[10px] text-zinc-500 border-t border-zinc-900 pt-3">
            SCAN QR TO VERIFY IDENTITY & SAFETY STATUS
          </div>
        </div>

        {/* Info & Privacy Notice Box */}
        <div className="flex-1 space-y-4 font-mono text-xs">
          <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
            <div className="text-white font-bold text-sm flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400" /> STRICT DARK MODE PRIVACY
            </div>
            <p className="text-zinc-400 text-xs font-sans leading-relaxed">
              Your identity card is locked in dark mode telemetry. All credentials and QR verification links match the VIGIL dark command aesthetic.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs flex items-center justify-between">
            <span>VERIFICATION STATUS: <strong className="text-emerald-400">ACTIVE & VALID</strong></span>
            <span className="text-zinc-500">ISSUER: KA-TOURISM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
