import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const containerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: -50, opacity: 0 },
};

const aboutVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: 200, opacity: 0 },
};

const CustomNavLink = React.memo(({ to, children }) => {
const baseClass = "font-medium hover:text-zinc-100 transition-colors uppercase px-5 py-2 border-l-4";
return (
<li>
    <NavLink
    to={to}
    end
    className={({ isActive }) =>
        `${baseClass} ${isActive ? "text-zinc-100 border-zinc-500" : "text-zinc-400 border-transparent"}`
    }
    >
    {children}
    </NavLink>
</li>
);
});

const AboutMe = () => {
return (
<div className="about max-lg:p-5 xl:pb-40 lg:ml-80 lg:flex-1">

    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="hidden md:flex items-center justify-between will-change-transform"
        >
        <div className="title">
            <h1 className="text-zinc-100 text-4xl font-bold mb-3">About Me</h1>
            <div className="dividerLine" aria-hidden="true"></div>
            <p className="text-zinc-400 w-full md:w-[650px] my-3">
                Frontend developer passionate about building responsive, user-focused web interfaces. I enjoy turning ideas into functional and clean digital experiences.
            </p>
        </div>
    </motion.div>

    <motion.div
    variants={aboutVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="about-me max-lg:py-6 will-change-transform"
    >
    <div className="left-side lg:flex lg:pt-20">
        <ul className="space-y-8 border-l border-zinc-800" role="navigation" aria-label="About Me Navigation">
        <CustomNavLink to="/about/experience">Experience</CustomNavLink>
        <CustomNavLink to="/about/education">Education</CustomNavLink>
        <CustomNavLink to="/about/certifications">Certifications</CustomNavLink>
        </ul>
    </div>

    <div className="right-side relative max-lg:pt-8 xl:pb-25">
        <AnimatePresence mode="wait">
        <Outlet />
        </AnimatePresence>
    </div>
    </motion.div>
</div>
);
};

export default AboutMe;