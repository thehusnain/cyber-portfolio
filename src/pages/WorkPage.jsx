import React from 'react';
import { motion } from "framer-motion";
import Bulb from "../components/Bulb";
import Circles from "../components/Circles";
import { fadeIn } from "../variants";
import Projects from "../components/Projects";

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-primary/30 pt-20 pb-16 xl:pt-24 xl:pb-20 flex flex-col justify-center relative overflow-hidden">
      <Circles />
      <div className="container mx-auto z-10 px-4 xl:px-0">
        <div className="flex flex-col gap-y-4">
          
          {/* text */}
          <div className="text-center xl:text-left">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-white font-bold mb-2"
            >
              My Projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[600px] mx-auto xl:mx-0 text-white/60 font-light text-sm xl:text-base"
            >
              Explore some of my cybersecurity tools, firewalls, scrapers, OSINT packages, and web utilities that I have developed, deployed, and secured.
            </motion.p>
          </div>

          {/* project board */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full"
          >
            <Projects />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default WorkPage;
