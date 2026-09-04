export type SupportedLanguage = 'en' | 'hi' | 'kn' | 'ta' | 'te';

export interface TranslationDictionary {
  brandTagline: string;
  brandSecondaryTagline: string;
  navSafetyMap: string;
  navSafeRoute: string;
  navResources: string;
  navAiCopilot: string;
  navTouristId: string;
  navAuthority: string;
  navSignIn: string;
  sosButtonLabel: string;
  currentSafetyTitle: string;
  safetyScoreLabel: string;
  lowRiskBadge: string;
  moderateRiskBadge: string;
  highRiskBadge: string;
  incidentDensity: string;
  emergencyAccess: string;
  recentActivity: string;
  timeRisk: string;
  quickActionsTitle: string;
  reportIncident: string;
  activeAlertsTitle: string;
  journeyTitle: string;
  nextCheckIn: string;
  imSafeButton: string;
  aiCopilotHeader: string;
  aiPromptPlaceholder: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    brandTagline: 'Always aware. Always with you.',
    brandSecondaryTagline: 'Explore freely. Stay protected.',
    navSafetyMap: 'Safety Map',
    navSafeRoute: 'SafeRoute',
    navResources: 'Resources',
    navAiCopilot: 'AI Copilot',
    navTouristId: 'Tourist ID',
    navAuthority: 'VIGIL COMMAND',
    navSignIn: 'Sign In',
    sosButtonLabel: 'SOS',
    currentSafetyTitle: 'CURRENT SAFETY',
    safetyScoreLabel: 'SAFETY SCORE',
    lowRiskBadge: 'LOW RISK',
    moderateRiskBadge: 'MODERATE RISK',
    highRiskBadge: 'HIGH RISK',
    incidentDensity: 'Incident density',
    emergencyAccess: 'Emergency access',
    recentActivity: 'Recent activity',
    timeRisk: 'Time risk',
    quickActionsTitle: 'QUICK ACTIONS',
    reportIncident: 'REPORT INCIDENT',
    activeAlertsTitle: 'ACTIVE ALERTS',
    journeyTitle: 'CURRENT JOURNEY',
    nextCheckIn: 'NEXT CHECK-IN',
    imSafeButton: "I'M SAFE ✓",
    aiCopilotHeader: 'VIGIL AI — Safety Copilot',
    aiPromptPlaceholder: 'Ask VIGIL AI about your location or safety...',
  },
  hi: {
    brandTagline: 'हमेशा जागरूक। हमेशा आपके साथ।',
    brandSecondaryTagline: 'स्वतंत्र रूप से घूमें। सुरक्षित रहें।',
    navSafetyMap: 'सुरक्षा मानचित्र',
    navSafeRoute: 'सुरक्षित मार्ग',
    navResources: 'संसाधन',
    navAiCopilot: 'एआई सहायता',
    navTouristId: 'पर्यटक आईडी',
    navAuthority: 'विजिल कमांड',
    navSignIn: 'साइन इन',
    sosButtonLabel: 'एसओएस',
    currentSafetyTitle: 'वर्तमान सुरक्षा',
    safetyScoreLabel: 'सुरक्षा स्कोर',
    lowRiskBadge: 'कम जोखिम',
    moderateRiskBadge: 'मध्यम जोखिम',
    highRiskBadge: 'उच्च जोखिम',
    incidentDensity: 'घटना घनत्व',
    emergencyAccess: 'आपातकालीन पहुंच',
    recentActivity: 'हाल की गतिविधि',
    timeRisk: 'समय जोखिम',
    quickActionsTitle: 'त्वरित कार्रवाई',
    reportIncident: 'घटना रिपोर्ट करें',
    activeAlertsTitle: 'सक्रिय चेतावनियाँ',
    journeyTitle: 'वर्तमान यात्रा',
    nextCheckIn: 'अगला चेक-इन',
    imSafeButton: 'मैं सुरक्षित हूँ ✓',
    aiCopilotHeader: 'विजिल एआई — सुरक्षा सहायक',
    aiPromptPlaceholder: 'अपने स्थान या सुरक्षा के बारे में विजिल एआई से पूछें...',
  },
  kn: {
    brandTagline: 'ಸದಾ ಜಾಗರೂಕ. ಸದಾ ನಿಮ್ಮೊಂದಿಗೆ.',
    brandSecondaryTagline: 'ಸ್ವತಂತ್ರವಾಗಿ ಪ್ರಯಾಣಿಸಿ. ಸುರಕ್ಷಿತವಾಗಿರಿ.',
    navSafetyMap: 'ಸುರಕ್ಷತಾ ನಕ್ಷೆ',
    navSafeRoute: 'ಸುರಕ್ಷಿತ ಮಾರ್ಗ',
    navResources: 'ಸಂಪನ್ಮೂಲಗಳು',
    navAiCopilot: 'AI ಸಹಾಯಕ',
    navTouristId: 'ಪ್ರವಾಸಿ ID',
    navAuthority: 'ವಿಜಿಲ್ ಕಮಾಂಡ್',
    navSignIn: 'ಸೈನ್ ಇನ್',
    sosButtonLabel: 'SOS',
    currentSafetyTitle: 'ಪ್ರಸ್ತುತ ಸುರಕ್ಷತೆ',
    safetyScoreLabel: 'ಸುರಕ್ಷತಾ ಸ್ಕೋರ್',
    lowRiskBadge: 'ಕಡಿಮೆ ಅಪಾಯ',
    moderateRiskBadge: 'ಮಧ್ಯಮ ಅಪಾಯ',
    highRiskBadge: 'ಹೆಚ್ಚಿನ ಅಪಾಯ',
    incidentDensity: 'ಘಟನೆಗಳ ಸಾಂದ್ರತೆ',
    emergencyAccess: 'ತುರ್ತು ಲಭ್ಯತೆ',
    recentActivity: 'ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ',
    timeRisk: 'ಸಮಯದ ಅಪಾಯ',
    quickActionsTitle: 'ತ್ವರಿತ ಕ್ರಿಯೆಗಳು',
    reportIncident: 'ಘಟನೆ ವರದಿ ಮಾಡಿ',
    activeAlertsTitle: 'ಸಕ್ರಿಯ ಎಚ್ಚರಿಕೆಗಳು',
    journeyTitle: 'ಪ್ರಸ್ತುತ ಪ್ರಯಾಣ',
    nextCheckIn: 'ಮುಂದಿನ ಚೆಕ್-ಇನ್',
    imSafeButton: 'ನಾನ್ ಸುರಕ್ಷಿತ ✓',
    aiCopilotHeader: 'ವಿಜಿಲ್ AI — ಸುರಕ್ಷತಾ ಸಹಾಯಕ',
    aiPromptPlaceholder: 'ನಿಮ್ಮ ಸ್ಥಳ ಅಥವಾ ಸುರಕ್ಷತೆಯ ಬಗ್ಗೆ ವಿಜಿಲ್ AI ಯನ್ನು ಕೇಳಿ...',
  },
  ta: {
    brandTagline: 'எப்போதும் விழிப்புடன். எப்போதும் உங்களுடன்.',
    brandSecondaryTagline: 'சுதந்திரமாக பயணிக்கவும். பாதுகாப்பாக இருங்கள்.',
    navSafetyMap: 'பாதுகாப்பு வரைபடம்',
    navSafeRoute: 'பாதுகாப்பான வழி',
    navResources: 'வளங்கள்',
    navAiCopilot: 'AI உதவி',
    navTouristId: 'சுற்றுலா பயணி ID',
    navAuthority: 'விஜில் கமாண்ட்',
    navSignIn: 'உள்நுழைக',
    sosButtonLabel: 'SOS',
    currentSafetyTitle: 'தற்போதைய பாதுகாப்பு',
    safetyScoreLabel: 'பாதுகாப்பு மதிப்பெண்',
    lowRiskBadge: 'குறைந்த ஆபத்து',
    moderateRiskBadge: 'மிதமான ஆபத்து',
    highRiskBadge: 'அதிக ஆபத்து',
    incidentDensity: 'சம்பவ அடர்த்தி',
    emergencyAccess: 'அவசர அணுகல்',
    recentActivity: 'சமீபத்திய செயல்பாடு',
    timeRisk: 'நேர ஆபத்து',
    quickActionsTitle: 'விரைவு நடவடிக்கைகள்',
    reportIncident: 'சம்பவத்தைப் புகாரளிக்கவும்',
    activeAlertsTitle: 'செயலில் உள்ள எச்சரிக்கைகள்',
    journeyTitle: 'தற்போதைய பயணம்',
    nextCheckIn: 'அடுத்த செக்-இன்',
    imSafeButton: 'நான் பாதுகாப்பாக உள்ளேன் ✓',
    aiCopilotHeader: 'விஜில் AI — பாதுகாப்பு உதவி',
    aiPromptPlaceholder: 'உங்கள் இடம் அல்லது பாதுகாப்பு பற்றி விஜில் AI இடம் கேட்கவும்...',
  },
  te: {
    brandTagline: 'ఎల్లప్పుడూ అప్రమత్తం. ఎల్లప్పుడూ మీతో.',
    brandSecondaryTagline: 'స్వేచ్ఛగా ప్రయాణించండి. సురక్షితంగా ఉండండి.',
    navSafetyMap: 'రక్షణ మ్యాప్',
    navSafeRoute: 'సురక్షిత మార్గం',
    navResources: 'వనరులు',
    navAiCopilot: 'AI సహాయకుడు',
    navTouristId: 'టూరిస్ట్ ID',
    navAuthority: 'విజిల్ కమాండ్',
    navSignIn: 'సైన్ ఇన్',
    sosButtonLabel: 'SOS',
    currentSafetyTitle: 'ప్రస్తుత భద్రత',
    safetyScoreLabel: 'భద్రతా స్కోర్',
    lowRiskBadge: 'తక్కువ ప్రమాదం',
    moderateRiskBadge: 'మధ్యస్థ ప్రమాదం',
    highRiskBadge: 'అధిక ప్రమాదం',
    incidentDensity: 'సంఘటనల సాంద్రత',
    emergencyAccess: 'అత్యవసర సౌకర్యం',
    recentActivity: 'ఇటీవలి కార్యకలాపాలు',
    timeRisk: 'సమయ ప్రమాదం',
    quickActionsTitle: 'త్వరిత చర్యలు',
    reportIncident: 'సంఘటన నివేదించండి',
    activeAlertsTitle: 'సక్రియ హెచ్చరికలు',
    journeyTitle: 'ప్రస్తుత ప్రయాణం',
    nextCheckIn: 'తదుపరి చెక్-ఇన్',
    imSafeButton: 'నేను సురక్షితంగా ఉన్నాను ✓',
    aiCopilotHeader: 'విజిల్ AI — భద్రతా సహాయకుడు',
    aiPromptPlaceholder: 'మీ స్థలం లేదా భద్రత గురించి విజిల్ AI ని అడగండి...',
  },
};
