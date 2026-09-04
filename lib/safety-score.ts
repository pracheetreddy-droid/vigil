export interface SafetyFactors {
  incidentDensity: number; // 0-100 (lower is better risk)
  emergencyAccess: number; // 0-100 (higher is better access)
  recentActivity: number;  // 0-100 (lower is better)
  timeRisk: number;        // 0-100 (lower is better)
}

export interface SafetyScoreResult {
  score: number;
  level: 'SAFE' | 'LOW RISK' | 'MODERATE RISK' | 'HIGH RISK' | 'CRITICAL';
  factors: SafetyFactors;
  colorClass: string;
  badgeBg: string;
  disclaimer: string;
  summaryText: string;
}

export function calculateVigilSafetyScore(factors: SafetyFactors): SafetyScoreResult {
  // Composite score calculation:
  // Emergency Access is positive (+0.35 weight)
  // Incident Density is penalty (-0.25 weight)
  // Recent Activity is penalty (-0.20 weight)
  // Time Risk is penalty (-0.20 weight)

  const weightedScore = Math.round(
    (factors.emergencyAccess * 0.40) +
    ((100 - factors.incidentDensity) * 0.25) +
    ((100 - factors.recentActivity) * 0.20) +
    ((100 - factors.timeRisk) * 0.15)
  );

  const clampedScore = Math.max(10, Math.min(99, weightedScore));

  let level: SafetyScoreResult['level'] = 'LOW RISK';
  let colorClass = 'text-emerald-400';
  let badgeBg = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
  let summaryText = 'Environment monitored. Safe walking conditions and high emergency coverage detected.';

  if (clampedScore >= 85) {
    level = 'LOW RISK';
    colorClass = 'text-emerald-400';
    badgeBg = 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400';
  } else if (clampedScore >= 65) {
    level = 'MODERATE RISK';
    colorClass = 'text-amber-400';
    badgeBg = 'bg-amber-500/15 border-amber-500/30 text-amber-400';
    summaryText = 'Increased incident activity detected in vicinity. Exercise normal urban vigilance.';
  } else if (clampedScore >= 45) {
    level = 'HIGH RISK';
    colorClass = 'text-red-400';
    badgeBg = 'bg-red-500/15 border-red-500/30 text-red-400';
    summaryText = 'High risk factors detected. Stay on monitored arterial roads and keep check-ins active.';
  } else {
    level = 'CRITICAL';
    colorClass = 'text-red-500 font-bold animate-pulse';
    badgeBg = 'bg-red-600/20 border-red-600/50 text-red-500';
    summaryText = 'Critical safety threshold exceeded. Immediate authority notification recommended.';
  }

  return {
    score: clampedScore,
    level,
    factors,
    colorClass,
    badgeBg,
    disclaimer: 'VIGIL DEMO SAFETY INDEX — Calculated from location signals, incident density & emergency proximity.',
    summaryText,
  };
}

export const DEFAULT_SAFETY_FACTORS: SafetyFactors = {
  incidentDensity: 18,
  emergencyAccess: 92,
  recentActivity: 12,
  timeRisk: 20,
};
