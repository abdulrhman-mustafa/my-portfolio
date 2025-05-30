import React from 'react';
import AboutMe from '../Pages/AboutMe';
import Projects from '../Pages/Projects';
import Testimonials from '../Pages/Testimonials';
import Contact from '../Pages/Contact';

const MainContent = () => {
    return (
        <section className="main-content">
            <AboutMe />
            <Projects />
            <Testimonials />
            <Contact />
        </section>
    );
}

export default MainContent;
