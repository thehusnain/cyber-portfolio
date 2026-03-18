import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-container">
        <h2>Experience &amp; Education</h2>
        <div className="timeline">
          <TimelineItem 
            title="BS Computer Science"
            date="2023 - Present"
            description="Pursuing Bachelor's degree in Computer Science with focus on cybersecurity fundamentals, networking, operating systems, and secure software development principles."
          />
          <TimelineItem 
            title="Self-Learning & Practice"
            date="2025 - Present"
            description="Intensive self-study in cybersecurity through TryHackMe, CTF challenges, and vulnerable lab environments. Building practical skills in web penetration testing."
          />
          <TimelineItem 
            title="Vulnerable Lab Creation"
            date="2025 - Present"
            description="Creating and maintaining personal vulnerable labs for legal practice and testing of security techniques. Implementing vulnerabilities to understand exploitation and remediation."
          />
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ title, date, description }) => (
  <div className="timeline-item Math-in">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h3>{title}</h3>
      <div className="timeline-date">{date}</div>
      <p className="timeline-description">{description}</p>
    </div>
  </div>
);

export default Experience;
