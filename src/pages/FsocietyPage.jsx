import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FsocietyPage.css';

const FsocietyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const manifestoPoints = [
    {
      title: "Accessible Security Education",
      desc: "We believe that knowledge should be free and accessible to everyone aiming to defend systems ethically."
    },
    {
      title: "Open-Source Dev Sec",
      desc: "We research, design, and release open-source security utilities and scripts to empower security practitioners."
    },
    {
      title: "Ethical & Legal Compliance",
      desc: "Our members operate under a strict code of ethics, focusing on responsible disclosure and defense."
    },
    {
      title: "Regional Security Collaboration",
      desc: "Fostering synergy and coordination among computer science students and security researchers across Pakistan."
    }
  ];

  const projectsList = [
    {
      name: "WriteupForge",
      status: "Active",
      desc: "Automated AI-driven CTF write-up and security report generator utilizing local models and APIs.",
      stack: ["Python", "Groq API", "Markdown"],
      icon: "fas fa-magic"
    },
    {
      name: "SecureWall CLI",
      status: "Active",
      desc: "Fast terminal utility for configuring host-level iptables, logging anomalies, and interface monitoring.",
      stack: ["Bash", "Systemd", "Linux OS"],
      icon: "fas fa-shield-alt"
    },
    {
      name: "Future Labs",
      status: "In Development",
      desc: "Highly interactive vulnerable Docker containers designed for training academies and individual practices.",
      stack: ["Docker", "CTF Labs", "Linux"],
      icon: "fas fa-network-wired"
    }
  ];

  const orgSocials = [
    {
      name: "GitHub Organization",
      url: "https://github.com/fsociety-pk",
      icon: "fab fa-github",
      color: "#e6edf3",
      bg: "rgba(230, 237, 243, 0.04)",
      border: "rgba(230, 237, 243, 0.15)",
      glow: "rgba(230, 237, 243, 0.1)",
      desc: "Browse our open-source codebase & active security repositories."
    },
    {
      name: "Official Portal",
      url: "https://fsocietypk.tech",
      icon: "fas fa-globe",
      color: "#10b981",
      bg: "rgba(16, 185, 129, 0.04)",
      border: "rgba(16, 185, 129, 0.15)",
      glow: "rgba(16, 185, 129, 0.1)",
      desc: "Official website for updates, news, and official announcements."
    },
    {
      name: "Direct Contact",
      url: "mailto:contact@husnain.rocks",
      icon: "fas fa-envelope",
      color: "#fb923c",
      bg: "rgba(251, 146, 60, 0.04)",
      border: "rgba(251, 146, 60, 0.15)",
      glow: "rgba(251, 146, 60, 0.1)",
      desc: "Reach out to us directly for sponsorships, queries, or partnerships."
    },
    {
      name: "Discord Inquiries",
      url: "https://discord.com/users/sheriffsec",
      icon: "fab fa-discord",
      color: "#5865f2",
      bg: "rgba(88, 101, 242, 0.04)",
      border: "rgba(88, 101, 242, 0.15)",
      glow: "rgba(88, 101, 242, 0.1)",
      desc: "Connect directly with our leadership team for immediate responses."
    }
  ];

  return (
    <div className="fsociety-page-container">
      <Link to="/" className="fs-page-back-link">
        <i className="fas fa-arrow-left"></i> Back to Portfolio
      </Link>
      
      {/* Header */}
      <header className="fsociety-page-header">
        <h1>FSOCIETY PK</h1>
        <div style={{ marginTop: '1rem' }}>
          <span className="fs-page-badge">Security Research Collective</span>
        </div>
        <p className="fs-page-subtitle">
          An elite group of security researchers, ethical hackers, and open-source developers collaborating to build secure infrastructures and free education.
        </p>
      </header>

      {/* Leadership & Founder Spotlight Section */}
      <section className="fs-founder-section">
        <div className="fs-founder-card">
          <div className="fs-founder-avatar-wrap">
            <img 
              src="/assets/profile.png" 
              alt="Husnain" 
              className="fs-founder-avatar"
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=Husnain&background=0f172a&color=10b981&size=150';
              }}
            />
            <span className="fs-badge-founder">FOUNDER</span>
          </div>
          <div className="fs-founder-details">
            <span className="fs-subtitle-cyber">Leadership Spotlight</span>
            <h2>Husnain</h2>
            <h4 className="fs-founder-role">Founder &amp; Project Manager</h4>
            <p>
              Under my direction as founder and project manager, Fsociety pk coordinates competitive CTF campaigns, 
              maintains defensive Linux scripts, and establishes partnerships to prepare the next generation of security professionals.
            </p>
            <div className="fs-founder-meta">
              <span className="founder-tag"><i className="fas fa-shield-alt"></i> Offensive Security</span>
              <span className="founder-tag"><i className="fas fa-code"></i> Project Management</span>
              <span className="founder-tag"><i className="fas fa-users"></i> Collective Ops</span>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="fs-manifesto-section">
        <div className="section-title-wrap">
          <span className="section-prefix">// 01</span>
          <h2>Our Core Manifesto</h2>
        </div>
        <div className="fs-manifesto-grid">
          {manifestoPoints.map((item, idx) => (
            <div key={idx} className="manifesto-card">
              <div className="manifesto-number">0{idx + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="fs-projects-section">
        <div className="section-title-wrap">
          <span className="section-prefix">// 02</span>
          <h2>Open Source Repositories</h2>
        </div>
        <div className="fs-projects-grid">
          {projectsList.map((project, idx) => (
            <div key={idx} className="fs-project-card">
              <div className="project-card-header">
                <div className="project-icon-box">
                  <i className={project.icon}></i>
                </div>
                <span className={`project-status-chip ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {project.status}
                </span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <div className="project-stack-wrap">
                {project.stack.map((tech, tIdx) => (
                  <span key={tIdx} className="project-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration / Join collective section */}
      <section className="fs-collaborate-section">
        <div className="fs-collab-card">
          <div className="fs-collab-details">
            <span className="fs-subtitle-cyber">Operator Admission</span>
            <h2>Join Our Security Collective</h2>
            <p>
              We are constantly seeking passionate security students, tool developers, and CTF enthusiasts in Pakistan.
            </p>
            <div className="fs-collab-reqs">
              <h4>Requirements for entry:</h4>
              <ul>
                <li><i className="fas fa-chevron-right"></i> Consistent learning attitude &amp; technical drive</li>
                <li><i className="fas fa-chevron-right"></i> Active practice labs engagement (TryHackMe, HackTheBox, etc.)</li>
                <li><i className="fas fa-chevron-right"></i> Absolute dedication to ethical, guidelines</li>
              </ul>
            </div>
          </div>
          <div className="fs-collab-cta">
            <p>Ready to deploy your skills with FSOCIETY?</p>
            <a href="mailto:contact@husnain.rocks" className="btn btn-primary collab-btn">
              Apply for Collective <i className="fas fa-paper-plane" style={{ marginLeft: '0.50rem' }}></i>
            </a>
          </div>
        </div>
      </section>

      {/* Beautiful Organization Socials Section */}
      <section className="fs-socials-section">
        <div className="section-title-wrap text-center-wrap">
          <span className="section-prefix">// 03</span>
          <h2>Connect &amp; Collaborate</h2>
          <p className="section-subtext">Access our official organization portals and communication lines below.</p>
        </div>
        
        <div className="fs-org-socials-grid">
          {orgSocials.map((social, idx) => (
            <a 
              key={idx}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="fs-org-social-card"
              style={{
                '--hover-color': social.color,
                '--hover-bg': social.bg,
                '--hover-border': social.border,
                '--hover-glow': social.glow,
              }}
            >
              <div className="social-card-icon" style={{ color: social.color, borderColor: social.border }}>
                <i className={social.icon}></i>
              </div>
              <div className="social-card-content">
                <h3>{social.name}</h3>
                <p>{social.desc}</p>
              </div>
              <div className="social-card-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FsocietyPage;
