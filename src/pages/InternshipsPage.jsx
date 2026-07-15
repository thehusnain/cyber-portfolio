import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DEFAULT_INTERNSHIPS } from '../components/Internships';
import { fadeIn } from '../variants';
import './InternshipsPage.css';

// Premium 3D Card Tilt and Glare overlay
const TiltCard = ({ children, className, style = {}, maxTilt = 12 }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;
    
    const rotateX = -normY * maxTilt;
    const rotateY = normX * maxTilt;
    
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    
    setTilt({ rotateX, rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 0.12 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
        transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out, border-color 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 65%)`,
          opacity: glare.opacity,
          pointerEvents: 'none',
          zIndex: 10,
          mixBlendMode: 'overlay',
          borderRadius: 'inherit',
          transition: 'opacity 0.25s ease',
        }}
      />
      <div style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
};

const SKILLS_LIST = [
  "Reconnaissance",
  "Web Mapping",
  "Vulnerability Validation",
  "Structured Reporting",
  "Ethical Hacking"
];

/* Helper to map skills to professional color coding */
const getInternSkillMeta = (skill) => {
  const s = skill.toLowerCase();
  if (s.includes('recon')) {
    return {
      icon: 'fas fa-search',
      color: '#3b82f6',
      bg: 'rgba(59, 130, 246, 0.12)',
      border: 'rgba(59, 130, 246, 0.3)'
    };
  }
  if (s.includes('map') || s.includes('web') || s.includes('network')) {
    return {
      icon: 'fas fa-network-wired',
      color: '#a78bfa',
      bg: 'rgba(167, 139, 250, 0.12)',
      border: 'rgba(167, 139, 250, 0.3)'
    };
  }
  if (s.includes('vuln') || s.includes('valid') || s.includes('validation')) {
    return {
      icon: 'fas fa-bug',
      color: '#f87171',
      bg: 'rgba(248, 113, 113, 0.12)',
      border: 'rgba(248, 113, 113, 0.3)'
    };
  }
  if (s.includes('report') || s.includes('document')) {
    return {
      icon: 'fas fa-file-alt',
      color: '#fbbf24',
      bg: 'rgba(251, 191, 36, 0.12)',
      border: 'rgba(251, 191, 36, 0.3)'
    };
  }
  if (s.includes('ethic') || s.includes('hack') || s.includes('shield') || s.includes('secur')) {
    return {
      icon: 'fas fa-shield-virus',
      color: '#34d399',
      bg: 'rgba(52, 211, 153, 0.12)',
      border: 'rgba(52, 211, 153, 0.3)'
    };
  }
  return {
    icon: 'fas fa-shield-halved',
    color: '#60a5fa',
    bg: 'rgba(96, 165, 250, 0.12)',
    border: 'rgba(96, 165, 250, 0.3)'
  };
};

const WEEKLY_LOGS = [
  {
    week: "Week 1",
    title: "Setup & Passive Reconnaissance",
    status: "Completed",
    desc: "Established the security testing environment. Conducted extensive passive reconnaissance, gathering open-source intelligence (OSINT), subdomain mapping, and DNS harvesting.",
    iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7452397121363943424?collapsed=1"
  },
  {
    week: "Week 2",
    title: "Active Scanning & Web Mapping",
    status: "Completed",
    desc: "Performed active network scanning and web mapping. Enumerated targets, identified active services, mapped architecture components, and conducted security configuration reviews.",
    iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7456240338182230016?collapsed=1"
  },
  {
    week: "Week 3",
    title: "Vulnerability Validation",
    status: "Completed",
    desc: "Analyzed and validated identified vulnerabilities. Focused on OWASP Top 10 exploits, manual validation, false-positive elimination, and secure credential handling evaluations.",
    iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7458528165871677440?collapsed=1"
  },
  {
    week: "Week 4",
    title: "Structured Reporting & Advisory",
    status: "Completed",
    desc: "Compiled a comprehensive security advisory report detailing discoveries, exploit paths, risk ratings (CVSS), and actionable remediation guidelines for the engineering team.",
    iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7461130145781964800?collapsed=1"
  }
];

const InternshipsPage = () => {
  const [internships, setInternships] = useState([]);
  const [activeCert, setActiveCert] = useState(null);
  const [activeWeekTab, setActiveWeekTab] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const saved = localStorage.getItem('portfolio-internships');
    if (saved) {
      try {
        let parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          parsed = parsed.filter(
            item => item.company !== "Red Team Labs" && !item.role.includes("Research Intern")
          );
          setInternships(parsed.length > 0 ? parsed : DEFAULT_INTERNSHIPS);
        } else {
          setInternships(DEFAULT_INTERNSHIPS);
        }
      } catch (e) {
        setInternships(DEFAULT_INTERNSHIPS);
      }
    } else {
      setInternships(DEFAULT_INTERNSHIPS);
    }
  }, []);

  return (
    <div className="internships-page-container">
      {/* Background elements */}
      <div className="internships-glow-1"></div>
      <div className="internships-glow-2"></div>

      <Link to="/" className="intern-back-link">
        <i className="fas fa-arrow-left"></i> Back to Portfolio
      </Link>
      
      <header className="internships-page-header">
        <motion.h1 
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
        >
          Cybersecurity <span className="text-accent-gradient">Internships</span>
        </motion.h1>
        <motion.p 
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="internships-page-subtitle"
        >
          Hands-on professional training, ethical hacking labs, vulnerability research, and security engineering.
        </motion.p>
      </header>

      <div className="internships-detailed-list">
        {internships.map((intern, index) => (
          <motion.div 
            key={index} 
            variants={fadeIn("up", 0.4 + index * 0.1)}
            initial="hidden"
            animate="show"
            style={{ width: '100%' }}
          >
            <TiltCard className="intern-detail-card" maxTilt={3}>
              <div className="intern-dashboard-single-col" style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}>
                
                {/* 1. Header Details */}
                <div className="intern-card-header-v2">
                  <div className="intern-badge-v2">
                    <i className="fas fa-user-shield"></i>
                  </div>
                  <div className="intern-main-info-v2">
                    <h2 className="intern-role-title-v2">{intern.role}</h2>
                    <h3 className="intern-company-title-v2">{intern.company}</h3>
                    <div className="intern-instructor-v2">
                      <span className="instructor-badge">
                        <i className="fas fa-user-tie"></i> Instructor:
                      </span>
                      <span className="instructor-name">{intern.instructor}</span>
                    </div>
                  </div>
                </div>

                {/* 2. About the Internship */}
                <div className="intern-about-block">
                  <div className="intern-description-section-v2">
                    <h4 className="section-label"><i className="fas fa-terminal"></i> Overview &amp; Responsibilities</h4>
                    <p className="section-text">{intern.desc}</p>
                  </div>

                  <div className="intern-skills-section-v2">
                    <h4 className="section-label"><i className="fas fa-circle-nodes"></i> Core Skills &amp; Methodology</h4>
                    <div className="intern-skills-tags-v2">
                      {SKILLS_LIST.map((skill, i) => {
                        const meta = getInternSkillMeta(skill);
                        return (
                          <span 
                            key={i} 
                            className="skill-tag-v2"
                            style={{
                              color: meta.color,
                              backgroundColor: meta.bg,
                              borderColor: meta.border,
                              boxShadow: `0 2px 10px ${meta.bg}`
                            }}
                          >
                            <i className={`${meta.icon} tag-icon-v2`}></i>
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 3. LinkedIn Weekly Logs (Tabbed Interface) */}
                <div className="intern-logs-section">
                  <h4 className="section-label"><i className="fab fa-linkedin"></i> Internship Logs &amp; Activity</h4>
                  <p className="section-subtext">Click on the weekly tabs to view milestones, research summaries, and embedded LinkedIn posts.</p>
                  
                  <div className="week-tabs-container">
                    {WEEKLY_LOGS.map((log, idx) => (
                      <button
                        key={idx}
                        className={`week-tab-btn ${activeWeekTab === idx ? 'active' : ''}`}
                        onClick={() => setActiveWeekTab(idx)}
                      >
                        {log.week}
                      </button>
                    ))}
                  </div>

                  <div className="active-log-card">
                    <div className="active-log-header">
                      <h5 className="active-log-title">{WEEKLY_LOGS[activeWeekTab].title}</h5>
                      <span className="active-log-badge"><i className="fas fa-check-circle"></i> Completed</span>
                    </div>
                    <p className="active-log-desc">{WEEKLY_LOGS[activeWeekTab].desc}</p>
                    
                    <div className="linkedin-iframe-container">
                      <iframe 
                        src={WEEKLY_LOGS[activeWeekTab].iframeSrc}
                        height="100%" 
                        width="100%" 
                        frameBorder="0" 
                        allowFullScreen={true}
                        title={`LinkedIn embed ${WEEKLY_LOGS[activeWeekTab].week}`}
                        key={activeWeekTab}
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* 4. Completion Certificate & Action Footer */}
                {intern.certificateLink && intern.certificateLink !== "#" && (
                  <div className="intern-certificate-section">
                    <h4 className="section-label text-center"><i className="fas fa-award"></i> Completion Certificate</h4>
                    
                    <div 
                      className="certificate-interactive-frame"
                      onClick={() => setActiveCert(intern.certificateLink)}
                    >
                      <div className="frame-glow-overlay"></div>
                      <div className="frame-glass-reflection"></div>
                      
                      <div className="certificate-wrapper">
                        <img 
                          src={intern.certificateLink} 
                          alt={`${intern.company} Certificate`} 
                          className="certificate-preview-img" 
                        />
                        <div className="zoom-hover-overlay">
                          <div className="zoom-icon-wrapper">
                            <i className="fas fa-magnifying-glass-plus"></i>
                            <span>View Fullscreen</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="certificate-frame-caption">
                      Click image to inspect verification details.
                    </p>

                    <div className="intern-card-footer-v2">
                      {intern.repoLink && (
                        <a href={intern.repoLink} className="btn btn-secondary intern-footer-btn-v2" target="_blank" rel="noreferrer">
                          <i className="fab fa-github"></i> Repository
                        </a>
                      )}
                      {intern.certificateLink && intern.certificateLink !== "#" && (
                        <a href={intern.certificateLink} download className="btn btn-primary intern-footer-btn-v2">
                          <i className="fas fa-download"></i> Download Certificate
                        </a>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Certificate Lightbox Modal with Blur Backdrop */}
      {activeCert && (
        <div className="cert-modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setActiveCert(null)} aria-label="Close View">
              <i className="fas fa-times"></i>
            </button>
            <div className="cert-modal-body">
              <img src={activeCert} alt="Internship Certificate" className="cert-modal-img" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipsPage;
