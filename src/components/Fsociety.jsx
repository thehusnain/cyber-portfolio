import React from 'react';
import { Link } from 'react-router-dom';
import './Fsociety.css';

const Fsociety = () => {
  return (
    <section id="fsociety" className="fsociety-section">
      <div className="section-container">
        
        {/* Header - badge moved below title */}
        <div className="fsociety-header">
          <h2>FSOCIETY-PK</h2>
          <div style={{ marginTop: '1.25rem' }}>
            <span className="fsociety-badge">Research Collective</span>
          </div>
          <p className="fsociety-tagline">
            Building open-source security tools and fostering cybersecurity education in Pakistan.
          </p>
        </div>

        {/* Card Container */}
        <div className="fsociety-card" style={{ gridTemplateColumns: '1fr' }}>
          <div className="fsociety-brand-col" style={{ borderRight: 'none', padding: '3.5rem 2.5rem' }}>
            <div className="fsociety-logo-wrap">
              <div className="fsociety-logo-inner">
                <i className="fas fa-user-secret" />
              </div>
            </div>
            <div className="fsociety-org-name">FSOCIETY-PK</div>
            <div className="fsociety-founder-badge">
              <i className="fas fa-crown" /> Founder &amp; Lead
            </div>

            <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem auto', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              FSOCIETY-PK is a cybersecurity group founded to advance offensive security research, 
              participate in Capture The Flag challenges, and publish open-source security tools. 
              Explore our core objectives, documentation, and tools list on our dedicated hub.
            </p>

            <div className="fsociety-overview-cta">
              <Link to="/fsociety" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
                Explore Organization Hub <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Fsociety;
