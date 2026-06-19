interface ClientLogoProps {
  id: string;
  className?: string;
  height?: number;
}

export default function ClientLogo({ id, className = '', height = 36 }: ClientLogoProps) {
  const isSquare = ['annjoo', 'humecemboard', 'simedarby', 'kendek'].includes(id);
  const adjustedHeight = isSquare ? height * 1.45 : height;
  const svgStyle = { height: adjustedHeight, width: 'auto', display: 'inline-block', verticalAlign: 'middle' };

  switch (id) {
    case 'annjoo':
      return (
        <svg viewBox="0 0 160 160" style={svgStyle} className={`client-logo-svg ${className}`}>
          {/* Rounded red background from AJ logo */}
          <rect x="5" y="5" width="150" height="150" rx="36" fill="#E11D48"/>
          {/* Monogram A and J lines */}
          <path 
            d="M 40,40 L 40,110 C 40,115.52 44.48,120 50,120 H 75 V 75 H 100 V 120 C 100,120 102.5,120 105,120 C 110.52,120 115,115.52 115,110 V 40 C 115,34.48 110.52,30 105,30 H 50 C 44.48,30 40,34.48 40,40 Z M 75,60 H 100 V 45 H 75 Z" 
            fill="#ffffff" 
          />
          {/* Right/bottom 3D depth shape overlay */}
          <path 
            d="M 105,30 C 110.52,30 115,34.48 115,40 V 110 C 115,115.52 110.52,120 105,120 L 105,130 C 116.04,130 125,121.04 125,110 V 40 C 125,28.96 116.04,20 105,20 L 105,30 Z" 
            fill="#be123c" 
            opacity="0.85"
          />
        </svg>
      );
    case 'indahwater':
      return (
        <svg viewBox="0 0 320 100" style={svgStyle} className={`client-logo-svg ${className}`}>
          {/* Curved green/blue leaves (Indah Water wing graphic) */}
          <path d="M 130,42 C 145,22 165,18 178,14 C 167,23 154,32 147,42 Z" fill="#0284c7" />
          <path d="M 190,42 C 175,22 155,18 142,14 C 153,23 166,32 173,42 Z" fill="#16a34a" />
          <path d="M 152,38 C 159,26 170,23 178,21 C 170,26 163,31 159,38 Z" fill="#0284c7" />
          <path d="M 168,38 C 161,26 150,23 142,21 C 150,26 157,31 161,38 Z" fill="#16a34a" />
          
          {/* Text in Indah Water green */}
          <text x="35" y="78" fontFamily="var(--font-sans)" fontWeight="800" fontSize="28" fill="#16a34a" letterSpacing="-0.5">Indah</text>
          <text x="120" y="78" fontFamily="var(--font-sans)" fontWeight="400" fontSize="28" fill="#16a34a" letterSpacing="-0.5">Water</text>
        </svg>
      );
    case 'singer':
      return (
        <svg viewBox="0 0 280 80" style={svgStyle} className={`client-logo-svg ${className}`}>
          {/* Red circle with white bold 'S' */}
          <circle cx="45" cy="40" r="26" fill="#e11d48"/>
          <circle cx="45" cy="40" r="23" stroke="#be123c" strokeWidth="1.5" fill="none"/>
          <text x="34" y="52" fontFamily="var(--font-heading)" fontWeight="900" fontSize="35" fill="#ffffff">S</text>
          {/* SINGER text in bold red */}
          <text x="90" y="52" fontFamily="var(--font-sans)" fontWeight="800" fontSize="36" fill="#e11d48" letterSpacing="2.5">SINGER</text>
        </svg>
      );
    case 'courts':
      return (
        <svg viewBox="0 0 280 80" style={svgStyle} className={`client-logo-svg ${className}`}>
          {/* Yellow outer circular ring */}
          <circle cx="45" cy="40" r="24" stroke="#eab308" strokeWidth="8.5" fill="none" strokeDasharray="115 35" transform="rotate(-50 45 40)"/>
          {/* Inner blue crescent */}
          <circle cx="45" cy="40" r="14" fill="#1e40af" opacity="0.12"/>
          {/* COURTS text in royal blue */}
          <text x="88" y="52" fontFamily="var(--font-sans)" fontWeight="800" fontSize="36" fill="#1e40af" letterSpacing="0.8">COURTS</text>
        </svg>
      );
    case 'volare':
      return (
        <svg viewBox="0 0 320 120" style={svgStyle} className={`client-logo-svg ${className}`}>
          {/* V logo mark with gold swoosh */}
          <path d="M 45,20 L 60,65 L 75,20 H 62 L 55,48 L 48,20 Z" className="brand-dark-fill" />
          <path d="M 52,48 L 68,14 L 88,30 L 68,60 Z" fill="#ffd875" />
          
          {/* VOLARE text */}
          <text x="96" y="54" fontFamily="var(--font-sans)" fontWeight="800" fontSize="34" className="brand-dark-fill" letterSpacing="0.5">VOLARE</text>
          
          {/* Stay Collected yellow banner/ribbon */}
          <path d="M 160,66 H 262 L 267,76 L 262,86 H 160 L 156,76 Z" fill="#eab308" />
          <text x="168" y="80" fontFamily="var(--font-sans)" fontWeight="700" fontSize="11.5" fill="#111827" fontStyle="italic">Stay Collected</text>
        </svg>
      );
    case 'humecemboard':
      return (
        <svg viewBox="0 0 160 160" style={svgStyle} className={`client-logo-svg ${className}`}>
          {/* Hume Cemboard Industries gold diamond monogram */}
          <path d="M 80,15 L 145,80 L 80,145 L 15,80 Z" stroke="#d4af37" strokeWidth="7.5" fill="none" strokeLinejoin="round"/>
          <path d="M 80,38 L 122,80 L 80,122 L 38,80 Z" stroke="#d4af37" strokeWidth="5.5" fill="none" strokeLinejoin="round"/>
          <path d="M 80,60 L 100,80 L 80,100 L 60,80 Z" stroke="#d4af37" strokeWidth="4" fill="none" strokeLinejoin="round"/>
        </svg>
      );
    case 'technomech':
      return (
        <svg viewBox="0 0 320 100" style={svgStyle} className={`client-logo-svg ${className}`}>
          <defs>
            <linearGradient id="techMechGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0052a5" />
              <stop offset="50%" stopColor="#0072bc" />
              <stop offset="100%" stopColor="#009ee3" />
            </linearGradient>
          </defs>
          {/* 3 blue wings */}
          <g fill="url(#techMechGrad)">
            <path d="M 15,22 Q 40,17 70,37 Q 45,32 25,52 Z" />
            <path d="M 38,22 Q 63,17 93,37 Q 68,32 48,52 Z" />
            <path d="M 61,22 Q 86,17 116,37 Q 91,32 71,52 Z" />
          </g>
          {/* TechnoMech text */}
          <text x="128" y="55" fontFamily="var(--font-sans)" fontWeight="800" fontStyle="italic" fontSize="30" className="brand-dark-fill">TechnoMech</text>
        </svg>
      );
    case 'maxeon':
      return (
        <svg viewBox="0 0 250 80" style={svgStyle} className={`client-logo-svg ${className}`}>
          {/* maxeon text in royal blue */}
          <text x="15" y="54" fontFamily="var(--font-sans)" fontWeight="800" fontSize="42" className="brand-blue-fill" letterSpacing="-1.2">maxeon</text>
        </svg>
      );
    case 'drbhicom':
      return (
        <svg viewBox="0 0 280 80" style={svgStyle} className={`client-logo-svg ${className}`}>
          {/* Blue container box */}
          <rect x="10" y="20" width="260" height="40" fill="#003580" stroke="#003580" strokeWidth="2"/>
          {/* White inner border */}
          <rect x="12" y="22" width="256" height="36" fill="none" stroke="#ffffff" strokeWidth="1.5"/>
          {/* Red underline accent */}
          <line x1="10" y1="63" x2="270" y2="63" stroke="#dc2626" strokeWidth="3"/>
          {/* White DRB-HICOM text */}
          <text x="32" y="49" fontFamily="var(--font-sans)" fontWeight="700" fontSize="24" fill="#ffffff" letterSpacing="0.8">DRB-HICOM</text>
        </svg>
      );
    case 'medilaund':
      return (
        <svg viewBox="0 0 280 90" style={svgStyle} className={`client-logo-svg ${className}`}>
          {/* Green cross lines */}
          <g stroke="#16a34a" strokeWidth="4.5" strokeLinecap="round">
            <path d="M 30,18 L 65,58" />
            <path d="M 42,18 L 77,58" />
            <path d="M 54,18 L 89,58" />
            
            <path d="M 65,18 L 30,58" />
            <path d="M 77,18 L 42,58" />
            <path d="M 89,18 L 54,58" />
          </g>
          {/* Medilaund text in green */}
          <text x="108" y="52" fontFamily="var(--font-sans)" fontWeight="700" fontSize="30" fill="#16a34a" letterSpacing="-0.5">Medilaund</text>
        </svg>
      );
    case 'jwmarriott':
      return (
        <svg viewBox="0 0 320 80" style={svgStyle} className={`client-logo-svg ${className}`}>
          {/* Minimalist Griffin crest symbol */}
          <path d="M 28,15 C 26,17 25,20 25,23 C 25,26 27,29 29,32 C 32,36 35,42 35,48 C 35,50 34,52 32,53 C 30,54 28,53 26,52 L 24,54 C 27,56 31,56 34,55 C 38,53 40,49 40,45 C 40,38 36,32 33,26 C 35,26 38,28 41,30 C 44,32 47,35 48,39 L 51,37 C 49,32 46,28 42,25 C 39,23 35,22 31,22 M 30,15 L 30,12 L 28,12 L 28,15" className="brand-dark-fill" />
          <text x="62" y="48" fontFamily="var(--font-sans)" fontWeight="400" fontSize="22" className="brand-dark-fill" letterSpacing="3">JW MARRIOTT</text>
        </svg>
      );
    case 'simedarby':
      return (
        <svg viewBox="0 0 200 200" style={svgStyle} className={`client-logo-svg ${className}`}>
          <defs>
            <linearGradient id="sdShieldGrad" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffa000" />
              <stop offset="30%" stopColor="#ff3000" />
              <stop offset="100%" stopColor="#b30000" />
            </linearGradient>
            <linearGradient id="sdInnerBorderGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255, 215, 0, 0)" />
              <stop offset="50%" stopColor="rgba(255, 215, 0, 0.3)" />
              <stop offset="100%" stopColor="#ffd700" />
            </linearGradient>
          </defs>
          {/* Shield cushion shape */}
          <path 
            d="M 60,25 Q 100,15 140,25 C 155,25 165,35 165,50 Q 172,85 165,120 C 165,135 155,145 140,145 Q 100,155 60,145 C 45,145 35,135 35,120 Q 28,85 35,50 C 35,35 45,25 60,25 Z" 
            fill="url(#sdShieldGrad)" 
          />
          {/* Inner gold border highlight */}
          <path 
            d="M 60,25 Q 100,15 140,25 C 155,25 165,35 165,50 Q 172,85 165,120 C 165,135 155,145 140,145 Q 100,155 60,145 C 45,145 35,135 35,120 Q 28,85 35,50 C 35,35 45,25 60,25 Z" 
            fill="none" 
            stroke="url(#sdInnerBorderGrad)" 
            strokeWidth="3.5" 
            transform="translate(8, 6.8) scale(0.92)"
          />
          {/* Sime Darby text inside shield */}
          <text x="100" y="75" fontFamily="var(--font-sans)" fontWeight="800" fontSize="40" fill="#ffffff" textAnchor="middle" letterSpacing="-1.5">Sime</text>
          <text x="100" y="115" fontFamily="var(--font-sans)" fontWeight="800" fontSize="40" fill="#ffffff" textAnchor="middle" letterSpacing="-1.5">Darby</text>
          {/* Property text below shield */}
          <text x="100" y="182" fontFamily="var(--font-sans)" fontWeight="800" fontSize="28" className="brand-dark-fill" textAnchor="middle" letterSpacing="-0.5">Property</text>
        </svg>
      );
    case 'kendek':
      return (
        <svg viewBox="0 0 200 200" style={svgStyle} className={`client-logo-svg ${className}`}>
          {/* Concentric borders */}
          {/* Outer blue circle */}
          <circle cx="100" cy="90" r="62" stroke="#0038a8" strokeWidth="6" fill="none" />
          {/* Inner red circle */}
          <circle cx="100" cy="90" r="51" stroke="#dc2626" strokeWidth="3" fill="none" />
          
          {/* Monogram inside inner circle */}
          {/* Middle vertical line */}
          <line x1="101" y1="48" x2="101" y2="132" stroke="#0038a8" strokeWidth="8.5" strokeLinecap="round" />
          {/* Right vertical line */}
          <line x1="131" y1="48" x2="131" y2="132" stroke="#0038a8" strokeWidth="8.5" strokeLinecap="round" />
          {/* Horizontal connector line */}
          <line x1="101" y1="90" x2="131" y2="90" stroke="#0038a8" strokeWidth="8.5" />
          {/* Left loop (elliptical arc to left, centered at 100) */}
          <path d="M 101,48 A 31,42 0 0,0 101,132" fill="none" stroke="#0038a8" strokeWidth="8.5" strokeLinecap="round" />
          
          {/* TM Symbol */}
          <text x="160" y="44" fontFamily="var(--font-sans)" fontWeight="800" fontSize="11" fill="#0038a8">TM</text>
          
          {/* Subtitles KIS and KDI */}
          <text x="50" y="157" fontFamily="var(--font-sans)" fontWeight="800" fontSize="16" fill="#0038a8" textAnchor="end">KIS</text>
          <text x="150" y="157" fontFamily="var(--font-sans)" fontWeight="800" fontSize="16" fill="#0038a8" textAnchor="start">KDI</text>
          
          {/* KENDEK main text underneath */}
          <text x="100" y="193" fontFamily="var(--font-sans)" fontWeight="900" fontSize="30" fill="#0038a8" textAnchor="middle" letterSpacing="1">KENDEK</text>
        </svg>
      );
    default:
      return null;
  }
}
