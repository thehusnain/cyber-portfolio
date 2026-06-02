import React from 'react';
import ScrollReveal from './ScrollReveal';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="section-container">
        <h2>About Me</h2>
        
        <div className="about-grid">
          {/* Left Column: Bio text */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="about-details">
              <p>
                Hi, I'm <strong className="highlight">Husnain</strong>, a BS Computer Science student passionate about Cybersecurity, Linux, and Network Security.
              </p>
              <p>
                I enjoy exploring how systems work, solving security challenges, and building practical projects that improve my technical skills.
              </p>
              <p>
                My experience includes working with Kali Linux, Python, Docker, SQL databases, networking concepts, and cybersecurity labs.
              </p>
              <p>
                I actively participate in CTF competitions and continuously learn through hands-on practice, self-study, and real-world projects.
              </p>
              <p>
                My goal is to grow as a cybersecurity professional while contributing to secure and innovative technology solutions.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Highlight Info Cards (Stacked) */}
          <ScrollReveal direction="right" delay={0.25}>
            <div className="about-cards-info-stacked">
              <div className="about-info-card-stacked float-bob-1">
                <div className="card-header-icon-wrap">
                  <i className="fas fa-university"></i>
                </div>
                <div className="card-desc">
                  <h4>Academic Education</h4>
                  <p className="card-main-val">BS CS &amp; DIT</p>
                  <p className="card-sub-val">Govt Degree College, KTS / Govt College of Commerce, Haripur</p>
                </div>
              </div>
              
              <div className="about-info-card-stacked float-bob-2">
                <div className="card-header-icon-wrap">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="card-desc">
                  <h4>Hands-On Laboratories</h4>
                  <p className="card-main-val">TryHackMe Practice Labs</p>
                  <p className="card-sub-val">Vulnerability Scanning, Privilege Escalation</p>
                </div>
              </div>

              <div className="about-info-card-stacked float-bob-3">
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
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  );
};

export default About;
