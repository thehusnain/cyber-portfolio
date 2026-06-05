import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CertificatesPage from './pages/CertificatesPage';
import CtfsPage from './pages/CtfsPage';
import FsocietyPage from './pages/FsocietyPage';
import SheriffControlPage from './pages/SheriffControlPage';
import InternshipsPage from './pages/InternshipsPage';
import AntiGravityBackground from './components/AntiGravityBackground';
import TerminalWidget from './components/TerminalWidget';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function AppContent() {
  // Theme state: default to dark theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || 'dark';
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Apply the theme to documentElement
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const fallbackRoute = searchParams.get('route');

    if (fallbackRoute && fallbackRoute !== `${location.pathname}${location.search}${location.hash}`) {
      navigate(fallbackRoute, { replace: true });
    }
  }, [location.hash, location.pathname, location.search, navigate]);

  // Global ScrollTrigger for [data-animate] template elements
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
          onEnter: () => {
            el.classList.add('animate-visible');
          },
          once: true,
        });

        triggers.push(trigger);
      });
    };

    setupAnimations();
    const timer = setTimeout(setupAnimations, 150);

    return () => {
      clearTimeout(timer);
      // Kill only the specific triggers set up in this hook instance
      triggers.forEach((trigger) => trigger.kill());
      document.querySelectorAll('[data-gsap-done]').forEach((el) => {
        delete el.dataset.gsapDone;
      });
    };
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <AntiGravityBackground theme={theme} />
      <Navigation theme={theme} onToggleTheme={toggleTheme} />

      {/* key={location.pathname} forces animation to replay on page changes */}
      <main className="main-content" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/ctfs" element={<CtfsPage />} />
          <Route path="/fsociety" element={<FsocietyPage />} />
          <Route path="/sheriff-control" element={<SheriffControlPage />} />
          <Route path="/internship" element={<InternshipsPage />} />
        </Routes>
      </main>

      {/* Floating interactive terminal chatbot */}
      <TerminalWidget />
    </>
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
