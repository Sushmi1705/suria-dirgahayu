import React from 'react';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';

export default function Journey() {

  return (
    <div className="journey-page-container">
      {/* Page Introduction Header */}
      <section className="page-header-section">
        <HeroBackground page="journey" />
        <div className="container page-header animate-slide-up">
          <div className="page-header-card">
            <div style={{ position: 'relative', zIndex: 5 }}>

              <h1 className="page-title gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem' }}>
                Evolution & Milestones
              </h1>
              <p className="page-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                Inspect the historical timelines, operational scale upgrades, and credentials growth that define Suria Dirgahayu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section id="timeline" className="section reveal">
        <div className="container">
          <div className="timeline">
            {[
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
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`timeline-item ${idx % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
                style={{ '--i': idx } as React.CSSProperties}
              >
                <div className="timeline-badge"></div>
                <div className="timeline-date">{item.date}</div>
                <div 
                  className="timeline-content-card glass-spotlight spotlight-border tilt-card border-beam-card"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <h3 className="timeline-card-title">{item.title}</h3>
                  <p className="timeline-card-desc">{item.desc}</p>
                  <div className="timeline-card-details">
                    <span className="bullet-gold-mini"></span>
                    <span>INSPECT MILESTONE DETAILS</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
