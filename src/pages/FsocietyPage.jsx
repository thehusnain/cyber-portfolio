import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FsocietyPage.css';

const FsocietyPage = () => {
  const [activeTab, setActiveTab] = useState('manifesto');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const terminalDocs = {
    manifesto: `[ Fsociety pk MANIFESTO ]
==================================================
1. We believe in open, accessible security education.
2. We research, build, and publish open-source security tools.
3. We operate under a strict ethical framework of legal disclosure.
4. We foster collaboration among security professionals in Pakistan.
==================================================
Status: ACTIVE & COMPLIANT`,
    
    operators: `[ OPERATOR PROTOCOLS ]
--------------------------------------------------
Founder & Lead:
  - Husnain (Offensive Sec, Cryptography)

Focus Areas:
  - Red Team Operations
  - CTF Vulnerability Lab Development
  - Web Application Auditing & Forensic Analysis

Collaborations:
  - Open to partnerships with academic security clubs 
    and local tech groups.`,
    
    projects: `[ OPEN SOURCE TOOLS & RESEARCH ]
--------------------------------------------------
1. WriteupForge (Active)
   - Category: AI-driven CTF reporting automation
   - Stack: Python, Groq LLM API
   
2. SecureWall CLI (Active)
   - Category: Linux firewall & interface monitoring
   - Stack: Bash, Systemd integration
   
3. Future Labs (In-Development)
   - Custom vulnerable containers for student practice.`,
    
    membership: `[ COLLABORATE WITH US ]
--------------------------------------------------
Interested in joining our open-source research or CTF squad?
Contact: contact@husnain.rocks

Requirements:
  - Consistent learning attitude.
  - Active participation in TryHackMe or CTF challenges.
  - Dedication to ethical, legal guidelines.

"Building the next generation of security defenders."`
  };

  return (
    <div className="fsociety-page-container">
      <Link to="/" className="fs-page-back-link">
        <i className="fas fa-arrow-left"></i> Back to Portfolio
      </Link>
      
      {/* Header */}
      <header className="fsociety-page-header">
        <h1>Fsociety pk</h1>
        <div style={{ marginTop: '1.25rem' }}>
          <span className="fs-page-badge">Official Organization Hub</span>
        </div>
        <p className="fs-page-subtitle">
          A security research collective and open-source development organization based in Pakistan.
        </p>
      </header>

      {/* Pillars Section */}
      <div className="fs-pillars-grid">
        <div className="fs-pillar-card">
          <i className="fas fa-code-branch icon"></i>
          <h3>Open Source Tools</h3>
          <p>Developing secure scripts, automation utilities, and firewall logs monitors to assist security researchers globally.</p>
        </div>
        <div className="fs-pillar-card">
          <i className="fas fa-award icon"></i>
          <h3>Competitive CTF</h3>
          <p>Assembling teams to represent Pakistani expertise in global Capture The Flag tournaments, solving Web, Crypto, and Pwn.</p>
        </div>
        <div className="fs-pillar-card">
          <i className="fas fa-book icon"></i>
          <h3>Free Resources</h3>
          <p>Creating walkthroughs, vulnerable setups, and guides to help computer science students enter the security industry ethically.</p>
        </div>
      </div>

      {/* Main interactive terminal card */}
      <div className="fs-terminal-card fade-in">
        <div className="fs-terminal-sidebar">
          <h4>Directories</h4>
          <button 
            className={`fs-dir-btn ${activeTab === 'manifesto' ? 'active' : ''}`}
            onClick={() => setActiveTab('manifesto')}
          >
            <i className="fas fa-file-alt"></i> manifesto.txt
          </button>
          <button 
            className={`fs-dir-btn ${activeTab === 'operators' ? 'active' : ''}`}
            onClick={() => setActiveTab('operators')}
          >
            <i className="fas fa-file-code"></i> operators.db
          </button>
          <button 
            className={`fs-dir-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <i className="fas fa-folder-open"></i> tools_manifest.json
          </button>
          <button 
            className={`fs-dir-btn ${activeTab === 'membership' ? 'active' : ''}`}
            onClick={() => setActiveTab('membership')}
          >
            <i className="fas fa-paper-plane"></i> join_collective.cfg
          </button>
        </div>
        
        <div className="fs-terminal-workspace">
          <div className="code-window">
            <div className="code-header">
              <div className="code-dot dot-red"></div>
              <div className="code-dot dot-yellow"></div>
              <div className="code-dot dot-green"></div>
              <span className="code-title">Fsocietypk@CONSOLE:~/org$ cat {activeTab === 'manifesto' ? 'manifesto.txt' : activeTab === 'operators' ? 'operators.db' : activeTab === 'projects' ? 'tools_manifest.json' : 'join_collective.cfg'}</span>
            </div>
            <div className="code-content fs-console-workspace">
              <pre><code>{terminalDocs[activeTab]}</code><span className="typing-cursor"></span></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Org Actions */}
      <div className="fs-page-actions">
        <a href="https://github.com/fsociety-pk" target="_blank" rel="noreferrer" className="btn btn-primary">
          <i className="fab fa-github"></i> Visit GitHub Org
        </a>
        <a href="mailto:contact@husnain.rocks" className="btn btn-secondary">
          <i className="fas fa-envelope"></i> Core Inquiries
        </a>
      </div>

    </div>
  );
};

export default FsocietyPage;
