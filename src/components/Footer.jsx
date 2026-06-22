import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand Info */}
        <div className="footer-brand-col">
          <div className="footer-logo-row">
            <div className="footer-logo-box">
              <img src="/yc_logo.png" alt="YC Logo" />
            </div>
            <div className="footer-brand-text">
              <span className="footer-brand-name">YANIV.</span>
              <span className="footer-brand-sub">CONSULTING SERVICE</span>
            </div>
          </div>
          <div className="social-icons" style={{ marginTop: '1.5rem' }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin" width="18" height="18">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter" width="18" height="18">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-col">
          <h4 className="footer-heading">QUICK LINKS</h4>
          <ul className="footer-links">
            <li><button onClick={() => handleNavClick('about')}>About Us</button></li>
            <li><button onClick={() => handleNavClick('expertise')}>Expertise</button></li>
            <li><button onClick={() => handleNavClick('approach')}>Our Approach</button></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact-col">
          <h4 className="footer-heading">CONTACT INFO</h4>
          <ul className="footer-contact-list">
            <li>
              <Mail size={16} />
              <span>info@yanivconsulting.com</span>
            </li>
            <li>
              <Phone size={16} />
              <span>+1 (555) 019-2834</span>
            </li>
            <li>
              <MapPin size={16} />
              <span>100 Corporate Parkway, Suite 500, NY</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <span>&copy; {new Date().getFullYear()} YANIV Consulting Service. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>&middot;</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
