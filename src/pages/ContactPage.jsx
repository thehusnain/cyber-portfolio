import React, { useState } from 'react';
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../variants";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    // We can let it submit normally to formspree or use fetch. Formspree supports standard POST request.
    setIsLoading(true);
  };

  return (
    <div className="h-full min-h-screen bg-primary/30 pt-20 pb-28 xl:py-32 flex items-center relative overflow-x-hidden">
      <div className="container mx-auto text-center xl:text-left flex items-center justify-center h-full z-10 px-4 xl:px-0">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 text-white font-bold"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            action="https://formspree.io/f/xojnqqle"
            method="POST"
            onSubmit={handleSubmit}
            autoComplete="off"
            name="contact"
          >
            {/* input group */}
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input border border-white/20 bg-transparent rounded-lg pl-6 h-[52px] w-full text-white outline-none focus:ring-1 focus:ring-accent"
                disabled={isLoading}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input border border-white/20 bg-transparent rounded-lg pl-6 h-[52px] w-full text-white outline-none focus:ring-1 focus:ring-accent"
                disabled={isLoading}
                required
              />
            </div>
            
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea border border-white/20 bg-transparent rounded-lg p-6 h-[180px] w-full text-white outline-none focus:ring-1 focus:ring-accent resize-none"
              disabled={isLoading}
              required
            />

            {/* Honeypot spam trap */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            <button
              type="submit"
              className="btn rounded-full border border-white/50 bg-transparent text-white max-w-[170px] h-[52px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent hover:text-accent group cursor-pointer"
              disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
