import React, { useState, useEffect, useRef } from 'react';
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
    badge: "/assets/ctfs/Hack4Bug-ctf/Hack4Bug - CTF Player Badge.pdf",
    badgeImg: "/assets/ctfs/Hack4Bug-ctf/badge-page-1.png"
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
    img: "/assets/ctfs/boro-ctf/homepage.png",
    title: "boroCTF 2026",
    rank: "Rank #76 (Open Division)",
    team: "Team: Fsociety",
    desc: "Competed in boroCTF 2026 and achieved rank #76 in the Open Division with Team Fsociety, scoring 10,600 points. Solved various cyber security challenges including binary exploitation, reverse engineering, web application security, forensics, and cryptography.",
    stats: ["10,600 Points", "Rank #76", "Open Division"],
    gallery: [
      "/assets/ctfs/boro-ctf/overall-scoreboard.png",
      "/assets/ctfs/boro-ctf/hs-divison-scoreboard.png",
      "/assets/ctfs/boro-ctf/team.png"
    ],
    badge: "/assets/ctfs/boro-ctf/boroCTF-2026-certificate.pdf",
    badgeImg: "/assets/ctfs/boro-ctf/boroCTF-2026-certificate.png"
  },
  {
    img: "/assets/ctfs/pico-ctf/my-performance.png",
    title: "picoCTF 2026",
    rank: "Rank #784 out of 8,747 teams",
    team: "Team: Fsociety pk",
    desc: "Competed in picoCTF 2026 and achieved rank #784 out of 8,747 teams with Team Fsociety pk. Scored a total of 8600 team points. Personal score details are visible in the performance image. Solved challenges in Binary Exploitation, Forensics, Cryptography, and Reverse Engineering.",
    stats: ["8600 Team Score", "Rank #784", "8,747 Teams"],
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
    desc: "My first physical CTF competition, held at PAF-IAST University. Got hands-on exposure to cybersecurity challenges, earning a certificate of participation.",
    stats: ["First Physical CTF", "PAF-IAST University", "Participation Certificate"],
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
    badge: "/assets/ctfs/secleaf-ctf/certificate.pdf",
    badgeImg: "/assets/ctfs/secleaf-ctf/certificate-page-1.png"
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
  const filmstripRef = useRef(null);

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
          // Check if TechJam has the old description
          const techJamCtf = parsed.find(c => c.title === "TechJam CTF");
          if (techJamCtf && techJamCtf.desc.includes("hosted by my college")) {
            needsUpgrade = true;
          }

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
    if (selectedCtf && selectedCtf.combinedImages && selectedCtf.combinedImages.length > 1 && isPlaying) {
      intervalId = setInterval(() => {
        setActiveImgIdx((prev) => (prev + 1) % selectedCtf.combinedImages.length);
      }, 3500);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [selectedCtf, isPlaying]);

  // Continuous Filmstrip Scroll Sync
  useEffect(() => {
    if (filmstripRef.current && selectedCtf && selectedCtf.combinedImages) {
      const activeThumb = filmstripRef.current.children[activeImgIdx];
      if (activeThumb) {
        filmstripRef.current.scrollTo({
          left: activeThumb.offsetLeft - filmstripRef.current.offsetWidth / 2 + activeThumb.offsetWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [activeImgIdx, selectedCtf]);

  const handleOpenGallery = (ctf) => {
    // Combine performance img, badgeImg, and gallery list, ensuring unique, truthy image paths
    const combinedImages = Array.from(
      new Set([ctf.img, ctf.badgeImg, ...(ctf.gallery || [])])
    ).filter(Boolean);

    setSelectedCtf({
      ...ctf,
      combinedImages
    });
    setActiveImgIdx(0);
    setIsPlaying(true);
  };

  const handleCloseGallery = () => {
    setSelectedCtf(null);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!selectedCtf || !selectedCtf.combinedImages) return;
    setActiveImgIdx((prev) => (prev - 1 + selectedCtf.combinedImages.length) % selectedCtf.combinedImages.length);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!selectedCtf || !selectedCtf.combinedImages) return;
    setActiveImgIdx((prev) => (prev + 1) % selectedCtf.combinedImages.length);
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
            onViewGallery={() => handleOpenGallery(ctf)}
          />
        ))}
      </div>

      {/* Gallery Slideshow Modal with Blur Background */}
      {selectedCtf && selectedCtf.combinedImages && (
        <div className="gallery-modal-overlay" onClick={handleCloseGallery}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={handleCloseGallery} aria-label="Close Gallery">
              <i className="fas fa-times"></i>
            </button>

            {/* Container adjusts dynamically to active image dimensions */}
            <div className="gallery-slideshow-container">
              <div className="gallery-image-wrapper">
                <img 
                  src={selectedCtf.combinedImages[activeImgIdx]} 
                  alt={`${selectedCtf.title} snapshot ${activeImgIdx + 1}`} 
                  className="gallery-active-image animate-drift"
                  key={activeImgIdx} // key forces re-mount for transition
                />
              </div>

              {selectedCtf.combinedImages.length > 1 && (
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

            {/* Continuous filmstrip scroll track at the bottom */}
            {selectedCtf.combinedImages.length > 1 && (
              <div 
                className="gallery-filmstrip-track-container"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="gallery-filmstrip-scroller" ref={filmstripRef}>
                  {selectedCtf.combinedImages.map((imagePath, i) => (
                    <div 
                      key={i}
                      className={`gallery-filmstrip-thumb-wrapper ${i === activeImgIdx ? 'active' : ''}`}
                      onClick={() => {
                        setActiveImgIdx(i);
                        setIsPlaying(false);
                      }}
                    >
                      <img 
                        src={imagePath} 
                        alt="Thumbnail" 
                        className="gallery-filmstrip-thumb"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="gallery-modal-footer">
              <div className="gallery-footer-info">
                <h4>{selectedCtf.title} Evidence</h4>
                <p>Image {activeImgIdx + 1} of {selectedCtf.combinedImages.length}</p>
              </div>

              <div className="gallery-footer-controls">
                {selectedCtf.combinedImages.length > 1 && (
                  <button className="gallery-control-btn play-pause" onClick={togglePlay}>
                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i> {isPlaying ? 'Pause Autoplay' : 'Resume Autoplay'}
                  </button>
                )}
              </div>
            </div>

            {selectedCtf.combinedImages.length > 1 && (
              <div className="gallery-dots">
                {selectedCtf.combinedImages.map((_, i) => (
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

      <div className="ctf-page-badges">
        {stats.map((stat, i) => (
          <span key={i} className="ctf-page-badge">{stat}</span>
        ))}
      </div>

      <div className="ctf-page-actions">
        <button onClick={onViewGallery} className="btn btn-primary ctf-card-btn view-performance-btn">
          <i className="fas fa-chart-line"></i> View Performance
        </button>
        {badge && (
          <a href={badge} download className="btn btn-secondary ctf-card-btn">
            <i className="fas fa-download"></i> Badge
          </a>
        )}
      </div>
    </div>
  </div>
);

export default CtfsPage;
export { DEFAULT_CTFS };
