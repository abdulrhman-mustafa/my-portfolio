import React from 'react';
import Layout from '../Pages/Layout';
import AboutMe from '../Pages/AboutMe';
import Experience from '../Pages/Experience';
import Education from '../Pages/Education';
import Certifications from '../Pages/Certifications';
import Projects from '../Pages/Projects';
import Testimonials from '../Pages/Testimonials';
import Contact from '../Pages/Contact';
import { HashRouter , Routes, Route, Navigate } from 'react-router';


const App = () => {
  return (
    <div className="app bg-zinc-950">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="projects" replace />}></Route>
              <Route path="/projects" element={<Projects/>}></Route>
              <Route path="/about" element={<AboutMe />}>
                <Route index element={<Navigate to="experience" replace />} />
                <Route path="experience" element={<Experience/>} />
                <Route path="education" element={<Education/>} />
                <Route path="certifications" element={<Certifications/>} />
              </Route>
              <Route path="/testimonials" element={<Testimonials/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
            </Route>
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;


