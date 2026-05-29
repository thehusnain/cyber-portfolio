import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CtfsPage.css';

const DEFAULT_CTFS = [
  {
    img: "/assets/ctfs/Hack4Bug-ctf/hack4bug.png",
    title: "Hack4Bug CTF",
    rank: "Active Participant",
    team: "Team: Meoww",
    desc: "Participated in the Hack4Bug CTF competition solving challenges in web application security, forensic analysis, cryptography, and reverse engineering. Earned the official CTF Player Badge.",
    stats: ["CTF Player Badge", "Team: Meoww"],
    gallery: [
      "/assets/ctfs/Hack4Bug-ctf/scoreboard.png",
      "/assets/ctfs/Hack4Bug-ctf/team.png",
    ],
    badge: "/assets/ctfs/Hack4Bug-ctf/Hack4Bug - CTF Player Badge.pdf"
  },
  {
    img: "/assets/ctfs/ramadanctf.png",
    title: "Ramadan CTF 2026",
    rank: "Global Rank: 22 / 697 Teams",
    team: "Team: FSOCIETY",
    desc: "Achieved 22nd rank globally among 697 competing groups with team FSOCIETY. Solved 23 complex challenges across Web exploitation, Reverse Engineering, Forensics, and Pwn.",
    stats: ["1730 Points", "23 Solves"]
  },
  {
    img: "/assets/ctfs/picoctf.png",
    title: "picoCTF 2026",
    rank: "Global Rank: ~784",
    team: "Team: FSOCIETY",
    desc: "Competed in the renowned picoCTF 2026, scoring 5800 personal points out of the team's total 8600. Solved multiple challenges in Binary Exploitation, Forensics, Cryptography, and Reverse Engineering.",
    stats: ["8600 Total Score", "5800 Personal Score"]
  },
  {
    img: "/assets/ctfs/techjam.png",
    title: "PAF-IAST TechJam CTF",
    rank: "Individual Competitor",
    team: "Individual",
    desc: "My first introductory CTF experience. Played individually in the PAF-IAST Cyber Security TechJam. Provided excellent exposure to real-world security challenges and CTF mechanics.",
    stats: ["First CTF", "Learning Experience"]
  }
];

const CtfsPage = () => {
  const [ctfs, setCtfs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedCtfs = localStorage.getItem('portfolio-ctfs');
    if (savedCtfs) {
      try {
        setCtfs(JSON.parse(savedCtfs));
      } catch (e) {
        setCtfs(DEFAULT_CTFS);
      }
    } else {
      setCtfs(DEFAULT_CTFS);
      localStorage.setItem('portfolio-ctfs', JSON.stringify(DEFAULT_CTFS));
    }
  }, []);

  return (
    <div className="ctfs-page-container">
      <Link to="/" className="ctf-back-link">
        <i className="fas fa-arrow-left"></i> Back to Portfolio
      </Link>
      
      <header className="ctfs-page-header">
        <h1>Capture The Flags</h1>
        <p className="ctfs-page-subtitle">
          Ethical hacking achievements, global ranks, and team statistics in competitive security tournaments.
        </p>
      </header>

      <div className="ctfs-detailed-grid">
        {ctfs.map((ctf, index) => (
          <CtfCard 
            key={index}
            img={ctf.img}
            title={ctf.title}
            rank={ctf.rank}
            team={ctf.team}
            desc={ctf.desc}
            stats={ctf.stats || []}
            gallery={ctf.gallery}
            badge={ctf.badge}
          />
        ))}
      </div>
    </div>
  );
};

const CtfCard = ({ img, title, rank, team, desc, stats, gallery, badge }) => (
  <div className="ctf-page-card fade-in">
    <div className="ctf-page-img-wrap">
      <img 
        src={img} 
        alt={title} 
        onError={(e) => {
          e.target.src = 'https://ui-avatars.com/api/?name=CTF&background=0f172a&color=00d9ff&size=400';
        }}
      />
      <div className="ctf-page-overlay">
        <span className="ctf-page-rank">{rank}</span>
      </div>
    </div>
    <div className="ctf-page-info">
      <span className="ctf-page-team">{team}</span>
      <h3>{title}</h3>
      <p>{desc}</p>

      {gallery && gallery.length > 0 && (
        <div className="ctf-page-gallery">
          {gallery.map((src, i) => (
            <a key={i} href={src} target="_blank" rel="noreferrer" className="ctf-page-thumb">
              <img 
                src={src} 
                alt={`${title} snapshot ${i + 1}`} 
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="ctf-page-thumb-overlay"><i className="fas fa-expand"></i></div>
            </a>
          ))}
        </div>
      )}

      <div className="ctf-page-badges">
        {stats.map((stat, i) => (
          <span key={i} className="ctf-page-badge">{stat}</span>
        ))}
      </div>

      <div className="ctf-page-actions">
        <a href={img} target="_blank" rel="noreferrer" className="btn btn-secondary ctf-card-btn">
          <i className="fas fa-expand"></i> Performance Image
        </a>
        {badge && (
          <a href={badge} download className="btn btn-primary ctf-card-btn">
            <i className="fas fa-download"></i> Badge
          </a>
        )}
      </div>
    </div>
  </div>
);

export default CtfsPage;
export { DEFAULT_CTFS };
