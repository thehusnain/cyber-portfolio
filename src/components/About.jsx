import React from 'react';
import ScrollReveal from './ScrollReveal';
import './About.css';

const About = () => {
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
    { 
      name: 'TryHackMe Labs', 
      icon: 'https://cdn.simpleicons.org/tryhackme/f12222', 
      color: '#f12222', 
      bg: 'rgba(241, 34, 34, 0.08)', 
      border: 'rgba(241, 34, 34, 0.25)' 
    },
    { 
      name: 'Docker', 
      icon: 'https://cdn.simpleicons.org/docker/2496ed', 
      color: '#2496ed', 
      bg: 'rgba(36, 150, 237, 0.08)', 
      border: 'rgba(36, 150, 237, 0.25)' 
    },
    { 
      name: 'Git & GitHub', 
      icon: 'https://cdn.simpleicons.org/github/e6edf3', 
      color: '#e6edf3', 
      bg: 'rgba(230, 237, 243, 0.08)', 
      border: 'rgba(230, 237, 243, 0.25)' 
    },
    { 
      name: 'AWS Basics', 
      icon: 'https://cdn.simpleicons.org/amazonwebservices/ff9900', 
      color: '#ff9900', 
      bg: 'rgba(255, 153, 0, 0.08)', 
      border: 'rgba(255, 153, 0, 0.25)' 
    },
    { 
      name: 'Linux Shell & CLI', 
      icon: 'https://cdn.simpleicons.org/linux/fcc624', 
      color: '#fcc624', 
      bg: 'rgba(252, 198, 36, 0.08)', 
      border: 'rgba(252, 198, 36, 0.25)' 
    },
    { 
      name: 'HTML5 & CSS3', 
      icon: 'https://cdn.simpleicons.org/html5/e34f26', 
      color: '#e34f26', 
      bg: 'rgba(227, 79, 38, 0.08)', 
      border: 'rgba(227, 79, 38, 0.25)' 
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.simpleicons.org/javascript/f7df1e', 
      color: '#f7df1e', 
      bg: 'rgba(247, 223, 30, 0.08)', 
      border: 'rgba(247, 223, 30, 0.25)' 
    },
    { 
      name: 'React.js Basics', 
      icon: 'https://cdn.simpleicons.org/react/61dafb', 
      color: '#61dafb', 
      bg: 'rgba(97, 218, 251, 0.08)', 
      border: 'rgba(97, 218, 251, 0.25)' 
    },
    { 
      name: 'Node.js Basics', 
      icon: 'https://cdn.simpleicons.org/nodedotjs/339933', 
      color: '#339933', 
      bg: 'rgba(51, 153, 51, 0.08)', 
      border: 'rgba(51, 153, 51, 0.25)' 
    },
    { 
      name: 'PostgreSQL', 
      icon: 'https://cdn.simpleicons.org/postgresql/4169e1', 
      color: '#4169e1', 
      bg: 'rgba(65, 105, 225, 0.08)', 
      border: 'rgba(65, 105, 225, 0.25)' 
    },
    { 
      name: 'MySQL Basics', 
      icon: 'https://cdn.simpleicons.org/mysql/4479a1', 
      color: '#4479a1', 
      bg: 'rgba(68, 121, 161, 0.08)', 
      border: 'rgba(68, 121, 161, 0.25)' 
    },
    { 
      name: 'Python', 
      icon: 'https://cdn.simpleicons.org/python/3776ab', 
      color: '#3776ab', 
      bg: 'rgba(55, 118, 171, 0.08)', 
      border: 'rgba(55, 118, 171, 0.25)' 
    },
    { 
      name: 'AI Coding Tools', 
      icon: 'https://cdn.simpleicons.org/openai/10a37f', 
      color: '#10a37f', 
      bg: 'rgba(16, 163, 127, 0.08)', 
      border: 'rgba(16, 163, 127, 0.25)' 
    },
    { 
      name: 'CLI AI Tools', 
      icon: 'https://cdn.simpleicons.org/google-gemini/8e589f', 
      color: '#8e589f', 
      bg: 'rgba(142, 88, 159, 0.08)', 
      border: 'rgba(142, 88, 159, 0.25)' 
    },
    { 
      name: 'Website Deployments', 
      icon: 'https://cdn.simpleicons.org/vercel/ffffff', 
      color: '#ffffff', 
      bg: 'rgba(255, 255, 255, 0.08)', 
      border: 'rgba(255, 255, 255, 0.25)' 
    }
  ];

  return (
    <section id="about">
      <div className="section-container">
        <h2>About Me</h2>
        
        {/* Bio Section */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="about-bio-container">
            <p>
              I am a Computer Science student passionate about Cybersecurity, DevOps, Cloud Computing, Linux, Networking, and Software Development. I enjoy understanding how systems work—from developing applications and databases to deploying, securing, and maintaining them in real-world environments.
            </p>
            <p>
              My experience includes working with Linux systems, Docker containers, PostgreSQL databases, web technologies, and cloud platforms such as Amazon Web Services (AWS). I have hands-on experience deploying websites, managing servers, containerizing applications, and understanding the complete lifecycle of software development and deployment.
            </p>
            <p>
              I am particularly interested in Cybersecurity, OSINT, Network Security, Cloud Infrastructure, and DevOps practices. I enjoy building projects that combine development, deployment, automation, and security while continuously expanding my knowledge through practical experimentation and self-learning.
            </p>
            <p>
              Over time, I have worked on projects involving database management systems, web applications, automation tools, dashboards, and cybersecurity-related utilities. My goal is to develop strong expertise in both security and infrastructure, enabling me to build and maintain secure, scalable, and reliable systems.
            </p>
            <p>
              I believe technology is best learned through hands-on practice, curiosity, and continuous improvement. Whether it is configuring a Linux server, deploying a web application, managing containers with Docker, exploring cloud services, or researching security concepts, I enjoy tackling challenges that help me grow as an engineer.
            </p>
          </div>
        </ScrollReveal>

        {/* Tech Stacks Section */}
        <div className="tech-stacks-container">
          <div className="tech-stacks-header">
            <span className="tech-prefix">// SKILLS</span>
            <h3>Technologies I'm Learning &amp; Exploring</h3>
          </div>
          
          <ScrollReveal direction="up" delay={0.2}>
            <div className="about-tech-tags">
              {techStack.map((tech, idx) => (
                <span 
                  key={idx} 
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
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default About;
