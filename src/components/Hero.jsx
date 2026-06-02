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
      <div className="hero-container">
        <div className="hero-grid">
          
          {/* Column 1: Profile Picture (Left Column) */}
          <div className="hero-visual animate-profile" style={{ position: 'relative' }}>
            <div className="profile-img-container float-bob-2">
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
            
            <div className="hero-social-under-pfp">
              {socialLinks.map((social, index) => (
                <div key={index} className="social-icon-wrapper">
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hero-pfp-social-icon"
                    title={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                  <span className="social-icon-label">{social.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Introduction Details (Right Column - Left Aligned for desktop) */}
          <div className="hero-details">
            <span className="hero-badge animate-text-1">Cybersecurity Enthusiast</span>
            <h1 className="hero-name animate-text-2">HUSNAIN</h1>
            <p className="hero-title animate-text-3">BS Computer Science Student &amp; Security Researcher</p>
            <p className="hero-bio animate-text-4">
              Passionate about offensive security, ethical hacking, and building secure systems. 
              Currently pursuing my BS in Computer Science while actively practicing cybersecurity 
              methodologies. Top 2% global ranking on TryHackMe.
            </p>
            
            <div className="hero-cta-buttons animate-text-5">
              <a href="#projects" className="btn btn-primary">
                View My Projects <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            <div className="hero-tech-tags animate-text-6">
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

        </div>
      </div>
    </section>
  );
};

export default Hero;
