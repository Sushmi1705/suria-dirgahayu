import React from 'react';
import { ChevronRightIcon } from '../components/Icons';
import { SERVICES_DATA } from '../constants/data';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';

interface ServicesProps {
  activeService: string;
  handleSwitchService: (serviceId: string) => void;
  serviceTransitioning: boolean;
  setWizardServices: (services: string[]) => void;
  setWizardStep: (step: number) => void;
  showToast: (message: string) => void;
}

export default function Services({
  activeService,
  handleSwitchService,
  serviceTransitioning,
  setWizardServices,
  setWizardStep,
  showToast
}: ServicesProps) {

  const activeServiceDetails = SERVICES_DATA.find(s => s.id === activeService) || SERVICES_DATA[0];

  const handleConfigureInWizard = () => {
    setWizardServices([activeServiceDetails.id]);
    setWizardStep(1);
    showToast(`Configuring ${activeServiceDetails.title} in wizard...`);
    window.location.hash = '#/wizard';
  };

  return (
    <div className="services-page-container">
      {/* Page Introduction Header */}
      <section className="page-header-section">
        <HeroBackground />
        <div className="container page-header animate-slide-up">
          <div className="page-header-card">
            <div style={{ position: 'relative', zIndex: 5 }}>

              <h1 className="page-title gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem' }}>
                Our Engineering Verticals
              </h1>
              <p className="page-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                Explore our specialized vertical scopes covering heavy mechanical upgrades, civil structure, scaffolding tag logs, certified low-voltage cabling, and commercial interiors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Explorer Section */}
      <section id="services" className="section reveal">
        <div className="container">
          <div className="services-explorer-layout">
            <div className="services-list-nav">
              {SERVICES_DATA.map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <button
                    key={s.id}
                    className={`service-nav-btn ${activeService === s.id ? 'active' : ''} glass-spotlight spotlight-border tilt-card`}
                    onClick={() => handleSwitchService(s.id)}
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                    style={{ '--i': idx } as React.CSSProperties}
                  >
                    <IconComponent size={20} className="service-nav-icon" />
                    <span>{s.title}</span>
                    <ChevronRightIcon size={16} className="service-nav-chevron" />
                  </button>
                );
              })}
            </div>

            <div 
              className={`service-details-card glass-spotlight spotlight-border tilt-card border-beam-card ${serviceTransitioning ? 'transition-hidden' : ''}`} 
              style={{ borderLeft: '4px solid var(--secondary)' }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Technical Blueprint Corner Crosshairs */}
              <div className="blueprint-crosshair crosshair-tl"></div>
              <div className="blueprint-crosshair crosshair-tr"></div>
              <div className="blueprint-crosshair crosshair-bl"></div>
              <div className="blueprint-crosshair crosshair-br"></div>

              <div className="service-detail-header">
                <div className="service-detail-icon-wrap">
                  {(() => {
                    const ActiveIcon = activeServiceDetails.icon;
                    return <ActiveIcon size={36} className="gold-text" />;
                  })()}
                </div>
                <div>
                  <h3 className="service-detail-title">{activeServiceDetails.title}</h3>
                  <span className="badge service-cat-badge" style={{ marginTop: '0.5rem', fontSize: '0.72rem' }}>Compliance Standards Verified</span>
                </div>
              </div>
              
              <p className="service-detail-desc" style={{ fontSize: '1.22rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '3rem' }}>
                {activeServiceDetails.description}
              </p>
              
              <div className="capabilities-checklist-wrap" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2.5rem' }}>
                <h4 style={{ marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '0.02em', color: 'var(--text-main)' }}>Core Focus Capabilities:</h4>
                <ul className="capabilities-list">
                  {activeServiceDetails.capabilities.map((cap, i) => (
                    <li key={i} className="capability-item" style={{ '--i': i } as React.CSSProperties}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                        <span className="capability-index">0{i + 1}</span>
                        <span className="capability-text">{cap}</span>
                      </div>
                      <ChevronRightIcon size={16} className="capability-chevron gold-text flex-shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                  <button 
                    type="button"
                    className="btn btn-primary" 
                    onClick={handleConfigureInWizard}
                  >
                    Configure Service in Project Wizard
                  </button>
                </div>
                
                {/* Technical Blueprint schema vector watermark */}
                <svg className="service-schema-graphic" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M10 15 h80 M30 5 v20 M70 5 v20 M20 10 l10 -5 l10 5 M60 10 l10 -5 l10 5" />
                  <circle cx="30" cy="15" r="2" />
                  <circle cx="70" cy="15" r="2" />
                  <text x="45" y="10" fontSize="2.5" fill="currentColor" stroke="none">[SD-SCHEMATIC // {activeServiceDetails.id.toUpperCase()}]</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
