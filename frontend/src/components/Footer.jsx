import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, AlertCircle } from 'lucide-react';
import ECGLine from './ECGLine';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative mt-20 border-t border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md overflow-hidden transition-colors">
      {/* Decorative ECG Line accent */}
      <ECGLine className="opacity-25 dark:opacity-40" color="#e11d48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-600 to-red-600 flex items-center justify-center text-white shadow-sm shadow-rose-600/20">
                <Heart className="w-4 h-4 fill-white" />
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                CardioShield <span className="text-rose-600 dark:text-rose-400">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{t('footer.privacyTag')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              {t('footer.navHeader')}
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/predict" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                  {t('footer.predict')}
                </Link>
              </li>
              <li>
                <Link to="/recovery-tips" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-medium text-rose-600 dark:text-rose-400">
                  {t('footer.recoveryGuide')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <Link to="/about#privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              {t('footer.privacyLink')}
            </Link>
            <Link to="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              {t('footer.clinicalLink')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
