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
            <div className="radar-container anim-pulse-slow">
              <div className="radar-backdrop"></div>
              <div className="radar-ping"></div>
              <svg className="radar-svg" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <defs>
                  <linearGradient id="radarSweepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Radar target sweep crosshairs */}
                <line x1="50" y1="0" x2="50" y2="100" stroke="var(--secondary)" strokeWidth="0.15" opacity="0.35" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="var(--secondary)" strokeWidth="0.15" opacity="0.35" />
                
                {/* Counter-rotating grid tracks */}
                <circle cx="50" cy="50" r="48" stroke="var(--secondary)" strokeWidth="0.4" strokeDasharray="3 3" opacity="0.4" className="anim-rotate-cw" />
                <circle cx="50" cy="50" r="38" stroke="var(--secondary)" strokeWidth="0.6" opacity="0.2" />
                <circle cx="50" cy="50" r="28" stroke="var(--secondary)" strokeWidth="0.4" strokeDasharray="10 4" opacity="0.5" className="anim-rotate-ccw" />
                <circle cx="50" cy="50" r="18" stroke="var(--secondary)" strokeWidth="0.6" opacity="0.3" />
                <circle cx="50" cy="50" r="8" stroke="var(--secondary)" strokeWidth="0.4" strokeDasharray="2 2" opacity="0.4" />
                
                {/* Holographic scanner compass ticks */}
                <path d="M50 2 L50 6 M50 98 L50 94 M2 50 L6 50 M98 50 L94 50" stroke="var(--secondary)" strokeWidth="0.8" opacity="0.7" />

                {/* Scanning Radar Laser Sweep Wedge */}
                <g className="anim-rotate-cw" style={{ transformOrigin: '50px 50px' }}>
                  <line x1="50" y1="50" x2="50" y2="2" stroke="var(--secondary)" strokeWidth="0.6" opacity="0.8" />
                  <polygon points="50,50 50,2 62,3" fill="url(#radarSweepGrad)" opacity="0.4" />
                </g>
                
                {/* Pulsing Sonar target nodes */}
                <circle cx="30" cy="35" r="1.5" fill="var(--secondary)">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="33" y="36.5" fontSize="2.2" fill="var(--secondary)" opacity="0.75" fontFamily="monospace" fontWeight="bold">[MRO // DET-1]</text>
                
                <circle cx="72" cy="65" r="1.5" fill="var(--secondary)">
                  <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" />
                </circle>
                <text x="75" y="66.5" fontSize="2.2" fill="var(--secondary)" opacity="0.75" fontFamily="monospace" fontWeight="bold">[LV-GRID // DET-2]</text>
                
                <circle cx="65" cy="22" r="1" fill="var(--secondary)">
                  <animate attributeName="opacity" values="0.1;0.9;0.1" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="68" y="23.5" fontSize="2.2" fill="var(--secondary)" opacity="0.6" fontFamily="monospace" fontWeight="bold">[HSE // DET-3]</text>

                {/* Angle vectors */}
                <line x1="50" y1="50" x2="22" y2="22" stroke="var(--secondary)" strokeWidth="0.4" opacity="0.25" strokeDasharray="4 2" />
                <line x1="50" y1="50" x2="80" y2="20" stroke="var(--secondary)" strokeWidth="0.4" opacity="0.15" />
                
                {/* Center logo highlight */}
                <circle cx="50" cy="50" r="4.5" fill="var(--bg-primary)" stroke="var(--secondary)" strokeWidth="1.2" />
                <polygon points="50,47.5 52,51.5 48,51.5" fill="var(--secondary)" />
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
