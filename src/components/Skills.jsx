import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute('data-width');
        }
      });
    }, { threshold: 0.1 });

    barsRef.current.forEach(bar => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="section-container">
        <h2>Technical Skills</h2>
        
        <div className="skills-grid">
          
          {/* Progress Bars Column */}
          <div className="skills-bars-col">
            <div className="skill-category fade-in">
              <h3>Domain Expertise</h3>
              <SkillItem name="Web Application Security" val="85%" pct="85%" ref={(el) => barsRef.current.push(el)} />
              <SkillItem name="Network Penetration Testing" val="75%" pct="75%" ref={(el) => barsRef.current.push(el)} />
              <SkillItem name="Cryptography" val="70%" pct="70%" ref={(el) => barsRef.current.push(el)} />
            </div>

            <div className="skill-category fade-in" style={{ marginTop: '2rem' }}>
              <h3>Tool Proficiency</h3>
              <SkillItem name="Burp Suite Professional" val="85%" pct="85%" ref={(el) => barsRef.current.push(el)} />
              <SkillItem name="Nmap & Network Analysis" val="80%" pct="80%" ref={(el) => barsRef.current.push(el)} />
              <SkillItem name="Metasploit Framework" val="70%" pct="70%" ref={(el) => barsRef.current.push(el)} />
            </div>
          </div>

          {/* TryHackMe Badge Column */}
          <div className="skills-thm-col fade-in">
            <div className="thm-profile-card">
              <div className="thm-card-header">
                <i className="fas fa-terminal header-icon"></i>
                <div>
                  <h4>TryHackMe Profile</h4>
                  <p>Global Rankings &amp; Challenges</p>
                </div>
              </div>
              
              <div className="thm-badge-container">
                <a href="https://tryhackme.com/p/thehusnain" target="_blank" rel="noreferrer">
                  <img 
                    src="https://tryhackme-badges.s3.amazonaws.com/thehusnain.png" 
                    alt="TryHackMe Badge" 
                    className="thm-badge-img"
                  />
                </a>
              </div>
              
              <div className="thm-stats-summary">
                <div className="thm-stat-item">
                  <span className="val">Top 2%</span>
                  <span className="lbl">Global Rank</span>
                </div>
                <div className="thm-stat-item">
                  <span className="val">Active</span>
                  <span className="lbl">Status</span>
                </div>
              </div>
              
              <p className="thm-description">
                Active practitioner on TryHackMe. Regularly testing vulnerabilities, resolving complex CTF challenges, 
                and reinforcing offensive security methodologies in safe environments.
              </p>
              
              <a 
                href="https://tryhackme.com/p/thehusnain" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary thm-profile-btn"
              >
                View Full Profile <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Extracted small subcomponent
const SkillItem = React.forwardRef(({ name, val, pct }, ref) => (
  <div className="skill-item">
    <div className="skill-meta">
      <span className="skill-name">{name}</span>
      <span className="skill-val">{val}</span>
    </div>
    <div className="skill-track">
      <div className="skill-progress" style={{ width: '0%' }} data-width={pct} ref={ref}></div>
    </div>
  </div>
));

export default Skills;
