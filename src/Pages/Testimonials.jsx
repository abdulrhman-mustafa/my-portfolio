import React from 'react';
import { FaArrowRight} from "react-icons/fa";
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
// import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";
const Testimonials = () => {
    return (
        <div className="testimonials lg:p-8 max-lg:p-5 lg:h-screen lg:bg-zinc-950 lg:ml-80 lg:flex-1">
            <div className="hidden md:flex items-center justify-between">
                <div className="title">
                    <h1 className="text-zinc-100 text-4xl font-bold mb-3">Testimonials</h1>
                    <div className="dividerLine" aria-hidden="true"></div>
                    <p className="text-zinc-400 my-3">Read what people are saying about me.</p>
                </div>
                <a href="" className="text-zinc-400 flex items-center justify-center gap-2 hover:text-white transition-colors"><span>View More</span><div className="arrow transition duration-300"><FaArrowRight /></div></a>
            </div>
            <div className="box-holder grid gap-6 mb-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8">
                <div className="box rounded-2xl p-6 bg-zinc-900 hover:bg-zinc-700 transition-colors [box-shadow:0_-20px_80px_-40px_#ffffff3f_inset,0_0_20px_-5px_rgba(255,255,255,0.1)]">
                    <div className="info flex items-center justify-between">
                        <div className="image flex items-center gap-3">
                            <img className="w-14 h-14 border-2 border-zinc-600 object-cover rounded-full" src={p1} alt="person" loading="lazy"/>
                            <h2 className="text-zinc-100 font-semibold text-lg">Cleyton Leite</h2>
                        </div>
                        <div className="icon">
                            <FiFacebook className="text-zinc-400 text-xl" />
                        </div>
                    </div>
                    <p className="text-zinc-400 mt-3">“Abdulrahman did a great job helping me build a beautiful and attractive website. He was very attentive, quick to respond and really knew his stuff. Working with him was a pleasure. I highly recommend him!”</p>
                </div>
                <div className="box rounded-2xl p-6 bg-zinc-900 hover:bg-zinc-700 transition-colors [box-shadow:0_-20px_80px_-40px_#ffffff3f_inset,0_0_20px_-5px_rgba(255,255,255,0.1)]">
                    <div className="info flex items-center justify-between">
                        <div className="image flex items-center gap-3">
                            <img className="w-14 object-cover h-14 border-2 border-zinc-600 rounded-full" src={p2} alt="person" loading="lazy" />
                        <h2 className="text-zinc-100 font-semibold text-lg">Toni Dumančić</h2>
                        </div>
                        <div className="icon">
                            <FiLinkedin className="text-zinc-400 text-xl" />
                        </div>
                    </div>
                    <p className="text-zinc-400 mt-3">“Working with Abdulrahman was a fantastic experience. He brought a positive, can-do attitude to every task. His technical skills as a developer were top-notch, delivering clean, efficient code. I’d highly recommend to anyone looking for a reliable and talented developer.”</p>
                </div>
                <div className="box rounded-2xl p-6 bg-zinc-900 hover:bg-zinc-700 transition-colors [box-shadow:0_-20px_80px_-40px_#ffffff3f_inset,0_0_20px_-5px_rgba(255,255,255,0.1)]">
                    <div className="info flex items-center justify-between">
                        <div className="image flex items-center gap-3">
                            <img className="w-14 h-14 object-cover border-2 border-zinc-600 rounded-full" src={p4} alt="person" loading="lazy"/>
                            <h2 className="text-zinc-100 font-semibold text-lg">Siyam Hosan</h2>
                        </div>
                        <div className="icon">
                            <FiGithub className="text-zinc-400 text-xl" />
                        </div>
                    </div>
                    <p className="text-zinc-400 mt-3">“He made our messy idea into a polished user-friendly interface. also functions exceptionally well. If you need a frontend developer, I can't recommend him enough”</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
