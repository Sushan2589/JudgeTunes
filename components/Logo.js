"use client";

import React from "react";


const Logo = () => {
  return (
    <div className="flex gap-3 justify-center">
        
      <svg
        width="45"
        height="45"
        viewBox="0 0 80 80"
        className="logo-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="50%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="noteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        {/* Main J shape */}
        <path
          d="M35 12 L35 45 Q35 58 22 58 Q9 58 9 45 L9 38"
          stroke="url(#logoGradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          className="j-stroke"
        />

        {/* Waves */}
        <path
          d="M45 20 Q49 18 53 20 Q57 22 61 20"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
          className="wave-1"
        />
        <path
          d="M45 26 Q49 24 53 26 Q57 28 61 26"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
          className="wave-2"
        />
        <path
          d="M45 32 Q49 30 53 32 Q57 34 61 32"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
          className="wave-3"
        />

        {/* Notes */}
        <circle cx="50" cy="18" r="4" fill="url(#noteGradient)" className="note-1" />
        <rect x="54" y="8" width="2" height="14" fill="url(#noteGradient)" className="stem-1" />
        <circle cx="62" cy="25" r="3.5" fill="url(#noteGradient)" className="note-2" />
        <rect x="65.5" y="15" width="2" height="12" fill="url(#noteGradient)" className="stem-2" />

        <circle cx="42" cy="15" r="2" fill="url(#logoGradient)" className="flow-note-1" opacity="0.8" />
        <circle cx="68" cy="35" r="1.5" fill="url(#logoGradient)" className="flow-note-2" opacity="0.6" />
        <circle cx="72" cy="42" r="1.2" fill="url(#logoGradient)" className="flow-note-3" opacity="0.4" />
      </svg>

      <span className="logo-text">JudgeTunes</span>
    </div>
  );
};

export default Logo;
