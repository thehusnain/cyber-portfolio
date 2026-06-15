import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CertificatesPage.css';

const ALL_CERTS = [
  {
    img: "/assets/Networking-Basic-From-CISCO.pdf",
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
];

export const DEFAULT_FULL_CERTS = ALL_CERTS;

const CertCard = ({ cert, onPreview }) => (
  <div className="cert-page-card fade-in">
    {/* Image preview or PDF placeholder */}
    <div
      className="cert-page-img-wrap"
      onClick={() => onPreview(cert)}
      style={{ cursor: 'pointer' }}
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

    <div className="cert-page-info">
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

      <div className="cert-page-actions">
        <button
          className="cert-page-btn btn-preview"
          onClick={() => onPreview(cert)}
        >
          <i className="fas fa-eye"></i> Preview
        </button>
        <a
          href={cert.link}
          target="_blank"
          rel="noreferrer"
          download={cert.isPdf}
          className="cert-page-btn btn-download"
        >
          <i className={`fas ${cert.isPdf ? 'fa-download' : 'fa-external-link-alt'}`}></i>
          {cert.isPdf ? 'Download PDF' : 'Open Full'}
        </a>
      </div>
    </div>
  </div>
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
              {activeCert.isPdf ? (
                <div className="w-full h-[65vh] min-h-[450px]">
                  <iframe
                    src={`${activeCert.link}#toolbar=0`}
                    title={activeCert.title}
                    className="w-full h-full border-0 rounded-lg bg-[#0f1020]"
                  />
                </div>
              ) : activeCert.img ? (
                <img src={activeCert.img} alt={activeCert.title} className="cert-modal-img" />
              ) : (
                <div className="cert-modal-pdf-notice">
                  <i className="fas fa-file-pdf"></i>
                  <p>This certificate is a PDF document.</p>
                  <a
                    href={activeCert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-download"></i> Open / Download PDF
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;
