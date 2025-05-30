import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const baseClass = "font-medium hover:text-zinc-100 transition-colors uppercase px-1 py-2 border-b-2";
    return (
        <>
            {/* <nav className="p-5 lg:hidden flex border-b border-neutral-800">
                <ul className="lg:hidden flex space-x-4 max-sm:text-xs">
                    <li><Link className="text-zinc-100 font-medium uppercase px-1 py-2 border-b-2 border-zinc-500 " to="/">Projects</Link></li>
                    <li><Link className="text-zinc-400 font-medium uppercase px-1 py-2 border-b-2 border-zinc-500 " to="/education">Education</Link></li>
                    <li><Link className="text-zinc-400 font-medium uppercase px-1 py-2 border-b-2 border-zinc-500 " to="/testimonials">Testimonials</Link></li>
                    <li><Link className="text-zinc-400 font-medium uppercase px-1 py-2 border-b-2 border-zinc-500 " to="/contact">Contact</Link></li>
                </ul>
            </nav> */}
            <nav className="p-5 lg:hidden flex border-b border-neutral-800">
                <ul className="lg:hidden flex space-x-1 max-sm:mx-auto max-sm:text-xs">

                    <li>
                        <NavLink to="/projects" end className={({ isActive }) =>
                                `${baseClass} ${isActive ? "text-zinc-100 border-zinc-500" : "text-zinc-400 border-transparent"}`
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `${baseClass} ${isActive ? "text-zinc-100 border-zinc-500" : "text-zinc-400 border-transparent"}`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/testimonials"
                            className={({ isActive }) =>
                                `${baseClass} ${isActive ? "text-zinc-100 border-zinc-500" : "text-zinc-400 border-transparent"}`
                            }
                        >
                            Testimonials
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `${baseClass} ${isActive ? "text-zinc-100 border-zinc-500" : "text-zinc-400 border-transparent"}`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
