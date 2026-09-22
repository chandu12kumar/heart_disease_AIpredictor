import React from 'react';

export default function ECGLine({ className = '', height = 48, color = '#e11d48' }) {
  return (
    <div 
      className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 100"
        className="w-full h-auto stroke-current"
        style={{ color }}
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 50 L 180 50 L 210 50 L 225 35 L 235 65 L 245 10 L 260 90 L 275 40 L 285 55 L 300 50 L 480 50 L 510 50 L 525 35 L 535 65 L 545 10 L 560 90 L 575 40 L 585 55 L 600 50 L 780 50 L 810 50 L 825 35 L 835 65 L 845 10 L 860 90 L 875 40 L 885 55 L 900 50 L 1000 50"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-40 animate-ecg"
        />
      </svg>
    </div>
  );
}
