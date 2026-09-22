import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Heart,
  ShieldCheck,
  AlertTriangle,
  Lock,
  BookOpen,
  Cpu,
  Stethoscope
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function About() {
  const { t } = useLanguage();
  const a = (k) => t(`about.${k}`);

  const features = [
    { dim: '1. Age (Continuous, Years)' },
    { dim: '2. Resting Blood Pressure (mm Hg)' },
    { dim: '3. Serum Cholesterol (mg/dL)' },
    { dim: '4. Fasting Blood Sugar > 120 mg/dL' },
    { dim: '5. Maximum Heart Rate (bpm)' },
    { dim: '6. ST Depression / Oldpeak (mm)' },
    { dim: '7. Sex_M (One-hot binary)' },
    { dim: '8–10. Chest Pain (ATA, NAP, TA)' },
    { dim: '11–12. Resting ECG (Normal, ST)' },
    { dim: '13. Exercise Angina_Y' },
    { dim: '14–15. ST Slope (Flat, Up)' },
  ];

  return (
    <PageTransition className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 dark:bg-rose-950/60 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-900">
          {a('badge')}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          {a('title')}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          {a('subtitle')}
        </p>
      </div>

      {/* Mission */}
      <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <BookOpen className="w-6 h-6 text-rose-600" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {a('missionTitle')}
          </h2>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {a('missionP1')}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {a('missionP2')}
        </p>
      </div>


      {/* Model Architecture */}
      <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <Cpu className="w-6 h-6 text-rose-600" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {a('architectureTitle')}
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>{a('archP1')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs pt-2">
            {features.map((f) => (
              <div key={f.dim} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {f.dim}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Privacy */}
      <div id="privacy" className="rounded-3xl glass-card p-6 sm:p-8 space-y-4 shadow-sm scroll-mt-24">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <Lock className="w-6 h-6 text-rose-600" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {a('privacyTitle')}
          </h2>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          {['priv1', 'priv2', 'priv3'].map((key) => (
            <li key={key} className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{a(key)}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageTransition>
  );
}
