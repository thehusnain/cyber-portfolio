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
  },
  {
    img: "/assets/certificate-of-appreciation.png",
    title: "Certificate of Appreciation",
    issuer: "Govt Akhter Nawaz Khan Shaheed Degree College, KTS, Haripur",
    desc: "Awarded for representing the college in cybersecurity and demonstrating technical excellence.",
    date: "2026",
    icon: "fa-award"
  }
];

const Certifications = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    const savedCerts = localStorage.getItem('portfolio-certs');
    if (savedCerts) {
      try {
        const parsed = JSON.parse(savedCerts);

        // Force inject new certificate if missing, or update date if stored as 2025
        const hasAppreciation = parsed.some(c => c.title.includes("Appreciation"));
        if (!hasAppreciation) {
          const updated = [...parsed, DEFAULT_CERTS[2]];
          localStorage.setItem('portfolio-certs', JSON.stringify(updated));
          setCerts(updated.slice(0, 3));
        } else {
          let modified = false;
          parsed.forEach(c => {
            if (c.title.includes("Appreciation") && c.date === "2025") {
              c.date = "2026";
              modified = true;
            }
          });
          if (modified) {
            localStorage.setItem('portfolio-certs', JSON.stringify(parsed));
          }
          setCerts(parsed.slice(0, 3));
        }
      } catch (e) {
        setCerts(DEFAULT_CERTS.slice(0, 3));
      }
    } else {
      setCerts(DEFAULT_CERTS.slice(0, 3));
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
