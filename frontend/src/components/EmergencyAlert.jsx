import React from 'react';
import { PhoneCall, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function EmergencyAlert({ className = '' }) {
  const { t } = useLanguage();

  return (
    <aside
      className={`rounded-3xl border border-red-300 dark:border-red-900/80 bg-red-50/90 dark:bg-red-950/40 p-5 sm:p-6 shadow-sm transition-colors ${className}`}
      role="alert"
      aria-labelledby="emergency-heading"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-red-600 text-white shrink-0 mt-0.5 shadow-md shadow-red-600/25">
          <ShieldAlert className="w-6 h-6" aria-hidden="true" />
        </div>
        <div className="space-y-2.5 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 id="emergency-heading" className="text-base sm:text-lg font-bold text-red-900 dark:text-red-200 flex items-center gap-2">
              <span>{t('emergency.title')}</span>
            </h2>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 dark:bg-red-900/60 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800">
              <PhoneCall className="w-3.5 h-3.5" />
              {t('emergency.badge')}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-red-900/90 dark:text-red-200/90 leading-relaxed font-medium">
            {t('emergency.body')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-red-800 dark:text-red-300 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
              <span>{t('emergency.symptom1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
              <span>{t('emergency.symptom2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
              <span>{t('emergency.symptom3')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
              <span>{t('emergency.symptom4')}</span>
            </div>
          </div>

          <div className="pt-2 text-xs font-bold text-red-900 dark:text-red-100 flex flex-wrap items-center gap-2 border-t border-red-200/60 dark:border-red-900/40">
            <span className="underline decoration-red-400">
              {t('emergency.callAction')}
            </span>
            <span className="text-red-700 dark:text-red-400 font-normal">
              {t('emergency.doNotWait')}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
