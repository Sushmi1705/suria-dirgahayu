import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ChevronRightIcon,
  WrenchIcon,
  UsersIcon,
  GlobeIcon,
  ShieldIcon,
  TrophyIcon,
  CloseIcon
} from '../components/Icons';
import { CLIENTS } from '../constants/data';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';
import ClientLogo from '../components/ClientLogo';

const SUNSEED_PILL_DETAILS: Record<string, { title: string; subtitle: string; desc: string; iconColor: string }> = {
  academy: {
    title: 'SunSeed Academy',
    subtitle: 'Technical Training & Vocational Skills',
    desc: 'Empowering local workforces with ST wireman licenses, scaffolding rigging standards, OSHA safety tag compliance, and mechanical assembly courses.',
    iconColor: '#ffad01'
  },
  talent: {
    title: 'SunSeed Talent Program',
    subtitle: 'Ethical Resource Stewardship',
    desc: 'Managing workforce welfare, medical audits, safe housing standards, and competitive transparent wage scales for heavy industrial projects.',
    iconColor: '#38bdf8'
  },
  foundation: {
    title: 'SunSeed Foundation',
    subtitle: 'Renewable Community Electrification',
    desc: 'Donating microgrids and solar setups to rural boarding schools, granting student technical scholarships, and providing local family support.',
    iconColor: '#22c55e'
  },
  nurturing: {
    title: 'Nurturing Growth',
    subtitle: 'Ecosystem Vitality & Support',
    desc: 'Providing industrial tools, guidance, safety tags, and structural guidance before demanding high-performance output.',
    iconColor: '#ffd875'
  },
  potential: {
    title: 'Latent Potential',
    subtitle: 'Human & Material Assets',
    desc: 'Unlocking hidden mechanical talent and harvesting abundant solar resources to drive national industrial self-sufficiency.',
    iconColor: '#f43f5e'
  },
  sustainability: {
    title: 'Sustainable Future',
    subtitle: 'Zero-Harm Engineering Framework',
    desc: 'Minimizing environmental footprints via control-demolition protocols, low-noise scaffolding structures, and energy-conserving MRO.',
    iconColor: '#10b981'
  }
};

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
  const activeChoice: string = 'industrial';
  const [activePill, setActivePill] = useState<string>('academy');
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
                Explore 9 Core Services
              </a>
            </div>
          </div>

          <div className="hero-visual animate-radar-entry" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="radar-container energy-core-container">
              <div className="energy-core-glow" style={{ background: activeChoice === 'sustainability' ? 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, rgba(223, 161, 22, 0.06) 50%, transparent 70%)' : activeChoice === 'infrastructure' ? 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(223, 161, 22, 0.06) 50%, transparent 70%)' : 'radial-gradient(circle, rgba(223, 161, 22, 0.12) 0%, rgba(1, 107, 173, 0.06) 50%, transparent 70%)' }}></div>
              
              {/* 3D Solar Butterfly Mascot */}
              <div className="solar-butterfly">
                <div className="butterfly-body-group">
                  {/* Left Wing */}
                  <div className="butterfly-wing wing-left">
                    <svg viewBox="0 0 100 100">
                      <path d="M100 50 C80 20, 20 20, 10 50 C20 70, 70 80, 100 50 Z" fill="url(#butterflyWingGrad)" stroke="var(--secondary)" strokeWidth="1" />
                      <line x1="100" y1="50" x2="30" y2="30" stroke="rgba(255,255,255,0.45)" strokeWidth="0.6" />
                      <line x1="100" y1="50" x2="20" y2="45" stroke="rgba(255,255,255,0.45)" strokeWidth="0.6" />
                      <line x1="100" y1="50" x2="35" y2="65" stroke="rgba(255,255,255,0.45)" strokeWidth="0.6" />
                      <circle cx="30" cy="40" r="3" fill="#ffd875" opacity="0.85" />
                    </svg>
                  </div>
                  {/* Body */}
                  <div className="butterfly-body">
                    <div className="butterfly-head"></div>
                    <div className="butterfly-torso"></div>
                    <div className="butterfly-tail"></div>
                  </div>
                  {/* Right Wing */}
                  <div className="butterfly-wing wing-right">
                    <svg viewBox="0 0 100 100">
                      <path d="M0 50 C20 20, 80 20, 90 50 C80 70, 30 80, 0 50 Z" fill="url(#butterflyWingGrad)" stroke="var(--secondary)" strokeWidth="1" />
                      <line x1="0" y1="50" x2="70" y2="30" stroke="rgba(255,255,255,0.45)" strokeWidth="0.6" />
                      <line x1="0" y1="50" x2="80" y2="45" stroke="rgba(255,255,255,0.45)" strokeWidth="0.6" />
                      <line x1="0" y1="50" x2="65" y2="65" stroke="rgba(255,255,255,0.45)" strokeWidth="0.6" />
                      <circle cx="70" cy="40" r="3" fill="#ffd875" opacity="0.85" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Dynamic Glitter/Sparkle Particles */}
              <div className="logo-sparkles-container">
                {[...Array(24)].map((_, i) => {
                  const top = `${12 + (i * 7.7) % 76}%`;
                  const left = `${12 + (i * 11.3) % 76}%`;
                  const scale = 0.35 + ((i * 0.13) % 0.7);
                  const duration = 4 + (i % 5); 
                  const delay = -(i * 0.4); 
                  const rotation = i * 15;
                  const type = i % 2;
                  
                  return (
                    <div 
                      key={`sparkle-${i}`}
                      className={`logo-sparkle sparkle-type-${type} active-glow-${activeChoice}`}
                      style={{
                        position: 'absolute',
                        top,
                        left,
                        transform: `scale(${scale}) rotate(${rotation}deg)`,
                        animation: `sparkle-float ${duration}s ease-in-out infinite`,
                        animationDelay: `${delay}s`,
                        pointerEvents: 'none',
                        zIndex: i % 3 === 0 ? 12 : 1, // Layered in front of and behind logo
                      }}
                    >
                      {type === 0 ? (
                        <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px' }}>
                          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="currentColor" />
                        </svg>
                      ) : (
                        <div style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: 'currentColor',
                          boxShadow: '0 0 8px currentColor, 0 0 16px currentColor',
                        }} />
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Central Dynamic Monogram centerpiece */}
              <div className="sd-monogram-overlay">
                <div className="sd-monogram-shield">
                  <div className="sd-monogram-glow"></div>
                  
                  {/* Shared Gradients & Filters definitions */}
                  <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden='true'>
                    <defs>
                      <linearGradient id="monogramPrimaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--text-main)" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="var(--primary-light, #38bdf8)" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.45" />
                      </linearGradient>
                      <linearGradient id="monogramPrimaryStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                        <stop offset="30%" stopColor="var(--primary-light, #38bdf8)" stopOpacity="0.8" />
                        <stop offset="70%" stopColor="var(--text-main)" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="monogramGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.95" />
                        <stop offset="50%" stopColor="#ffd875" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="var(--secondary-hover)" stopOpacity="0.5" />
                      </linearGradient>
                      <linearGradient id="monogramGoldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                        <stop offset="30%" stopColor="#ffd875" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.3" />
                      </linearGradient>
                                            <linearGradient id="butterflyWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.85" />
                        <stop offset="50%" stopColor="#ffd875" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="rgba(255, 173, 1, 0.2)" stopOpacity="0.25" />
                      </linearGradient>
                      <filter id="monogramGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                  </svg>
                  
                  {/* Layer 1: Navy/Text 'S' Shape (stacked for 3D extrusion) */}
                  {[...Array(8)].map((_, i) => {
                    const isFront = i === 7;
                    return (
                      <svg 
                        key={`s-layer-${i}`} 
                        className={`sd-monogram-svg sd-monogram-part-s ${isFront ? 'sd-monogram-front' : 'sd-monogram-edge'}`} 
                        viewBox="95 0 550 370" 
                        fill="none"
                        style={{ '--layer-index': i } as React.CSSProperties}
                      >
                        <path d="M196.864 0.597837C197.718 0.597251 198.573 0.596665 199.453 0.596062C201.806 0.595132 204.159 0.597257 206.512 0.600709C209.056 0.603683 211.6 0.602666 214.144 0.602147C218.546 0.601788 222.948 0.60393 227.35 0.607795C233.714 0.613379 240.079 0.615153 246.443 0.616014C256.77 0.617512 267.097 0.62207 277.424 0.628562C287.453 0.63486 297.482 0.63971 307.511 0.642622C308.129 0.642802 308.748 0.642982 309.385 0.643167C312.489 0.644062 315.593 0.644929 318.697 0.645781C344.427 0.652882 370.157 0.664953 395.888 0.680282C394.653 3.32761 392.952 5.25972 390.96 7.36479C390.27 8.10533 389.581 8.84627 388.892 9.58761C388.56 9.94443 388.227 10.3013 387.884 10.6689C385.265 13.4945 382.774 16.4335 380.272 19.3626C379.564 20.1911 378.856 21.0195 378.148 21.8479C377.791 22.2652 377.435 22.6825 377.068 23.1125C374.991 25.5375 372.885 27.9285 370.735 30.2892C367.979 33.3219 365.382 36.4675 362.808 39.6545C361.608 41.1301 361.608 41.1301 360.922 41.8157C358.754 41.8854 356.601 41.9097 354.433 41.9058C353.743 41.9072 353.053 41.9087 352.342 41.9102C350.011 41.9143 347.679 41.9136 345.348 41.913C343.684 41.9151 342.019 41.9175 340.355 41.9202C336.76 41.9256 333.165 41.9292 329.57 41.9314C323.879 41.9351 318.188 41.9467 312.497 41.9597C310.55 41.9641 308.602 41.9684 306.655 41.9727C305.924 41.9744 305.924 41.9744 305.179 41.976C299.632 41.9883 294.085 41.9994 288.537 42.0097C287.776 42.0111 287.776 42.0111 287 42.0126C278.803 42.0276 270.607 42.035 262.41 42.0402C253.987 42.0457 245.565 42.0617 237.142 42.0867C231.952 42.1018 226.763 42.1085 221.574 42.1042C217.583 42.1018 213.593 42.1137 209.602 42.1307C207.974 42.1355 206.346 42.1356 204.718 42.1306C193.793 42.1006 183.388 42.4838 173.542 47.8147C173.09 48.0512 172.638 48.2878 172.173 48.5316C158.119 56.0768 147.831 67.7904 142.904 82.9512C142.695 83.5469 142.486 84.1425 142.27 84.7562C138.037 96.9121 138.385 113.695 143.59 125.458C143.811 126.078 144.032 126.699 144.26 127.338C146.835 134.528 151.075 140.871 155.931 146.711C156.456 147.373 156.981 148.035 157.521 148.717C166.915 159.934 182.453 166.997 196.799 168.512C199.301 168.723 201.788 168.748 204.297 168.745C204.853 168.747 205.409 168.749 205.982 168.751C207.827 168.756 209.673 168.757 211.518 168.758C212.849 168.761 214.179 168.765 215.51 168.769C218.369 168.776 221.227 168.782 224.085 168.787C228.617 168.794 233.148 168.808 237.679 168.823C250.562 168.865 263.445 168.902 276.329 168.925C283.45 168.938 290.571 168.958 297.692 168.986C301.452 169 305.213 169.011 308.973 169.012C312.517 169.014 316.061 169.025 319.605 169.043C320.896 169.047 322.186 169.049 323.476 169.047C334.414 169.03 345.382 169.835 355.78 173.492C356.37 173.694 356.959 173.897 357.566 174.105C366.925 177.461 375.841 182.233 383.547 188.532C383.924 188.838 384.301 189.144 384.689 189.459C399.577 201.606 410.059 216.556 415.084 235.152C415.294 235.884 415.505 236.616 415.721 237.37C417.376 243.2 417.931 248.532 417.945 254.583C417.95 255.361 417.955 256.138 417.959 256.939C417.969 258.624 417.977 260.308 417.984 261.993C417.995 264.658 418.011 267.323 418.028 269.988C418.077 277.565 418.118 285.141 418.153 292.718C418.175 297.355 418.203 301.991 418.236 306.628C418.247 308.395 418.255 310.162 418.261 311.93C418.269 314.398 418.286 316.866 418.304 319.334C418.305 320.431 418.305 320.431 418.306 321.55C418.312 322.224 418.319 322.898 418.326 323.592C418.33 324.466 418.33 324.466 418.335 325.359C418.54 327.279 419.016 328.725 419.883 330.45C421.558 331.348 421.558 331.348 423.311 331.821C423.764 332.047 424.216 332.273 424.682 332.506C425.684 332.577 426.69 332.605 427.694 332.612C428.645 332.621 428.645 332.621 429.615 332.63C430.662 332.634 430.662 332.634 431.73 332.638C432.464 332.644 433.197 332.65 433.954 332.655C436.398 332.673 438.842 332.684 441.286 332.694C442.125 332.697 442.964 332.701 443.828 332.705C447.825 332.721 451.822 332.734 455.818 332.743C459.938 332.752 464.058 332.771 468.178 332.803C472.616 332.837 477.054 332.853 481.492 332.858C483.169 332.863 484.846 332.873 486.523 332.89C510.927 333.118 534.197 327.332 553.573 311.939C554.463 311.257 554.463 311.257 555.37 310.562C568.147 300.511 577.933 288.234 585.802 274.075C586.376 273.049 586.97 272.034 587.569 271.023C589.456 267.809 590.775 264.551 591.991 261.031C592.613 259.26 593.302 257.538 594.023 255.806C596.972 248.462 598.925 240.9 600.194 233.096C600.362 232.134 600.362 232.134 600.534 231.153C601.843 222.759 601.777 214.397 601.771 205.918C601.774 204.289 601.777 202.659 601.78 201.03C601.785 197.628 601.785 194.226 601.781 190.824C601.777 186.499 601.789 182.174 601.805 177.85C601.815 174.488 601.815 171.125 601.813 167.763C601.814 166.17 601.817 164.578 601.824 162.985C601.871 150.755 600.962 139.155 597.58 127.343C597.401 126.71 597.222 126.076 597.038 125.423C593.266 112.38 587.344 99.1763 578.94 88.4359C578.564 87.9304 578.187 87.4249 577.799 86.9041C574.75 82.8654 571.426 79.1044 567.971 75.4097C567.137 74.5082 567.137 74.5082 566.286 73.5886C548.95 55.4982 523.239 42.949 497.983 42.3315C495.344 42.2939 492.705 42.286 490.066 42.2827C488.876 42.2763 487.686 42.2694 486.495 42.2619C483.292 42.2433 480.088 42.2328 476.885 42.2239C473.527 42.2131 470.169 42.1947 466.811 42.1772C460.464 42.1452 454.117 42.12 447.771 42.0972C440.54 42.0709 433.309 42.0371 426.078 42.0026C411.216 41.9319 396.353 41.8707 381.49 41.8157C382.133 40.9469 382.778 40.0793 383.423 39.2121C383.782 38.7288 384.14 38.2455 384.51 37.7476C386.081 35.7121 387.815 33.8615 389.589 32.0032C392.691 28.7017 395.596 25.301 398.434 21.7676C400.781 18.936 403.282 16.2556 405.78 13.5592C407.248 11.9693 408.691 10.3658 410.114 8.73598C410.464 8.34257 410.815 7.94917 411.176 7.54384C412.358 6.19331 412.358 6.19331 413.318 4.73719C414.941 2.5095 416.21 0.942625 418.921 0.178534C421.107 -0.00946243 423.234 -0.0218686 425.428 0.0249872C426.253 0.0208825 427.077 0.0167778 427.927 0.0125487C430.182 0.00703758 432.435 0.025941 434.69 0.0564314C437.068 0.0832583 439.446 0.0802566 441.824 0.0810911C445.829 0.0867927 449.833 0.113208 453.837 0.153535C458.424 0.19963 463.011 0.220443 467.598 0.225505C472.524 0.230976 477.451 0.252186 482.377 0.279526C483.773 0.286503 485.169 0.291062 486.565 0.295177C530.126 0.47857 566.264 15.9601 597.323 46.4006C606.374 55.6689 613.631 66.2684 620.076 77.4665C620.345 77.9298 620.614 78.3931 620.892 78.8705C630.37 95.3468 636.589 113.756 639.637 132.484C639.839 133.671 640.06 134.856 640.308 136.034C641.887 144.347 641.541 152.817 641.535 161.242C641.538 162.997 641.541 164.751 641.544 166.506C641.549 170.174 641.549 173.843 641.545 177.511C641.541 181.716 641.55 185.921 641.564 190.125C641.578 194.21 641.58 198.295 641.578 202.38C641.578 204.099 641.581 205.818 641.588 207.537C641.622 216.891 641.346 225.882 639.548 235.077C639.137 237.233 638.787 239.399 638.432 241.564C634.252 266.616 621.574 291.635 605.678 311.253C605.358 311.651 605.038 312.05 604.708 312.46C596.354 322.774 586.959 332.258 576.198 340.048C575.483 340.572 574.768 341.096 574.031 341.636C551.601 357.618 525.254 368.268 497.46 368.257C496.275 368.26 496.275 368.26 495.066 368.264C492.468 368.27 489.87 368.271 487.272 368.272C485.915 368.274 484.559 368.275 483.203 368.277C478.941 368.283 474.68 368.285 470.419 368.284C466.043 368.284 461.668 368.291 457.293 368.302C453.518 368.311 449.743 368.314 445.968 368.314C443.721 368.314 441.475 368.316 439.229 368.323C436.719 368.33 434.209 368.328 431.699 368.324C430.969 368.327 430.239 368.331 429.487 368.335C415.769 368.278 403.383 364.266 393.317 354.7C387.124 348.174 382.785 339.603 382.771 330.468C382.767 329.463 382.767 329.463 382.763 328.439C382.763 327.712 382.764 326.985 382.764 326.236C382.76 325.078 382.76 325.078 382.757 323.897C382.752 322.221 382.748 320.544 382.746 318.868C382.741 316.207 382.73 313.545 382.717 310.884C382.713 309.969 382.709 309.055 382.704 308.141C382.701 307.454 382.701 307.454 382.698 306.753C382.669 300.563 382.646 294.372 382.638 288.181C382.631 283.549 382.611 278.918 382.582 274.286C382.574 272.529 382.57 270.772 382.572 269.015C382.579 257.578 382.435 246.651 376.905 236.309C376.672 235.86 376.439 235.41 376.198 234.946C369.902 223.245 359.796 215.494 347.338 211.18C341.745 209.615 335.799 210.017 330.046 210.063C328.612 210.061 327.178 210.058 325.745 210.054C322.673 210.048 319.602 210.053 316.531 210.066C311.659 210.086 306.787 210.08 301.914 210.071C292.438 210.057 282.962 210.068 273.486 210.082C261.451 210.099 249.415 210.108 237.379 210.089C232.552 210.082 227.726 210.089 222.899 210.106C219.874 210.115 216.848 210.112 213.823 210.106C212.439 210.106 211.055 210.11 209.671 210.119C190.05 210.248 171.792 206.23 154.56 196.759C153.845 196.38 153.13 196.001 152.393 195.61C128.579 182.464 112.065 159.692 103.74 134.199C103.302 132.659 102.874 131.116 102.455 129.571C102.198 128.734 101.942 127.898 101.678 127.035C99.5206 119.25 99.4352 111.453 99.4123 103.433C99.4081 102.882 99.404 102.331 99.3997 101.763C99.2624 73.9878 110.577 48.1301 129.921 28.4039C143.139 15.2616 157.978 7.74691 175.813 2.73706C176.282 2.60173 176.751 2.4664 177.234 2.32697C183.667 0.576213 190.241 0.581057 196.864 0.597837Z" fill={isFront ? "url(#monogramPrimaryGrad)" : "#0c1836"} stroke={isFront ? "url(#monogramPrimaryStroke)" : "none"} strokeWidth={isFront ? "1.8" : "0"} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M212.737 99.1435C213.833 99.1412 214.93 99.1379 216.027 99.1338C219.027 99.1253 222.027 99.1295 225.028 99.1358C228.269 99.1405 231.51 99.1333 234.751 99.1277C241.095 99.1185 247.44 99.1205 253.784 99.1264C258.943 99.1311 264.101 99.1317 269.26 99.1295C269.994 99.1292 270.729 99.1289 271.486 99.1285C272.979 99.1279 274.472 99.1272 275.965 99.1265C289.958 99.1207 303.951 99.1274 317.944 99.1385C329.941 99.1476 341.938 99.1461 353.935 99.1366C367.876 99.1255 381.817 99.1212 395.758 99.1275C397.246 99.1282 398.733 99.1288 400.221 99.1295C401.319 99.13 401.319 99.13 402.439 99.1304C407.588 99.1322 412.737 99.1292 417.886 99.1244C424.166 99.1186 430.445 99.1202 436.725 99.1311C439.927 99.1365 443.128 99.1387 446.33 99.1319C449.265 99.1257 452.201 99.1291 455.136 99.14C456.193 99.1423 457.251 99.1412 458.308 99.1362C473.679 99.0688 487.984 103.794 499.018 114.721C499.603 115.323 500.188 115.924 500.791 116.544C501.499 117.267 501.499 117.267 502.221 118.004C512.367 128.97 514.826 142.444 514.769 156.852C514.772 158.055 514.775 159.258 514.78 160.46C514.789 163.701 514.786 166.942 514.779 170.183C514.774 173.59 514.779 176.997 514.782 180.404C514.786 186.123 514.781 191.842 514.771 197.561C514.76 204.154 514.763 210.747 514.775 217.34C514.784 223.021 514.785 228.702 514.78 234.384C514.777 237.768 514.776 241.152 514.783 244.536C514.789 247.719 514.785 250.902 514.773 254.084C514.77 255.246 514.771 256.407 514.776 257.569C514.837 274.606 509.467 289.424 497.363 301.654C490.66 307.844 482.814 312.164 474.053 314.68C473.458 314.855 472.862 315.031 472.249 315.211C467.199 316.596 462.595 317.015 457.374 316.938C456.695 316.936 456.016 316.934 455.316 316.932C452.82 316.921 450.325 316.892 447.829 316.866C442.23 316.823 436.63 316.781 430.861 316.737C430.861 304.52 430.861 292.303 430.861 279.715C444.787 279.544 444.787 279.544 449.134 279.511C460.27 279.387 460.27 279.387 469.897 274.23C475.111 268.131 475.137 260.244 475.083 252.618C475.085 251.574 475.089 250.53 475.094 249.487C475.103 246.676 475.096 243.866 475.084 241.056C475.075 238.102 475.079 235.148 475.082 232.194C475.084 227.236 475.074 222.279 475.058 217.322C475.04 211.605 475.039 205.888 475.047 200.171C475.054 194.651 475.05 189.131 475.04 183.61C475.037 181.27 475.037 178.93 475.04 176.589C475.043 173.831 475.036 171.072 475.021 168.314C475.018 167.306 475.017 166.298 475.021 165.291C475.124 155.056 475.124 155.056 470.398 146.277C464.316 141.294 458.48 140.636 450.904 140.724C449.822 140.721 448.74 140.716 447.657 140.71C444.7 140.699 441.743 140.712 438.786 140.731C435.59 140.746 432.395 140.737 429.199 140.731C423.666 140.723 418.134 140.731 412.602 140.748C404.596 140.772 396.59 140.771 388.585 140.764C375.586 140.752 362.587 140.756 349.588 140.773C348.422 140.775 348.422 140.775 347.233 140.776C344.083 140.78 340.933 140.784 337.783 140.788C329.11 140.8 320.436 140.808 311.762 140.814C310.985 140.815 310.208 140.815 309.408 140.816C296.455 140.825 283.502 140.824 270.549 140.815C262.563 140.811 254.577 140.817 246.592 140.837C241.122 140.85 235.652 140.853 230.181 140.849C227.026 140.847 223.87 140.85 220.715 140.865C217.825 140.878 214.935 140.879 212.045 140.87C211.001 140.869 209.957 140.872 208.913 140.881C201.168 140.943 195.228 139.935 189.439 134.482C185.223 129.586 183.408 124.429 183.732 117.996C184.745 111.144 187.967 106.705 193.245 102.442C199.401 99.0378 205.89 99.1112 212.737 99.1435Z" fill={isFront ? "url(#monogramPrimaryGrad)" : "#0c1836"} stroke={isFront ? "url(#monogramPrimaryStroke)" : "none"} strokeWidth={isFront ? "1.8" : "0"} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M322.532 259.834C322.628 269.388 322.7 278.942 322.745 288.496C322.766 292.934 322.795 297.371 322.842 301.808C322.887 306.098 322.911 310.387 322.922 314.677C322.929 316.306 322.944 317.935 322.967 319.564C323.15 333.512 321.409 344.321 311.3 354.762C301.147 364.341 288.867 368.404 275.067 368.322C273.962 368.324 273.962 368.324 272.833 368.326C270.384 368.328 267.935 368.321 265.485 368.313C263.721 368.313 261.957 368.313 260.193 368.314C256.406 368.314 252.618 368.31 248.831 368.302C243.356 368.291 237.88 368.288 232.404 368.286C223.519 368.283 214.633 368.274 205.747 368.261C197.12 368.248 188.492 368.238 179.865 368.233C179.332 368.232 178.8 368.232 178.251 368.232C175.58 368.23 172.908 368.228 170.236 368.226C148.1 368.212 125.964 368.188 103.828 368.157C104.143 367.176 104.461 366.196 104.781 365.217C105.046 364.398 105.046 364.398 105.317 363.562C107.634 357.133 112.403 351.321 116.854 346.218C117.259 345.748 117.664 345.278 118.081 344.794C123.581 338.849 131.08 334.248 138.793 331.821C139.342 331.64 139.342 331.64 139.902 331.456C142.314 330.983 144.716 331.037 147.164 331.041C147.737 331.039 148.309 331.037 148.899 331.035C150.82 331.029 152.741 331.028 154.662 331.027C156.038 331.024 157.414 331.021 158.79 331.017C161.756 331.009 164.721 331.003 167.687 330.999C172.377 330.992 177.067 330.978 181.757 330.962C195.095 330.92 208.433 330.883 221.771 330.86C229.136 330.848 236.501 330.828 243.866 330.8C247.763 330.785 251.66 330.775 255.557 330.773C259.224 330.772 262.891 330.761 266.557 330.743C267.902 330.738 269.246 330.737 270.59 330.739C272.429 330.742 274.267 330.732 276.105 330.719C276.634 330.722 277.163 330.726 277.708 330.73C281.603 330.683 285.604 330.122 288.641 327.446C291.491 324.209 291.78 321.751 291.647 317.58C291.538 313.603 291.47 309.627 291.436 305.648C291.413 303.246 291.37 300.847 291.283 298.447C290.746 282.983 290.746 282.983 293.398 278.757C295.886 276.11 298.773 274.387 302.025 272.818C303.673 272.009 305.098 270.99 306.565 269.89C307.4 269.321 308.238 268.754 309.077 268.19C309.984 267.574 310.891 266.958 311.798 266.342C312.223 266.053 312.648 265.765 313.086 265.468C315.389 263.89 317.651 262.255 319.912 260.619C321.16 259.834 321.16 259.834 322.532 259.834Z" fill={isFront ? "url(#monogramPrimaryGrad)" : "#0c1836"} stroke={isFront ? "url(#monogramPrimaryStroke)" : "none"} strokeWidth={isFront ? "1.8" : "0"} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M352.695 238.537C354.785 239.641 356.187 241.321 357.717 243.079C358.048 243.45 358.379 243.822 358.72 244.204C359.691 245.295 360.654 246.394 361.616 247.493C362.352 248.319 362.352 248.319 363.102 249.161C364.221 250.423 365.333 251.684 366.415 252.977C366.769 253.386 367.124 253.795 367.489 254.217C368.644 255.983 368.73 256.912 368.731 259.004C368.737 259.663 368.743 260.322 368.748 261.001C368.744 261.72 368.74 262.439 368.736 263.179C368.739 263.94 368.743 264.701 368.747 265.484C368.754 267.138 368.756 268.791 368.753 270.445C368.75 273.068 368.76 275.692 368.773 278.315C368.798 283.895 368.808 289.475 368.815 295.056C368.823 301.5 368.838 307.944 368.87 314.389C368.879 316.961 368.876 319.533 368.873 322.106C368.909 337.95 371.207 352.17 382.277 364.273C383.096 365.087 383.928 365.888 384.779 366.668C385.054 366.933 385.329 367.198 385.612 367.471C385.612 367.697 385.612 367.924 385.612 368.157C363.666 368.157 341.72 368.157 319.109 368.157C323.223 363.358 323.223 363.358 324.68 361.678C332.953 351.802 336.51 340.715 336.359 328.013C336.355 327.172 336.351 326.331 336.346 325.464C336.337 323.646 336.326 321.828 336.312 320.01C336.29 317.131 336.285 314.252 336.283 311.373C336.283 310.885 336.282 310.397 336.282 309.895C336.281 308.898 336.28 307.902 336.28 306.905C336.274 300.211 336.257 293.518 336.2 286.825C336.161 282.296 336.147 277.768 336.161 273.239C336.167 270.847 336.161 268.457 336.125 266.066C336.085 263.399 336.098 260.734 336.115 258.067C336.095 257.282 336.074 256.497 336.053 255.689C336.113 252.409 336.2 250.372 338.438 247.867C340.166 246.473 341.918 245.254 343.791 244.065C344.539 243.488 345.282 242.903 346.013 242.305C346.609 241.854 347.205 241.402 347.818 240.937C348.425 240.469 349.031 240.002 349.656 239.52C351.332 238.58 351.332 238.58 352.695 238.537Z" fill={isFront ? "url(#monogramPrimaryGrad)" : "#0c1836"} stroke={isFront ? "url(#monogramPrimaryStroke)" : "none"} strokeWidth={isFront ? "1.8" : "0"} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    );
                  })}

                  {/* Layer 2: Gold 'D' Shape (stacked for 3D extrusion) */}
                  {[...Array(8)].map((_, i) => {
                    const isFront = i === 7;
                    return (
                      <svg 
                        key={`d-layer-${i}`} 
                        className={`sd-monogram-svg sd-monogram-part-d ${isFront ? 'sd-monogram-front' : 'sd-monogram-edge'}`} 
                        viewBox="95 0 550 370" 
                        fill="none"
                        style={{ '--layer-index': i, filter: isFront ? 'drop-shadow(0 0 8px rgba(255, 216, 117, 0.4))' : undefined } as React.CSSProperties}
                      >
                        <path d="M425.43 0.0243853C426.255 0.0202807 427.079 0.016176 427.929 0.0119469C430.184 0.00643574 432.437 0.0253392 434.692 0.0558295C437.07 0.0826564 439.448 0.0796548 441.826 0.0804892C445.831 0.0861909 449.835 0.112606 453.839 0.152934C458.426 0.199028 463.013 0.219842 467.6 0.224904C472.527 0.230374 477.453 0.251584 482.379 0.278924C483.775 0.285901 485.171 0.29046 486.567 0.294576C530.128 0.477968 566.266 15.9595 597.325 46.4C606.377 55.6683 613.633 66.2678 620.078 77.4659C620.347 77.9292 620.616 78.3925 620.894 78.8698C630.373 95.3462 636.591 113.755 639.64 132.483C639.841 133.67 640.062 134.855 640.31 136.034C641.889 144.346 641.543 152.816 641.537 161.242C641.54 162.996 641.543 164.751 641.546 166.505C641.551 170.174 641.551 173.842 641.548 177.511C641.543 181.715 641.552 185.92 641.566 190.125C641.58 194.21 641.582 198.294 641.58 202.379C641.58 204.099 641.584 205.817 641.591 207.537C641.624 216.89 641.348 225.882 639.55 235.077C639.139 237.233 638.789 239.398 638.435 241.564C634.254 266.615 621.577 291.634 605.68 311.252C605.36 311.651 605.04 312.049 604.71 312.46C596.356 322.774 586.961 332.257 576.2 340.047C575.485 340.571 574.77 341.095 574.033 341.635C551.603 357.618 525.256 368.268 497.462 368.256C496.277 368.259 496.277 368.259 495.068 368.263C492.47 368.269 489.872 368.271 487.274 368.272C485.918 368.273 484.561 368.275 483.205 368.277C478.943 368.282 474.682 368.284 470.421 368.283C466.045 368.283 461.67 368.29 457.295 368.301C453.52 368.31 449.745 368.314C445.97 368.313C443.724 368.313 441.477 368.316 439.231 368.322C436.721 368.329 434.211 368.327 431.702 368.323C430.971 368.327 430.241 368.331 429.489 368.335C415.771 368.278 403.385 364.265 393.319 354.699C387.776 348.858 383.913 341.832 383.166 333.728C383.108 333.113 383.05 332.499 382.991 331.865C382.949 331.398 382.907 330.93 382.863 330.449C388.268 330.397 393.673 330.361 399.078 330.336C400.917 330.327 402.756 330.312 404.595 330.294C407.237 330.269 409.88 330.257 412.523 330.248C413.756 330.232 413.756 330.232 415.014 330.216C415.783 330.216 416.551 330.216 417.343 330.215C418.017 330.211 418.692 330.206 419.387 330.202C421.256 330.449 421.256 330.449 422.76 331.474C425.735 333.069 428.64 332.794 431.965 332.794C432.699 332.799 433.434 332.805 434.19 332.811C436.623 332.827 439.056 332.828 441.489 332.827C443.194 332.832 444.899 332.837 446.604 332.843C450.188 332.852 453.772 332.853 457.356 332.849C461.899 332.844 466.441 332.866 470.984 332.894C474.514 332.912 478.044 332.913 481.574 332.911C483.245 332.912 484.916 332.919 486.587 332.931C510.965 333.091 534.219 327.316 553.575 311.938C554.169 311.484 554.762 311.029 555.372 310.561C568.149 300.511 577.935 288.233 585.804 274.074C586.378 273.048 586.972 272.034 587.571 271.022C589.458 267.809 590.777 264.551 591.993 261.03C592.615 259.26 593.304 257.537 594.025 255.805C596.974 248.462 598.927 240.9 600.196 233.095C600.364 232.133 600.364 232.133 600.536 231.152C601.845 222.758 601.779 214.397 601.773 205.918C601.776 204.288 601.779 202.659 601.782 201.029C601.787 197.627 601.787 194.225 601.783 190.823C601.779 186.498 601.791 182.174 601.807 177.849C601.817 174.487 601.818 171.125 601.815 167.763C601.816 166.17 601.819 164.577 601.826 162.984C601.873 150.755 600.964 139.155 597.582 127.343C597.403 126.709 597.224 126.075 597.04 125.423C593.268 112.38 587.346 99.1757 578.942 88.4353C578.566 87.9298 578.189 87.4243 577.801 86.9034C574.752 82.8648 571.428 79.1038 567.973 75.4091C567.417 74.8081 566.288 73.588C548.952 55.4976 523.241 42.9484 497.985 42.3309C495.346 42.2933 492.707 42.2854 490.068 42.2821C488.878 42.2757 487.688 42.2688 486.497 42.2613C483.294 42.2427 480.09 42.2322 476.887 42.2233C473.529 42.2125 470.171 42.1941 466.813 42.1766C460.466 42.1446 454.119 42.1194 447.773 42.0966C440.542 42.0703 433.311 42.0365 426.081 42.002C411.218 41.9313 396.355 41.8701 381.492 41.8151C382.135 40.9463 382.78 40.0787 383.425 39.2115C383.784 38.7282 384.14 38.2449 384.512 37.747C386.084 35.7115 387.817 33.8609 389.591 32.0026C392.693 28.7011 395.598 25.3004 398.436 21.767C400.783 18.9354 403.284 16.255 405.782 13.5586C407.25 11.9687 408.693 10.3652 410.116 8.73537C410.466 8.34197 410.817 7.94856 411.178 7.54324C412.36 6.19271 412.36 6.19271 413.32 4.73659C416.74 0.0414408 419.86 -0.0945561 425.43 0.0243853Z" fill={isFront ? "url(#monogramGoldGrad)" : "#9c7003"} stroke={isFront ? "url(#monogramGoldStroke)" : "none"} strokeWidth={isFront ? "1.8" : "0"} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    );
                  })}
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
                <span className="client-name">{client.name}</span>
                <span className="client-sector">{client.sector}</span>
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
                Nurtured. Connected. Sustainable.
              </h3>
              <p className="showcase-desc">
                Operating as one unified ecosystem guided by purpose, empowered by people, and built with the agility to evolve and succeed across industrial engineering and clean energy challenges.
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
                  <path d="M 240 75 C 370 75, 410 160, 460 160" className={`connector-path ${activePill === 'academy' ? 'active-gold' : ''}`} />
                  <path d="M 240 225 H 460" className={`connector-path ${activePill === 'talent' ? 'active-blue' : ''}`} />
                  <path d="M 240 375 C 370 375, 410 290, 460 290" className={`connector-path ${activePill === 'foundation' ? 'active-green' : ''}`} />

                  {/* Right Column connectors (Nurturing, Potential, Sustainability) */}
                  <path d="M 860 75 C 730 75, 690 160, 640 160" className={`connector-path ${activePill === 'nurturing' ? 'active-yellow' : ''}`} />
                  <path d="M 860 225 H 640" className={`connector-path ${activePill === 'potential' ? 'active-red' : ''}`} />
                  <path d="M 860 375 C 730 375, 690 290, 640 290" className={`connector-path ${activePill === 'sustainability' ? 'active-emerald' : ''}`} />
                </g>

                {/* Pulsing endpoint contact indicator dots */}
                <circle cx="240" cy="75" r="3.5" fill="#ffad01" style={{ opacity: activePill === 'academy' ? 1 : 0.4 }} className={activePill === 'academy' ? 'active-pulse-dot-gold' : ''} />
                <circle cx="240" cy="225" r="3.5" fill="#38bdf8" style={{ opacity: activePill === 'talent' ? 1 : 0.4 }} className={activePill === 'talent' ? 'active-pulse-dot-blue' : ''} />
                <circle cx="240" cy="375" r="3.5" fill="#22c55e" style={{ opacity: activePill === 'foundation' ? 1 : 0.4 }} className={activePill === 'foundation' ? 'active-pulse-dot-green' : ''} />
                
                <circle cx="860" cy="75" r="3.5" fill="#ffd875" style={{ opacity: activePill === 'nurturing' ? 1 : 0.4 }} className={activePill === 'nurturing' ? 'active-pulse-dot-gold' : ''} />
                <circle cx="860" cy="225" r="3.5" fill="#f43f5e" style={{ opacity: activePill === 'potential' ? 1 : 0.4 }} className={activePill === 'potential' ? 'active-pulse-dot-red' : ''} />
                <circle cx="860" cy="375" r="3.5" fill="#10b981" style={{ opacity: activePill === 'sustainability' ? 1 : 0.4 }} className={activePill === 'sustainability' ? 'active-pulse-dot-green' : ''} />

                {/* Central Core Dial Contact Anchors */}
                <circle cx="460" cy="160" r="3.5" fill="#ffad01" style={{ opacity: activePill === 'academy' ? 1 : 0.2 }} />
                <circle cx="460" cy="225" r="3.5" fill="#38bdf8" style={{ opacity: activePill === 'talent' ? 1 : 0.2 }} />
                <circle cx="460" cy="290" r="3.5" fill="#22c55e" style={{ opacity: activePill === 'foundation' ? 1 : 0.2 }} />
                <circle cx="640" cy="160" r="3.5" fill="#ffd875" style={{ opacity: activePill === 'nurturing' ? 1 : 0.2 }} />
                <circle cx="640" cy="225" r="3.5" fill="#f43f5e" style={{ opacity: activePill === 'potential' ? 1 : 0.2 }} />
                <circle cx="640" cy="290" r="3.5" fill="#10b981" style={{ opacity: activePill === 'sustainability' ? 1 : 0.2 }} />

                {/* Active traveling laser particle dot */}
                {activePill === 'academy' && (
                  <circle r="4.5" fill="#ffad01" style={{ filter: 'drop-shadow(0 0 6px #ffad01)' }}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path="M 240 75 C 370 75, 410 160, 460 160" />
                  </circle>
                )}
                {activePill === 'talent' && (
                  <circle r="4.5" fill="#38bdf8" style={{ filter: 'drop-shadow(0 0 6px #38bdf8)' }}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path="M 240 225 H 460" />
                  </circle>
                )}
                {activePill === 'foundation' && (
                  <circle r="4.5" fill="#22c55e" style={{ filter: 'drop-shadow(0 0 6px #22c55e)' }}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path="M 240 375 C 370 375, 410 290, 460 290" />
                  </circle>
                )}
                {activePill === 'nurturing' && (
                  <circle r="4.5" fill="#ffd875" style={{ filter: 'drop-shadow(0 0 6px #ffd875)' }}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path="M 860 75 C 730 75, 690 160, 640 160" />
                  </circle>
                )}
                {activePill === 'potential' && (
                  <circle r="4.5" fill="#f43f5e" style={{ filter: 'drop-shadow(0 0 6px #f43f5e)' }}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path="M 860 225 H 640" />
                  </circle>
                )}
                {activePill === 'sustainability' && (
                  <circle r="4.5" fill="#10b981" style={{ filter: 'drop-shadow(0 0 6px #10b981)' }}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path="M 860 375 C 730 375, 690 290, 640 290" />
                  </circle>
                )}
              </svg>
              
              {/* Left Column Pills */}
              <div className="mascot-pills-col col-left">
                <button 
                  className={`mascot-pill-btn glass pill-academy ${activePill === 'academy' ? 'active-pill' : ''}`}
                  onClick={() => setActivePill('academy')}
                >
                  <span className="pill-dot" style={{ backgroundColor: '#ffad01' }}></span>
                  Academy
                </button>
                <button 
                  className={`mascot-pill-btn glass pill-talent ${activePill === 'talent' ? 'active-pill' : ''}`}
                  onClick={() => setActivePill('talent')}
                >
                  <span className="pill-dot" style={{ backgroundColor: '#38bdf8' }}></span>
                  Talent Program
                </button>
                <button 
                  className={`mascot-pill-btn glass pill-foundation ${activePill === 'foundation' ? 'active-pill' : ''}`}
                  onClick={() => setActivePill('foundation')}
                >
                  <span className="pill-dot" style={{ backgroundColor: '#22c55e' }}></span>
                  Foundation
                </button>
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
                <button 
                  className={`mascot-pill-btn glass pill-nurturing ${activePill === 'nurturing' ? 'active-pill' : ''}`}
                  onClick={() => setActivePill('nurturing')}
                >
                  <span className="pill-dot" style={{ backgroundColor: '#ffd875' }}></span>
                  Nurturing Growth
                </button>
                <button 
                  className={`mascot-pill-btn glass pill-potential ${activePill === 'potential' ? 'active-pill' : ''}`}
                  onClick={() => setActivePill('potential')}
                >
                  <span className="pill-dot" style={{ backgroundColor: '#f43f5e' }}></span>
                  Latent Potential
                </button>
                <button 
                  className={`mascot-pill-btn glass pill-sustainability ${activePill === 'sustainability' ? 'active-pill' : ''}`}
                  onClick={() => setActivePill('sustainability')}
                >
                  <span className="pill-dot" style={{ backgroundColor: '#10b981' }}></span>
                  Sustainability
                </button>
              </div>
            </div>

          {/* Dynamic details readout console */}
          <div className="showcase-details-panel blueprint-panel brackets-tl-br" style={{ borderColor: `${SUNSEED_PILL_DETAILS[activePill].iconColor}33` }}>
            <div className="details-panel-header">
              <span className="details-panel-badge" style={{ color: SUNSEED_PILL_DETAILS[activePill].iconColor, borderColor: `${SUNSEED_PILL_DETAILS[activePill].iconColor}33` }}>
                {SUNSEED_PILL_DETAILS[activePill].subtitle.toUpperCase()}
              </span>
              <h4 className="details-panel-title">{SUNSEED_PILL_DETAILS[activePill].title}</h4>
            </div>
            <p className="details-panel-desc">{SUNSEED_PILL_DETAILS[activePill].desc}</p>
            <div className="details-panel-action-row">
              <div className="telemetry-indicator-row">
                <span className="hud-pulse" style={{ backgroundColor: SUNSEED_PILL_DETAILS[activePill].iconColor, boxShadow: `0 0 10px ${SUNSEED_PILL_DETAILS[activePill].iconColor}` }}></span>
                <span className="telemetry-status-text">SYSTEM CORE: ONLINE // COMPLIANT</span>
              </div>
              <a href="#/sunseed" className="btn btn-primary nav-cta-btn" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}>
                Open Interactive Console
              </a>
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
              <h3 className="value-title">9 Core Verticals</h3>
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
                <img src="/img-team.jpg" alt="ESG Commitments" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
