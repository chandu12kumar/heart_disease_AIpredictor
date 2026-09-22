import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Heart,
  Activity,
  Menu,
  X,
  Sun,
  Moon,
  Languages,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();
  const { language, setLanguage, toggleLanguage, t, isHindi } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Nav links: removed 'How It Works', replaced 'Health Tips' with 'Recovery Guide'
  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.predict'), path: '/predict' },
    { name: t('nav.recoveryGuide'), path: '/recovery-tips', highlight: true },
    { name: t('nav.about'), path: '/about' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800'
          : 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-xs border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-red-600 to-rose-700 flex items-center justify-center text-white shadow-md shadow-rose-500/25 group-hover:scale-105 transition-transform duration-200">
              <Heart className="w-5 h-5 fill-white animate-heartbeat" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                CardioShield <span className="text-rose-600 dark:text-rose-500">AI</span>
              </span>
              <span className="block text-[11px] font-medium tracking-wide uppercase text-slate-500 dark:text-slate-400 -mt-1">
                {t('nav.brandSub')}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-150 flex items-center gap-1.5 ${isActive
                      ? 'text-rose-600 dark:text-rose-400 bg-rose-50/90 dark:bg-rose-950/50 font-semibold shadow-2xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                    }`}
                >
                  {link.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Language Switcher, Dark/Light Mode, CTA, Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Pill */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100/80 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700 transition-all cursor-pointer shadow-2xs"
              title={isHindi ? "Switch to English" : "हिन्दी में बदलें"}
              aria-label="Change language"
            >
              <Languages className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
              <span>{isHindi ? 'English' : 'हिन्दी'}</span>
            </button>

            {/* Dark/Light Mode Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100/80 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700 transition-all cursor-pointer shadow-2xs"
              title={isDark ? t('nav.lightMode') : t('nav.darkMode')}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Assessment CTA Button */}
            <Link
              to="/predict"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white text-xs font-bold shadow-md shadow-rose-600/20 hover:shadow-lg hover:from-rose-500 hover:to-red-500 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Activity className="w-4 h-4" />
              <span>{t('nav.checkYourRisk')}</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-700 dark:text-slate-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl animate-fade-up px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${isActive
                    ? 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
              >
                <span>{link.name}</span>
                {link.highlight && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-300">
                    Guide
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 flex flex-col gap-2">
            <Link
              to="/predict"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-sm shadow-md"
            >
              <Activity className="w-4 h-4" />
              <span>{t('nav.checkYourRisk')}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
