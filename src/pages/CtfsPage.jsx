import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CtfsPage.css';

const CtfsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ctfs-container">
      <Link to="/" className="back-link">
        <i className="fas fa-arrow-left"></i> Back to Portfolio
      </Link>
      
      <header className="ctfs-header">
        <h1 className="glitch" data-text="CAPTURE THE FLAGS">CAPTURE THE FLAGS</h1>
        <p className="subtitle">Competitive cybersecurity challenges and hacking competitions</p>
      </header>

      <div className="ctfs-grid">
        <CtfCard 
          img="/assets/ctfs/ramadanctf.png"
          title="Ramadan CTF 2026"
          rank="Global Rank: 22 / 697 Teams"
          team="Team: Cyber Trio"
          desc="A premier international cybersecurity competition designed to test acumen and skills in diverse domains. Participated with team 'Cyber Trio', achieving an impressive 22nd rank globally among 697 teams. The event featured complex puzzles across Web, Crypto, Reverse Engineering, Forensics, and Pwn categories."
          stats={["1730 Points", "23 Solves"]}
        />
        <CtfCard 
          img="/assets/ctfs/picoctf.png"
          title="picoCTF 2026"
          rank="Global Rank: ~784"
          team="Team: Cyber Trio"
          desc="Participated in the renowned picoCTF competition spanning from March 02 to March 29, 2026, with team 'Cyber Trio'. Contributed significantly to the team's success with 5800 personal points out of the team's total 8600. Focused on solving challenges in Binary Exploitation, Forensics, Reverse Engineering, and Cryptography."
          stats={["8600 Total Score", "5800 Personal Score"]}
        />
        <CtfCard 
          img="/assets/ctfs/techjam.png"
          title="PAF-IAST TechJam CTF"
          rank="Participated"
          team="Individual"
          desc="My very first CTF competition! Played individually in the PAF-IAST Cyber-Sec Society TechJam. While I couldn't make significant progress, it was an invaluable learning experience that ignited my passion for cybersecurity competitions and provided foundational exposure to real-world cyber scenarios."
          stats={["First CTF", "Learning Experience"]}
        />
      </div>
    </div>
  );
};

const CtfCard = ({ img, title, rank, team, desc, stats }) => (
  <div className="ctf-card fade-in">
    <div className="ctf-img-wrapper">
      <img src={img} alt={title} />
      <div className="ctf-overlay">
        <div className="ctf-rank">{rank}</div>
      </div>
    </div>
    <div className="ctf-info">
      <div className="ctf-team">{team}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="ctf-stats">
        {stats.map((stat, i) => (
          <span key={i} className="ctf-badge">{stat}</span>
        ))}
      </div>
      <a href={img} target="_blank" rel="noreferrer" className="ctf-btn">
        <i className="fas fa-expand"></i> View Performance
      </a>
    </div>
  </div>
);

export default CtfsPage;
