import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from '../components/Icons';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';

interface ContactProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    serviceCategory: string;
    message: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleContactSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}
export default function Contact({
  formData,
  handleInputChange,
  handleContactSubmit,
  isSubmitting
}: ContactProps) {

  return (
    <div className="contact-page-container">
      <section className="page-header-section">
        <HeroBackground isStatic={true} page="contact" />
        <div className="container page-header animate-slide-up">
          <div className="page-header-card">
            <div style={{ position: 'relative', zIndex: 5 }}>
              <h1 className="page-title gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem' }}>
                Request a Consultation
              </h1>
              <p className="page-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                Reach out to our engineering office or credit recovery division. Get detailed estimates, compliance reviews, and service pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section & Form */}
      <section id="contact" className="section reveal">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h3 className="contact-info-title">Let's build the future together</h3>
              <p style={{ color: 'var(--text-muted)', textAlign: 'left', lineHeight: 1.7 }}>
                Have an upcoming plant turnaround, complex electrical cabling project, structural steel build, or corporate receivables dispute? Complete the form to establish contact with our technical estimators.
              </p>

              <div className="contact-details">
                {/* Address Card Link */}
                <a 
                  href="https://maps.google.com/?q=NO.23-G,+JALAN+BULAN+BL+U5/BL,+BANDAR+PINGGIRAN+SUBANG,+SEKSYEN+U5,+40150+SHAH+ALAM,+SELANGOR+DARUL+EHSAN."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-link glass-spotlight spotlight-border tilt-card border-beam-card"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  style={{ '--i': 0 } as React.CSSProperties}
                >
                  <div className="contact-card-icon">
                    <MapPinIcon size={24} />
                  </div>
                  <div className="contact-card-text-group">
                    <span className="contact-card-label">Registered Office</span>
                    <div className="contact-card-value" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                      NO.23-G, JALAN BULAN BL U5/BL, BANDAR PINGGIRAN SUBANG, SEKSYEN U5, 40150 SHAH ALAM, SELANGOR DARUL EHSAN.
                    </div>
                  </div>
                </a>

                {/* Hotline Card Link */}
                <a 
                  href="tel:+60376298830"
                  className="contact-card-link glass-spotlight spotlight-border tilt-card border-beam-card"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  style={{ '--i': 1 } as React.CSSProperties}
                >
                  <div className="contact-card-icon">
                    <PhoneIcon size={24} />
                  </div>
                  <div className="contact-card-text-group">
                    <span className="contact-card-label">Call Office Hotline</span>
                    <div className="contact-card-value">+60 3-7629 8830</div>
                  </div>
                </a>

                {/* Email Card Link */}
                <a 
                  href="mailto:suriadirgahayusdnbhd@gmail.com"
                  className="contact-card-link glass-spotlight spotlight-border tilt-card border-beam-card"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  style={{ '--i': 2 } as React.CSSProperties}
                >
                  <div className="contact-card-icon">
                    <MailIcon size={24} />
                  </div>
                  <div className="contact-card-text-group">
                    <span className="contact-card-label">Direct Email Support</span>
                    <div className="contact-card-value">suriadirgahayusdnbhd@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            <form 
              className="form-card glass-spotlight spotlight-border tilt-card border-beam-card" 
              onSubmit={handleContactSubmit}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="form-grid">
                {/* Full Name */}
                <div className="floating-input-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder=" "
                    value={formData.name}
                    onChange={handleInputChange}
                    className="floating-input"
                  />
                  <label htmlFor="name" className="floating-label">Full Name *</label>
                </div>

                {/* Email Address */}
                <div className="floating-input-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder=" "
                    value={formData.email}
                    onChange={handleInputChange}
                    className="floating-input"
                  />
                  <label htmlFor="email" className="floating-label">Email Address *</label>
                </div>

                {/* Phone Number */}
                <div className="floating-input-group">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="floating-input"
                  />
                  <label htmlFor="phone" className="floating-label">Phone Number</label>
                </div>

                {/* Company Name */}
                <div className="floating-input-group">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder=" "
                    value={formData.company}
                    onChange={handleInputChange}
                    className="floating-input"
                  />
                  <label htmlFor="company" className="floating-label">Company Name</label>
                </div>

                {/* Service Category (Select) */}
                <div className="floating-input-group form-group-full">
                  <select
                    id="serviceCategory"
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleInputChange}
                    className="floating-input"
                  >
                    <option value="engineering">Industrial Engineering & Construction</option>
                    <option value="electrical">Electrical Engineering Solutions (ST Certified)</option>
                    <option value="manpower">Specialist Technical Manpower Supply</option>
                    <option value="renovation">Commercial Renovation & Upgrades</option>
                    <option value="debt">Debt Recovery & Receivable Collections</option>
                  </select>
                  <label htmlFor="serviceCategory" className="floating-label">Primary Service Area *</label>
                </div>

                {/* Message (Textarea) */}
                <div className="floating-input-group form-group-full">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder=" "
                    value={formData.message}
                    onChange={handleInputChange}
                    className="floating-input"
                  />
                  <label htmlFor="message" className="floating-label">Message Details *</label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                {isSubmitting ? 'Submitting Details...' : 'Send Consultation Request'} <SendIcon size={16} />
              </button>
            </form>
          </div>

          {/* Embedded Google Map HQ operations console */}
          <div className="map-section-container reveal">
            <div className="map-header">
              <div className="map-header-title">
                <MapPinIcon size={18} className="gold-text" />
                <span>HQ Operations Console</span>
              </div>
              <span className="badge">GPS: 3.1664° N, 101.5360° E</span>
            </div>
            <div className="map-iframe-wrapper">
              <iframe 
                title="Suria Dirgahayu Office Map"
                src="https://maps.google.com/maps?q=NO.23-G,%20JALAN%20BULAN%20BL%20U5/BL,%20BANDAR%20PINGGIRAN%20SUBANG,%2040150%20SHAH%20ALAM,%20SELANGOR&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="dark-map-iframe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
