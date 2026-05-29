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

            <div className="ctf-metrics-strip">
              <div className="metric-box">
                <span className="metric-val">Top 2%</span>
                <span className="metric-lbl">TryHackMe Global</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">Rank 22</span>
                <span className="metric-lbl">Ramadan CTF 2026</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">5800 pts</span>
                <span className="metric-lbl">picoCTF Personal Score</span>
              </div>
            </div>

            <div className="ctf-summary-cta">
              <Link to="/ctfs" className="btn btn-primary ctf-summary-btn">
                View Full CTF Writeups &amp; Metrics <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtfsSummary;
