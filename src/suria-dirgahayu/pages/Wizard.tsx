import React, { useState } from 'react';
import { SERVICES_DATA } from '../../constants/data';

export default function Wizard() {
  const [step, setStep] = useState<number>(1);
  const [industry, setWizardIndustry] = useState<string>('manufacturing');
  const [services, setWizardServices] = useState<string[]>(['construction']);
  const [scale, setWizardScale] = useState<number>(3);

  const calculateEstimate = () => {
    let base = scale * 150000;
    if (industry === 'oilgas') base *= 1.45;
    if (industry === 'infrastructure') base *= 1.25;
    base += services.length * 45000;
    return base;
  };

  const handleToggleService = (sId: string) => {
    setWizardServices(prev => 
      prev.includes(sId) ? prev.filter(s => s !== sId) : [...prev, sId]
    );
  };

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

  return (
    <div className="tm-wizard-view">
      <section className="tm-page-header" onMouseMove={handleHeroMouseMove} onMouseLeave={handleHeroMouseLeave}>
        <div className="tm-hero-bg-container">
          <div className="tm-hero-bg-image"></div>
        </div>
        <div className="tm-page-header-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1 className="tm-reveal">Project Configurator</h1>
            <p className="tm-reveal tm-delay-100">
              Configure your project parameters, industry sectors, and required services to estimate a budget scope.
            </p>
          </div>
          <div className="tm-card tm-reveal tm-delay-200" style={{ borderTop: '4px solid var(--gold)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em', position: 'relative', zIndex: 2 }}>
              ESTIMATOR ENGINE // STATUS
            </div>
            <div style={{ textAlign: 'center', padding: '1rem 0', position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>SIMULATION ENGINE</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.05em' }}>READY // ONLINE</div>
            </div>
            <div style={{ height: '1px', backgroundColor: 'var(--border-color)', position: 'relative', zIndex: 2 }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, position: 'relative', zIndex: 2 }}>
              <span>CONFIG PROGRESSION</span>
              <span>{step === 1 ? '33%' : step === 2 ? '66%' : '100%'} CONFIG</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tm-section">
        <div className="tm-container" style={{ maxWidth: '960px' }}>
          <div className="tm-card" style={{ padding: '3.5rem' }}>
            {/* Step Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
              {[1, 2, 3].map(sNum => (
                <div key={sNum} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: step >= sNum ? 'var(--primary)' : 'var(--bg-tertiary)',
                      color: step >= sNum ? '#ffffff' : 'var(--text-muted)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.85rem'
                    }}
                  >
                    {sNum}
                  </span>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem', color: step >= sNum ? 'var(--text-main)' : 'var(--text-muted)' }}>
                    {sNum === 1 ? 'Select Sector' : sNum === 2 ? 'Select Services' : 'Proposal Review'}
                  </span>
                </div>
              ))}
            </div>

            {/* Step 1: Industry Sector */}
            {step === 1 && (
              <div>
                <h3 className="tm-mega-title" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Select your primary industrial sector:</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  {[
                    { id: 'manufacturing', label: 'Manufacturing & Plants' },
                    { id: 'construction', label: 'Civil & Construction' },
                    { id: 'oilgas', label: 'Oil, Gas & Energy' },
                    { id: 'infrastructure', label: 'Infrastructure & Public' }
                  ].map(ind => (
                    <button
                      key={ind.id}
                      onClick={() => setWizardIndustry(ind.id)}
                      className={`tm-wizard-choice ${industry === ind.id ? 'active' : ''}`}
                    >
                      {ind.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Services Select */}
            {step === 2 && (
              <div>
                <h3 className="tm-mega-title" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Select required engineering scopes:</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
                  {SERVICES_DATA.map(srv => {
                    const isSel = services.includes(srv.id);
                    return (
                      <button
                        key={srv.id}
                        onClick={() => handleToggleService(srv.id)}
                        className={`tm-wizard-choice ${isSel ? 'active' : ''}`}
                        style={{ textAlign: 'left', justifyContent: 'flex-start' }}
                      >
                        <span style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '4px',
                          border: '2px solid var(--secondary)',
                          backgroundColor: isSel ? 'var(--secondary)' : 'transparent',
                          display: 'inline-block',
                          flexShrink: 0
                        }}></span>
                        {srv.title}
                      </button>
                    );
                  })}
                </div>

                <h3 className="tm-mega-title" style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Project Scale / Output Level:</h3>
                <div style={{ padding: '0.5rem 1rem' }}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={scale}
                    onChange={(e) => setWizardScale(parseInt(e.target.value))}
                    style={{ width: '100%', height: '6px', borderRadius: '4px', outline: 'none' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 600 }}>
                    <span>Small</span>
                    <span>Medium</span>
                    <span>Large Scope</span>
                    <span>Heavy Duty</span>
                    <span>Massive EPCC</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Proposal Output */}
            {step === 3 && (
              <div style={{ textAlign: 'left' }}>
                <h3 className="tm-mega-title" style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                  Budgetary Proposal Generated
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', margin: '2rem 0' }}>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>ESTIMATED PROJECT BUDGET</div>
                    <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-main)', margin: '0.5rem 0' }}>
                      RM {calculateEstimate().toLocaleString()}
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>*Subject to final drawing review</span>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>CONFIGURED METRICS</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700 }}>
                      <li>Sector: <span style={{ color: 'var(--primary)' }}>{industry.toUpperCase()}</span></li>
                      <li>Selected Scopes: <span style={{ color: 'var(--primary)' }}>{services.length}</span></li>
                      <li>Scale Class: <span style={{ color: 'var(--primary)' }}>Level {scale}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Step Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
              <button
                type="button"
                className="tm-btn tm-btn-back"
                onClick={() => setStep(prev => prev - 1)}
                disabled={step === 1}
              >
                Back
              </button>

              <button
                type="button"
                className="tm-btn tm-btn-primary"
                onClick={() => {
                  if (step < 3) setStep(prev => prev + 1);
                  else window.location.hash = '#/contact';
                }}
              >
                {step < 3 ? 'Continue' : 'Submit Proposal Request'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
