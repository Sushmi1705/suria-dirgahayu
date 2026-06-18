import React, { useState } from 'react';
import {
  SunIcon,
  LeafIcon,
  UsersIcon,
  TrophyIcon
} from '../components/Icons';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';

type ConceptId = 'academy' | 'talent' | 'foundation' | 'philosophy';

interface ProgramDetail {
  id: ConceptId;
  title: string;
  subtitle: string;
  tagline: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  iconBg: string;
  iconColor: string;
  summary: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
}

const PROGRAM_DETAILS: Record<ConceptId, ProgramDetail> = {
  academy: {
    id: 'academy',
    title: 'SunSeed Academy',
    subtitle: 'Nurturing Technical Competence',
    tagline: 'Technical training, vocational pathways & safety compliance certificates',
    icon: TrophyIcon,
    iconBg: 'rgba(255, 173, 1, 0.1)',
    iconColor: '#ffad01',
    summary: 'The Academy is our vocational training division dedicated to raising the standard of site work in Malaysia. We provide structured training programs and push for certified competencies across mechanical, electrical, and scaffolding disciplines.',
    bullets: [
      'ST-approved electrical competency courses (ST-1 & ST-3 Wireman compliance)',
      'DOSH-compliant scaffolding rigging and tagging programs',
      'CIDB green card compliance and site health & safety induction classes',
      'Specialized mechanical MRO and machine tool operation workshops'
    ],
    metrics: [
      { label: 'TRAINED_CADETS', value: '450+' },
      { label: 'ST_CERTIFICATIONS', value: '100% OK' },
      { label: 'SAFETY_RATING', value: 'CLASS-A' }
    ]
  },
  talent: {
    id: 'talent',
    title: 'SunSeed Talent Program',
    subtitle: 'Stewardship of Skilled Human Capital',
    tagline: 'Ethical sourcing, onboarding, and placement of industrial talents',
    icon: UsersIcon,
    iconBg: 'rgba(56, 189, 248, 0.1)',
    iconColor: '#38bdf8',
    summary: 'Our Talent Program focuses on the recruitment, welfare, and deployment of skilled technical personnel. We prioritize fair, transparent, and ethical labor standards, ensuring our partners receive highly trained, OSHA-ready workforces.',
    bullets: [
      'Ethical manpower sourcing with fair, audited wage structures',
      'Structured career progression pathways for local industrial wiremen and mechanics',
      'Comprehensive medical support, accommodation standards, and welfare checks',
      'High-retention project placement matching skilled workers to major multi-national sites'
    ],
    metrics: [
      { label: 'ACTIVE_TALENTS', value: '1,200+' },
      { label: 'RETENTION_RATE', value: '92%' },
      { label: 'COMPLIANCE_AUDIT', value: '100%' }
    ]
  },
  foundation: {
    id: 'foundation',
    title: 'SunSeed Foundation',
    subtitle: 'Philanthropy & Sustainable Impact',
    tagline: 'Direct community empowerment, green school setups, and welfare grants',
    icon: LeafIcon,
    iconBg: 'rgba(34, 197, 94, 0.1)',
    iconColor: '#22c55e',
    summary: 'The Foundation channels corporate resources directly into CSR projects, aligning engineering capabilities with local community needs. We leverage solar and mechanical expertise to build a cleaner, more sustainable future for public spaces.',
    bullets: [
      'Funding and building microgrid solar setups for rural schools and community centers',
      'Sponsoring higher technical vocational scholarships for underprivileged students',
      'HSE welfare grants supporting local families during industrial transition phases',
      'Clean energy advocacy workshops and basic solar maintenance education programs'
    ],
    metrics: [
      { label: 'COMMUNITY_GRANTS', value: 'RM 250k+' },
      { label: 'RURAL_SOLAR_SETUPS', value: '12 Sites' },
      { label: 'SCHOLARSHIPS', value: '35 Awarded' }
    ]
  },
  philosophy: {
    id: 'philosophy',
    title: 'The SunSeed Philosophy',
    subtitle: 'The Core Ecosystem Concept',
    tagline: 'The Sun nurtures growth, and a seed represents potential',
    icon: SunIcon,
    iconBg: 'rgba(239, 68, 68, 0.1)',
    iconColor: '#ef4444',
    summary: 'SunSeed is the guiding corporate philosophy of Suria Dirgahayu. Just as the Sun provides the energy to trigger photosynthesis and support life, we commit our organizational strength to nurture talent and unlock the latent potential (seeds) of our communities.',
    bullets: [
      'Solar-driven mindset: Committing to clean, renewable engineering workflows',
      'Seedling nurturing: Investing in human capital before demanding high-performance output',
      'Sustained ecosystem: Creating values that protect both the environment and corporate integrity',
      'Inclusive growth: Ensuring economic success is shared with workers and communities'
    ],
    metrics: [
      { label: 'CARBON_OFFSET', value: '180 T/Yr' },
      { label: 'ESG_COMPLIANCE', value: '100% OK' },
      { label: 'LOCAL_GROWTH', value: 'HIGH' }
    ]
  }
};

export default function SunSeed() {
  const [activeConcept, setActiveConcept] = useState<ConceptId>('academy');

  const activeDetail = PROGRAM_DETAILS[activeConcept];
  const IconComponent = activeDetail.icon;

  return (
    <div className="sunseed-page-container animate-fade-in">
      {/* Page Header */}
      <section className="page-header-section">
        <HeroBackground page="wizard" />
        <div className="container page-header animate-slide-up">
          <div className="page-header-card">
            <div style={{ position: 'relative', zIndex: 5 }}>
              <div className="badge animate-glow" style={{ marginBottom: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge-dot"></span>
                CORE CORPORATE CONCEPT
              </div>
              <h1 className="page-title gradient-text" style={{ fontSize: '3.75rem', fontWeight: 900, marginBottom: '1.25rem' }}>
                SunSeed Ecosystem
              </h1>
              <p className="page-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                The Sun symbolizes many powerful qualities that we can adopt in our daily lives: Consistency, Leadership, Selflessness, Strength &amp; Resilience, Positivity, and Growth &amp; Nurturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Concept Section */}
      <section className="section reveal blueprint-grid-light">
        <div className="container">
          <div className="section-header blueprint-panel brackets-tl-br" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">The SunSeed Growth Framework</h2>
            <p className="section-subtitle">
              Click the nodes below to inspect the divisions of our sustainable growth ecosystem, driving vocational education, ethical talent recruitment, and green philanthropy.
            </p>
          </div>

          <div className="sunseed-interactive-layout">
            
            {/* Full-width absolute SVG for connector paths */}
            <svg viewBox="0 0 1100 450" className="sunseed-connectors-svg">
              <defs>
                <filter id="neonSunGlowSunSeed" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Connector lines from pills to central core */}
              <g>
                {/* Left Column connectors (Academy, Talent) */}
                <path d="M 240 120 C 370 120, 410 165, 460 165" className={`connector-path ${activeConcept === 'academy' ? 'active-gold' : ''}`} />
                <path d="M 240 330 C 370 330, 410 285, 460 285" className={`connector-path ${activeConcept === 'talent' ? 'active-blue' : ''}`} />

                {/* Right Column connectors (Foundation, Philosophy) */}
                <path d="M 860 120 C 730 120, 690 165, 640 165" className={`connector-path ${activeConcept === 'foundation' ? 'active-green' : ''}`} />
                <path d="M 860 330 C 730 330, 690 285, 640 285" className={`connector-path ${activeConcept === 'philosophy' ? 'active-red' : ''}`} />
              </g>

              {/* Pulsing endpoint contact indicator dots */}
              <circle cx="240" cy="120" r="3.5" fill="#ffad01" style={{ opacity: activeConcept === 'academy' ? 1 : 0.4 }} className={activeConcept === 'academy' ? 'active-pulse-dot-gold' : ''} />
              <circle cx="240" cy="330" r="3.5" fill="#38bdf8" style={{ opacity: activeConcept === 'talent' ? 1 : 0.4 }} className={activeConcept === 'talent' ? 'active-pulse-dot-blue' : ''} />
              <circle cx="860" cy="120" r="3.5" fill="#22c55e" style={{ opacity: activeConcept === 'foundation' ? 1 : 0.4 }} className={activeConcept === 'foundation' ? 'active-pulse-dot-green' : ''} />
              <circle cx="860" cy="330" r="3.5" fill="#ef4444" style={{ opacity: activeConcept === 'philosophy' ? 1 : 0.4 }} className={activeConcept === 'philosophy' ? 'active-pulse-dot-red' : ''} />

              {/* Central Core Dial Contact Anchors */}
              <circle cx="460" cy="165" r="3.5" fill="#ffad01" style={{ opacity: activeConcept === 'academy' ? 1 : 0.2 }} />
              <circle cx="460" cy="285" r="3.5" fill="#38bdf8" style={{ opacity: activeConcept === 'talent' ? 1 : 0.2 }} />
              <circle cx="640" cy="165" r="3.5" fill="#22c55e" style={{ opacity: activeConcept === 'foundation' ? 1 : 0.2 }} />
              <circle cx="640" cy="285" r="3.5" fill="#ef4444" style={{ opacity: activeConcept === 'philosophy' ? 1 : 0.2 }} />

              {/* Active traveling laser particle dot */}
              {activeConcept === 'academy' && (
                <circle r="4.5" fill="#ffad01" filter="url(#neonSunGlowSunSeed)">
                  <animateMotion dur="1.6s" repeatCount="indefinite" path="M 240 120 C 370 120, 410 165, 460 165" />
                </circle>
              )}
              {activeConcept === 'talent' && (
                <circle r="4.5" fill="#38bdf8" filter="url(#neonSunGlowSunSeed)">
                  <animateMotion dur="1.6s" repeatCount="indefinite" path="M 240 330 C 370 330, 410 285, 460 285" />
                </circle>
              )}
              {activeConcept === 'foundation' && (
                <circle r="4.5" fill="#22c55e" filter="url(#neonSunGlowSunSeed)">
                  <animateMotion dur="1.6s" repeatCount="indefinite" path="M 860 120 C 730 120, 690 165, 640 165" />
                </circle>
              )}
              {activeConcept === 'philosophy' && (
                <circle r="4.5" fill="#ef4444" filter="url(#neonSunGlowSunSeed)">
                  <animateMotion dur="1.6s" repeatCount="indefinite" path="M 860 330 C 730 330, 690 285, 640 285" />
                </circle>
              )}
            </svg>

            {/* Left Side Buttons (Academy, Talent) */}
            <div className="sunseed-nodes-column column-left">
              
              {/* Academy Card */}
              <button 
                onClick={() => setActiveConcept('academy')}
                className={`sunseed-node-btn glass brackets-tl-br ${activeConcept === 'academy' ? 'active-node' : ''}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{ '--i': 0 } as React.CSSProperties}
              >
                <div className="node-icon-box" style={{ backgroundColor: 'rgba(255, 173, 1, 0.1)', color: '#ffad01' }}>
                  <TrophyIcon size={20} />
                </div>
                <div className="node-meta">
                  <span className="node-number">01 // ACADEMY</span>
                  <h3 className="node-title">SunSeed Academy</h3>
                  <span className="node-tag">Technical Competency</span>
                </div>
              </button>

              {/* Talent Card */}
              <button 
                onClick={() => setActiveConcept('talent')}
                className={`sunseed-node-btn glass brackets-tl-br ${activeConcept === 'talent' ? 'active-node' : ''}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{ '--i': 1 } as React.CSSProperties}
              >
                <div className="node-icon-box" style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
                  <UsersIcon size={20} />
                </div>
                <div className="node-meta">
                  <span className="node-number">02 // TALENT</span>
                  <h3 className="node-title">SunSeed Talent</h3>
                  <span className="node-tag">Ethical Stewardship</span>
                </div>
              </button>
            </div>

            {/* Central Graphic Column */}
            <div className="sunseed-mascot-column">
              <div className="sunseed-mascot-wrapper energy-core-container">
                <div className="energy-core-glow sunseed-glow-pulse" style={{ background: activeConcept === 'academy' ? 'radial-gradient(circle, rgba(255,173,1,0.14) 0%, rgba(255,173,1,0.04) 50%, transparent 70%)' : activeConcept === 'talent' ? 'radial-gradient(circle, rgba(56,189,248,0.14) 0%, rgba(56,189,248,0.04) 50%, transparent 70%)' : activeConcept === 'foundation' ? 'radial-gradient(circle, rgba(34,197,94,0.14) 0%, rgba(34,197,94,0.04) 50%, transparent 70%)' : 'radial-gradient(circle, rgba(239,68,68,0.14) 0%, rgba(239,68,68,0.04) 50%, transparent 70%)' }}></div>
                
                {/* Flat background rotating rings */}
                <svg viewBox="0 0 400 400" className="sunseed-mascot-svg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                  <circle cx="200" cy="200" r="95" stroke="rgba(184, 134, 11, 0.15)" strokeWidth="1.2" strokeDasharray="3 4" fill="none" className="sunseed-ring-slow" />
                  <circle cx="200" cy="200" r="125" stroke="rgba(255, 173, 1, 0.12)" strokeWidth="1" strokeDasharray="3 8" fill="none" className="sunseed-ring-reverse" />
                  <circle cx="200" cy="200" r="65" stroke="rgba(184, 134, 11, 0.08)" strokeWidth="0.75" fill="none" />
                </svg>

                {/* 3D Extruded Sun Core */}
                <div className="sun-3d-container">
                  <div className="sun-3d-shield">
                    {[...Array(8)].map((_, i) => {
                      const isFront = i === 7;
                      return (
                        <svg
                          key={`sun-layer-sub-${i}`}
                          viewBox="0 0 400 400"
                          className={`sun-3d-layer-svg ${isFront ? 'sun-layer-front' : 'sun-layer-edge'}`}
                          style={{ '--layer-index': i } as React.CSSProperties}
                        >
                          {i === 0 && (
                            <defs>
                              <radialGradient id="sunSeedCoreGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.8" />
                                <stop offset="60%" stopColor="var(--secondary)" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                              </radialGradient>
                              <linearGradient id="leafGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#22c55e" />
                                <stop offset="100%" stopColor="#86efac" />
                              </linearGradient>
                              <linearGradient id="sunRayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ffad01" />
                                <stop offset="100%" stopColor="#ffd875" />
                              </linearGradient>
                              <filter id="neonGlowSun" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="8" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                              </filter>
                            </defs>
                          )}
                          {/* Corona Glow circle */}
                          <circle
                            cx="200"
                            cy="200"
                            r="45"
                            fill={isFront ? "url(#sunSeedCoreGlow)" : "rgba(184, 134, 11, 0.12)"}
                            className="core-sun-corona"
                          />
                          {/* Corona Rays */}
                          <g className="sunseed-corona-rays">
                            {[...Array(12)].map((_, idx) => {
                              const angle = (idx * 30 * Math.PI) / 180;
                              const rStart = 45;
                              const rEnd = 58;
                              const x1 = 200 + rStart * Math.cos(angle);
                              const y1 = 200 + rStart * Math.sin(angle);
                              const x2 = 200 + rEnd * Math.cos(angle);
                              const y2 = 200 + rEnd * Math.sin(angle);
                              return (
                                <line
                                  key={`ray-${i}-${idx}`}
                                  x1={x1}
                                  y1={y1}
                                  x2={x2}
                                  y2={y2}
                                  stroke={isFront ? "url(#sunRayGrad)" : "rgba(184, 134, 11, 0.45)"}
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  filter={isFront ? "url(#neonGlowSun)" : undefined}
                                  opacity={isFront ? 0.75 : 0.45}
                                  className="corona-ray"
                                />
                              );
                            })}
                          </g>
                          {/* Sprout */}
                          <g className="mascot-sprout" transform="translate(180, 175) scale(0.85)">
                            <path
                              d="M 23 55 C 23 40, 20 28, 23 20"
                              stroke={isFront ? "url(#leafGrad)" : "#166534"}
                              strokeWidth="4.5"
                              strokeLinecap="round"
                              fill="none"
                            />
                            <path
                              d="M 21 28 C 5 20, 3 5, 20 18 Z"
                              fill={isFront ? "url(#leafGrad)" : "#14532d"}
                              stroke={isFront ? "#166534" : "none"}
                              strokeWidth={isFront ? "1" : "0"}
                            />
                            <path
                              d="M 23 24 C 38 14, 40 0, 25 15 Z"
                              fill={isFront ? "url(#leafGrad)" : "#14532d"}
                              stroke={isFront ? "#166534" : "none"}
                              strokeWidth={isFront ? "1" : "0"}
                            />
                            <path
                              d="M 12 55 C 12 47, 34 47, 34 55 C 34 62, 12 62, 12 55 Z"
                              fill={isFront ? "url(#sunRayGrad)" : "#8b5a00"}
                              stroke={isFront ? "#d97706" : "none"}
                              strokeWidth={isFront ? "1.2" : "0"}
                            />
                          </g>
                        </svg>
                      );
                    })}
                  </div>
                </div>

                {/* Central HUD readout labels */}
                <div className="sunseed-mascot-hud blueprint-panel brackets-tl-br">
                  <div className="mascot-hud-line">SYS.VAL // <span className="gold-text">{activeDetail.title.toUpperCase()}</span></div>
                  <div className="mascot-hud-line">CORE_INIT // READY</div>
                </div>
              </div>
            </div>

            {/* Right Side Buttons (Foundation, Philosophy) */}
            <div className="sunseed-nodes-column column-right">
              
              {/* Foundation Card */}
              <button 
                onClick={() => setActiveConcept('foundation')}
                className={`sunseed-node-btn glass brackets-tl-br ${activeConcept === 'foundation' ? 'active-node' : ''}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{ '--i': 2 } as React.CSSProperties}
              >
                <div className="node-icon-box" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
                  <LeafIcon size={20} />
                </div>
                <div className="node-meta" style={{ textAlign: 'right' }}>
                  <span className="node-number">03 // FOUNDATION</span>
                  <h3 className="node-title">SunSeed Foundation</h3>
                  <span className="node-tag">Philanthropy</span>
                </div>
              </button>

              {/* Philosophy Card */}
              <button 
                onClick={() => setActiveConcept('philosophy')}
                className={`sunseed-node-btn glass brackets-tl-br ${activeConcept === 'philosophy' ? 'active-node' : ''}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{ '--i': 3 } as React.CSSProperties}
              >
                <div className="node-icon-box" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
                  <SunIcon size={20} />
                </div>
                <div className="node-meta" style={{ textAlign: 'right' }}>
                  <span className="node-number">04 // CONCEPT</span>
                  <h3 className="node-title">Core Philosophy</h3>
                  <span className="node-tag">Sun &amp; Seed Value</span>
                </div>
              </button>
            </div>

          </div>

          {/* Active Detail Display Panel */}
          <div className="sunseed-detail-card-container">
            <div 
              className="sunseed-detail-card blueprint-panel brackets-tl-br"
              style={{ borderColor: activeDetail.iconColor }}
            >
              <div className="detail-card-header">
                <div className="detail-icon-wrap" style={{ backgroundColor: activeDetail.iconBg, color: activeDetail.iconColor }}>
                  <IconComponent size={28} />
                </div>
                <div>
                  <span className="detail-badge" style={{ color: activeDetail.iconColor, borderColor: `${activeDetail.iconColor}44` }}>{activeDetail.subtitle}</span>
                  <h3 className="detail-title">{activeDetail.title}</h3>
                  <p className="detail-tagline">{activeDetail.tagline}</p>
                </div>
              </div>
              
              <hr className="detail-divider" style={{ borderBottomColor: `${activeDetail.iconColor}22` }} />

              <div className="detail-card-content">
                <div className="detail-desc-block">
                  <h4 className="detail-section-title">Program Description</h4>
                  <p className="detail-desc">{activeDetail.summary}</p>
                  
                  <h4 className="detail-section-title" style={{ marginTop: '1.75rem' }}>Core Pillars &amp; Standards</h4>
                  <ul className="detail-bullets-list">
                    {activeDetail.bullets.map((bullet, idx) => (
                      <li key={idx}>
                        <span className="bullet-indicator" style={{ backgroundColor: activeDetail.iconColor }}></span>
                        <span className="bullet-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="detail-telemetry-block blueprint-panel brackets-tl-br" style={{ borderColor: `${activeDetail.iconColor}33` }}>
                  <h4 className="telemetry-title">Telemetry Status</h4>
                  <div className="telemetry-grid">
                    {activeDetail.metrics.map((metric, idx) => (
                      <div key={idx} className="telemetry-item">
                        <span className="telemetry-label">{metric.label}</span>
                        <span className="telemetry-value" style={{ color: activeDetail.iconColor }}>{metric.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="telemetry-pulse-status">
                    <span className="hud-pulse" style={{ backgroundColor: activeDetail.iconColor, boxShadow: `0 0 10px ${activeDetail.iconColor}` }}></span>
                    <span className="telemetry-status-text">ONLINE &amp; COMPLIANT</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Sun Symbolism Section */}
      <section className="section bg-light-trans reveal">
        <div className="container">
          <div className="section-header blueprint-panel brackets-tl-br" style={{ marginBottom: '3.5rem', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem', textAlign: 'left', alignItems: 'center' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Sun Symbolism &amp; Core Virtues</h2>
            <p className="section-subtitle" style={{ margin: 0, fontSize: '1.1rem', lineHeight: 1.6 }}>
              The Sun symbolizes many powerful qualities that we can adopt in our daily lives: Consistency, Leadership, Selflessness, Strength &amp; Resilience, Positivity, and Growth &amp; Nurturing.
            </p>
          </div>

          <div className="grid-cols-3" style={{ gap: '2rem' }}>
            <div className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave} style={{ '--i': 0 } as React.CSSProperties}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="gold-text" style={{ fontSize: '0.85rem', fontWeight: 800, fontFamily: 'monospace' }}>[ VIRTUE // 01 ]</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 900, opacity: 0.15 }}>01</span>
              </div>
              <h3 className="value-title" style={{ fontSize: '1.25rem', fontWeight: 800 }}>Consistency</h3>
              <p className="value-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                The Sun rises every day without fail, teaching us discipline and reliability.
              </p>
            </div>

            <div className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave} style={{ '--i': 1 } as React.CSSProperties}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="gold-text" style={{ fontSize: '0.85rem', fontWeight: 800, fontFamily: 'monospace' }}>[ VIRTUE // 02 ]</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 900, opacity: 0.15 }}>02</span>
              </div>
              <h3 className="value-title" style={{ fontSize: '1.25rem', fontWeight: 800 }}>Leadership</h3>
              <p className="value-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                It illuminates and guides everything around it, reflecting the qualities of a true leader.
              </p>
            </div>

            <div className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave} style={{ '--i': 2 } as React.CSSProperties}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="gold-text" style={{ fontSize: '0.85rem', fontWeight: 800, fontFamily: 'monospace' }}>[ VIRTUE // 03 ]</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 900, opacity: 0.15 }}>03</span>
              </div>
              <h3 className="value-title" style={{ fontSize: '1.25rem', fontWeight: 800 }}>Selflessness</h3>
              <p className="value-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                The Sun gives light, warmth, and energy without expecting anything in return.
              </p>
            </div>

            <div className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave} style={{ '--i': 3 } as React.CSSProperties}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="gold-text" style={{ fontSize: '0.85rem', fontWeight: 800, fontFamily: 'monospace' }}>[ VIRTUE // 04 ]</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 900, opacity: 0.15 }}>04</span>
              </div>
              <h3 className="value-title" style={{ fontSize: '1.25rem', fontWeight: 800 }}>Strength &amp; Resilience</h3>
              <p className="value-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                It continues to shine despite storms, clouds, or obstacles, reminding us to stay strong through challenges.
              </p>
            </div>

            <div className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave} style={{ '--i': 4 } as React.CSSProperties}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="gold-text" style={{ fontSize: '0.85rem', fontWeight: 800, fontFamily: 'monospace' }}>[ VIRTUE // 05 ]</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 900, opacity: 0.15 }}>05</span>
              </div>
              <h3 className="value-title" style={{ fontSize: '1.25rem', fontWeight: 800 }}>Positivity</h3>
              <p className="value-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                Sunlight brings brightness and hope, encouraging an optimistic outlook on life.
              </p>
            </div>

            <div className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave} style={{ '--i': 5 } as React.CSSProperties}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="gold-text" style={{ fontSize: '0.85rem', fontWeight: 800, fontFamily: 'monospace' }}>[ VIRTUE // 06 ]</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 900, opacity: 0.15 }}>06</span>
              </div>
              <h3 className="value-title" style={{ fontSize: '1.25rem', fontWeight: 800 }}>Growth &amp; Nurturing</h3>
              <p className="value-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                Just as the Sun helps plants grow, we can support and uplift others around us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="section reveal" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="sunseed-quote-banner glass brackets-tl-br" style={{ padding: '3.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 5 }}>
              <SunIcon size={44} className="animate-spin-slow" style={{ color: 'var(--secondary)', marginBottom: '1.5rem', opacity: 0.8 }} />
              <blockquote style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', margin: '0 auto 1.5rem', maxWidth: '900px', lineHeight: '1.45' }}>
                "Be like the Sun—shine consistently, give selflessly, and inspire growth wherever you go."
              </blockquote>
              <cite style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--secondary)', letterSpacing: '0.12em', fontStyle: 'normal' }}>
                — Executive Board, Suria Dirgahayu Sdn. Bhd.
              </cite>
            </div>
            <div className="quote-backdrop-svg">
              <svg viewBox="0 0 100 100" fill="none" stroke="var(--border-color)" strokeWidth="0.25">
                <circle cx="50" cy="50" r="40" strokeDasharray="3 3" />
                <line x1="10" y1="50" x2="90" y2="50" />
                <line x1="50" y1="10" x2="50" y2="90" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
