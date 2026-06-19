import React, { useMemo } from 'react';
import luxuryBg from '../assets/luxury-bg.png';

interface HeroBackgroundProps {
  isStatic?: boolean;
  page?: 'home' | 'about' | 'services' | 'esg' | 'quality' | 'journey' | 'contact' | 'wizard' | 'engineering' | 'cx' | 'digital';
  backgroundImage?: string;
}

const PHOTO_BG_IMAGES: Record<string, string> = {
  home: luxuryBg,
  about: '/hero-about.jpg',
  services: '/img-civil.jpg',
  esg: '/bg-esg-growth.jpg',
  wizard: '/img-electrical.jpg',
  quality: '/hero-quality.png',
  journey: '/hero-journey.png',
  contact: '/hero-contact.png',
  engineering: '/hero-engineering.jpg',
  cx: '/hero-cx.png',
  digital: '/hero-digital.png'
};

export default function HeroBackground({ isStatic = false, page = 'home', backgroundImage }: HeroBackgroundProps) {
  // Check if a custom non-standard image is explicitly passed
  const hasCustomBg = backgroundImage && !backgroundImage.includes('hero-');

  // Generate random stable properties for particles using useMemo to avoid recalculating on re-renders
  const particles = useMemo(() => {
    return Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2px to 6px
      left: Math.random() * 100, // 0% to 100%
      delay: Math.random() * 12, // 0s to 12s delay
      duration: Math.random() * 12 + 14, // 14s to 26s duration
      opacity: Math.random() * 0.08 + 0.02
    }));
  }, []);

  return (
    <div className="hero-bg-vfx">
      {/* Self-contained CSS animations to keep App.css clean and maintain high-fidelity VFX */}
      <style>{`
        .hero-bg-vfx {
          will-change: transform;
        }
        :root {
          --bg-overlay-start: rgba(255, 255, 255, 0.12);
          --bg-overlay-end: rgba(255, 248, 238, 0.05);
        }
        [data-theme="dark"] {
          --bg-overlay-start: rgba(4, 9, 26, 0.25);
          --bg-overlay-end: rgba(255, 173, 1, 0.02);
        }
        .hero-bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
          opacity: 0.92; /* Increased opacity from 0.85 to make image more visible */
          mix-blend-mode: normal;
          pointer-events: none;
          transition: opacity var(--transition-normal), filter var(--transition-normal);
          will-change: transform, opacity, filter;
        }
        [data-theme="dark"] .hero-bg-image {
          opacity: 0.88; /* Highly visible gold depth in dark theme */
          filter: brightness(0.68) contrast(1.05) saturate(0.95);
          mix-blend-mode: normal;
        }
        .animated-bg-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        .animated-bg-svg {
          width: 100%;
          height: 100%;
          opacity: 0.04; /* Extremely soft elegant watermark line visibility */
          pointer-events: none;
        }
        [data-theme="dark"] .animated-bg-svg {
          opacity: 0.08;
        }
        
        /* Floating Gold Dust Particles */
        .gold-particles-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .gold-particle {
          position: absolute;
          bottom: -20px;
          background: radial-gradient(circle, #ffd700 0%, rgba(255, 173, 1, 0.45) 50%, rgba(184, 134, 11, 0) 100%);
          border-radius: 50%;
          box-shadow: 0 0 8px 1px rgba(255, 173, 1, 0.4);
          animation: float-up-drift linear infinite;
          will-change: transform, opacity;
        }
        .gold-glow-effect {
          filter: drop-shadow(0 0 6px rgba(255, 173, 1, 0.85)) drop-shadow(0 0 12px rgba(255, 173, 1, 0.4));
          will-change: filter, transform;
        }
        @keyframes float-up-drift {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: var(--particle-opacity, 0.6);
          }
          90% {
            opacity: var(--particle-opacity, 0.6);
          }
          100% {
            transform: translateY(-110vh) translateX(60px);
            opacity: 0;
          }
        }

        /* Rotation animations */
        @keyframes bg-rotate-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bg-rotate-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .gear-cw {
          animation: bg-rotate-cw 40s linear infinite;
          will-change: transform;
        }
        .gear-ccw {
          animation: bg-rotate-ccw 45s linear infinite;
          will-change: transform;
        }
        .gear-fast-cw {
          animation: bg-rotate-cw 22s linear infinite;
          will-change: transform;
        }
        .gear-fast-ccw {
          animation: bg-rotate-ccw 26s linear infinite;
          will-change: transform;
        }
        .turbine-blades {
          animation: bg-rotate-cw 8s linear infinite;
          will-change: transform;
        }
        .turbine-blades-slow {
          animation: bg-rotate-cw 12s linear infinite;
          will-change: transform;
        }
        .radar-sweep {
          animation: bg-rotate-cw 5.5s linear infinite;
          will-change: transform;
        }
        .solar-rays-spin {
          animation: bg-rotate-cw 90s linear infinite;
          will-change: transform;
        }
        
        /* Pulse node animation */
        @keyframes node-pulse {
          0%, 100% { r: 4px; opacity: 0.5; stroke-width: 1px; }
          50% { r: 7.5px; opacity: 0.95; stroke-width: 2.5px; }
        }
        .pulse-node {
          animation: node-pulse 2.8s ease-in-out infinite;
          transform-origin: center;
        }
        
        /* Breathing scale animation for design points */
        @keyframes breath-scale {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px rgba(255, 173, 1, 0.25)); }
          50% { transform: scale(1.15); filter: drop-shadow(0 0 10px rgba(255, 173, 1, 0.65)); }
        }
        .breath-node {
          animation: breath-scale 3.2s ease-in-out infinite;
        }

        /* Equalizer bar scale animations */
        @keyframes eq-scale-1 { 0%, 100% { transform: scaleY(0.3); } 50% { transform: scaleY(0.95); } }
        @keyframes eq-scale-2 { 0%, 100% { transform: scaleY(0.15); } 50% { transform: scaleY(0.75); } }
        @keyframes eq-scale-3 { 0%, 100% { transform: scaleY(0.4); } 50% { transform: scaleY(1.1); } }
        @keyframes eq-scale-4 { 0%, 100% { transform: scaleY(0.1); } 50% { transform: scaleY(0.8); } }
        @keyframes eq-scale-5 { 0%, 100% { transform: scaleY(0.48); } 50% { transform: scaleY(0.6); } }
        @keyframes eq-scale-6 { 0%, 100% { transform: scaleY(0.25); } 50% { transform: scaleY(1.0); } }
        
        .eq-bar-1 { animation: eq-scale-1 1.3s ease-in-out infinite; transform-origin: bottom; will-change: transform; }
        .eq-bar-2 { animation: eq-scale-2 0.9s ease-in-out infinite; transform-origin: bottom; will-change: transform; }
        .eq-bar-3 { animation: eq-scale-3 1.6s ease-in-out infinite; transform-origin: bottom; will-change: transform; }
        .eq-bar-4 { animation: eq-scale-4 1.1s ease-in-out infinite; transform-origin: bottom; will-change: transform; }
        .eq-bar-5 { animation: eq-scale-5 1.4s ease-in-out infinite; transform-origin: bottom; will-change: transform; }
        .eq-bar-6 { animation: eq-scale-6 0.8s ease-in-out infinite; transform-origin: bottom; will-change: transform; }

        /* Floating Technical coordinates */
        @keyframes tech-bob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        .tech-bob-group {
          animation: tech-bob 6s ease-in-out infinite;
          will-change: transform;
        }
        .tech-bob-group-delayed {
          animation: tech-bob 7.5s ease-in-out infinite;
          animation-delay: 2.2s;
          will-change: transform;
        }
      `}</style>

      {/* Global Shared SVG Definitions to share beautiful gradients and filters */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          {/* Main Gold Gradient */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#ffad01" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#b8860b" stopOpacity="0.2" />
          </linearGradient>

          {/* Fading Gold Line Gradient */}
          <linearGradient id="goldLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.05" />
            <stop offset="20%" stopColor="var(--secondary)" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#ffd700" stopOpacity="0.95" />
            <stop offset="80%" stopColor="var(--secondary)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.05" />
          </linearGradient>

          {/* SVG Glow Filter removed in favor of GPU-accelerated CSS drop-shadow class */}
        </defs>
      </svg>

      {/* Ambient Floating Gold Dust Particles */}
      {!isStatic && (
        <div className="gold-particles-container">
          {particles.map((p) => (
            <div
              key={p.id}
              className="gold-particle"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.left}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                '--particle-opacity': p.opacity
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      {/* Premium menu-specific or custom gold background image with gold wash overlay */}
      <div 
        className={`hero-bg-image bg-movement-anim page-${page}`}
        style={{ 
          backgroundImage: `linear-gradient(var(--bg-overlay-start, rgba(255, 255, 255, 0.15)) 0%, var(--bg-overlay-end, rgba(255, 248, 238, 0.08)) 100%), url(${hasCustomBg && backgroundImage ? backgroundImage : (PHOTO_BG_IMAGES[page] || '/img-hero.jpg')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="animated-bg-container">
          
          {/* ==================== HOME PAGE BACKGROUND ==================== */}
          {page === 'home' && (
            <svg className="animated-bg-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" fill="none">
              {/* Concentric orbital rings */}
              <g stroke="rgba(255, 173, 1, 0.08)" strokeWidth="1">
                <circle cx="500" cy="300" r="280" />
                <circle cx="500" cy="300" r="190" strokeDasharray="3,6" />
                <circle cx="500" cy="300" r="110" />
              </g>

              {/* Glowing orbits with path animations */}
              <g stroke="url(#goldLineGrad)" strokeWidth="1.2">
                {/* Tilted Ellipse 1 */}
                <ellipse cx="500" cy="300" rx="360" ry="120" transform="rotate(-15 500 300)" id="orbit1" />
                {/* Tilted Ellipse 2 */}
                <ellipse cx="500" cy="300" rx="260" ry="80" strokeDasharray="6,8" transform="rotate(25 500 300)" id="orbit2" />
                {/* Large Outer Ellipse */}
                <ellipse cx="500" cy="300" rx="440" ry="160" transform="rotate(-5 500 300)" id="orbit3" />
              </g>

              {/* Orbital Nodes revolving along paths */}
              <g fill="#ffd700" className="gold-glow-effect">
                {/* Node on orbit 1 path */}
                <circle r="5.5" className="breath-node">
                  <animateMotion dur="24s" repeatCount="indefinite" path="M 140 300 A 360 120 -15 1 1 860 300 A 360 120 -15 1 1 140 300" />
                </circle>
                {/* Node on orbit 2 path */}
                <circle r="4.5">
                  <animateMotion dur="18s" repeatCount="indefinite" path="M 240 300 A 260 80 25 1 1 760 300 A 260 80 25 1 1 240 300" />
                </circle>
              </g>

              {/* Central Premium 3D-feeling Sun Core */}
              <g>
                <circle cx="500" cy="300" r="40" fill="url(#goldGrad)" className="gold-glow-effect" />
                <circle cx="500" cy="300" r="48" stroke="var(--secondary)" strokeWidth="1" strokeDasharray="6,12" className="gear-cw" style={{ transformOrigin: '500px 300px' }} />
                <circle cx="500" cy="300" r="54" stroke="rgba(255, 173, 1, 0.4)" strokeWidth="0.8" strokeDasharray="3,6" className="gear-ccw" style={{ transformOrigin: '500px 300px' }} />
              </g>

              {/* Radiating solar rays */}
              <g className="solar-rays-spin" style={{ transformOrigin: '500px 300px' }}>
                <line x1="500" y1="230" x2="500" y2="160" stroke="url(#goldGrad)" strokeWidth="2.0" />
                <line x1="500" y1="370" x2="500" y2="440" stroke="url(#goldGrad)" strokeWidth="2.0" />
                <line x1="430" y1="300" x2="360" y2="300" stroke="url(#goldGrad)" strokeWidth="2.0" />
                <line x1="570" y1="300" x2="640" y2="300" stroke="url(#goldGrad)" strokeWidth="2.0" />
                
                <line x1="450" y1="250" x2="400" y2="200" stroke="rgba(255, 173, 1, 0.3)" strokeWidth="1.5" />
                <line x1="550" y1="350" x2="600" y2="400" stroke="rgba(255, 173, 1, 0.3)" strokeWidth="1.5" />
                <line x1="450" y1="350" x2="400" y2="400" stroke="rgba(255, 173, 1, 0.3)" strokeWidth="1.5" />
                <line x1="550" y1="250" x2="600" y2="200" stroke="rgba(255, 173, 1, 0.3)" strokeWidth="1.5" />
              </g>
            </svg>
          )}

          {/* ==================== ABOUT & ENGINEERING PAGE BACKGROUND ==================== */}
          {(page === 'about' || page === 'engineering') && (
            <svg className="animated-bg-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" fill="none">
              {/* Technical graticule reference background lines */}
              <g stroke="rgba(255, 173, 1, 0.05)" strokeWidth="0.8">
                <line x1="0" y1="80" x2="1000" y2="80" />
                <line x1="0" y1="300" x2="1000" y2="300" />
                <line x1="0" y1="520" x2="1000" y2="520" />
                <line x1="150" y1="0" x2="150" y2="600" />
                <line x1="500" y1="0" x2="500" y2="600" />
                <line x1="850" y1="0" x2="850" y2="600" />
              </g>

              {/* Dimension Caliper measurements overlay */}
              <g stroke="var(--secondary)" strokeWidth="0.8" opacity="0.45">
                <line x1="80" y1="120" x2="80" y2="480" strokeDasharray="3,3" />
                <line x1="70" y1="120" x2="90" y2="120" />
                <line x1="70" y1="480" x2="90" y2="480" />
                <text x="60" y="300" fill="rgba(255, 173, 1, 0.65)" fontSize="9" transform="rotate(-90 60 300)" fontFamily="monospace" letterSpacing="0.1em">REF_HEIGHT: 360.00mm</text>
              </g>

              {/* Interactive/expanding caliper line */}
              <g stroke="url(#goldLineGrad)" strokeWidth="1">
                <line x1="120" y1="140" x2="420" y2="140" />
                <line x1="120" y1="133" x2="120" y2="147" strokeWidth="1.5" />
                <line x1="420" y1="133" x2="420" y2="147" strokeWidth="1.5" />
                <line x1="120" y1="140" x2="270" y2="140" stroke="var(--secondary)" strokeWidth="2.5" strokeDasharray="4,4">
                  <animate attributeName="x2" values="120;420;120" dur="10s" repeatCount="indefinite" />
                </line>
                <text x="270" y="130" fill="var(--secondary)" fontSize="8.5" fontFamily="monospace" textAnchor="middle">[CAL_SPAN_ADJUST]</text>
              </g>

              {/* Mechanical engineering interlocking gears */}
              {/* Gear 1: Left Heavy Gear */}
              <g className="gear-cw" style={{ transformOrigin: '260px 320px' }}>
                {/* Thick outer teeth circle using strokeDasharray */}
                <circle cx="260" cy="320" r="130" stroke="url(#goldGrad)" strokeWidth="16" strokeDasharray="14,14" />
                <circle cx="260" cy="320" r="114" stroke="var(--secondary)" strokeWidth="1" />
                <circle cx="260" cy="320" r="80" stroke="rgba(255, 173, 1, 0.25)" strokeWidth="1.5" />
                <circle cx="260" cy="320" r="35" stroke="var(--secondary)" strokeWidth="2.5" />
                {/* Gear Spokes */}
                <line x1="260" y1="190" x2="260" y2="450" stroke="rgba(255, 173, 1, 0.35)" strokeWidth="1.5" />
                <line x1="130" y1="320" x2="390" y2="320" stroke="rgba(255, 173, 1, 0.35)" strokeWidth="1.5" />
                <line x1="168" y1="228" x2="352" y2="412" stroke="rgba(255, 173, 1, 0.2)" strokeWidth="1" />
                <line x1="168" y1="412" x2="352" y2="228" stroke="rgba(255, 173, 1, 0.2)" strokeWidth="1" />
              </g>

              {/* Gear 2: Middle Intersecting Gear */}
              <g className="gear-ccw" style={{ transformOrigin: '488px 320px' }}>
                <circle cx="488" cy="320" r="100" stroke="url(#goldGrad)" strokeWidth="13" strokeDasharray="11,11" />
                <circle cx="488" cy="320" r="87" stroke="var(--secondary)" strokeWidth="1" />
                <circle cx="488" cy="320" r="60" stroke="rgba(255, 173, 1, 0.25)" strokeWidth="1.5" />
                <circle cx="488" cy="320" r="28" stroke="var(--secondary)" strokeWidth="2" />
                <line x1="488" y1="220" x2="488" y2="420" stroke="rgba(255, 173, 1, 0.35)" strokeWidth="1.5" />
                <line x1="388" y1="320" x2="588" y2="320" stroke="rgba(255, 173, 1, 0.35)" strokeWidth="1.5" />
              </g>

              {/* Gear 3: Top Right Gear */}
              <g className="gear-fast-cw" style={{ transformOrigin: '630px 210px' }}>
                <circle cx="630" cy="210" r="65" stroke="url(#goldGrad)" strokeWidth="8" strokeDasharray="8,8" />
                <circle cx="630" cy="210" r="57" stroke="var(--secondary)" strokeWidth="0.8" />
                <circle cx="630" cy="210" r="20" stroke="var(--secondary)" strokeWidth="1.5" />
                <line x1="630" y1="145" x2="630" y2="275" stroke="rgba(255, 173, 1, 0.3)" strokeWidth="1" />
                <line x1="565" y1="210" x2="695" y2="210" stroke="rgba(255, 173, 1, 0.3)" strokeWidth="1" />
              </g>

              {/* Dynamic Technical box HUD */}
              <g className="tech-bob-group" transform="translate(680, 420)">
                <rect x="0" y="0" width="130" height="42" stroke="rgba(255, 173, 1, 0.35)" strokeWidth="1" fill="rgba(255, 255, 255, 0.05)" />
                <line x1="0" y1="8" x2="130" y2="8" stroke="rgba(255, 173, 1, 0.35)" strokeWidth="0.8" />
                <circle cx="10" cy="4" r="2" fill="var(--secondary)" />
                <text x="22" y="6" fill="var(--secondary)" fontSize="7" fontFamily="monospace">[SYS.STATUS: RUNNING]</text>
                <text x="8" y="22" fill="rgba(255, 173, 1, 0.7)" fontSize="8" fontFamily="monospace">MRO_ENG: CLASS_A</text>
                <text x="8" y="34" fill="rgba(255, 173, 1, 0.7)" fontSize="8" fontFamily="monospace">AXIS_SPEED: 40rpm</text>
              </g>
            </svg>
          )}

          {/* ==================== SERVICES & DIGITAL ENABLEMENT PAGE BACKGROUND ==================== */}
          {(page === 'services' || page === 'digital') && (
            <svg className="animated-bg-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" fill="none">
              {/* Background fine grid overlay */}
              <g stroke="rgba(255, 173, 1, 0.04)" strokeWidth="0.8">
                <line x1="0" y1="120" x2="1000" y2="120" />
                <line x1="0" y1="240" x2="1000" y2="240" />
                <line x1="0" y1="360" x2="1000" y2="360" />
                <line x1="0" y1="480" x2="1000" y2="480" />
                <line x1="200" y1="0" x2="200" y2="600" />
                <line x1="400" y1="0" x2="400" y2="600" />
                <line x1="600" y1="0" x2="600" y2="600" />
                <line x1="800" y1="0" x2="800" y2="600" />
              </g>

              {/* Concentric Expanding Data rings */}
              <g stroke="url(#goldGrad)" strokeWidth="1.2">
                <circle cx="480" cy="300" r="10">
                  <animate attributeName="r" values="10;140" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.85;0" dur="5s" repeatCount="indefinite" />
                </circle>
                <circle cx="480" cy="300" r="10">
                  <animate attributeName="r" values="10;140" dur="5s" repeatCount="indefinite" begin="2.5s" />
                  <animate attributeName="opacity" values="0.85;0" dur="5s" repeatCount="indefinite" begin="2.5s" />
                </circle>
              </g>

              {/* Interactive Network Matrix Links */}
              {/* Node Matrix Structure:
                  A(160, 180), B(400, 140), C(320, 420), D(550, 320), E(740, 180), F(680, 460), G(880, 360) */}
              <g stroke="rgba(255, 173, 1, 0.12)" strokeWidth="1">
                <line x1="160" y1="180" x2="400" y2="140" />
                <line x1="160" y1="180" x2="320" y2="420" />
                <line x1="400" y1="140" x2="550" y2="320" />
                <line x1="320" y1="420" x2="550" y2="320" />
                <line x1="400" y1="140" x2="740" y2="180" />
                <line x1="550" y1="320" x2="740" y2="180" />
                <line x1="550" y1="320" x2="680" y2="460" />
                <line x1="740" y1="180" x2="880" y2="360" />
                <line x1="680" y1="460" x2="880" y2="360" />
              </g>

              {/* Glowing Active Energy Laser Pulses running along lines */}
              <g stroke="var(--secondary)" strokeWidth="2.5" strokeLinecap="round" className="gold-glow-effect">
                {/* Pulse A -> B */}
                <line x1="160" y1="180" x2="400" y2="140" strokeDasharray="30, 260">
                  <animate attributeName="stroke-dashoffset" values="290;0" dur="4s" repeatCount="indefinite" />
                </line>
                {/* Pulse C -> D */}
                <line x1="320" y1="420" x2="550" y2="320" strokeDasharray="25, 230">
                  <animate attributeName="stroke-dashoffset" values="255;0" dur="3s" repeatCount="indefinite" />
                </line>
                {/* Pulse D -> E */}
                <line x1="550" y1="320" x2="740" y2="180" strokeDasharray="40, 250">
                  <animate attributeName="stroke-dashoffset" values="0;290" dur="5s" repeatCount="indefinite" />
                </line>
                {/* Pulse F -> G */}
                <line x1="680" y1="460" x2="880" y2="360" strokeDasharray="35, 240">
                  <animate attributeName="stroke-dashoffset" values="275;0" dur="3.5s" repeatCount="indefinite" />
                </line>
              </g>

              {/* Dynamic blinking network nodes */}
              <g fill="var(--bg-secondary)" stroke="var(--secondary)" strokeWidth="2">
                <circle cx="160" cy="180" r="5" className="pulse-node" />
                <circle cx="400" cy="140" r="5.5" className="pulse-node" />
                <circle cx="320" cy="420" r="5" className="pulse-node" />
                <circle cx="550" cy="320" r="6" className="pulse-node" />
                <circle cx="740" cy="180" r="5.5" className="pulse-node" />
                <circle cx="680" cy="460" r="5" className="pulse-node" />
                <circle cx="880" cy="360" r="6" className="pulse-node" />
              </g>
            </svg>
          )}

          {/* ==================== ESG / WIZARD PAGE BACKGROUND ==================== */}
          {(page === 'esg' || page === 'wizard') && (
            <svg className="animated-bg-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" fill="none">
              {/* 3D Perspective Solar Field Array Grid Lines */}
              <g stroke="rgba(255, 173, 1, 0.08)" strokeWidth="1">
                <line x1="500" y1="180" x2="-300" y2="600" />
                <line x1="500" y1="180" x2="20" y2="600" />
                <line x1="500" y1="180" x2="340" y2="600" />
                <line x1="500" y1="180" x2="660" y2="600" />
                <line x1="500" y1="180" x2="980" y2="600" />
                <line x1="500" y1="180" x2="1300" y2="600" />
                
                {/* Horizontal perspective lines */}
                <line x1="280" y1="260" x2="720" y2="260" />
                <line x1="160" y1="340" x2="840" y2="340" />
                <line x1="0" y1="440" x2="1000" y2="440" strokeWidth="1.2" />
                <line x1="-150" y1="550" x2="1150" y2="550" strokeWidth="1.5" />
              </g>

              {/* Rising energy waves on the left */}
              <g stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.3">
                <path d="M 80 500 Q 120 400, 70 300 T 110 100" strokeDasharray="4,4" />
                <path d="M 120 500 Q 160 400, 110 300 T 150 100" />
                <path d="M 160 500 Q 200 400, 150 300 T 190 100" strokeDasharray="4,4" />
              </g>

              {/* Active solar panel reflections sweeping horizontally */}
              <polygon points="340,340 660,340 760,440 240,440" fill="url(#goldGrad)" opacity="0.06">
                <animate attributeName="opacity" values="0.04;0.14;0.04" dur="6s" repeatCount="indefinite" />
              </polygon>

              {/* Wind Turbine 1: Large turbine */}
              <g>
                {/* Turbine Mast */}
                <line x1="810" y1="160" x2="810" y2="460" stroke="rgba(255, 173, 1, 0.25)" strokeWidth="4.5" />
                <line x1="810" y1="160" x2="810" y2="460" stroke="url(#goldGrad)" strokeWidth="1.5" />
                <path d="M 790 460 L 830 460 L 820 466 L 800 466 Z" fill="rgba(255, 173, 1, 0.15)" stroke="var(--secondary)" strokeWidth="0.8" />
                
                {/* Rotating Rotor Blades */}
                <g className="turbine-blades" style={{ transformOrigin: '810px 160px' }}>
                  {/* Blade 1 */}
                  <path d="M 810 160 C 807 110, 804 60, 810 30 C 816 60, 813 110, 810 160 Z" fill="url(#goldGrad)" stroke="var(--secondary)" strokeWidth="0.8" />
                  {/* Blade 2 */}
                  <g style={{ transform: 'rotate(120deg)', transformOrigin: '810px 160px' }}>
                    <path d="M 810 160 C 807 110, 804 60, 810 30 C 816 60, 813 110, 810 160 Z" fill="url(#goldGrad)" stroke="var(--secondary)" strokeWidth="0.8" />
                  </g>
                  {/* Blade 3 */}
                  <g style={{ transform: 'rotate(240deg)', transformOrigin: '810px 160px' }}>
                    <path d="M 810 160 C 807 110, 804 60, 810 30 C 816 60, 813 110, 810 160 Z" fill="url(#goldGrad)" stroke="var(--secondary)" strokeWidth="0.8" />
                  </g>
                  {/* Center spinner */}
                  <circle cx="810" cy="160" r="5" fill="var(--secondary)" stroke="var(--bg-secondary)" strokeWidth="1.5" />
                </g>
              </g>

              {/* Wind Turbine 2: Smaller background turbine */}
              <g opacity="0.7">
                {/* Turbine Mast */}
                <line x1="910" y1="210" x2="910" y2="430" stroke="rgba(255, 173, 1, 0.18)" strokeWidth="3" />
                <line x1="910" y1="210" x2="910" y2="430" stroke="url(#goldGrad)" strokeWidth="1.0" />
                
                {/* Rotating Rotor Blades (Slower) */}
                <g className="turbine-blades-slow" style={{ transformOrigin: '910px 210px' }}>
                  {/* Blade 1 */}
                  <path d="M 910 210 C 908 170, 905 130, 910 100 C 915 130, 912 170, 910 210 Z" fill="url(#goldGrad)" stroke="var(--secondary)" strokeWidth="0.6" />
                  {/* Blade 2 */}
                  <g style={{ transform: 'rotate(120deg)', transformOrigin: '910px 210px' }}>
                    <path d="M 910 210 C 908 170, 905 130, 910 100 C 915 130, 912 170, 910 210 Z" fill="url(#goldGrad)" stroke="var(--secondary)" strokeWidth="0.6" />
                  </g>
                  {/* Blade 3 */}
                  <g style={{ transform: 'rotate(240deg)', transformOrigin: '910px 210px' }}>
                    <path d="M 910 210 C 908 170, 905 130, 910 100 C 915 130, 912 170, 910 210 Z" fill="url(#goldGrad)" stroke="var(--secondary)" strokeWidth="0.6" />
                  </g>
                  {/* Center spinner */}
                  <circle cx="910" cy="210" r="4.2" fill="var(--secondary)" stroke="var(--bg-secondary)" strokeWidth="1.2" />
                </g>
              </g>
            </svg>
          )}

          {/* ==================== QUALITY PAGE BACKGROUND ==================== */}
          {page === 'quality' && (
            <svg className="animated-bg-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" fill="none">
              {/* Technical dial rings */}
              <g stroke="rgba(255, 173, 1, 0.08)" strokeWidth="1">
                <circle cx="700" cy="300" r="230" />
                <circle cx="700" cy="300" r="170" strokeDasharray="6,6" />
                <circle cx="700" cy="300" r="100" />
                <circle cx="700" cy="300" r="40" strokeDasharray="3,15" className="gear-cw" style={{ transformOrigin: '700px 300px' }} />
                
                {/* Angular helper hashes */}
                <line x1="440" y1="300" x2="960" y2="300" strokeDasharray="3,6" />
                <line x1="700" y1="40" x2="700" y2="560" strokeDasharray="3,6" />
              </g>

              {/* Fading Sweep radar block using rotated elements */}
              <g className="radar-sweep" style={{ transformOrigin: '700px 300px' }}>
                {/* Main pointer line */}
                <line x1="700" y1="300" x2="930" y2="300" stroke="var(--secondary)" strokeWidth="1.8" className="gold-glow-effect" />
                {/* Sweep trails (fading lines) */}
                <line x1="700" y1="300" x2="929" y2="288" stroke="var(--secondary)" strokeWidth="1.5" opacity="0.6" transform="rotate(-3 700 300)" />
                <line x1="700" y1="300" x2="926" y2="276" stroke="var(--secondary)" strokeWidth="1.2" opacity="0.4" transform="rotate(-6 700 300)" />
                <line x1="700" y1="300" x2="921" y2="264" stroke="var(--secondary)" strokeWidth="1.0" opacity="0.25" transform="rotate(-9 700 300)" />
                <line x1="700" y1="300" x2="914" y2="252" stroke="var(--secondary)" strokeWidth="0.8" opacity="0.12" transform="rotate(-12 700 300)" />
              </g>

              {/* Dynamic Scanning target boxes */}
              <g stroke="var(--secondary)" strokeWidth="1.5">
                {/* Target A */}
                <g>
                  <rect x="540" y="160" width="16" height="16" strokeDasharray="4,2" fill="rgba(255, 173, 1, 0.05)">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                  </rect>
                  <line x1="548" y1="156" x2="548" y2="180" strokeWidth="0.8" />
                  <line x1="536" y1="168" x2="560" y2="168" strokeWidth="0.8" />
                  <text x="562" y="156" fill="var(--secondary)" fontSize="7" fontFamily="monospace">LOCK_T1</text>
                </g>

                {/* Target B */}
                <g>
                  <circle cx="830" cy="420" r="10" strokeDasharray="3,3" fill="none">
                    <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="830" cy="420" r="2" fill="var(--secondary)" />
                  <text x="844" y="423" fill="var(--secondary)" fontSize="7" fontFamily="monospace">ALIGN_T2</text>
                </g>
              </g>

              {/* Calibration telemetry texts */}
              <g fill="rgba(255, 173, 1, 0.55)" fontSize="9.5" fontFamily="monospace" fontWeight="600">
                <text x="440" y="275">TOLERANCE: &lt; 0.01mm</text>
                <text x="440" y="292">AUDIT_ID: CIDB_G7</text>
                <text x="440" y="309">SYSTEM_CHECK: 100%</text>
                <text x="692" y="65">000°</text>
                <text x="942" y="297">090°</text>
                <text x="692" y="545">180°</text>
                <text x="410" y="297">270°</text>
              </g>

              {/* Drawing caliper details in bottom-left */}
              <path d="M 280 120 h 100 M 280 120 v 20 M 380 120 v 20 M 330 110 v 20" stroke="rgba(255, 173, 1, 0.25)" strokeWidth="1" />
              <text x="320" y="98" fill="rgba(255, 173, 1, 0.35)" fontSize="8" fontFamily="monospace">REF_CAL_A</text>
            </svg>
          )}

          {/* ==================== JOURNEY PAGE BACKGROUND ==================== */}
          {page === 'journey' && (
            <svg className="animated-bg-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" fill="none">
              {/* Central horizontal timeline base line */}
              <line x1="50" y1="300" x2="950" y2="300" stroke="rgba(255, 173, 1, 0.08)" strokeWidth="1" />
              <line x1="50" y1="300" x2="950" y2="300" stroke="url(#goldLineGrad)" strokeWidth="2" strokeDasharray="20,10" />

              {/* Beautiful helical/timeline curves representing growth */}
              <g stroke="url(#goldLineGrad)" strokeWidth="2.5">
                <path d="M 50 300 Q 175 110, 300 300 T 550 300 T 800 300 T 950 300" strokeDasharray="4,6" />
                <path d="M 50 300 Q 175 490, 300 300 T 550 300 T 800 300 T 950 300" strokeDasharray="8,5" opacity="0.6" />
              </g>

              {/* Breathing timeline nodes */}
              <g fill="var(--bg-secondary)" stroke="var(--secondary)" strokeWidth="3" className="gold-glow-effect">
                <circle cx="175" cy="205" r="7.5" className="pulse-node" />
                <circle cx="300" cy="300" r="5" />
                <circle cx="425" cy="395" r="7.5" className="pulse-node" />
                <circle cx="550" cy="300" r="5" />
                <circle cx="675" cy="205" r="7.5" className="pulse-node" />
                <circle cx="800" cy="300" r="5" />
              </g>

              {/* Technical bobbing tags for key years */}
              <g fill="rgba(255, 173, 1, 0.85)" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                <g className="tech-bob-group">
                  <text x="175" y="165">[ 2021 | FOUNDED ]</text>
                  <line x1="175" y1="172" x2="175" y2="195" stroke="var(--secondary)" strokeWidth="0.8" strokeDasharray="2,2" />
                </g>
                <g className="tech-bob-group-delayed">
                  <text x="425" y="442">[ 2023 | GROWING ]</text>
                  <line x1="425" y1="405" x2="425" y2="430" stroke="var(--secondary)" strokeWidth="0.8" strokeDasharray="2,2" />
                </g>
                <g className="tech-bob-group">
                  <text x="675" y="165">[ 2025 | MRO_EXPANSION ]</text>
                  <line x1="675" y1="172" x2="675" y2="195" stroke="var(--secondary)" strokeWidth="0.8" strokeDasharray="2,2" />
                </g>
                <g className="tech-bob-group-delayed">
                  <text x="800" y="342">[ 2026 | CIDB_G7 ]</text>
                  <line x1="800" y1="310" x2="800" y2="330" stroke="var(--secondary)" strokeWidth="0.8" strokeDasharray="2,2" />
                </g>
              </g>
            </svg>
          )}

          {/* ==================== CONTACT / HUD PAGE BACKGROUND ==================== */}
          {(page === 'contact' || page === 'cx') && (
            <svg className="animated-bg-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" fill="none">
              {/* Corner tech bracing frames */}
              <g stroke="var(--secondary)" strokeWidth="1.5" className="gold-glow-effect">
                <path d="M 60 80 H 130 M 60 80 V 150" />
                <path d="M 940 80 H 870 M 940 80 V 150" />
                <path d="M 60 520 H 130 M 60 520 V 450" />
                <path d="M 940 520 H 870 M 940 520 V 450" />
              </g>

              {/* Micro grids */}
              <g stroke="rgba(255, 173, 1, 0.025)" strokeWidth="0.8" strokeDasharray="3,6">
                <line x1="0" y1="100" x2="1000" y2="100" />
                <line x1="0" y1="200" x2="1000" y2="200" />
                <line x1="0" y1="300" x2="1000" y2="300" />
                <line x1="0" y1="400" x2="1000" y2="400" />
                <line x1="0" y1="500" x2="1000" y2="500" />
                <line x1="150" y1="0" x2="150" y2="600" />
                <line x1="300" y1="0" x2="300" y2="600" />
                <line x1="450" y1="0" x2="450" y2="600" />
                <line x1="600" y1="0" x2="600" y2="600" />
                <line x1="750" y1="0" x2="750" y2="600" />
                <line x1="900" y1="0" x2="900" y2="600" />
              </g>

              {/* Bouncing Audio/Diagnostic Equalizer Bars */}
              <g fill="url(#goldGrad)" opacity="0.3">
                {/* Right side equalizer panel */}
                <rect x="790" y="440" width="9" height="40" className="eq-bar-1" />
                <rect x="802" y="420" width="9" height="60" className="eq-bar-2" />
                <rect x="814" y="450" width="9" height="30" className="eq-bar-3" />
                <rect x="826" y="410" width="9" height="70" className="eq-bar-4" />
                <rect x="838" y="430" width="9" height="50" className="eq-bar-5" />
                <rect x="850" y="460" width="9" height="20" className="eq-bar-6" />
                <rect x="862" y="425" width="9" height="55" className="eq-bar-2" />
                <rect x="874" y="445" width="9" height="35" className="eq-bar-4" />
              </g>

              {/* Compass HUD in top right */}
              <g className="gear-fast-cw" style={{ transformOrigin: '840px 180px' }} opacity="0.25">
                <circle cx="840" cy="180" r="50" stroke="var(--secondary)" strokeWidth="1" strokeDasharray="4,8" />
                <circle cx="840" cy="180" r="38" stroke="var(--secondary)" strokeWidth="0.8" />
                <line x1="840" y1="125" x2="840" y2="235" stroke="var(--secondary)" strokeWidth="0.8" />
                <line x1="785" y1="180" x2="895" y2="180" stroke="var(--secondary)" strokeWidth="0.8" />
              </g>

              {/* secure telemetry console tags */}
              <g fill="var(--secondary)" fontSize="9" fontFamily="monospace" opacity="0.7">
                <text x="80" y="115">&gt;&gt; ESTABLISHING ENCRYPTED CONNECTION...</text>
                <text x="80" y="130" opacity="0.8">&gt;&gt; PROTOCOL: TLS_1.3 // SECURITY: LEVEL_A</text>
                <text x="80" y="145" opacity="0.65">&gt;&gt; HOST: SURIA_DIRGAHAYU // DEV: 5173</text>
                <text x="80" y="160" opacity="0.5" className="pulse-node">&gt;&gt; ONLINE DIALOG SYSTEM CALIBRATION... OK</text>
              </g>
            </svg>
          )}
        </div>
      
      {/* Gold Highlight Overlay to paint background details in glowing gold */}
      <div className="hero-bg-gold-overlay"></div>
      
      {/* Technical Blueprint Scale Overlay */}
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
