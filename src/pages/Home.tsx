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
              <div className="energy-core-glow" style={{ background: 'radial-gradient(circle, rgba(223, 161, 22, 0.12) 0%, rgba(1, 107, 173, 0.06) 50%, transparent 70%)' }}></div>
              <svg className="radar-svg" viewBox="0 0 120 120" fill="none">
                <defs>
                  {/* Glowing Turbine Gradient */}
                  <linearGradient id="turbineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.1" />
                  </linearGradient>

                  <radialGradient id="hubGlowGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="35%" stopColor="#ffd875" stopOpacity="0.8" />
                    <stop offset="75%" stopColor="var(--secondary)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>

                  <filter id="gearCoreGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Outer Concentric Technical Measurement Scales */}
                <circle cx="60" cy="60" r="57" stroke="var(--secondary)" strokeWidth="0.45" strokeDasharray="3 9" opacity="0.35" className="anim-rotate-cw" style={{ transformOrigin: '60px 60px' }} />
                <circle cx="60" cy="60" r="54" stroke="var(--primary)" strokeWidth="0.3" strokeDasharray="15 3" opacity="0.25" className="anim-rotate-ccw" style={{ transformOrigin: '60px 60px' }} />
                <circle cx="60" cy="60" r="50" stroke="var(--secondary)" strokeWidth="0.3" opacity="0.15" />

                {/* Outer Large Ring Gear (MRO Gearbox Enclosure) */}
                <circle cx="60" cy="60" r="45" stroke="var(--secondary)" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.4" className="anim-rotate-cw" style={{ transformOrigin: '60px 60px', animationDuration: '40s' }} />
                
                {/* Structural Spokes / Scaffolding support lines */}
                <line x1="60" y1="60" x2="20" y2="20" stroke="var(--primary)" strokeWidth="0.35" opacity="0.15" strokeDasharray="3 3" />
                <line x1="60" y1="60" x2="100" y2="20" stroke="var(--primary)" strokeWidth="0.35" opacity="0.15" strokeDasharray="3 3" />
                <line x1="60" y1="60" x2="20" y2="100" stroke="var(--primary)" strokeWidth="0.35" opacity="0.15" strokeDasharray="3 3" />
                <line x1="60" y1="60" x2="100" y2="100" stroke="var(--primary)" strokeWidth="0.35" opacity="0.15" strokeDasharray="3 3" />
                <line x1="60" y1="6" x2="60" y2="114" stroke="var(--secondary)" strokeWidth="0.2" opacity="0.2" strokeDasharray="1 4" />
                <line x1="6" y1="60" x2="114" y2="60" stroke="var(--secondary)" strokeWidth="0.2" opacity="0.2" strokeDasharray="1 4" />

                {/* Planetary Gear System Orbit Track */}
                <circle cx="60" cy="60" r="30" stroke="var(--secondary)" strokeWidth="0.25" strokeDasharray="4 4" opacity="0.2" />

                {/* Interlocking Planetary Gears (Revolving Clockwise + Spinning Counter-Clockwise) */}
                <g className="anim-rotate-cw" style={{ transformOrigin: '60px 60px', animationDuration: '24s' }}>
                  {/* Planetary Satellite Gear 1 (Top, 0°) */}
                  <g transform="translate(60, 30)">
                    <circle cx="0" cy="0" r="7.5" stroke="var(--secondary)" strokeWidth="0.8" opacity="0.75" />
                    <circle cx="0" cy="0" r="7.5" stroke="var(--secondary)" strokeWidth="2.5" strokeDasharray="1.5 2" opacity="0.65" className="anim-rotate-ccw" style={{ transformOrigin: '0px 0px', animationDuration: '6s' }} />
                    <circle cx="0" cy="0" r="2.2" fill="var(--primary)" stroke="var(--secondary)" strokeWidth="0.4" opacity="0.8" />
                  </g>
                  {/* Planetary Satellite Gear 2 (Bottom Right, 120°) */}
                  <g transform="rotate(120 60 60) translate(60, 30)">
                    <circle cx="0" cy="0" r="7.5" stroke="var(--secondary)" strokeWidth="0.8" opacity="0.75" />
                    <circle cx="0" cy="0" r="7.5" stroke="var(--secondary)" strokeWidth="2.5" strokeDasharray="1.5 2" opacity="0.65" className="anim-rotate-ccw" style={{ transformOrigin: '0px 0px', animationDuration: '6s' }} />
                    <circle cx="0" cy="0" r="2.2" fill="var(--primary)" stroke="var(--secondary)" strokeWidth="0.4" opacity="0.8" />
                  </g>
                  {/* Planetary Satellite Gear 3 (Bottom Left, 240°) */}
                  <g transform="rotate(240 60 60) translate(60, 30)">
                    <circle cx="0" cy="0" r="7.5" stroke="var(--secondary)" strokeWidth="0.8" opacity="0.75" />
                    <circle cx="0" cy="0" r="7.5" stroke="var(--secondary)" strokeWidth="2.5" strokeDasharray="1.5 2" opacity="0.65" className="anim-rotate-ccw" style={{ transformOrigin: '0px 0px', animationDuration: '6s' }} />
                    <circle cx="0" cy="0" r="2.2" fill="var(--primary)" stroke="var(--secondary)" strokeWidth="0.4" opacity="0.8" />
                  </g>
                </g>

                {/* Spinning Mechanical Turbine Runner Blades (Rotor MRO) */}
                <g className="anim-rotate-ccw" style={{ transformOrigin: '60px 60px', animationDuration: '18s' }}>
                  <path d="M 60,60 Q 52,43 60,17 Q 68,43 60,60" fill="url(#turbineGrad)" fillOpacity="0.08" stroke="var(--secondary)" strokeWidth="0.65" opacity="0.7" />
                  <path d="M 60,60 Q 52,43 60,17 Q 68,43 60,60" fill="url(#turbineGrad)" fillOpacity="0.08" stroke="var(--secondary)" strokeWidth="0.65" opacity="0.7" transform="rotate(45 60 60)" />
                  <path d="M 60,60 Q 52,43 60,17 Q 68,43 60,60" fill="url(#turbineGrad)" fillOpacity="0.08" stroke="var(--secondary)" strokeWidth="0.65" opacity="0.7" transform="rotate(90 60 60)" />
                  <path d="M 60,60 Q 52,43 60,17 Q 68,43 60,60" fill="url(#turbineGrad)" fillOpacity="0.08" stroke="var(--secondary)" strokeWidth="0.65" opacity="0.7" transform="rotate(135 60 60)" />
                  <path d="M 60,60 Q 52,43 60,17 Q 68,43 60,60" fill="url(#turbineGrad)" fillOpacity="0.08" stroke="var(--secondary)" strokeWidth="0.65" opacity="0.7" transform="rotate(180 60 60)" />
                  <path d="M 60,60 Q 52,43 60,17 Q 68,43 60,60" fill="url(#turbineGrad)" fillOpacity="0.08" stroke="var(--secondary)" strokeWidth="0.65" opacity="0.7" transform="rotate(225 60 60)" />
                  <path d="M 60,60 Q 52,43 60,17 Q 68,43 60,60" fill="url(#turbineGrad)" fillOpacity="0.08" stroke="var(--secondary)" strokeWidth="0.65" opacity="0.7" transform="rotate(270 60 60)" />
                  <path d="M 60,60 Q 52,43 60,17 Q 68,43 60,60" fill="url(#turbineGrad)" fillOpacity="0.08" stroke="var(--secondary)" strokeWidth="0.65" opacity="0.7" transform="rotate(315 60 60)" />
                </g>

                {/* Central Sun Gear (Rotor Shaft) - Spinning Counter-Clockwise */}
                <circle cx="60" cy="60" r="14" fill="url(#hubGlowGrad)" filter="url(#gearCoreGlow)" opacity="0.9" />
                <circle cx="60" cy="60" r="14" stroke="var(--secondary)" strokeWidth="1" opacity="0.8" />
                <circle cx="60" cy="60" r="14" stroke="var(--secondary)" strokeWidth="4.5" strokeDasharray="3.2 2" opacity="0.8" className="anim-rotate-ccw" style={{ transformOrigin: '60px 60px', animationDuration: '10s' }} />
                
                {/* Central Bearing Bolt */}
                <circle cx="60" cy="60" r="6.2" fill="var(--bg-primary)" stroke="var(--secondary)" strokeWidth="1.5" />
                <polygon points="60,57.5 62.5,61.5 57.5,61.5" fill="var(--secondary)" />

                {/* Active MRO Telemetry readout overlays */}
                <g opacity="0.8">
                  <circle cx="28" cy="32" r="1.5" fill="var(--secondary)" className="core-node-pulse" />
                  <text x="32" y="34.5" fontSize="2.3" fill="var(--secondary)" fontFamily="monospace" fontWeight="bold">[SYS_LOAD // 82.5%]</text>
                </g>
                
                <g opacity="0.85">
                  <circle cx="92" cy="74" r="1.5" fill="var(--secondary)" className="core-node-pulse" />
                  <text x="96" y="76.5" fontSize="2.3" fill="var(--secondary)" fontFamily="monospace" fontWeight="bold">[ROTOR_RPM // 1500]</text>
                </g>

                <g opacity="0.75">
                  <circle cx="82" cy="28" r="1" fill="var(--secondary)" className="core-node-pulse" />
                  <text x="86" y="30.5" fontSize="2.3" fill="var(--secondary)" fontFamily="monospace" fontWeight="bold">[MRO_VIB // NOMINAL]</text>
                </g>

                <g opacity="0.8">
                  <circle cx="24" cy="90" r="1" fill="var(--secondary)" className="core-node-pulse" />
                  <text x="28" y="92.5" fontSize="2.3" fill="var(--secondary)" fontFamily="monospace" fontWeight="bold">[BEARING_TEMP // 42°C]</text>
                </g>
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
