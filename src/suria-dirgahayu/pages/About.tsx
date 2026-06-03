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
              Learn about our operational capabilities, CIDB G7 registration, Energy Commission approvals, and safety compliances.
            </p>
          </div>
          <div className="tm-card tm-reveal tm-delay-200" style={{ borderTop: '4px solid var(--gold)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em' }}>
              REGULATORY CREDENTIALS // ACTIVE
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>CIDB LICENSE</span>
                <span style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '0.9rem' }}>GRADE G7</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Unlimited Tender Capacity (B, CE, ME)</div>
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
                <h3 className="tm-mega-title" style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>CIDB Malaysia</h3>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>GRADE G7 LICENSING</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  Registered under B (Building), CE (Civil Engineering), and ME (Mechanical &amp; Electrical) categories with unlimited financial tender capacity.
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
    </div>
  );
}
