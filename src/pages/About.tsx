import {
  ShieldIcon,
  TrophyIcon,
  GlobeIcon
} from '../components/Icons';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';

export default function About() {

  return (
    <div className="about-page-container">
      {/* Page Introduction Header */}
      <section className="page-header-section">
        <HeroBackground />
        <div className="container page-header animate-slide-up">
          <div className="page-header-card">
            <div style={{ position: 'relative', zIndex: 5 }}>

              <h1 className="page-title gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem' }}>
                Corporate Profile & Quality Registers
              </h1>
              <p className="page-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                Learn about our credentials, CIDB G7 registration capabilities, Energy Commission approvals, safety compliances, and journey milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us / Company Profile */}
      <section id="about" className="section bg-light-trans reveal">
        <div className="container">
          <div className="grid-cols-2" style={{ alignItems: 'center' }}>
            <div className="text-left">

              <h2 className="section-title text-left" style={{ textAlign: 'left' }}>Engineered for Safety. Built for Integrity.</h2>
              <p className="lead-text" style={{ fontSize: '1.45rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: '1.68', marginBottom: '2rem' }}>
                With a robust framework of skilled professionals and Energy Commission (Suruhanjaya Tenaga) certified personnel, Suria Dirgahayu Sdn. Bhd. offers end-to-end engineering, refurbishment, and credit consultation works.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                Founded with a strong commitment to quality and safety, we specialize in solving difficult operational challenges for commercial and heavy industrial assets. Our teams combine technical expertise, project management rigors, and safety compliance to execute on-time handovers.
              </p>
              <div className="value-pills">
                <div className="value-pill">
                  <ShieldIcon size={16} className="gold-text" /> <span>Safety-First Culture</span>
                </div>
                <div className="value-pill">
                  <TrophyIcon size={16} className="gold-text" /> <span>Certified Personnel</span>
                </div>
                <div className="value-pill">
                  <GlobeIcon size={16} className="gold-text" /> <span>National Execution Scope</span>
                </div>
              </div>
            </div>
            
            {/* Interactive Credentials & Certifications Dashboard Widget */}
            <div className="credentials-dashboard-widget">
              <div 
                className="cred-card glass-spotlight spotlight-border tilt-card blueprint-panel brackets-tl-br"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="cred-card-header">
                  <div className="cred-card-title-block">
                    <span className="cred-card-title">Suruhanjaya Tenaga</span>
                    <span className="cred-card-tag">Energy Commission Approved</span>
                  </div>
                  <span className="badge">ST-1 & ST-3 Licenses</span>
                </div>
                <div className="cred-card-body">
                  <ul className="cred-bullets">
                     <li className="cred-bullet-item">✓ Approved Low Voltage Electrical Design</li>
                     <li className="cred-bullet-item">✓ Competent In-House Wiremen & Chargemen</li>
                     <li className="cred-bullet-item">✓ Compliance with ST Safety Auditing Standards</li>
                  </ul>
                  <div className="cred-meter-box">
                    <svg className="cred-meter-svg" viewBox="0 0 96 96">
                      <circle className="cred-meter-bg" cx="48" cy="48" r="40" />
                      <circle className="cred-meter-val" cx="48" cy="48" r="40" strokeDashoffset="0" />
                    </svg>
                    <span className="cred-meter-text">100%</span>
                  </div>
                </div>
                <svg className="cred-card-bg-watermark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>

              <div 
                className="cred-card glass-spotlight spotlight-border tilt-card blueprint-panel brackets-tl-br"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="cred-card-header">
                  <div className="cred-card-title-block">
                    <span className="cred-card-title">CIDB Malaysia</span>
                    <span className="cred-card-tag">Grade G7 Registration</span>
                  </div>
                  <span className="badge">Unlimited Tender Capacity</span>
                </div>
                <div className="cred-card-body">
                  <ul className="cred-bullets">
                     <li className="cred-bullet-item">✓ Capital Capacity Tier G7 (Unlimited tender size)</li>
                     <li className="cred-bullet-item">✓ Registered for B, CE, and ME categories</li>
                     <li className="cred-bullet-item">✓ Quality standard audited and approved</li>
                  </ul>
                  <div className="cred-meter-box">
                    <svg className="cred-meter-svg" viewBox="0 0 96 96">
                      <circle className="cred-meter-bg" cx="48" cy="48" r="40" />
                      <circle className="cred-meter-val" cx="48" cy="48" r="40" strokeDashoffset="0" />
                    </svg>
                    <span className="cred-meter-text">G7</span>
                  </div>
                </div>
                <svg className="cred-card-bg-watermark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18" />
                  <path d="M9 21V9H5v12" />
                  <path d="M13 21V3h-4v18" />
                  <path d="M17 21v-8h-4v8" />
                  <path d="M21 21v-4h-4v4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
