import React, { useState } from 'react';
import './Downloads.css';

const Downloads = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2500);
  };

  return (
    <section id="downloads" className="downloads-section">
      <div className="section-container">
        <h2 className="downloads-title">Resume <span>&amp;</span> CV</h2>
        <p className="downloads-subtitle">
          Download my latest resume or view my full CV
        </p>

        <div className="downloads-cards">
          {/* ── Primary: Final Resume ── */}
          <div className="dl-card dl-card-primary">
            <div className="dl-card-glow" />
            <div className="dl-icon-wrap">
              <i className="fas fa-file-pdf" />
              <div className="dl-icon-ring" />
            </div>
            <div className="dl-info">
              <div className="dl-label">Latest Resume</div>
              <div className="dl-name">Final_Resume.pdf</div>
              <div className="dl-meta">PDF · Updated 2026</div>
            </div>
            <a
              href="/assets/resume/Final_Resume.pdf"
              download="Husnain_Final_Resume.pdf"
              className={`dl-btn dl-btn-primary ${downloading ? 'dl-downloading' : ''}`}
              onClick={handleDownload}
            >
              <span className="dl-btn-idle">
                <i className="fas fa-download" /> Download
              </span>
              <span className="dl-btn-loading">
                <i className="fas fa-spinner fa-spin" /> Downloading…
              </span>
              <span className="dl-btn-done">
                <i className="fas fa-check" /> Done!
              </span>
              <div className="dl-btn-trail" />
            </a>
          </div>

          {/* ── Secondary: CV ── */}
          <div className="dl-card">
            <div className="dl-icon-wrap dl-icon-wrap-alt">
              <i className="fas fa-file-alt" />
              <div className="dl-icon-ring dl-icon-ring-alt" />
            </div>
            <div className="dl-info">
              <div className="dl-label">Curriculum Vitae</div>
              <div className="dl-name">Husnain-CV.pdf</div>
              <div className="dl-meta">PDF · Full Details</div>
            </div>
            <a
              href="/assets/Husnain-CV.pdf"
              download="Husnain_CV.pdf"
              className="dl-btn dl-btn-secondary"
            >
              <i className="fas fa-download" /> Download CV
            </a>
          </div>
        </div>

        {/* ── Decorative data strip ── */}
        <div className="dl-strip">
          <span><i className="fas fa-lock" /> AES-256 Encrypted Transfer</span>
          <span><i className="fas fa-shield-alt" /> Verified Document</span>
          <span><i className="fas fa-clock" /> April 2026</span>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
