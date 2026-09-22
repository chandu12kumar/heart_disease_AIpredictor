import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

import Home from './pages/Home';
import Predict from './pages/Predict';
import Result from './pages/Result';
import RecoveryTips from './pages/RecoveryTips';
import About from './pages/About';

// Helper to scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col relative text-slate-900 dark:text-slate-100 font-sans selection:bg-rose-500 selection:text-white transition-colors">
            {/* Subtle persistent background animations */}
            <AnimatedBackground />

            {/* Global Navigation */}
            <Navbar />

            {/* Main Application Routes */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/predict" element={<Predict />} />
                <Route path="/result" element={<Result />} />
                <Route path="/recovery-tips" element={<RecoveryTips />} />
                <Route path="/about" element={<About />} />
                {/* Catch-all fallback */}
                <Route path="*" element={<Home />} />
              </Routes>
            </main>

            {/* Global Footer */}
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
