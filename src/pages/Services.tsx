import React from 'react';
import { ChevronRightIcon } from '../components/Icons';
import { SERVICES_DATA, CAPABILITY_SECTORS, INDUSTRY_FOOTPRINTS } from '../constants/data';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';

interface ServicesProps {
  activeService: string;
  handleSwitchService: (serviceId: string) => void;
  serviceTransitioning: boolean;
  showToast: (message: string) => void;
}

export default function Services({
  activeService,
  handleSwitchService,
  serviceTransitioning,
  showToast
}: ServicesProps) {

  const activeServiceDetails = SERVICES_DATA.find(s => s.id === activeService) || SERVICES_DATA[0];

  const handleConfigureInWizard = () => {
    showToast(`Directing to ESG Commitments...`);
    window.location.hash = '#/esg';
  };

  return (
    <div className="services-page-container animate-fade-in">
      {/* Page Header */}
      <section className="page-header-section">
        <HeroBackground page="services" />
        <div className="container page-header animate-slide-up">
          <div className="page-header-card">
            <div style={{ position: 'relative', zIndex: 5 }}>
              <div className="badge" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge-dot"></span>
                Our Capabilities
              </div>
              <h1 className="page-title gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem' }}>
                Capabilities &amp; Services
              </h1>
              <p className="page-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                Surya Dhirgahyu delivers integrated solutions across multiple industries, combining technical expertise, skilled workforce solutions, operational excellence, and sustainable business practices to create measurable value for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Sectors section */}
      <section className="section bg-light-trans reveal">
        <div className="container">
          <div className="section-header blueprint-panel brackets-tl-br">
            <h2 className="section-title">Capabilities Sectors</h2>
            <p className="section-subtitle">
              Delivering high-value, integrated solutions structured across five primary operational focus areas.
            </p>
          </div>

          <div className="grid-cols-3" style={{ gap: '2rem' }}>
            {CAPABILITY_SECTORS.map((sector, idx) => (
              <div
                key={idx}
                className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{ '--i': idx } as React.CSSProperties}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--secondary)', letterSpacing: '0.1em', fontFamily: 'monospace' }}>
                    [SECTOR // 0{idx + 1}]
                  </span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-main)', opacity: 0.15 }}>
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="value-title" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1rem' }}>
                  {sector.title}
                </h3>
                <p className="value-desc" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Explorer Section */}
      <section id="services" className="section reveal">
        <div className="container">
          <div className="section-header blueprint-panel brackets-tl-br">
            <h2 className="section-title">Services Directory</h2>
            <p className="section-subtitle">
              Interactive portal detailing our eight core services, focus areas, and compliance deliverables.
            </p>
          </div>

          <div className="services-explorer-layout">
            {/* Sidebar Navigation */}
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

            {/* Active Details Card */}
            <div 
              className={`service-details-card glass-spotlight spotlight-border border-beam-card ${serviceTransitioning ? 'transition-hidden' : ''}`} 
              style={{ borderLeft: '4px solid var(--secondary)' }}
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
                  <span className="badge service-cat-badge" style={{ marginTop: '0.5rem', fontSize: '0.72rem' }}>Quality Assurance Verified</span>
                </div>
              </div>
              
              <p className="service-detail-desc" style={{ fontSize: '1.22rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '3rem' }}>
                {activeServiceDetails.description}
              </p>
              
              <div className="capabilities-checklist-wrap" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2.5rem' }}>
                <h4 style={{ marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '0.02em', color: 'var(--text-main)' }}>Key Deliverables &amp; Focus Area:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                  
                  {activeServiceDetails.image && (
                    <div 
                      className="service-showcase-image-wrap glass-spotlight" 
                      style={{ 
                        borderRadius: 'var(--radius-md)', 
                        overflow: 'hidden', 
                        border: '1px solid var(--border-color)',
                        boxShadow: 'var(--shadow-md)',
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '16/7',
                        maxHeight: '320px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img 
                        src={activeServiceDetails.image} 
                        alt={activeServiceDetails.title}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                        className="service-showcase-img"
                      />
                    </div>
                  )}

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
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                  <button 
                    type="button"
                    className="btn btn-primary" 
                    onClick={handleConfigureInWizard}
                  >
                    Learn about ESG Alignment
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

      {/* Industry Footprint Section */}
      <section className="section bg-light-trans reveal">
        <div className="container">
          <div className="section-header blueprint-panel brackets-tl-br">
            <h2 className="section-title">Industry Footprint</h2>
            <p className="section-subtitle">
              Sectors and industries we serve across Malaysia, delivering custom solutions and operational support.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {INDUSTRY_FOOTPRINTS.map((ind, idx) => (
              <div
                key={ind.id}
                className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{ 
                  '--i': idx, 
                  display: 'flex', 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  gap: '1.25rem', 
                  padding: '1.75rem',
                  textAlign: 'left'
                } as React.CSSProperties}
              >
                <div style={{ 
                  fontSize: '2rem', 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '12px', 
                  backgroundColor: 'rgba(255, 173, 1, 0.06)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(255, 173, 1, 0.05)'
                }}>
                  {ind.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--secondary)', letterSpacing: '0.08em', fontFamily: 'monospace', marginBottom: '0.25rem' }}>
                    [FOOTPRINT // 0{idx + 1}]
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', margin: 0, lineHeight: 1.4 }}>
                    {ind.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
