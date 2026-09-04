'use client';

import React, { useState } from 'react';
import { useVigilContext } from '@/lib/store';
import { FileText, MapPin, CheckCircle2, AlertTriangle, Upload, Shield, EyeOff, Send } from 'lucide-react';
import { IncidentReport } from '@/lib/demo-data';

export default function ReportIncidentPage() {
  const { tourist, addIncident } = useVigilContext();
  const [incidentType, setIncidentType] = useState<IncidentReport['type']>('Theft');
  const [severity, setSeverity] = useState<IncidentReport['severity']>('MEDIUM');
  const [description, setDescription] = useState<string>('');
  const [anonymous, setAnonymous] = useState<boolean>(false);
  const [submittedReportId, setSubmittedReportId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `INC-${Math.floor(80000 + Math.random() * 10000)}`;

    addIncident({
      type: incidentType,
      title: `${incidentType} reported near ${tourist.location.address}`,
      locationName: tourist.location.address,
      lat: tourist.location.lat,
      lng: tourist.location.lng,
      severity,
      description: description || `Reported ${incidentType.toLowerCase()} incident near ${tourist.location.address}.`,
      anonymous,
      reporterId: anonymous ? undefined : tourist.id,
    });

    setSubmittedReportId(newId);
  };

  return (
    <div className="space-y-8 py-4 font-sans max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="w-4 h-4" /> COMMUNITY INCIDENT REPORTING
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-sans">
            REPORT SAFETY INCIDENT
          </h1>
          <p className="text-xs text-zinc-400 font-mono mt-1">
            Submit incident telemetry and evidence directly to VIGIL safety database and authority command center.
          </p>
        </div>
      </div>

      {!submittedReportId ? (
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl glass-panel border border-zinc-800 space-y-6 font-mono">
          {/* Incident Type Grid */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-300 uppercase">1. INCIDENT CATEGORY</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {(['Theft', 'Harassment', 'Accident', 'Medical Emergency', 'Lost Person', 'Suspicious Activity', 'Other'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setIncidentType(type)}
                  className={`p-3 rounded-xl border text-left transition ${
                    incidentType === type
                      ? 'bg-zinc-800 text-white font-bold border-brand-500 shadow-md'
                      : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:bg-zinc-900'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Auto Captured Geolocation */}
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1 text-xs">
            <div className="text-zinc-500 font-bold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" /> AUTOMATICALLY CAPTURED GPS TELEMETRY
            </div>
            <div className="text-white font-bold">{tourist.location.address}</div>
            <div className="text-zinc-400">Coordinates: {tourist.location.lat.toFixed(4)}° N, {tourist.location.lng.toFixed(4)}° E</div>
          </div>

          {/* Severity */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-300 uppercase">2. SEVERITY LEVEL</label>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'] as const).map((sev) => (
                <button
                  key={sev}
                  type="button"
                  onClick={() => setSeverity(sev)}
                  className={`py-2.5 rounded-xl border text-center font-bold transition ${
                    severity === sev
                      ? sev === 'CRITICAL' ? 'bg-red-600 text-white border-red-500' : 'bg-brand-600 text-white border-brand-500'
                      : 'bg-zinc-950 text-zinc-400 border-zinc-800'
                  }`}
                >
                  {sev}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-300 uppercase">3. INCIDENT DESCRIPTION & DETAILS</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Describe what occurred, individuals involved, or immediate safety hazards..."
              className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-500 font-sans"
              required
            />
          </div>

          {/* Evidence Upload Simulator */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-300 uppercase">4. EVIDENCE ATTACHMENT (PHOTO/VIDEO)</label>
            <div className="p-6 rounded-xl bg-zinc-950 border-2 border-dashed border-zinc-800 text-center text-xs text-zinc-400 cursor-pointer hover:border-zinc-700 transition space-y-1">
              <Upload className="w-6 h-6 text-zinc-500 mx-auto" />
              <div>Click or drag photos/videos to attach to incident log</div>
              <div className="text-[10px] text-zinc-600">Supports PNG, JPG, MP4 (Max 25MB)</div>
            </div>
          </div>

          {/* Anonymous Toggle */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
            <div className="flex items-center gap-2 text-zinc-300 font-semibold">
              <EyeOff className="w-4 h-4 text-cyan-400" />
              <span>SUBMIT ANONYMOUSLY</span>
            </div>
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
              className="w-4 h-4 rounded bg-zinc-950 border-zinc-800 text-brand-500 focus:ring-0 cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-mono font-bold text-sm shadow-xl shadow-brand-600/30 transition flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>SUBMIT INCIDENT REPORT</span>
          </button>
        </form>
      ) : (
        /* Submission Success Spec 17 Screen */
        <div className="p-8 rounded-3xl glass-panel border border-emerald-500/40 text-center font-mono space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold text-emerald-400 uppercase">INCIDENT {submittedReportId}</div>
            <h2 className="text-2xl font-bold text-white uppercase">REPORT RECEIVED ✓</h2>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 max-w-md mx-auto text-left text-xs space-y-2 text-zinc-300">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> Location captured ✓ ({tourist.location.address})
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> Evidence attached ✓
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> Timestamp recorded ✓ ({new Date().toLocaleTimeString()})
            </div>
            <div className="pt-2 border-t border-zinc-800 flex justify-between font-bold">
              <span>STATUS:</span>
              <span className="text-amber-400">UNDER REVIEW BY COMMAND</span>
            </div>
          </div>

          <button
            onClick={() => setSubmittedReportId(null)}
            className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-bold transition"
          >
            SUBMIT ANOTHER REPORT
          </button>
        </div>
      )}
    </div>
  );
}
