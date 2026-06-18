import React from 'react';
import { SERVICES_DATA, CAPABILITY_SECTORS, INDUSTRY_FOOTPRINTS } from '../../constants/data';

interface ServicesProps {
  activeService: string;
  serviceTransitioning: boolean;
  handleConfigureService: (serviceId: string) => void;
  isSubPage?: boolean;
}

export default function Services({
  activeService,
  serviceTransitioning,
  handleConfigureService,
  isSubPage = false
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
          <div 
            className="tm-hero-bg-image" 
            style={isSubPage && activeServiceDetails.image ? { backgroundImage: `url(${activeServiceDetails.image})`, opacity: 0.12 } : {}}
          ></div>
          <div className="tm-page-header-bg-overlay"></div>
        </div>
        <div className="tm-page-header-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1 className="tm-reveal animate-slide-up">
              {isSubPage ? activeServiceDetails.title : 'Our Services & Capabilities'}
            </h1>
            <p className="tm-reveal tm-delay-100" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              {isSubPage ? activeServiceDetails.description : 'Browse through our specialized solutions covering construction, interior design, IT, and workforce services.'}
            </p>
          </div>
          {isSubPage && activeServiceDetails.image ? (
            <div 
              className="tm-card tm-reveal tm-delay-200" 
              style={{ 
                borderRadius: 'var(--radius-md)', 
                overflow: 'hidden', 
                border: '3px solid var(--primary)', 
                boxShadow: '0 8px 25px rgba(1, 107, 173, 0.2)', 
                height: '220px', 
                padding: 0,
                position: 'relative'
              }}
            >
              <img 
                src={activeServiceDetails.image} 
                alt={activeServiceDetails.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          ) : (
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
          )}
        </div>
      </section>


      {/* Services Section */}
      {isSubPage ? (
        <section className="tm-section">
          <div className="tm-container">
            {activeServiceDetails.parentId && (
              <div style={{ marginBottom: '2rem' }}>
                {(() => {
                  const parentService = SERVICES_DATA.find(s => s.id === activeServiceDetails.parentId);
                  return (
                    <a href={`#/services/${activeServiceDetails.parentId}`} className="tm-btn tm-btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      &larr; Back to {parentService?.title || 'Division'}
                    </a>
                  );
                })()}
              </div>
            )}

            {/* If the active service has children (sub-services), render a grid of its children */}
            {(() => {
              const childServices = SERVICES_DATA.filter(s => s.parentId === activeServiceDetails.id);
              if (childServices.length > 0) {
                return (
                  <div style={{ marginBottom: '4.5rem', marginTop: '2rem' }}>
                    <div className="tm-section-header tm-reveal tm-active" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                      <div className="tm-section-eyebrow">
                        <span className="tm-eyebrow-line"></span>
                        DIVISION SERVICES
                        <span className="tm-eyebrow-line"></span>
                      </div>
                      <h2 className="tm-section-title" style={{ fontSize: '1.8rem', marginTop: '0.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
                        Our Specialized Offerings
                      </h2>
                      <p className="tm-section-subtitle" style={{ maxWidth: '750px', margin: '0.75rem auto 0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                        Explore the dedicated sub-services and specialized solutions under {activeServiceDetails.title}.
                      </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                      {childServices.map((cs, idx) => {
                        const IconComp = cs.icon;
                        return (
                          <div 
                            key={cs.id} 
                            className="tm-card tm-glass-spotlight tm-reveal tm-active"
                            style={{ borderTop: '4px solid var(--primary)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '380px' }}
                          >
                            <div>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '0.8rem', fontWeight: 800, color: 'var(--gold)' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(1, 107, 173, 0.06)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <IconComp size={24} />
                                </div>
                                <span>SERVICE 0{idx + 1}</span>
                              </div>
                              <h3 className="tm-mega-title" style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontWeight: 800, color: 'var(--text-main)' }}>{cs.title}</h3>
                              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{cs.shortDesc}</p>
                            </div>
                            <a href={`#/services/${cs.id}`} className="tm-btn tm-btn-secondary" style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}>
                              Explore Service →
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              return null;
            })()}

            <div className="tm-services-explorer-layout single-page">
              {/* Full Width Details Card */}
              <div
                className="tm-card tm-glass-spotlight tm-spotlight-border"
                onMouseMove={handleCardMouseMove}
                style={{
                  borderLeft: '5px solid var(--primary)',
                  opacity: serviceTransitioning ? 0.4 : 1,
                  transform: `translateY(${serviceTransitioning ? '10px' : '0'})`,
                  transition: 'opacity 0.25s ease, transform 0.25s ease, box-shadow var(--transition-normal)',
                  width: '100%',
                  padding: '3rem'
                }}
              >
                <div style={{ marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
                  <h4 style={{ fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-main)' }}>Key Deliverables &amp; Focus Area:</h4>
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
      ) : (
        <section className="tm-section">
          <div className="tm-container">
            <div className="tm-section-header tm-reveal tm-active" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="tm-section-eyebrow">
                <span className="tm-eyebrow-line"></span>
                OUR BUSINESS
                <span className="tm-eyebrow-line"></span>
              </div>
              <h2 className="tm-section-title" style={{ fontSize: '2rem', marginTop: '0.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Our Business Divisions</h2>
              <p className="tm-section-subtitle" style={{ maxWidth: '750px', margin: '0.75rem auto 0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Explore detailed capabilities and focus areas for each of our primary operational divisions.
              </p>
            </div>

            <div className="tm-services-directory-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {SERVICES_DATA.filter(s => !s.parentId).map((s, idx) => {
                const IconComp = s.icon;
                return (
                  <div
                    key={s.id}
                    className="tm-card tm-glass-spotlight tm-reveal tm-active"
                    style={{ borderTop: '4px solid var(--primary)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '420px' }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '0.8rem', fontWeight: 800, color: 'var(--gold)' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(1, 107, 173, 0.06)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <IconComp size={24} />
                        </div>
                        <span>DIVISION 0{idx + 1}</span>
                      </div>
                      <h3 className="tm-mega-title" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800, color: 'var(--text-main)' }}>{s.title}</h3>
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{s.shortDesc}</p>
                      
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {s.capabilities.slice(0, 3).map((cap, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                            <span>{cap}</span>
                          </li>
                        ))}
                        {s.capabilities.length > 3 && (
                          <li style={{ fontSize: '0.8rem', color: 'var(--primary)', fontStyle: 'italic', paddingLeft: '14px' }}>
                            + {s.capabilities.length - 3} more focus areas
                          </li>
                        )}
                      </ul>
                    </div>

                    <a 
                      href={`#/services/${s.id}`} 
                      className="tm-btn tm-btn-secondary" 
                      style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}
                    >
                      Explore Division →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}


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
              Suria Dirgahayu delivers integrated solutions across multiple industries, combining technical expertise, skilled workforce solutions, operational excellence, and sustainable business practices to create measurable value for our clients.
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
