import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Scroll to Hide / Show Top Bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Show if scrolling up, or if near top
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const mainLinks = [
    { name: 'Home',         path: '/#home',           icon: 'fa-home' },
    { name: 'About',        path: '/#about',          icon: 'fa-user' },
    { name: 'Experience',   path: '/#experience',     icon: 'fa-briefcase' },
    { name: 'Projects',     path: '/#projects',       icon: 'fa-code' },
    { name: 'Resume/CV',    path: '/#downloads',      icon: 'fa-file-pdf' },
    { name: 'Contact',      path: '/#contact',        icon: 'fa-envelope' },
  ];

  const separateLinks = [
    { name: 'Fsociety pk',  path: '/fsociety',        icon: 'fa-user-secret' },
    { name: 'Internship',   path: '/internship',      icon: 'fa-user-shield' },
    { name: 'Certificates', path: '/certificates',    icon: 'fa-award' },
    { name: 'CTFs',         path: '/ctfs',            icon: 'fa-flag' },
  ];

  return (
    <>
      <header className={`top-navbar ${visible ? 'nav-visible' : 'nav-hidden'} theme-${theme}`}>
        <div className="navbar-container">
          {/* Desktop Navigation Blocks */}
          <div className="desktop-nav-block">
            <div className="nav-row main-sections-row">
              {mainLinks.map((link, i) => (
                <Link to={link.path} key={i} className="nav-item">
                  <i className={`fas ${link.icon}`}></i> <span>{link.name}</span>
                </Link>
              ))}
            </div>
            <div className="nav-row separate-pages-row">
              {separateLinks.map((link, i) => (
                <Link to={link.path} key={i} className="nav-item separate-page-item">
                  <i className={`fas ${link.icon}`}></i> <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Actions Column */}
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
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay inside header */}
        <div className={`mobile-nav-drawer ${isOpen ? 'active' : ''}`}>
          <div className="mobile-drawer-section">
            <h3>Portfolio Sections</h3>
            <div className="mobile-links-grid">
              {mainLinks.map((link, i) => (
                <Link to={link.path} key={i} onClick={() => setIsOpen(false)} className="mobile-nav-item">
                  <i className={`fas ${link.icon}`}></i> <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mobile-drawer-section">
            <h3>Dedicated Pages</h3>
            <div className="mobile-links-grid">
              {separateLinks.map((link, i) => (
                <Link to={link.path} key={i} onClick={() => setIsOpen(false)} className="mobile-nav-item separate">
                  <i className={`fas ${link.icon}`}></i> <span>{link.name}</span>
                </Link>
              ))}
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
