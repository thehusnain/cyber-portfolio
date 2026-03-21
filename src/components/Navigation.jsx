import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/#home', icon: 'fa-home' },
    { name: 'About', path: '/#about', icon: 'fa-user' },
    { name: 'THM Stats', path: '/#skills', icon: 'fa-chart-bar' },
    { name: 'Experience', path: '/#experience', icon: 'fa-briefcase' },
    { name: 'Education', path: '/#education', icon: 'fa-graduation-cap' },
    { name: 'Certs', path: '/#certifications', icon: 'fa-award' },
    { name: 'CTFs', path: '/ctfs', icon: 'fa-flag' },
    { name: 'Projects', path: '/#projects', icon: 'fa-code' },
    { name: 'Contact', path: '/#contact', icon: 'fa-envelope' }
  ];

  return (
    <>
      <button 
        className={`sidebar-toggle ${isOpen ? 'open' : ''}`} 
        onClick={handleToggle} 
        aria-label="Toggle menu"
      >
        <span></span><span></span><span></span>
      </button>

      <nav className={`sidebar-nav ${isOpen ? 'active' : ''}`} id="sidebarNav">

        <div className="sidebar-inner">
          <div className="sidebar-brand">
            <div className="sidebar-logo">&gt;_husnain</div>
            <div className="sidebar-tagline">red team · security</div>
          </div>

          <div className="sidebar-profile-mini">
            <img src="/assets/profile.png" alt="Husnain"
                 onError={(e) => e.target.src='https://ui-avatars.com/api/?name=Husnain&background=0a0a0a&color=00FF8C&size=80'} />
            <div className="sidebar-status"><span className="status-dot"></span> Online</div>
          </div>

          <div className="sidebar-links">
            {navLinks.map((link, index) => (
              <Link to={link.path} key={index} onClick={() => setIsOpen(false)}>
                <i className={`fas ${link.icon}`}></i><span>{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="sidebar-socials">
            <a href="https://github.com/thehusnain" target="_blank" rel="noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://tryhackme.com/p/thehusnain" target="_blank" rel="noreferrer" title="TryHackMe"><i className="fas fa-terminal"></i></a>
            <a href="https://linkedin.com/in/husnain-fiaz-7a4761369" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:huxnain.cs@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div 
          className="sidebar-overlay active" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navigation;
