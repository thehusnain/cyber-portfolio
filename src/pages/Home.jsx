import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Fsociety from '../components/Fsociety';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Downloads from '../components/Downloads';
import Contact from '../components/Contact';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [hash]);

  return (
    <div>
      <Hero />
      <About />
      <Fsociety />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Downloads />
      <Contact />
    </div>
  );
};

export default Home;
