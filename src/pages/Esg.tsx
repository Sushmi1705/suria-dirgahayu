import React from 'react';
import {
  ShieldIcon,
  UsersIcon,
  LeafIcon
} from '../components/Icons';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';

export default function Esg() {
  return (
    <div className="esg-page-container animate-fade-in">
      {/* Page Introduction Header */}
      <section className="page-header-section">
        <HeroBackground page="esg" />
        <div className="container page-header animate-slide-up">
          <div className="page-header-card">
            <div style={{ position: 'relative', zIndex: 5 }}>
              <div className="badge" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge-dot"></span>
                Sustainability Framework
              </div>
              <h1 className="page-title gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem' }}>
                Environmental, Social & Governance (ESG)
              </h1>
              <p className="page-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                At Suria Dirgahayu, we align technical excellence with sustainable business practices, safety compliance, and rigorous corporate governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Pillars Overview */}
      <section className="section reveal">
        <div className="container">
          <div className="section-header blueprint-panel brackets-tl-br">
            <h2 className="section-title">Our ESG Pillars</h2>
            <p className="section-subtitle">
              How we embed responsibility, safety, and transparency into every contract, construction, and engineering project.
            </p>
          </div>

          <div className="grid-cols-3">
            {/* Environmental Pillar */}
            <div 
              className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ '--i': 0 } as React.CSSProperties}
            >
              <div className="value-icon-wrap" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                <LeafIcon size={24} style={{ color: '#22c55e' }} />
              </div>
              <h3 className="value-title">Environmental (E)</h3>
              <p className="value-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                We actively minimize environmental footprints by engineering energy-efficient solutions and implementing low-impact demolition works.
              </p>
              <ul className="output-list" style={{ marginTop: '1.5rem', textAlign: 'left', paddingLeft: 0, listStyle: 'none' }}>
                <li style={{ display: 'flex', gap: '8px', marginBottom: '8px', fontSize: '0.85rem' }}>
                  <span className="bullet-gold-mini" style={{ marginTop: '6px' }}></span>
                  <span><strong>Low-Impact Work:</strong> Controlled demolition to reduce dust and neighborhood noise.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', marginBottom: '8px', fontSize: '0.85rem' }}>
                  <span className="bullet-gold-mini" style={{ marginTop: '6px' }}></span>
                  <span><strong>Energy Conservation:</strong> Custom mechanical MRO optimizing machine efficiency.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', fontSize: '0.85rem' }}>
                  <span className="bullet-gold-mini" style={{ marginTop: '6px' }}></span>
                  <span><strong>Green Materials:</strong> Sourcing compliant scaffolding components.</span>
                </li>
              </ul>
            </div>

            {/* Social Pillar */}
            <div 
              className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ '--i': 1 } as React.CSSProperties}
            >
              <div className="value-icon-wrap" style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)' }}>
                <UsersIcon size={24} style={{ color: '#38bdf8' }} />
              </div>
              <h3 className="value-title">Social & Safety (S)</h3>
              <p className="value-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                People are our core strength. We maintain an uncompromising safety culture and support ethical workforce management.
              </p>
              <ul className="output-list" style={{ marginTop: '1.5rem', textAlign: 'left', paddingLeft: 0, listStyle: 'none' }}>
                <li style={{ display: 'flex', gap: '8px', marginBottom: '8px', fontSize: '0.85rem' }}>
                  <span className="bullet-gold-mini" style={{ marginTop: '6px' }}></span>
                  <span><strong>Safety First:</strong> 100% HSE compliance, DOSH tag tracking, and green card protocols.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', marginBottom: '8px', fontSize: '0.85rem' }}>
                  <span className="bullet-gold-mini" style={{ marginTop: '6px' }}></span>
                  <span><strong>Talent Care:</strong> Structured technical skills and certifications for our workforce.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', fontSize: '0.85rem' }}>
                  <span className="bullet-gold-mini" style={{ marginTop: '6px' }}></span>
                  <span><strong>Community Trust:</strong> Respectful interaction and support during structural changes.</span>
                </li>
              </ul>
            </div>

            {/* Governance Pillar */}
            <div 
              className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ '--i': 2 } as React.CSSProperties}
            >
              <div className="value-icon-wrap" style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)' }}>
                <ShieldIcon size={24} style={{ color: '#eab308' }} />
              </div>
              <h3 className="value-title">Governance & Licensing (G)</h3>
              <p className="value-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                We practice transparent operations and hold all mandatory registrations, guaranteeing total commercial compliance.
              </p>
              <ul className="output-list" style={{ marginTop: '1.5rem', textAlign: 'left', paddingLeft: 0, listStyle: 'none' }}>
                <li style={{ display: 'flex', gap: '8px', marginBottom: '8px', fontSize: '0.85rem' }}>
                  <span className="bullet-gold-mini" style={{ marginTop: '6px' }}></span>
                  <span><strong>National Licensing:</strong> Registered and certified for heavy industrial works.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', marginBottom: '8px', fontSize: '0.85rem' }}>
                  <span className="bullet-gold-mini" style={{ marginTop: '6px' }}></span>
                  <span><strong>Suruhanjaya Tenaga:</strong> Energy Commission certified electrical setups.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', fontSize: '0.85rem' }}>
                  <span className="bullet-gold-mini" style={{ marginTop: '6px' }}></span>
                  <span><strong>Ethical Recovery:</strong> Clean corporate credit support preserving business dignity.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive HUD Telemetry metrics board */}
      <section className="section reveal">
        <div className="container">
          <div className="footer-hud-console blueprint-panel brackets-tl-br" style={{ padding: '2.5rem', margin: '0 auto', maxWidth: '1000px' }}>
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Sustainability Telemetry Console
            </h3>
            <div className="footer-hud-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div className="footer-hud-item" style={{ borderRight: '1px solid var(--border-color)', paddingRight: '1rem' }}>
                <span className="footer-hud-lbl" style={{ fontSize: '0.75rem' }}>HSE_ACCIDENT_RATE</span>
                <span className="footer-hud-val" style={{ fontSize: '1.75rem', fontWeight: 900, color: '#22c55e' }}>0.00%</span>
              </div>
              <div className="footer-hud-item" style={{ borderRight: '1px solid var(--border-color)', paddingRight: '1rem' }}>
                <span className="footer-hud-lbl" style={{ fontSize: '0.75rem' }}>REG_COMPLIANCE</span>
                <span className="footer-hud-val" style={{ fontSize: '1.75rem', fontWeight: 900 }}>COMPLIANT</span>
              </div>
              <div className="footer-hud-item" style={{ borderRight: '1px solid var(--border-color)', paddingRight: '1rem' }}>
                <span className="footer-hud-lbl" style={{ fontSize: '0.75rem' }}>ST_COMPETENCY</span>
                <span className="footer-hud-val" style={{ fontSize: '1.75rem', fontWeight: 900 }}>ST-1 & ST-3</span>
              </div>
              <div className="footer-hud-item">
                <span className="footer-hud-lbl" style={{ fontSize: '0.75rem' }}>COMPLIANCE_AUDIT</span>
                <span className="footer-hud-val" style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--secondary)' }}>100% OK</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
