import React from 'react';
import './Fsociety.css';

const Fsociety = () => {
  return (
    <section id="fsociety" className="fsociety-section">
      <div className="section-container">

        {/* ── Header ── */}
        <div className="fsociety-header">
          <div className="fsociety-badge">[ ORGANIZATION ]</div>
          <h2 className="glitch" data-text="FSOCIETY-PK">FSOCIETY-PK</h2>
          <p className="fsociety-tagline">
            "We are finally free. We are finally awake."
          </p>
        </div>

        {/* ── Main card ── */}
        <div className="fsociety-card">
          <div className="fsociety-card-glow" />

          {/* Left: branding */}
          <div className="fsociety-brand-col">
            <div className="fsociety-logo-wrap">
              <div className="fsociety-logo-ring ring-a" />
              <div className="fsociety-logo-ring ring-b" />
              <div className="fsociety-logo-inner">
                <i className="fas fa-user-secret" />
              </div>
            </div>
            <div className="fsociety-org-name">FSOCIETY-PK</div>
            <div className="fsociety-founder-badge">
              <i className="fas fa-crown" /> FOUNDER
            </div>

            <div className="fsociety-links">
              <a
                href="https://fsocietypk.tech"
                target="_blank"
                rel="noreferrer"
                className="fsociety-link"
              >
                <i className="fas fa-globe" />
                fsocietypk.tech
              </a>
              <a
                href="https://github.com/orgs/fsociety-pk/dashboard"
                target="_blank"
                rel="noreferrer"
                className="fsociety-link"
              >
                <i className="fab fa-github" />
                github/fsociety-pk
              </a>
            </div>
          </div>

          {/* Right: details */}
          <div className="fsociety-detail-col">
            <div className="fsociety-terminal">
              <div className="fsociety-terminal-bar">
                <span className="td td-r" /><span className="td td-y" /><span className="td td-g" />
                <span className="fsociety-terminal-title">fsociety-pk.sh</span>
              </div>
              <div className="fsociety-terminal-body">
                <p><span className="fs-prompt">$</span> <span className="fs-cmd">cat mission.txt</span></p>
                <p className="fs-out">FSociety-PK is a Pakistani cybersecurity collective dedicated</p>
                <p className="fs-out">to ethical hacking, open-source security research, and</p>
                <p className="fs-out">building the next generation of cyber defenders in Pakistan.</p>
                <br />
                <p><span className="fs-prompt">$</span> <span className="fs-cmd">whoami --role</span></p>
                <p className="fs-out fs-highlight">Husnain — Founder &amp; Lead Operator</p>
                <br />
                <p><span className="fs-prompt">$</span> <span className="fs-cmd">cat focus.txt</span></p>
                <p className="fs-out">&gt; Red Team Operations</p>
                <p className="fs-out">&gt; CTF Competitions &amp; Writeups</p>
                <p className="fs-out">&gt; Web App Penetration Testing</p>
                <p className="fs-out">&gt; Community Training &amp; Research</p>
                <br />
                <p className="fs-cursor-line"><span className="fs-prompt">$</span> <span className="typing-cursor">▌</span></p>
              </div>
            </div>

            <div className="fsociety-stats">
              <div className="fs-stat">
                <div className="fs-stat-val">PK</div>
                <div className="fs-stat-label">Origin</div>
              </div>
              <div className="fs-stat">
                <div className="fs-stat-val">CTF</div>
                <div className="fs-stat-label">Focus</div>
              </div>
              <div className="fs-stat">
                <div className="fs-stat-val">OSS</div>
                <div className="fs-stat-label">Research</div>
              </div>
              <div className="fs-stat">
                <div className="fs-stat-val">RED</div>
                <div className="fs-stat-label">Team Ops</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Fsociety;
