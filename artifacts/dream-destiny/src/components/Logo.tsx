import React from "react";

interface LogoProps {
  size?: number;
  showText?: boolean;
  textSize?: string;
}

export default function Logo({ size = 48, showText = true, textSize = "text-xl" }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Open Book at bottom */}
        <path
          d="M10 72 Q50 65 90 72 L90 80 Q50 73 10 80 Z"
          fill="#2d6a4f"
        />
        <path
          d="M10 72 Q50 66 90 72"
          stroke="#1b4332"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Book left page */}
        <path
          d="M10 72 Q28 63 50 67 L50 80 Q28 76 10 80 Z"
          fill="#40916c"
        />
        {/* Book right page */}
        <path
          d="M50 67 Q72 63 90 72 L90 80 Q72 76 50 80 Z"
          fill="#52b788"
        />
        {/* Book spine */}
        <line x1="50" y1="67" x2="50" y2="80" stroke="#1b4332" strokeWidth="2" />

        {/* Globe body */}
        <circle cx="50" cy="46" r="24" fill="#52b788" />
        <circle cx="50" cy="46" r="24" fill="url(#globeGrad)" />

        {/* Globe grid lines */}
        <ellipse cx="50" cy="46" rx="10" ry="24" stroke="#2d6a4f" strokeWidth="0.8" fill="none" />
        <ellipse cx="50" cy="46" rx="20" ry="24" stroke="#2d6a4f" strokeWidth="0.6" fill="none" />
        <line x1="26" y1="46" x2="74" y2="46" stroke="#2d6a4f" strokeWidth="0.8" />
        <line x1="28" y1="36" x2="72" y2="36" stroke="#2d6a4f" strokeWidth="0.6" />
        <line x1="28" y1="56" x2="72" y2="56" stroke="#2d6a4f" strokeWidth="0.6" />

        {/* Globe outline */}
        <circle cx="50" cy="46" r="24" stroke="#1b4332" strokeWidth="1.5" fill="none" />

        {/* Gold arrow / orbit around globe */}
        <path
          d="M 28 62 Q 50 18 75 30"
          stroke="#f4a261"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Arrow head */}
        <polygon
          points="75,30 68,26 72,34"
          fill="#f4a261"
        />

        {/* Graduation cap */}
        <polygon
          points="50,16 65,22 50,28 35,22"
          fill="#1b4332"
        />
        <rect x="47" y="22" width="6" height="8" fill="#1b4332" />
        <circle cx="50" cy="31" r="2.5" fill="#f4a261" />
        {/* Cap tassel */}
        <line x1="65" y1="22" x2="65" y2="30" stroke="#1b4332" strokeWidth="1.5" />
        <circle cx="65" cy="31" r="1.5" fill="#f4a261" />

        <defs>
          <radialGradient id="globeGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#74c69d" />
            <stop offset="100%" stopColor="#2d6a4f" />
          </radialGradient>
        </defs>
      </svg>

      {showText && (
        <div className="flex flex-col leading-tight">
          <div className={`${textSize} font-bold tracking-tight`}>
            <span style={{ color: "#2d6a4f" }}>Dream </span>
            <span style={{ color: "#e07b2a" }}>Destiny</span>
          </div>
          <div className="text-[10px] italic tracking-wide" style={{ color: "#6b7280", fontFamily: "Georgia, serif" }}>
            Future Begins Here...
          </div>
        </div>
      )}
    </div>
  );
}
