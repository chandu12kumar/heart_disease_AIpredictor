import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Stethoscope,
  Apple,
  Activity,
  CigaretteOff,
  Moon,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Pill,
  Droplet,
  Flame,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Scale
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import EmergencyAlert from '../components/EmergencyAlert';
import { useLanguage } from '../context/LanguageContext';

export default function RecoveryTips() {
  const { t, language } = useLanguage();
  const r = (path) => t(`recovery.${path}`);

  // Retrieve structured arrays
  const stage1Items = t('recovery.stage1Items') || [];
  const stage2Items = t('recovery.stage2Items') || [];
  const stage3Items = t('recovery.stage3Items') || [];
  const stage4Items = t('recovery.stage4Items') || [];

  return (
    <PageTransition className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-12 animate-fade-up">
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-300 text-xs font-semibold shadow-2xs">
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-heartbeat" />
          <span>{r('tag')}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
          {r('title')}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {r('subtitle')}
        </p>
      </div>

      {/* Reassuring Clinical Overview Card */}
      <div className="rounded-3xl glass-card p-6 sm:p-8 border border-rose-200/80 dark:border-rose-900/40 relative overflow-hidden shadow-lg cardiac-glow">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-rose-500/25">
            <Heart className="w-7 h-7 fill-white" />
          </div>
          <div className="space-y-2 flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {r('introTitle')}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {r('introText')}
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Warning Signs Banner */}
      {/* <section className="rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-6 h-6 shrink-0" />
          <h2 className="text-lg sm:text-xl font-bold">
            {r('emergencyHeading')}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
          {r('emergencyDesc')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="flex items-start gap-2 text-xs sm:text-sm bg-black/15 p-3 rounded-xl backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-1.5" />
            <span>{r('redFlag1')}</span>
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm bg-black/15 p-3 rounded-xl backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-1.5" />
            <span>{r('redFlag2')}</span>
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm bg-black/15 p-3 rounded-xl backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-1.5" />
            <span>{r('redFlag3')}</span>
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm bg-black/15 p-3 rounded-xl backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-1.5" />
            <span>{r('redFlag4')}</span>
          </div>
        </div>
      </section> */}

      {/* Step 1: Medical Adherence & Doctor Care */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center font-bold">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {r('stage1Tag')}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {r('stage1Title')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stage1Items.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl glass-card p-6 space-y-3 hover:border-blue-300 dark:hover:border-blue-800 transition-colors shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h3>{item.heading}</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step 2: Cardiac Nutrition & Plaque Reversal */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold">
            <Apple className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              {r('stage2Tag')}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {r('stage2Title')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stage2Items.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl glass-card p-6 space-y-3 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3>{item.heading}</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Step 3: Cardiac Rehabilitation & Safe Activity */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center font-bold">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              {r('stage3Tag')}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {r('stage3Title')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stage3Items.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl glass-card p-6 space-y-3 hover:border-purple-300 dark:hover:border-purple-800 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3>{item.heading}</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Step 4: Toxins, Sleep & Stress */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center font-bold">
            <Moon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              {r('stage4Tag')}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {r('stage4Title')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stage4Items.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl glass-card p-6 space-y-3 hover:border-amber-300 dark:hover:border-amber-800 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3>{item.heading}</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Action CTA & Assessment Link */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12 text-center space-y-6 shadow-xl border border-slate-700/80">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {language === 'hi'
            ? 'क्या आपने अपने वर्तमान हृदय संकेतकों की जांच की है?'
            : 'Have you screened your current cardiovascular parameters?'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          {language === 'hi'
            ? 'अपने 15 क्लिनिकल पैरामीटर दर्ज करके तत्काल मशीन लर्निंग द्वारा अपनी जोखिम श्रेणी का आकलन करें।'
            : 'Enter your 15 clinical parameters to receive an instant machine-learning screening estimate.'}
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            to="/predict"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-rose-600/30 transition-all hover:scale-105"
          >
            <Activity className="w-4 h-4" />
            <span>{t('home.ctaCheckRisk')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Mandatory Disclaimer */}
      <div className="p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 text-center leading-relaxed">
        {r('doctorDisclaimer')}
      </div>
    </PageTransition>
  );
}
