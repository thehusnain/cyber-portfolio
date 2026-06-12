import React from 'react';
import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/40 h-screen w-full relative overflow-hidden flex items-center select-none">
      
      {/* text and intro content */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 z-10 flex items-center">
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto px-4 xl:px-0 pt-20 xl:pt-0">
          
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-white font-bold leading-tight"
          >
            Securing Systems, <br /> Building{" "}
            <span className="text-accent">Cyber Resilience</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-12 text-white/60 text-lg font-light leading-relaxed"
          >
            I am a Computer Science student specializing in Cybersecurity, OSINT, and Network Security.
            I focus on understanding how systems work, deploying secure infrastructures, and securing applications from vulnerabilities.
          </motion.p>

          {/* projects button */}
          <div className="flex justify-center xl:hidden relative mb-8">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      
      {/* image and graphics container */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none select-none">
        
        {/* explosion background image */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-80"
          aria-hidden
        />

        {/* particles background */}
        <div className="absolute inset-0 pointer-events-auto">
          <ParticlesContainer />
        </div>

        {/* user avatar container */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0 right-0 lg:right-[1%] z-20"
        >
          <Avatar className="justify-end" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
