'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  TouristProfile,
  RiskZone,
  IncidentReport,
  SosAlert,
  RouteOption,
  DEMO_TOURIST,
  DEMO_RISK_ZONES,
  DEMO_INCIDENTS,
  DEMO_EMERGENCY_SERVICES,
  DEMO_ROUTES,
  DEMO_SOS_ALERTS,
} from './demo-data';
import { SupportedLanguage, TRANSLATIONS, TranslationDictionary } from './translations';
import { calculateVigilSafetyScore, DEFAULT_SAFETY_FACTORS, SafetyScoreResult } from './safety-score';

interface VigilContextType {
  tourist: TouristProfile;
  riskZones: RiskZone[];
  incidents: IncidentReport[];
  sosAlerts: SosAlert[];
  language: SupportedLanguage;
  t: TranslationDictionary;
  sosActive: boolean;
  demoMode: boolean;
  missedCheckInSimulated: boolean;
  checkInMinutesRemaining: number;
  activeRoute: RouteOption;
  selectedRiskZone: RiskZone | null;
  safetyScoreResult: SafetyScoreResult;
  setLanguage: (lang: SupportedLanguage) => void;
  updateTouristName: (name: string) => void;
  triggerSos: () => void;
  cancelSos: () => void;
  addIncident: (report: Omit<IncidentReport, 'id' | 'timestamp' | 'status'>) => void;
  simulateMissedCheckIn: () => void;
  resetCheckInTimer: () => void;
  setSelectedRiskZone: (zone: RiskZone | null) => void;
  setActiveRoute: (route: RouteOption) => void;
}

const VigilContext = createContext<VigilContextType | undefined>(undefined);

export const VigilProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tourist, setTourist] = useState<TouristProfile>(DEMO_TOURIST);
  const [riskZones, setRiskZones] = useState<RiskZone[]>(DEMO_RISK_ZONES);
  const [incidents, setIncidents] = useState<IncidentReport[]>(DEMO_INCIDENTS);
  const [sosAlerts, setSosAlerts] = useState<SosAlert[]>(DEMO_SOS_ALERTS);
  const [language, setLanguageState] = useState<SupportedLanguage>('en');
  const [sosActive, setSosActive] = useState<boolean>(false);
  const [demoMode, setDemoMode] = useState<boolean>(true);
  const [missedCheckInSimulated, setMissedCheckInSimulated] = useState<boolean>(false);
  const [checkInMinutesRemaining, setCheckInMinutesRemaining] = useState<number>(12);
  const [activeRoute, setActiveRoute] = useState<RouteOption>(DEMO_ROUTES[2]); // SAFEST
  const [selectedRiskZone, setSelectedRiskZone] = useState<RiskZone | null>(DEMO_RISK_ZONES[0]);

  const t = TRANSLATIONS[language];
  const safetyScoreResult = calculateVigilSafetyScore(DEFAULT_SAFETY_FACTORS);

  // Check-in timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCheckInMinutesRemaining((prev) => {
        if (prev <= 1) return 15; // Loop timer
        return prev - 1;
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
  };

  const updateTouristName = (newName: string) => {
    if (!newName.trim()) return;
    setTourist((prev) => ({ ...prev, name: newName.trim() }));
    // Update active SOS alerts name if matching ID
    setSosAlerts((prev) =>
      prev.map((alert) =>
        alert.touristId === tourist.id ? { ...alert, touristName: newName.trim() } : alert
      )
    );
  };

  const triggerSos = () => {
    setSosActive(true);
    setTourist((prev) => ({ ...prev, status: 'EMERGENCY' }));
    
    // Create new SOS alert in Authority queue
    const newAlert: SosAlert = {
      id: `SOS-${Math.floor(100 + Math.random() * 900)}`,
      touristId: tourist.id,
      touristName: tourist.name,
      nationality: tourist.nationality,
      lat: tourist.location.lat,
      lng: tourist.location.lng,
      locationName: tourist.location.address,
      timestamp: 'Just now',
      riskLevel: 'HIGH RISK',
      status: 'ALERT SENT',
      batteryLevel: 87,
      contactsNotified: tourist.contacts.length,
    };
    setSosAlerts((prev) => [newAlert, ...prev]);
  };

  const cancelSos = () => {
    setSosActive(false);
    setTourist((prev) => ({ ...prev, status: 'SAFE' }));
  };

  const addIncident = (reportData: Omit<IncidentReport, 'id' | 'timestamp' | 'status'>) => {
    const newInc: IncidentReport = {
      ...reportData,
      id: `INC-${Math.floor(10000 + Math.random() * 90000)}`,
      timestamp: 'Just now',
      status: 'UNDER REVIEW',
    };
    setIncidents((prev) => [newInc, ...prev]);
  };

  const simulateMissedCheckIn = () => {
    setMissedCheckInSimulated(true);
    setCheckInMinutesRemaining(0);
  };

  const resetCheckInTimer = () => {
    setMissedCheckInSimulated(false);
    setCheckInMinutesRemaining(15);
  };

  return (
    <VigilContext.Provider
      value={{
        tourist,
        riskZones,
        incidents,
        sosAlerts,
        language,
        t,
        sosActive,
        demoMode,
        missedCheckInSimulated,
        checkInMinutesRemaining,
        activeRoute,
        selectedRiskZone,
        safetyScoreResult,
        setLanguage,
        updateTouristName,
        triggerSos,
        cancelSos,
        addIncident,
        simulateMissedCheckIn,
        resetCheckInTimer,
        setSelectedRiskZone,
        setActiveRoute,
      }}
    >
      {children}
    </VigilContext.Provider>
  );
};

export function useVigilContext() {
  const context = useContext(VigilContext);
  if (!context) {
    throw new Error('useVigilContext must be used within a VigilProvider');
  }
  return context;
}
