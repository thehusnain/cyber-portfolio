import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero cv-hero" id="home">
      <div className="cv-wrapper">
        <div className="cv-profile-top">
          <div className="cv-profile-img-wrap">
            <div className="cyber-rings">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>
            <img src="/assets/profile.png" alt="Husnain" className="profile-image"
                 onError={(e) => e.target.src='https://ui-avatars.com/api/?name=Husnain&background=0a0a0a&color=00FF8C&size=220'} />
          </div>

          <div className="cv-name-block">
            <div className="tag glowing-tag">cybersecurity enthusiast · aspiring red teamer</div>
            <h1 className="glitch" data-text="HUSNAIN">HUSNAIN</h1>
            <p className="cv-role">Cybersecurity Student &amp; Aspiring Red Teamer</p>
            <p className="cv-location"><i className="fas fa-map-marker-alt"></i> Haripur, Pakistan | <i className="fas fa-university"></i> BS Computer Science</p>
            <div className="profile-status">
              <span className="status-indicator"></span>
              <span className="status-text">System Online</span>
            </div>
          </div>
        </div>

        <div className="cv-info-grid">
          <div className="cv-terminal-col">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot dot-red"></div>
                <div className="terminal-dot dot-yellow"></div>
                <div className="terminal-dot dot-green"></div>
                <span style={{ marginLeft: 'auto', color: '#555', fontSize: '0.8rem' }}>focus_areas.sh</span>
              </div>
              <div className="terminal-text">
                <p className="output">$ cat focus_areas.txt</p>
                <p className="output"><span className="prompt">&gt;</span> Web Application Penetration Testing</p>
                <p className="output"><span className="prompt">&gt;</span> Red Team Methodologies</p>
                <p className="output"><span className="prompt">&gt;</span> Cryptography &amp; Network Security</p>
                <p className="output"><span className="prompt">&gt;</span> CTF Challenges &amp; Vulnerable Labs</p>
                <p className="output">&nbsp;</p>
                <p><span className="prompt">$</span> <span className="command">whoami</span></p>
                <p className="output">thehusnain <span className="typing-cursor hide">▌</span></p>
              </div>
            </div>
          </div>

          <div className="cv-cards-col">
            <div className="cv-info-card fade-in">
              <div className="cv-info-card-icon"><i className="fas fa-trophy"></i></div>
              <div>
                <div className="cv-info-card-title">TryHackMe Ranking</div>
                <div className="cv-info-card-val">Top 2% Global</div>
              </div>
            </div>
            <div className="cv-info-card fade-in" style={{animationDelay: "0.1s"}}>
              <div className="cv-info-card-icon"><i className="fas fa-shield-alt"></i></div>
              <div>
                <div className="cv-info-card-title">Specialisation</div>
                <div className="cv-info-card-val">Web Pen Testing</div>
              </div>
            </div>
            <div className="cv-info-card fade-in" style={{animationDelay: "0.2s"}}>
              <div className="cv-info-card-icon"><i className="fas fa-flag"></i></div>
              <div>
                <div className="cv-info-card-title">CTF Challenges</div>
                <div className="cv-info-card-val">Active Participant</div>
              </div>
            </div>
            <div className="cv-info-card fade-in" style={{animationDelay: "0.3s"}}>
              <div className="cv-info-card-icon"><i className="fas fa-certificate"></i></div>
              <div>
                <div className="cv-info-card-title">Certifications</div>
                <div className="cv-info-card-val">5 Completed</div>
              </div>
            </div>
          </div>

          <div className="cv-cta-col">
            <p className="subtitle">Passionate about offensive security — learning &amp; practicing ethically every day.</p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary cyber-btn">View Projects</a>
              <a href="#contact" className="btn btn-secondary cyber-btn">Get In Touch</a>
            </div>
            <div className="cv-tools">
              <span className="tech-tag">Kali Linux</span>
              <span className="tech-tag">Burp Suite</span>
              <span className="tech-tag">Nmap</span>
              <span className="tech-tag">Wireshark</span>
              <span className="tech-tag">Metasploit</span>
              <span className="tech-tag">SQLMap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
