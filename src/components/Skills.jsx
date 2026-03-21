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
        <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div className="skill-category fade-in">
            <h3>Domain Expertise</h3>
            <SkillItem name="Web Application Security" val="85%" pct="85%" ref={(el) => barsRef.current.push(el)} />
            <SkillItem name="Network Penetration Testing" val="75%" pct="75%" ref={(el) => barsRef.current.push(el)} />
            <SkillItem name="Cryptography" val="70%" pct="70%" ref={(el) => barsRef.current.push(el)} />
          </div>

          <div className="skill-category fade-in">
            <h3>Tool Proficiency</h3>
            <SkillItem name="Burp Suite Professional" val="85%" pct="85%" ref={(el) => barsRef.current.push(el)} />
            <SkillItem name="Nmap & Network Analysis" val="80%" pct="80%" ref={(el) => barsRef.current.push(el)} />
            <SkillItem name="Metasploit Framework" val="70%" pct="70%" ref={(el) => barsRef.current.push(el)} />
          </div>
        </div>

        <div className="thm-badge fade-in" style={{ marginTop: '3rem', textAlign: 'center', background: 'rgba(10, 10, 10, 0.5)', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(0, 255, 140, 0.2)' }}>
          <h3 style={{ marginBottom: '1.5rem', color: '#fff' }}>TryHackMe Profile</h3>
          <div className="badge-container">
            <a href="https://tryhackme.com/p/thehusnain" target="_blank" rel="noreferrer">
              <img src="https://tryhackme-badges.s3.amazonaws.com/thehusnain.png" alt="TryHackMe Badge" style={{ maxWidth: '100%', borderRadius: '8px', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </a>
          </div>
          <p style={{ marginTop: '1.5rem', color: '#aaa', fontSize: '0.95rem' }}>
            Active learner on TryHackMe, consistently practicing and improving offensive security skills.
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
