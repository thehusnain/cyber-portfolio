import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_INTERNSHIPS } from '../components/Internships';
import './InternshipsPage.css';

const InternshipsPage = () => {
  const [internships, setInternships] = useState([]);
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const saved = localStorage.getItem('portfolio-internships');
    if (saved) {
      try {
        let parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          parsed = parsed.filter(
            item => item.company !== "Red Team Labs" && !item.role.includes("Research Intern")
          );
          // If filtering wiped everything, fall back to defaults
          setInternships(parsed.length > 0 ? parsed : DEFAULT_INTERNSHIPS);
        } else {
          setInternships(DEFAULT_INTERNSHIPS);
        }
      } catch (e) {
        setInternships(DEFAULT_INTERNSHIPS);
      }
    } else {
      setInternships(DEFAULT_INTERNSHIPS);
    }
  }, []);

  return (
    <div className="internships-page-container">
      <Link to="/" className="intern-back-link">
        <i className="fas fa-arrow-left"></i> Back to Portfolio
      </Link>
      
      <header className="internships-page-header">
        <h1>Cybersecurity Internships</h1>
        <p className="internships-page-subtitle">
          Hands-on professional training, ethical hacking labs, vulnerability research, and security engineering.
        </p>
      </header>

      <div className="internships-detailed-list">
        {internships.map((intern, index) => (
          <div key={index} className="intern-detail-card fade-in">
            <div className="intern-card-header">
              <div className="intern-badge">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="intern-main-info">
                <h2 className="intern-role-title">{intern.role}</h2>
                <h3 className="intern-company-title">{intern.company}</h3>
                <div className="intern-instructor">
                  <i className="fas fa-user-tie"></i> <span><strong>Instructor:</strong> {intern.instructor}</span>
                </div>
              </div>
            </div>

            <div className="intern-card-body">
              <div className="intern-description-section">
                <h4>Overview &amp; Responsibilities</h4>
                <p>{intern.desc}</p>
              </div>

              <div className="intern-skills-section">
                <h4>Core Skills &amp; Methodology</h4>
                <div className="intern-skills-tags">
                  <span className="skill-tag"><i className="fas fa-search"></i> Reconnaissance</span>
                  <span className="skill-tag"><i className="fas fa-network-wired"></i> Web Mapping</span>
                  <span className="skill-tag"><i className="fas fa-bug"></i> Vulnerability Validation</span>
                  <span className="skill-tag"><i className="fas fa-file-alt"></i> Structured Reporting</span>
                  <span className="skill-tag"><i className="fas fa-shield-virus"></i> Ethical Hacking</span>
                </div>
              </div>

              {intern.certificateLink && intern.certificateLink !== "#" && (
                <div className="intern-certificate-preview-section">
                  <button 
                    className="btn btn-secondary preview-cert-btn"
                    onClick={() => setActiveCert(intern.certificateLink)}
                  >
                    <i className="fas fa-certificate"></i> View Certificate Copy
                  </button>
                </div>
              )}
            </div>

            <div className="intern-card-footer">
              {intern.repoLink && (
                <a href={intern.repoLink} className="btn btn-secondary intern-footer-btn" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i> GitHub Repository
                </a>
              )}
              {intern.certificateLink && intern.certificateLink !== "#" && (
                <a href={intern.certificateLink} download className="btn btn-primary intern-footer-btn">
                  <i className="fas fa-download"></i> Download Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Lightbox Modal with Blur Backdrop */}
      {activeCert && (
        <div className="cert-modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setActiveCert(null)} aria-label="Close View">
              <i className="fas fa-times"></i>
            </button>
            <div className="cert-modal-body">
              <img src={activeCert} alt="Internship Certificate" className="cert-modal-img" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipsPage;
