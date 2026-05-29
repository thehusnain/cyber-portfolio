import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-container">
        <h2>Experience &amp; Education</h2>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <TimelineItem 
            title="BS Computer Science"
            subtitle="Government Akhtar Nawaz Khan Shaheed Degree College, KTS"
            date="2023 - Present"
            description="Pursuing my Bachelor's degree in Computer Science, focusing on cybersecurity foundations, data structures, networking protocols, operating systems, and secure software development practices."
            icon="fa-graduation-cap"
          />
          <TimelineItem 
            title="Self-Driven Cybersecurity Practice"
            subtitle="Offensive Security Training"
            date="2025 - Present"
            description="Intense self-guided training on TryHackMe and CTF competitions. Building capabilities in web penetration testing, network analysis, cryptography foundations, and forensic investigation."
            icon="fa-laptop-code"
          />
          <TimelineItem 
            title="Vulnerable Labs Creator"
            subtitle="Ethical Lab Development"
            date="2025 - Present"
            description="Creating and configuring custom vulnerable environments to safely practice exploitation, privilege escalation, and vulnerability mitigation. Writing documentation on security findings."
            icon="fa-shield-halved"
          />
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ title, subtitle, date, description, icon }) => (
  <div className="timeline-item fade-in">
    <div className="timeline-badge">
      <i className={`fas ${icon}`}></i>
    </div>
    <div className="timeline-card">
      <div className="timeline-header-block">
        <div>
          <h3>{title}</h3>
          <span className="timeline-subtitle">{subtitle}</span>
        </div>
        <span className="timeline-date">{date}</span>
      </div>
      <p className="timeline-description">{description}</p>
    </div>
  </div>
);

export default Experience;
