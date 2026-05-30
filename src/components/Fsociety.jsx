import React from 'react';
import { Link } from 'react-router-dom';
import './Fsociety.css';

const Fsociety = () => {
  const tags = [
    { label: 'Offensive Security', color: '#00d9ff', bg: 'rgba(0,217,255,0.08)', border: 'rgba(0,217,255,0.2)' },
    { label: 'CTF Team',           color: '#a855f7', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)' },
    { label: 'Open-Source Tools',  color: '#10b981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)' },
    { label: 'Research Collective',color: '#f59e0b', bg: 'rgba(245,158,11,0.08)',  border: 'rgba(245,158,11,0.2)' },
  ];

  return (
    <section id="fsociety" className="fsociety-section">
      <div className="section-container">
        <div className="fsociety-inline-row">

          {/* Left: icon + name + tags */}
          <div className="fsociety-inline-left">
            <span className="fsociety-icon-dot">
              <i className="fas fa-user-secret"></i>
            </span>

            <div className="fsociety-inline-text">
              <div className="fsociety-name-line">
                <span className="fsociety-org-name">Fsociety pk</span>
                <a
                  href="https://fsocietypk.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="fsociety-live-chip"
                >
                  <i className="fas fa-circle"></i> fsocietypk.tech
                </a>
              </div>

              <div className="fsociety-tags-row">
                {tags.map((t, i) => (
                  <span
                    key={i}
                    className="fsociety-tag"
                    style={{ color: t.color, backgroundColor: t.bg, borderColor: t.border }}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <Link to="/fsociety" className="fsociety-inline-cta">
            Explore Hub <i className="fas fa-arrow-right"></i>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Fsociety;
