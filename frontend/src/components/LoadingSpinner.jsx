import React from 'react';
import { Heart } from 'lucide-react';

export default function LoadingSpinner({ message = 'Analyzing your health information...' }) {
  return (
    <div 
      className="flex flex-col items-center justify-center p-8 text-center space-y-4"
      aria-live="polite"
      role="status"
    >
      <div className="relative flex items-center justify-center">
        {/* Soft pulsing halo */}
        <div className="w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-950/60 animate-ping opacity-60 absolute" />
        
        {/* Heart icon center */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-500 flex items-center justify-center text-white shadow-lg shadow-rose-500/30 z-10">
          <Heart className="w-7 h-7 fill-white animate-pulse-gentle" />
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-base font-semibold text-slate-800 dark:text-slate-100">
          {message}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Evaluating clinical measurements through calibrated KNN pipeline
        </p>
      </div>
    </div>
  );
}
