import React from 'react';
import { Link } from 'react-router-dom';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="section-container">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          <div className="cert-card fade-in">
            <div className="cert-icon"><i className="fas fa-shield-alt"></i></div>
            <div className="cert-badge">
              <div className="cert-badge-inner">
                <div className="cert-title">Threat Intel</div>
                <div className="cert-issuer">Red Team Leaders</div>
              </div>
            </div>
            <h3>Certified Threat Intelligence Analyst (CTIGA)</h3>
            <p className="cert-description">
              Expertise in threat intelligence methodologies, governance frameworks, and security analysis techniques.
            </p>
            <div className="cert-footer">
              <span className="cert-date">Feb 2026</span>
            </div>
          </div>

          <div className="cert-card fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="cert-icon"><i className="fas fa-user-shield"></i></div>
            <div className="cert-badge">
              <div className="cert-badge-inner">
                <div className="cert-title">Learning Path</div>
                <div className="cert-issuer">TryHackMe</div>
              </div>
            </div>
            <h3>Pre Security Learning Path</h3>
            <p className="cert-description">
              Completed foundational training in networking, web technologies, Linux basics, and core cybersecurity concepts.
            </p>
            <div className="cert-footer">
              <span className="cert-date">2026</span>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/certificates" className="btn btn-primary cyber-btn" style={{ display: 'inline-block', padding: '1rem 2.5rem', letterSpacing: '1px' }}>
            <i className="fas fa-award" style={{ marginRight: '0.5rem' }}></i> View All Certificates &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
