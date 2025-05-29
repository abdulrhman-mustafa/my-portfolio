import React from 'react';
import { IoIosStar } from "react-icons/io";

const Certifications = () => {
    return (
        <div className="certifications">
            <div className="content text-zinc-100">
                <h1 className="text-zinc-100 max-lg:text-2xl lg:text-4xl font-bold mb-3">Certifications</h1>
                    
                    <div className="mb-4">
                        <h3 className="font-semibold max-lg:text-[16px] lg:text-lg mb-5 flex items-center"><IoIosStar className='me-2'/>Front-End Developer Certificate</h3>

                        <p className="mb-2 tex-zinc-400"><strong className="text-zinc-100">Borg El Arab Technological University</strong> · Issued 2024</p>
                            <ul className="mt-1">
                                <li className="text-zinc-400 relative pl-7">Covered HTML, CSS, JavaScript, and modern front-end frameworks.</li>
                                <li className="text-zinc-400 relative pl-7">Focused on building responsive user interfaces and interactive components.</li>
                            </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-semibold max-lg:text-[16px] lg:text-lg mb-5 flex items-center"><IoIosStar className='me-2'/>Modern JS from Beginner to Advanced</h3>
                        <p className="text-zinc-400"><strong className='text-zinc-100'>Udemy</strong> · Issued 2024</p>
                        <ul className="mt-1">
                            <li className="text-zinc-400 relative pl-7"><strong>Languages & Technologies:</strong> ES6+, Asynchronous JavaScript, Real-world project development</li>
                        </ul>
                    </div>

                    <div className="mb-6 space-y-3">
                        <h3 className="font-semibold max-lg:text-[16px] lg:text-lg flex items-center"><IoIosStar className='me-2'/>Web Development Fundamentals</h3>
                        <p className="text-zinc-400"><strong className='text-zinc-100'>Coursera (University of Michigan)</strong> · Issued 2023</p>
                        <ul className="mt-1">
                        <li className="text-zinc-400 relative pl-7"><strong>Languages & Technologies:</strong> HTML, CSS, JavaScript basics</li>
                        </ul>
                    </div>
            </div>
        </div>
    );
}

export default Certifications;
