import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CertificatesPage from './pages/CertificatesPage';
import CtfsPage from './pages/CtfsPage';
import CinematicIntro from './components/CinematicIntro';
import CyberBackground from './components/CyberBackground';
import { useState } from 'react';
import './index.css';

function App() {
  const [intro, setIntro] = useState(true);

  return (
    <Router>
      {intro && <CinematicIntro onComplete={() => setIntro(false)} />}
      <CyberBackground />
      {!intro && (
        <>
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/certificates" element={<CertificatesPage />} />
              <Route path="/ctfs" element={<CtfsPage />} />
            </Routes>
          </main>
        </>
      )}
    </Router>
  );
}

export default App;
