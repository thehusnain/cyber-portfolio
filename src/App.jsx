import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Transition from './components/Transition';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import CertificatesPage from './pages/CertificatesPage';
import CtfsPage from './pages/CtfsPage';
import FsocietyPage from './pages/FsocietyPage';
import SheriffControlPage from './pages/SheriffControlPage';
import InternshipsPage from './pages/InternshipsPage';
import ContactPage from './pages/ContactPage';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const fallbackRoute = searchParams.get('route');
    if (fallbackRoute && fallbackRoute !== `${location.pathname}${location.search}${location.hash}`) {
      navigate(fallbackRoute, { replace: true });
    }
  }, [location.hash, location.pathname, location.search, navigate]);

  useEffect(() => {
    const triggers = [];
    const setupAnimations = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((el) => {
        if (el.dataset.gsapDone) return;
        el.dataset.gsapDone = '1';
        const trigger = ScrollTrigger.create({
          trigger: el,
          start: 'top 92%',
          onEnter: () => { el.classList.add('animate-visible'); },
          once: true,
        });
        triggers.push(trigger);
      });
    };
    setupAnimations();
    const timer = setTimeout(setupAnimations, 150);
    return () => {
      clearTimeout(timer);
      triggers.forEach((t) => t.kill());
      document.querySelectorAll('[data-gsap-done]').forEach((el) => { delete el.dataset.gsapDone; });
    };
  }, [location.pathname]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} className="h-full">
          <Transition />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/ctfs" element={<CtfsPage />} />
            <Route path="/fsociety" element={<FsocietyPage />} />
            <Route path="/sheriff-control" element={<SheriffControlPage />} />
            <Route path="/internship" element={<InternshipsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
