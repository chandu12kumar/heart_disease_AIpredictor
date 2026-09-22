export const translations = {
  en: {
    // Navigation & Global
    nav: {
      brandSub: 'Heart Health Screening',
      home: 'Home',
      predict: 'Check Risk',
      recoveryGuide: 'Recovery Guide',
      about: 'About',
      checkYourRisk: 'Check Your Risk',
      lightMode: 'Switch to Light Mode',
      darkMode: 'Switch to Dark Mode',
      language: 'Language',
    },

    // Home Page
    home: {
      heroBadge: 'Heart Health Check • Free & Confidential',
      heroTitle1: 'Check and Protect Your',
      heroTitle2: 'Heart Health',
      heroSubtitle: 'Check your personal heart risk in under 2 minutes using everyday test numbers like blood pressure and cholesterol — with clear, doctor-backed steps you can take today.',
      ctaCheckRisk: 'Check Your Risk Free',
      ctaRecoveryGuide: 'Heart Recovery Guide',
      disclaimerNote: 'For informational screening only — not a substitute for clinical medical diagnosis.',
      trust1: 'Takes Under 2 Minutes',
      trust2: '100% Private (No Account Needed)',
      trust3: 'Easy to Share with Your Doctor',
      badgeHolo: 'Clinical Data Analysis',
      badgeVitals: '15 Vital Heart Signals',

      // Recovery Spotlight on Home
      recoverySpotlightBadge: 'Heart Care & Daily Recovery',
      recoverySpotlightTitle: 'Living with Heart Disease? Practical Steps to Feel Stronger.',
      recoverySpotlightDesc: 'Simple, doctor-backed habits that help rebuild stamina, protect your arteries, and give you peace of mind every single day.',
      recoveryPillar1Title: 'Take Medicines Faithfully',
      recoveryPillar1Desc: 'Take your blood pressure, statin, or heart medications consistently. Never stop or change doses without asking your doctor.',
      recoveryPillar2Title: 'Eat for a Stronger Heart',
      recoveryPillar2Desc: 'Cut back on excess salt and deep-fried foods. Enjoy more leafy greens, garlic, oats, and healthy heart-friendly fats.',
      recoveryPillar3Title: 'Safe, Gentle Movement',
      recoveryPillar3Desc: 'Start with an easy 15–20 minute daily walk and slow breathing exercises. Always listen to your body and avoid strain.',
      readFullRecovery: 'Read the Full Recovery Guide',

      // Features section
      featuresTitle: 'Simple, Honest Heart Screening',
      featuresSubtitle: 'Designed to give you clear, reassuring answers without confusing jargon, hidden tracking, or data collection.',
      feat1Title: 'Built on Real Patient Records',
      feat1Desc: 'Analyzes 15 standard health indicators commonly checked during routine physical exams and lab visits.',
      feat2Title: 'Completely Private & Free',
      feat2Desc: 'No login, no name, and no phone number. Your test numbers stay in your browser and are never saved or shared.',
      feat3Title: 'Doctor-Ready Summary',
      feat3Desc: 'Clear, straightforward results designed to help you start an informed conversation with your doctor.',

      // CTA Banner
      bannerTitle: 'Know Where Your Heart Stands Today',
      bannerSubtitle: 'Taking a couple of minutes to check your numbers can give you the clarity and confidence to protect your health.',
      bannerBtn: 'Start Your Free Check',
    },

    // Prediction Form
    form: {
      title: 'Heart Health Risk Assessment',
      subtitle: 'Enter your clinical indicators below to calculate your risk category using our trained KNN pipeline.',
      presetsLabel: 'Quick Test Presets:',
      presetHealthy: 'Healthy Sample',
      presetElevated: 'Elevated Risk Sample',
      loadingMsg: 'Analyzing your health numbers against clinical records...',

      sec1Title: '1. Demographic Information',
      sec1Sub: 'Basic physiological variables',
      ageLabel: 'Age (Years)',
      agePlaceholder: 'e.g. 54',
      ageHelper: 'Valid range: 18 to 120 years',
      sexLabel: 'Sex Assigned at Birth',
      male: 'Male',
      female: 'Female',
      sexHelper: 'Used for cardiovascular baseline adjustment',

      sec2Title: '2. Clinical Health Measurements',
      sec2Sub: 'Standard medical vitals & blood chemistry',
      restingBPLabel: 'Resting Blood Pressure (mm Hg)',
      restingBPHelper: 'Normal resting value is typically under 120/80 mm Hg',
      cholesterolLabel: 'Serum Cholesterol (mg/dL)',
      cholesterolHelper: 'Total fasting blood cholesterol from lipid test',
      fastingBSLabel: 'Fasting Blood Sugar > 120 mg/dL',
      fastingBSNo: 'No (≤ 120 mg/dL — Normal fasting blood glucose)',
      fastingBSYes: 'Yes (> 120 mg/dL — Diabetic / Pre-diabetic threshold)',
      fastingBSHelper: 'Measured after 8+ hours of fasting',
      maxHRLabel: 'Maximum Heart Rate Achieved (bpm)',
      maxHRHelper: 'Peak beats per minute during physical exertion or stress test',

      sec3Title: '3. Symptoms & Electrocardiogram (ECG)',
      sec3Sub: 'Diagnostic ECG indicators and ischemic markers',
      chestPainLabel: 'Chest Pain Classification',
      cpASY: 'Asymptomatic (ASY) — No chest pain or discomfort reported',
      cpATA: 'Atypical Angina (ATA) — Discomfort not fitting classic angina',
      cpNAP: 'Non-Anginal Pain (NAP) — Sharp or fleeting pain unrelated to heart flow',
      cpTA: 'Typical Angina (TA) — Substernal pressure triggered by exertion/stress',

      restingECGLabel: 'Resting Electrocardiogram (ECG)',
      ecgNormal: 'Normal — No pathological ST-T wave abnormalities',
      ecgST: 'ST-T Wave Abnormality — T wave inversion or ST displacement',
      ecgLVH: 'Left Ventricular Hypertrophy (LVH) — Voltage criteria present',

      exAnginaLabel: 'Exercise-Induced Angina',
      exAnginaNo: 'No — Exercise does not provoke cardiac chest tightening',
      exAnginaYes: 'Yes — Physical exertion triggers chest pressure or angina',

      oldpeakLabel: 'ST Depression / Oldpeak (mm)',
      oldpeakHelper: 'Depression in ST segment during exertion relative to rest',

      stSlopeLabel: 'Peak Exercise ST Segment Slope',
      stSlopeUp: 'Upsloping — Typical healthy cardiac response to exercise',
      stSlopeFlat: 'Flat — Borderline ischemic / reduced blood flow indicator',
      stSlopeDown: 'Downsloping — Significant indicator of myocardial ischemia',

      privacyNotice: 'Privacy Promise: No personal identity data is collected, stored, or sold. Health metrics are strictly processed for this single risk score.',
      submitBtn: 'Predict Heart Disease Risk',

      // Validation
      errors: {
        ageReq: 'Please enter your age.',
        ageRange: 'Age must be between 18 and 120.',
        bpReq: 'Please enter resting blood pressure.',
        bpRange: 'Realistic value required (50–260 mm Hg).',
        cholReq: 'Please enter serum cholesterol.',
        cholRange: 'Realistic value required (50–700 mg/dL).',
        hrReq: 'Please enter maximum heart rate.',
        hrRange: 'Realistic value required (40–250 bpm).',
        oldpeakReq: 'Please enter ST depression (Oldpeak).',
        oldpeakRange: 'Oldpeak value typically ranges from -3.0 to 7.0 mm.',
      }
    },

    // Results & Risk Card
    result: {
      backBtn: 'Back to Prediction Form',
      demoBadge: 'Demonstration / Preview Result',
      elevatedBadge: 'Elevated Risk Indicated',
      lowRiskBadge: 'Lower Predicted Risk',
      classificationHeader: 'Risk Assessment Classification',
      knnSub: 'KNN Model Evaluation (K=5)',
      elevatedHeadline: 'Elevated Cardiovascular Risk Detected',
      lowRiskHeadline: 'Lower Predicted Cardiovascular Risk',
      elevatedDesc: 'Based on your submitted numbers, there are indicators of elevated risk. We recommend scheduling a follow-up with your doctor or cardiologist to review these results in detail.',
      lowRiskDesc: 'Based on your submitted numbers, your current risk indicators appear low. Keep supporting your heart with healthy nutrition, daily movement, and routine checkups.',
      printBtn: 'Print / Save Report',
      retestBtn: 'New Assessment',
      modelMetric: 'Model Classification Metric',
      modelProbability: 'Calculated Risk Confidence:',
      gaugeNotice: 'Based on similarity to historical health records, indicating general risk patterns rather than an individual prognosis.',
      mandatoryNotice: 'Important Health Notice:',
      mandatoryNoticeBody: 'This result is an informational screening estimate, not a medical diagnosis. Please consult a qualified doctor for personal medical advice or before making changes to prescribed medicines.',
      mandatoryNoticeLow: 'A lower risk result does not rule out heart conditions. Maintain routine checkups and a healthy lifestyle.',

      // Conditional Recovery Section on High Risk
      recoverySectionTitle: 'Action Plan: How to Recover & Protect Your Heart',
      recoverySectionSub: 'Since your screening indicates elevated risk factors, following these recovery and preventative protocols is crucial.',
      rec1Title: '1. Immediate Doctor Consultation',
      rec1Text: 'Schedule an in-depth appointment with a cardiologist. Request an ECG, 2D Echocardiogram, and comprehensive lipid profile.',
      rec2Title: '2. Strict Medication Adherence',
      rec2Text: 'If prescribed blood pressure, cholesterol (statins), or blood thinner medications, never skip a dose without medical supervision.',
      rec3Title: '3. Low Sodium & Heart-Safe Diet',
      rec3Text: 'Cut daily salt to under 2,000 mg (1 teaspoon). Eliminate deep-fried items, refined sugars, and trans fats. Focus on leafy vegetables and garlic.',
      rec4Title: '4. Supervised Gentle Cardio',
      rec4Text: 'Start with 20-30 minutes of gentle walking on flat surfaces. Stop immediately if you experience breathlessness or chest tightness.',
      rec5Title: '5. Stop Smoking & Manage Stress',
      rec5Text: 'Completely eliminate cigarettes, bidi, and tobacco. Practice 15 minutes of deep belly breathing or Pranayama daily.',
      recFullBtn: 'Read Full Heart Disease Recovery Guide',

      // No result fallback
      notFoundTitle: 'No Assessment Result Found',
      notFoundSub: 'Please enter your clinical parameters on the form to compute an AI risk assessment.',
      notFoundBtn: 'Go to Assessment Form',
      sampleDemoBtn: 'View Sample Demo Result',
    },

    // Dedicated Heart Disease Recovery Page
    recovery: {
      tag: 'Cardiovascular Rehabilitation & Care',
      title: 'How to Recover from Heart Disease',
      subtitle: 'A comprehensive, evidence-based lifestyle and clinical guide for individuals diagnosed with heart disease, elevated risk, or recovering from cardiac events.',
      introTitle: 'Heart Disease Is Manageable & Reversible with the Right Steps',
      introText: 'A heart disease diagnosis or high risk result can feel overwhelming, but modern cardiology combined with proactive lifestyle changes can stabilize plaque, restore cardiac stamina, dramatically reduce future heart attack risk, and improve your quality of life.',

      stage1Title: 'Step 1: Clinical Management & Medical Adherence',
      stage1Tag: 'Foundation of Recovery',
      stage1Items: [
        {
          heading: 'Never Discontinue Prescribed Medications',
          text: 'Statins (cholesterol lowering), Beta-blockers (heart rate regulation), ACE inhibitors/ARBs (blood pressure control), and antiplatelets (Aspirin/Clopidogrel) protect your heart every single day. Discontinuing them suddenly causes rebound risks.'
        },
        {
          heading: 'Regular Monitoring & Cardiologist Follow-ups',
          text: 'Keep a daily log of resting blood pressure and pulse. Schedule follow-ups every 3 to 6 months including ECG, Echocardiogram, HbA1c, and lipid panels.'
        },
        {
          heading: 'Know Your Critical Targets',
          text: 'Work with your doctor to maintain: Blood pressure < 130/80 mm Hg, LDL cholesterol < 70 mg/dL (or < 55 mg/dL for high risk), and Fasting blood sugar < 100 mg/dL.'
        }
      ],

      stage2Title: 'Step 2: Nutrition for Reversing Plaque & Lowering Pressure',
      stage2Tag: 'Cardio-Protective Diet',
      stage2Items: [
        {
          heading: 'Strict Sodium Limitation (< 2,000 mg/day)',
          text: 'Excess sodium retains fluid and strains artery walls. Avoid pickles, papads, processed snacks, canned soups, and added table salt.'
        },
        {
          heading: 'Eliminate Trans Fats & Reheated Cooking Oils',
          text: 'Completely avoid fried street foods, bakery puff pastries, and hydrogenated vegetable oils (vanaspati). Cook with minimal cold-pressed mustard oil, olive oil, or sunflower oil.'
        },
        {
          heading: 'Superfoods for Arterial Health',
          text: 'Consume raw crushed garlic (contains allicin to relax arteries), rolled oats (soluble beta-glucan binds cholesterol), walnuts and flaxseeds (omega-3 fatty acids), spinach, and fenugreek (methi).'
        },
        {
          heading: 'Portion Control & Weight Optimization',
          text: 'Eat small, frequent meals rather than heavy dinners to prevent post-meal cardiac output strain. Target a healthy BMI (18.5 - 24.9) and waist circumference under 90 cm (men) / 80 cm (women).'
        }
      ],

      stage3Title: 'Step 3: Safe Cardiac Rehabilitation & Exercise',
      stage3Tag: 'Restoring Physical Stamina',
      stage3Items: [
        {
          heading: 'Start with Low-Intensity Gradual Walking',
          text: 'Begin with 10 to 15 minutes of slow flat-surface walking daily. As your tolerance builds without fatigue, gradually advance toward 30 minutes 5 days a week.'
        },
        {
          heading: 'The "Talk Test" Boundary',
          text: 'While exercising, you should always be able to speak a full sentence comfortably. If you become too breathless to talk, slow down and rest.'
        },
        {
          heading: 'Avoid Heavy Isometric Straining & Weight Lifting',
          text: 'Avoid lifting heavy weights, pushing stalled vehicles, or sudden sprinting, as these cause dramatic spikes in intrathoracic and blood pressure.'
        },
        {
          heading: 'Cardiopulmonary Breathing & Pranayama',
          text: 'Practice 15 minutes of gentle Anulom-Vilom (alternate nostril breathing) and slow diaphragmatic breathing to stimulate the parasympathetic nervous system and lower heart rate.'
        }
      ],

      stage4Title: 'Step 4: Eliminating Toxins, Stress & Sleep Hygiene',
      stage4Tag: 'Holistic Vascular Recovery',
      stage4Items: [
        {
          heading: 'Absolute Zero Tobacco & Smoking',
          text: 'Cigarettes, bidi, hookahs, and gutkha constrict coronary arteries within seconds and damage blood vessel lining. Complete cessation cuts heart attack risk by 50% within one year.'
        },
        {
          heading: '7 to 8 Hours of Deep Restorative Sleep',
          text: 'During deep REM and slow-wave sleep, nocturnal blood pressure dips, giving your heart muscle a chance to recover. Avoid screen time 1 hour before bed.'
        },
        {
          heading: 'Check for Sleep Apnea (Snoring & Fatigue)',
          text: 'Obstructive sleep apnea causes intermittent nighttime oxygen drops that severely strain heart chambers. Consult a doctor if you snore heavily or wake up unrefreshed.'
        },
        {
          heading: 'Stress Reduction & Cortisol Management',
          text: 'Chronic mental stress raises adrenaline and cortisol, promoting arterial inflammation. Engage in mindfulness, spend time with loved ones, and reduce work pressure.'
        }
      ],

      emergencyHeading: 'Warning Signs: When to Seek Immediate Hospital Care',
      emergencyDesc: 'If you or a loved one with heart disease experience any of the following, do not take home remedies — call an ambulance or go to the nearest emergency room immediately:',
      redFlag1: 'Heavy pressure, tightness, or burning in center of chest lasting > 5 minutes',
      redFlag2: 'Pain or numbness radiating to left arm, back, neck, or jaw',
      redFlag3: 'Sudden cold sweat with shortness of breath or dizziness',
      redFlag4: 'Unexplained fainting (syncope) or severe irregular heartbeat',

      doctorDisclaimer: 'Clinical Notice: This recovery guide is educational. Always tailor your physical activity and dietary regimen under the explicit supervision of your treating cardiologist.'
    },

    // About Page
    about: {
      badge: 'Academic Project Overview',
      title: 'About CardioGuard AI',
      subtitle: 'An educational, privacy-focused machine learning application designed to illustrate multidimensional cardiovascular risk screening.',
      missionTitle: 'Project Mission & Purpose',
      missionP1: 'CardioGuard AI is built to demonstrate how clinical observations can be processed with machine learning to identify cardiovascular risk early.',
      missionP2: 'Using Scikit-learn’s StandardScaler and K-Nearest Neighbors (KNN), the system maps 15 physiological features into mathematical distance space, comparing user vitals with validated clinical risk cohorts.',
      disclaimerTitle: 'Strict Clinical Disclaimer',
      disclaimerP1: 'This web application is strictly for educational purposes and does not formulate a medical diagnosis or predict individual heart attacks with certainty.',
      disclaimerP2: 'Always consult a qualified cardiologist for medical advice, 12-lead ECG, cardiac echocardiogram, and blood testing.',
      architectureTitle: 'Model Architecture & Pipeline',
      archP1: 'Supervised K-Nearest Neighbors Classifier (K=5) evaluated with Minkowski distance metric and uniform weighting over 15 normalized dimensions:',
      privacyTitle: 'User Privacy & Ethics Guarantee',
      priv1: 'Zero Account Requirement — Use anonymously without sign-up or passwords.',
      priv2: 'Zero Personal Identifiers — We never ask for names, phone numbers, or government IDs.',
      priv3: 'Zero Data Retention — Input measurements are analyzed in memory only.',
    },

    // Footer
    footer: {
      tagline: 'Educational machine learning heart-disease screening and comprehensive recovery guidance.',
      privacyTag: 'Zero-login required • Privacy conscious • No personal data retained',
      navHeader: 'Navigation',
      home: 'Home',
      predict: 'Risk Assessment',
      recoveryGuide: 'Recovery Guide',
      about: 'About Project',
      disclaimerHeader: 'Medical Notice',
      disclaimerBody: 'Educational tool only. Does not replace professional clinical evaluation or diagnose heart conditions.',
      copyright: '© 2026 CardioGuard AI. All rights reserved. Academic & Educational Screening Platform.',
      privacyLink: 'Privacy Ethics',
      clinicalLink: 'Clinical Background',
    }
  },

  hi: {
    // Navigation & Global
    nav: {
      brandSub: 'हृदय स्वास्थ्य जांच',
      home: 'मुख्य पृष्ठ',
      predict: 'जोखिम जांचें',
      recoveryGuide: 'रिकवरी गाइड',
      about: 'हमारे बारे में',
      checkYourRisk: 'अपनी जांच करें',
      lightMode: 'लाइट मोड चालू करें',
      darkMode: 'डार्क मोड चालू करें',
      language: 'भाषा',
    },

    // Home Page
    home: {
      heroBadge: 'हृदय स्वास्थ्य जांच • पूर्णतः निःशुल्क व गोपनीय',
      heroTitle1: 'अपने दिल की सेहत को',
      heroTitle2: 'समझें और सुरक्षित रखें',
      heroSubtitle: 'ब्लड प्रेशर, कोलेस्ट्रॉल और हृदय गति जैसे सामान्य जांच आंकड़ों के आधार पर मात्र 2 मिनट में अपने हृदय स्वास्थ्य का आकलन करें और दिल को मजबूत बनाने के आसान उपाय जानें।',
      ctaCheckRisk: 'मुफ्त जांच शुरू करें',
      ctaRecoveryGuide: 'हृदय रिकवरी गाइड',
      disclaimerNote: 'केवल प्राथमिक जानकारी व जागरूकता के लिए — यह किसी डॉक्टर के निदान (डायग्नोसिस) का विकल्प नहीं है।',
      trust1: 'सिर्फ 2 मिनट का समय',
      trust2: '100% निजी (बिना किसी लॉगिन के)',
      trust3: 'डॉक्टर से चर्चा के अनुकूल',
      badgeHolo: 'क्लिनिकल डेटा आधारित',
      badgeVitals: '15 महत्वपूर्ण स्वास्थ्य संकेत',

      // Recovery Spotlight on Home
      recoverySpotlightBadge: 'दैनिक देखभाल व सुधार',
      recoverySpotlightTitle: 'यदि हृदय संबंधी समस्या है, तो स्वास्थ्य कैसे सुधारें?',
      recoverySpotlightDesc: 'धमनियों को सुरक्षित रखने, स्टैमिना वापस पाने और दिल को मजबूत बनाने के लिए सरल, व्यावहारिक और सुरक्षित उपाय।',
      recoveryPillar1Title: 'दवाइयों का नियमित सेवन',
      recoveryPillar1Desc: 'बीपी, कोलेस्ट्रॉल और हृदय संबंधी दवाएं हमेशा समय पर लें। बिना डॉक्टर की सलाह के कभी बंद न करें।',
      recoveryPillar2Title: 'दिल के लिए सही खानपान',
      recoveryPillar2Desc: 'नमक और तली-भुनी चीजों को कम करें। हरी सब्जियां, फल, लहसुन, ओट्स और पौष्टिक आहार अपनाएं।',
      recoveryPillar3Title: 'हल्का व नियमित व्यायाम',
      recoveryPillar3Desc: 'रोजाना 15-20 मिनट की आसान वॉक और गहरी सांस (प्राणायाम) से शुरुआत करें। अत्यधिक थकान से बचें।',
      readFullRecovery: 'पूरी रिकवरी गाइड देखें',

      // Features section
      featuresTitle: 'स्पष्ट, सुरक्षित और आसान स्वास्थ्य जांच',
      featuresSubtitle: 'बिना किसी उलझन या जटिल तकनीकी शब्दों के, आपके और आपके परिवार के स्वास्थ्य की सच्ची देखभाल।',
      feat1Title: 'हजारों क्लिनिकल रिकॉर्ड्स पर आधारित',
      feat1Desc: 'डॉक्टरों द्वारा जांची जाने वाली 15 मुख्य शारीरिक स्थितियों के आधार पर तुलनात्मक व सटीक विश्लेषण।',
      feat2Title: 'पूरी तरह सुरक्षित व गोपनीय',
      feat2Desc: 'कोई लॉगिन, नाम या मोबाइल नंबर नहीं चाहिए। आपके आंकड़े कहीं भी सेव नहीं किए जाते।',
      feat3Title: 'डॉक्टर से चर्चा के लिए तैयार',
      feat3Desc: 'एक साफ और सरल रिपोर्ट जिसे आप अपने अगले चेकअप में अपने डॉक्टर को आसानी से दिखा सकते हैं।',

      // CTA Banner
      bannerTitle: 'आज ही अपने दिल की सेहत की जांच करें',
      bannerSubtitle: 'समय पर सही जानकारी आपके दिल को सुरक्षित रखने का सबसे अच्छा तरीका है। मात्र 2 मिनट में अपने नंबर जांचें।',
      bannerBtn: 'अभी मुफ्त जांच शुरू करें',
    },

    // Prediction Form
    form: {
      title: 'हृदय स्वास्थ्य जोखिम मूल्यांकन',
      subtitle: 'मशीन लर्निंग मॉडल द्वारा अपने हृदय जोखिम का आकलन करने के लिए अपने क्लिनिकल आंकड़े दर्ज करें।',
      presetsLabel: 'त्वरित परीक्षण नमूने:',
      presetHealthy: 'सामान्य / स्वस्थ नमूना',
      presetElevated: 'उच्च जोखिम नमूना',
      loadingMsg: 'आपके स्वास्थ्य आंकड़ों का विश्लेषण किया जा रहा है...',

      sec1Title: '1. व्यक्तिगत जानकारी',
      sec1Sub: 'मूलभूत शारीरिक विवरण',
      ageLabel: 'आयु (वर्ष)',
      agePlaceholder: 'उदा. 52',
      ageHelper: 'मान्य आयु: 18 से 120 वर्ष',
      sexLabel: 'लिंग (जन्म के समय)',
      male: 'पुरुष (Male)',
      female: 'महिला (Female)',
      sexHelper: 'शारीरिक हृदय आधार रेखा के समायोजन हेतु',

      sec2Title: '2. क्लिनिकल स्वास्थ्य माप',
      sec2Sub: 'मानक रक्तचाप और रक्त रसायन परीक्षण',
      restingBPLabel: 'विश्राम रक्तचाप - Resting BP (mm Hg)',
      restingBPHelper: 'सामान्य रक्तचाप आमतौर पर 120/80 mm Hg के आसपास होता है',
      cholesterolLabel: 'सीरम कोलेस्ट्रॉल - Cholesterol (mg/dL)',
      cholesterolHelper: 'लिपिड प्रोफाइल टेस्ट से प्राप्त कुल सीरम कोलेस्ट्रॉल',
      fastingBSLabel: 'फास्टिंग ब्लड शुगर > 120 mg/dL',
      fastingBSNo: 'नहीं (≤ 120 mg/dL — सामान्य फास्टिंग शुगर)',
      fastingBSYes: 'हाँ (> 120 mg/dL — मधुमेह या उच्च शुगर स्तर)',
      fastingBSHelper: '8+ घंटे भूखे रहने के बाद मापी गई शुगर',
      maxHRLabel: 'अधिकतम हृदय गति - Max Heart Rate (bpm)',
      maxHRHelper: 'व्यायाम या तनाव के दौरान दर्ज की गई अधिकतम धड़कन',

      sec3Title: '3. लक्षण और ईसीजी (ECG) निष्कर्ष',
      sec3Sub: 'इलेक्ट्रोकार्डियोग्राम और हृदय तनाव संकेतक',
      chestPainLabel: 'सीने में दर्द का प्रकार (Chest Pain Type)',
      cpASY: 'एसिम्प्टोमैटिक (ASY) — सीने में कोई दर्द या बेचैनी नहीं',
      cpATA: 'एटिपिकल एनजाइना (ATA) — हल्का दर्द जो सामान्य एनजाइना जैसा नहीं है',
      cpNAP: 'गैर-एंजाइनल दर्द (NAP) — दिल के रक्त प्रवाह से असंबंधित तेज/क्षणिक दर्द',
      cpTA: 'टिपिकल एनजाइना (TA) — परिश्रम या तनाव से होने वाला सीने में भारीपन व दबाव',

      restingECGLabel: 'विश्राम ईसीजी - Resting ECG',
      ecgNormal: 'सामान्य (Normal) — ईसीजी तरंगों में कोई विकृति नहीं',
      ecgST: 'ST-T वेव असामान्यता (ST) — टी-वेव इनवर्जन या एसटी बदलाव',
      ecgLVH: 'लेफ्ट वेंट्रिकुलर हाइपरट्रॉफी (LVH) — हृदय की दीवार का मोटा होना',

      exAnginaLabel: 'व्यायाम प्रेरित एनजाइना (Exercise Angina)',
      exAnginaNo: 'नहीं — चलने या मेहनत करने पर सीने में जकड़न नहीं होती',
      exAnginaYes: 'हाँ — शारीरिक मेहनत करने पर सीने में दर्द या भारीपन होता है',

      oldpeakLabel: 'एसटी डिप्रेशन / ओल्डपीक - Oldpeak (mm)',
      oldpeakHelper: 'व्यायाम के दौरान ईसीजी में एसटी सेगमेंट की गिरावट',

      stSlopeLabel: 'अधिकतम व्यायाम एसटी ढलान (ST Slope)',
      stSlopeUp: 'अपस्लोपिंग (Upsloping) — स्वस्थ शारीरिक प्रतिक्रिया',
      stSlopeFlat: 'फ्लैट (Flat) — रक्त प्रवाह में कमी का संभावित संकेत',
      stSlopeDown: 'डाउनस्लोपिंग (Downsloping) — हृदय की मांसपेशियों में रक्त की कमी का संकेत',

      privacyNotice: 'गोपनीयता वादा: कोई व्यक्तिगत पहचान, नाम या फोन नंबर दर्ज नहीं किया जाता। डेटा केवल इस गणना के लिए उपयोग होता है।',
      submitBtn: 'हृदय रोग जोखिम की गणना करें',

      // Validation
      errors: {
        ageReq: 'कृपया अपनी आयु दर्ज करें।',
        ageRange: 'आयु 18 से 120 वर्ष के बीच होनी चाहिए।',
        bpReq: 'कृपया विश्राम रक्तचाप दर्ज करें।',
        bpRange: 'वास्तविक रक्तचाप दर्ज करें (50–260 mm Hg)।',
        cholReq: 'कृपया सीरम कोलेस्ट्रॉल दर्ज करें।',
        cholRange: 'वास्तविक कोलेस्ट्रॉल दर्ज करें (50–700 mg/dL)।',
        hrReq: 'कृपया अधिकतम हृदय गति दर्ज करें।',
        hrRange: 'वास्तविक धड़कन संख्या दर्ज करें (40–250 bpm)।',
        oldpeakReq: 'कृपया एसटी डिप्रेशन (Oldpeak) दर्ज करें।',
        oldpeakRange: 'ओल्डपीक आमतौर पर -3.0 से 7.0 mm के बीच होता है।',
      }
    },

    // Results & Risk Card
    result: {
      backBtn: 'वापस जांच फॉर्म पर जाएं',
      demoBadge: 'डेमो / पूर्वावलोकन परिणाम',
      elevatedBadge: 'उच्च जोखिम का संकेत',
      lowRiskBadge: 'कम जोखिम श्रेणी',
      classificationHeader: 'जोखिम मूल्यांकन परिणाम',
      knnSub: 'KNN मॉडल विश्लेषण (K=5)',
      elevatedHeadline: 'हृदय रोग का बढ़ा हुआ जोखिम मिला',
      lowRiskHeadline: 'हृदय रोग का कम जोखिम मिला',
      elevatedDesc: 'दर्ज किए गए आंकड़ों के आधार पर हृदय संबंधी जोखिम के संकेत दिखाई देते हैं। हम सलाह देते हैं कि एक बार अपने डॉक्टर या हृदय रोग विशेषज्ञ से परामर्श अवश्य लें।',
      lowRiskDesc: 'दर्ज किए गए आंकड़ों के आधार पर आपका वर्तमान जोखिम कम प्रतीत होता है। अपनी स्वस्थ दिनचर्या, खानपान और नियमित जांच जारी रखें।',
      printBtn: 'रिपोर्ट प्रिंट / सेव करें',
      retestBtn: 'नई जांच करें',
      modelMetric: 'मॉडल वर्गीकरण अनुपात',
      modelProbability: 'आकलित जोखिम विश्वास स्तर:',
      gaugeNotice: 'यह अनुमान क्लिनिकल रिकॉर्ड्स की समानता पर आधारित है, यह भविष्य की पूर्ण भविष्यवाणी नहीं है।',
      mandatoryNotice: 'महत्वपूर्ण स्वास्थ्य सूचना:',
      mandatoryNoticeBody: 'यह परिणाम केवल प्राथमिक जागरूकता के लिए है, कोई अंतिम मेडिकल डायग्नोसिस नहीं। किसी भी चिकित्सीय निर्णय या दवा बदलने से पहले डॉक्टर से परामर्श करें।',
      mandatoryNoticeLow: 'कम जोखिम का मतलब यह नहीं है कि कोई समस्या कभी नहीं हो सकती। नियमित जांच व स्वस्थ आदतें बनाए रखें।',

      // Conditional Recovery Section on High Risk
      recoverySectionTitle: 'कार्य योजना: हृदय स्वास्थ्य कैसे सुधारें और रिकवर करें',
      recoverySectionSub: 'चूंकि आपकी जांच में उच्च जोखिम के संकेत मिले हैं, इसलिए इन आवश्यक रिकवरी नियमों का पालन करना अत्यंत महत्वपूर्ण है:',
      rec1Title: '1. तुरंत हृदय रोग विशेषज्ञ (Cardiologist) से मिलें',
      rec1Text: 'कार्डियोलॉजिस्ट से अपॉइंटमेंट लें और ईसीजी, 2D इकोकार्डियोग्राम (ECHO) और विस्तृत लिपिड प्रोफाइल टेस्ट करवाएं।',
      rec2Title: '2. दवाओं का सख्त अनुपालन',
      rec2Text: 'यदि डॉक्टर ने रक्तचाप, कोलेस्ट्रॉल (स्टेटिन) या खून पतला करने वाली दवाएं दी हैं, तो उन्हें बिना नागा समय पर लें।',
      rec3Title: '3. कम नमक व हृदय-सुरक्षित आहार',
      rec3Text: 'दिनभर में नमक की मात्रा 1 छोटी चम्मच (2 ग्राम) से कम रखें। तली-भुनी चीजें, मीठा व जंक फूड पूरी तरह बंद करें।',
      rec4Title: '4. हल्की और सुरक्षित सैर',
      rec4Text: 'समतल जगह पर 20-30 मिनट धीरे-धीरे टहलें। सांस फूलने या सीने में भारीपन महसूस होने पर तुरंत रुक जाएं।',
      rec5Title: '5. तंबाकू व धूम्रपान का पूर्ण त्याग',
      rec5Text: 'बीड़ी, सिगरेट या गुटखा तुरंत छोड़ें। तनाव कम करने के लिए रोजाना 15 मिनट अनुलोम-विलोम व गहरी सांस लें।',
      recFullBtn: 'संपूर्ण हृदय रोग रिकवरी गाइड पढ़ें',

      // No result fallback
      notFoundTitle: 'कोई मूल्यांकन परिणाम नहीं मिला',
      notFoundSub: 'AI द्वारा अपने हृदय जोखिम की जांच करने के लिए कृपया फॉर्म में अपने आंकड़े भरें।',
      notFoundBtn: 'जांच फॉर्म पर जाएं',
      sampleDemoBtn: 'सैंपल डेमो परिणाम देखें',
    },

    // Dedicated Heart Disease Recovery Page
    recovery: {
      tag: 'हृदय पुनर्वास और देखभाल',
      title: 'हृदय रोग से रिकवरी और स्वास्थ्य सुधार गाइड',
      subtitle: 'यदि किसी को हृदय रोग है या उच्च जोखिम है, तो स्वस्थ होने और दिल को मजबूत बनाने की संपूर्ण प्रमाण-आधारित जीवनशैली गाइड।',
      introTitle: 'सही कदमों से हृदय रोग को नियंत्रित और सुधारा जा सकता है',
      introText: 'हृदय रोग का पता चलने पर घबराना स्वाभाविक है, लेकिन आधुनिक चिकित्सा और जीवनशैली में सकारात्मक बदलावों से धमनियों में जमाव को स्थिर किया जा सकता है, दिल की कार्यक्षमता बढ़ाई जा सकती है और भविष्य के हार्ट अटैक के खतरे को 80% तक कम किया जा सकता है।',

      stage1Title: 'कदम 1: क्लिनिकल देखभाल और दवाओं का नियमित सेवन',
      stage1Tag: 'रिकवरी की मुख्य नींव',
      stage1Items: [
        {
          heading: 'डॉक्टर द्वारा लिखी दवाएं कभी बंद न करें',
          text: 'कोलेस्ट्रॉल कम करने की दवाएं (Statins), ब्लड प्रेशर की दवाएं (ACE Inhibitors/ARBs), और धड़कन नियंत्रित करने वाली दवाएं (Beta-blockers) रोज समय पर लें। इन्हें अचानक छोड़ने से गंभीर खतरा हो सकता है।'
        },
        {
          heading: 'रक्तचाप और धड़कन की नियमित घर पर जांच',
          text: 'घर पर डिजिटल बीपी मॉनिटर से सुबह और शाम विश्राम रक्तचाप मापें और डायरी में नोट करें। हर 3 से 6 महीने में कार्डियोलॉजिस्ट से जांच करवाएं।'
        },
        {
          heading: 'अपने महत्वपूर्ण लक्ष्यों को जानें',
          text: 'अपने डॉक्टर की मदद से ये लक्ष्य हासिल करें: ब्लड प्रेशर < 130/80 mm Hg, खराब कोलेस्ट्रॉल (LDL) < 70 mg/dL (या उच्च जोखिम में < 55 mg/dL), और फास्टिंग शुगर < 100 mg/dL।'
        }
      ],

      stage2Title: 'कदम 2: धमनियों को साफ रखने और बीपी घटाने वाला आहार',
      stage2Tag: 'हृदय रक्षक पोषण',
      stage2Items: [
        {
          heading: 'नमक का कड़ा प्रतिबंध (प्रतिदिन < 2 ग्राम)',
          text: 'अतिरिक्त नमक रक्तचाप बढ़ाता है। अचार, पापड़, नमकीन, चिप्स और ऊपर से छिड़का जाने वाला नमक पूरी तरह बंद करें।'
        },
        {
          heading: 'ट्रांस फैट और दोबारा गर्म किए तेल से बचें',
          text: 'सड़क किनारे की तली चीजें, समोसे, पेस्ट्री, डालडा व वनस्पति घी धमनियों में ब्लॉकेज बढ़ाते हैं। खाना बनाने में बहुत कम मात्रा में सरसों या जैतून का तेल इस्तेमाल करें।'
        },
        {
          heading: 'हृदय के लिए सुपरफूड्स',
          text: 'कच्चा कुचला हुआ लहसुन (एलिसिन युक्त), जई (ओट्स - घुलनशील फाइबर), अखरोट, अलसी के बीज (ओमेगा-3), पालक, मेथी और ताजे फल खाएं।'
        },
        {
          heading: 'हल्का भोजन और वजन नियंत्रण',
          text: 'रात को भारी भोजन करने के बजाय दिन में 3-4 बार हल्का भोजन करें ताकि दिल पर अचानक लोड न पड़े। पेट का घेरा 90 सेमी (पुरुष) / 80 सेमी (महिला) से कम रखें।'
        }
      ],

      stage3Title: 'कदम 3: सुरक्षित कार्डियक व्यायाम और स्टैमिना विकास',
      stage3Tag: 'शारीरिक क्षमता की बहाली',
      stage3Items: [
        {
          heading: 'धीमी और समतल वॉक से शुरुआत करें',
          text: 'रोजाना 10-15 मिनट समतल रास्ते पर धीरे-धीरे चलने से शुरुआत करें। जब बिना थके सहज लगने लगे, तो हफ्ते में 5 दिन 30 मिनट तक बढ़ाएं।'
        },
        {
          heading: '"बातचीत परीक्षण" (Talk Test) की सीमा',
          text: 'चलते समय आप आसानी से पूरे वाक्य बोल सकें। यदि सांस फूलने लगे और बात करना मुश्किल हो, तो तुरंत रुककर आराम करें।'
        },
        {
          heading: 'भारी वजन उठाने या अचानक दौड़ने से बचें',
          text: 'भारी वजन उठाना, गाड़ी को धक्का देना या अचानक सीढ़ियां दौड़कर चढ़ना रक्तचाप को बहुत तेजी से बढ़ा सकता है, इससे बचें।'
        },
        {
          heading: 'प्राणायाम और गहरी सांस लेने का अभ्यास',
          text: 'रोजाना सुबह 15 मिनट अनुलोम-विलोम और भ्रामरी प्राणायाम करें। यह तंत्रिका तंत्र को शांत करता है और दिल की धड़कन को सामान्य रखता है।'
        }
      ],

      stage4Title: 'कदम 4: नशा मुक्ति, मानसिक तनाव और गहरी नींद',
      stage4Tag: 'समग्र हृदय सुधार',
      stage4Items: [
        {
          heading: 'तंबाकू, बीड़ी और सिगरेट का 100% त्याग',
          text: 'धूम्रपान धमनियों को सिकोड़ता है और ऑक्सीजन की आपूर्ति कम करता है। तंबाकू पूरी तरह छोड़ने के 1 साल के भीतर दिल के दौरे का खतरा आधा हो जाता है।'
        },
        {
          heading: '7 से 8 घंटे की गहरी और नियमित नींद',
          text: 'गहरी नींद के दौरान शरीर का रक्तचाप स्वाभाविक रूप से कम होता है और दिल को आराम मिलता है। सोने से 1 घंटा पहले मोबाइल स्क्रीन बंद कर दें।'
        },
        {
          heading: 'स्लीप एप्निया (खर्राटे और थकान) की जांच',
          text: 'यदि सोते समय तेज खर्राटे आते हैं या सुबह उठकर थकान लगती है, तो डॉक्टर को बताएं, क्योंकि यह हृदय पर भारी दबाव डालता है।'
        },
        {
          heading: 'मानसिक तनाव और गुस्से पर नियंत्रण',
          text: 'अत्यधिक तनाव एड्रेनालाईन हार्मोन बढ़ाता है जो धमनियों में सूजन पैदा करता है। परिवार के साथ समय बिताएं और ध्यान (मेडिटेशन) करें।'
        }
      ],

      emergencyHeading: 'खतरे के लक्षण: अस्पताल कब तुरंत जाना चाहिए?',
      emergencyDesc: 'यदि किसी हृदय रोगी को इनमें से कोई भी लक्षण 5 मिनट से अधिक समय तक महसूस हो, तो घरेलू नुस्खे न आजमाएं — तुरंत एम्बुलेंस बुलाएं या नजदीकी इमरजेंसी अस्पताल पहुंचें:',
      redFlag1: 'सीने के बीच में अत्यधिक भारीपन, जकड़न या जलन',
      redFlag2: 'बाएं हाथ, कंधे, पीठ, गर्दन या जबड़े में फैलता हुआ दर्द',
      redFlag3: 'अचानक बहुत ठंडा पसीना आना और सांस फूलना',
      redFlag4: 'चक्कर आकर गिर जाना या दिल की धड़कन का अत्यधिक अनियमित होना',

      doctorDisclaimer: 'चिकित्सीय सूचना: यह रिकवरी गाइड केवल सामान्य जानकारी और मार्गदर्शन के लिए है। किसी भी व्यायाम या खानपान में बड़ा बदलाव करने से पहले अपने हृदय रोग विशेषज्ञ (Cardiologist) की सलाह अवश्य लें।'
    },

    // About Page
    about: {
      badge: 'अकादमिक प्रोजेक्ट विवरण',
      title: 'CardioGuard AI के बारे में',
      subtitle: 'हृदय जोखिम की प्राथमिक जांच और मशीन लर्निंग के क्लिनिकल अनुप्रयोग को प्रदर्शित करने वाला शैक्षणिक प्रोजेक्ट।',
      missionTitle: 'प्रोजेक्ट का उद्देश्य और मिशन',
      missionP1: 'CardioGuard AI का निर्माण यह दर्शाने के लिए किया गया है कि किस प्रकार मरीज के स्वास्थ्य संकेतकों का विश्लेषण कर हृदय रोग के जोखिम को समय पर समझा जा सकता है।',
      missionP2: 'यह Scikit-learn के StandardScaler और K-Nearest Neighbors (KNN) एल्गोरिदम का उपयोग करके 15 शारीरिक मापदंडों का विश्लेषण करता है।',
      disclaimerTitle: 'सख्त चिकित्सीय अस्वीकरण (Disclaimer)',
      disclaimerP1: 'यह वेब एप्लिकेशन केवल शैक्षणिक और जागरूकता उद्देश्यों के लिए है। यह किसी भी प्रकार का डॉक्टरी निदान या निश्चित भविष्यवाणी नहीं करता।',
      disclaimerP2: 'किसी भी बीमारी, लक्षण या दवा के लिए हमेशा एक योग्य डॉक्टर या हृदय रोग विशेषज्ञ (Cardiologist) से व्यक्तिगत परामर्श लें।',
      architectureTitle: 'मॉडल संरचना और तकनीक',
      archP1: 'सुपरवाइज्ड K-Nearest Neighbors क्लासिफायर (K=5) जो मिनकोवस्की दूरी के आधार पर 15 मानकीकृत स्वास्थ्य आयामों का मूल्यांकन करता है:',
      privacyTitle: 'उपयोगकर्ता गोपनीयता और सुरक्षा की गारंटी',
      priv1: 'नो अकाउंट — बिना किसी साइन-अप या पासवर्ड के पूरी तरह गुमनाम उपयोग करें।',
      priv2: 'नो पर्सनल डेटा — हम कभी भी आपका नाम, फोन नंबर या आधार नंबर नहीं मांगते।',
      priv3: 'नो डेटा स्टोरेज — आपके द्वारा दर्ज किए गए आंकड़े केवल गणना के लिए उपयोग होते हैं और कहीं भी सुरक्षित नहीं रखे जाते।',
    },

    // Footer
    footer: {
      tagline: 'मशीन लर्निंग आधारित हृदय स्वास्थ्य जांच और हृदय रोग से उबरने की संपूर्ण गाइड।',
      privacyTag: 'शून्य लॉगिन आवश्यक • पूर्ण गोपनीयता • कोई व्यक्तिगत डेटा सुरक्षित नहीं किया जाता',
      navHeader: 'नेविगेशन',
      home: 'मुख्य पृष्ठ',
      predict: 'जोखिम जांचें',
      recoveryGuide: 'रिकवरी गाइड',
      about: 'हमारे बारे में',
      disclaimerHeader: 'चिकित्सीय सूचना',
      disclaimerBody: 'केवल शैक्षणिक उपकरण। यह किसी डॉक्टर की जांच या अस्पताल के निदान का विकल्प नहीं है।',
      copyright: '© 2026 CardioGuard AI. सर्वाधिकार सुरक्षित। शैक्षणिक व जागरूकता मंच।',
      privacyLink: 'गोपनीयता नीति',
      clinicalLink: 'क्लिनिकल पृष्ठभूमि',
    }
  }
};
