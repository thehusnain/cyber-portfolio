import React from 'react';
import { Link } from 'react-router-dom';
import './Fsociety.css';

const Fsociety = () => {
  return (
    <section id="fsociety" className="fsociety-section">
      <div className="section-container">
        
        <div className="fsociety-compact-card">
          <div className="fsociety-logo-inner">
            <i className="fas fa-user-secret" />
          </div>
          
          <div className="fsociety-compact-info">
            <h2>Fsociety pk</h2>
            
            <div className="fsociety-badge-row">
              <span className="fsociety-badge">Research Collective</span>
              <span className="fsociety-badge live-badge">
                <i className="fas fa-globe"></i> Live: <a href="https://fsocietypk.tech" target="_blank" rel="noreferrer">fsocietypk.tech</a>
              </span>
            </div>
            
            <p className="fsociety-tagline">
              A cybersecurity group founded to advance offensive security research and publish open-source tools. 
              Our official collective research hub is live at <a href="https://fsocietypk.tech" target="_blank" rel="noreferrer" className="highlight">fsocietypk.tech</a>.
            </p>
            
            <div className="fsociety-overview-cta">
              <Link to="/fsociety" className="btn btn-primary">
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
