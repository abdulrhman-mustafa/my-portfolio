import React from 'react';
import host from '../assets/ico-hosting.png'
import foodwagon from '../assets/foodwagon.png'
import { RiGlobalLine } from "react-icons/ri";
import { FaGithub, FaArrowRight} from "react-icons/fa";

const Projects = () => {
    return (
        <div className="projects lg:p-8 max-lg:p-5 lg:h-screen lg:bg-zinc-950 lg:ml-80 lg:flex-1">
            <div className="hidden md:flex items-center justify-between">
                    <div className="title">
                        <h1 className="text-zinc-100 text-4xl font-bold mb-3">My Projects</h1>
                        <div className="dividerLine" aria-hidden="true"></div>
                        <p className="text-zinc-400 my-3">Here’s a showcase of some projects I’ve completed for clients.</p>
                    </div>
                    <a href="" className="text-zinc-400 flex items-center justify-center gap-2 hover:text-white transition-colors"><span>View More</span><div className="arrow transition duration-300"><FaArrowRight /></div></a>
            </div>
            <div className="box-holder grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8">
                    <div className="box border flex flex-col border-zinc-800 rounded-xl">
                        <div className="box-img w-full h-full">
                            <img className="object-cover rounded-t-xl" src={host} alt="host" loading="lazy" />
                        </div>
                        <div className="box-title p-4">
                            <h2 className="text-zinc-100 font-bold text-xl">Eco-Hosting</h2>
                            <span className="text-zinc-300 font-medium text-xs">July 2024 - Present</span>
                            <p className="text-zinc-400 text-xs w-auto mt-2">
                                ICO Hosting is a simple and modern website I training and designed for hosting ICO projects. It has a clean look, easy-to-use layout, and works well on all devices.
                            </p>
                        </div>
                        <div className="tools flex gap-2 px-4">
                            <div className="bg-zinc-800/50 rounded flex items-center justify-center text-xs text-medium px-2 py-1">
                                <p className="text-zinc-400">HTML</p>
                            </div>
                            <div className="bg-zinc-800/50 rounded flex items-center justify-center text-xs text-medium px-2 py-1">
                                <p className="text-zinc-400">Bootstrap</p>
                            </div>
                            <div className="bg-zinc-800/50 rounded flex items-center justify-center text-xs text-medium px-2 py-1">
                                <p className="text-zinc-400">Js</p>
                            </div>
                            <div className="bg-zinc-800/50 rounded flex items-center justify-center text-xs text-medium px-2 py-1">
                                <p className="text-zinc-400">Figma</p>
                            </div>
                        </div>
                        <div className="live p-4 gap-2 flex mb-2">
                            <a className="text-zinc-800 bg-zinc-100 flex items-center px-2 py-1 rounded text-sm" href="https://abdulrhman-mustafa.github.io/hosting-project/" target="_blank"><RiGlobalLine className='me-2'/> Website</a>
                            <a className="text-zinc-800 bg-zinc-100 flex items-center px-2 py-1 rounded text-sm" href="https://github.com/abdulrhman-mustafa/hosting-project.git" target="_blank"><FaGithub className='me-2'/>Source</a>
                        </div>
                    </div>
                    <div className="box border flex flex-col border-zinc-800 rounded-xl">
                        <div className="box-img w-full h-full ">
                            <img className="object-cover rounded-t-xl" src={foodwagon} alt="foodwagon" loading="lazy"/>
                        </div>
                        <div className="box-title p-4">
                            <h2 className="text-zinc-100 font-bold text-xl">FoodwaGon</h2>
                            <span className="text-zinc-300 font-medium text-xs">Oct 2023 - Present</span>
                            <p className="text-zinc-400 text-xs w-auto mt-2">
                                FoodWagon is a responsive restaurant website template I created as a practice project. It features a clean, user-friendly design for easy menu browsing and ordering.
                            </p>
                        </div>
                        <div className="tools flex gap-2 px-4">
                            <div className="bg-zinc-800/50 rounded flex items-center justify-center text-xs text-medium px-2 py-1">
                                <p className="text-zinc-400">HTML</p>
                            </div>
                            <div className="bg-zinc-800/50 rounded flex items-center justify-center text-xs text-medium px-2 py-1">
                                <p className="text-zinc-400">Bootstrap</p>
                            </div>
                            <div className="bg-zinc-800/50 rounded flex items-center justify-center text-xs text-medium px-2 py-1">
                                <p className="text-zinc-400">Js</p>
                            </div>
                        </div>
                        <div className="live p-4 gap-2 flex mb-2">
                            <a className="text-zinc-800 bg-zinc-100 flex items-center px-2 py-1 rounded text-sm" href="https://abdulrhman-mustafa.github.io/foodWagon1/" target="_blank"><RiGlobalLine className='me-2'/> Website</a>
                            <a className="text-zinc-800 bg-zinc-100 flex items-center px-2 py-1 rounded text-sm" href="https://github.com/abdulrhman-mustafa/foodWagon1.git" target="_blank"><FaGithub className='me-2'/>Source</a>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Projects;
