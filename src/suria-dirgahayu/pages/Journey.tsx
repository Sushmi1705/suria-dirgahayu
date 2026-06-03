export default function Journey() {
  const milestones = [
    {
      date: '2021',
      title: 'Establishment & Core Mechanical Focus',
      desc: 'Incorporated Suria Dirgahayu Sdn. Bhd. focusing primarily on industrial dismantling and mechanical overhaul subcontracts.'
    },
    {
      date: '2022',
      title: 'Civil & Structural Integration',
      desc: 'Expanded core operations to include civil engineering, heavy machinery foundations, concrete paving, and industrial access scaffolding.'
    },
    {
      date: '2024',
      title: 'Major Industry Collaborations',
      desc: 'Awarded major contracts with prominent organizations like Ann Joo Steel, Maxeon Malaysia, and ITW Insulation Systems.'
    },
    {
      date: '2025',
      title: 'Electrical Solutions & Licensing',
      desc: 'Set up dedicated electrical engineering division with Energy Commission approved wireman and chargeman resources.'
    },
    {
      date: '2026 & Beyond',
      title: 'Strategic Service Expansion',
      desc: 'Implementing integrated digital client operations, extending specialized credit consultation services, and pursuing sustainable engineering practices.'
    }
  ];

  return (
    <div className="tm-journey-view">
      <section className="tm-page-header">
        <div className="tm-hero-bg-container">
          <div className="tm-hero-bg-image"></div>
        </div>
        <div className="tm-page-header-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1 className="tm-reveal">Evolution &amp; Milestones</h1>
            <p className="tm-reveal tm-delay-100">
              Review the milestones, operational scale upgrades, and credentials growth that define Suria Dirgahayu.
            </p>
          </div>
          <div className="tm-card tm-reveal tm-delay-200" style={{ borderTop: '4px solid var(--gold)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em' }}>
              MILESTONE INDEX // SUMMARY
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>2021</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ESTABLISHMENT</div>
              </div>
              <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--border-color)' }}></div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>5 YRS</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CREDENTIAL GROWTH</div>
              </div>
            </div>
            <div style={{ height: '1px', backgroundColor: 'var(--border-color)' }}></div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Track our progress from mechanical subcontracts to full-scale G7 civil and ST-1 cabling works.
            </div>
          </div>
        </div>
      </section>

      <section className="tm-section">
        <div className="tm-container" style={{ maxWidth: '800px' }}>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Center Line */}
            <div style={{ position: 'absolute', left: '20px', top: '10px', bottom: '10px', width: '2px', backgroundColor: 'var(--border-color)' }}></div>
            
            {milestones.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '2rem', position: 'relative', textAlign: 'left' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#ffffff', border: '3px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, flexShrink: 0, position: 'relative' }}>
                  <span className="tm-radar-ring"></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--primary)', zIndex: 6 }}></span>
                </div>
                
                <div className="tm-card" style={{ flex: 1, padding: '1.75rem 2rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>
                    {item.date}
                  </span>
                  <h3 className="tm-mega-title" style={{ fontSize: '1.25rem', margin: '0.25rem 0 0.75rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
