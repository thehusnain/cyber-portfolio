import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="section-container">
        <h2>About Me</h2>
        
        <div className="about-grid">
          {/* Left Column: Bio text */}
          <div className="about-details fade-in">
            <p>
              Hello! I'm <strong className="highlight">Husnain</strong>, a dedicated Computer Science student 
              specialized in cybersecurity, offensive security methodologies, and ethical hacking.
            </p>
            <p>
              My journey is fueled by a relentless passion for identifying vulnerabilities and understanding the 
              intricacies of secure network systems. Through rigorous self-guided practice and academic coursework, 
              I have developed hands-on capabilities in Web Application Penetration Testing, Cryptography, 
              and Forensics analysis.
            </p>
            <p>
              I actively participate in international Capture The Flag (CTF) competitions, collaborating with my team 
              <strong className="highlight">FSOCIETY</strong>. In addition, I founded <strong className="highlight">Fsociety pk</strong>,
              a local research collective that builds open-source security tools and trains emerging talent.
            </p>
          </div>

          {/* Right Column: Highlight Info Cards (Stacked) */}
          <div className="about-cards-info-stacked fade-in">
            <div className="about-info-card-stacked">
              <div className="card-header-icon-wrap">
                <i className="fas fa-university"></i>
              </div>
              <div className="card-desc">
                <h4>Academic Education</h4>
                <p className="card-main-val">BS CS &amp; DIT</p>
                <p className="card-sub-val">Govt Degree College, KTS / Govt College of Commerce, Haripur</p>
              </div>
            </div>
            
            <div className="about-info-card-stacked">
              <div className="card-header-icon-wrap">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="card-desc">
                <h4>Hands-On Laboratories</h4>
                <p className="card-main-val">TryHackMe Practice Labs</p>
                <p className="card-sub-val">Vulnerability Scanning, Privilege Escalation</p>
              </div>
            </div>

            <div className="about-info-card-stacked">
              <div className="card-header-icon-wrap">
                <i className="fas fa-users"></i>
              </div>
              <div className="card-desc">
                <h4>Security Teams</h4>
                <p className="card-main-val">FSOCIETY (CTF Team)</p>
                <p className="card-sub-val">Collaborative Threat Solving &amp; Pwn</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
