import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Fsociety from '../components/Fsociety';
import Experience from '../components/Experience';
import Internships from '../components/Internships';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import CtfsSummary from '../components/CtfsSummary';
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
      <Experience />
      <Internships />
      <Certifications />
      <CtfsSummary />
      <Projects />
      <Downloads />
      <Contact />
    </div>
  );
};

export default Home;
