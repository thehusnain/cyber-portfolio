import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CertificatesPage from './pages/CertificatesPage';
import CtfsPage from './pages/CtfsPage';
import FsocietyPage from './pages/FsocietyPage';
import SheriffControlPage from './pages/SheriffControlPage';
import InternshipsPage from './pages/InternshipsPage';
import { useState, useEffect } from 'react';
import './index.css';

function App() {
  // Theme state: default to dark theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    // Apply the theme to documentElement
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/ctfs" element={<CtfsPage />} />
          <Route path="/fsociety" element={<FsocietyPage />} />
          <Route path="/sheriff-control" element={<SheriffControlPage />} />
          <Route path="/internship" element={<InternshipsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
