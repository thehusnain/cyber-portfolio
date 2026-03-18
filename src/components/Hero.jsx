import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const [typedLines, setTypedLines] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const terminalRef = useRef(null);

  const lines = [
    { type: 'command', text: '$ cat focus_areas.txt' },
    { type: 'output', prompt: '>', text: 'Web Application Penetration Testing' },
    { type: 'output', prompt: '>', text: 'Red Team Methodologies' },
    { type: 'output', prompt: '>', text: 'Cryptography & Network Security' },
    { type: 'output', prompt: '>', text: 'CTF Challenges & Vulnerable Labs' },
    { type: 'output', text: ' ' },
    { type: 'command', prompt: '$', text: 'whoami' },
  ];

  useEffect(() => {
    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let currentLines = [];

    const typeNextChar = () => {
      if (currentLineIndex >= lines.length) {
        setIsDone(true);
        return;
      }

      const currentLine = lines[currentLineIndex];
      const targetText = currentLine.text;

      if (currentCharIndex === 0) {
        currentLines.push({ ...currentLine, displayedText: '' });
      }

      if (currentCharIndex < targetText.length) {
        currentLines[currentLineIndex].displayedText += targetText[currentCharIndex];
        setTypedLines([...currentLines]);
        currentCharIndex++;
        setTimeout(typeNextChar, currentLine.type === 'command' ? 50 : 20);
      } else {
        currentLineIndex++;
        currentCharIndex = 0;
        setTimeout(typeNextChar, 150);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          typeNextChar();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
              onError={(e) => e.target.src = 'https://ui-avatars.com/api/?name=Husnain&background=0a0a0a&color=00FF8C&size=220'} />
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
            <div className="terminal-window" ref={terminalRef}>
              <div className="terminal-header">
                <div className="terminal-dot dot-red"></div>
                <div className="terminal-dot dot-yellow"></div>
                <div className="terminal-dot dot-green"></div>
                <span style={{ marginLeft: 'auto', color: '#555', fontSize: '0.8rem' }}>focus_areas.sh</span>
              </div>
              <div className="terminal-text">
                {typedLines.map((line, idx) => (
                  <p key={idx} className={line.type === 'output' ? 'output' : ''}>
                    {line.prompt && <span className="prompt">{line.prompt}</span>}
                    {line.type === 'command' ? (
                      <span className="command">{line.displayedText}</span>
                    ) : (
                      line.displayedText
                    )}
                    {idx === typedLines.length - 1 && !isDone && (
                      <span className="typing-cursor">▌</span>
                    )}
                  </p>
                ))}
                {isDone && (
                  <p className="output">thehusnain <span className="typing-cursor">▌</span></p>
                )}
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
            <div className="cv-info-card fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="cv-info-card-icon"><i className="fas fa-shield-alt"></i></div>
              <div>
                <div className="cv-info-card-title">Specialisation</div>
                <div className="cv-info-card-val">Web Pen Testing</div>
              </div>
            </div>
            <div className="cv-info-card fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="cv-info-card-icon"><i className="fas fa-flag"></i></div>
              <div>
                <div className="cv-info-card-title">CTF Challenges</div>
                <div className="cv-info-card-val">Active Participant</div>
              </div>
            </div>
            <div className="cv-info-card fade-in" style={{ animationDelay: "0.3s" }}>
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
              <span className="tech-tag"><i className="fab fa-linux"></i> Kali Linux</span>
              <span className="tech-tag"><i className="fas fa-spider"></i> Burp Suite</span>
              <span className="tech-tag"><i className="fas fa-search"></i> Nmap</span>
              <span className="tech-tag"><i className="fas fa-network-wired"></i> Wireshark</span>
              <span className="tech-tag"><i className="fas fa-biohazard"></i> Metasploit</span>
              <span className="tech-tag"><i className="fas fa-database"></i> SQLMap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
