import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CertificatesPage from './pages/CertificatesPage';
import CtfsPage from './pages/CtfsPage';
import FsocietyPage from './pages/FsocietyPage';
import SheriffControlPage from './pages/SheriffControlPage';
import InternshipsPage from './pages/InternshipsPage';
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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
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
