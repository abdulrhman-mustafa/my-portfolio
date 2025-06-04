import React from 'react';
import { useLocation } from 'react-router-dom';
import AboutMe from '../Pages/AboutMe';
import Projects from '../Pages/Projects';
import Testimonials from '../Pages/Testimonials';
import Contact from '../Pages/Contact';
import Sidebar from '../Pages/Sidebar';
import Experience from '../Pages/Experience';
import Education from '../Pages/Education';
import Certifications from '../Pages/Certifications';

const MainContent = () => {

    const location = useLocation();
    const renderAboutSection = () => {
        if (location.pathname.includes('experience')) return <Experience />;
        if (location.pathname.includes('education')) return <Education />;
        if (location.pathname.includes('certifications')) return <Certifications />;
        return <Experience />; // default section
    };

    return (
        <section className="main-content  p-10 space-y-20">
            <Sidebar />
            {(location.pathname === '/' || location.pathname.includes('/about')) && (
                <div id="about">
                    <AboutMe />
                    <div className="about-inner-section">
                        {renderAboutSection()}
                    </div>
                </div>
            )}
            <Projects />
            <Testimonials />
            <Contact />
        </section>
    );
}


export default MainContent;
