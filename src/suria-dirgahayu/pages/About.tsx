import { ShieldIcon, TrophyIcon, GlobeIcon } from '../../components/Icons';

export default function About() {
  return (
    <div className="tm-about-view">
      <section className="tm-page-header">
        <div className="tm-hero-bg-container">
          <div className="tm-hero-bg-image"></div>
        </div>
        <div className="tm-page-header-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1 className="tm-reveal">Corporate Profile</h1>
            <p className="tm-reveal tm-delay-100">
              Learn about our operational capabilities, quality standards, Energy Commission approvals, and safety compliances.
            </p>
          </div>
          <div className="tm-card tm-reveal tm-delay-200" style={{ borderTop: '4px solid var(--gold)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em' }}>
              REGULATORY CREDENTIALS // ACTIVE
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>QUALITY STANDARD</span>
                <span style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '0.9rem' }}>ISO 9001</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quality Management System Certified</div>
            </div>
            <div style={{ height: '1px', backgroundColor: 'var(--border-color)' }}></div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>ST LICENSING</span>
                <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem' }}>CLASS ST-1</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Energy Commission Registered Contractor</div>
            </div>
          </div>
        </div>
      </section>

      <section className="tm-section">
        <div className="tm-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'left' }}>

              <h2 className="tm-section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                Engineered for Safety. Built for Integrity.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                With a robust framework of skilled professionals and Energy Commission (Suruhanjaya Tenaga) certified personnel, Suria Dirgahayu Sdn. Bhd. offers end-to-end engineering, refurbishment, and credit consultation works across Malaysia.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(1, 107, 173, 0.08)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ShieldIcon size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontWeight: 700 }}>Safety-First Culture</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Strict compliance with OSHA auditing standards</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(1, 107, 173, 0.08)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <TrophyIcon size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontWeight: 700 }}>Certified Personnel</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>In-house competent chargemen and wiremen resources</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(1, 107, 173, 0.08)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <GlobeIcon size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontWeight: 700 }}>National Execution Scope</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Proven project execution for top commercial assets</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Widgets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="tm-card" style={{ borderLeft: '4px solid var(--primary)' }}>
                <h3 className="tm-mega-title" style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>Quality Assurance</h3>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>ISO 9001:2015</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  Operating under strict quality and safety management guidelines to ensure consistent, premium project delivery.
                </p>
              </div>

              <div className="tm-card" style={{ borderLeft: '4px solid var(--primary)' }}>
                <h3 className="tm-mega-title" style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>Suruhanjaya Tenaga</h3>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>ST-1 &amp; ST-3 LICENSE REGISTER</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  Energy Commission approved wireman electrical wiring capabilities, backup power systems, and Low Voltage distribution boards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Site Team & Operations Section */}
      <section className="tm-section" style={{ borderTop: '1px solid var(--border-color)', backgroundColor: 'rgba(1, 107, 173, 0.01)' }}>
        <div className="tm-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 className="tm-section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                Multi-disciplinary Engineering Experts
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.75' }}>
                <p>
                  At Suria Dirgahayu, our competent workforce is our greatest asset. Our team comprises CIDB G7 accredited engineers, Suruhanjaya Tenaga certified chargemen and wiremen, and certified welders who possess extensive hands-on experience in executing large-scale industrial projects.
                </p>
                <p>
                  Through continuous training and safety compliance checks, we maintain operational excellence and zero Lost Time Injury (LTI) records on all sites.
                </p>
              </div>
            </div>
            <div className="tm-card" style={{ padding: '0.5rem', overflow: 'hidden' }}>
              <img 
                src="/img-team.jpg" 
                alt="Suria Dirgahayu engineering team at industrial facility" 
                style={{ width: '100%', borderRadius: 'var(--radius-md)', display: 'block', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
