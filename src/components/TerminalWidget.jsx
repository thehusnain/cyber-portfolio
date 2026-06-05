import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './TerminalWidget.css';

const TerminalWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Initializing security console session...' },
    { type: 'output', text: 'Connected to local FSOCIETY gateway.' },
    { type: 'output', text: 'Type "help" to list administrative commands.' }
  ]);

  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const lottieContainerRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Load Lottie JSON Animation
  useEffect(() => {
    let anim;
    if (!isOpen && lottieContainerRef.current) {
      anim = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/icons/Code%20or%20Terminal.json'
      });
    }
    return () => {
      if (anim) anim.destroy();
    };
  }, [isOpen]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    // Add command to history
    const newHistory = [...history, { type: 'command', text: trimmed }];

    const cmd = trimmed.toLowerCase();
    let response = '';

    if (cmd === 'help') {
      response = (
        <div className="term-output">
          <p className="term-cyber">Available Commands:</p>
          <p>  <span className="term-success">cat info</span>     - Display personal background & research fields</p>
          <p>  <span className="term-success">cat projects</span> - Show active projects and software tools</p>
          <p>  <span className="term-success">cat skills</span>   - List cybersecurity and technical skills</p>
          <p>  <span className="term-success">cat contact</span>  - Display professional contact connections</p>
          <p>  <span className="term-success">clear</span>        - Clear terminal history screen</p>
          <p>  <span className="term-success">exit</span>         - Close the terminal window</p>
        </div>
      );
    } else if (cmd === 'cat info') {
      response = (
        <div className="term-output">
          <p className="term-cyber" style={{ fontWeight: 'bold' }}>[ HUSNAIN - SYSTEM OVERVIEW ]</p>
          <p><span className="term-info">Role:</span> BS Computer Science Student & Cybersecurity Researcher</p>
          <p><span className="term-info">Affiliation:</span> Red Team Labs & FSOCIETY</p>
          <p><span className="term-info">Status:</span> Top 2% Global rank on TryHackMe</p>
          <p><span className="term-info">Focus:</span> Web App Pen Testing, Network Analysis, Defensive Hardening, & Binary Auditing</p>
          <p className="term-muted">"Passionate about offensive security, ethical hacking, and building secure systems."</p>
        </div>
      );
    } else if (cmd === 'cat projects') {
      response = (
        <div className="term-output">
          <p className="term-cyber" style={{ fontWeight: 'bold' }}>[ FEATURED REPOSITORIES ]</p>
          <div style={{ margin: '6px 0 0 10px' }}>
            <p className="term-success">1. WriteupForge</p>
            <p className="term-muted">   Markdown CTF report builder with automated syntax highlights.</p>
          </div>
          <div style={{ margin: '6px 0 0 10px' }}>
            <p className="term-success">2. AZ-Dental Clinic Platform</p>
            <p className="term-muted">   Modern clinic automation with authenticated portal & real-time scheduling.</p>
          </div>
          <div style={{ margin: '6px 0 0 10px' }}>
            <p className="term-success">3. FSOCIETY Portfolio</p>
            <p className="term-muted">   This website. Gravity-defying animations & fully offline control interface.</p>
          </div>
          <p className="term-info" style={{ marginTop: '6px' }}>Type 'cat projects' or browse the 'Projects' page to view codes.</p>
        </div>
      );
    } else if (cmd === 'cat skills') {
      response = (
        <div className="term-output">
          <p className="term-cyber" style={{ fontWeight: 'bold' }}>[ CYBERSECURITY & TECH STACK ]</p>
          <p><span className="term-info">Operating Systems:</span> Kali Linux, Arch Linux, Debian, Windows Server</p>
          <p><span className="term-info">Sec Tools:</span> Burp Suite, Nmap, Wireshark, Metasploit, John the Ripper, Hydra</p>
          <p><span className="term-info">Languages:</span> Python, JavaScript (ES6+), HTML5/CSS3, Bash Shell Scripting</p>
          <p><span className="term-info">Concepts:</span> OWASP Top 10, Network Packet Auditing, Privilege Escalation, OSINT</p>
        </div>
      );
    } else if (cmd === 'cat contact') {
      response = (
        <div className="term-output">
          <p className="term-cyber" style={{ fontWeight: 'bold' }}>[ CONTACT TERMINAL DIRECTORY ]</p>
          <p><span className="term-success">GitHub:</span> <a href="https://github.com/thehusnain" target="_blank" rel="noreferrer" style={{ color: '#89ddff', textDecoration: 'underline' }}>github.com/thehusnain</a></p>
          <p><span className="term-success">TryHackMe:</span> <a href="https://tryhackme.com/p/thehusnain" target="_blank" rel="noreferrer" style={{ color: '#89ddff', textDecoration: 'underline' }}>tryhackme.com/p/thehusnain</a></p>
          <p><span className="term-success">LinkedIn:</span> <a href="https://linkedin.com/in/husnain-fiaz-7a4761369" target="_blank" rel="noreferrer" style={{ color: '#89ddff', textDecoration: 'underline' }}>linkedin.com/in/husnain-fiaz-7a4761369</a></p>
          <p><span className="term-success">Email:</span> <a href="mailto:contact@husnain.rocks" style={{ color: '#89ddff', textDecoration: 'underline' }}>contact@husnain.rocks</a></p>
        </div>
      );
    } else if (cmd === 'clear') {
      setHistory([]);
      setInputValue('');
      return;
    } else if (cmd === 'exit') {
      setIsOpen(false);
      setInputValue('');
      return;
    } else {
      response = (
        <div className="term-output">
          <span className="term-error">Command not found: "{trimmed}".</span> Type <span className="term-success">help</span> to list available commands.
        </div>
      );
    }

    setHistory([...newHistory, { type: 'output', text: response }]);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    }
  };

  return (
    <div className="terminal-widget-container">
      {/* Tooltip Badge */}
      {!isOpen && <div className="terminal-tooltip">Open Shell Console</div>}

      {/* Floating Action Button (FAB) */}
      {!isOpen && (
        <button className="terminal-fab" onClick={() => setIsOpen(true)}>
          <div ref={lottieContainerRef} className="terminal-lottie-container"></div>
        </button>
      )}

      {/* Terminal Window Panel */}
      {isOpen && (
        <div className="terminal-window" onClick={() => inputRef.current && inputRef.current.focus()}>
          {/* Header */}
          <div className="terminal-header">
            <div className="terminal-title">
              <i className="fas fa-terminal term-cyber"></i>
              <span>sheriff@sec: ~</span>
            </div>
            <div className="terminal-controls">
              <button className="term-btn term-min" onClick={() => setIsOpen(false)} title="Minimize"></button>
              <button className="term-btn term-close" onClick={() => setIsOpen(false)} title="Close"></button>
            </div>
          </div>

          {/* Console Body */}
          <div className="terminal-body" ref={bodyRef}>
            <div className="terminal-history">
              {history.map((line, idx) => (
                <div key={idx} className="terminal-line">
                  {line.type === 'command' ? (
                    <p>
                      <span className="term-prompt">sheriff@sec:~$</span>{' '}
                      <span className="term-cmd">{line.text}</span>
                    </p>
                  ) : typeof line.text === 'string' ? (
                    <p className="term-muted">{line.text}</p>
                  ) : (
                    line.text
                  )}
                </div>
              ))}
            </div>

            {/* Input Line */}
            <div className="terminal-input-row">
              <span className="term-prompt">sheriff@sec:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type command here..."
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalWidget;
