import React from 'react';
import {
  TrophyIcon,
  ChevronRightIcon,
  WrenchIcon,
  UsersIcon,
  GridIcon
} from '../components/Icons';
import { CLIENTS } from '../constants/data';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';
export default function Home() {
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const hero = e.currentTarget;
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    hero.style.setProperty('--mouse-x', `${x}px`);
    hero.style.setProperty('--mouse-y', `${y}px`);
    
    const dx = (e.clientX - rect.left) / rect.width - 0.5;
    const dy = (e.clientY - rect.top) / rect.height - 0.5;
    hero.style.setProperty('--mouse-dx', `${dx}`);
    hero.style.setProperty('--mouse-dy', `${dy}`);
  };

  const handleHeroMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const hero = e.currentTarget;
    hero.style.setProperty('--mouse-dx', '0');
    hero.style.setProperty('--mouse-dy', '0');
  };

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section id="hero" className="hero-section" onMouseMove={handleHeroMouseMove} onMouseLeave={handleHeroMouseLeave} style={{ position: 'relative' }}>
        <HeroBackground />
        <div className="hero container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-grid animate-slide-up">
          <div className="hero-text-block">
            <div className="hero-badge-wrapper">
              <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge-dot"></span>
                <TrophyIcon size={14} className="gold-text" /> Multi-disciplinary Engineering Partner
              </span>
            </div>
            <h1 className="hero-title">
              Delivering Quality. <br />
              <span className="gradient-text">Building Industrial Trust.</span>
            </h1>
            <p className="hero-description">
              Suria Dirgahayu Sdn. Bhd. is a multi-disciplinary engineering contractor. We specialize in controlled demolition, rotating machinery MRO, civil construction, scaffolding, and ST-certified electrical engineering solutions.
            </p>
            <div className="hero-buttons">
              <a href="#/wizard" className="btn btn-primary">
                Configure Project Wizard <ChevronRightIcon size={18} />
              </a>
              <a href="#/services" className="btn btn-secondary">
                Explore 9 Core Services
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">CIDB G7</span>
                <span className="stat-label">Contracting Grade</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">HSE Compliance</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Client Partners</span>
              </div>
            </div>

            {/* Floating Live HUD status widget */}
            <div className="hero-hud-panel blueprint-panel brackets-tl-br">
              <div className="hud-grid">
                <div className="hud-item">
                  <span className="hud-label">SYSTEM HEALTH</span>
                  <span className="hud-value"><span className="hud-pulse"></span> ONLINE</span>
                </div>
                <div className="hud-item">
                  <span className="hud-label">OSHA RECORD</span>
                  <span className="hud-value">100% SAFE</span>
                </div>
                <div className="hud-item">
                  <span className="hud-label">CIDB MALAYSIA</span>
                  <span className="hud-value">CAPACITY: G7</span>
                </div>
                <div className="hud-item">
                  <span className="hud-label">ST AUDIT</span>
                  <span className="hud-value">CERTIFIED</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="radar-container energy-core-container">
              <div className="energy-core-glow"></div>
              <svg className="radar-svg" viewBox="0 0 120 120" fill="none">
                <defs>
                  {/* Glowing Solar Core Gradients */}
                  <radialGradient id="solarCoreGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="25%" stopColor="#ffd875" />
                    <stop offset="65%" stopColor="var(--secondary)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>

                  <radialGradient id="solarFlareGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--secondary)" stopOpacity="1" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                  </radialGradient>
                  
                  <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.1" />
                  </linearGradient>

                  <filter id="coreGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="solarFlare" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer Coordinate Grid Ring */}
                <circle cx="60" cy="60" r="54" stroke="var(--primary)" strokeWidth="0.35" strokeDasharray="4 2" opacity="0.3" />
                <circle cx="60" cy="60" r="50" stroke="var(--secondary)" strokeWidth="0.4" opacity="0.2" />

                {/* 3D Tilted Energy Orbit Rings */}
                {/* Orbit 1 (Horizontal tilt) */}
                <ellipse cx="60" cy="60" rx="46" ry="15" stroke="url(#orbitGrad)" strokeWidth="0.8" opacity="0.65" transform="rotate(-15 60 60)" strokeDasharray="180" strokeDashoffset="0" className="solar-orbit-line-1" />
                
                {/* Orbit 2 (Vertical-diagonal tilt) */}
                <ellipse cx="60" cy="60" rx="42" ry="11" stroke="url(#orbitGrad)" strokeWidth="0.8" opacity="0.6" transform="rotate(35 60 60)" strokeDasharray="160" strokeDashoffset="40" className="solar-orbit-line-2" />
                
                {/* Orbit 3 (Opposite diagonal tilt) */}
                <ellipse cx="60" cy="60" rx="38" ry="8" stroke="url(#orbitGrad)" strokeWidth="0.65" opacity="0.55" transform="rotate(-55 60 60)" strokeDasharray="120" strokeDashoffset="80" className="solar-orbit-line-3" />

                {/* Tech HUD crosshairs overlay */}
                <line x1="60" y1="6" x2="60" y2="114" stroke="var(--secondary)" strokeWidth="0.25" opacity="0.25" strokeDasharray="2 3" />
                <line x1="6" y1="60" x2="114" y2="60" stroke="var(--secondary)" strokeWidth="0.25" opacity="0.25" strokeDasharray="2 3" />

                {/* Outer rotating compass scales */}
                <g className="anim-rotate-cw" style={{ transformOrigin: '60px 60px' }}>
                  <circle cx="60" cy="60" r="58" stroke="var(--secondary)" strokeWidth="0.65" strokeDasharray="1 10" opacity="0.4" />
                  <circle cx="60" cy="60" r="56" stroke="var(--primary)" strokeWidth="0.4" strokeDasharray="60 3" opacity="0.2" />
                </g>
                <g className="anim-rotate-ccw" style={{ transformOrigin: '60px 60px' }}>
                  <circle cx="60" cy="60" r="52" stroke="var(--secondary)" strokeWidth="0.55" strokeDasharray="2 6" opacity="0.3" />
                </g>

                {/* Solar Flares & Magnetic Arcs linking orbits to core */}
                <path d="M 60,60 Q 45,35 30,35" stroke="var(--secondary)" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.45" className="energy-arc-pulse" />
                <path d="M 60,60 Q 80,45 85,25" stroke="var(--secondary)" strokeWidth="0.4" strokeDasharray="3 3" opacity="0.3" />
                <path d="M 60,60 Q 75,75 72,90" stroke="var(--secondary)" strokeWidth="0.5" strokeDasharray="6 2" opacity="0.35" />

                {/* Rotating Laser Scan Line (Faint, high-tech sweep) */}
                <g className="anim-rotate-cw" style={{ transformOrigin: '60px 60px' }}>
                  <line x1="60" y1="60" x2="60" y2="6" stroke="var(--secondary)" strokeWidth="0.4" opacity="0.6" />
                  <polygon points="60,60 60,6 68,7" fill="url(#solarFlareGrad)" opacity="0.2" />
                </g>

                {/* Flowing energy particles (orbit nodes) */}
                {/* Particle 1 on Orbit 1 */}
                <circle cx="60" cy="60" r="2.5" fill="var(--secondary)" filter="url(#solarFlare)">
                  <animateMotion 
                    path="M 14,60 A 46,15 0 1,0 106,60 A 46,15 0 1,0 14,60" 
                    dur="7s" 
                    repeatCount="indefinite" 
                    rotate="auto"
                  />
                </circle>
                
                {/* Particle 2 on Orbit 2 */}
                <circle cx="60" cy="60" r="2" fill="var(--secondary)" filter="url(#solarFlare)">
                  <animateMotion 
                    path="M 18,60 A 42,11 0 1,0 102,60 A 42,11 0 1,0 18,60" 
                    dur="5s" 
                    repeatCount="indefinite" 
                    rotate="auto"
                  />
                </circle>

                {/* Floating telemetry text labels at orbit intersections */}
                <g opacity="0.8">
                  <circle cx="28" cy="32" r="1.5" fill="var(--secondary)" className="core-node-pulse" />
                  <text x="32" y="34.5" fontSize="2.3" fill="var(--secondary)" fontFamily="monospace" fontWeight="bold">[SOLAR_PV // 88.5%]</text>
                </g>
                
                <g opacity="0.85">
                  <circle cx="92" cy="74" r="1.5" fill="var(--secondary)" className="core-node-pulse" />
                  <text x="96" y="76.5" fontSize="2.3" fill="var(--secondary)" fontFamily="monospace" fontWeight="bold">[GRID_VOLT // OK]</text>
                </g>

                <g opacity="0.75">
                  <circle cx="82" cy="28" r="1" fill="var(--secondary)" className="core-node-pulse" />
                  <text x="86" y="30.5" fontSize="2.3" fill="var(--secondary)" fontFamily="monospace" fontWeight="bold">[MRO // SYS_1]</text>
                </g>

                {/* Central Pulsing Solar Core */}
                <circle cx="60" cy="60" r="13" fill="url(#solarCoreGrad)" filter="url(#coreGlow)" className="solar-core-pulse" />
                {/* Core ring */}
                <circle cx="60" cy="60" r="13" stroke="var(--secondary)" strokeWidth="0.8" opacity="0.6" />
                <circle cx="60" cy="60" r="17" stroke="var(--secondary)" strokeWidth="0.3" strokeDasharray="3 3" opacity="0.4" className="anim-rotate-cw" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Client Marquee Section */}
      <section className="client-marquee-section">
        <div className="marquee-label">Reputable Organizations That Partner With Us</div>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {CLIENTS.concat(CLIENTS).map((client, idx) => (
              <div 
                key={idx} 
                className="marquee-item glass-spotlight spotlight-border tilt-card"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{ '--i': idx } as React.CSSProperties}
              >
                <span className="client-name">{client.name}</span>
                <span className="client-sector">{client.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page Navigation Highlights Section (Premium Card Directory) */}
      <section className="section reveal">
        <div className="container">
          <div className="section-header blueprint-panel brackets-tl-br">
            <h2 className="section-title">Industrial Project Control Console</h2>
            <p className="section-subtitle">
              Navigate between the structural divisions of Suria Dirgahayu. Review compliance credentials, model project roadmap timelines, or establish a consultation terminal.
            </p>
          </div>

          <div className="grid-cols-3">
            {/* Services Highlight Card */}
            <div 
              className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ '--i': 0 } as React.CSSProperties}
            >
              <div className="value-icon-wrap">
                <WrenchIcon size={24} />
              </div>
              <h3 className="value-title">9 Core Verticals</h3>
              <p className="value-desc" style={{ marginBottom: '2rem' }}>
                Analyze our mechanical MRO, ST-approved electrical engineering, modular scaffolding tagging, and controlled demolition workflows.
              </p>
              <a href="#/services" className="btn btn-secondary" style={{ width: '100%' }}>
                Operational Services
              </a>
            </div>

            {/* Configurator Highlight Card */}
            <div 
              className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ '--i': 1 } as React.CSSProperties}
            >
              <div className="value-icon-wrap">
                <GridIcon size={24} />
              </div>
              <h3 className="value-title">Milestone Configurator</h3>
              <p className="value-desc" style={{ marginBottom: '2rem' }}>
                Utilize our interactive project wizard to configure scope scale indices, mapping milestones, schedules, and required regulatory licenses.
              </p>
              <a href="#/wizard" className="btn btn-primary" style={{ width: '100%' }}>
                Start Project Wizard
              </a>
            </div>

            {/* About/Credentials Highlight Card */}
            <div 
              className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ '--i': 2 } as React.CSSProperties}
            >
              <div className="value-icon-wrap">
                <UsersIcon size={24} />
              </div>
              <h3 className="value-title">Corporate Quality & HSE</h3>
              <p className="value-desc" style={{ marginBottom: '2rem' }}>
                Inspect our Cidb G7 certification registers, Energy Commission ST wireman credentials, and historical project evolution timelines.
              </p>
              <a href="#/about" className="btn btn-secondary" style={{ width: '100%' }}>
                Corporate Credentials
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
