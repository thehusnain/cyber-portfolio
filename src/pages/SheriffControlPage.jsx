import React, { useState, useEffect } from 'react';
import './SheriffControlPage.css';
import { DEFAULT_PROJECTS } from '../components/Projects';
import { DEFAULT_CTFS } from './CtfsPage';
import { DEFAULT_FULL_CERTS } from './CertificatesPage';
import { DEFAULT_INTERNSHIPS } from '../components/Internships';

const SheriffControlPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active Admin Tab: 'projects' | 'ctfs' | 'certs' | 'interns'
  const [activeTab, setActiveTab] = useState('projects');

  // Database states
  const [projects, setProjects] = useState([]);
  const [ctfs, setCtfs] = useState([]);
  const [certs, setCerts] = useState([]);
  const [internships, setInternships] = useState([]);

  const emptyProjectForm = {
    title: '', description: '', tags: '', repoLink: '', demoLink: '', icon: 'fa-code', featured: false
  };

  // Form states
  const [projectForm, setProjectForm] = useState(emptyProjectForm);
  const [editingProjectIndex, setEditingProjectIndex] = useState(null);
  
  const [ctfForm, setCtfForm] = useState({
    title: '', rank: '', team: 'Team: FSOCIETY', desc: '', stats: '', img: '', badge: ''
  });

  const [certForm, setCertForm] = useState({
    title: '', issuer: '', desc: '', date: '', img: '', icon: 'fa-award'
  });

  const [internForm, setInternForm] = useState({
    company: '', role: '', instructor: '', repoLink: '', certificateLink: '', desc: ''
  });

  // Check login state
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('admin-authenticated');
    if (sessionAuth === 'true') {
      setIsLoggedIn(true);
    }

    // Load data from localStorage or set defaults
    const savedProjects = localStorage.getItem('portfolio-projects');
    if (savedProjects) setProjects(JSON.parse(savedProjects));
    else {
      setProjects(DEFAULT_PROJECTS);
      localStorage.setItem('portfolio-projects', JSON.stringify(DEFAULT_PROJECTS));
    }

    const savedCtfs = localStorage.getItem('portfolio-ctfs');
    if (savedCtfs) setCtfs(JSON.parse(savedCtfs));
    else {
      setCtfs(DEFAULT_CTFS);
      localStorage.setItem('portfolio-ctfs', JSON.stringify(DEFAULT_CTFS));
    }

    const savedCerts = localStorage.getItem('portfolio-certs');
    if (savedCerts) setCerts(JSON.parse(savedCerts));
    else {
      setCerts(DEFAULT_FULL_CERTS);
      localStorage.setItem('portfolio-certs', JSON.stringify(DEFAULT_FULL_CERTS));
    }

    const savedInterns = localStorage.getItem('portfolio-internships');
    if (savedInterns) {
      try {
        let parsed = JSON.parse(savedInterns);
        if (Array.isArray(parsed)) {
          parsed = parsed.filter(item => item.company !== "Red Team Labs" && !item.role.includes("Research Intern"));
          setInternships(parsed);
          localStorage.setItem('portfolio-internships', JSON.stringify(parsed));
        } else {
          setInternships(DEFAULT_INTERNSHIPS);
          localStorage.setItem('portfolio-internships', JSON.stringify(DEFAULT_INTERNSHIPS));
        }
      } catch (e) {
        setInternships(DEFAULT_INTERNSHIPS);
      }
    } else {
      setInternships(DEFAULT_INTERNSHIPS);
      localStorage.setItem('portfolio-internships', JSON.stringify(DEFAULT_INTERNSHIPS));
    }
  }, []);



  const handleLogin = (e) => {
    e.preventDefault();
    // Fetch the admin password from the environment variable (exposed via Vite)
    const envPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'husnain123';

    if (
      (username.toLowerCase() === 'admin' || username.toLowerCase() === 'husnain') && 
      (password === envPassword)
    ) {
      sessionStorage.setItem('admin-authenticated', 'true');
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or administrative key.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin-authenticated');
    setIsLoggedIn(false);
  };

  const resetProjectForm = () => {
    setProjectForm(emptyProjectForm);
    setEditingProjectIndex(null);
  };

  const buildProjectFromForm = (form) => ({
    ...form,
    tags: form.tags.split(',').map(t => t.trim()).filter(Boolean)
  });

  // Add Item actions
  const handleSaveProject = (e) => {
    e.preventDefault();
    if (!projectForm.title || !projectForm.description) return;

    const projectPayload = buildProjectFromForm(projectForm);
    const updated = editingProjectIndex === null
      ? [projectPayload, ...projects]
      : projects.map((project, index) => (index === editingProjectIndex ? projectPayload : project));

    setProjects(updated);
    localStorage.setItem('portfolio-projects', JSON.stringify(updated));
    resetProjectForm();
  };

  const handleEditProject = (index) => {
    const project = projects[index];
    setEditingProjectIndex(index);
    setProjectForm({
      title: project.title || '',
      description: project.description || '',
      tags: Array.isArray(project.tags) ? project.tags.join(', ') : '',
      repoLink: project.repoLink || '',
      demoLink: project.demoLink || '',
      icon: project.icon || 'fa-code',
      featured: Boolean(project.featured)
    });
  };

  const handleToggleProjectFeatured = (index) => {
    const updated = projects.map((project, projectIndex) => (
      projectIndex === index ? { ...project, featured: !project.featured } : project
    ));

    setProjects(updated);
    localStorage.setItem('portfolio-projects', JSON.stringify(updated));
  };

  const handleCancelProjectEdit = () => {
    resetProjectForm();
  };

  const handleAddCtf = (e) => {
    e.preventDefault();
    if (!ctfForm.title || !ctfForm.desc) return;

    const newCtf = {
      ...ctfForm,
      stats: ctfForm.stats.split(',').map(s => s.trim()).filter(Boolean)
    };

    const updated = [newCtf, ...ctfs];
    setCtfs(updated);
    localStorage.setItem('portfolio-ctfs', JSON.stringify(updated));

    // Reset Form
    setCtfForm({
      title: '', rank: '', team: 'Team: FSOCIETY', desc: '', stats: '', img: '', badge: ''
    });
  };

  const handleAddCert = (e) => {
    e.preventDefault();
    if (!certForm.title || !certForm.issuer) return;

    const newCert = { ...certForm };
    const updated = [newCert, ...certs];
    setCerts(updated);
    localStorage.setItem('portfolio-certs', JSON.stringify(updated));

    // Reset Form
    setCertForm({
      title: '', issuer: '', desc: '', date: '', img: '', icon: 'fa-award'
    });
  };

  const handleAddIntern = (e) => {
    e.preventDefault();
    if (!internForm.company || !internForm.role) return;

    const newIntern = { ...internForm };
    const updated = [newIntern, ...internships];
    setInternships(updated);
    localStorage.setItem('portfolio-internships', JSON.stringify(updated));

    // Reset Form
    setInternForm({
      company: '', role: '', instructor: '', repoLink: '', certificateLink: '', desc: ''
    });
  };

  // Delete Item actions
  const handleDeleteItem = (category, index) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    if (category === 'projects') {
      const updated = projects.filter((_, i) => i !== index);
      setProjects(updated);
      localStorage.setItem('portfolio-projects', JSON.stringify(updated));
      if (editingProjectIndex === index) {
        resetProjectForm();
      }
    } else if (category === 'ctfs') {
      const updated = ctfs.filter((_, i) => i !== index);
      setCtfs(updated);
      localStorage.setItem('portfolio-ctfs', JSON.stringify(updated));
    } else if (category === 'certs') {
      const updated = certs.filter((_, i) => i !== index);
      setCerts(updated);
      localStorage.setItem('portfolio-certs', JSON.stringify(updated));
    } else if (category === 'interns') {
      const updated = internships.filter((_, i) => i !== index);
      setInternships(updated);
      localStorage.setItem('portfolio-internships', JSON.stringify(updated));
    }
  };

  // Reset database to default
  const handleResetToDefault = (category) => {
    if (!window.confirm(`Are you sure you want to reset all ${category} to defaults? Custom entries will be lost.`)) return;

    if (category === 'projects') {
      setProjects(DEFAULT_PROJECTS);
      localStorage.setItem('portfolio-projects', JSON.stringify(DEFAULT_PROJECTS));
      resetProjectForm();
    } else if (category === 'ctfs') {
      setCtfs(DEFAULT_CTFS);
      localStorage.setItem('portfolio-ctfs', JSON.stringify(DEFAULT_CTFS));
    } else if (category === 'certs') {
      setCerts(DEFAULT_FULL_CERTS);
      localStorage.setItem('portfolio-certs', JSON.stringify(DEFAULT_FULL_CERTS));
    } else if (category === 'interns') {
      setInternships(DEFAULT_INTERNSHIPS);
      localStorage.setItem('portfolio-internships', JSON.stringify(DEFAULT_INTERNSHIPS));
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-card fade-in">
          <div className="admin-login-header">
            <i className="fas fa-lock-open lock-icon"></i>
            <h2>SHERIFF CONTROL PANEL</h2>
            <p>Access Husnain's Portfolio Database System</p>
          </div>
          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="form-group">
              <label>Operator ID</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="admin"
                required 
              />
            </div>
            <div className="form-group">
              <label>Administrative Security Key</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="••••••••"
                required 
              />
            </div>
            {loginError && <p className="login-error-message"><i className="fas fa-exclamation-triangle"></i> {loginError}</p>}
            <button type="submit" className="btn btn-primary login-submit-btn">Authenticate &rarr;</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-header">
        <div>
          <h2>PORTFOLIO DATABASE MANAGEMENT (SHERIFF CONTROL)</h2>
          <p>Logged in as: Husnain (Lead Operator)</p>
        </div>
        <button className="btn btn-secondary logout-btn" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Secure Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="admin-tabs">
        <button 
          className={`admin-tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          <i className="fas fa-code"></i> Projects
        </button>
        <button 
          className={`admin-tab-btn ${activeTab === 'ctfs' ? 'active' : ''}`}
          onClick={() => setActiveTab('ctfs')}
        >
          <i className="fas fa-flag"></i> CTFs
        </button>
        <button 
          className={`admin-tab-btn ${activeTab === 'certs' ? 'active' : ''}`}
          onClick={() => setActiveTab('certs')}
        >
          <i className="fas fa-award"></i> Certifications
        </button>
        <button 
          className={`admin-tab-btn ${activeTab === 'interns' ? 'active' : ''}`}
          onClick={() => setActiveTab('interns')}
        >
          <i className="fas fa-building"></i> Internships
        </button>
      </div>

      <div className="admin-dashboard-grid">
        
        {/* Left Column: Form to Add */}
        <div className="admin-form-section">
          <h3>Add New {activeTab === 'projects' ? 'Project' : activeTab === 'ctfs' ? 'CTF Achievement' : activeTab === 'certs' ? 'Certificate' : 'Internship'}</h3>
          
          {activeTab === 'projects' && (
            <form onSubmit={handleSaveProject} className="admin-crud-form">
              {editingProjectIndex !== null && (
                <div className="admin-edit-banner">
                  <span><i className="fas fa-pen-to-square"></i> Editing project #{editingProjectIndex + 1}</span>
                  <button type="button" className="btn btn-secondary admin-cancel-edit-btn" onClick={handleCancelProjectEdit}>
                    Cancel Edit
                  </button>
                </div>
              )}
              <div className="form-group">
                <label>Project Title *</label>
                <input 
                  type="text" 
                  value={projectForm.title} 
                  onChange={(e) => setProjectForm({...projectForm, title: e.target.value})} 
                  placeholder="e.g. WriteupForge" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Description *</label>
                <textarea 
                  value={projectForm.description} 
                  onChange={(e) => setProjectForm({...projectForm, description: e.target.value})} 
                  placeholder="Detailed project summary..."
                  rows="4"
                  required
                />
              </div>
              <div className="form-group">
                <label>Tags (Comma separated) *</label>
                <input 
                  type="text" 
                  value={projectForm.tags} 
                  onChange={(e) => setProjectForm({...projectForm, tags: e.target.value})} 
                  placeholder="Python, OSINT, Forensics" 
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>GitHub Code URL</label>
                  <input 
                    type="url" 
                    value={projectForm.repoLink} 
                    onChange={(e) => setProjectForm({...projectForm, repoLink: e.target.value})} 
                    placeholder="https://github.com/..." 
                  />
                </div>
                <div className="form-group">
                  <label>Live Demo URL</label>
                  <input 
                    type="url" 
                    value={projectForm.demoLink} 
                    onChange={(e) => setProjectForm({...projectForm, demoLink: e.target.value})} 
                    placeholder="https://..." 
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>FontAwesome Icon Class</label>
                  <input 
                    type="text" 
                    value={projectForm.icon} 
                    onChange={(e) => setProjectForm({...projectForm, icon: e.target.value})} 
                    placeholder="fa-code" 
                  />
                </div>
                <div className="form-group checkbox-group">
                  <label htmlFor="featured-check">Featured Project?</label>
                  <input 
                    id="featured-check"
                    type="checkbox" 
                    checked={projectForm.featured} 
                    onChange={(e) => setProjectForm({...projectForm, featured: e.target.checked})} 
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary crud-submit-btn">
                <i className={`fas ${editingProjectIndex === null ? 'fa-plus' : 'fa-floppy-disk'}`}></i>
                {editingProjectIndex === null ? ' Save Project' : ' Update Project'}
              </button>
            </form>
          )}

          {activeTab === 'ctfs' && (
            <form onSubmit={handleAddCtf} className="admin-crud-form">
              <div className="form-group">
                <label>CTF Title *</label>
                <input 
                  type="text" 
                  value={ctfForm.title} 
                  onChange={(e) => setCtfForm({...ctfForm, title: e.target.value})} 
                  placeholder="e.g. Ramadan CTF 2026" 
                  required 
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Global Rank / Score *</label>
                  <input 
                    type="text" 
                    value={ctfForm.rank} 
                    onChange={(e) => setCtfForm({...ctfForm, rank: e.target.value})} 
                    placeholder="e.g. Rank 22 / 697 Teams" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Team Name *</label>
                  <input 
                    type="text" 
                    value={ctfForm.team} 
                    onChange={(e) => setCtfForm({...ctfForm, team: e.target.value})} 
                    placeholder="e.g. Team: FSOCIETY" 
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Description *</label>
                <textarea 
                  value={ctfForm.desc} 
                  onChange={(e) => setCtfForm({...ctfForm, desc: e.target.value})} 
                  placeholder="Summary of CTF performance and challenges solved..."
                  rows="4"
                  required
                />
              </div>
              <div className="form-group">
                <label>Metrics / Stats (Comma separated) *</label>
                <input 
                  type="text" 
                  value={ctfForm.stats} 
                  onChange={(e) => setCtfForm({...ctfForm, stats: e.target.value})} 
                  placeholder="1730 Points, 23 Solves" 
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Performance Image URL / Asset</label>
                  <input 
                    type="text" 
                    value={ctfForm.img} 
                    onChange={(e) => setCtfForm({...ctfForm, img: e.target.value})} 
                    placeholder="/assets/ctfs/name.png or external link" 
                  />
                </div>
                <div className="form-group">
                  <label>Badge PDF Download URL</label>
                  <input 
                    type="text" 
                    value={ctfForm.badge} 
                    onChange={(e) => setCtfForm({...ctfForm, badge: e.target.value})} 
                    placeholder="PDF path if applicable" 
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary crud-submit-btn"><i className="fas fa-plus"></i> Save CTF Card</button>
            </form>
          )}

          {activeTab === 'certs' && (
            <form onSubmit={handleAddCert} className="admin-crud-form">
              <div className="form-group">
                <label>Certificate Title *</label>
                <input 
                  type="text" 
                  value={certForm.title} 
                  onChange={(e) => setCertForm({...certForm, title: e.target.value})} 
                  placeholder="e.g. Certified Ethical Hacker" 
                  required 
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Issuer *</label>
                  <input 
                    type="text" 
                    value={certForm.issuer} 
                    onChange={(e) => setCertForm({...certForm, issuer: e.target.value})} 
                    placeholder="e.g. TryHackMe / Cisco" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Date *</label>
                  <input 
                    type="text" 
                    value={certForm.date} 
                    onChange={(e) => setCertForm({...certForm, date: e.target.value})} 
                    placeholder="e.g. Feb 2026 / 2025" 
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Short Description *</label>
                <textarea 
                  value={certForm.desc} 
                  onChange={(e) => setCertForm({...certForm, desc: e.target.value})} 
                  placeholder="Core concepts and credentials overview..."
                  rows="3"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Certificate Image URL / Asset</label>
                  <input 
                    type="text" 
                    value={certForm.img} 
                    onChange={(e) => setCertForm({...certForm, img: e.target.value})} 
                    placeholder="/assets/name.png or external link" 
                  />
                </div>
                <div className="form-group">
                  <label>FontAwesome Icon Class</label>
                  <input 
                    type="text" 
                    value={certForm.icon} 
                    onChange={(e) => setCertForm({...certForm, icon: e.target.value})} 
                    placeholder="fa-award" 
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary crud-submit-btn"><i className="fas fa-plus"></i> Save Certificate</button>
            </form>
          )}

          {activeTab === 'interns' && (
            <form onSubmit={handleAddIntern} className="admin-crud-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Company *</label>
                  <input 
                    type="text" 
                    value={internForm.company} 
                    onChange={(e) => setInternForm({...internForm, company: e.target.value})} 
                    placeholder="e.g. Red Team Labs" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Internship Role *</label>
                  <input 
                    type="text" 
                    value={internForm.role} 
                    onChange={(e) => setInternForm({...internForm, role: e.target.value})} 
                    placeholder="e.g. Security Research Intern" 
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Instructor *</label>
                <input 
                  type="text" 
                  value={internForm.instructor} 
                  onChange={(e) => setInternForm({...internForm, instructor: e.target.value})} 
                  placeholder="Instructor name & role" 
                  required 
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>GitHub Code URL</label>
                  <input 
                    type="url" 
                    value={internForm.repoLink} 
                    onChange={(e) => setInternForm({...internForm, repoLink: e.target.value})} 
                    placeholder="https://github.com/..." 
                  />
                </div>
                <div className="form-group">
                  <label>Certificate / PDF link</label>
                  <input 
                    type="text" 
                    value={internForm.certificateLink} 
                    onChange={(e) => setInternForm({...internForm, certificateLink: e.target.value})} 
                    placeholder="PDF path or secure external link" 
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Description *</label>
                <textarea 
                  value={internForm.desc} 
                  onChange={(e) => setInternForm({...internForm, desc: e.target.value})} 
                  placeholder="Detail your roles, contributions, and key learning metrics..."
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary crud-submit-btn"><i className="fas fa-plus"></i> Save Internship</button>
            </form>
          )}


        </div>

        {/* Right Column: Database list */}
        <div className="admin-list-section">
          <div className="list-section-header">
            <h3>Active Elements Database</h3>
            <button className="btn btn-secondary reset-db-btn" onClick={() => handleResetToDefault(activeTab)}>
              <i className="fas fa-rotate-left"></i> Revert to Default
            </button>
          </div>
          
          <div className="admin-db-list">
            {activeTab === 'projects' && projects.length === 0 && <p className="db-empty-msg">No active projects found.</p>}
            {activeTab === 'projects' && projects.map((proj, idx) => (
              <div key={idx} className="admin-db-card">
                <div className="db-card-info">
                  <h4>{proj.title} {proj.featured && <span className="db-featured-badge"><i className="fas fa-star"></i> Featured</span>}</h4>
                  <p>{proj.description.substring(0, 100)}...</p>
                  <div className="db-card-tags">
                    {proj.tags && proj.tags.map((t, i) => <span key={i} className="db-tag">{t}</span>)}
                  </div>
                </div>
                <div className="db-card-actions">
                  <button type="button" className="btn db-card-edit-btn" onClick={() => handleEditProject(idx)}>
                    <i className="fas fa-pen-to-square"></i>
                    <span>Edit</span>
                  </button>
                  <button type="button" className="btn db-card-feature-btn" onClick={() => handleToggleProjectFeatured(idx)}>
                    <i className={`fas ${proj.featured ? 'fa-star' : 'fa-star-half-stroke'}`}></i>
                    <span>{proj.featured ? 'Unfeature' : 'Feature'}</span>
                  </button>
                  <button type="button" className="btn db-card-delete-btn" onClick={() => handleDeleteItem('projects', idx)}>
                    <i className="fas fa-trash"></i>
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}

            {activeTab === 'ctfs' && ctfs.length === 0 && <p className="db-empty-msg">No CTF cards found.</p>}
            {activeTab === 'ctfs' && ctfs.map((ctf, idx) => (
              <div key={idx} className="admin-db-card">
                <div className="db-card-info">
                  <h4>{ctf.title}</h4>
                  <span className="db-sub-info">{ctf.rank} · {ctf.team}</span>
                  <p>{ctf.desc.substring(0, 100)}...</p>
                </div>
                <button className="btn db-card-delete-btn" onClick={() => handleDeleteItem('ctfs', idx)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}

            {activeTab === 'certs' && certs.length === 0 && <p className="db-empty-msg">No certificates found.</p>}
            {activeTab === 'certs' && certs.map((cert, idx) => (
              <div key={idx} className="admin-db-card">
                <div className="db-card-info">
                  <h4>{cert.title}</h4>
                  <span className="db-sub-info">{cert.issuer} · {cert.date}</span>
                  <p>{cert.desc}</p>
                </div>
                <button className="btn db-card-delete-btn" onClick={() => handleDeleteItem('certs', idx)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}

            {activeTab === 'interns' && internships.length === 0 && <p className="db-empty-msg">No internships found.</p>}
            {activeTab === 'interns' && internships.map((intern, idx) => (
              <div key={idx} className="admin-db-card">
                <div className="db-card-info">
                  <h4>{intern.role}</h4>
                  <span className="db-sub-info">{intern.company} · Instructor: {intern.instructor}</span>
                  <p>{intern.desc}</p>
                </div>
                <button className="btn db-card-delete-btn" onClick={() => handleDeleteItem('interns', idx)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}


          </div>
        </div>

      </div>
    </div>
  );
};

export default SheriffControlPage;
