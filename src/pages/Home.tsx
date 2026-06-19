import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ChevronRightIcon,
  WrenchIcon,
  UsersIcon,
  GlobeIcon,
  ShieldIcon,
  TrophyIcon,
  CloseIcon,
  SunIcon,
  LeafIcon,
  UserCheckIcon
} from '../components/Icons';
import { CLIENTS } from '../constants/data';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';
import ClientLogo from '../components/ClientLogo';


interface BlogPost {
  id: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  date: string;
  author: string;
  content: React.ReactNode;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'st-licensing',
    tag: 'ST Competency & Licensing',
    title: 'ST Wireman Licensing: Elevating Safety & Standardized Compliance in Malaysia',
    desc: 'An in-depth look into Suria Dirgahayu\'s professional training framework, Energy Commission (ST) wireman guidelines, and DOSH safety tagging compliance.',
    image: '/img-blog-st.png',
    date: 'June 08, 2026',
    author: 'Ir. Ahmad Zaidi, Chief HSE Director',
    content: (
      <>
        <p>In heavy industrial construction and power engineering, electrical safety is not merely a box to check—it is a critical operational standard. At Suria Dirgahayu, we align every project with the stringent requirements of the Energy Commission (Suruhanjaya Tenaga) and DOSH safety standards.</p>
        <h3>Why ST Competency Matters</h3>
        <p>Under Malaysian electrical safety regulations, only ST-certified Wiremen are authorized to inspect, build, and operate high-voltage industrial setups. By establishing our internal SunSeed Academy framework, we ensure that every single site technician receives continuous competency updates and support for ST-1 and ST-3 wireman testing.</p>
        <blockquote>"Safety is the foundation of structural engineering. Ensuring 100% licensing compliance is how we protect lives and secure heavy MNC industrial assets."</blockquote>
        <h3>Standardized Safety Protocols</h3>
        <p>Beyond theoretical knowledge, our hands-on training centers model structural rigging, scaffolding tagging, and mechanical assembly courses to eliminate site errors. This dedication ensures that Suria Dirgahayu remains class-A audited, and compliant across all CIDB G7 engineering operations.</p>
      </>
    )
  },
  {
    id: 'solar-microgrids',
    tag: 'Renewable Infrastructure',
    title: 'Harnessing Clean Energy: Sowing the Seeds of Rural Microgrid Innovation',
    desc: 'How Suria Dirgahayu is integrating MRO engineering expertise with solar technology to electrification rural communities and vocational boarding schools.',
    image: '/img-blog-solar.png',
    date: 'May 24, 2026',
    author: 'Chen Wei Ming, Head of Solar Operations',
    content: (
      <>
        <p>Clean energy is a key driver for structural transition and corporate responsibility in Malaysia. Our team is passionate about harnessing solar technologies not only for commercial multi-megawatt setups but also for direct community development.</p>
        <h3>Connecting Remote Communities</h3>
        <p>Through the SunSeed Foundation, we leverage our design and MRO expertise to fund, design, and construct standalone microgrids and battery storage setups for rural boarding schools in East Malaysia. These sites previously relied entirely on loud, carbon-heavy diesel generators.</p>
        <blockquote>"Energy access is the first step toward vocational opportunity. A solar microgrid provides consistent electricity, lighting, and computing labs for remote schools."</blockquote>
        <h3>Sustaining the Sprout</h3>
        <p>Our commitment extends beyond installation. We grant academic scholarships to outstanding vocational students, teaching them active solar maintenance, diagnostic telemetry reading, and local battery troubleshooting. This creates a sustainable local human capital ecosystem.</p>
      </>
    )
  },
  {
    id: 'zero-harm-civil',
    tag: 'Civil & Refurbishment MRO',
    title: 'Zero-Harm Engineering: Scaffolding Quality & Controlled Refurbishment',
    desc: 'Analyzing zero-noise, dust-controlled operations, industrial scaffolding modular tagging, and CIDB G7 quality controls on active multi-national construction zones.',
    image: '/img-blog-demolition.png',
    date: 'April 15, 2026',
    author: 'Muhammad Haris, Senior Construction Manager',
    content: (
      <>
        <p>Operating inside busy commercial plant facilities demands surgical precision. Industrial refurbishment MRO and mechanical piping upgrades must cause zero interference to active operations and zero risk to plant personnel.</p>
        <h3>Modular Scaffolding Safety</h3>
        <p>We implement DOSH-compliant modular scaffolding systems that use a color-coded green-and-red tagging protocol. A green tag means a certified inspector has cleared the scaffold for load-bearing operations, while a red tag stops access, ensuring complete risk mitigation.</p>
        <blockquote>"In industrial plants, civil engineering is a matter of strict discipline. Noise, dust, and vibrations must be controlled at the source."</blockquote>
        <h3>Controlled Demolition and Civil MRO</h3>
        <p>Our specialized teams perform MRO refits utilizing silent, hydraulic crushing gear rather than standard jackhammers. This prevents structural vibration fatigue on neighboring structures and minimizes operational downtime for our corporate partners.</p>
      </>
    )
  }
];

export default function Home() {
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (activeBlog) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    };
  }, [activeBlog]);
  


  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const hero = e.currentTarget;
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    hero.style.setProperty('--mouse-x', `${x}px`);
    hero.style.setProperty('--mouse-y', `${y}px`);
    
    const dx = (e.clientX - rect.left) / rect.width - 0.5;
    const dy = (e.clientY - rect.top) / rect.height - 0.5;
    hero.style.setProperty('--mouse-dx', `${dx}`);
    hero.style.setProperty('--mouse-dy', `${dy}`);
  };

  const handleHeroMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const hero = e.currentTarget;
    hero.style.setProperty('--mouse-dx', '0');
    hero.style.setProperty('--mouse-dy', '0');
  };

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section id="hero" className="hero-section" onMouseMove={handleHeroMouseMove} onMouseLeave={handleHeroMouseLeave} style={{ position: 'relative' }}>
        <HeroBackground page="home" />
        <div className="hero container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-grid">
          <div className="hero-text-block">
            <h1 className="hero-title animate-title-entry">
              Shaping Sustainable Futures <br />
              <span className="gradient-text">Through Innovation and Expertise.</span>
            </h1>
            <p className="hero-description animate-desc-entry">
              At Suria Dirgahayu, we combine technical excellence, skilled talent, and responsible business practices to deliver impactful solutions in construction, design, engineering workforce management, and business support.
            </p>
            <div className="hero-buttons animate-btn-entry">
              <a href="#/esg" className="btn btn-primary">
                ESG <ChevronRightIcon size={18} />
              </a>
              <a href="#/services" className="btn btn-secondary">
                Explore Our Services
              </a>
            </div>

          </div>

          <div className="hero-visual animate-radar-entry" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="radar-container energy-core-container">
              {/* Premium Luxury Handcrafted Energy Sphere */}
              <div className="premium-energy-sphere">
                {/* 3D Specular Highlight Overlay */}
                <div className="sphere-specular-highlight"></div>

                {/* 1. Deepest Layer: Ambient Glow (Breathes softly) */}
                <div className="sphere-interior-layer sphere-layer-glow">
                  <div className="sphere-ambient-glow"></div>
                </div>

                {/* 2. Middle Layer: Rotating Luminous Sun Image */}
                <div className="sphere-interior-layer sphere-layer-image">
                  <img src="/hero-sun.png" alt="Luminous Sun" className="sphere-rotating-image" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>

      {/* Client Marquee Section */}
      <section className="client-marquee-section">
        <div className="marquee-label">Reputable Organizations That Partner With Us</div>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {CLIENTS.concat(CLIENTS).map((client, idx) => (
              <div 
                key={idx} 
                className="marquee-item glass-spotlight spotlight-border tilt-card"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{ '--i': idx } as React.CSSProperties}
              >
                <div className="client-logo-wrapper">
                  <ClientLogo id={client.logoKey} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SunSeed Showcase Section */}
      <section className="sunseed-showcase-section reveal blueprint-grid-light">
        <div className="container sunseed-showcase-container-layout">
          
          {/* Header section split into Left and Right */}
          <div className="sunseed-showcase-header-grid">
            <div className="sunseed-showcase-branding">
              <div className="sunseed-title-wings"></div>
              <h2 className="showcase-brand-title">SunSeed</h2>
            </div>
            <div className="sunseed-showcase-slogan-desc">
              <h3 className="showcase-slogan">
                The Sun symbolizes many powerful qualities that we can adopt in our daily lives:
              </h3>
              <p className="showcase-desc">
                Consistency, Leadership, Selflessness, Strength &amp; Resilience, Positivity, and Growth &amp; Nurturing. We adopt these guiding values in our daily operations, technical execution, and community engagement.
              </p>
            </div>
          </div>

          {/* Central Mascot & Pill Buttons Panel (spans full-width below the header) */}
          <div className="sunseed-mascot-ecosystem">
              {/* Floating Holographic Leaf Elements */}
              <div className="floating-hologram-wrapper float-left-top">
                <svg viewBox="0 0 100 100" width="45" height="45" style={{ fill: '#22c55e', filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.5))', opacity: 0.5 }}>
                  <path d="M 50 10 C 25 35, 20 60, 50 85 C 80 60, 75 35, 50 10 Z" />
                </svg>
              </div>
              <div className="floating-hologram-wrapper float-right-bottom">
                <svg viewBox="0 0 100 100" width="40" height="40" style={{ fill: '#ffd875', filter: 'drop-shadow(0 0 8px rgba(255, 216, 117, 0.5))', opacity: 0.4 }}>
                  <path d="M 50 20 C 35 40, 30 60, 50 80 C 70 60, 65 40, 50 20 Z" />
                </svg>
              </div>

              {/* Full-width absolute SVG for connector paths */}
              <svg viewBox="0 0 1100 450" className="sunseed-connectors-svg">
                <defs>
                  <filter id="neonSunGlowHome" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Connector lines from pills to central core */}
                <g>
                  {/* Left Column connectors (Academy, Talent, Foundation) */}
                  <path d="M 240 75 C 370 75, 410 160, 460 160" className="connector-path active-gold" />
                  <path d="M 240 225 H 460" className="connector-path active-blue" />
                  <path d="M 240 375 C 370 375, 410 290, 460 290" className="connector-path active-green" />

                  {/* Right Column connectors (Nurturing, Potential, Sustainability) */}
                  <path d="M 860 75 C 730 75, 690 160, 640 160" className="connector-path active-yellow" />
                  <path d="M 860 225 H 640" className="connector-path active-red" />
                  <path d="M 860 375 C 730 375, 690 290, 640 290" className="connector-path active-emerald" />
                </g>

                {/* Pulsing endpoint contact indicator dots */}
                <circle cx="240" cy="75" r="3.5" fill="#ffad01" style={{ opacity: 1 }} className="active-pulse-dot-gold" />
                <circle cx="240" cy="225" r="3.5" fill="#38bdf8" style={{ opacity: 1 }} className="active-pulse-dot-blue" />
                <circle cx="240" cy="375" r="3.5" fill="#22c55e" style={{ opacity: 1 }} className="active-pulse-dot-green" />
                
                <circle cx="860" cy="75" r="3.5" fill="#ffd875" style={{ opacity: 1 }} className="active-pulse-dot-gold" />
                <circle cx="860" cy="225" r="3.5" fill="#f43f5e" style={{ opacity: 1 }} className="active-pulse-dot-red" />
                <circle cx="860" cy="375" r="3.5" fill="#10b981" style={{ opacity: 1 }} className="active-pulse-dot-green" />

                {/* Central Core Dial Contact Anchors */}
                <circle cx="460" cy="160" r="3.5" fill="#ffad01" style={{ opacity: 1 }} />
                <circle cx="460" cy="225" r="3.5" fill="#38bdf8" style={{ opacity: 1 }} />
                <circle cx="460" cy="290" r="3.5" fill="#22c55e" style={{ opacity: 1 }} />
                <circle cx="640" cy="160" r="3.5" fill="#ffd875" style={{ opacity: 1 }} />
                <circle cx="640" cy="225" r="3.5" fill="#f43f5e" style={{ opacity: 1 }} />
                <circle cx="640" cy="290" r="3.5" fill="#10b981" style={{ opacity: 1 }} />

                {/* Active traveling laser particle dots */}
                <circle r="4.5" fill="#ffad01" style={{ filter: 'drop-shadow(0 0 6px #ffad01)' }}>
                  <animateMotion dur="1.6s" repeatCount="indefinite" path="M 240 75 C 370 75, 410 160, 460 160" />
                </circle>
                <circle r="4.5" fill="#38bdf8" style={{ filter: 'drop-shadow(0 0 6px #38bdf8)' }}>
                  <animateMotion dur="1.6s" repeatCount="indefinite" path="M 240 225 H 460" />
                </circle>
                <circle r="4.5" fill="#22c55e" style={{ filter: 'drop-shadow(0 0 6px #22c55e)' }}>
                  <animateMotion dur="1.6s" repeatCount="indefinite" path="M 240 375 C 370 375, 410 290, 460 290" />
                </circle>
                <circle r="4.5" fill="#ffd875" style={{ filter: 'drop-shadow(0 0 6px #ffd875)' }}>
                  <animateMotion dur="1.6s" repeatCount="indefinite" path="M 860 75 C 730 75, 690 160, 640 160" />
                </circle>
                <circle r="4.5" fill="#f43f5e" style={{ filter: 'drop-shadow(0 0 6px #f43f5e)' }}>
                  <animateMotion dur="1.6s" repeatCount="indefinite" path="M 860 225 H 640" />
                </circle>
                <circle r="4.5" fill="#10b981" style={{ filter: 'drop-shadow(0 0 6px #10b981)' }}>
                  <animateMotion dur="1.6s" repeatCount="indefinite" path="M 860 375 C 730 375, 690 290, 640 290" />
                </circle>
              </svg>
              
              {/* Left Column Pills */}
              <div className="mascot-pills-col col-left">
                <div className="mascot-pill-card glass pill-academy">
                  <div className="pill-card-header">
                    <div className="pill-card-icon-wrapper" style={{ color: '#ffad01' }}>
                      <UserCheckIcon size={14} />
                    </div>
                    <h4 className="pill-card-title">Consistency</h4>
                  </div>
                  <div className="pill-card-subtitle">Discipline &amp; Reliability</div>
                  <p className="pill-card-desc">The Sun rises every day without fail, teaching us discipline and reliability.</p>
                </div>
                <div className="mascot-pill-card glass pill-talent">
                  <div className="pill-card-header">
                    <div className="pill-card-icon-wrapper" style={{ color: '#38bdf8' }}>
                      <TrophyIcon size={14} />
                    </div>
                    <h4 className="pill-card-title">Leadership</h4>
                  </div>
                  <div className="pill-card-subtitle">Illumination &amp; Guidance</div>
                  <p className="pill-card-desc">It illuminates and guides everything around it, reflecting the qualities of a true leader.</p>
                </div>
                <div className="mascot-pill-card glass pill-foundation">
                  <div className="pill-card-header">
                    <div className="pill-card-icon-wrapper" style={{ color: '#22c55e' }}>
                      <GlobeIcon size={14} />
                    </div>
                    <h4 className="pill-card-title">Selflessness</h4>
                  </div>
                  <div className="pill-card-subtitle">Giving &amp; Community Stewardship</div>
                  <p className="pill-card-desc">The Sun gives light, warmth, and energy without expecting anything in return.</p>
                </div>
              </div>

              {/* Center 3D Layered Sun Core with flat background rings */}
              <div className="mascot-wireframe-container">
                <div className="wireframe-solar-backdrop"></div>
                {/* Flat background rotating rings */}
                <svg viewBox="0 0 400 400" className="wireframe-sun-svg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                  <circle cx="200" cy="200" r="95" stroke="rgba(184, 134, 11, 0.15)" strokeWidth="1.2" strokeDasharray="3 4" fill="none" className="sunseed-ring-slow" />
                  <circle cx="200" cy="200" r="125" stroke="rgba(56, 189, 248, 0.12)" strokeWidth="1.2" strokeDasharray="5 7" fill="none" className="sunseed-ring-reverse" />
                  <circle cx="200" cy="200" r="65" stroke="rgba(184, 134, 11, 0.08)" strokeWidth="0.75" fill="none" />
                </svg>

                {/* 3D Extruded Sun Core */}
                <div className="sun-3d-container">
                  <div className="sun-3d-shield">
                    {[...Array(8)].map((_, i) => {
                      const isFront = i === 7;
                      return (
                        <svg
                          key={`sun-layer-home-${i}`}
                          viewBox="0 0 400 400"
                          className={`sun-3d-layer-svg ${isFront ? 'sun-layer-front' : 'sun-layer-edge'}`}
                          style={{ '--layer-index': i } as React.CSSProperties}
                        >
                          {i === 0 && (
                            <defs>
                              <filter id="neonSunGlowInner" x="-30%" y="-30%" width="160%" height="160%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                              </filter>
                            </defs>
                          )}
                          <circle
                            cx="200"
                            cy="200"
                            r="45"
                            fill={isFront ? "rgba(255, 173, 1, 0.08)" : "rgba(184, 134, 11, 0.12)"}
                            stroke={isFront ? "var(--secondary)" : "rgba(184, 134, 11, 0.45)"}
                            strokeWidth="1.2"
                          />
                          <g className="sunseed-corona-rays">
                            {[...Array(16)].map((_, idx) => {
                              const angle = (idx * 22.5 * Math.PI) / 180;
                              const rStart = 45;
                              const rEnd = 60;
                              const x1 = 200 + rStart * Math.cos(angle);
                              const y1 = 200 + rStart * Math.sin(angle);
                              const x2 = 200 + rEnd * Math.cos(angle);
                              const y2 = 200 + rEnd * Math.sin(angle);
                              return (
                                <line
                                  key={`home-ray-${i}-${idx}`}
                                  x1={x1}
                                  y1={y1}
                                  x2={x2}
                                  y2={y2}
                                  stroke={isFront ? "var(--secondary)" : "rgba(184, 134, 11, 0.45)"}
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  opacity={isFront ? 0.95 : 0.55}
                                  style={isFront ? { filter: 'drop-shadow(0 0 4px var(--secondary))' } : undefined}
                                  className="corona-ray"
                                />
                              );
                            })}
                          </g>
                          <g transform="translate(180, 175) scale(0.85)">
                            <path
                              d="M 23 55 C 23 40, 20 28, 23 20"
                              stroke={isFront ? "#22c55e" : "#166534"}
                              strokeWidth="3.8"
                              strokeLinecap="round"
                              fill="none"
                            />
                            <path
                              d="M 21 28 C 5 20, 3 5, 20 18 Z"
                              fill={isFront ? "#22c55e" : "#14532d"}
                              opacity={isFront ? 0.95 : 0.6}
                            />
                            <path
                              d="M 23 24 C 38 14, 40 0, 25 15 Z"
                              fill={isFront ? "#22c55e" : "#14532d"}
                              opacity={isFront ? 0.95 : 0.6}
                            />
                          </g>
                        </svg>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column Pills */}
              <div className="mascot-pills-col col-right">
                <div className="mascot-pill-card glass pill-nurturing">
                  <div className="pill-card-header">
                    <div className="pill-card-icon-wrapper" style={{ color: '#ffd875' }}>
                      <ShieldIcon size={14} />
                    </div>
                    <h4 className="pill-card-title">Strength &amp; Resilience</h4>
                  </div>
                  <div className="pill-card-subtitle">Strong Through Obstacles</div>
                  <p className="pill-card-desc">It continues to shine despite storms, clouds, or obstacles, reminding us to stay strong through challenges.</p>
                </div>
                <div className="mascot-pill-card glass pill-potential">
                  <div className="pill-card-header">
                    <div className="pill-card-icon-wrapper" style={{ color: '#f43f5e' }}>
                      <SunIcon size={14} />
                    </div>
                    <h4 className="pill-card-title">Positivity</h4>
                  </div>
                  <div className="pill-card-subtitle">Brightness &amp; Hope</div>
                  <p className="pill-card-desc">Sunlight brings brightness and hope, encouraging an optimistic outlook on life.</p>
                </div>
                <div className="mascot-pill-card glass pill-sustainability">
                  <div className="pill-card-header">
                    <div className="pill-card-icon-wrapper" style={{ color: '#10b981' }}>
                      <LeafIcon size={14} />
                    </div>
                    <h4 className="pill-card-title">Growth &amp; Nurturing</h4>
                  </div>
                  <div className="pill-card-subtitle">Uplifting Human Capital</div>
                  <p className="pill-card-desc">Just as the Sun helps plants grow, we can support and uplift others around us.</p>
                </div>
              </div>
            </div>

        </div>
      </section>

      {/* Page Navigation Highlights Section (Premium Card Directory) */}
      <section className="section reveal">
        <div className="container">
          <div className="section-header blueprint-panel brackets-tl-br">
            <h2 className="section-title">Industrial Project Control Console</h2>
            <p className="section-subtitle">
              Navigate between the structural divisions of Suria Dirgahayu. Review compliance credentials, model project roadmap timelines, or establish a consultation terminal.
            </p>
          </div>

          <div className="grid-cols-3">
            {/* Services Highlight Card */}
            <div 
              className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ '--i': 0, display: 'flex', flexDirection: 'column' } as React.CSSProperties}
            >
              <div style={{ height: '160px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--border-color)', position: 'relative' }}>
                <img src="/img-civil.jpg" alt="Operational Services" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="value-icon-wrap" style={{ position: 'absolute', bottom: '10px', left: '10px', margin: 0, width: '40px', height: '40px' }}>
                  <WrenchIcon size={20} />
                </div>
              </div>
              <h3 className="value-title">3 Core Divisions</h3>
              <p className="value-desc" style={{ marginBottom: '2rem', flex: 1 }}>
                Analyze our mechanical MRO, ST-approved electrical engineering, modular scaffolding tagging, and controlled demolition workflows.
              </p>
              <a href="#/services" className="btn btn-secondary" style={{ width: '100%' }}>
                Operational Services
              </a>
            </div>

            {/* ESG Commitments Highlight Card */}
            <div 
              className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ '--i': 1, display: 'flex', flexDirection: 'column' } as React.CSSProperties}
            >
              <div style={{ height: '160px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--border-color)', position: 'relative' }}>
                <img src="/img-welding.jpg" alt="ESG Commitments" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="value-icon-wrap" style={{ position: 'absolute', bottom: '10px', left: '10px', margin: 0, width: '40px', height: '40px' }}>
                  <GlobeIcon size={20} />
                </div>
              </div>
              <h3 className="value-title">ESG Commitments</h3>
              <p className="value-desc" style={{ marginBottom: '2rem', flex: 1 }}>
                Explore our Environmental, Social, and Governance framework detailing our safety standards, clean operations, and national licensing compliance.
              </p>
              <a href="#/esg" className="btn btn-primary" style={{ width: '100%' }}>
                Explore ESG Pillars
              </a>
            </div>

            {/* About/Credentials Highlight Card */}
            <div 
              className="value-card glass-spotlight spotlight-border tilt-card border-beam-card brackets-tl-br"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ '--i': 2, display: 'flex', flexDirection: 'column' } as React.CSSProperties}
            >
              <div style={{ height: '160px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--border-color)', position: 'relative' }}>
                <img src="/img-scaffolding.jpg" alt="Corporate Credentials" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="value-icon-wrap" style={{ position: 'absolute', bottom: '10px', left: '10px', margin: 0, width: '40px', height: '40px' }}>
                  <UsersIcon size={20} />
                </div>
              </div>
              <h3 className="value-title">Corporate Quality & HSE</h3>
              <p className="value-desc" style={{ marginBottom: '2rem', flex: 1 }}>
                Inspect our Cidb G7 certification registers, Energy Commission ST wireman credentials, and historical project evolution timelines.
              </p>
              <a href="#/about" className="btn btn-secondary" style={{ width: '100%' }}>
                Corporate Credentials
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Promo Section */}
      <section className="careers-promo-section blueprint-grid-light reveal">
        <div className="container">
          <div className="careers-grid">
            
            {/* Left Card: Team Image Visualizer with border-beam and tilt effect */}
            <div 
              className="careers-img-wrapper border-beam-card tilt-card"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ '--i': 0 } as React.CSSProperties}
            >
              <img src="/img-careers.png" alt="Suria Dirgahayu Team Collaboration" className="careers-img" />
            </div>

            {/* Right Card: Content Panel */}
            <div className="careers-content-panel blueprint-panel brackets-tl-br">
              <div className="badge careers-title-badge animate-glow">
                <span className="badge-dot"></span>
                JOIN OUR ENGINEERING ELITE
              </div>
              <h2 className="careers-heading">
                Build Your Career with <br />
                <span className="gradient-text">Suria Dirgahayu</span>
              </h2>
              <p className="careers-desc">
                At Suria Dirgahayu, we believe human potential is our most vital asset. We cultivate a culture of safety, technical mastery, and shared growth—empowering ST-certified wiremen, mechanical specialists, and renewable energy innovators to lead major clean energy and MRO operations across Malaysia.
              </p>

              {/* Perks List */}
              <div className="careers-perks-list">
                <div className="careers-perk-item">
                  <div className="careers-perk-icon">
                    <TrophyIcon size={18} />
                  </div>
                  <div className="careers-perk-meta">
                    <h4 className="careers-perk-title">ST Competency Pathways</h4>
                    <p className="careers-perk-desc">Direct corporate support for professional Wireman licensing, DOSH rigging training, and CIDB certifications.</p>
                  </div>
                </div>

                <div className="careers-perk-item">
                  <div className="careers-perk-icon">
                    <ShieldIcon size={18} />
                  </div>
                  <div className="careers-perk-meta">
                    <h4 className="careers-perk-title">Zero-Harm Safety Standards</h4>
                    <p className="careers-perk-desc">Class-A safety execution, standard medical audits, and top-tier accommodation standards for industrial sites.</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a href="#/contact?subject=careers" className="btn btn-primary nav-cta-btn">
                Explore Open Careers <ChevronRightIcon size={18} style={{ marginLeft: '4px' }} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* News & Blogs Section */}
      <section className="blog-section blueprint-grid-light reveal">
        <div className="container">
          <div className="section-header blueprint-panel brackets-tl-br" style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div className="badge animate-glow" style={{ marginBottom: '0.75rem' }}>
                <span className="badge-dot"></span>
                INSIGHTS & LATEST NEWS
              </div>
              <h2 className="section-title" style={{ fontSize: '2.5rem' }}>News and Blogs</h2>
              <p className="section-subtitle" style={{ margin: '0.5rem 0 0 0', maxWidth: '700px' }}>
                Stay updated with our research papers, engineering compliance diagnostics, and corporate social responsibility (CSR) microgrid benchmarks.
              </p>
            </div>
            <div>
              <a href="#/journey" className="btn btn-secondary" style={{ padding: '0.75rem 1.75rem', fontSize: '0.88rem' }}>
                More Insights
              </a>
            </div>
          </div>

          <div className="blog-grid">
            {BLOG_POSTS.map((post, idx) => (
              <div
                key={post.id}
                className="blog-card border-beam-card tilt-card"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                onClick={() => setActiveBlog(post)}
                style={{ '--i': idx } as React.CSSProperties}
              >
                <div className="blog-card-img-wrap">
                  <img src={post.image} alt={post.title} className="blog-card-img" />
                </div>
                <div className="blog-card-content">
                  <span className="blog-card-tag">{post.tag}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-desc">{post.desc}</p>
                  <span className="blog-card-action">
                    Read Insight <ChevronRightIcon size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classy Modal Reader Overlay */}
      {activeBlog && createPortal(
        <div className="blog-modal-overlay" onClick={() => setActiveBlog(null)}>
          <div className="blog-modal-container blueprint-panel brackets-tl-br" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal-close-btn" onClick={() => setActiveBlog(null)} aria-label="Close Modal">
              <CloseIcon size={18} />
            </button>
            <div className="blog-modal-header">
              <span className="blog-modal-tag">{activeBlog.tag}</span>
              <h2 className="blog-modal-title">{activeBlog.title}</h2>
              <div className="blog-modal-meta">
                <span className="blog-meta-item">
                  <UsersIcon size={14} className="blog-meta-icon" />
                  By {activeBlog.author}
                </span>
                <span className="blog-meta-divider">•</span>
                <span className="blog-meta-item">
                  <GlobeIcon size={14} className="blog-meta-icon" />
                  {activeBlog.date}
                </span>
              </div>
            </div>
            <div className="blog-modal-body">
              <div className="blog-modal-image-wrap">
                <img src={activeBlog.image} alt={activeBlog.title} className="blog-modal-img" />
              </div>
              {activeBlog.content}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
