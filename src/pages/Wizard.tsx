import React from 'react';
import { ShieldIcon, TrophyIcon } from '../components/Icons';
import { SERVICES_DATA } from '../constants/data';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';

interface WizardProps {
  wizardStep: number;
  setWizardStep: (step: number) => void;
  wizardIndustry: string;
  setWizardIndustry: (ind: string) => void;
  wizardServices: string[];
  setWizardServices: React.Dispatch<React.SetStateAction<string[]>>;
  wizardScale: number;
  setWizardScale: (scale: number) => void;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  showToast: (message: string) => void;
}

export default function Wizard({
  wizardStep,
  setWizardStep,
  wizardIndustry,
  setWizardIndustry,
  wizardServices,
  setWizardServices,
  wizardScale,
  setWizardScale,
  setFormData,
  showToast
  }: WizardProps) {

  const handleToggleWizardService = (serviceId: string) => {
    setWizardServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  // Compute recommendation values based on wizard configuration
  const getWizardRecommendations = () => {
    let baseTimeWeeks = wizardScale * 4;
    let certs = ['ISO 9001:2015 Quality Management'];
    
    if (wizardScale >= 4) {
      certs.push('Grade A Enterprise Standards Alignment');
    } else {
      certs.push('Standard Operations Permit License');
    }

    if (wizardServices.includes('it-solutions') || wizardServices.includes('ict-management')) {
      certs.push('IT Infrastructure & Cybersecurity Certification');
    }
    if (wizardServices.includes('construction') || wizardServices.includes('interior-design')) {
      certs.push('Safety Green Card & NIOSH Certifications');
      certs.push('DOSH Scaffold Competency Tag');
    }
    if (wizardServices.includes('manpower') || wizardServices.includes('hr-payroll')) {
      certs.push('HRD Corp & Workforce Standards Audit');
    }

    baseTimeWeeks += wizardServices.length * 2;
    
    const steps = ['Site Assessment & Engineering Risk Registry'];
    if (wizardServices.includes('construction')) steps.push('Civil excavation & heavy structural works');
    if (wizardServices.includes('it-solutions')) steps.push('Software deployment & hardware installations');
    if (wizardServices.includes('interior-design')) steps.push('Space planning & interior office fit-out works');
    if (wizardServices.includes('ict-management')) steps.push('ICT resource outsourcing & project staffing');
    if (wizardServices.includes('manpower')) steps.push('Specialist talent recruitment & onboarding');
    if (wizardServices.includes('hr-payroll')) steps.push('Payroll management & HR systems integration');
    if (wizardServices.includes('debt-collection')) steps.push('Debt recovery audit & collection management');
    if (wizardServices.includes('branding')) steps.push('Corporate identity & digital branding rollout');
    steps.push('Quality handover & client inspection audits');

    return {
      duration: `${baseTimeWeeks - 2} to ${baseTimeWeeks + 2} Weeks`,
      certificates: certs,
      steps: steps
    };
  };

  const recommendation = getWizardRecommendations();

  // Process wizard to final contact pre-fill
  const handleWizardRoadmapLock = () => {
    const serviceNames = wizardServices.map(id => SERVICES_DATA.find(s => s.id === id)?.title).join(', ');
    setFormData((prev: any) => ({
      ...prev,
      serviceCategory: wizardServices.includes('debt-collection') ? 'debt' : 'engineering',
      message: `Project Parameters Configured:\n- Industry Sector: ${wizardIndustry.toUpperCase()}\n- Selected Services: ${serviceNames}\n- Scale Level: ${wizardScale}/5 (Approx. estimated timeline: ${recommendation.duration})\n- Required Standards: ${recommendation.certificates.join(', ')}`
    }));

    showToast('Roadmap settings saved! Directing to consultation request.');
    
    setTimeout(() => {
      window.location.hash = '#/contact';
    }, 600);
  };

  return (
    <div className="wizard-page-container">
      <section className="page-header-section">
        <HeroBackground page="wizard" />
        <div className="container page-header animate-slide-up">
          <div className="page-header-card">
            <div style={{ position: 'relative', zIndex: 5 }}>

              <h1 className="page-title gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem' }}>
                Blueprint Configurator
              </h1>
              <p className="page-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                Input project complexity, industrial sectors, and services scale to inspect estimated durations, safety certificates, and milestone checklists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Configurator Wizard */}
      <section id="configurator" className="section configurator-bg reveal">
        <div className="container">
          <div className="wizard-container">
            {/* Step Indicators */}
            <div className="wizard-steps-header">
              {[
                { step: 1, label: 'Sector' },
                { step: 2, label: 'Services' },
                { step: 3, label: 'Scale' },
                { step: 4, label: 'Roadmap' }
              ].map(s => (
                <div key={s.step} className={`wizard-step-node ${wizardStep === s.step ? 'active' : ''} ${wizardStep > s.step ? 'completed' : ''}`}>
                  <span className="step-circle">{wizardStep > s.step ? '✓' : s.step}</span>
                  <span className="step-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="wizard-content-box">
              {/* STEP 1: Industry Sector Selection */}
              {wizardStep === 1 && (
                <div className="wizard-step-slide animate-slide-up">
                  <h3 className="wizard-step-title">Select Your Industry Sector</h3>
                  <p className="wizard-step-subdesc">Identify the primary industry alignment for your upcoming work.</p>
                  
                  <div className="wizard-grid-select">
                    {[
                      { id: 'petrochemical', label: 'Oil, Gas & Energy' },
                      { id: 'manufacturing', label: 'Heavy Manufacturing' },
                      { id: 'steel', label: 'Steel & Metallurgy' },
                      { id: 'hospitality', label: 'Hotel & Hospitality' },
                      { id: 'infrastructure', label: 'Infrastructure & Civil' }
                    ].map(ind => (
                      <button
                        key={ind.id}
                        type="button"
                        className={`wizard-select-card ${wizardIndustry === ind.id ? 'active' : ''} glass-spotlight spotlight-border tilt-card border-beam-card`}
                        onClick={() => setWizardIndustry(ind.id)}
                        onMouseMove={handleCardMouseMove}
                        onMouseLeave={handleCardMouseLeave}
                      >
                        <span className="radio-dot"></span>
                        <span>{ind.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="wizard-step-actions">
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={() => setWizardStep(2)}
                    >
                      Next Step: Select Services
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Scope of Services */}
              {wizardStep === 2 && (
                <div className="wizard-step-slide animate-slide-up">
                  <h3 className="wizard-step-title">Choose Required Engineering Scope</h3>
                  <p className="wizard-step-subdesc">Check all capabilities needed for this project package (Multi-Select).</p>

                  <div className="wizard-checkbox-grid">
                    {SERVICES_DATA.map(s => (
                      <button
                        key={s.id}
                        type="button"
                        className={`wizard-check-card ${wizardServices.includes(s.id) ? 'active' : ''} glass-spotlight spotlight-border tilt-card border-beam-card`}
                        onClick={() => handleToggleWizardService(s.id)}
                        onMouseMove={handleCardMouseMove}
                        onMouseLeave={handleCardMouseLeave}
                      >
                        <span className={`check-box ${wizardServices.includes(s.id) ? 'checked' : ''}`}></span>
                        <span>{s.title}</span>
                      </button>
                    ))}
                  </div>

                  <div className="wizard-step-actions">
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => setWizardStep(1)}
                    >
                      Back
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      disabled={wizardServices.length === 0}
                      onClick={() => setWizardStep(3)}
                    >
                      Next Step: Adjust Scale
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Scale Adjustment */}
              {wizardStep === 3 && (
                <div className="wizard-step-slide animate-slide-up">
                  <h3 className="wizard-step-title">Specify Execution Scale</h3>
                  <p className="wizard-step-subdesc">Drag the indicator to estimate the complexity, budget scale, and project footprint.</p>

                  <div className="wizard-scale-box glass">
                    <div className="estimator-label-row" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="scale-level-title" style={{ fontWeight: 700 }}>Project footprint index</span>
                      <span className="scale-value-badge badge">Level {wizardScale} of 5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={wizardScale}
                      onChange={(e) => setWizardScale(Number(e.target.value))}
                      className="slider-input"
                      style={{ width: '100%', height: '8px', cursor: 'pointer', appearance: 'none', background: 'var(--border-color)', borderRadius: '4px', outline: 'none' }}
                    />
                    <div className="scale-labels" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      <span>Minor Maintenance</span>
                      <span>Mid-Scale Upgrade</span>
                      <span>Heavy Industrial / Decommission</span>
                    </div>
                  </div>

                  <div className="wizard-step-actions">
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => setWizardStep(2)}
                    >
                      Back
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={() => setWizardStep(4)}
                    >
                      Generate Project Roadmap
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Technical Roadmap Output */}
              {wizardStep === 4 && (
                <div className="wizard-step-slide animate-slide-up">
                  <div className="wizard-split" style={{ gap: '2.5rem' }}>
                    <div className="wizard-results-summary text-left">
                      <h3 className="wizard-step-title" style={{ textAlign: 'left' }}>Roadmap Configured</h3>
                      <p className="wizard-step-subdesc" style={{ textAlign: 'left' }}>Your project parameters have been evaluated. See execution metrics on the right.</p>
                      
                      <div className="output-section" style={{ marginBottom: '1.5rem' }}>
                        <h4 className="output-header"><ShieldIcon size={16} className="gold-text" /> Compliance & Standards:</h4>
                        <ul className="output-list">
                          {recommendation.certificates.map((cert, idx) => (
                            <li key={idx} className="output-list-item">
                              <span className="bullet-gold"></span>
                              <span>{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="output-section">
                        <h4 className="output-header"><TrophyIcon size={16} className="gold-text" /> Expected Milestone Path:</h4>
                        <ol className="output-steps">
                          {recommendation.steps.slice(0, 4).map((step, idx) => (
                            <li key={idx} className="output-step-item">
                              <span className="step-num">{idx + 1}</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    <div 
                      className="wizard-results glass-spotlight spotlight-border tilt-card border-beam-card"
                      onMouseMove={handleCardMouseMove}
                      onMouseLeave={handleCardMouseLeave}
                    >
                      <div className="metric-box">
                        <span className="metric-label">Estimated Timeline</span>
                        <div className="metric-value">{recommendation.duration}</div>
                        <span className="metric-note">Includes logistics, certification, & final handover audits.</span>
                      </div>

                      <div className="wizard-step-actions" style={{ flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                        <button 
                          type="button" 
                          className="btn btn-primary" 
                          style={{ width: '100%' }}
                          onClick={handleWizardRoadmapLock}
                        >
                          Lock Blueprint & Request Consultation
                        </button>
                        <button 
                          type="button" 
                          className="btn btn-secondary" 
                          style={{ width: '100%' }}
                          onClick={() => setWizardStep(3)}
                        >
                          Modify Scale Parameters
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
