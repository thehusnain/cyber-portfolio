import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard 
            title="🧱 SecureWall (scw)"
            description="SecureWall is a professional CLI firewall management and monitoring tool for Debian-based Linux distributions (including Ubuntu and Kali). It manages the system firewall, detects interfaces, applies predefined rules, and analyzes firewall logs."
            tags={['Bash', 'Linux', 'Firewall', 'CLI', 'Security']}
            repoLink="https://github.com/thehusnain/SecureWall"
          />
          <ProjectCard 
            title="🛡️ WebShield Scanner"
            description="A comprehensive web application security scanner that tests websites for vulnerabilities using Nmap, SQLMap, SSLScan, and Nikto. Features automated report generation with AI analysis."
            tags={['Nmap', 'SQLMap', 'SSLScan', 'Nikto', 'AI Reporting']}
            demoLink="https://webshield.tech"
            repoLink="https://github.com/webshield-tech"
          />
          <ProjectCard 
            title="🧪 Vulnerable Practice Lab"
            description="Personal vulnerable lab environment for practicing penetration testing techniques legally. Includes intentionally vulnerable web applications and network services for skill development."
            tags={['Docker', 'Kali Linux', 'Web Exploitation', 'Network Security']}
            demoLink="#"
            delay="0.1s"
          />
          <ProjectCard 
            title="🔐 Cryptography Toolkit"
            description="Collection of cryptography tools and scripts for encryption, decryption, and cryptographic analysis. Includes implementations of various ciphers and cryptographic protocols."
            tags={['Python', 'Cryptography', 'Encryption', 'Security']}
            demoLink="#contact"
            delay="0.2s"
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, tags, demoLink, repoLink, delay = '0s' }) => (
  <div className="project-card fade-in" style={{ animationDelay: delay }}>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="project-tech">
      {tags.map((tag, i) => (
        <span key={i} className="tech-tag">{tag}</span>
      ))}
    </div>
    {demoLink && <a href={demoLink} className="project-link" target={demoLink.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">Live Demo &rarr;</a>}
    {repoLink && <a href={repoLink} className="project-link" target="_blank" rel="noreferrer" style={{ marginLeft: '1rem' }}>Source Code &rarr;</a>}
  </div>
);

export default Projects;
