import React from 'react';

export default function AnimatedBackground() {
  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10 select-none"
      aria-hidden="true"
    >
      {/* Soft gradient background base */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-rose-50/20 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      {/* Floating subtle ambient orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-rose-200/30 dark:bg-rose-900/15 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-red-100/40 dark:bg-red-950/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-blue-100/30 dark:bg-blue-950/15 rounded-full blur-3xl animate-float-slow" />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" 
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
}
