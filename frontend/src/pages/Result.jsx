import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import RiskCard from '../components/RiskCard';
import EmergencyAlert from '../components/EmergencyAlert';
import { Activity, ArrowLeft, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DEMO_RESULT = {
  prediction: 1,
  risk_level: "elevated",
  risk_headline: "Elevated Risk Indicated",
  summary: "The model indicates an elevated heart-disease risk based on the information provided.",
  probability: 0.8,
  probability_percentage: 80.0,
  disclaimer: "This result is not a diagnosis and cannot predict with certainty whether you will have a heart attack. Please consult a qualified healthcare professional for medical advice."
};

export default function Result() {
  const location = useLocation();
  const [demoActive, setDemoActive] = useState(false);
  const { t } = useLanguage();

  const currentResult = location.state?.result || (demoActive ? DEMO_RESULT : null);

  return (
    <PageTransition className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      <div className="flex items-center justify-between">
        <Link
          to="/predict"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('result.backBtn')}</span>
        </Link>
        {demoActive && (
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800">
            {t('result.demoBadge')}
          </span>
        )}
      </div>

      {currentResult ? (
        <div className="space-y-6">
          <RiskCard result={currentResult} />
        </div>
      ) : (
        <div className="rounded-3xl glass-card p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-rose-100 dark:bg-rose-950 text-rose-600 flex items-center justify-center mx-auto shadow-xs">
            <Heart className="w-8 h-8 fill-rose-500 animate-heartbeat" />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('result.notFoundTitle')}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t('result.notFoundSub')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/predict"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm shadow-md transition-all"
            >
              <Activity className="w-4 h-4" />
              <span>{t('result.notFoundBtn')}</span>
            </Link>
            <button
              onClick={() => setDemoActive(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm transition-all border border-slate-200 dark:border-slate-700"
            >
              <span>{t('result.sampleDemoBtn')}</span>
            </button>
          </div>
        </div>
      )}
    </PageTransition>
  );
}
