import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import './Projects.css';

const DEFAULT_PROJECTS = [
  {
    title: "WriteupForge",
    description: "An AI-powered automation tool that converts raw cybersecurity logs, outputs, and research notes into structured, professional writeups. Detects writeup classifications (CTF, Vulnerable Labs, Research) and generates Markdown, PDF, and GitHub-ready documentation. Powered by Groq API.",
    tags: ['Python', 'AI / LLM', 'Groq API', 'Markdown', 'Automation'],
    repoLink: "https://github.com/thehusnain/writeupforge",
    featured: true,
    icon: "fa-pen-nib",
    category: "AI Tool",
    status: "Active"
  },
  {
    title: "SecureWall (scw)",
    description: "A professional CLI-based firewall management and interface monitoring utility built for Debian-based environments (Debian, Ubuntu, Kali). Simplifies iptables rule management, automatically detects active network adapters, and exports real-time security logs.",
    tags: ['Bash', 'Linux Core', 'Firewall Security', 'CLI Tool'],
    repoLink: "https://github.com/thehusnain/SecureWall",
    icon: "fa-network-wired",
    category: "Security",
    status: "Active"
  },
  {
    title: "WebShield Scanner",
    description: "An automated web application scanning suite integrated with Nmap, SQLMap, SSLScan, and Nikto. Conducts scans for common vulnerabilities and aggregates findings into a single AI-summarized vulnerability report.",
    tags: ['Nmap', 'SQLMap', 'Nikto', 'Shell scripting', 'Security Report'],
    demoLink: "https://webshield.tech",
    repoLink: "https://github.com/webshield-tech",
    icon: "fa-shield-halved",
    category: "Scanner",
    status: "Active"
  },
  {
    title: "WhatsOSINT",
    description: "A lightweight OSINT reconnaissance utility built to aggregate metadata, status info, profiles, and public details related to specified WhatsApp accounts for forensic identification.",
    tags: ['Python', 'OSINT', 'Forensics', 'API integration'],
    repoLink: "https://github.com/thehusnain/WhatsInfo",
    icon: "fa-magnifying-glass",
    category: "OSINT",
    status: "Active"
  }
];

/* ── Helper to map tags to real colorful icons ── */
const getTagMeta = (tag) => {
  const t = tag.toLowerCase();
  if (t.includes('python')) return { icon: 'fab fa-python', color: '#3776AB' };
  if (t.includes('bash') || t.includes('shell') || t.includes('linux')) return { icon: 'fab fa-linux', color: '#FCC624' };
  if (t.includes('ai') || t.includes('llm') || t.includes('groq')) return { icon: 'fas fa-brain', color: '#FF5733' };
  if (t.includes('markdown')) return { icon: 'fab fa-markdown', color: '#0080FF' };
  if (t.includes('nmap')) return { icon: 'fas fa-circle-nodes', color: '#10B981' };
  if (t.includes('sql')) return { icon: 'fas fa-database', color: '#00758F' };
  if (t.includes('nikto')) return { icon: 'fas fa-bug', color: '#EF4444' };
  if (t.includes('security') || t.includes('firewall') || t.includes('shield')) return { icon: 'fas fa-shield-halved', color: '#3B82F6' };
  if (t.includes('forensics') || t.includes('osint')) return { icon: 'fas fa-eye', color: '#F59E0B' };
  if (t.includes('automation') || t.includes('api') || t.includes('integration')) return { icon: 'fas fa-gears', color: '#8B5CF6' };
  return { icon: 'fas fa-code', color: '#9CA3AF' };
};

/* ── Animated runway dots ── */
const AnimDots = () => (
  <div className="bp-anim-track">
    <div className="bp-dot-runner">
      <span className="bp-dot" />
      <span className="bp-dot" />
      <span className="bp-dot" />
      <span className="bp-dot" />
    </div>
  </div>
);

/* ── Single boarding-pass folding card ── */
const BoardingPassCard = ({ project, index }) => {
  const [active, setActive] = useState(false);
  const hasLinks = project.repoLink || project.demoLink;

  const toggle = (e) => {
    if (e.target.closest('a') || e.target.closest('button')) {
      return;
    }
    setActive(!active);
  };

  const category = project.category || (project.tags && project.tags[0]) || 'Project';
  const status   = project.status   || 'Active';

  return (
    <div
      className={`bp-card-container ${active ? 'bp-active' : ''} ${project.featured ? 'bp-featured' : ''} ${hasLinks ? 'bp-has-links' : ''}`}
      onClick={toggle}
    >
      {/* 1. Collapsed State overview card (always visible underneath) */}
      <div className="bp-first-display">
        <div className="bp-preview-left">
          <div className="bp-icon-wrap">
            <i className={`fas ${project.icon || 'fa-code'}`} />
          </div>
          <div className="bp-preview-meta">
            <span className="bp-title">{project.title}</span>
            <span className="bp-category">{category}</span>
          </div>
        </div>

        <div className="bp-preview-mid">
          <AnimDots />
          <span className="bp-status">{status}</span>
        </div>

        <div className="bp-preview-right">
          {project.featured && (
            <span className="bp-featured-tag">
              <i className="fas fa-star" /> Featured
            </span>
          )}
          <span className={`bp-caret ${active ? 'bp-caret--open' : ''}`}>
            <i className="fas fa-chevron-down" />
          </span>
        </div>
      </div>

      {/* 2. Cascading 3D folding structure (Exactly 2 Folds) */}
      <div
        className="bp-first-fold"
        style={{
          transform: active ? 'rotate3d(1, 0, 0, -180deg)' : 'rotate3d(1, 0, 0, 0deg)',
          transitionDelay: active ? '0s' : '0.15s'
        }}
      >
        {/* Cover flap: flips up to show the backside when rotating */}
        <div className="bp-first-top">
          <div className="bp-preview-left">
            <div className="bp-icon-wrap">
              <i className={`fas ${project.icon || 'fa-code'}`} />
            </div>
            <div className="bp-preview-meta">
              <span className="bp-title">{project.title}</span>
              <span className="bp-category">{category}</span>
            </div>
          </div>
          <div className="bp-preview-right">
            <span className="bp-caret bp-caret--open">
              <i className="fas fa-chevron-down" />
            </span>
          </div>
        </div>

        {/* The back of the first fold (revealed description) */}
        <div className="bp-first-behind">
          <div className="bp-first-behind-display">
            <p className="bp-desc">{project.description}</p>
            <div className="bp-shadow-overlay" style={{ opacity: active ? 0 : 0.8 }} />
          </div>

          {/* Second Fold (Tech Stack with colorful icons + Links) */}
          <div
            className="bp-second-fold"
            style={{
              transform: active ? 'rotate3d(1, 0, 0, -180deg)' : 'rotate3d(1, 0, 0, 0deg)',
              transitionDelay: active ? '0.15s' : '0s'
            }}
          >
            <div className="bp-second-top" />
            <div className="bp-second-behind">
              <div className="bp-second-behind-display">
                {/* Tech stack tags with colorful real icons */}
                <div className="bp-tags">
                  {(project.tags || []).map((tag, i) => {
                    const meta = getTagMeta(tag);
                    return (
                      <span key={i} className="bp-tag" style={{ borderLeft: `2.5px solid ${meta.color}` }}>
                        <i className={`${meta.icon} bp-tag-icon`} style={{ color: meta.color }} />
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Action buttons (Code / Demo) merged inside this second fold */}
                <div className="bp-actions">
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      className="btn btn-secondary project-action-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github" /> Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="btn btn-primary project-action-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-external-link-alt" /> Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="bp-shadow-overlay" style={{ opacity: active ? 0 : 0.8 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Projects section ── */
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-projects');
    if (saved) {
      try { setProjects(JSON.parse(saved)); }
      catch { setProjects(DEFAULT_PROJECTS); }
    } else {
      setProjects(DEFAULT_PROJECTS);
      localStorage.setItem('portfolio-projects', JSON.stringify(DEFAULT_PROJECTS));
    }
  }, []);

  const displayProjects = [...projects]
    .map((p, i) => ({ p, i }))
    .sort((a, b) => {
      if (Boolean(a.p.featured) !== Boolean(b.p.featured)) return a.p.featured ? -1 : 1;
      return a.i - b.i;
    })
    .map(({ p }) => p);

  return (
    <div className="bp-board">
      {displayProjects.map((project, index) => (
        <ScrollReveal key={index} direction="up" delay={index * 0.12}>
          <BoardingPassCard project={project} index={index} />
        </ScrollReveal>
      ))}
    </div>
  );
};

export default Projects;
export { DEFAULT_PROJECTS };
