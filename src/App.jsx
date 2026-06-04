import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CertificatesPage from './pages/CertificatesPage';
import CtfsPage from './pages/CtfsPage';
import FsocietyPage from './pages/FsocietyPage';
import SheriffControlPage from './pages/SheriffControlPage';
import InternshipsPage from './pages/InternshipsPage';
import AntiGravityBackground from './components/AntiGravityBackground';
import { useState, useEffect } from 'react';
import './index.css';

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

  // Telemetry: Track page and section visits
  useEffect(() => {
    const trackVisit = async () => {
      try {
        const apiBaseUrl = import.meta.env.VITE_TRACKER_API_URL || 'http://127.0.0.1:8000';
        const payload = {
          page: `${window.location.pathname}${window.location.hash || ''}`,
          referrer: document.referrer || '',
          screenSize: `${window.innerWidth}x${window.innerHeight}`,
          language: navigator.language || '',
        };
        
        await fetch(`${apiBaseUrl}/api/track`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.warn('Telemetry check skipped:', err.message);
      }
    };

    trackVisit();
  }, [location.pathname, location.hash]);

  // Global scroll reveal observer for [data-animate] template elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            // Unobserve once triggered to lock animation in visible state
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    // Query both current document and set up observer
    const observeElements = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((el) => observer.observe(el));
    };

    // Run observation
    observeElements();

    // Re-run observations slightly delayed to allow React components to fully mount
    const timer = setTimeout(observeElements, 100);

    return () => {
      clearTimeout(timer);
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((el) => observer.unobserve(el));
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
