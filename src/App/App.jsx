import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import Layout from '../Pages/Layout';
import MainContent from '../Components/MainContent';

// Lazy-loaded components
const AboutMe = lazy(() => import('../Pages/AboutMe'));
const Projects = lazy(() => import('../Pages/Projects'));
const Testimonials = lazy(() => import('../Pages/Testimonials'));
const Experience = lazy(() => import('../Pages/Experience'));
const Education = lazy(() => import('../Pages/Education'));
const Certifications = lazy(() => import('../Pages/Certifications'));
const Contact = lazy(() => import('../Pages/Contact'));

const AppRoutes = ({ isLargeScreen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLargeScreen) {
      const smallRoutes = [
        '/projects',
        '/about',
        '/about/experience',
        '/about/education',
        '/about/certifications',
        '/testimonials',
        '/contact',
      ];
      if (smallRoutes.includes(location.pathname)) {
        navigate('/', { replace: true });
      }
    }
  }, [isLargeScreen, location.pathname, navigate]);

  if (isLargeScreen) {
    return <MainContent />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="projects" replace />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />}>
          <Route index element={<Navigate to="experience" replace />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="certifications" element={<Certifications />} />
        </Route>
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <HashRouter>
      <div className="app bg-zinc-950 overflow-hidden">
        <Suspense
          fallback={
            <div className="w-full h-screen bg-zinc-950 flex items-center justify-center">
              <BeatLoader color="#fff" />
            </div>
          }
        >
          <AppRoutes isLargeScreen={isLargeScreen} />
        </Suspense>
      </div>
    </HashRouter>
  );
};

export default App;
