
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import WhereWeWorkPage from './pages/WhereWeWorkPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectGC7 from './pages/ProjectGC7';
import ProjectToT from './pages/ProjectToT';
import ProjectHackathon from './pages/ProjectHackathon';
import ProjectSBC from './pages/ProjectSBC';
import ProjectNSM from './pages/ProjectNSM';
import ProjectReady4PEP from './pages/ProjectReady4PEP';
import ProjectSasakawa from './pages/ProjectSasakawa';
import PartnersPage from './pages/PartnersPage';
import MediaPage from './pages/MediaPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import VacanciesPage from './pages/VacanciesPage';

const ScrollHandler = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollHandler />
      <Routes>
        {/* Admin routes - full-page, no Navbar/Footer */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Public routes - with Navbar & Footer */}
        <Route path="/*" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/where-we-work" element={<WhereWeWorkPage />} />
                <Route path="/media" element={<MediaPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/gc7" element={<ProjectGC7 />} />
                <Route path="/projects/tot" element={<ProjectToT />} />
                <Route path="/projects/hackathon" element={<ProjectHackathon />} />
                <Route path="/projects/sbc" element={<ProjectSBC />} />
                <Route path="/projects/nsm" element={<ProjectNSM />} />
                <Route path="/projects/ready4pep" element={<ProjectReady4PEP />} />
                <Route path="/projects/shf" element={<ProjectSasakawa />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/vacancies" element={<VacanciesPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
