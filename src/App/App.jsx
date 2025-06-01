import React from 'react';
import { lazy, Suspense } from 'react'
import Layout from '../Pages/Layout';
const AboutMe = lazy(() => import('../Pages/AboutMe'));
const Projects = lazy(() => import('../Pages/Projects'));
const Testimonials = lazy(() => import('../Pages/Testimonials'));
const Contact = lazy(() => import('../Pages/Contact'));
import Experience from '../Pages/Experience';
import Education from '../Pages/Education';
import Certifications from '../Pages/Certifications';
// import AboutMe from '../Pages/AboutMe';
// import Projects from '../Pages/Projects';
// import Testimonials from '../Pages/Testimonials';
// import Contact from '../Pages/Contact';
import { HashRouter , Routes, Route, Navigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const App = () => {
  return (
    <div className="app bg-zinc-950 overflow-hidden">
        <Suspense fallback={<div className='w-full h-screen bg-zinc-95 flex items-center justify-center'><BeatLoader color="#fff" /></div>}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="projects" replace />}></Route>
                <Route path="projects" element={<Projects/>}></Route>
                <Route path="about" element={<AboutMe />}>
                  <Route index element={<Navigate to="experience" replace />} />
                  <Route path="experience" element={<Experience/>} />
                  <Route path="education" element={<Education/>} />
                  <Route path="certifications" element={<Certifications/>} />
                </Route>
                <Route path="testimonials" element={<Testimonials/>}></Route>
                <Route path="contact" element={<Contact/>}></Route>
              </Route>
            </Routes>
          </HashRouter>
        </Suspense>
    </div>
  );
}

export default App;


