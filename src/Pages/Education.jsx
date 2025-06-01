import React from 'react';
import { motion } from 'framer-motion';
const Education = () => {
    return (
        <motion.div 
        initial = {{x: 40, opacity:0}} 
        animate = {{x: 0, opacity:1}}
        transition= {{duration:1.5}}
        className="education">
            <div className="content text-zinc-100">
                <h1 className="text-zinc-100 max-lg:text-2xl lg:text-4xl font-bold mb-3">B.Sc. in Information Technology – Software Engineering</h1>
                <strong>Borg El Arab Technological University</strong> · Faculty of Technology for Industry & Energy
                <p className="text-zinc-400 mb-7">Self-Employed · Remote · dec 2024 – Present</p>
                <p className="text-zinc-200">2023 – Present <em>(Currently a 3rd-year student)</em></p>
                <ul className="space-y-4 mt-5 border-zinc-800 max-lg:w-auto lg:w-[650px]">
                    <li className="text-zinc-400 relative pl-7">Pursuing a degree in <strong>Software Engineering</strong>, with focus on web development and software principles.</li>
                    <li className="text-zinc-400 relative pl-7">Completed hands-on projects and technical training as part of the academic program.</li>
                </ul>
            </div>
        </motion.div>
    );
}

export default Education;
