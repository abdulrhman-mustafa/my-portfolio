import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { motion } from "framer-motion"

const AboutMe = () => {
    const baseClass = "font-medium hover:text-zinc-100 transition-colors uppercase px-5 py-2  border-l-4";
    return (
            <div className="about relative lg:p-8 max-lg:p-5 lg:h-screen lg:bg-zinc-950 lg:ml-80 lg:flex-1">
                
                <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="hidden md:flex items-center justify-between">
                    <div className="title">
                        <h1 className="text-zinc-100 text-4xl font-bold mb-3">About Me</h1>
                        <div className="dividerLine" aria-hidden="true"></div>
                        <p className="text-zinc-400 w-[650px] my-3">Frontend developer passionate about building responsive, user-focused web interfaces. I enjoy turning ideas into functional and clean digital experiences.</p>
                    </div>
                </motion.div>

                <motion.div 
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="about-me lg:flex max-lg:py-6 lg:pt-16">

                    <div className="left-side lg:flex mb-10">
                            <ul className="space-y-8  border-l border-zinc-800">
                                <li>
                                    <NavLink to="/about/experience" end className={({ isActive }) =>
                                            `${baseClass} ${isActive ? "text-zinc-100 border-zinc-500": "text-zinc-400 border-transparent"}`
                                        }
                                    >
                                        Experience
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about/education" end className={({ isActive }) =>
                                            `${baseClass} ${isActive ? "text-zinc-100 border-zinc-500" : "text-zinc-400 border-transparent"}`
                                        }
                                    >
                                        Education
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about/certifications" end className={({ isActive }) =>
                                            `${baseClass} ${isActive ? "text-zinc-100 border-zinc-500" : "text-zinc-400 border-transparent"}`
                                        }
                                    >
                                        Certifications
                                    </NavLink>
                                </li>
                            </ul>
                    </div>

                    <div className="right-side max-lg:pt-5 lg:w-full  lg:relative lg:ml-9">
                        <Outlet />
                    </div>


                </motion.div>
            </div>
    );
}

export default AboutMe;
