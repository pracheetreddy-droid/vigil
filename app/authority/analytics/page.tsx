'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Activity, Clock, Shield, TrendingDown } from 'lucide-react';

const INCIDENTS_TIME_DATA = [
  { time: '00:00', count: 2 },
  { time: '04:00', count: 1 },
  { time: '08:00', count: 3 },
  { time: '12:00', count: 5 },
  { time: '16:00', count: 4 },
  { time: '20:00', count: 9 },
  { time: '23:59', count: 3 },
];

const INCIDENTS_CATEGORY_DATA = [
  { category: 'Theft', count: 12, color: '#ef4444' },
  { category: 'Harassment', count: 6, color: '#f59e0b' },
  { category: 'Accident', count: 4, color: '#06b6d4' },
  { category: 'Suspicious', count: 3, color: '#6366f1' },
  { category: 'Medical', count: 2, color: '#10b981' },
];

export default function AuthorityAnalyticsPage() {
  return (
    <div className="space-y-8 py-4 font-mono">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <div className="text-xs text-brand-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-4 h-4" /> STATISTICAL RISK METRICS
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-sans">
            SAFETY ANALYTICS SUITE
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Empirical historical incident data, emergency response efficiency, and risk vector distribution.
          </p>
        </div>
      </div>

      {/* Key Metric Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="text-xs text-zinc-500 uppercase">AVG EMERGENCY RESPONSE TIME</span>
          <div className="text-3xl font-black text-emerald-400 font-mono">4.2 MINS</div>
          <div className="text-[10px] text-zinc-400">↓ 1.4 mins faster than target</div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="text-xs text-zinc-500 uppercase">RESOLVED INCIDENTS</span>
          <div className="text-3xl font-black text-white font-mono">88.8%</div>
          <div className="text-[10px] text-emerald-400">24 out of 27 cases resolved</div>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
          <span className="text-xs text-zinc-500 uppercase">ACTIVE TOURIST COVERAGE</span>
          <div className="text-3xl font-black text-cyan-400 font-mono">99.4%</div>
          <div className="text-[10px] text-zinc-400">Real-time telemetry link active</div>
        </div>
      </div>

      {/* Recharts Visualizations (Spec 21) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Incidents Over Time Line Chart */}
        <div className="p-6 rounded-2xl glass-panel border border-zinc-800 space-y-4">
          <div className="text-xs font-bold uppercase text-zinc-300 tracking-wider">
            INCIDENT DENSITY OVER TIME (24 HOUR TIMELINE)
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={INCIDENTS_TIME_DATA}>
                <XAxis dataKey="time" stroke="#71717a" fontSize={11} />
                <YAxis stroke="#71717a" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
                />
                <Line type="monotone" dataKey="count" stroke="#ef4444" strokeWidth={3} dot={{ fill: '#ef4444' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Incidents by Category Bar Chart */}
        <div className="p-6 rounded-2xl glass-panel border border-zinc-800 space-y-4">
          <div className="text-xs font-bold uppercase text-zinc-300 tracking-wider">
            INCIDENTS BY CATEGORY BREAKDOWN
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={INCIDENTS_CATEGORY_DATA}>
                <XAxis dataKey="category" stroke="#71717a" fontSize={11} />
                <YAxis stroke="#71717a" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px' }}
                />
                <Bar dataKey="count" fill="#6366f1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
