import { useState, useEffect, useRef } from 'react';
import './App.css';
import {
  MenuIcon,
  CloseIcon
} from './components/Icons';

// Import constants
import { SERVICES_DATA } from './constants/data';

// Import page components
import Home from './pages/Home';
import About from './pages/About';
import Quality from './pages/Quality';
import Journey from './pages/Journey';
import Services from './pages/Services';
import Esg from './pages/Esg';
import Contact from './pages/Contact';
import SunSeed from './pages/SunSeed';
import CursorTrailer from './components/CursorTrailer';

interface Toast {
  id: string;
  type: 'success' | 'error';
  message: string;
}

function App() {
  const [theme] = useState<'light' | 'dark'>('light');

  const [currentPath, setCurrentPath] = useState<'home' | 'about' | 'services' | 'esg' | 'contact' | 'quality' | 'journey' | 'sunseed'>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/about')) return 'about';
    if (hash.startsWith('#/services')) return 'services';
    if (hash.startsWith('#/esg')) return 'esg';
    if (hash.startsWith('#/contact')) return 'contact';
    if (hash.startsWith('#/quality')) return 'quality';
    if (hash.startsWith('#/journey')) return 'journey';
    if (hash.startsWith('#/sunseed')) return 'sunseed';
    return 'home';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [megaMenuHovered, setMegaMenuHovered] = useState(false);
  const [activeService, setActiveService] = useState<string>('construction');
  const [serviceTransitioning, setServiceTransitioning] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);


  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceCategory: 'engineering',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Apply Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Reset mobile sub-menus when the navigation drawer is closed
  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileServicesOpen(false);
    }
  }, [mobileMenuOpen]);

  // Lock background body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
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
  }, [mobileMenuOpen]);

  // Custom Hash Router Event Listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      let path: 'home' | 'about' | 'services' | 'esg' | 'contact' | 'quality' | 'journey' | 'sunseed' = 'home';
      if (hash.startsWith('#/about')) path = 'about';
      else if (hash.startsWith('#/services')) path = 'services';
      else if (hash.startsWith('#/esg')) path = 'esg';
      else if (hash.startsWith('#/contact')) path = 'contact';
      else if (hash.startsWith('#/quality')) path = 'quality';
      else if (hash.startsWith('#/journey')) path = 'journey';
      else if (hash.startsWith('#/sunseed')) path = 'sunseed';
      
      setCurrentPath(path);
      setMobileMenuOpen(false);
      setMobileServicesOpen(false);
      
      // Only scroll to top if not targeting a specific sub-page anchor
      if (!hash.includes('#why-choose') && !hash.includes('#timeline')) {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Global Scroll-Driven Reveal Animation Observer (UP and DOWN support)
  useEffect(() => {
    const querySelectors = [
      'section.section h2',
      'section.section h3',
      'section.section p:not(.page-subtitle)',
      'section.section .grid-cols-2',
      'section.section .grid-cols-3',
      'section.section .grid-cols-4',
      'section.section .contact-layout',
      'section.section .map-section-container',
      'section.section .timeline-container',
      'section.section .services-explorer-layout',
      'section.section .wizard-container',
      'section.section .value-card',
      'section.section .cred-card',
      'section.section .timeline-item',
      'section.section .client-card',
      'section.section .contact-method-card',
      'section.section .form-card'
    ];

    const elementsToAnimate = document.querySelectorAll(querySelectors.join(', '));
    elementsToAnimate.forEach((el) => {
      // Exclude page headers which animate on load
      if (el.closest('.page-header-section') || el.closest('.hero-section')) {
        return;
      }
      el.classList.add('reveal');
    });

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          } else {
            // Remove active class when scrolling out of view (supports up/down animations)
            entry.target.classList.remove('reveal-active');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPath]);

  // Canvas Drifting Particles Background VFX (Global Backdrop)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const particleCount = Math.min(45, Math.floor((width * height) / 25000));

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      const dx = e.clientX / window.innerWidth - 0.5;
      const dy = e.clientY / window.innerHeight - 0.5;
      document.documentElement.style.setProperty('--mouse-dx', dx.toString());
      document.documentElement.style.setProperty('--mouse-dy', dy.toString());
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      document.documentElement.style.setProperty('--mouse-dx', '0');
      document.documentElement.style.setProperty('--mouse-dy', '0');
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Color scheme based on dark/light theme
      const nodeColor = theme === 'dark' ? 'rgba(255, 173, 1, 0.45)' : 'rgba(0, 21, 67, 0.25)';
      const lineColor = theme === 'dark' ? 'rgba(255, 173, 1, 0.08)' : 'rgba(0, 21, 67, 0.06)';
      const mouseLineColor = theme === 'dark' ? 'rgba(255, 173, 1, 0.22)' : 'rgba(0, 21, 67, 0.15)';

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Gravity well logic: attract particles gently to cursor
        if (mouse.x > 0) {
          const dx = mouse.x - p1.x;
          const dy = mouse.y - p1.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 220) {
            const force = (220 - dist) / 2600;
            p1.vx += (dx / dist) * force;
            p1.vy += (dy / dist) * force;
          }
        }

        // Limit maximum particle speed
        const speed = Math.hypot(p1.vx, p1.vy);
        if (speed > 1.2) {
          p1.vx = (p1.vx / speed) * 1.2;
          p1.vy = (p1.vy / speed) * 1.2;
        }

        // Move particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap borders
        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        // Draw node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        // Connect with other nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = (1 - dist / 140) * 0.75;
            ctx.stroke();
          }
        }

        // Connect with mouse cursor
        if (mouse.x > 0) {
          const mDist = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
          if (mDist < 180) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = mouseLineColor;
            ctx.lineWidth = (1 - mDist / 180) * 1.25;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);



  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Switch Active Service with animation
  const handleSwitchService = (serviceId: string) => {
    if (serviceId === activeService) return;
    setServiceTransitioning(true);
    setTimeout(() => {
      setActiveService(serviceId);
      setServiceTransitioning(false);
    }, 250);
  };

  // Pre-select service from dropdown and redirect
  const handleSelectServiceFromMenu = (serviceId: string) => {
    setActiveService(serviceId);
    setMegaMenuHovered(false);
    setMobileMenuOpen(false);
    window.location.hash = `#/services`;
    
    // Smooth scroll directly to the services explorer section
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(`Thank you, ${formData.name}! Your request has been received. Our senior engineer will contact you shortly.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceCategory: 'engineering',
        message: ''
      });
    }, 1500);
  };

  const renderPage = () => {
    switch (currentPath) {
      case 'about':
        return <About />;
      case 'quality':
        return <Quality />;
      case 'journey':
        return <Journey />;
      case 'services':
        return (
          <Services
            activeService={activeService}
            handleSwitchService={handleSwitchService}
            serviceTransitioning={serviceTransitioning}
            showToast={showToast}
          />
        );
      case 'esg':
        return <Esg />;
      case 'sunseed':
        return <SunSeed />;
      case 'contact':
        return (
          <Contact
            formData={formData}
            handleInputChange={handleInputChange}
            handleContactSubmit={handleContactSubmit}
            isSubmitting={isSubmitting}
          />
        );
      case 'home':
      default:
        return <Home />;
    }
  };

  const isAboutActive = currentPath === 'about';

  return (
    <>
      {/* Premium Cursor Trailer */}
      <CursorTrailer />

      {/* Toast Notification Container */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className={`toast toast-${toast.type} glass`}>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Global Fixed Background Particle Canvas */}
      <canvas ref={canvasRef} className="canvas-vfx-global" />

      {/* Mobile Drawer Backdrop Overlay */}
      <div 
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => {
          setMobileMenuOpen(false);
          setMobileServicesOpen(false);
        }}
      />

      {/* Header Shell */}
      <header className={`header glass ${mobileMenuOpen ? 'header-mobile-menu-open' : ''}`}>
        <div className="container header-container">
          <a href="#/" className="logo">
            <img 
              src={theme === 'dark' ? '/logo-dark.svg' : '/logo.svg'} 
              className="logo-img" 
              alt="Suria Dirgahayu Logo" 
            />
            <span className="logo-text">SURIA DIRGAHAYU</span>
          </a>
          
          <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {/* Mobile Drawer Branding Header inside Drawer */}
            <div className="mobile-drawer-header">
              <a href="#/" className="logo" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src={theme === 'dark' ? '/logo-dark.svg' : '/logo.svg'} 
                  className="logo-img" 
                  style={{ height: '32px' }} 
                  alt="Suria Dirgahayu Logo" 
                />
                <span className="logo-text">SURIA DIRGAHAYU</span>
              </a>
            </div>

            <a 
              href="#/" 
              className={`nav-link ${currentPath === 'home' ? 'active-link' : ''}`} 
              onClick={() => setMobileMenuOpen(false)}
              style={{ '--link-index': 1 } as React.CSSProperties}
            >
              <span className="nav-num">01</span> Home
            </a>
            
            <a 
              href="#/about" 
              className={`nav-link ${isAboutActive ? 'active-link' : ''}`} 
              onClick={() => setMobileMenuOpen(false)}
              style={{ '--link-index': 2 } as React.CSSProperties}
            >
              <span className="nav-num">02</span> About Us
            </a>
            
            {/* Mega Dropdown trigger */}
            <div 
              className="mega-menu-trigger-wrap"
              onMouseEnter={() => setMegaMenuHovered(true)}
              onMouseLeave={() => setMegaMenuHovered(false)}
              style={{ '--link-index': 3 } as React.CSSProperties}
            >
              <a 
                href="#/services" 
                className={`nav-link dropdown-trigger-link ${currentPath === 'services' ? 'active-link' : ''}`}
                onClick={(e) => {
                  if (window.innerWidth <= 900) {
                    e.preventDefault();
                    setMobileServicesOpen(!mobileServicesOpen);
                  }
                }}
              >
                <span><span className="nav-num">03</span> Our Services</span>
                <svg 
                  className={`dropdown-arrow-svg ${mobileServicesOpen ? 'arrow-rotated' : ''}`} 
                  viewBox="0 0 24 24" 
                  width="12" 
                  height="12" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ marginLeft: '6px', transition: 'transform 0.25s ease', display: 'inline-block', verticalAlign: 'middle' }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              
              {/* Mega Dropdown Panel */}
              <div className={`mega-menu-dropdown ${(megaMenuHovered && window.innerWidth > 900) || mobileServicesOpen ? 'active' : ''}`}>
                <div className="mega-menu-container">
                  <div className="mega-menu-sidebar">
                    <div className="mega-sidebar-title">Our Capabilities</div>
                    <div className="mega-sidebar-badge">NAVY & GOLD THEME</div>
                    <p className="mega-sidebar-desc">
                      Multi-disciplinary services designed to address engineering, refurbishment, and credit requirements for heavy industrial projects.
                    </p>
                    <a href="#/esg" className="btn btn-primary" style={{ padding: '0.65rem 1.15rem', fontSize: '0.85rem' }} onClick={() => setMegaMenuHovered(false)}>
                      ESG Pillars
                    </a>
                  </div>
                  <div className="mega-menu-grid-categorized">
                    <div className="mega-menu-column">
                      <div className="mega-column-header">Engineering &amp; Design</div>
                      <div className="mega-menu-items">
                        {[
                          SERVICES_DATA.find(s => s.id === 'construction')!,
                          SERVICES_DATA.find(s => s.id === 'interior-design')!,
                          SERVICES_DATA.find(s => s.id === 'manpower')!
                        ].map((s, idx) => {
                          const IconComp = s.icon;
                          return (
                            <a 
                              key={s.id} 
                              href="#/services" 
                              className="mega-menu-item"
                              onClick={() => handleSelectServiceFromMenu(s.id)}
                              style={{ '--i': idx } as React.CSSProperties}
                            >
                              <div className="mega-item-icon-box">
                                <IconComp size={16} />
                              </div>
                              <div className="mega-item-text">
                                <div className="mega-item-title">{s.title}</div>
                                <div className="mega-item-desc">{s.shortDesc}</div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mega-menu-column">
                      <div className="mega-column-header">Technology &amp; Talent</div>
                      <div className="mega-menu-items">
                        {[
                          SERVICES_DATA.find(s => s.id === 'it-solutions')!,
                          SERVICES_DATA.find(s => s.id === 'ict-management')!,
                          SERVICES_DATA.find(s => s.id === 'hr-payroll')!
                        ].map((s, idx) => {
                          const IconComp = s.icon;
                          return (
                            <a 
                              key={s.id} 
                              href="#/services" 
                              className="mega-menu-item"
                              onClick={() => handleSelectServiceFromMenu(s.id)}
                              style={{ '--i': idx + 3 } as React.CSSProperties}
                            >
                              <div className="mega-item-icon-box">
                                <IconComp size={16} />
                              </div>
                              <div className="mega-item-text">
                                <div className="mega-item-title">{s.title}</div>
                                <div className="mega-item-desc">{s.shortDesc}</div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mega-menu-column">
                      <div className="mega-column-header">Business &amp; Operations</div>
                      <div className="mega-menu-items">
                        {[
                          SERVICES_DATA.find(s => s.id === 'debt-collection')!,
                          SERVICES_DATA.find(s => s.id === 'branding')!
                        ].map((s, idx) => {
                          const IconComp = s.icon;
                          return (
                            <a 
                              key={s.id} 
                              href="#/services" 
                              className="mega-menu-item"
                              onClick={() => handleSelectServiceFromMenu(s.id)}
                              style={{ '--i': idx + 6 } as React.CSSProperties}
                            >
                              <div className="mega-item-icon-box">
                                <IconComp size={16} />
                              </div>
                              <div className="mega-item-text">
                                <div className="mega-item-title">{s.title}</div>
                                <div className="mega-item-desc">{s.shortDesc}</div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
 
            <a 
              href="#/esg" 
              className={`nav-link ${currentPath === 'esg' ? 'active-link' : ''}`} 
              onClick={() => setMobileMenuOpen(false)}
              style={{ '--link-index': 4 } as React.CSSProperties}
            >
              <span className="nav-num">04</span> ESG
            </a>
            
            <a 
              href="#/quality" 
              className={`nav-link ${currentPath === 'quality' ? 'active-link' : ''}`} 
              onClick={() => setMobileMenuOpen(false)}
              style={{ '--link-index': 5 } as React.CSSProperties}
            >
              <span className="nav-num">05</span> Quality
            </a>
            
            <a 
              href="#/journey" 
              className={`nav-link ${currentPath === 'journey' ? 'active-link' : ''}`} 
              onClick={() => setMobileMenuOpen(false)}
              style={{ '--link-index': 6 } as React.CSSProperties}
            >
              <span className="nav-num">06</span> Journey
            </a>
            
            <a 
              href="#/contact" 
              className={`nav-link ${currentPath === 'contact' ? 'active-link' : ''}`} 
              onClick={() => setMobileMenuOpen(false)}
              style={{ '--link-index': 7 } as React.CSSProperties}
            >
              <span className="nav-num">07</span> Contact
            </a>

            {/* Mobile Drawer HUD telemetry Diagnostic Panel at the bottom */}
            <div className="mobile-drawer-hud blueprint-panel brackets-tl-br">
              <div className="mobile-hud-row">
                <span className="hud-label">REG.STATUS</span>
                <span className="hud-value">ACTIVE</span>
              </div>
              <div className="mobile-hud-row">
                <span className="hud-label">ST.LICENSE</span>
                <span className="hud-value">ST-1 &amp; ST-3</span>
              </div>
              <div className="mobile-hud-row">
                <span className="hud-label">SYS.CORE</span>
                <span className="hud-value"><span className="hud-pulse" style={{ width: '6px', height: '6px' }}></span> ONLINE</span>
              </div>
            </div>
          </nav>

          <div className="header-actions">
            <a href="#/contact" className="btn btn-primary nav-cta-btn">
              Consult an Expert
            </a>
            <button 
              className="mobile-menu-toggle" 
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (mobileMenuOpen) setMobileServicesOpen(false);
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Dynamic Page Routing Mount */}
      <main style={{ flex: 1, zIndex: 2, position: 'relative', paddingTop: '72px', display: 'flex', flexDirection: 'column' }}>
        <div key={currentPath} className="page-transition-container">
          {renderPage()}
        </div>
      </main>

      {/* Footer Shell */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo" style={{ marginBottom: '0.5rem', paddingLeft: 0 }}>
                {/* Dynamically select logo variant based on theme context */}
                <img 
                  src={theme === 'dark' ? '/logo-dark.svg' : '/logo.svg'} 
                  className="logo-img" 
                  style={{ height: '36px' }} 
                  alt="Suria Dirgahayu Logo" 
                />
                <span className="logo-text">SURIA DIRGAHAYU</span>
              </div>
              <p className="footer-desc">
                Suria Dirgahayu Sdn. Bhd. is a multi-disciplinary engineering contractor and services partner committed to safety, engineering quality, and corporate integrity.
              </p>
              {/* Cockpit HUD Diagnostics Widget */}
              <div className="footer-hud-console blueprint-panel brackets-tl-br">
                <div className="footer-hud-grid">
                  <div className="footer-hud-item">
                    <span className="footer-hud-lbl">SYS.CORE</span>
                    <span className="footer-hud-val"><span className="hud-pulse"></span> ONLINE</span>
                  </div>
                  <div className="footer-hud-item">
                    <span className="footer-hud-lbl">SEC.LAT</span>
                    <span className="footer-hud-val">12MS</span>
                  </div>
                  <div className="footer-hud-item">
                    <span className="footer-hud-lbl">REG.STATUS</span>
                    <span className="footer-hud-val">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Services Focus</div>
              <ul className="footer-list">
                <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('construction')}>Construction Services</a></li>
                <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('it-solutions')}>IT Solutions</a></li>
                <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('interior-design')}>Interior Design</a></li>
                <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('ict-management')}>ICT Management</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Other Services</div>
              <ul className="footer-list">
                <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('manpower')}>Manpower Supply</a></li>
                <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('hr-payroll')}>HR &amp; Payroll</a></li>
                <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('debt-collection')}>Debt Collection</a></li>
                <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('branding')}>Branding Solutions</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Licensing &amp; HSE</div>
              <div className="footer-status-stack">
                <div className="footer-status-item">
                  <span className="status-indicator indicator-active"><span className="indicator-pulse"></span></span>
                  <div className="status-text-block">
                    <div className="status-main">National Licensing</div>
                    <div className="status-sub">Fully Compliant</div>
                  </div>
                </div>
                <div className="footer-status-item">
                  <span className="status-indicator indicator-active"><span className="indicator-pulse"></span></span>
                  <div className="status-text-block">
                    <div className="status-main">Suruhanjaya Tenaga</div>
                    <div className="status-sub">ST-1 &amp; ST-3 Lic</div>
                  </div>
                </div>
                <div className="footer-status-item">
                  <span className="status-indicator indicator-active"><span className="indicator-pulse"></span></span>
                  <div className="status-text-block">
                    <div className="status-main">OSHA Standards</div>
                    <div className="status-sub">100% Compliant</div>
                  </div>
                </div>
                <div className="footer-status-item">
                  <span className="status-indicator indicator-active"><span className="indicator-pulse"></span></span>
                  <div className="status-text-block">
                    <div className="status-main">ISO 9001 Audited</div>
                    <div className="status-sub">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© {new Date().getFullYear()} Suria Dirgahayu Sdn. Bhd. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#/about" style={{ color: 'inherit' }}>Company Register</a>
              <a href="#/contact" style={{ color: 'inherit' }}>Estimates Hotline</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
