import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('cg_lang');
    return saved === 'hi' || saved === 'en' ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('cg_lang', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  /**
   * Helper to retrieve translated text using dot notation (e.g. 'home.heroTitle1')
   */
  const t = (keyPath, fallback = '') => {
    const keys = keyPath.split('.');
    let current = translations[language] || translations.en;
    
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if translation missing in chosen language
        let fb = translations.en;
        for (const fKey of keys) {
          if (fb && fb[fKey] !== undefined) {
            fb = fb[fKey];
          } else {
            return fallback || keyPath;
          }
        }
        return fb;
      }
    }
    return current;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isHindi: language === 'hi' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
