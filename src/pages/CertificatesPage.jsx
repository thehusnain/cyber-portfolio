import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/Certifications.css'; // Reusing some base styles
import './CertificatesPage.css'; // Page specific styles

const CertificatesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cert-container" style={{ padding: '2rem', paddingTop: '100px', maxWidth: '1200px', margin: '0 auto' }}>
      <Link to="/#certifications" className="back-link" style={{ display: 'inline-block', marginBottom: '2rem', color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }}>
        <i className="fas fa-arrow-left"></i> Back to Portfolio
      </Link>
      
      <header className="cert-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="glitch" data-text="CERTIFICATIONS" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>CERTIFICATIONS</h1>
        <p className="subtitle" style={{ color: '#aaa' }}>Official recognition of my cybersecurity expertise and continuous learning</p>
      </header>

      <div className="cert-grid-page">
        <CertCard 
          img="/assets/readteamcertificate.png"
          title="Certified Threat Intelligence & Governance Analyst"
          issuer="Red Team Leaders"
          desc="Advanced certification focusing on threat intelligence methodologies and security governance."
        />
        <CertCard 
          img="/assets/cisco.png"
          title="Introduction to Cybersecurity"
          issuer="Cisco Networking Academy"
          desc="Foundation knowledge in cybersecurity threats, risks, and mitigation strategies."
        />
        <CertCard 
          img="/assets/presecuirty.png"
          title="Pre Security Learning Path"
          issuer="TryHackMe"
          desc="Comprehensive coverage of networking, web applications, and security fundamentals."
        />
        <CertCard 
          img="/assets/webinar.png"
          title="Cyber Security Fundamentals Webinar"
          issuer="SecureDevLabs"
          desc="Acknowledge of participation in advanced cybersecurity fundamentals webinar."
        />
      </div>
    </div>
  );
};

const CertCard = ({ img, title, issuer, desc }) => (
  <div className="full-cert-card fade-in">
    <div className="cert-img-wrapper">
      <img src={img} alt={title} />
    </div>
    <div className="cert-info">
      <h3>{title}</h3>
      <span className="cert-issuer">{issuer}</span>
      <p>{desc}</p>
      <a href={img} target="_blank" rel="noreferrer" className="cert-btn"><i className="fas fa-eye"></i> View Full Image</a>
    </div>
  </div>
);

export default CertificatesPage;
