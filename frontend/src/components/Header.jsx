import { useState } from 'react';
import './Header.css';

const Header = ({ onRequestEstimate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Top Bar - Dark Gray */}
      <div className="header-top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-nav-links">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
              <span className="divider">|</span>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            </div>
            <div className="top-bar-right">
              <button className="btn-estimate" onClick={onRequestEstimate}>
                Request an Estimate
              </button>
              <div className="phone-badge">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.78 10.5a.678.678 0 0 1-.58-.122L6.5 7.78a.678.678 0 0 1-.122-.58l.122-1.034a.678.678 0 0 0-.122-.58L4.654 1.328Z" fill="currentColor"/>
                </svg>
                <a href="tel:9788474141">(978) 847-4141</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Light Gray */}
      <div className="header-main">
        <div className="container">
          <div className="main-header-content">
            <div className="logo-box">
              <img 
                src="/Nov 15, 2025, 03_56_21 PM.png" 
                alt="Budget Bathroom Logo" 
                className="logo-image"
              />
            </div>
            <nav className="main-nav">
              <ul className={`main-nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li>
                  <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                    SHOWERS
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                    BATHTUBS
                  </a>
                </li>
              </ul>
              <button 
                className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

