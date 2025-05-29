import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineWhatsapp } from "react-icons/md";
const Contact = () => {
    return (
        <div className="contact text-zinc-100 lg:p-8 max-lg:p-5 bg-zinc-950 lg:ml-80 lg:flex-1">
            <div className="touch py-5 flex flex-col items-center justify-center">
                <h1 className="getInTouch text-3xl font-bold mb-3">Get In Touch</h1>
                <div className="dividerLine" aria-hidden="true"></div>
            </div>
            <form action="" className='bg-zinc-800 mb-14 py-10 px-5 rounded-xl flex flex-col gap-4 [box-shadow:0_-20px_80px_-40px_#ffffff3f_inset,0_0_20px_-5px_rgba(255,255,255,0.1)]'>
                <div className="name flex flex-col">
                    <label className="mb-3" htmlFor="name">Name</label>
                    <input className='bg-zinc-900 border-0 outline-0 px-4 py-3 rounded-xl' type="text" name="name" id="name" placeholder='Your Name' />
                </div>
                <div className="email flex flex-col">
                    <label className="mb-3" htmlFor="email">Email</label>
                    <input className='bg-zinc-900 border-0 outline-0 px-4 py-3 rounded-xl' type="email" name="email" id="email" placeholder='Your Email' />
                </div>
                <div className="message flex flex-col">
                    <label className="mb-3" htmlFor="message">Message</label>
                    <textarea className='bg-zinc-900 border-0 outline-0 px-4 py-3 rounded-xl resize-none' name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
                </div>
                <button className='flex items-center justify-center w-38 mx-auto rounded-xl bg-zinc-900 px-4 py-3 border-2 border-transparent  gap-2 hover:bg-transparent hover:border-2 hover:border-zinc-400 transition-all cursor-pointer'>Submit <div className="arrow transition duration-300"><HiOutlineMail /></div></button>
            </form>
        </div>
    );
}

export default Contact;
