import React from 'react';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/thehusnain', 
      icon: 'fab fa-github',
      color: '#e6edf3',
      bg: 'rgba(230, 237, 243, 0.08)',
      border: 'rgba(230, 237, 243, 0.18)',
      glow: 'rgba(230, 237, 243, 0.15)'
    },
    { 
      name: 'TryHackMe', 
      url: 'https://tryhackme.com/p/thehusnain', 
      icon: 'fas fa-terminal',
      color: '#c11111',
      bg: 'rgba(193, 17, 17, 0.08)',
      border: 'rgba(193, 17, 17, 0.25)',
      glow: 'rgba(193, 17, 17, 0.2)'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/husnain-fiaz-7a4761369', 
      icon: 'fab fa-linkedin',
      color: '#0a66c2',
      bg: 'rgba(10, 102, 194, 0.08)',
      border: 'rgba(10, 102, 194, 0.25)',
      glow: 'rgba(10, 102, 194, 0.2)'
    },
    { 
      name: 'Discord', 
      url: 'https://discord.com/users/sheriffsec', 
      icon: 'fab fa-discord',
      color: '#5865f2',
      bg: 'rgba(88, 101, 242, 0.08)',
      border: 'rgba(88, 101, 242, 0.25)',
      glow: 'rgba(88, 101, 242, 0.2)'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/thehusnain.sec', 
      icon: 'fab fa-instagram',
      color: '#e1306c',
      bg: 'rgba(225, 48, 108, 0.08)',
      border: 'rgba(225, 48, 108, 0.25)',
      glow: 'rgba(225, 48, 108, 0.2)'
    },
    { 
      name: 'Email', 
      url: 'mailto:contact@husnain.rocks', 
      icon: 'fas fa-envelope',
      color: '#10b981',
      bg: 'rgba(16, 185, 129, 0.08)',
      border: 'rgba(16, 185, 129, 0.25)',
      glow: 'rgba(16, 185, 129, 0.2)'
    }
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
                  e.target.src = 'https://ui-avatars.com/api/?name=Husnain&background=0f172a&color=10b981&size=300';
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
                    style={{
                      backgroundColor: social.bg,
                      borderColor: social.border,
                      color: social.color,
                      '--social-glow': social.glow,
                    }}
                  >
                    <i className={social.icon}></i>
                  </a>
                  <span className="social-icon-label" style={{ color: social.color }}>{social.name}</span>
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
