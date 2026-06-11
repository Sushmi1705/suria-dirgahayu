import { useState, useEffect } from 'react';
import {
  ShieldIcon,
  TrophyIcon,
  GlobeIcon,
  UsersIcon
} from '../components/Icons';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';

export default function About() {
  const [animateChart, setAnimateChart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateChart(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const growthData = [
    { year: '2020', count: '100', pct: 15 },
    { year: '2021', count: '185', pct: 28 },
    { year: '2022', count: '206', pct: 31 },
    { year: '2025', count: '650+', pct: 100 }
  ];

  return (
    <div className="about-page-container animate-fade-in">
      {/* Page Introduction Header */}
      <section className="page-header-section">
        <HeroBackground page="about" />
        <div className="container page-header animate-slide-up">
          <div className="page-header-card">
            <div style={{ position: 'relative', zIndex: 5 }}>
              <div className="badge" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge-dot"></span>
                Surya Dirgahayu at a Glance
              </div>
              <h1 className="page-title gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem' }}>
                About Us
              </h1>
              <p className="page-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                Building Foundations. Empowering People. Creating Value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Profile */}
      <section id="about" className="section reveal">
        <div className="container">
          <div className="blueprint-panel brackets-tl-br" style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
            <p className="lead-text" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Surya Dhirgahyu is a Malaysian diversified solutions provider delivering excellence across construction, interior design, engineering, workforce solutions, and corporate support services. Founded in December 2021, we are committed to helping organizations achieve sustainable growth through innovative solutions, skilled talent, and operational excellence. Our integrated approach enables clients to focus on their core business while we deliver reliable, scalable, and value-driven services.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Driven by our people-first philosophy and ESG principles, we believe that long-term success is built on integrity, collaboration, and responsible business practices. From sourcing highly qualified professionals and executive leaders to delivering engineering, business, and support services, we strive to create meaningful impact for our clients, employees, communities, and stakeholders. At Surya Dhirgahyu, we don't just provide services—we build partnerships, develop opportunities, and create lasting value for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars (Vision, Mission, Values) */}
      <section className="section bg-light-trans reveal">
        <div className="container">
          <div className="grid-cols-3">
            {/* Vision */}
            <div 
              className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ '--i': 0 } as React.CSSProperties}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div className="value-icon-wrap" style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', margin: 0 }}>
                  <GlobeIcon size={24} style={{ color: '#38bdf8' }} />
                </div>
                <span style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 900, 
                  color: 'var(--text-main)', 
                  opacity: 0.15,
                  fontFamily: 'var(--font-heading)'
                }}>
                  01
                </span>
              </div>
              <h3 className="value-title" style={{ marginTop: '0.5rem' }}>Building Sustainable Success Together</h3>
              <p className="value-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                To be a trusted solutions partner, creating lasting value through innovation, expertise, and sustainable growth.
              </p>
            </div>

            {/* Mission */}
            <div 
              className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ '--i': 1 } as React.CSSProperties}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div className="value-icon-wrap" style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)', margin: 0 }}>
                  <TrophyIcon size={24} style={{ color: '#eab308' }} />
                </div>
                <span style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 900, 
                  color: 'var(--text-main)', 
                  opacity: 0.15,
                  fontFamily: 'var(--font-heading)'
                }}>
                  02
                </span>
              </div>
              <h3 className="value-title" style={{ marginTop: '0.5rem' }}>Empowering Businesses</h3>
              <p className="value-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                Delivering excellence across construction, engineering, workforce, and business services through people, innovation, and operational excellence.
              </p>
            </div>

            {/* Values */}
            <div 
              className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ '--i': 2 } as React.CSSProperties}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div className="value-icon-wrap" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', margin: 0 }}>
                  <ShieldIcon size={24} style={{ color: '#22c55e' }} />
                </div>
                <span style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 900, 
                  color: 'var(--text-main)', 
                  opacity: 0.15,
                  fontFamily: 'var(--font-heading)'
                }}>
                  03
                </span>
              </div>
              <h3 className="value-title" style={{ marginTop: '0.5rem' }}>Integrity. Excellence. Partnership.</h3>
              <p className="value-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                Building trust through integrity, delivering quality through excellence, and achieving success through strong partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & Workforce Growth section */}
      <section className="section reveal">
        <div className="container">
          <div className="grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
            {/* Who We Are Text */}
            <div className="text-left">
              <span className="badge" style={{ marginBottom: '1rem' }}>Who We Are</span>
              <h2 className="section-title text-left" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                Building Sustainable Growth Through People, Innovation and Expertise
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                <p>
                  Founded in December 2021, Surya Dhirgahyu is a Malaysian diversified solutions provider delivering integrated services across construction, interior design, engineering, workforce solutions, and corporate support services. We are committed to helping businesses achieve operational excellence through innovative solutions, skilled professionals, and sustainable business practices.
                </p>
                <p>
                  Since our establishment, we have experienced steady growth, expanding our workforce from 100 employees in 2020 to over 650 professionals today. This growth reflects the trust placed in us by our clients and our ability to deliver scalable, people-centric solutions that adapt to the evolving needs of industries and organizations.
                </p>
                <p>
                  At our core, Surya Dhirgahyu is ESG-driven, integrating Environmental, Social, and Governance principles into the way we operate, engage our stakeholders, and create long-term value. Through innovation, integrity, and collaboration, we continue to build stronger partnerships, empower talent, and contribute to sustainable growth for businesses and communities.
                </p>
              </div>
            </div>

            {/* Interactive Workforce Growth Chart */}
            <div className="workforce-growth-panel blueprint-panel brackets-tl-br" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2.5rem' }}>
                <UsersIcon size={20} className="gold-text" />
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Workforce Growth
                </h3>
              </div>

              {/* Bar Chart Container */}
              <div className="chart-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '240px', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)', position: 'relative' }}>
                
                {/* Horizontal gridlines */}
                <div style={{ position: 'absolute', left: 0, right: 0, top: '25%', borderTop: '1px dashed rgba(0, 21, 67, 0.05)', pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', borderTop: '1px dashed rgba(0, 21, 67, 0.05)', pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', left: 0, right: 0, top: '75%', borderTop: '1px dashed rgba(0, 21, 67, 0.05)', pointerEvents: 'none' }}></div>

                {growthData.map((data) => (
                  <div key={data.year} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20%' }}>
                    {/* Animated Count Badge */}
                    <span 
                      style={{ 
                        fontSize: '0.85rem', 
                        fontWeight: 800, 
                        color: 'var(--text-main)', 
                        marginBottom: '0.5rem',
                        opacity: animateChart ? 1 : 0,
                        transform: animateChart ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease',
                        transitionDelay: `${parseInt(data.year) * 0.1}s`
                      }}
                    >
                      {data.count}
                    </span>

                    {/* Chart Bar */}
                    <div 
                      className="glass-spotlight"
                      style={{ 
                        width: '100%', 
                        maxWidth: '45px',
                        height: animateChart ? `${data.pct * 1.8}px` : '0px', 
                        background: 'linear-gradient(180deg, var(--secondary) 0%, var(--primary) 100%)',
                        borderRadius: '4px 4px 0 0',
                        boxShadow: '0 4px 12px rgba(255, 173, 1, 0.15)',
                        transition: 'height 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        transitionDelay: `${(growthData.indexOf(data)) * 100}ms`
                      }}
                    ></div>

                    {/* Year Label */}
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginTop: '0.75rem', fontFamily: 'monospace' }}>
                      {data.year}
                    </span>
                  </div>
                ))}
              </div>

              {/* Chart legend HUD */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'monospace', fontWeight: 600 }}>
                <span>[SCALE // PROFESSIONAL_COUNT]</span>
                <span className="gold-text">[6.5X GROWTH OVER 5 YEARS]</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* On-Site Team & Operations Section */}
      <section className="section bg-light-trans reveal">
        <div className="container">
          <div className="grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div className="about-photo-wrap glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br" style={{ padding: '0.5rem', overflow: 'hidden' }}>
              <img 
                src="/img-team.jpg" 
                alt="Suria Dirgahayu engineering team at industrial facility" 
                style={{ width: '100%', borderRadius: 'var(--radius-sm)', display: 'block', objectFit: 'cover' }} 
              />
            </div>
            <div className="text-left">
              <span className="badge" style={{ marginBottom: '1rem' }}>Our People</span>
              <h2 className="section-title text-left" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                Multi-disciplinary Engineering Experts
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                <p>
                  At Suria Dirgahayu, our competent workforce is our greatest asset. Our team comprises CIDB G7 accredited engineers, Suruhanjaya Tenaga certified chargemen and wiremen, and certified welders who possess extensive hands-on experience in executing large-scale industrial projects.
                </p>
                <p>
                  Through continuous training and safety compliance checks, we maintain operational excellence and zero Lost Time Injury (LTI) records on all sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
