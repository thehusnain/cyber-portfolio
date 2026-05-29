import React from 'react';
import './Downloads.css';

const Downloads = () => {
  return (
    <section id="downloads" className="downloads-section">
      <div className="section-container">
        <h2>Resume/CV</h2>
        <p className="downloads-subtitle">
          Download my latest professional resume / curriculum vitae for review.
        </p>

        <div className="downloads-cards" style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Card: Resume/CV */}
          <div className="dl-card dl-card-primary" style={{ maxWidth: '500px', width: '100%' }}>
            <div className="dl-icon-wrap">
              <i className="fas fa-file-pdf" />
            </div>
            <div className="dl-info">
              <span className="dl-label">Primary Document</span>
              <h3 className="dl-name">Final_resume.pdf</h3>
              <p className="dl-meta">PDF format · Fully Updated</p>
            </div>
            
            <a
              href="/resume/Final_resume.pdf"
              download="Husnain_Resume_CV.pdf"
              className="btn btn-primary dl-btn"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%' }}
            >
              <i className="fas fa-download" /> Download Resume/CV
            </a>
          </div>
        </div>

        {/* Security verification strip */}
        <div className="dl-strip">
          <span><i className="fas fa-check-double" /> Direct secure transfer</span>
          <span><i className="fas fa-shield-halved" /> Malicious code scanned &amp; verified</span>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
