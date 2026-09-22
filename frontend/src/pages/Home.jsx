import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Activity,
  ShieldCheck,
  Lock,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Sparkles,
  Clock
} from 'lucide-react';
import ECGLine from '../components/ECGLine';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import heartImg from '../assets/heart-glow.png';

export default function Home() {
  const { t } = useLanguage();
  const h = (k) => t(`home.${k}`);

  const pillarStyles = {
    blue: {
      border: 'border-blue-100 dark:border-blue-900/30',
      iconBg: 'bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'
    },
    emerald: {
      border: 'border-emerald-100 dark:border-emerald-900/30',
      iconBg: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
    },
    purple: {
      border: 'border-purple-100 dark:border-purple-900/30',
      iconBg: 'bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400'
    }
  };

  return (
    <PageTransition className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative pt-4 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
        {/* Background Accents & Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-rose-500/10 dark:bg-rose-600/15 rounded-full blur-3xl" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-3xl" />
          <ECGLine className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-20" height={60} color="#f43f5e" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Natural, human text & actions */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/70 border border-rose-200/80 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-semibold shadow-xs">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-heartbeat" />
                <span>{h('heroBadge')}</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                {h('heroTitle1')} <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 bg-clip-text text-transparent">
                  {h('heroTitle2')}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {h('heroSubtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Link
                  to="/predict"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-base shadow-xl shadow-rose-600/30 hover:shadow-2xl hover:from-rose-500 hover:to-red-500 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-rose-500/30"
                >
                  <Activity className="w-5 h-5" />
                  <span>{h('ctaCheckRisk')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/recovery-tips"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 font-bold text-base border border-slate-200 dark:border-slate-700 hover:border-rose-300 dark:hover:border-rose-800 hover:bg-rose-50/50 dark:hover:bg-rose-950/30 hover:-translate-y-0.5 transition-all duration-200 shadow-xs"
                >
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500/20" />
                  <span>{h('ctaRecoveryGuide')}</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{h('trust1')}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <Lock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{h('trust2')}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <Stethoscope className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0" />
                  <span>{h('trust3')}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                {h('disclaimerNote')}
              </p>
            </div>

            {/* Right Column: High-tech Glowing 3D Heart Visual */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                {/* Backlight Neon Glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-rose-500/30 via-purple-600/20 to-cyan-500/30 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Visual Card */}
                <div className="relative rounded-3xl overflow-hidden border border-rose-200/50 dark:border-rose-900/40 bg-slate-950/95 shadow-2xl shadow-rose-950/40 p-2.5 sm:p-3">
                  <div className="relative rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img
                      src={heartImg}
                      alt="Cardiac Health Hologram Visual"
                      className="w-full h-auto object-cover max-h-[440px] rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />

                    {/* Floating HUD Badge Top Right */}
                    <div className="absolute top-3 right-3 backdrop-blur-md bg-slate-900/85 border border-cyan-500/40 text-cyan-300 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>{h('badgeHolo')}</span>
                    </div>

                    {/* Floating HUD Badge Bottom Left */}
                    <div className="absolute bottom-3 left-3 backdrop-blur-md bg-slate-900/85 border border-rose-500/40 text-rose-300 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                      <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-heartbeat" />
                      <span>{h('badgeVitals')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recovery Spotlight */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-300 text-xs font-bold shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-rose-500 animate-heartbeat" />
            <span>{h('recoverySpotlightBadge')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {h('recoverySpotlightTitle')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {h('recoverySpotlightDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: h('recoveryPillar1Title'), desc: h('recoveryPillar1Desc'), color: 'blue' },
            { title: h('recoveryPillar2Title'), desc: h('recoveryPillar2Desc'), color: 'emerald' },
            { title: h('recoveryPillar3Title'), desc: h('recoveryPillar3Desc'), color: 'purple' },
          ].map(({ title, desc, color }) => {
            const style = pillarStyles[color];
            return (
              <div
                key={title}
                className={`rounded-3xl glass-card p-6 space-y-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border ${style.border}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-xs ${style.iconBg}`}>
                  <Heart className="w-5 h-5 fill-current opacity-70" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/recovery-tips"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-bold text-sm border border-rose-200 dark:border-rose-900 hover:bg-rose-100 dark:hover:bg-rose-950/70 transition-all"
          >
            <span>{h('readFullRecovery')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {h('featuresTitle')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">{h('featuresSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: h('feat1Title'), desc: h('feat1Desc') },
            { icon: Lock, title: h('feat2Title'), desc: h('feat2Desc') },
            { icon: Stethoscope, title: h('feat3Title'), desc: h('feat3Desc') },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl glass-card p-6 space-y-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-950/60 dark:to-rose-900/30 text-rose-600 flex items-center justify-center shadow-xs">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden border border-slate-700/50">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <ECGLine color="#ffffff" height={80} />
          </div>
          <div className="relative z-10 space-y-3 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {h('bannerTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {h('bannerSubtitle')}
            </p>
          </div>
          <div className="relative z-10 pt-2">
            <Link
              to="/predict"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-rose-600/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <Activity className="w-4 h-4" />
              <span>{h('bannerBtn')}</span>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
