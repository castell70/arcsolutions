import React from 'react';

interface LogoARCProps {
  className?: string;
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
  layout?: 'horizontal' | 'stacked';
}

export const LogoARC: React.FC<LogoARCProps> = ({
  className = 'h-14 w-auto',
  variant = 'light',
  showSubtitle = true,
  layout = 'horizontal',
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#091E3A';
  const subtextColor = isDark ? '#A0AEC0' : '#475569';
  const uid = React.useId().replace(/:/g, '');

  // Vector Graphic Mark: Monogram ARC with 4 Growth Bars and Ascending Red Arrow
  // - Background growth bars and arrow rendered with subtle transparency (opacity 0.38)
  //   so foreground letters A, R, C stand out with maximum clarity and contrast.
  // - Letters A, R, and C are clearly separated with distinct negative space (no overlapping).
  const renderMark = () => (
    <g id={`arc-mark-${uid}`}>
      <defs>
        {/* Vibrant Gradients Matching ARC Solutions Brand Identity */}
        <linearGradient id={`blueGrad-${uid}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#003E7E" />
          <stop offset="50%" stopColor="#005FAA" />
          <stop offset="100%" stopColor="#007ACC" />
        </linearGradient>
        <linearGradient id={`orangeGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6A00" />
          <stop offset="60%" stopColor="#F25100" />
          <stop offset="100%" stopColor="#DE3800" />
        </linearGradient>
        <linearGradient id={`greenGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#189B40" />
          <stop offset="100%" stopColor="#28B854" />
        </linearGradient>
        <linearGradient id={`arrowGrad-${uid}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BA1A1A" />
          <stop offset="50%" stopColor="#D32F2F" />
          <stop offset="100%" stopColor="#EA3B2C" />
        </linearGradient>
        <filter id={`shadow-${uid}`} x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.22" />
        </filter>
        <filter id={`bgShadow-${uid}`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* 1. ASCENDING GRAPHIC BEHIND: Semi-transparent (opacity="0.38") so letters A-R-C pop out */}
      <g opacity="0.38" filter={`url(#bgShadow-${uid})`}>
        {/* Bar 1: Royal Blue (Behind Letter A) */}
        <polygon points="28,118 28,68 56,52 56,118" fill="#0066B3" />

        {/* Bar 2: Emerald Green (Behind space A-R & R stem) */}
        <polygon points="78,118 78,48 106,32 106,118" fill="#2EA043" />

        {/* Bar 3: Golden Amber (Behind R leg & space R-C) */}
        <polygon points="128,118 128,28 156,12 156,118" fill="#F59E0B" />

        {/* Bar 4: Vivid Orange (Behind Letter C) */}
        <polygon points="178,118 178,8 206,-8 206,118" fill="#EA580C" />

        {/* Dynamic Ascending Red Arrow (Sweeping across all bars from behind A to above C) */}
        <polygon points="72,82 188,-4 200,4 82,90" fill={`url(#arrowGrad-${uid})`} />
        <polygon points="236,-32 192,-24 203,-11 209,4" fill={`url(#arrowGrad-${uid})`} />
      </g>

      {/* 2. FOREGROUND LETTERS: Clearly separated, full opacity A (Blue), R (Orange), C (Green) */}
      <g filter={`url(#shadow-${uid})`}>
        {/* LETTER A (Deep Royal Blue) - X: 16 to 80 */}
        <path
          d="M 16 120 L 41 55 L 55 55 L 80 120 L 65 120 L 59 104 L 37 104 L 31 120 Z
             M 42 89 L 54 89 L 48 71 Z"
          fill={`url(#blueGrad-${uid})`}
          fillRule="evenodd"
        />

        {/* LETTER R (Vibrant Orange) - X: 88 to 134 */}
        <path
          d="M 88 55 L 115 55 C 127 55 134 63 134 74 C 134 82 129 88 121 90 L 134 120 L 118 120 L 106 93 L 102 93 L 102 120 L 88 120 Z
             M 102 67 L 102 81 L 113 81 C 118 81 121 78 121 74 C 121 70 118 67 113 67 Z"
          fill={`url(#orangeGrad-${uid})`}
          fillRule="evenodd"
        />

        {/* LETTER C (Vibrant Emerald Green) - X: 148 to 215 */}
        <path
          d="M 215 73 L 202 82 C 198 75 192 70 184 70 C 172 70 164 79 164 91 C 164 103 172 112 184 112 C 192 112 198 106 202 99 L 215 108 C 208 119 198 125 184 125 C 162 125 148 110 148 91 C 148 72 162 57 184 57 C 198 57 208 63 215 73 Z"
          fill={`url(#greenGrad-${uid})`}
        />
      </g>
    </g>
  );

  if (layout === 'stacked') {
    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`}>
        <svg
          viewBox="10 -38 235 255"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="ARC Solutions Logo"
        >
          {/* Top Monogram Mark with full-width background graphic */}
          {renderMark()}

          {/* Wordmark "ARC Solutions" (Substantially Enlarged) */}
          <text
            x="125"
            y="166"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="30"
            fill={textColor}
            letterSpacing="-0.5"
          >
            ARC Solutions
          </text>

          {/* Subtitle "SOLUCIONES EMPRESARIALES" (Substantially Enlarged) */}
          {showSubtitle && (
            <text
              x="125"
              y="190"
              textAnchor="middle"
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
              fontWeight="800"
              fontSize="12.5"
              fill={subtextColor}
              letterSpacing="2.8"
            >
              SOLUCIONES EMPRESARIALES
            </text>
          )}
        </svg>
      </div>
    );
  }

  // Horizontal Layout (Optimized for Navigation Bars & Headers)
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="10 -38 545 170"
        className="w-full h-full drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ARC Solutions Logo"
      >
        {/* Left Monogram Mark */}
        {renderMark()}

        {/* Right Corporate Text Lockup (Significantly Enlarged for Maximum Legibility) */}
        <g transform="translate(254, 0)">
          <text
            x="0"
            y="64"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="44"
            fill={textColor}
            letterSpacing="-0.8"
          >
            ARC Solutions
          </text>

          {showSubtitle && (
            <text
              x="2"
              y="98"
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
              fontWeight="800"
              fontSize="16.5"
              fill={subtextColor}
              letterSpacing="3"
            >
              SOLUCIONES EMPRESARIALES
            </text>
          )}
        </g>
      </svg>
    </div>
  );
};
