import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CertificatesPage.css';

const ALL_CERTS = [
  {
    img: "/assets/hackiver-CORE.png",
    title: "Certified Cybersecurity Foundations (CORE)",
    short: "Hackviser",
    issuer: "Hackviser",
    date: "July 14, 2026",
    category: "Cybersecurity",
    categoryColor: "#ff5f7e",
    categoryBg: "rgba(255,95,126,0.08)",
    categoryBorder: "rgba(255,95,126,0.2)",
    desc: "Earned Certified Cybersecurity Foundations (CORE) certification by completing training modules and practical security exercises on the Hackviser platform.",
    icon: "fa-shield-halved",
    link: "/assets/hackiver-CORE.pdf",
    isPdf: true,
  },
  {
    img: "/assets/introduction-to-forensic.png",
    title: "Introduction to Digital Forensics",
    short: "THM",
    issuer: "TryHackMe",
    date: "Aug 1, 2026",
    category: "Cybersecurity",
    categoryColor: "#3b82f6",
    categoryBg: "rgba(59,130,246,0.08)",
    categoryBorder: "rgba(59,130,246,0.2)",
    desc: "Hands-on certification in digital forensics covering Linux file system investigation, CLI analysis, ZIP password cracking, steganography, and mock disk image analysis.",
    icon: "fa-magnifying-glass",
    link: "/assets/Introduction to Digital Forensics-course.pdf",
    isPdf: true,
  },
  {
    img: "/assets/linux-unhatched.png",
    title: "Linux Unhatched",
    short: "Cisco",
    issuer: "Cisco Networking Academy",
    date: "Aug 4, 2026",
    category: "Networking",
    categoryColor: "#10b981",
    categoryBg: "rgba(16,185,129,0.08)",
    categoryBorder: "rgba(16,185,129,0.2)",
    desc: "Issued by Cisco Networking Academy for mastering fundamental Linux command-line concepts, directory navigation, permissions, and core Linux operating system operations.",
    icon: "fa-terminal",
    link: "/assets/Linux-Unhatched-Certificate.pdf",
    isPdf: true,
  },
  {
    img: "/assets/Networking-Basic-From-CISCO.png",
    title: "Networking Basics",
    short: "Cisco",
    issuer: "Cisco Networking Academy",
    date: "2026",
    category: "Networking",
    categoryColor: "#10b981",
    categoryBg: "rgba(16,185,129,0.08)",
    categoryBorder: "rgba(16,185,129,0.2)",
    desc: "Fundamental concepts of networking: network architecture, routing, switching, IP addressing, and basic network configuration.",
    icon: "fa-network-wired",
    link: "/assets/Networking-Basic-From-CISCO.pdf",
    isPdf: true,
  },
  {
    img: "/assets/CCSDF_Certificate_CCSDF-2026-IT-CH-190.png",
    title: "CCSDF IT Quiz Competition - 37th Place",
    short: "CCSDF",
    issuer: "CCSDF",
    date: "2026",
    category: "Award",
    categoryColor: "#ef4444",
    categoryBg: "rgba(239,68,68,0.08)",
    categoryBorder: "rgba(239,68,68,0.2)",
    desc: "Awarded for achieving the 37th position in the final round out of 60 competitors in the CCSDF national IT quiz competition.",
    icon: "fa-award",
    link: "/assets/CCSDF_Certificate_CCSDF-2026-IT-CH-190.png",
    isPdf: false,
  },
  {
    img: "/assets/certificate-of-appreciation.png",
    title: "Certificate of Appreciation",
    short: "Appreciation",
    issuer: "Govt Akhter Nawaz Khan Shaheed Degree College, KTS, Haripur",
    date: "2025",
    category: "Award",
    categoryColor: "#ef4444",
    categoryBg: "rgba(239,68,68,0.08)",
    categoryBorder: "rgba(239,68,68,0.2)",
    desc: "Awarded in recognition of representing the college in cybersecurity competitions and demonstrating exceptional skills in ethical hacking and digital forensics.",
    icon: "fa-award",
    link: "/assets/certificate-of-appreciation.png",
    isPdf: false,
  },
  {
    img: "/assets/readteamcertificate.png",
    title: "Certified Threat Intelligence & Governance Analyst",
    short: "CTIGA",
    issuer: "Red Team Leaders",
    date: "Feb 2026",
    category: "Cybersecurity",
    categoryColor: "#ff5f7e",
    categoryBg: "rgba(255,95,126,0.08)",
    categoryBorder: "rgba(255,95,126,0.2)",
    desc: "Advanced training covering threat actor profiling, threat intelligence lifecycle, security governance frameworks, indicators of compromise, and professional intelligence reporting.",
    icon: "fa-shield-halved",
    link: "/assets/readteamcertificate.png",
    isPdf: false,
  },
  {
    img: "/assets/cisco.png",
    title: "Introduction to Cybersecurity",
    short: "Cisco",
    issuer: "Cisco Networking Academy",
    date: "2026",
    category: "Networking",
    categoryColor: "#10b981",
    categoryBg: "rgba(16,185,129,0.08)",
    categoryBorder: "rgba(16,185,129,0.2)",
    desc: "Fundamental concepts in cybersecurity: online safety, data confidentiality, vulnerability identification, and mitigation strategies using Cisco frameworks.",
    icon: "fa-network-wired",
    link: "/assets/cisco.png",
    isPdf: false,
  },
  {
    img: "/assets/presecuirty.png",
    title: "Pre Security Learning Path",
    short: "THM",
    issuer: "TryHackMe",
    date: "2026",
    category: "Learning Path",
    categoryColor: "#10b981",
    categoryBg: "rgba(16,185,129,0.08)",
    categoryBorder: "rgba(16,185,129,0.2)",
    desc: "Foundational cybersecurity path covering Web Technologies, Network Fundamentals, Linux Operating System basics, and core security concepts. Part of TryHackMe's structured curriculum.",
    icon: "fa-laptop-code",
    link: "/assets/presecuirty.png",
    isPdf: false,
  },
  {
    img: "/assets/webinar.png",
    title: "Cyber Security Fundamentals Webinar",
    short: "Webinar",
    issuer: "SecureDevLabs",
    date: "2025",
    category: "Training",
    categoryColor: "#a855f7",
    categoryBg: "rgba(168,85,247,0.08)",
    categoryBorder: "rgba(168,85,247,0.2)",
    desc: "Webinar covering essential components of modern web security, secure code design principles, and mitigation of top OWASP vulnerability classes. Hosted by SecureDevLabs.",
    icon: "fa-users",
    link: "/assets/webinar.png",
    isPdf: false,
  },
  {
    img: "/assets/internships/securedevlabs/secure-dev-labs.jpg",
    title: "Ethical Hacking Internship Certificate",
    short: "SDL",
    issuer: "Secure Dev Labs",
    date: "2026",
    category: "Internship",
    categoryColor: "#f59e0b",
    categoryBg: "rgba(245,158,11,0.08)",
    categoryBorder: "rgba(245,158,11,0.2)",
    desc: "One-month hands-on internship focusing on reconnaissance, web mapping, vulnerability validation, and structured reporting. Track: Ethical Hacking. Instructor: Muhammad Saad Rajput.",
    icon: "fa-briefcase",
    link: "/assets/internships/securedevlabs/secure-dev-labs.jpg",
    isPdf: false,
  },
  {
    img: "/assets/ctfs/secleaf-ctf/certificate-page-1.png",
    title: "CTF Participation Certificate",
    short: "SecLeaf",
    issuer: "SecLeaf CTF",
    date: "2025",
    category: "CTF",
    categoryColor: "#10b981",
    categoryBg: "rgba(16,185,129,0.08)",
    categoryBorder: "rgba(16,185,129,0.2)",
    desc: "Certificate of participation in the SecLeaf CTF competition. Competed in challenges spanning Web Exploitation, Reverse Engineering, Cryptography, and Forensics.",
    icon: "fa-flag",
    link: "/assets/ctfs/secleaf-ctf/certificate.pdf",
    isPdf: true,
  },
  {
    img: "/assets/ctfs/Hack4Bug-ctf/badge-page-1.png",
    title: "CTF Player Badge",
    short: "Hack4Bug",
    issuer: "Hack4Bug CTF",
    date: "2025",
    category: "CTF",
    categoryColor: "#10b981",
    categoryBg: "rgba(16,185,129,0.08)",
    categoryBorder: "rgba(16,185,129,0.2)",
    desc: "Official CTF Player Badge awarded for participation in the Hack4Bug security competition. Engaged in bug-hunting scenarios, real-world exploitation tasks, and team collaboration.",
    icon: "fa-bug",
    link: "/assets/ctfs/Hack4Bug-ctf/Hack4Bug - CTF Player Badge.pdf",
    isPdf: true,
  },
  {
    img: "/assets/ctfs/boro-ctf/boroCTF-2026-certificate.png",
    title: "boroCTF Participant Certificate",
    short: "boroCTF",
    issuer: "boroCTF",
    date: "June 2026",
    category: "CTF",
    categoryColor: "#10b981",
    categoryBg: "rgba(16,185,129,0.08)",
    categoryBorder: "rgba(16,185,129,0.2)",
    desc: "Certificate of participation in boroCTF 2026. Achieved rank #76 in the Open Division with Team Fsociety, scoring 10,600 points.",
    icon: "fa-flag",
    link: "/assets/ctfs/boro-ctf/boroCTF-2026-certificate.pdf",
    isPdf: true,
  },
];

export const DEFAULT_FULL_CERTS = ALL_CERTS;

// Premium 3D Card Tilt and Glare overlay
const TiltCard = ({ children, className, style = {} }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;
    
    // Smooth 3D tilt calculation
    const rotateX = -normY * 12;
    const rotateY = normX * 12;
    
    // Dynamic Glare location
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    
    setTilt({ rotateX, rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 0.15 });
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
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.015, 1.015, 1.015)`,
        transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out, border-color 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glowing Glare Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 65%)`,
          opacity: glare.opacity,
          pointerEvents: 'none',
          zIndex: 10,
          mixBlendMode: 'overlay',
          borderRadius: 'inherit',
          transition: 'opacity 0.25s ease',
        }}
      />
      {/* 3D Content Depth Wrapper */}
      <div style={{ transform: 'translateZ(18px)', transformStyle: 'preserve-3d', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
};

const CertCard = ({ cert, onPreview }) => (
  <TiltCard className="cert-page-card fade-in">
    {/* Image preview area with 3D Parallax Depth */}
    <div
      className="cert-page-img-wrap"
      onClick={() => onPreview(cert)}
      style={{ cursor: 'pointer', transform: 'translateZ(10px)' }}
      title="Click to preview"
    >
      {cert.img ? (
        <img
          src={cert.img}
          alt={cert.title}
          onError={(e) => {
            e.target.src = 'https://ui-avatars.com/api/?name=Certificate&background=0f172a&color=10b981&size=400';
          }}
        />
      ) : (
        <div className="cert-pdf-placeholder">
          <i className="fas fa-file-pdf"></i>
          <span>PDF Document</span>
        </div>
      )}
      <div className="cert-img-hover-overlay">
        <i className="fas fa-expand"></i>
      </div>
    </div>

    <div className="cert-page-info" style={{ transform: 'translateZ(15px)' }}>
      {/* Category tag + date */}
      <div className="cert-meta-row">
        <span
          className="cert-category-tag"
          style={{
            color: cert.categoryColor,
            backgroundColor: cert.categoryBg,
            borderColor: cert.categoryBorder,
          }}
        >
          <i className={`fas ${cert.icon}`}></i> {cert.category}
        </span>
        <span className="cert-date-badge">
          <i className="fas fa-calendar-alt"></i> {cert.date}
        </span>
      </div>

      <h3>{cert.title}</h3>
      <span className="cert-page-issuer">
        <i className="fas fa-building"></i> {cert.issuer}
      </span>
      <p>{cert.desc}</p>

      <div className="cert-page-actions" style={{ transform: 'translateZ(5px)' }}>
        <button
          className="cert-page-btn btn-preview"
          onClick={() => onPreview(cert)}
        >
          <i className="fas fa-image"></i> View Image
        </button>
        <a
          href={cert.link}
          target="_blank"
          rel="noreferrer"
          download={cert.isPdf ? true : undefined}
          className="cert-page-btn btn-download"
          title={cert.isPdf ? "Download PDF Certificate" : "Open Certificate Asset"}
        >
          <i className={`fas ${cert.isPdf ? 'fa-file-pdf' : 'fa-external-link-alt'}`}></i>
          {cert.isPdf ? 'Download PDF' : 'Open Image'}
        </a>
      </div>
    </div>
  </TiltCard>
);

const CertificatesPage = () => {
  const [activeCert, setActiveCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(ALL_CERTS.map(c => c.category)))];

  const filtered = activeCategory === 'All'
    ? ALL_CERTS
    : ALL_CERTS.filter(c => c.category === activeCategory);

  return (
    <div className="certificates-page-container">
      <Link to="/" className="cert-back-link">
        <i className="fas fa-arrow-left"></i> Back to Portfolio
      </Link>

      <header className="certificates-page-header">
        <h1>Certifications</h1>
        <p className="certificates-page-subtitle">
          Credentials, learning paths, CTF badges and training achievements in cybersecurity.
        </p>

        {/* Category filter pills */}
        <div className="cert-filter-row">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cert-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="certificates-detailed-grid">
        {filtered.map((cert, i) => (
          <CertCard key={i} cert={cert} onPreview={setActiveCert} />
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <div className="cert-modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
            <button
              className="cert-modal-close"
              onClick={() => setActiveCert(null)}
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="cert-modal-header">
              <span
                className="cert-category-tag"
                style={{
                  color: activeCert.categoryColor,
                  backgroundColor: activeCert.categoryBg,
                  borderColor: activeCert.categoryBorder,
                }}
              >
                <i className={`fas ${activeCert.icon}`}></i> {activeCert.category}
              </span>
              <h3>{activeCert.title}</h3>
              <p className="cert-modal-issuer">{activeCert.issuer} · {activeCert.date}</p>
            </div>

            <div className="cert-modal-body">
              <img
                src={activeCert.img}
                alt={activeCert.title}
                className="cert-modal-img"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=Certificate&background=0f172a&color=10b981&size=600';
                }}
              />
            </div>

            <div className="cert-modal-footer" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
              {activeCert.isPdf && (
                <a
                  href={activeCert.link}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="cert-page-btn btn-download"
                  style={{ padding: '0.6rem 1.4rem', fontSize: '0.95rem' }}
                >
                  <i className="fas fa-file-pdf"></i> Download PDF Certificate
                </a>
              )}
              <a
                href={activeCert.img}
                target="_blank"
                rel="noreferrer"
                className="cert-page-btn btn-preview"
                style={{ padding: '0.6rem 1.4rem', fontSize: '0.95rem' }}
              >
                <i className="fas fa-expand"></i> View Raw Image
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;
