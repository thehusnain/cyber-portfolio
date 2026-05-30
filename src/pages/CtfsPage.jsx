import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CtfsPage.css';

const DEFAULT_CTFS = [
  {
    img: "/assets/ctfs/Hack4Bug-ctf/hack4bug.png",
    title: "Hack4Bug CTF",
    rank: "Ranked 13 (Pakistan CTF)",
    team: "Team: Meoww",
    desc: "Ranked 13th in the national Hack4Bug CTF in Pakistan with Team Meoww. Solved challenges across web application security, forensics, cryptography, and reverse engineering. Earned the CTF Player Badge.",
    stats: ["CTF Player Badge", "Team: Meoww"],
    gallery: [
      "/assets/ctfs/Hack4Bug-ctf/scoreboard.png",
      "/assets/ctfs/Hack4Bug-ctf/team.png",
    ],
    badge: "/assets/ctfs/Hack4Bug-ctf/Hack4Bug - CTF Player Badge.pdf"
  },
  {
    img: "/assets/ctfs/ramadan-ctf-2025/ramadan-ctf.png",
    title: "Ramadan CTF 2026",
    rank: "Global Rank: 22 / 697 Teams",
    team: "Team: Fsociety pk",
    desc: "Achieved 22nd rank globally among 697 competing groups with Team Fsociety pk. Solved 23 complex challenges across Web exploitation, Reverse Engineering, Forensics, and Pwn.",
    stats: ["1730 Points", "23 Solves"],
    gallery: [
      "/assets/ctfs/ramadan-ctf-2025/scoreboard.png",
      "/assets/ctfs/ramadan-ctf-2025/team.png"
    ]
  },
  {
    img: "/assets/ctfs/pico-ctf/my-performance.png",
    title: "picoCTF 2026",
    rank: "Rank #784 out of 8,747 teams (top 9% globally).",
    team: "Team: Fsociety pk",
    desc: "Competed in picoCTF 2026 and achieved rank #784 out of 8,747 teams (top 9% globally) with Team Fsociety pk. Scored a total of 8600 team points. Personal score details are visible in the performance image. Solved challenges in Binary Exploitation, Forensics, Cryptography, and Reverse Engineering.",
    stats: ["8600 Team Score", "Rank #784", "Top 9% Global"],
    gallery: [
      "/assets/ctfs/pico-ctf/scoreboard.png",
      "/assets/ctfs/pico-ctf/team.png",
    ]
  },
  {
    img: "/assets/ctfs/techjam-ctf/techjam.png",
    title: "TechJam CTF",
    rank: "Individual Competitor",
    team: "Individual",
    desc: "An introductory CTF experience at a local TechJam event hosted by my college. Great exposure to real-world security problems and CTF mechanics.",
    stats: ["First CTF", "Learning Experience"],
    gallery: [
      "/assets/ctfs/techjam-ctf/techjam.png"
    ]
  },
  {
    img: "/assets/ctfs/secleaf-ctf/ctf-homepage.png",
    title: "SecLeaf Q2 CTF 2026",
    rank: "Ranked 205 / 771 Teams",
    team: "Team: Fsociety pk",
    desc: "Team Fsociety secured 205th place in SecLeaf Q2 CTF 2026 out of 771 active teams. We solved 19 challenges and scored 2855 points.",
    stats: ["19 Solves", "2855 Points"],
    gallery: [
      "/assets/ctfs/secleaf-ctf/scoreboard.png",
      "/assets/ctfs/secleaf-ctf/team.png",
      "/assets/ctfs/secleaf-ctf/ctf-homepage.png"
    ],
    badge: "/assets/ctfs/secleaf-ctf/certificate.pdf"
  },
  {
    img: "/assets/ctfs/umass-ctf/ctf-homepage.png",
    title: "UMass CTF 2026",
    rank: "134th / 862 Teams",
    team: "Team: Fsociety pk",
    desc: "Our team Fsociety pk secured 134th place out of 862 teams with a total of 2124 points.",
    stats: ["2124 Points", "134th Place"],
    gallery: [
      "/assets/ctfs/umass-ctf/scoreboard.png",
      "/assets/ctfs/umass-ctf/team.png",
      "/assets/ctfs/umass-ctf/sponser.png"
    ]
  }
];

const CtfsPage = () => {
  const [ctfs, setCtfs] = useState([]);
  const [selectedCtf, setSelectedCtf] = useState(null);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedCtfs = localStorage.getItem('portfolio-ctfs');
    if (savedCtfs) {
      try {
        let parsed = JSON.parse(savedCtfs);
        let needsUpgrade = false;
        
        if (!Array.isArray(parsed) || parsed.length < DEFAULT_CTFS.length) {
          needsUpgrade = true;
        } else {
          // Check if any ctf has the old 'secleaf' path instead of 'secleaf-ctf'
          parsed = parsed.map(c => {
            if (c.img && c.img.includes('/assets/ctfs/secleaf/')) {
              c.img = c.img.replace('/assets/ctfs/secleaf/', '/assets/ctfs/secleaf-ctf/');
              needsUpgrade = true;
            }
            if (c.badge && c.badge.includes('/assets/ctfs/secleaf/')) {
              c.badge = c.badge.replace('/assets/ctfs/secleaf/', '/assets/ctfs/secleaf-ctf/');
              needsUpgrade = true;
            }
            if (c.gallery) {
              c.gallery = c.gallery.map(g => {
                if (g.includes('/assets/ctfs/secleaf/')) {
                  needsUpgrade = true;
                  return g.replace('/assets/ctfs/secleaf/', '/assets/ctfs/secleaf-ctf/');
                }
                return g;
              });
            }
            return c;
          });
        }

        if (needsUpgrade) {
          setCtfs(DEFAULT_CTFS);
          localStorage.setItem('portfolio-ctfs', JSON.stringify(DEFAULT_CTFS));
        } else {
          setCtfs(parsed);
        }
      } catch (e) {
        setCtfs(DEFAULT_CTFS);
      }
    } else {
      setCtfs(DEFAULT_CTFS);
      localStorage.setItem('portfolio-ctfs', JSON.stringify(DEFAULT_CTFS));
    }
  }, []);

  // Autoplay Slideshow Effect
  useEffect(() => {
    let intervalId;
    if (selectedCtf && selectedCtf.gallery && selectedCtf.gallery.length > 1 && isPlaying) {
      intervalId = setInterval(() => {
        setActiveImgIdx((prev) => (prev + 1) % selectedCtf.gallery.length);
      }, 3000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [selectedCtf, isPlaying]);

  const handleOpenGallery = (ctf) => {
    setSelectedCtf(ctf);
    setActiveImgIdx(0);
    setIsPlaying(true);
  };

  const handleCloseGallery = () => {
    setSelectedCtf(null);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!selectedCtf || !selectedCtf.gallery) return;
    setActiveImgIdx((prev) => (prev - 1 + selectedCtf.gallery.length) % selectedCtf.gallery.length);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!selectedCtf || !selectedCtf.gallery) return;
    setActiveImgIdx((prev) => (prev + 1) % selectedCtf.gallery.length);
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

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
            accent={index}
            img={ctf.img}
            title={ctf.title}
            rank={ctf.rank}
            team={ctf.team}
            desc={ctf.desc}
            stats={ctf.stats || []}
            gallery={ctf.gallery}
            badge={ctf.badge}
            onViewGallery={handleOpenGallery}
          />
        ))}
      </div>

      {/* Gallery Slideshow Modal with Blur Background */}
      {selectedCtf && (
        <div className="gallery-modal-overlay" onClick={handleCloseGallery}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={handleCloseGallery} aria-label="Close Gallery">
              <i className="fas fa-times"></i>
            </button>

            <div className="gallery-slideshow-container">
              <div className="gallery-image-wrapper">
                <img 
                  src={selectedCtf.gallery[activeImgIdx]} 
                  alt={`${selectedCtf.title} snapshot ${activeImgIdx + 1}`} 
                  className="gallery-active-image"
                  key={activeImgIdx} // key forces rerender for transition
                />
              </div>

              {selectedCtf.gallery.length > 1 && (
                <>
                  <button className="gallery-nav-btn prev" onClick={handlePrevImage} aria-label="Previous Image">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="gallery-nav-btn next" onClick={handleNextImage} aria-label="Next Image">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </>
              )}
            </div>

            <div className="gallery-modal-footer">
              <div className="gallery-footer-info">
                <h4>{selectedCtf.title} Achievements</h4>
                <p>Evidence Image {activeImgIdx + 1} of {selectedCtf.gallery.length}</p>
              </div>

              <div className="gallery-footer-controls">
                {selectedCtf.gallery.length > 1 && (
                  <button className="gallery-control-btn play-pause" onClick={togglePlay}>
                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i> {isPlaying ? 'Pause' : 'Autoplay'}
                  </button>
                )}
              </div>
            </div>

            {selectedCtf.gallery.length > 1 && (
              <div className="gallery-dots">
                {selectedCtf.gallery.map((_, i) => (
                  <button 
                    key={i} 
                    className={`gallery-dot ${i === activeImgIdx ? 'active' : ''}`}
                    onClick={() => setActiveImgIdx(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const CtfCard = ({ accent = 0, img, title, rank, team, desc, stats, gallery, badge, onViewGallery }) => (
  <div className={`ctf-page-card fade-in ctf-accent-${accent % 6}`}>
    <div className="ctf-page-info">
      <div className="ctf-card-header-row">
        <span className="ctf-page-team"><i className="fas fa-users-cog"></i> {team}</span>
        <span className="ctf-page-rank"><i className="fas fa-trophy"></i> {rank}</span>
      </div>

      <h3 className="ctf-page-title">
        {title}
      </h3>

      <p className="ctf-page-desc">{desc}</p>

      {gallery && gallery.length > 0 && (
        <button 
          onClick={() => onViewGallery({ title, gallery })} 
          className="btn btn-secondary ctf-gallery-trigger-btn"
        >
          <i className="fas fa-images"></i> View CTF Images
        </button>
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
