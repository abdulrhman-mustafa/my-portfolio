import React from 'react';
import avatar from '../assets/avatar.jpg'
import Cv from '../assets/myCv.pdf'
import './Sidebar.css'
import { CiLocationOn } from "react-icons/ci";
import { DiReact } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill, RiBootstrapFill, RiWhatsappLine } from "react-icons/ri";
import { SiRedux, SiFramer, SiSass } from "react-icons/si";
import { BiLogoTypescript, BiLogoJavascript, BiLogoFigma } from "react-icons/bi";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import Navbar from '../Components/Navbar';
const Sidebar = () => {

    return (
            <div className="sidebar lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-80 lg:bg-zinc-900 text-zinc-100 lg:p-6 max-lg:px-5 max-lg:py-6 lg:[box-shadow:0_-20px_80px_-40px_#ffffff3f_inset,0_0_20px_-5px_rgba(255,255,255,0.1)] ">
                <div className="sidebar-info flex flex-col">
                    <div className="info">
                        <div className="avatar border-zinc-600 rounded-full lg:flex lg:items-center lg:justify-center my-4">
                            <img className="lg:w-30 lg:h-30 object-cover max-lg:w-22 max-lg:h-22 p-1 border-2 text-zinc-600 rounded-full" src={avatar} alt="avatar" loading="lazy" />
                        </div>
                        <div className="name flex flex-col lg:justify-center lg:items-center lg:mb-4 space-y-1">
                                <h3 className="text-zinc-100 font-bold lg:text-2xl max-lg:text-xl">Abdulrahman Mustafa</h3>
                                <p className="lg:hidden items-center flex"> <CiLocationOn className='me-1' /><span className="text-zinc-400">Alex, Egypt</span></p>
                                <p className="text-zinc-400">Front-End Developer</p>
                        </div>
                        <div className="status flex items-center lg:justify-center p-4 max-lg:my-3">
                            <div className="bg-zinc-800/70 rounded-full flex items-center justify-around max-lg:px-2 lg:px-4 max-lg:py-1 lg:py-2 max-lg:gap-2 lg:gap-4">
                                    <a className="text-zinc-400" href={Cv} target="_blank"><i className="fa-solid fa-download me-2"></i>Cv</a>
                                <span className="text-white">•</span>
                                <a className="text-zinc-400" href="mailto:abdurahmanmustafa2910@gmail.com"><i className="fa-regular fa-envelope me-2"></i>Email</a>
                            </div>
                        </div>
                    </div>

                    <div className="tech-stack w-full ">
                        <h3 className="text-white font-medium hidden lg:flex text-xl mb-1">Tech Stack</h3>
                        <div className="flex">
                            <div className="flex custom-scrollbar lg:flex-wrap gap-2">
                                <div className="bg-zinc-800/50 rounded-xs flex items-center justify-around max-lg:text-xs lg:text-sm font-medium px-4 max-lg:py-1 gap-2 py-1 whitespace-nowrap">
                                    <p className="text-zinc-100 flex items-center"><DiReact className='lg:hidden block me-1 text-[16px]'/>React.js</p>
                                </div>
                                <div className="bg-zinc-800/50 rounded-xs flex items-center justify-around max-lg:text-xs lg:text-sm font-medium px-4 max-lg:py-1 gap-2 py-1 whitespace-nowrap">
                                    <p className="text-zinc-100 flex items-center"><RiNextjsFill className='lg:hidden block me-1 text-[16px]' />Next.js</p>
                                </div>
                                <div className="bg-zinc-800/50 rounded-xs flex items-center justify-around max-lg:text-xs lg:text-sm font-medium px-4 max-lg:py-1 gap-2 py-1 whitespace-nowrap">
                                    <p className="text-zinc-100 flex items-center"><SiRedux className='lg:hidden block me-1 text-[16px]'/>Redux</p>
                                </div>
                                <div className="bg-zinc-800/50 rounded-xs flex items-center justify-around max-lg:text-xs lg:text-sm font-medium px-4 max-lg:py-1 gap-2 py-1 whitespace-nowrap">
                                    <p className="text-zinc-100 flex items-center"><BiLogoTypescript className='lg:hidden block me-1 text-[16px]' />TypeScript</p>
                                </div>
                                <div className="bg-zinc-800/50 rounded-xs flex items-center justify-around max-lg:text-xs lg:text-sm font-medium px-4 max-lg:py-1 gap-2 py-1 whitespace-nowrap">
                                    <p className="text-zinc-100 flex items-center"><BiLogoJavascript className='lg:hidden block me-1 text-[16px]' />JavaScript</p>
                                </div>
                                <div className="bg-zinc-800/50 rounded-xs flex items-center justify-around max-lg:text-xs lg:text-sm font-medium px-4 max-lg:py-1 gap-2 py-1 whitespace-nowrap">
                                    <p className="text-zinc-100 flex items-center"><RiTailwindCssFill className='lg:hidden block me-1 text-[16px]' />TailwindCSS</p>
                                </div>
                                <div className="bg-zinc-800/50 rounded-xs flex items-center justify-around max-lg:text-xs lg:text-sm font-medium px-4 max-lg:py-1 gap-2 py-1 whitespace-nowrap">
                                    <p className="text-zinc-100 flex items-center"><RiBootstrapFill className='lg:hidden block me-1 text-[16px]' />Bootstrap</p>
                                </div>
                                <div className="bg-zinc-800/50 rounded-xs flex items-center justify-around max-lg:text-xs lg:text-sm font-medium px-4 max-lg:py-1 gap-2 py-1 whitespace-nowrap">
                                    <p className="text-zinc-100 flex items-center"><SiFramer className='lg:hidden block me-1 text-[16px]' />Framer Motion</p>
                                </div>
                                <div className="bg-zinc-800/50 rounded-xs flex items-center justify-around max-lg:text-xs lg:text-sm font-medium px-4 max-lg:py-1 gap-2 py-1 whitespace-nowrap">
                                    <p className="text-zinc-100 flex items-center"><SiSass className='lg:hidden block me-1 text-[16px]' />Sass</p>
                                </div>
                                <div className="bg-zinc-800/50 rounded-xs flex items-center justify-around max-lg:text-xs lg:text-sm font-medium px-4 max-lg:py-1 gap-2 py-1 whitespace-nowrap">
                                    <p className="text-zinc-100 flex items-center"><BiLogoFigma className='lg:hidden block me-1 text-[16px]' />Figma</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="links lg:border-t border-zinc-700">
                        <div className="flex items-center justify-around max-lg:gap-3 lg:gap-6 mt-4">
                            <a className="text-zinc-400 lg:bg-zinc-800/50 hover:bg-zinc-800 transition-colors lg:py-3 lg:px-5 lg:rounded-2xl" href="https://github.com/abdulrhman-mustafa" target='_blank'><FiGithub className="text-xl"/></a>
                            <a className="text-zinc-400 lg:bg-zinc-800/50 hover:bg-zinc-800 transition-colors lg:py-3 lg:px-5 lg:rounded-2xl" href="https://www.linkedin.com/in/abdulrahman2910/" target='_blank'><FiLinkedin className="text-xl"/></a>
                            <a className="text-zinc-400 lg:bg-zinc-800/50 hover:bg-zinc-800 transition-colors lg:py-3 lg:px-5 lg:rounded-2xl" href="https://wa.me/+201113572218" target='_blank'><RiWhatsappLine className="text-xl"/></a>
                        </div>
                    </div>
                </div>
                <Navbar></Navbar>
            </div>
    );
}

export default Sidebar;
