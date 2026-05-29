import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Certifications.css';

const DEFAULT_CERTS = [
  {
    img: "/assets/readteamcertificate.png",
    title: "Certified Threat Intelligence & Governance Analyst (CTIGA)",
    issuer: "Red Team Leaders",
    desc: "Advanced knowledge in threat intelligence methodologies, active security governance frameworks, and forensic mapping.",
    date: "Feb 2026",
    icon: "fa-shield-halved"
  },
  {
    img: "/assets/presecuirty.png",
    title: "Pre Security Learning Path",
    issuer: "TryHackMe",
    desc: "Comprehensive foundational coverage in networking concepts, operating systems, web applications, and cyber theory.",
    date: "2026",
    icon: "fa-network-wired"
  }
];

const Certifications = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    const savedCerts = localStorage.getItem('portfolio-certs');
    if (savedCerts) {
      try {
        const parsed = JSON.parse(savedCerts);
        // Only show first two featured certs on homepage
        setCerts(parsed.slice(0, 2));
      } catch (e) {
        setCerts(DEFAULT_CERTS);
      }
    } else {
      setCerts(DEFAULT_CERTS);
      localStorage.setItem('portfolio-certs', JSON.stringify(DEFAULT_CERTS));
    }
  }, []);

  return (
    <section id="certifications">
      <div className="section-container">
        <h2>Certifications</h2>
        
        <div className="certifications-grid">
          {certs.map((cert, index) => (
            <div key={index} className="cert-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="cert-card-header">
                <div className="cert-icon-wrap">
                  <i className={`fas ${cert.icon || "fa-award"}`}></i>
                </div>
                <div className="cert-meta">
                  <span className="cert-date">{cert.date || "2026"}</span>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
              <h3 className="cert-card-title">{cert.title}</h3>
              <p className="cert-description">{cert.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="certifications-cta">
          <Link to="/certificates" className="btn btn-primary cert-view-all-btn">
            <i className="fas fa-award"></i> View All Certificates &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
export { DEFAULT_CERTS };
