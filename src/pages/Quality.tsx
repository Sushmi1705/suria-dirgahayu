import React from 'react';
import {
  ShieldIcon,
  TrophyIcon,
  WrenchIcon,
  UsersIcon,
  BuildingIcon,
  DollarIcon
} from '../components/Icons';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';

export default function Quality() {

  return (
    <div className="quality-page-container">
      {/* Page Introduction Header */}
      <section className="page-header-section">
        <HeroBackground page="quality" />
        <div className="container page-header animate-slide-up">
          <div className="page-header-card">
            <div style={{ position: 'relative', zIndex: 5 }}>

              <h1 className="page-title gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem' }}>
                HSE & Execution Quality Standards
              </h1>
              <p className="page-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                Suria Dirgahayu Sdn. Bhd. implements strict occupational health, safety, and workmanship quality checks across all engineering verticals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Quality Pillars Section */}
      <section id="why-choose" className="section reveal">
        <div className="container">
          <div className="grid-cols-3">
            {[
              {
                title: 'Experienced Team',
                desc: 'Highly trained professionals and certified technical experts with extensive project site experience.',
                icon: UsersIcon
              },
              {
                title: 'Quality Workmanship',
                desc: 'Adherence to engineering tolerances, robust materials, and structured testing protocols.',
                icon: TrophyIcon
              },
              {
                title: 'Reliable & Efficient',
                desc: 'Meticulous planning, clear critical-path scheduling, and prompt mobilization capabilities.',
                icon: WrenchIcon
              },
              {
                title: 'Safety Compliance',
                desc: 'Strict alignment with OSHA regulations, green tag scaffolding audits, and ST safety rules.',
                icon: ShieldIcon
              },
              {
                title: 'End-to-End Solutions',
                desc: 'Comprehensive execution covering site survey, staging, dismantling, installation, and refurbishment.',
                icon: BuildingIcon
              },
              {
                title: 'Debt Recovery Compliance',
                desc: 'Ethical credit recovery solutions maintaining company reputation and strong client communication.',
                icon: DollarIcon
              }
            ].map((prop, idx) => {
              const PropIcon = prop.icon;
              return (
                <div 
                  key={idx} 
                  className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  style={{ '--i': idx } as React.CSSProperties}
                >
                  <div className="value-icon-wrap">
                    <PropIcon size={24} className="gold-text" />
                  </div>
                  <h3 className="value-title">{prop.title}</h3>
                  <p className="value-desc">{prop.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
