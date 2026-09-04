# VIGIL — Always aware. Always with you.

> **Secondary Tagline**: Explore freely. Stay protected.
> **Product Vision**: AI-powered tourist safety ecosystem connecting: **TOURIST → LOCATION INTELLIGENCE → AI RISK ANALYSIS → EMERGENCY RESPONSE → AUTHORITIES**

---

## 🛡️ Problem

Tourism worldwide faces critical safety challenges:
1. **Navigational Blindness**: Tourists often unknowingly walk into high-risk alleyways or crime hotspots.
2. **Emergency Friction**: Delayed SOS response due to lack of real-time GPS location sharing and identity verification.
3. **Information Asymmetry**: Authorities lack predictive spatio-temporal risk modeling to deploy patrols effectively before incidents escalate.

---

## ⚡ Solution

**VIGIL** transforms raw location, incident, and emergency telemetry into real-time safety intelligence for both travelers and authorities:

- **For Tourists**: Real-time surround scanning, transparent safety scoring (VIGIL Safety Index), context-aware AI Safety Copilot, SafeRoute navigation, QR digital identity, and 1-touch emergency SOS.
- **For Authorities**: VIGIL COMMAND operations center, live SOS dispatch queue, automated missed check-in alerts, AI hotspot detection, and statistical safety analytics.

---

## ✨ Features

### 🧳 Tourist Suite
- **Interactive Safety Map**: Geospatial heatmaps highlighting low, moderate, and high-risk zones with real-time incident pins and emergency service locations.
- **VIGIL Demo Safety Index**: Transparent 0-100 score calculated from incident density (18%), emergency access (92%), recent activity (12%), and time risk (20%).
- **VIGIL SafeRoute Engine**: Safety-aware route recommendation comparing **FASTEST** (18m, safety 48), **BALANCED** (21m, safety 71), and **SAFEST** (24m, safety 94).
- **VIGIL AI — Safety Copilot**: Context-aware assistant providing visual risk assessments, nearest police & hospital distances, and actionable guidance.
- **Digital Tourist ID**: Cryptographic QR identity badge verified by Karnataka Tourism (`/verify/VG-284921`).
- **1-Touch SOS Emergency**: 3-second countdown hold with live GPS broadcast, emergency contact notifications, and authority alert.
- **Safety Circle & Journey Sharing**: Real-time link generator broadcasting live ETA and protection status to family members.
- **Safety Check-in Engine**: Periodic status timer with automated missed check-in escalation to VIGIL COMMAND.
- **Community Incident Reporting**: Form with auto-captured GPS coordinates, media upload simulation, and severity classification.
- **Multilingual Support**: Real-time translation dictionary for English, Hindi (हिंदी), Kannada (ಕನ್ನಡ), Tamil (தமிழ்), and Telugu (తెలుగు).

### 🚓 Authority Operations (VIGIL COMMAND)
- **Emergency Operations Center (`/authority`)**: Live SOS alert queue, active tourist volume, high-risk sector count, and dispatch triggers.
- **AI Hotspot Intelligence (`/authority/intelligence`)**: Spatio-temporal cluster detection (e.g. +34% surge detection) with automated patrol dispatch recommendations.
- **Safety Analytics (`/authority/analytics`)**: Recharts graphs analyzing incident trends over time, categories, and response speed metrics.
- **Tourist Profile Inspector**: Verified passport hash lookup, emergency contact review, and GPS telemetry trace.

---

## 🚀 Pracheet Demo Scenario Story Path

VIGIL is built around a complete guided demo story:
1. Pracheet arrives in Bengaluru and opens his VIGIL Digital ID (`/id`).
2. Location intelligence automatically locks GPS (`Near MG Road`).
3. VIGIL calculates his Safety Index (**87/100 LOW RISK**).
4. Pracheet explores the interactive Safety Map (`/map`).
5. VIGIL flags **MG Road** (Score 72, MODERATE RISK).
6. Pracheet asks VIGIL AI Copilot: *"Is it safe to visit this area tonight?"* (`/copilot`).
7. AI explains evening theft risk and recommends taking western monitored routes.
8. Pracheet opens SafeRoute engine comparing Fastest vs Safest (`/saferoute`).
9. Pracheet selects the **SAFEST** route (24 min, score 94).
10. Pracheet shares his live journey link with his Safety Circle (`/circle`).
11. Pracheet reports a suspicious incident (`/report`).
12. Pracheet triggers emergency SOS (`/sos`).
13. Live location & tourist payload is transmitted.
14. VIGIL COMMAND receives the active SOS alert (`/authority`).
15. Authority opens Pracheet’s verified profile.
16. Incident #INC-82931 is officially cataloged.
17. VIGIL Intelligence detects +34% incident surge and suggests patrol deployment (`/authority/intelligence`).
18. Authority dispatches Mobile Patrol Unit #4 to MG Road Junction.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Custom Dark Glassmorphism Design Tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data Visualization**: Recharts
- **QR Engine**: `qrcode.react`
- **AI Integration**: Gemini 1.5 Flash API + VIGIL Contextual Local AI Engine Fallback

---

## 💻 Running Locally

### Prerequisites
- Node.js v18.0.0+
- npm v9.0.0+

### Step-by-Step Setup

```bash
# Clone the repository
git clone https://github.com/your-username/vigil.git
cd vigil

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

The application runs natively in **DEMO MODE** without requiring API keys. Optionally add a Gemini API key:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

---

## 🔒 Privacy Guarantee

- Tourist location telemetry is transmitted **only** during active journey sharing or emergency SOS mode.
- Cryptographic identity hashes prevent public exposure of sensitive passport details.

---

**VIGIL** — *Always aware. Always with you.*
