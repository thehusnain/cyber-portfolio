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
      { title: "Cybersecurity & Pentesting", icons: [SiKalilinux, SiTryhackme, SiWireshark, FaLinux] },
      { title: "Web & Software Development", icons: [FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaNodeJs] },
      { title: "DevOps, Cloud & DBs", icons: [FaDocker, FaAws, FaGithub, FaGitAlt, SiPostgresql, SiMysql, SiVercel] },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "Ethical Hacking Intern", stage: "Secure Dev Labs — Feb 2026" },
      { title: "Diploma in Information Technology (DIT)", stage: "Govt College of Commerce, Haripur — 2022–2023" },
      { title: "Cybersecurity Competitor", stage: "Govt College Haripur — 2025–Present" },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "BS Computer Science", stage: "Govt Akhter Nawaz Khan Degree College — 2023–Present" },
      { title: "Threat Intelligence & Governance Analyst (CTIGA)", stage: "Red Team Leaders — 2026" },
      { title: "Networking Basics", stage: "Cisco Networking Academy — 2026" },
      { title: "Pre Security Path", stage: "TryHackMe — 2026" },
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
    <div className="min-h-screen relative flex items-center pt-24 pb-28 xl:py-32 overflow-hidden">
      
      {/* avatar img placed on left side half exactly like template */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden" animate="show" exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[320px] h-full w-[737px] max-h-[678px] z-0 pointer-events-none"
      >
        <Avatar className="justify-start" />
      </motion.div>

      <div className="container mx-auto px-4 xl:px-0 z-10 relative">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-start">

          {/* ── LEFT: Intro + Stats ── */}
          <div className="flex-1 xl:pl-40">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden" animate="show" exit="hidden"
              className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6"
            >
              Driven by Curiosity,{" "}
              <span className="text-accent">Security First</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("right", 0.35)}
              initial="hidden" animate="show"
              className="text-white/55 font-light leading-relaxed mb-10 max-w-lg text-base"
            >
              Computer Science student passionate about DevOps, Networking,
              Cloud Computing, and Cybersecurity. I focus on deploying secure
              containerised infrastructures and analysing software for security gaps.
            </motion.p>

            {/* Stats counters */}
            <motion.div
              ref={statsRef}
              variants={fadeIn("right", 0.5)}
              initial="hidden" animate="show"
              className="flex flex-wrap justify-center xl:justify-start gap-6 sm:gap-12 w-full"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center xl:text-left">
                  <div className="text-3xl xl:text-4xl font-extrabold text-accent mb-1">
                    {isInView ? (
                      <ActualCountUp start={0} end={s.value} duration={2.5} delay={i * 0.2} />
                    ) : "0"}
                    {s.suffix}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-white/50 leading-tight">
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
            className="flex-1 w-full"
          >
            {/* Tab headers */}
            <div className="flex gap-6 mb-8 border-b border-white/10 pb-3">
              {aboutData.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`capitalize text-base font-semibold pb-1 border-b-2 transition-all duration-300 cursor-pointer ${
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
              className="flex flex-col gap-5"
            >
              {aboutData[index].info.map((item, i) => (
                <div key={i} className="about-info-card p-4 rounded-xl">
                  <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
                  {item.stage && (
                    <div className="text-xs text-white/40">{item.stage}</div>
                  )}
                  {item.icons && (
                    <div className="flex flex-wrap gap-3 mt-3">
                      {item.icons.map((Icon, j) => (
                        <div key={j} className="text-accent hover:scale-110 transition-transform duration-200">
                          {renderIcon(Icon, { size: 22 })}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
