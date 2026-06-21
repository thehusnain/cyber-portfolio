import React, { useState, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import Avatar from "../components/Avatar";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaPython,
  FaNodeJs, FaDocker, FaGithub, FaGitAlt, FaAws, FaLinux,
} from "react-icons/fa";
import { SiPostgresql, SiMysql, SiVercel, SiTryhackme, SiWireshark, SiKalilinux } from "react-icons/si";
import { fadeIn } from "../variants";

// Safely resolve components if they are imported as ES module objects
const renderIcon = (IconComponent, props = {}) => {
  if (!IconComponent) return null;
  const Target = typeof IconComponent === 'function' 
    ? IconComponent 
    : (IconComponent.default || null);
  if (!Target) return null;
  return <Target {...props} />;
};

const ActualCountUp = typeof CountUp === 'function' ? CountUp : (CountUp.default || (() => null));

const aboutData = [
  {
    title: "skills",
    info: [
      {
        category: "Cybersecurity & Pentesting",
        skills: [
          { name: "Kali Linux", icon: SiKalilinux, status: "Active Study" },
          { name: "TryHackMe", icon: SiTryhackme, status: "150+ Solves" },
          { name: "Wireshark", icon: SiWireshark, status: "Traffic Analysis" },
          { name: "Linux OS", icon: FaLinux, status: "Familiar" },
        ]
      },
      {
        category: "Web & Software Development",
        skills: [
          { name: "Python", icon: FaPython, status: "Scripting & Labs" },
          { name: "JavaScript", icon: FaJs, status: "ES6 Core" },
          { name: "React.js", icon: FaReact, status: "Frontend UI" },
          { name: "Node.js", icon: FaNodeJs, status: "Backend Dev" },
          { name: "HTML5 / CSS3", icon: FaHtml5, status: "Structure & Style" },
        ]
      },
      {
        category: "DevOps, Cloud & DBs",
        skills: [
          { name: "Docker", icon: FaDocker, status: "Containerization" },
          { name: "AWS Cloud", icon: FaAws, status: "Learning Path" },
          { name: "GitHub / Git", icon: FaGithub, status: "Code Control" },
          { name: "PostgreSQL", icon: SiPostgresql, status: "DB Design" },
          { name: "MySQL", icon: SiMysql, status: "Familiar" },
          { name: "Vercel Hosting", icon: SiVercel, status: "Web Hosting" },
        ]
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Ethical Hacking Intern",
        stage: "Secure Dev Labs",
        date: "Feb 2026",
        desc: "Completed hands-on training focusing on network enumeration, vulnerability assessment, and writing structured penetration testing reports."
      },
      {
        title: "Cybersecurity Competitor",
        stage: "Govt College Haripur / Team Fsociety",
        date: "2025 – Present",
        desc: "Representing Team Fsociety in local and global CTF tournaments, solving forensic, cryptography, and web exploitation tasks."
      },
      {
        title: "Diploma in Information Technology (DIT)",
        stage: "Govt College of Commerce, Haripur",
        date: "2022 – 2023",
        desc: "Acquired core knowledge in software systems, database basics, operating systems, and computer networks."
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "BS Computer Science",
        stage: "Govt Akhter Nawaz Khan Degree College",
        date: "2023 – Present",
        desc: "Currently pursuing a bachelor's degree in Computer Science, focusing on system designs, algorithms, databases, and network architectures."
      },
      {
        title: "Threat Intelligence & Governance Analyst (CTIGA)",
        stage: "Red Team Leaders",
        date: "2026",
        desc: "Specialized certification covering security operations, threat feeds, actor analysis, and governance principles."
      },
      {
        title: "Networking Basics",
        stage: "Cisco Networking Academy",
        date: "2026",
        desc: "Completed fundamental training in network layers, routing protocol principles, and basic secure switch setups."
      },
      {
        title: "Pre Security Path",
        stage: "TryHackMe",
        date: "2026",
        desc: "Acquired fundamental cyber concepts across Linux, Web tech, and networking via gamified hands-on modules."
      },
    ],
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Certs & Badges" },
  { value: 150, suffix: "+", label: "THM Labs Done" },
];

const AboutPage = () => {
  const [index, setIndex] = useState(0);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen relative flex items-center pt-20 pb-28 xl:pt-16 xl:pb-16 overflow-x-hidden">
      
      {/* Avatar placed on the left side */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden" animate="show" exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[320px] h-full w-[737px] max-h-[678px] z-0 pointer-events-none"
      >
        <Avatar className="justify-start" />
      </motion.div>

      <div className="container mx-auto px-4 xl:px-0 z-10 relative">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-center">

          {/* ── LEFT: Intro + Stats ── */}
          <div className="flex-1 xl:pl-24">
            {/* Pulsing Status Tag */}
            <motion.div
              variants={fadeIn("right", 0.15)}
              initial="hidden" animate="show"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-[11px] font-mono mb-3 tracking-wider uppercase"
            >
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
              </span>
              Cyber Security Student &amp; Learner
            </motion.div>

            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden" animate="show" exit="hidden"
              className="text-3xl xl:text-4xl font-bold text-white leading-tight mb-3"
            >
              Driven by Curiosity, <span className="text-accent">Security First</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("right", 0.35)}
              initial="hidden" animate="show"
              className="text-white/60 font-light leading-relaxed mb-6 max-w-lg text-sm"
            >
              I am a Computer Science student and a passionate security learner. Instead of pretending 
              to be an expert, I focus on continuous hands-on growth—solving CTFs, practicing on labs, 
              writing Python scripts, and building secure server infrastructures. I believe the best way 
              to protect systems is to understand how they work from the ground up.
            </motion.p>

            {/* Stats counters */}
            <motion.div
              ref={statsRef}
              variants={fadeIn("right", 0.5)}
              initial="hidden" animate="show"
              className="grid grid-cols-2 gap-4 max-w-sm w-full"
            >
              {stats.map((s, i) => (
                <div key={i} className="bg-[#1a1b2e]/40 border border-white/5 hover:border-accent/20 rounded-xl p-3 flex flex-col items-center xl:items-start transition-all duration-300">
                  <div className="text-2xl xl:text-3xl font-extrabold text-accent mb-0.5 font-mono">
                    {isInView ? (
                      <ActualCountUp start={0} end={s.value} duration={2.5} delay={i * 0.2} />
                    ) : "0"}
                    {s.suffix}
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-white/50 font-semibold font-poppins">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Tabs ── */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden" animate="show" exit="hidden"
            className="flex-1 w-full xl:pr-24"
          >
            {/* Tab headers */}
            <div className="flex gap-6 mb-4 border-b border-white/10 pb-2">
              {aboutData.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`capitalize text-sm font-semibold pb-1 border-b-2 transition-all duration-300 cursor-pointer ${
                    index === i
                      ? "border-accent text-accent"
                      : "border-transparent text-white/50 hover:text-white"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar"
            >
              {index === 0 && (
                <div className="flex flex-col gap-3.5">
                  {aboutData[0].info.map((cat, i) => (
                    <div key={i} className="about-info-card p-3.5 rounded-xl bg-[#1a1b2e]/60 backdrop-blur-md border border-white/5">
                      <h4 className="text-[10px] font-bold text-accent font-poppins mb-2.5 tracking-wider uppercase">
                        {cat.category}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {cat.skills.map((skill, j) => (
                          <div key={j} className="flex items-center gap-1.5 bg-white/5 border border-white/5 hover:border-accent/30 hover:bg-accent/5 px-2.5 py-1.5 rounded-lg transition-all duration-300 group">
                            <div className="text-accent group-hover:scale-110 transition-transform duration-200 shrink-0">
                              {renderIcon(skill.icon, { size: 16 })}
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-[10px] font-semibold text-white/95 truncate leading-tight">{skill.name}</span>
                              <span className="text-[8px] text-white/40 tracking-wide truncate leading-none mt-0.5">{skill.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {index === 1 && (
                <div className="flex flex-col gap-4 pl-2 relative border-l border-white/10 ml-2">
                  {aboutData[1].info.map((item, i) => (
                    <div key={i} className="relative pl-5 py-0.5 group">
                      {/* Timeline dot */}
                      <div className="absolute -left-[15px] top-3.5 w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_var(--color-accent-val)]"></div>
                      
                      <div className="about-info-card p-3.5 rounded-xl bg-[#1a1b2e]/60 backdrop-blur-md border border-white/5">
                        <div className="flex items-center justify-between gap-3 mb-1.5 flex-wrap">
                          <h4 className="text-xs font-bold text-white group-hover:text-accent transition-colors duration-300">
                            {item.title}
                          </h4>
                          <span className="text-[9px] font-mono bg-accent/10 border border-accent/20 text-accent px-1.5 py-0.5 rounded-full font-bold">
                            {item.date}
                          </span>
                        </div>
                        <div className="text-[10px] text-white/50 font-medium mb-1">{item.stage}</div>
                        <p className="text-[10px] text-white/40 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {index === 2 && (
                <div className="flex flex-col gap-4 pl-2 relative border-l border-white/10 ml-2">
                  {aboutData[2].info.map((item, i) => (
                    <div key={i} className="relative pl-5 py-0.5 group">
                      {/* Timeline dot */}
                      <div className="absolute -left-[15px] top-3.5 w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_var(--color-accent-val)]"></div>
                      
                      <div className="about-info-card p-3.5 rounded-xl bg-[#1a1b2e]/60 backdrop-blur-md border border-white/5">
                        <div className="flex items-center justify-between gap-3 mb-1.5 flex-wrap">
                          <h4 className="text-xs font-bold text-white group-hover:text-accent transition-colors duration-300">
                            {item.title}
                          </h4>
                          <span className="text-[9px] font-mono bg-accent/10 border border-accent/20 text-accent px-1.5 py-0.5 rounded-full font-bold">
                            {item.date}
                          </span>
                        </div>
                        <div className="text-[10px] text-white/50 font-medium mb-1">{item.stage}</div>
                        <p className="text-[10px] text-white/40 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
