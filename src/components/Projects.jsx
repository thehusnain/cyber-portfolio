import React, { useState, useEffect } from 'react';
import './Projects.css';

const DEFAULT_PROJECTS = [
  {
    title: "WriteupForge",
    description: "An AI-powered automation tool that converts raw cybersecurity logs, outputs, and research notes into structured, professional writeups. Detects writeup classifications (CTF, Vulnerable Labs, Research) and generates Markdown, PDF, and GitHub-ready documentation. Powered by Groq API.",
    tags: ['Python', 'AI / LLM', 'Groq API', 'Markdown', 'Automation'],
    repoLink: "https://github.com/thehusnain/writeupforge",
    featured: true,
    icon: "fa-pen-nib"
  },
  {
    title: "SecureWall (scw)",
    description: "A professional CLI-based firewall management and interface monitoring utility built for Debian-based environments (Debian, Ubuntu, Kali). Simplifies iptables rule management, automatically detects active network adapters, and exports real-time security logs.",
    tags: ['Bash', 'Linux Core', 'Firewall Security', 'CLI Tool'],
    repoLink: "https://github.com/thehusnain/SecureWall",
    icon: "fa-network-wired"
  },
  {
    title: "WebShield Scanner",
    description: "An automated web application scanning suite integrated with Nmap, SQLMap, SSLScan, and Nikto. Conducts scans for common vulnerabilities and aggregates findings into a single AI-summarized vulnerability report.",
    tags: ['Nmap', 'SQLMap', 'Nikto', 'Shell scripting', 'Security Report'],
    demoLink: "https://webshield.tech",
    repoLink: "https://github.com/webshield-tech",
    icon: "fa-shield-halved"
  },
  {
    title: "WhatsOSINT",
    description: "A lightweight OSINT reconnaissance utility built to aggregate metadata, status info, profiles, and public details related to specified WhatsApp accounts for forensic identification.",
    tags: ['Python', 'OSINT', 'Forensics', 'API integration'],
    repoLink: "https://github.com/thehusnain/WhatsInfo",
    icon: "fa-magnifying-glass"
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio-projects');
    if (savedProjects) {
      try {
        setProjects(JSON.parse(savedProjects));
      } catch (e) {
        setProjects(DEFAULT_PROJECTS);
      }
    } else {
      setProjects(DEFAULT_PROJECTS);
      localStorage.setItem('portfolio-projects', JSON.stringify(DEFAULT_PROJECTS));
    }
  }, []);

  return (
    <section id="projects">
      <div className="section-container">
        <h2>Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags || []}
              demoLink={project.demoLink}
              repoLink={project.repoLink}
              featured={project.featured}
              icon={project.icon || "fa-code"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, tags, demoLink, repoLink, featured = false, icon }) => (
  <div className={`project-card fade-in ${featured ? 'project-card-featured' : ''}`}>
    {featured && <span className="featured-flag"><i className="fas fa-star" /> Featured Project</span>}
    
    <div className="project-header">
      <div className="project-icon-wrap">
        <i className={`fas ${icon}`} />
      </div>
      <h3>{title}</h3>
    </div>
    
    <p className="project-desc">{description}</p>
    
    <div className="project-tags">
      {tags.map((tag, i) => (
        <span key={i} className="project-tag-badge">{tag}</span>
      ))}
    </div>
    
    <div className="project-actions">
      {repoLink && (
        <a href={repoLink} className="btn btn-secondary project-action-btn" target="_blank" rel="noreferrer">
          <i className="fab fa-github" /> Code
        </a>
      )}
      {demoLink && (
        <a href={demoLink} className="btn btn-primary project-action-btn" target="_blank" rel="noreferrer">
          <i className="fas fa-external-link-alt" /> Demo
        </a>
      )}
    </div>
  </div>
);

export default Projects;
export { DEFAULT_PROJECTS };
