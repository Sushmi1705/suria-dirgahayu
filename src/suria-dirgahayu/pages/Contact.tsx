import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceCategory: 'engineering',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="tm-contact-view">
      <section className="tm-page-header">
        <div className="tm-hero-bg-container">
          <div className="tm-hero-bg-image"></div>
        </div>
        <div className="tm-page-header-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1 className="tm-reveal">Contact Our Specialists</h1>
            <p className="tm-reveal tm-delay-100">
              Book a project consultation or request budget proposals. Our senior engineers respond within 24 hours.
            </p>
          </div>
          <div className="tm-card tm-reveal tm-delay-200" style={{ borderTop: '4px solid var(--primary)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '0.1em' }}>
              CONNECTIVITY PORTAL // ACTIVE
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--gold)', position: 'relative' }}>
                <span className="tm-radar-ring" style={{ width: '20px', height: '20px' }}></span>
              </div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>RESPONSE TARGET: &lt; 24 HOURS</div>
            </div>
            <div style={{ height: '1px', backgroundColor: 'var(--border-color)' }}></div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Estimates hotline and email proposals desk are currently active. Send your specs for immediate review.
            </div>
          </div>
        </div>
      </section>

      <section className="tm-section">
        <div className="tm-container">
          <div className="tm-contact-layout">
            
            {/* Left side details */}
            <div style={{ textAlign: 'left' }}>
              <h2 className="tm-section-title" style={{ textAlign: 'left', fontSize: '1.75rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '2.5rem' }}>
                Whether you need a full EPCC proposal or rotating machinery overhaul resources, our team is equipped to support your operational needs safely and promptly.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontWeight: 700, fontSize: '0.95rem' }}>
                <div>
                  <div style={{ color: 'var(--primary)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>ESTIMATES HOTLINE</div>
                  <div style={{ color: 'var(--text-main)' }}>+603-8991-3210</div>
                </div>

                <div>
                  <div style={{ color: 'var(--primary)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>EMAIL INQUIRIES</div>
                  <div style={{ color: 'var(--text-main)' }}>eng.proposals@suriadirgahayu.com</div>
                </div>

                <div>
                  <div style={{ color: 'var(--primary)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>OFFICE ADDRESS</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: 500, lineHeight: 1.5 }}>
                    Suria Dirgahayu Sdn. Bhd.<br/>
                    Unit 12-4, Level 12, Tower A, Vertical Corporate Tower,<br/>
                    Bangsar South City, 59200 Kuala Lumpur, Malaysia
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="tm-card" style={{ padding: '2.5rem' }}>
              {submitted ? (
                <div style={{ padding: '2rem 0', textAlign: 'center' }}>
                  <h3 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.75rem' }}>Request Received</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    Thank you, {formData.name}. Our engineering proposals team will review your specifications and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'left' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.35rem' }}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.35rem' }}>Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.35rem' }}>Service Category</label>
                    <select
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none', backgroundColor: '#ffffff' }}
                    >
                      <option value="engineering">EPCC Civil &amp; Mechanical</option>
                      <option value="electrical">Low Voltage Cabling (ST)</option>
                      <option value="scaffolding"> modular scaffolding tag logs</option>
                      <option value="credit">Receivables risk recovery</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.35rem' }}>Message / Specifications *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none', resize: 'none' }}
                    ></textarea>
                  </div>

                  <button type="submit" className="tm-btn tm-btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    Send Estimate Request
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
