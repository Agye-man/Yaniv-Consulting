import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'expertise', label: 'EXPERTISE' },
    { id: 'approach', label: 'APPROACH' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Left Side: Brand Identity */}
        <div className="brand-wrapper" onClick={() => handleNavClick('home')}>
          <div className="logo-box">
            <img src="/yc_logo.png" alt="YC Logo" className="logo-img" />
          </div>
          <div className="brand-text">
            <span className="brand-name">YANIV</span>
            <span className="brand-sub">CONSULTING SERVICE</span>
          </div>
          <div className="brand-divider"></div>
          <div className="brand-tagline">
            <span>TRANSFORMING</span>
            <span>ORGANIZATIONS</span>
            <span>FROM WITHIN</span>
          </div>
        </div>

        {/* Right Side: Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-links-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link-btn ${activePage === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            id="nav-connect-btn"
            onClick={() => handleNavClick('contact')}
            className="btn-connect"
          >
            CONNECT
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-links-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-link-btn ${activePage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              id="mobile-nav-connect-btn"
              onClick={() => handleNavClick('contact')}
              className="mobile-btn-connect"
            >
              CONNECT
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
