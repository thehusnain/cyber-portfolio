import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Desktop Collapse State - Persisted in localStorage!
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(() => {
    return localStorage.getItem('sidebar-desktop-collapsed') === 'true';
  });

  useEffect(() => {
    if (isDesktopCollapsed) {
      document.body.classList.add('sidebar-hidden');
    } else {
      document.body.classList.remove('sidebar-hidden');
    }
  }, [isDesktopCollapsed]);

  const toggleSidebarDesktop = () => {
    const nextVal = !isDesktopCollapsed;
    setIsDesktopCollapsed(nextVal);
    localStorage.setItem('sidebar-desktop-collapsed', String(nextVal));
  };

  const navLinks = [
    { name: 'Home',         path: '/#home',           icon: 'fa-home' },
    { name: 'About',        path: '/#about',          icon: 'fa-user' },
    { name: 'FSOCIETY-PK', path: '/fsociety',         icon: 'fa-user-secret' },
    { name: 'Experience',   path: '/#experience',     icon: 'fa-briefcase' },
    { name: 'Certificates', path: '/#certifications', icon: 'fa-award' },
    { name: 'CTFs',         path: '/ctfs',            icon: 'fa-flag' },
    { name: 'Projects',     path: '/#projects',       icon: 'fa-code' },
    { name: 'Resume/CV',    path: '/#downloads',      icon: 'fa-file-pdf' },
    { name: 'Contact',      path: '/#contact',        icon: 'fa-envelope' },
  ];

  return (
    <>
      {/* Floating Restore Hamburger Button when desktop sidebar is collapsed */}
      {isDesktopCollapsed && (
        <button 
          className="sidebar-expand-floating" 
          onClick={toggleSidebarDesktop}
          title="Expand Sidebar Navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
      )}

      {/* Floating Theme Toggle — top-right on desktop */}
      <button
        className="theme-toggle-floating"
        onClick={onToggleTheme}
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        aria-label="Toggle Theme"
      >
        {theme === 'dark'
          ? <><i className="fas fa-sun"></i><span>Light</span></>
          : <><i className="fas fa-moon"></i><span>Dark</span></>
        }
      </button>

      {/* Mobile Header Bar */}
      <header className="mobile-header">
        <div className="mobile-logo">&lt;_husnain</div>
        <div className="mobile-actions">
          <button className="theme-btn-mobile" onClick={onToggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
          <button
            className={`sidebar-toggle ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <nav className={`sidebar-nav ${isOpen ? 'active' : ''}`} id="sidebarNav">
        <div className="sidebar-inner">
          <div className="sidebar-brand">
            <div className="brand-header-flex">
              <div className="sidebar-logo">&lt;_husnain</div>
              {/* Desktop collapse button inside the brand section */}
              <button 
                className="desktop-collapse-toggle" 
                onClick={toggleSidebarDesktop}
                title="Collapse Sidebar"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
            </div>
            <div className="sidebar-tagline">cybersec student · researcher</div>
          </div>

          <div className="sidebar-links">
            {navLinks.map((link, i) => (
              <Link to={link.path} key={i} onClick={() => setIsOpen(false)}>
                <i className={`fas ${link.icon}`}></i>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="sidebar-overlay active" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Navigation;
