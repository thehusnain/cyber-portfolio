import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Certifications.css';

const DEFAULT_CERTS = [
  {
    img: "/assets/hackiver-CORE.png",
    title: "Certified Cybersecurity Foundations (CORE)",
    issuer: "Hackviser",
    desc: "Earned Certified Cybersecurity Foundations (CORE) certification by completing training modules and practical security exercises.",
    date: "July 2026",
    icon: "fa-shield-halved"
  },
  {
    img: "/assets/readteamcertificate.png",
    title: "Certified Threat Intelligence & Governance Analyst (CTIGA)",
    issuer: "Red Team Leaders",
    desc: "Advanced knowledge in threat intelligence methodologies, active security governance frameworks, and forensic mapping.",
    date: "Feb 2026",
    icon: "fa-shield-halved"
  },
  {
    img: "/assets/presecuirty.png",
    title: "Pre Security Learning Path",
    issuer: "TryHackMe",
    desc: "Comprehensive foundational coverage in networking concepts, operating systems, web applications, and cyber theory.",
    date: "2026",
    icon: "fa-network-wired"
  },
  {
    img: "/assets/certificate-of-appreciation.png",
    title: "Certificate of Appreciation",
    issuer: "Govt Akhter Nawaz Khan Shaheed Degree College, KTS, Haripur",
    desc: "Awarded for representing the college in cybersecurity and demonstrating technical excellence.",
    date: "2026",
    icon: "fa-award"
  }
];

// Reusable 3D Card Tilt Component for Homepage
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
    
    const rotateX = -normY * 12;
    const rotateY = normX * 12;
    
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

const Certifications = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    const savedCerts = localStorage.getItem('portfolio-certs');
    if (savedCerts) {
      try {
        const parsed = JSON.parse(savedCerts);

        // Check if CORE certificate is present, if not prepend it
        const hasCore = parsed.some(c => c.title.includes("CORE"));
        let updated = parsed;
        if (!hasCore) {
          updated = [DEFAULT_CERTS[0], ...parsed];
          localStorage.setItem('portfolio-certs', JSON.stringify(updated));
        }

        // Force inject new certificate if missing, or update date if stored as 2025
        const hasAppreciation = updated.some(c => c.title.includes("Appreciation"));
        if (!hasAppreciation) {
          const appreciationCert = DEFAULT_CERTS.find(c => c.title.includes("Appreciation"));
          updated = [...updated, appreciationCert];
          localStorage.setItem('portfolio-certs', JSON.stringify(updated));
        } else {
          let modified = false;
          updated.forEach(c => {
            if (c.title.includes("Appreciation") && c.date === "2025") {
              c.date = "2026";
              modified = true;
            }
          });
          if (modified) {
            localStorage.setItem('portfolio-certs', JSON.stringify(updated));
          }
        }
        setCerts(updated.slice(0, 3));
      } catch (e) {
        setCerts(DEFAULT_CERTS.slice(0, 3));
      }
    } else {
      setCerts(DEFAULT_CERTS.slice(0, 3));
      localStorage.setItem('portfolio-certs', JSON.stringify(DEFAULT_CERTS));
    }
  }, []);

  return (
    <section id="certifications">
      <div className="section-container">
        <h2>Certifications</h2>

        <div className="certifications-grid">
          {certs.map((cert, index) => (
            <TiltCard
              key={index}
              className="cert-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cert-card-header" style={{ transform: 'translateZ(10px)' }}>
                <div className="cert-icon-wrap">
                  <i className={`fas ${cert.icon || "fa-award"}`}></i>
                </div>
                <div className="cert-meta">
                  <span className="cert-date">{cert.date || "2026"}</span>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
              <h3 className="cert-card-title" style={{ transform: 'translateZ(15px)' }}>{cert.title}</h3>
              <p className="cert-description" style={{ transform: 'translateZ(5px)' }}>{cert.desc}</p>
            </TiltCard>
          ))}
        </div>

        <div className="certifications-cta">
          <Link to="/certificates" className="btn btn-primary cert-view-all-btn">
            <i className="fas fa-award"></i> View All Certificates &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
export { DEFAULT_CERTS };
