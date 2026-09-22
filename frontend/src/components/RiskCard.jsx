import React from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Stethoscope,
  Heart,
  RotateCcw,
  Printer,
  Apple,
  Activity,
  Moon,
  CigaretteOff,
  Scale,
  Smile,
  ChevronRight,
  ShieldCheck,
  Pill,
  Droplets,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function RiskCard({ result, onReset }) {
  const { t } = useLanguage();
  if (!result) return null;

  const isElevated = result.prediction === 1 || result.risk_level === 'elevated';
  const percentage = result.probability_percentage;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Primary Result Status Card */}
      <div
        className={`rounded-3xl p-6 sm:p-8 border shadow-xl transition-all ${isElevated
          ? 'bg-gradient-to-b from-rose-50/90 via-white to-rose-50/30 border-rose-200/80 dark:from-rose-950/40 dark:via-slate-900 dark:to-slate-900 dark:border-rose-900/50 shadow-rose-200/30 dark:shadow-rose-900/20'
          : 'bg-gradient-to-b from-emerald-50/90 via-white to-emerald-50/30 border-emerald-200/80 dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-900 dark:border-emerald-900/50 shadow-emerald-200/30 dark:shadow-emerald-900/20'
          }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div
              className={`p-3.5 rounded-2xl shrink-0 shadow-lg ${isElevated
                ? 'bg-gradient-to-br from-rose-600 to-red-600 text-white shadow-rose-600/30'
                : 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-emerald-600/30'
                }`}
            >
              {isElevated ? (
                <AlertTriangle className="w-8 h-8" />
              ) : (
                <CheckCircle2 className="w-8 h-8" />
              )}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {t('result.classificationHeader')}
                </span>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${isElevated
                    ? 'bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-900'
                    : 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-900'
                    }`}
                >
                  {t('result.knnSub')}
                </span>
              </div>
              <h2
                className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${isElevated ? 'text-rose-900 dark:text-rose-200' : 'text-emerald-900 dark:text-emerald-200'
                  }`}
              >
                {isElevated ? t('result.elevatedHeadline') : t('result.lowRiskHeadline')}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-medium max-w-xl leading-relaxed">
                {isElevated ? t('result.elevatedDesc') : t('result.lowRiskDesc')}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 self-start md:self-center shrink-0">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-all shadow-2xs hover:shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t('result.printBtn')}</span>
            </button>
            {onReset && (
              <button
                onClick={onReset}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-all shadow-2xs hover:shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t('result.retestBtn')}</span>
              </button>
            )}
          </div>
        </div>

        {/* Model Probability Gauge Section */}
        {percentage !== null && percentage !== undefined && (
          <div className="py-6 border-b border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {t('result.modelMetric')}
                </span>
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 flex-wrap mt-0.5">
                  <span>{t('result.modelProbability')} <strong>{percentage}%</strong></span>
                  <span className="text-xs font-normal text-slate-500">
                    ({result.prediction === 1 ? 'Elevated class' : 'Lower class'})
                  </span>
                </div>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 sm:text-right max-w-xs">
                KNN K=5 neighborhood voting score
              </div>
            </div>

            <div className="w-full bg-slate-200/80 dark:bg-slate-800 h-4 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out ${isElevated
                  ? 'bg-gradient-to-r from-rose-500 to-red-600'
                  : 'bg-gradient-to-r from-teal-500 to-emerald-600'
                  }`}
                style={{ width: `${Math.max(5, Math.min(percentage, 100))}%` }}
                role="progressbar"
                aria-valuenow={percentage}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 italic leading-relaxed">
              {t('result.gaugeNotice')}
            </p>
          </div>
        )}

      </div>

      {/* ===== CONDITIONAL RECOVERY SECTION FOR HIGH RISK ===== */}
      {isElevated && (
        <div className="rounded-3xl border border-rose-200/70 dark:border-rose-900/50 bg-gradient-to-br from-rose-50/80 via-white to-orange-50/50 dark:from-rose-950/30 dark:via-slate-900 dark:to-slate-900 p-6 sm:p-8 space-y-6 shadow-lg shadow-rose-100/50 dark:shadow-rose-900/10">
          <div className="flex items-center gap-3 pb-4 border-b border-rose-200/60 dark:border-rose-900/40">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-600 to-red-600 text-white flex items-center justify-center shadow-md shadow-rose-600/25">
              <Heart className="w-6 h-6 fill-white animate-heartbeat" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {t('result.recoverySectionTitle')}
              </h3>
              <p className="text-xs text-rose-600 dark:text-rose-400 font-medium mt-0.5">
                {t('result.recoverySectionSub')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Recovery Step 1 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2 hover:border-blue-300 dark:hover:border-blue-700 transition-colors shadow-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <Stethoscope className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{t('result.rec1Title')}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('result.rec1Text')}
              </p>
            </div>

            {/* Recovery Step 2 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors shadow-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{t('result.rec2Title')}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('result.rec2Text')}
              </p>
            </div>

            {/* Recovery Step 3 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2 hover:border-rose-300 dark:hover:border-rose-700 transition-colors shadow-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <Apple className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                <span>{t('result.rec3Title')}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('result.rec3Text')}
              </p>
            </div>

            {/* Recovery Step 4 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2 hover:border-purple-300 dark:hover:border-purple-700 transition-colors shadow-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <Activity className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>{t('result.rec4Title')}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('result.rec4Text')}
              </p>
            </div>

            {/* Recovery Step 5 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2 hover:border-amber-300 dark:hover:border-amber-700 transition-colors shadow-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <CigaretteOff className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>{t('result.rec5Title')}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('result.rec5Text')}
              </p>
            </div>

            {/* Link card to full guide */}
            <Link
              to="/recovery-tips"
              className="p-4 rounded-2xl border-2 border-dashed border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors flex flex-col items-center justify-center gap-2 text-center group"
            >
              <Heart className="w-6 h-6 fill-rose-500 group-hover:scale-110 transition-transform animate-heartbeat" />
              <span className="text-sm font-bold">{t('result.recFullBtn')}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

      {/* General Prevention Tips for Low Risk */}
      {!isElevated && (
        <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                General Cardiovascular Prevention Tips
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Proactive everyday habits to sustain optimal cardiovascular function
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Apple, label: 'Balanced Nutrition', text: 'Focus on fiber-rich plants, leafy greens, healthy fats (olive oil, nuts), and reduce refined sugars.', color: 'text-emerald-600 dark:text-emerald-400' },
              { icon: Activity, label: 'Regular Movement', text: 'Target 150 minutes of moderate aerobic activity weekly (brisk walking, cycling, or swimming).', color: 'text-emerald-600 dark:text-emerald-400' },
              { icon: CigaretteOff, label: 'Smoke-Free Lifestyle', text: 'Avoid all tobacco smoke and secondary exposure to protect endothelial blood vessel walls.', color: 'text-emerald-600 dark:text-emerald-400' },
              { icon: Moon, label: 'Restorative Sleep', text: 'Aim for 7–9 hours of continuous sleep to promote blood pressure regulation and cellular repair.', color: 'text-emerald-600 dark:text-emerald-400' },
              { icon: Droplets, label: 'Routine Screenings', text: 'Have resting blood pressure, fasting glucose, and lipid profiles checked at regular intervals.', color: 'text-emerald-600 dark:text-emerald-400' },
              { icon: Smile, label: 'Stress Management', text: 'Incorporate relaxation practices, breathwork, or mindfulness to curb sustained cortisol levels.', color: 'text-emerald-600 dark:text-emerald-400' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
                  <div className={`font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm`}>
                    <Icon className={`w-4 h-4 ${item.color} shrink-0`} />
                    <span>{item.label}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60">
            <span>Trained Algorithm: Scikit-learn KNeighborsClassifier (K=5, Minkowski Distance)</span>
            <Link
              to="/recovery-tips"
              className="inline-flex items-center gap-1 font-semibold text-rose-600 hover:text-rose-700 dark:text-rose-400 transition-colors"
            >
              <span>{t('result.recFullBtn')}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
