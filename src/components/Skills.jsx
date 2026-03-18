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
        <h2>TryHackMe Statistics</h2>
        <div className="skills-grid">
          <div className="skill-category fade-in">
            <h3>Rank &amp; Achievements</h3>
            <SkillItem name="Global Ranking" val="Top 2%" pct="95%" ref={(el) => barsRef.current.push(el)} />
            <SkillItem name="Rooms Completed" val="45+" pct="85%" ref={(el) => barsRef.current.push(el)} />
            <SkillItem name="Learning Paths" val="3" pct="80%" ref={(el) => barsRef.current.push(el)} />
          </div>

          <div className="skill-category fade-in">
            <h3>Technical Skills</h3>
            <SkillItem name="Web Security" val="75%" pct="75%" ref={(el) => barsRef.current.push(el)} />
            <SkillItem name="Network Security" val="70%" pct="70%" ref={(el) => barsRef.current.push(el)} />
            <SkillItem name="Cryptography" val="65%" pct="65%" ref={(el) => barsRef.current.push(el)} />
          </div>

          <div className="skill-category fade-in">
            <h3>Tool Proficiency</h3>
            <SkillItem name="Burp Suite" val="75%" pct="75%" ref={(el) => barsRef.current.push(el)} />
            <SkillItem name="Wireshark" val="70%" pct="70%" ref={(el) => barsRef.current.push(el)} />
            <SkillItem name="Kali Linux Tools" val="80%" pct="80%" ref={(el) => barsRef.current.push(el)} />
          </div>
        </div>

        <div className="thm-badge fade-in">
          <h3>TryHackMe Profile</h3>
          <div className="badge-container">
            <a href="https://tryhackme.com/p/thehusnain" target="_blank" rel="noreferrer">
              <img src="https://tryhackme-badges.s3.amazonaws.com/thehusnain.png" alt="TryHackMe Badge" style={{ maxWidth: '100%', borderRadius: '8px' }} />
            </a>
          </div>
          <p style={{ marginTop: '1rem', color: '#aaa', fontSize: '0.9rem' }}>
            Username: <strong style={{ color: '#00FF8C' }}>thehusnain</strong>
            &nbsp;• Rank: <strong style={{ color: '#00D9FF' }}>Top 2%</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

// Extracted small subcomponent
const SkillItem = React.forwardRef(({ name, val, pct }, ref) => (
  <div className="skill-item">
    <div className="skill-name">
      <span>{name}</span>
      <span>{val}</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: '0%' }} data-width={pct} ref={ref}></div>
    </div>
  </div>
));

export default Skills;
