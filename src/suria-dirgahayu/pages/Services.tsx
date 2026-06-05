import React from 'react';
import { SERVICES_DATA } from '../../constants/data';
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
            <h1 className="tm-reveal">Our Engineering Verticals</h1>
            <p className="tm-reveal tm-delay-100">
              Browse through our specialized divisions, covering civil engineering foundations, MRO, electrical cabling, and credit recovery.
            </p>
          </div>
          <div className="tm-card tm-reveal tm-delay-200" style={{ borderTop: '4px solid var(--primary)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.1em', position: 'relative', zIndex: 2 }}>
              CAPABILITIES TELEMETRY // CORE
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem', fontWeight: 700, position: 'relative', zIndex: 2 }}>
              <div>• HEAVY DEMOLITION</div>
              <div>• CIVIL STRUCTURES</div>
              <div>• MECHANICAL MRO</div>
              <div>• ELECTRICAL LV</div>
              <div>• SCAFFOLDING</div>
              <div>• FABRICATION</div>
            </div>
            <div style={{ height: '1px', backgroundColor: 'var(--border-color)', position: 'relative', zIndex: 2 }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', position: 'relative', zIndex: 2 }}>
              <span>ACTIVE DIVISIONS</span>
              <span style={{ backgroundColor: 'rgba(223, 161, 22, 0.1)', color: 'var(--gold)', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>6 UNITS ONLINE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tm-section">
        <div className="tm-container">
          <div className="tm-services-explorer-layout">
            {/* Left Nav (Clean sidebar glassmorphic tabs, ash colour removed) */}
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
                    [ ISO 9001 QUALITY ASSURED ]
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
                {activeServiceDetails.description}
              </p>

              <div style={{ marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
                <h4 style={{ fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-main)' }}>Core Focus Capabilities:</h4>
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
    </div>
  );
}

