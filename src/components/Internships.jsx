import React, { useState, useEffect } from 'react';
import './Internships.css';

const DEFAULT_INTERNSHIPS = [
  {
    company: "Secure Dev Labs",
    role: "Ethical Hacking Intern",
    instructor: "Muhammad Saad Rajput",
    repoLink: "https://github.com/thehusnain/SDL-Internship",
    certificateLink: "/assets/internships/securedevlabs/secure-dev-labs.jpg",
    desc: "One-month hands-on internship focusing on reconnaissance, web mapping, vulnerability validation, and structured reporting. Track: Ethical Hacking. Intern: Husnain Fiaz."
  }
];

const Internships = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-internships');
    if (saved) {
      try {
        let parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Force filter out the Red Team Labs internship
          parsed = parsed.filter(item => item.company !== "Red Team Labs" && !item.role.includes("Research Intern"));
          setInternships(parsed);
          localStorage.setItem('portfolio-internships', JSON.stringify(parsed));
        } else {
          setInternships(DEFAULT_INTERNSHIPS);
          localStorage.setItem('portfolio-internships', JSON.stringify(DEFAULT_INTERNSHIPS));
        }
      } catch (e) {
        setInternships(DEFAULT_INTERNSHIPS);
      }
    } else {
      setInternships(DEFAULT_INTERNSHIPS);
      localStorage.setItem('portfolio-internships', JSON.stringify(DEFAULT_INTERNSHIPS));
    }
  }, []);

  return (
    <section id="internships" className="internships-section">
      <div className="section-container">
        <h2>Internships</h2>
        <p className="internships-subtitle">
          Professional training, governance research, and secure software development internships.
        </p>

        <div className="internships-grid">
          {internships.map((intern, index) => (
            <div key={index} className="intern-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="intern-card-header">
                <div className="intern-company-logo">
                  <i className="fas fa-building"></i>
                </div>
                <div className="intern-meta">
                  <h3 className="intern-role">{intern.role}</h3>
                  <span className="intern-company">{intern.company}</span>
                </div>
              </div>

              <div className="intern-card-body">
                <p className="intern-desc">{intern.desc}</p>
                
                <div className="intern-details-list">
                  <div className="intern-detail-item">
                    <i className="fas fa-chalkboard-user icon"></i>
                    <span><strong>Instructor:</strong> {intern.instructor}</span>
                  </div>
                </div>
              </div>

              <div className="intern-card-actions">
                {intern.repoLink && (
                  <a href={intern.repoLink} className="btn btn-secondary intern-action-btn" target="_blank" rel="noreferrer">
                    <i className="fab fa-github" /> Repository
                  </a>
                )}
                {intern.certificateLink && (
                  <a href={intern.certificateLink} className="btn btn-primary intern-action-btn" target="_blank" rel="noreferrer">
                    <i className="fas fa-award" /> Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
export { DEFAULT_INTERNSHIPS };
