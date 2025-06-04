import React from 'react';
import { RiGlobalLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import host from '../assets/ico-hosting.png';
import foodwagon from '../assets/foodwagon.png';

const containerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const boxHolderVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const ProjectCard = React.memo(({ image, title, date, description, tools, website, source }) => (
<div className="box border flex flex-col border-zinc-800 rounded-xl">
    <div className="box-img w-full h-full">
        <img className="object-cover rounded-t-xl" src={image} alt={`${title} project screenshot`} loading="lazy" />
    </div>
    <div className="box-title p-4">
        <h2 className="text-zinc-100 font-bold text-xl">{title}</h2>
        <span className="text-zinc-300 font-medium text-xs">{date}</span>
        <p className="text-zinc-400 text-xs w-full mt-2">{description}</p>
    </div>
    <div className="tools flex gap-2 px-4">
        {tools.map((tool, index) => (
            <div
                key={index}
                className="bg-zinc-800/50 rounded flex items-center justify-center text-xs font-medium px-2 py-1"
            >
        <p className="text-zinc-400">{tool}</p>
        </div>
    ))}
    </div>
    <div className="live p-4 gap-2 flex mb-2">
    <a
        className="text-zinc-800 bg-zinc-100 flex items-center px-2 py-1 rounded text-sm"
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${title} website`}
    >
        <RiGlobalLine className="me-2" /> Website
    </a>
    <a
        className="text-zinc-800 bg-zinc-100 flex items-center px-2 py-1 rounded text-sm"
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} source code on GitHub`}
    >
        <FaGithub className="me-2" /> Source
    </a>
    </div>
</div>
));

const Projects = () => {
return (
    <div className="projects max-lg:p-5 lg:ml-80 lg:flex-1">

    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:flex items-center justify-between will-change-transform"
    >
        <div className="title">
        <h1 className="text-zinc-100 text-4xl font-bold mb-3">My Projects</h1>
        <div className="dividerLine" aria-hidden="true"></div>
        <p className="text-zinc-400 w-full my-3">
            Here’s a showcase of some projects I’ve completed for clients.
        </p>
        </div>
    </motion.div>

    <motion.div
        variants={boxHolderVariants}
        initial="hidden"
        animate="visible"
        className="box-holder grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8 will-change-transform"
    >
        <ProjectCard
        image={host}
        title="Eco-Hosting"
        date="July 2024 - Present"
        description="ICO Hosting is a simple and modern website I trained and designed for hosting ICO projects. It has a clean look, easy-to-use layout, and works well on all devices."
        tools={['HTML', 'Bootstrap', 'Js', 'Figma']}
        website="https://abdulrhman-mustafa.github.io/hosting-project/"
        source="https://github.com/abdulrhman-mustafa/hosting-project.git"
        />
        <ProjectCard
        image={foodwagon}
        title="FoodwaGon"
        date="Oct 2023 - Present"
        description="FoodWagon is a responsive restaurant website template I created as a practice project. It features a clean, user-friendly design for easy menu browsing and ordering."
        tools={['HTML', 'Bootstrap', 'Js']}
        website="https://abdulrhman-mustafa.github.io/foodWagon1/"
        source="https://github.com/abdulrhman-mustafa/foodWagon1.git"
        />
    </motion.div>
    </div>
);
};

export default Projects;