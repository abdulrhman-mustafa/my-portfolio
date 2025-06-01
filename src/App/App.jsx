import React from 'react';
import { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react'
import Layout from '../Pages/Layout';
const AboutMe = lazy(() => import('../Pages/AboutMe'));
const Projects = lazy(() => import('../Pages/Projects'));
const Testimonials = lazy(() => import('../Pages/Testimonials'));
const Experience = lazy(() => import('../Pages/Experience'));
const Education = lazy(() => import('../Pages/Education'));
const Certifications = lazy(() => import('../Pages/Certifications'));
const Contact = lazy(() => import('../Pages/Contact'));

// import AboutMe from '../Pages/AboutMe';
// import Projects from '../Pages/Projects';
// import Testimonials from '../Pages/Testimonials';
// import Contact from '../Pages/Contact';
import { HashRouter , Routes, Route, Navigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import MainContent from '../Components/MainContent';
import Sidebar from '../Pages/Sidebar';

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
        <Suspense fallback={
          <div className='w-full h-screen bg-zinc-950 flex items-center justify-center'>
            <BeatLoader color="#fff" />
          </div>
        }>
          {isLargeScreen ? (
            <MainContent /> 
          ) : (
            
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
            
          )}
        </Suspense>
      </div>
    </HashRouter>
  );
}

export default App;


