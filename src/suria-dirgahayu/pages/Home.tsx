import React from 'react';
import { SERVICES_DATA } from '../../constants/data';

interface HomeProps {
  handleSelectService: (serviceId: string) => void;
}

export default function Home({ handleSelectService }: HomeProps) {
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

  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="tm-home-view">
      {/* Hero Section */}
      <section className="tm-hero-section" onMouseMove={handleHeroMouseMove} onMouseLeave={handleHeroMouseLeave}>
        <div className="tm-hero-bg-container">
          <div className="tm-hero-bg-image"></div>
        </div>
        <div className="tm-hero-grid-decor"></div>
        
        {/* Animated Constellation Network Overlay */}
        <svg className="tm-hero-constellation" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" stroke="#22d3ff" strokeOpacity="0.18" strokeWidth="0.85">
          <g fill="#22d3ff">
            {/* Constellation lines */}
            <line x1="400" y1="400" x2="520" y2="300" />
            <line x1="520" y1="300" x2="600" y2="450" />
            <line x1="600" y1="450" x2="480" y2="580" />
            <line x1="480" y1="580" x2="350" y2="520" />
            <line x1="350" y1="520" x2="400" y2="400" />
            <line x1="400" y1="400" x2="320" y2="280" />
            <line x1="320" y1="280" x2="450" y2="220" />
            <line x1="450" y1="220" x2="520" y2="300" />
            
            <line x1="520" y1="300" x2="640" y2="220" />
            <line x1="600" y1="450" x2="700" y2="520" />
            <line x1="480" y1="580" x2="500" y2="700" />
            <line x1="350" y1="520" x2="220" y2="600" />
            <line x1="320" y1="280" x2="200" y2="240" />
            
            {/* Constellation nodes */}
            <circle cx="400" cy="400" r="4.5" fill="#22d3ff" />
            <circle cx="520" cy="300" r="3" />
            <circle cx="600" cy="450" r="3" />
            <circle cx="480" cy="580" r="3" />
            <circle cx="350" cy="520" r="3.5" />
            <circle cx="320" cy="280" r="3" />
            <circle cx="450" cy="220" r="4" fill="#ffffff" />
            <circle cx="640" cy="220" r="2.5" />
            <circle cx="700" cy="520" r="3" />
            <circle cx="500" cy="700" r="2.5" />
            <circle cx="220" cy="600" r="3.5" />
            <circle cx="200" cy="240" r="3" />
          </g>
        </svg>

        <div className="tm-hero-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'flex-start' }}>
            <div className="tm-badge tm-reveal">
              <span className="tm-badge-dot"></span>
              <span className="tm-badge-text">SURIA DIRGAHAYU // ESTABLISHED 2021</span>
            </div>
            <h1 className="tm-hero-title tm-reveal tm-delay-100">
              Delivering Integrated <br/>
              <span className="tm-hero-title-accent">Engineering &amp; MRO Solutions</span>
            </h1>
            <p className="tm-hero-desc tm-reveal tm-delay-200">
              We provide professional <span className="tm-desc-highlight">engineering procurement, construction, and commissioning (EPCC)</span> services in civil structures, mechanical maintenance, ST cabling, and custom metal fabrications.
            </p>
            <div className="tm-reveal tm-delay-300 tm-hero-buttons" style={{ display: 'flex', gap: '1.25rem', marginTop: '0.5rem' }}>
              <a href="#/wizard" className="tm-btn tm-btn-primary">
                Project Configurator
              </a>
              <a href="#/services" className="tm-btn tm-btn-secondary">
                Explore Capabilities
              </a>
            </div>
          </div>

          {/* Right Column: Premium High-Tech Dashboard Telemetry Widget */}
          <div className="tm-reveal tm-delay-300 tm-hero-widget-panel">
            <div className="tm-card tm-glass-spotlight tm-spotlight-border" onMouseMove={handleCardMouseMove} style={{ padding: '2.25rem', borderLeft: '4px solid var(--primary)', position: 'relative' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', position: 'relative', zIndex: 2 }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  OPERATIONS CONSOLE // ACTIVE
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', backgroundColor: 'rgba(34, 211, 255, 0.08)', color: 'var(--secondary)', padding: '0.25rem 0.65rem', borderRadius: '4px', fontWeight: 800 }}>
                  <span className="tm-status-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'inline-block', position: 'relative', top: '0', left: '0', transform: 'none' }}></span>
                  LIVE FEED
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
                
                {/* Credentials Item */}
                <div className="tm-console-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div className="tm-console-icon-wrapper">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span className="tm-console-label">REGULATORY LICENSING</span>
                        <span className="tm-console-value-accent gold-color">COMPLIANT</span>
                      </div>
                      <div className="tm-console-subtext">Approved and licensed operations nationwide</div>
                      <div className="tm-progress-track">
                        <div className="tm-progress-bar gold-bg" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ height: '1px', backgroundColor: 'var(--border-color)' }}></div>

                {/* ST Item */}
                <div className="tm-console-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div className="tm-console-icon-wrapper secondary">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span className="tm-console-label">ST LICENSE</span>
                        <span className="tm-console-value-accent primary-color">CLASS ST-1</span>
                      </div>
                      <div className="tm-console-subtext">Energy Commission Registered Contractor</div>
                      <div className="tm-progress-track">
                        <div className="tm-progress-bar primary-bg" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ height: '1px', backgroundColor: 'var(--border-color)' }}></div>

                {/* Safety Item */}
                <div className="tm-console-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div className="tm-console-icon-wrapper success">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span className="tm-console-label">SAFETY STATUS</span>
                        <span className="tm-console-value-accent success-color">ZERO LTI</span>
                      </div>
                      <div className="tm-console-subtext">HSE Audits 100% Compliant &amp; Active Scaffolding</div>
                      <div className="tm-progress-track">
                        <div className="tm-progress-bar success-bg" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>



      {/* Services Grid Section */}
      <section className="tm-section">
        <div className="tm-container">
          <div className="tm-section-header tm-reveal">
            <div className="tm-section-eyebrow">
              <span className="tm-eyebrow-line"></span>
              CORE DIVISIONS
              <span className="tm-eyebrow-line"></span>
            </div>
            <h2 className="tm-section-title">Our Business Focus</h2>
            <p className="tm-section-desc">Explore our core engineering capabilities and industrial services designed to deliver maximum quality and asset safety.</p>
          </div>

          <div className="tm-grid-3">
            {[
              {
                id: 'engineering',
                title: 'Engineering',
                desc: 'Innovative engineering solutions for complex challenges.',
                icon: SERVICES_DATA.find(s => s.id === 'engineering')!.icon,
                image: '/img-civil.jpg'
              },
              {
                id: 'cx-outsourcing',
                title: 'Customer Experience (CX) Outsourcing',
                desc: 'Elevate your brand with world-class CX services.',
                icon: SERVICES_DATA.find(s => s.id === 'cx-outsourcing')!.icon,
                image: '/img-team.jpg'
              },
              {
                id: 'digital-enablement',
                title: 'Digital Enablement',
                desc: 'Accelerate your digital transformation journey.',
                icon: SERVICES_DATA.find(s => s.id === 'digital-enablement')!.icon,
                image: '/img-electrical.jpg'
              }
            ].map((b, index) => {
              const Icon = b.icon;
              return (
                <div key={b.id} className={`tm-card tm-glass-spotlight tm-spotlight-border tm-reveal tm-delay-${index * 100}`} onMouseMove={handleCardMouseMove} onClick={() => handleSelectService(b.id)} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                  {b.image && (
                    <div style={{ height: '140px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--border-color)', position: 'relative' }}>
                      <img src={b.image} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div className="tm-card-icon" style={{ position: 'absolute', bottom: '10px', left: '10px', marginBottom: 0, width: '38px', height: '38px', borderRadius: '6px' }}><Icon size={18} /></div>
                    </div>
                  )}
                  {!b.image && <div className="tm-card-icon"><Icon size={24} /></div>}
                  <h3 className="tm-mega-title" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{b.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>{b.desc}</p>
                  <span className="tm-card-action-link">
                    Read details <span className="tm-action-arrow">→</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

