export default function Quality() {
  return (
    <div className="tm-quality-view">
      <section className="tm-page-header">
        <div className="tm-hero-bg-container">
          <div className="tm-hero-bg-image"></div>
        </div>
        <div className="tm-page-header-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1 className="tm-reveal">HSE &amp; Quality Parameters</h1>
            <p className="tm-reveal tm-delay-100">
              Review our active safety metrics, ISO 9001 compliance, and Energy Commission (ST) audit registers.
            </p>
          </div>
          <div className="tm-card tm-reveal tm-delay-200" style={{ borderTop: '4px solid var(--primary)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.1em' }}>
              HSE ACTIVE TELEMETRY // REAL-TIME
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.9rem', fontWeight: 800 }}>
                <span>SAFE MAN-HOURS</span>
                <span style={{ color: 'var(--primary)' }}>280k+ HRS</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '3px' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '3px' }}></div>
              </div>
            </div>
            <div style={{ height: '1px', backgroundColor: 'var(--border-color)' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 800 }}>
              <span>LTI RATE (ACCIDENTS)</span>
              <span style={{ color: '#16a34a' }}>0.0 (ZERO ACCIDENTS)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tm-section">
        <div className="tm-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', margin: '0 auto', maxWidth: '1000px' }}>
            <div className="tm-card">
              <h3 className="tm-mega-title" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                HSE Safety Metrics
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    <span>SAFE MANHOURS LOGGED</span>
                    <span style={{ color: 'var(--primary)' }}>280,000 hrs</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '4px' }}>
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    <span>COMPLIANCE RATING</span>
                    <span style={{ color: 'var(--primary)' }}>100% compliant</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '4px' }}>
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    <span>ZERO-ACCIDENT LOG STATUS</span>
                    <span style={{ color: '#16a34a' }}>Active Log OK</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tm-card">
              <h3 className="tm-mega-title" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                HSE Regulations Framework
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span>
                  <span>100% adherence to OSHA 1994 Standards for high-elevation scaffolding and civil excavations.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span>
                  <span>Energy Commission (ST) low voltage cabling designs audited periodically by competent Chargemen.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span>
                  <span>Continuous in-house risk assessment (HIRARC) logged before any high-elevation works.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
