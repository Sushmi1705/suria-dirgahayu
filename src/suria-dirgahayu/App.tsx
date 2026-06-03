import { useState, useEffect } from 'react';
import './App.css';

// Import alternative pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Wizard from './pages/Wizard';
import Quality from './pages/Quality';
import Journey from './pages/Journey';
import Contact from './pages/Contact';

// Import original capabilities data structure
import { SERVICES_DATA } from '../constants/data';

// Custom icons
const DropdownArrow = () => (
  <svg viewBox="0 0 16 16" fill="none" width="12" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s' }}>
    <polyline points="4 6 8 10 12 6"></polyline>
  </svg>
);



export default function App() {
  const [currentPath, setCurrentPath] = useState<'home' | 'about' | 'services' | 'wizard' | 'contact' | 'quality' | 'journey'>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/about')) return 'about';
    if (hash.startsWith('#/services')) return 'services';
    if (hash.startsWith('#/wizard')) return 'wizard';
    if (hash.startsWith('#/contact')) return 'contact';
    if (hash.startsWith('#/quality')) return 'quality';
    if (hash.startsWith('#/journey')) return 'journey';
    return 'home';
  });

  const [activeService, setActiveService] = useState<string>('demolition');
  const [serviceTransitioning, setServiceTransitioning] = useState(false);

  // Router listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      let path: 'home' | 'about' | 'services' | 'wizard' | 'contact' | 'quality' | 'journey' = 'home';
      if (hash.startsWith('#/about')) path = 'about';
      else if (hash.startsWith('#/services')) path = 'services';
      else if (hash.startsWith('#/wizard')) path = 'wizard';
      else if (hash.startsWith('#/contact')) path = 'contact';
      else if (hash.startsWith('#/quality')) path = 'quality';
      else if (hash.startsWith('#/journey')) path = 'journey';

      setCurrentPath(path);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll reveal observer for content animations
  // Scroll reveal observer for content animations (UP and DOWN support)
  useEffect(() => {
    const querySelectors = [
      '.tm-section h2',
      '.tm-section h3',
      '.tm-section p:not(.tm-hero-desc)',
      '.tm-section .tm-grid-3',
      '.tm-section .tm-card',
      '.tm-section .tm-journey-view',
      '.tm-section .tm-section-header'
    ];

    const elementsToAnimate = document.querySelectorAll(querySelectors.join(', '));
    elementsToAnimate.forEach((el) => {
      // Exclude page headers and hero elements
      if (el.closest('.tm-page-header') || el.closest('.tm-hero-container')) {
        return;
      }
      el.classList.add('tm-reveal');
    });

    const revealElements = document.querySelectorAll('.tm-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('tm-active');
          } else {
            // Remove active class when scrolling out of view (supports up/down animations)
            entry.target.classList.remove('tm-active');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    // Staggered delay for child cards inside grids
    const cardGrids = document.querySelectorAll('.tm-grid-3, .tm-journey-view > div');
    cardGrids.forEach(grid => {
      const cards = grid.querySelectorAll('.tm-card');
      cards.forEach((card, index) => {
        (card as HTMLElement).style.transitionDelay = `${index * 0.12}s`;
      });
    });

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPath]);

  const handleSwitchService = (serviceId: string) => {
    if (serviceId === activeService) return;
    setServiceTransitioning(true);
    setTimeout(() => {
      setActiveService(serviceId);
      setServiceTransitioning(false);
    }, 250);
  };

  const handleSelectServiceFromMenu = (serviceId: string) => {
    setActiveService(serviceId);
    window.location.hash = `#/services`;
  };

  const renderPage = () => {
    switch (currentPath) {
      case 'about':
        return <About />;
      case 'services':
        return (
          <Services
            activeService={activeService}
            handleSwitchService={handleSwitchService}
            serviceTransitioning={serviceTransitioning}
            handleConfigureService={handleSelectServiceFromMenu}
          />
        );
      case 'wizard':
        return <Wizard />;
      case 'quality':
        return <Quality />;
      case 'journey':
        return <Journey />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home handleSelectService={handleSelectServiceFromMenu} />;
    }
  };

  return (
    <div className="suria-dirgahayu-app-shell">
      {/* Header */}
      <header className="tm-header">
        <div className="tm-header-container">
          <a href="#/" className="tm-logo">
            <img 
              src="/logo.svg" 
              className="tm-logo-img" 
              alt="Suria Dirgahayu Logo" 
            />
            <span className="tm-logo-text">SURIA DIRGAHAYU</span>
            <span className="tm-status-pulse" title="System Online"></span>
          </a>

          <nav className="tm-nav-links">
            <a href="#/" className={`tm-nav-link ${currentPath === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#/about" className={`tm-nav-link ${currentPath === 'about' ? 'active' : ''}`}>About us</a>
            
            {/* Mega Dropdown trigger */}
            <div className="tm-mega-trigger">
              <a href="#/services" className={`tm-nav-link ${currentPath === 'services' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Our Business
                <DropdownArrow />
              </a>

              {/* Opaque Mega Dropdown */}
              <div className="tm-mega-menu">
                <div style={{ gridColumn: 'span 2', padding: '0.5rem 1rem 1rem', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--gold)' }}></span>
                    <span style={{ fontWeight: 800, fontSize: '0.78rem', color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      SURIA CAPABILITIES // EPCC ENGINEERING
                    </span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>SELECT A DEPT FOR DETAILS</span>
                </div>
                {[
                  SERVICES_DATA.find(s => s.id === 'demolition')!,
                  SERVICES_DATA.find(s => s.id === 'civil')!,
                  SERVICES_DATA.find(s => s.id === 'mechanical')!,
                  SERVICES_DATA.find(s => s.id === 'electrical')!,
                  SERVICES_DATA.find(s => s.id === 'fabrication')!,
                  SERVICES_DATA.find(s => s.id === 'scaffolding')!
                ].map(s => {
                  const IconComp = s.icon;
                  return (
                    <a
                      key={s.id}
                      href="#/services"
                      className="tm-mega-item"
                      onClick={() => handleSelectServiceFromMenu(s.id)}
                    >
                      <div className="tm-mega-icon-box">
                        <IconComp size={18} />
                      </div>
                      <div className="tm-mega-text-block">
                        <div className="tm-mega-title">
                          {s.title.split(' & ')[0]}
                        </div>
                        <div className="tm-mega-desc">{s.shortDesc}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <a href="#/wizard" className={`tm-nav-link ${currentPath === 'wizard' ? 'active' : ''}`}>Project Wizard</a>
            <a href="#/quality" className={`tm-nav-link ${currentPath === 'quality' ? 'active' : ''}`}>Quality</a>
            <a href="#/journey" className={`tm-nav-link ${currentPath === 'journey' ? 'active' : ''}`}>Journey</a>
            <a href="#/contact" className={`tm-nav-link ${currentPath === 'contact' ? 'active' : ''}`}>Contact Us</a>
          </nav>

          <div>
            <a href="#/contact" className="tm-btn tm-btn-primary">
              Talk to Our Experts
            </a>
          </div>
        </div>
      </header>

      {/* Main router mount */}
      <main style={{ flex: 1, paddingTop: '72px' }}>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="tm-footer">
        <div className="tm-footer-container">
          <div className="tm-footer-brand">
            <a href="#/" className="tm-logo" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              <img 
                src="/logo.svg" 
                className="tm-logo-img" 
                alt="Suria Dirgahayu Logo" 
                style={{ filter: 'brightness(0) invert(1)' }} 
              />
              <span className="tm-logo-text" style={{ color: '#ffffff' }}>SURIA DIRGAHAYU</span>
            </a>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '350px' }}>
              Suria Dirgahayu Sdn. Bhd. delivers EPCC industrial engineering, safety structures, and civil works with high efficiency and ESG standards.
            </p>
          </div>
          <div>
            <div className="tm-footer-title">Our Focus</div>
            <ul className="tm-footer-links">
              <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('demolition')} className="tm-footer-link">Demolition Works</a></li>
              <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('civil')} className="tm-footer-link">Civil &amp; Structure</a></li>
              <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('mechanical')} className="tm-footer-link">Mechanical MRO</a></li>
            </ul>
          </div>
          <div>
            <div className="tm-footer-title">Engineering</div>
            <ul className="tm-footer-links">
              <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('electrical')} className="tm-footer-link">Electrical Solutions</a></li>
              <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('scaffolding')} className="tm-footer-link">Scaffolding Systems</a></li>
              <li><a href="#/services" onClick={() => handleSelectServiceFromMenu('fabrication')} className="tm-footer-link">Metal Fabrication</a></li>
            </ul>
          </div>
          <div>
            <div className="tm-footer-title">Contact Us</div>
            <ul className="tm-footer-links" style={{ fontSize: '0.85rem', lineHeight: '1.5', color: '#8b9bb4', gap: '1rem' }}>
              <li>
                <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>OFFICE DIRECT LINE</span>
                <span style={{ color: '#ffffff', fontWeight: 700 }}>+603-8991-3210</span>
              </li>
              <li>
                <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>PROPOSALS DESK</span>
                <a href="mailto:eng.proposals@suriadirgahayu.com" style={{ color: '#ffffff', fontWeight: 700, textDecoration: 'underline' }}>eng.proposals@suriadirgahayu.com</a>
              </li>
              <li>
                <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>KUALA LUMPUR HQ</span>
                <span style={{ color: '#ffffff', fontSize: '0.82rem' }}>Vertical Corporate Tower, Bangsar South City</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="tm-footer-bottom">
          <div>© {new Date().getFullYear()} Suria Dirgahayu Sdn. Bhd. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#/about" className="tm-footer-link">About Us</a>
            <a href="#/contact" className="tm-footer-link">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
