import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard 
            title="✍️ WriteupForge"
            description="An AI-powered tool that converts raw cybersecurity notes into professional, structured writeups. Automatically detects writeup type (CTF, Lab, Learning, Research) and generates Markdown, PDF, and GitHub-ready README files. Powered by Groq AI — completely free."
            tags={['Python', 'AI', 'Groq', 'CTF', 'Automation', 'FSociety-PK']}
            repoLink="https://github.com/thehusnain/writeupforge"
            featured={true}
          />
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
            title="🕵🏽‍♂️ WhatsOSINT"
            description="View data of a WhatsApp number, including its status, photo, etc. 🕵🏽‍♂️"
            tags={['Python', 'OSINT', 'WhatsApp']}
            repoLink="https://github.com/thehusnain/WhatsInfo"
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, tags, demoLink, repoLink, delay = '0s', featured = false }) => (
  <div className={`project-card fade-in ${featured ? 'project-card-featured' : ''}`} style={{ animationDelay: delay }}>
    {featured && <div className="project-featured-badge"><i className="fas fa-star" /> Featured</div>}
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="project-tech">
      {tags.map((tag, i) => (
        <span key={i} className="tech-tag">{tag}</span>
      ))}
    </div>
    <div className="project-links">
      {demoLink && <a href={demoLink} className="project-link" target={demoLink.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"><i className="fas fa-external-link-alt" /> Live Demo</a>}
      {repoLink && <a href={repoLink} className="project-link project-link-repo" target="_blank" rel="noreferrer"><i className="fab fa-github" /> Source Code</a>}
    </div>
  </div>
);

export default Projects;
