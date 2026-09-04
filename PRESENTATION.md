# 📊 VIGIL — Official Presentation (PPT Slide-by-Slide Guide)

> **Track**: Tourist Safety Platform  
> **Event**: Nexora — The Vibe-Coding Club (NITTE Deemed to be University) Round 2  
> **Candidate**: Pracheet  
> **Generated PPT File**: `VIGIL_Presentation.pptx` (located in project root)

---

## 🖥️ Slide 1: Title Slide
- **Title**: VIGIL
- **Subtitle**: ALWAYS AWARE. ALWAYS WITH YOU.
- **Track**: AI-Powered Tourist Safety & Location Intelligence Platform
- **Submission Context**: Nexora Round 2 Task • Tourist Safety Platform
- **Candidate Name**: Pracheet

---

## 🚨 Slide 2: Project Overview & The Problem Being Addressed

### 1. Navigational Blindness
- Solo travelers and tourists unfamiliar with foreign cities unknowingly wander into dimly lit side alleys and high-risk crime zones after dusk.

### 2. High Emergency Response Friction
- In traditional emergency situations, travelers panic, making it difficult to transmit accurate GPS coordinates or cryptographic identity data to local police.

### 3. Authority Information Asymmetry
- State law enforcement and emergency response centers lack predictive spatio-temporal risk models to deploy patrols before crime surges occur.

---

## ⚡ Slide 3: How VIGIL Solves the Problem

```
[ TOURIST ] ➔ [ LOCATION INTELLIGENCE ] ➔ [ AI RISK ANALYSIS ] ➔ [ EMERGENCY RESPONSE ] ➔ [ AUTHORITIES ]
```

- **Tourist Safety Suite**: Real-time sector risk heatmaps, transparent 0–100 safety scoring, QR digital identity, and 1-touch emergency SOS.
- **VIGIL SafeRoute Navigation**: Safety-aware route engine balancing transit speed against crime heatmaps & CCTV lighting corridors.
- **VIGIL COMMAND Operations Center**: State law enforcement portal to monitor active SOS alerts, inspect verified tourist credentials, and triage incidents.
- **AI Hotspot Intelligence**: Predicts emerging crime hotspots (+34% surge analysis) and recommends targeted mobile patrol deployment.

---

## 📱 Slide 4: Main Features & User Experience

- **Interactive Dark Safety Map (`/map`)**: Leaflet geospatial canvas showing 🟢 Low, 🟡 Moderate, 🔴 High risk sectors and clickable incident drawers.
- **VIGIL Safety Index (87/100)**: Transparent score calculated from Incident Density (18%), Emergency Access (92%), Recent Activity (12%), and Time Risk (20%).
- **Digital Tourist ID & QR (`/id`, `/verify/VG-284921`)**: Cryptographic QR identity badge verified by Karnataka Tourism Authority.
- **1-Touch Emergency SOS (`/sos`)**: 3-second countdown hold preventing accidental triggers, broadcasting live GPS telemetry directly to VIGIL COMMAND.

---

## 🤖 Slide 5: AI & ML Features Implemented

1. **VIGIL AI Safety Copilot (`/copilot`)**:
   - Context-aware AI assistant powered by Gemini 1.5 Flash API (with an intelligent local fallback).
   - Understands tourist GPS position, safety index, and hospital distances to provide structured visual advice.
2. **VIGIL SafeRoute Engine (`/saferoute`)**:
   - Safety-aware routing engine comparing **FASTEST** (18m, score 48), **BALANCED** (21m, score 71), and **SAFEST** (**24m, score 94** - avoiding 2 risk zones and passing 3 police kiosks).
3. **AI Hotspot Intelligence (`/authority/intelligence`)**:
   - Spatio-temporal cluster analysis detecting +34% incident surges and recommending mobile patrol unit deployment.

---

## 🚓 Slide 6: Authority Operations — VIGIL COMMAND (`/authority`)

- **Top Metrics Overview**: Real-time monitoring of 03 Active SOS alerts, 27 Incidents, 1,284 Monitored Tourists, and 08 High-Risk Sectors.
- **Active SOS Triage Queue**: Allows emergency dispatchers to view live GPS coordinates, call tourists directly, or inspect verified credentials.
- **Tourist Profile Inspector**: Displays passport hash, emergency contacts, journey history, and last known check-in status.
- **Recharts Analytics Suite (`/authority/analytics`)**: Visualizes 24-hour incident density trends, category distribution (Theft, Harassment), and average response time (**4.2 mins**).

---

## 🛠️ Slide 7: Tech Stack, Tools, Libraries & APIs Used

- **Frontend Framework**: Next.js 14 (App Router), React 18, TypeScript
- **Styling & Design System**: Tailwind CSS, Custom Dark Glassmorphic Design Tokens
- **Animations & Icons**: Framer Motion, Lucide React
- **Data Visualization**: Recharts
- **Geospatial Map Engine**: Leaflet (Dark CartoDB Tiles Canvas)
- **Identity & QR**: `qrcode.react`
- **Audio Synthesizer**: Web Audio API (Procedural Sonar Pings & Alarms)
- **AI API**: Gemini 1.5 Flash API + VIGIL Local Intelligence Fallback Engine

---

## 🌟 Slide 8: Unique & Additional Features Implemented

- **Zero-Dependency Demo Mode**: Runs 100% locally without requiring external API keys or Mapbox/Supabase infrastructure.
- **Recruiter Fast-Track Mode**: Includes an on-screen Nexora requirement audit checklist and 1-click feature teleport links.
- **Procedural Sound Synth**: Uses Web Audio API to synthesize real-time radar sonar pings, AI tones, and SOS alarms.
- **Multilingual Support**: Supports English, Hindi (हिंदी), Kannada (ಕನ್ನಡ), Tamil (தமிழ்), and Telugu (తెలుగు) for emergency alerts.
- **Automated Check-In Escalation**: 15-minute countdown timer that automatically alerts Authority Command if missed.

---

## 🎬 Slide 9: Demo Walkthrough — The Pracheet Scenario

1. Pracheet arrives in Bengaluru and generates Digital Tourist ID (`/id`).
2. VIGIL detects location & calculates **87/100 LOW RISK** Safety Score (`/dashboard`).
3. Pracheet inspects MG Road (72 Moderate Risk) on Safety Map (`/map`).
4. Asks VIGIL AI: *"Is it safe to visit this area tonight?"* (`/copilot`).
5. Selects **SAFEST** Route (24m, score 94) avoiding 2 risk zones (`/saferoute`).
6. Triggers SOS emergency (`/sos`) -> VIGIL COMMAND receives alert (`/authority`).
7. AI Hotspot Intelligence detects +34% surge -> Authority dispatches Patrol Unit #4.

---

## 💡 Slide 10: Important Design & Implementation Decisions

1. **Dark Cybersecurity Command Center Palette**: Designed to look like a serious startup product (Palantir × Apple) rather than a generic student template.
2. **Restrained Color Discipline**: Red is reserved strictly for genuine emergencies; Amber for warnings; Green for safe states.
3. **Privacy First**: Location telemetry is transmitted **only** during active journey sharing or emergency SOS mode.

---

## 🔗 Project Links & Commands

- **Local Dev URL**: `http://localhost:3000` (or `http://localhost:3003`)
- **Generated PowerPoint File**: `VIGIL_Presentation.pptx`
- **Git Commit Hash**: Clean commit on branch `main`
