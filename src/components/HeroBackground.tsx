interface HeroBackgroundProps {
  isStatic?: boolean;
  page?: 'home' | 'about' | 'services' | 'esg' | 'quality' | 'journey' | 'contact' | 'wizard';
  backgroundImage?: string;
}

export default function HeroBackground({ isStatic = false, page = 'home', backgroundImage }: HeroBackgroundProps) {
  const bgImages = {
    home: '/hero-home.png',
    about: '/hero-about.png',
    services: '/hero-services.png',
    esg: '/hero-esg.png',
    quality: '/hero-quality.png',
    journey: '/hero-journey.png',
    contact: '/hero-contact.png',
    wizard: '/hero-wizard.png',
  };

  const bgUrl = backgroundImage || bgImages[page] || bgImages.home;

  return (
    <div className="hero-bg-vfx">
      {/* 1. Background Image container with optional movement animation */}
      <div 
        className={`hero-bg-image ${isStatic ? "" : "bg-movement-anim"}`}
        style={{ backgroundImage: `url(${bgUrl})` }}
      ></div>
      
      {/* Gold Highlight Overlay to paint the background details in glowing gold */}
      <div className="hero-bg-gold-overlay"></div>
      
      {/* 2. Technical Blueprint Scale Overlay */}
      <svg 
        className="hero-bg-svg" 
        viewBox="0 0 1920 1080" 
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice" 
        fill="none" 
        stroke="currentColor"
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      >
        {/* Horizontal scale line */}
        <line x1="80" y1="50" x2="1840" y2="50" strokeWidth="0.5" opacity="0.35" />
        <path d="M100 45 v10 M200 47 v6 M300 47 v6 M400 47 v6 M500 45 v10 M600 47 v6 M700 47 v6 M800 47 v6 M900 45 v10 M1000 45 v10 M1100 47 v6 M1200 47 v6 M1300 47 v6 M1400 45 v10 M1500 47 v6 M1600 47 v6 M1700 47 v6 M1800 45 v10" strokeWidth="0.4" opacity="0.3" />
        <text x="100" y="38" fontSize="8" fill="currentColor" stroke="none" opacity="0.4" fontFamily="monospace">0.00m</text>
        <text x="500" y="38" fontSize="8" fill="currentColor" stroke="none" opacity="0.4" fontFamily="monospace">10.00m</text>
        <text x="900" y="38" fontSize="8" fill="currentColor" stroke="none" opacity="0.4" fontFamily="monospace">20.00m</text>
        <text x="1400" y="38" fontSize="8" fill="currentColor" stroke="none" opacity="0.4" fontFamily="monospace">30.00m</text>
        <text x="1800" y="38" fontSize="8" fill="currentColor" stroke="none" opacity="0.4" fontFamily="monospace">40.00m</text>

        {/* Vertical scale lines */}
        <line x1="80" y1="50" x2="80" y2="1030" strokeWidth="0.5" opacity="0.35" />
        <line x1="1840" y1="50" x2="1840" y2="1030" strokeWidth="0.5" opacity="0.35" />

        {/* Corner Technical Frame markings */}
        {/* Top Left */}
        <g opacity="0.5">
          <path d="M30 100 h20 M30 100 v20" strokeWidth="0.5" />
          <text x="35" y="93" fontSize="6.5" fill="currentColor" stroke="none" fontFamily="monospace">GRID_REF: SD-01</text>
        </g>
        {/* Top Right */}
        <g opacity="0.5">
          <path d="M1890 100 h-20 M1890 100 v20" strokeWidth="0.5" />
          <text x="1805" y="93" fontSize="6.5" fill="currentColor" stroke="none" fontFamily="monospace">PROJECT: SURIA_DIRG</text>
        </g>
        {/* Bottom Left */}
        <g opacity="0.5">
          <path d="M30 980 h20 M30 980 v-20" strokeWidth="0.5" />
          <text x="35" y="995" fontSize="6.5" fill="currentColor" stroke="none" fontFamily="monospace">SCALE: 1:50 [METRIC]</text>
        </g>
        {/* Bottom Right */}
        <g opacity="0.5">
          <path d="M1890 980 h-20 M1890 980 v-20" strokeWidth="0.5" />
          <text x="1805" y="995" fontSize="6.5" fill="currentColor" stroke="none" fontFamily="monospace">SHEET: 01 OF 06</text>
        </g>
      </svg>
      {/* Dynamic scanline overlay within hero section for added cockpit feel */}
      <div className="hero-bg-scanlines"></div>
    </div>
  );
}
