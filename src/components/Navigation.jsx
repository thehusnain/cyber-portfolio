import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Scroll logic to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 15;
      
      // Don't hide navbar if mobile menu is open
      if (!isOpen) {
        setVisible(isVisible);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isOpen]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname, location.hash]);

  const mainLinks = [
    { name: 'Home', path: '/#home', icon: 'fa-home' },
    { name: 'About', path: '/#about', icon: 'fa-user' },
    { name: 'Experience', path: '/#experience', icon: 'fa-briefcase' },
    { name: 'Projects', path: '/#projects', icon: 'fa-code' },
    { name: 'Contact', path: '/#contact', icon: 'fa-envelope' },
  ];

  const dropdownLinks = [
    { name: 'Certificates', path: '/certificates', icon: 'fa-award', desc: 'Credentials & achievements' },
    { name: 'CTFs', path: '/ctfs', icon: 'fa-flag', desc: 'Capture The Flag writeups' },
    { name: 'Fsociety pk', path: '/fsociety', icon: 'fa-user-secret', desc: 'Cybersecurity team info' },
    { name: 'Internship', path: '/internship', icon: 'fa-user-shield', desc: 'Professional experience' },
    { name: 'Resume/CV', path: '/#downloads', icon: 'fa-file-pdf', desc: 'Download PDF resume' },
  ];

  const handleLinkClick = (path) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isLinkActive = (path) => {
    if (path.startsWith('/#')) {
      const sectionId = path.replace('/#', '');
      return location.pathname === '/' && location.hash === `#${sectionId}`;
    }
    return location.pathname === path;
  };

  return (
    <>
      <header className={`top-navbar ${visible ? 'nav-visible' : 'nav-hidden'} ${isOpen ? 'menu-expanded' : ''} theme-${theme}`}>
        <div className="navbar-container">
          


          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            {mainLinks.map((link, i) => (
              <Link 
                to={link.path} 
                key={i} 
                className={`nav-item ${isLinkActive(link.path) ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.path)}
              >
                <i className={`fas ${link.icon}`}></i>
                <span>{link.name}</span>
              </Link>
            ))}

            {/* Dropdown for More Pages */}
            <div 
              className={`nav-item-dropdown-container ${dropdownOpen ? 'open' : ''}`}
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button 
                className="nav-item dropdown-trigger"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <i className="fas fa-ellipsis-h"></i>
                <span>More</span>
                <i className="fas fa-chevron-down arrow-icon"></i>
              </button>

              <div className="nav-dropdown-menu">
                <div className="dropdown-grid">
                  {dropdownLinks.map((link, i) => (
                    <Link 
                      to={link.path} 
                      key={i} 
                      className={`dropdown-link-item ${isLinkActive(link.path) ? 'active' : ''}`}
                      onClick={() => handleLinkClick(link.path)}
                    >
                      <div className="dropdown-link-icon">
                        <i className={`fas ${link.icon}`}></i>
                      </div>
                      <div className="dropdown-link-details">
                        <span className="dropdown-link-name">{link.name}</span>
                        <span className="dropdown-link-desc">{link.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Actions: Theme toggle & Hamburger menu */}
          <div className="navbar-actions">
            <button 
              className="theme-toggle-btn" 
              onClick={onToggleTheme} 
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
            
            <button 
              className={`mobile-menu-toggle ${isOpen ? 'open' : ''}`} 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Menu Drawer */}
        <div className={`mobile-nav-drawer ${isOpen ? 'active' : ''}`}>
          <div className="mobile-drawer-inner">
            <div className="mobile-drawer-section">
              <span className="mobile-section-label">Sections</span>
              <div className="mobile-links-vertical">
                {mainLinks.map((link, i) => (
                  <Link 
                    to={link.path} 
                    key={i} 
                    className={`mobile-nav-item ${isLinkActive(link.path) ? 'active' : ''}`}
                    onClick={() => handleLinkClick(link.path)}
                  >
                    <div className="mobile-item-icon">
                      <i className={`fas ${link.icon}`}></i>
                    </div>
                    <span className="mobile-item-title">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mobile-drawer-section">
              <span className="mobile-section-label">Resources &amp; Pages</span>
              <div className="mobile-links-vertical">
                {dropdownLinks.map((link, i) => (
                  <Link 
                    to={link.path} 
                    key={i} 
                    className={`mobile-nav-item ${isLinkActive(link.path) ? 'active' : ''}`}
                    onClick={() => handleLinkClick(link.path)}
                  >
                    <div className="mobile-item-icon secondary">
                      <i className={`fas ${link.icon}`}></i>
                    </div>
                    <div className="mobile-item-details">
                      <span className="mobile-item-title">{link.name}</span>
                      <span className="mobile-item-desc">{link.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="drawer-overlay active" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Navigation;
