import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CertificatesPage.css';

const DEFAULT_FULL_CERTS = [
  {
    img: "/assets/readteamcertificate.png",
    title: "Certified Threat Intelligence & Governance Analyst (CTIGA)",
    issuer: "Red Team Leaders",
    desc: "Advanced training covering threat actor profiling, threat intelligence lifecycle, security governance frameworks, indicators of compromise, and intelligence reporting.",
    date: "Feb 2026",
    icon: "fa-shield-halved"
  },
  {
    img: "/assets/cisco.png",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    desc: "Fundamental concepts in cybersecurity, exploring safety online, data confidentiality, vulnerability identification, and mitigation strategies.",
    date: "2026",
    icon: "fa-network-wired"
  },
  {
    img: "/assets/presecuirty.png",
    title: "Pre Security Learning Path",
    issuer: "TryHackMe",
    desc: "Foundational cybersecurity path including Web Technologies, Network Fundamentals, Linux Operating System basics, and basic security concepts.",
    date: "2026",
    icon: "fa-laptop-code"
  },
  {
    img: "/assets/webinar.png",
    title: "Cyber Security Fundamentals Webinar",
    issuer: "SecureDevLabs",
    desc: "Webinar covering essential components of modern web security, secure code design principles, and mitigation of top OWASP vulnerability classes.",
    date: "2025",
    icon: "fa-users"
  }
  ,
  {
    img: "/assets/internships/securedevlabs/secure-dev-labs.jpg",
    title: "Secure Dev Labs — Ethical Hacking Internship",
    issuer: "Secure Dev Labs",
    desc: "One-month hands-on internship focused on reconnaissance, web mapping, vulnerability validation, and reporting. Instructor: Muhammad Saad Rajput. Intern: Husnain Fiaz.",
    date: "2026",
    icon: "fa-briefcase"
  }
];

const CertificatesPage = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedCerts = localStorage.getItem('portfolio-certs');
    if (savedCerts) {
      try {
        setCerts(JSON.parse(savedCerts));
      } catch (e) {
        setCerts(DEFAULT_FULL_CERTS);
      }
    } else {
      setCerts(DEFAULT_FULL_CERTS);
      localStorage.setItem('portfolio-certs', JSON.stringify(DEFAULT_FULL_CERTS));
    }
  }, []);

  return (
    <div className="certificates-page-container">
      <Link to="/" className="cert-back-link">
        <i className="fas fa-arrow-left"></i> Back to Portfolio
      </Link>
      
      <header className="certificates-page-header">
        <h1>Certifications</h1>
        <p className="certificates-page-subtitle">
          Credentials, learning paths, and training achievements in cybersecurity and software engineering.
        </p>
      </header>

      <div className="certificates-detailed-grid">
        {certs.map((cert, index) => (
          <CertCard 
            key={index}
            img={cert.img}
            title={cert.title}
            issuer={cert.issuer}
            desc={cert.desc}
          />
        ))}
      </div>
    </div>
  );
};

const CertCard = ({ img, title, issuer, desc }) => (
  <div className="cert-page-card fade-in">
    <div className="cert-page-img-wrap">
      <img 
        src={img} 
        alt={title} 
        onError={(e) => {
          e.target.src = 'https://ui-avatars.com/api/?name=Certificate&background=0f172a&color=00d9ff&size=400';
        }}
      />
    </div>
    <div className="cert-page-info">
      <h3>{title}</h3>
      <span className="cert-page-issuer">{issuer}</span>
      <p>{desc}</p>
      <div className="cert-page-actions">
        <a href={img} target="_blank" rel="noreferrer" className="btn btn-secondary cert-page-btn">
          <i className="fas fa-eye"></i> View Full Image
        </a>
      </div>
    </div>
  </div>
);

export default CertificatesPage;
export { DEFAULT_FULL_CERTS };
