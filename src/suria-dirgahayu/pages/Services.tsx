import React from 'react';
import { SERVICES_DATA, CAPABILITY_SECTORS, INDUSTRY_FOOTPRINTS } from '../../constants/data';
import { ChevronRightIcon } from '../../components/Icons';

interface ServicesProps {
  activeService: string;
  handleSwitchService: (serviceId: string) => void;
  serviceTransitioning: boolean;
  handleConfigureService: (serviceId: string) => void;
}

export default function Services({
  activeService,
  handleSwitchService,
  serviceTransitioning,
  handleConfigureService
}: ServicesProps) {
  const activeServiceDetails = SERVICES_DATA.find(s => s.id === activeService) || SERVICES_DATA[0];

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const header = e.currentTarget;
    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    header.style.setProperty('--mouse-x', `${x}px`);
    header.style.setProperty('--mouse-y', `${y}px`);
    
    const dx = (e.clientX - rect.left) / rect.width - 0.5;
    const dy = (e.clientY - rect.top) / rect.height - 0.5;
    header.style.setProperty('--mouse-dx', `${dx}`);
    header.style.setProperty('--mouse-dy', `${dy}`);
  };

  const handleHeroMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const header = e.currentTarget;
    header.style.setProperty('--mouse-dx', '0');
    header.style.setProperty('--mouse-dy', '0');
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
    <div className="tm-services-view">
      <section className="tm-page-header" onMouseMove={handleHeroMouseMove} onMouseLeave={handleHeroMouseLeave}>
        {/* Floating Background Image Layer */}
        <div className="tm-hero-bg-container">
          <div className="tm-hero-bg-image"></div>
          <div className="tm-page-header-bg-overlay"></div>
        </div>
        <div className="tm-page-header-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1 className="tm-reveal animate-slide-up">Our Services &amp; Capabilities</h1>
            <p className="tm-reveal tm-delay-100">
              Browse through our specialized solutions covering construction, interior design, IT, and workforce services.
            </p>
          </div>
          <div className="tm-card tm-reveal tm-delay-200" style={{ borderTop: '4px solid var(--primary)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.1em', position: 'relative', zIndex: 2 }}>
              CAPABILITIES TELEMETRY // CORE
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem', fontWeight: 700, position: 'relative', zIndex: 2 }}>
              <div>• CONSTRUCTION</div>
              <div>• IT SOLUTIONS</div>
              <div>• INTERIOR DESIGN</div>
              <div>• ICT MANAGEMENT</div>
              <div>• MANPOWER</div>
              <div>• HR &amp; PAYROLL</div>
              <div>• DEBT RECOVERY</div>
              <div>• BRANDING</div>
            </div>
            <div style={{ height: '1px', backgroundColor: 'var(--border-color)', position: 'relative', zIndex: 2 }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', position: 'relative', zIndex: 2 }}>
              <span>ACTIVE DIVISIONS</span>
              <span style={{ backgroundColor: 'rgba(223, 161, 22, 0.1)', color: 'var(--gold)', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>8 UNITS ONLINE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Sectors */}
      <section className="tm-section" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '4rem' }}>
        <div className="tm-container">
          <div className="tm-section-header tm-reveal tm-active" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tm-section-eyebrow">
              <span className="tm-eyebrow-line"></span>
              OUR CAPABILITIES
              <span className="tm-eyebrow-line"></span>
            </div>
            <h2 className="tm-section-title" style={{ fontSize: '2rem', marginTop: '0.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Industries We Serve</h2>
            <p className="tm-section-subtitle" style={{ maxWidth: '750px', margin: '0.75rem auto 0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Surya Dhirgahyu delivers integrated solutions across multiple industries, combining technical expertise, skilled workforce solutions, operational excellence, and sustainable business practices to create measurable value for our clients.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {CAPABILITY_SECTORS.map((sector, idx) => (
              <div 
                key={idx} 
                className="tm-card tm-glass-spotlight tm-reveal tm-active"
                style={{ borderTop: '3px solid var(--primary)', padding: '2rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.8rem', fontWeight: 800, color: 'var(--gold)' }}>
                  <span>CAPABILITY // 0{idx + 1}</span>
                  <span style={{ opacity: 0.2 }}>0{idx + 1}</span>
                </div>
                <h3 className="tm-mega-title" style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 800, color: 'var(--text-main)' }}>{sector.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Explorer */}
      <section className="tm-section">
        <div className="tm-container">
          <div className="tm-section-header tm-reveal tm-active" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tm-section-eyebrow">
              <span className="tm-eyebrow-line"></span>
              SERVICES EXPLORER
              <span className="tm-eyebrow-line"></span>
            </div>
            <h2 className="tm-section-title" style={{ fontSize: '2rem', marginTop: '0.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Services Directory</h2>
            <p className="tm-section-subtitle" style={{ maxWidth: '750px', margin: '0.75rem auto 0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Detailed capabilities list, focus areas, and key deliverables for each of our core services.
            </p>
          </div>

          <div className="tm-services-explorer-layout">
            {/* Left Nav */}
            <div className="tm-services-sidebar">
              {SERVICES_DATA.map(s => {
                const Icon = s.icon;
                const isActive = s.id === activeService;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleSwitchService(s.id)}
                    className={`tm-service-tab ${isActive ? 'active' : ''}`}
                  >
                    <span className="tm-service-tab-icon"><Icon size={18} /></span>
                    <span className="tm-service-tab-text">{s.title.split(' & ')[0]}</span>
                    <ChevronRightIcon size={14} className="tm-service-tab-arrow" />
                  </button>
                );
              })}
            </div>

            {/* Right details */}
            <div
              className="tm-card tm-glass-spotlight tm-spotlight-border"
              onMouseMove={handleCardMouseMove}
              style={{
                borderLeft: '5px solid var(--primary)',
                opacity: serviceTransitioning ? 0.4 : 1,
                transform: `translateY(${serviceTransitioning ? '10px' : '0'})`,
                transition: 'opacity 0.25s ease, transform 0.25s ease, box-shadow var(--transition-normal)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', position: 'relative', zIndex: 2 }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: 'rgba(1, 107, 173, 0.06)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {(() => {
                    const ActiveIcon = activeServiceDetails.icon;
                    return <ActiveIcon size={28} />;
                  })()}
                </div>
                <div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>{activeServiceDetails.title}</h2>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    [ QUALITY &amp; DELIVERY ASSURED ]
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
                {activeServiceDetails.description}
              </p>

              <div style={{ marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
                <h4 style={{ fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-main)' }}>Core Focus Capabilities:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: activeServiceDetails.image ? '1.2fr 0.8fr' : '1fr', gap: '2rem', alignItems: 'start' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {activeServiceDetails.capabilities.map((cap, i) => (
                      <li key={i} className="tm-capability-item">
                        <span className="tm-capability-num">
                          {i + 1}
                        </span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {activeServiceDetails.image && (
                    <div 
                      className="tm-service-image-wrap" 
                      style={{ 
                        borderRadius: 'var(--radius-md)', 
                        overflow: 'hidden', 
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 8px 20px rgba(1, 107, 173, 0.05)',
                        position: 'relative',
                        aspectRatio: '4/3'
                      }}
                    >
                      <img 
                        src={activeServiceDetails.image} 
                        alt={activeServiceDetails.title}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          transition: 'transform var(--transition-normal)'
                        }}
                        className="tm-service-img"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem', position: 'relative', zIndex: 2 }}>
                <button
                  type="button"
                  className="tm-btn tm-btn-primary"
                  onClick={() => handleConfigureService(activeServiceDetails.id)}
                >
                  Configure in Project Wizard
                </button>

                {/* Vector Schema Watermark */}
                <svg viewBox="0 0 100 30" fill="none" stroke="var(--primary)" strokeWidth="0.4" strokeDasharray="2 2" style={{ width: '150px', height: 'auto', opacity: 0.15 }}>
                  <path d="M10 15 h80 M30 5 v20 M70 5 v20" />
                  <circle cx="30" cy="15" r="2.5" />
                  <circle cx="70" cy="15" r="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Footprint Section */}
      <section className="tm-section" style={{ backgroundColor: 'rgba(1, 107, 173, 0.01)', borderTop: '1px solid var(--border-color)' }}>
        <div className="tm-container">
          <div className="tm-section-header tm-reveal tm-active" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tm-section-eyebrow">
              <span className="tm-eyebrow-line"></span>
              MARKET EXPANSION
              <span className="tm-eyebrow-line"></span>
            </div>
            <h2 className="tm-section-title" style={{ fontSize: '2rem', marginTop: '0.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Industry Footprint</h2>
            <p className="tm-section-subtitle" style={{ maxWidth: '750px', margin: '0.75rem auto 0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Proven execution and technical support footprint across twelve core industries and commercial sectors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {INDUSTRY_FOOTPRINTS.map((ind, idx) => (
              <div 
                key={ind.id} 
                className="tm-card tm-glass-spotlight tm-reveal tm-active"
                style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem', borderLeft: '3px solid var(--gold)' }}
              >
                <div style={{ fontSize: '1.8rem', width: '52px', height: '52px', borderRadius: '10px', backgroundColor: 'rgba(223, 161, 22, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {ind.emoji}
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.05em', fontFamily: 'monospace', marginBottom: '0.2rem' }}>
                    [FOOTPRINT // 0{idx + 1}]
                  </div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)', margin: 0, lineHeight: 1.3 }}>
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
