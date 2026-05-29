import React from 'react';
import './Hero.css';

const Hero = () => {
  const techStack = [
    { 
      name: 'Kali Linux', 
      icon: 'https://cdn.simpleicons.org/kalilinux/7964ae', 
      color: '#8c62ff', 
      bg: 'rgba(121, 100, 174, 0.08)', 
      border: 'rgba(121, 100, 174, 0.25)' 
    },
    { 
      name: 'Burp Suite', 
      icon: 'https://cdn.simpleicons.org/portswigger/ff6600', 
      color: '#ff6600', 
      bg: 'rgba(255, 102, 0, 0.08)', 
      border: 'rgba(255, 102, 0, 0.25)' 
    },
    { 
      name: 'Nmap', 
      icon: 'https://cdn.simpleicons.org/nmap/2ba9e1', 
      color: '#2ba9e1', 
      bg: 'rgba(43, 169, 225, 0.08)', 
      border: 'rgba(43, 169, 225, 0.25)' 
    },
    { 
      name: 'Wireshark', 
      icon: 'https://cdn.simpleicons.org/wireshark/1679b7', 
      color: '#1679b7', 
      bg: 'rgba(22, 121, 183, 0.08)', 
      border: 'rgba(22, 121, 183, 0.25)' 
    },
    { 
      name: 'Metasploit', 
      icon: 'https://cdn.simpleicons.org/metasploit/3f51b5', 
      color: '#3f51b5', 
      bg: 'rgba(63, 81, 181, 0.08)', 
      border: 'rgba(63, 81, 181, 0.25)' 
    },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/thehusnain', icon: 'fab fa-github' },
    { name: 'TryHackMe', url: 'https://tryhackme.com/p/thehusnain', icon: 'fas fa-terminal' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/husnain-fiaz-7a4761369', icon: 'fab fa-linkedin' },
    { name: 'Email', url: 'mailto:contact@husnain.rocks', icon: 'fas fa-envelope' }
  ];

  return (
    <section className="hero-section" id="home">
      <div className="hero-container fade-in">
        
        {/* Main Grid: Profile Photo vs Intro Info */}
        <div className="hero-grid">
          
          {/* Column 1: Introduction Details */}
          <div className="hero-details">
            <span className="hero-badge">Cybersecurity Enthusiast</span>
            <h1 className="hero-name">HUSNAIN</h1>
            <p className="hero-title">BS Computer Science Student &amp; Security Researcher</p>
            <p className="hero-bio">
              Passionate about offensive security, ethical hacking, and building secure systems. 
              Currently pursuing my BS in Computer Science while actively practicing cybersecurity 
              methodologies. Top 2% global ranking on TryHackMe.
            </p>
            
            <div className="hero-cta-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Projects <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            {/* Redesigned Tech Stack coloring system with fetched online icons */}
            <div className="hero-tech-tags">
              {techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="tech-badge-colored"
                  style={{
                    backgroundColor: tech.bg,
                    borderColor: tech.border,
                    color: tech.color
                  }}
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="tech-badge-icon"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Profile Picture - Arranged Perfectly */}
          <div className="hero-visual">
            <div className="profile-img-container">
              <div className="profile-img-glow"></div>
              <img 
                src="/assets/profile.png" 
                alt="Husnain" 
                className="profile-img-avatar"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=Husnain&background=0f172a&color=00d9ff&size=300';
                }}
              />
            </div>
            
            {/* Social media icons below the picture (Removed the THM status) */}
            <div className="hero-social-under-pfp">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hero-pfp-social-icon"
                  title={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
