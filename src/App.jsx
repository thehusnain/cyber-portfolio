import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CertificatesPage from './pages/CertificatesPage';
import BootScreen from './components/BootScreen';
import CyberBackground from './components/CyberBackground';
import { useState } from 'react';
import './index.css';

function App() {
  const [booting, setBooting] = useState(true);

  return (
    <Router>
      {booting && <BootScreen onComplete={() => setBooting(false)} />}
      <CyberBackground />
      {!booting && (
        <>
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/certificates" element={<CertificatesPage />} />
            </Routes>
          </main>
        </>
      )}
    </Router>
  );
}

export default App;
