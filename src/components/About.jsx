import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const codeRef = useRef(null);

  const codeText = `info="Husnain"
role="Cybersecurity Learner & Aspiring Red Teamer"
location="Haripur, Pakistan"
education="BS Computer Science"

echo "Loading Achievements..."
THM_RANK="Top 2% Global"
CERTS=("Threat Intel (CTIGA)" "Pre Security" "CTF Participant")

echo "Initializing Tools and Skills..."
skills=("Web Pen Testing" "Cryptography" "Burp Suite" "Wireshark")

for skill in "\${skills[@]}"; do
  echo " -> Loading module: \$skill"
done

echo "System fully operational. Awaiting engagement..."
`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (codeRef.current) {
      observer.observe(codeRef.current);
    }
    
    return () => {
      if (codeRef.current) {
        observer.unobserve(codeRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(codeText.slice(0, i));
        i++;
        if (i > codeText.length) {
          clearInterval(interval);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [hasStarted, codeText]);

  return (
    <section id="about">
      <div className="section-container">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="about-content fade-in">
            <div className="about-text">
              <ul className="about-points">
                <li>Hi — I'm <span className="highlight">Husnain</span>, a passionate cybersecurity enthusiast and BS Computer Science student from <strong>Haripur, Pakistan</strong>.</li>
                <li>Ranked in the <strong>top 2%</strong> globally on TryHackMe, demonstrating consistent dedication to learning.</li>
                <li>Active participant in CTF challenges and creator of personalized vulnerable labs for legal practice.</li>
                <li>Specialized focus on <strong>web application penetration testing</strong> and <strong>cryptography fundamentals</strong>.</li>
                <li>Utilizing <strong>Kali Linux</strong> as my primary OS, with a tech stack including Burp Suite, Wireshark, Metasploit, and GitHub.</li>
              </ul>
            </div>
            <div className="about-image">
              <div className="code-window">
                <div className="code-header">
                  <div className="code-dot dot-red"></div>
                  <div className="code-dot dot-yellow"></div>
                  <div className="code-dot dot-green"></div>
                  <span className="code-title">about.sh</span>
                </div>
                <div className="code-content" ref={codeRef}>
                  <pre><code style={{ color: '#00FF8C', whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)', lineHeight: '1.6' }}>
{displayedText}<span className="typing-cursor hide" style={{ opacity: hasStarted && displayedText.length === codeText.length ? 0 : 1, animation: displayedText.length === codeText.length ? 'blink 1s step-end infinite' : 'none' }}>▌</span>
                  </code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
