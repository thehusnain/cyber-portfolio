import React from 'react';
import { Link } from 'react-router-dom';
import './CtfsSummary.css';

const CtfsSummary = () => {
  return (
    <section id="ctfs-summary" className="ctfs-summary-section">
      <div className="section-container">
        <h2>CTF Competitions</h2>
        <p className="ctfs-summary-subtitle">
          Ethical hacking operations, global team ranks, and solved challenges in high-level tournaments.
        </p>

        <div className="ctf-summary-card fade-in">
          <div className="ctf-summary-info">
            <div className="ctf-summary-badge">
              <i className="fas fa-flag"></i> Active CTF Player
            </div>
            <h3>Competitive Security &amp; Exploitation</h3>
            <p>
              I actively participate in international Capture The Flag (CTF) challenges representing team 
              <strong> FSOCIETY</strong>. We solve advanced cryptography puzzles, reverse engineer binary payloads, 
              discover hidden forensic indicators, and exploit vulnerable web infrastructures under intense time constraints.
            </p>

            <div className="ctf-summary-cta">
              <Link to="/ctfs" className="btn btn-primary ctf-summary-btn">
                View All CTFs <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtfsSummary;
