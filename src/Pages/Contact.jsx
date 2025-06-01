import React from 'react';
import {HiOutlineMail} from "react-icons/hi"
import { MdOutlineWhatsapp, MdLocationPin  } from "react-icons/md";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './alert.css'
import formImage from '../assets/3D-character_.png'
import { motion } from 'framer-motion';
const Contact = () => {

const handleSubmit = async (e) => {
    e.preventDefault();

    // Loading 
    Swal.fire({
        title:'Sending...',
        text: 'Please wait...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
        customClass: {
            popup: 'custom-swal'
        }
    });

    try {
        const result = await emailjs.sendForm(
            'service_bdqgzmk', // Service ID
            'template_batm61b', // Contact Template ID
            e.target,
            'nwCRjWjVWLHk7qmrJ' // Public Key
        );
        console.log('Success:', result.text);
        const name = e.target.name.value; //  Get the name value
        Swal.fire({
            title: 'Sent',
            text: `Thank You ${name}،  successfully.`,
            icon: 'success',
            confirmButtonText: 'Ok',
            customClass: {
                popup: 'custom-swal'
            }
        });
    } catch (error) {
        console.log('Error:', error.text);
        Swal.fire({
            title: 'Error',
            text: 'Something went wrong. Please try again.',
            icon: 'error',
            confirmButtonText: 'Ok',
            customClass: {
                popup: 'custom-swal'
            }
        });
    }

    e.target.reset();
};


    return (
        <div className="contact text-zinc-100 lg:p-8 max-lg:p-5 max-lg:mx-auto bg-zinc-950 lg:ml-80 lg:flex-1">
            <motion.div 
            initial={{y: -50, opacity: 0 }}
            animate={{y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="touch py-5 flex flex-col items-center justify-center">
                <h1 className="getInTouch text-3xl font-bold mb-3">Get In Touch</h1>
                <div className="dividerLine" aria-hidden="true"></div>
            </motion.div>
            <motion.div 
            initial={{y: 200, opacity: 0 }}
            animate={{y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:flex max-lg:flex-col lg:justify-between bg-zinc-800 rounded-xl [box-shadow:0_-20px_80px_-40px_#ffffff3f_inset,0_0_20px_-5px_rgba(255,255,255,0.1)]">
                <form onSubmit={handleSubmit} className=' max-lg:w-full lg:w-2/3 mb-14 py-10 px-5 rounded-xl flex flex-col gap-4'>
                    <h1 className="getInTouch text-xl font-medium mb-3">Send Me a Message</h1>
                    <div className="name flex flex-col">
                        <label className="mb-3" htmlFor="name">Name</label>
                        <input className='bg-zinc-900 border-0 outline-0 px-4 py-3 rounded-xl' type="text" name="name" id="name" required placeholder='Your Name' />
                    </div>
                    <div className="email flex flex-col">
                        <label className="mb-3" htmlFor="email">Email</label>
                        <input className='bg-zinc-900 border-0 outline-0 px-4 py-3 rounded-xl' type="email" name="email" id="email" required placeholder='Your Email' />
                    </div>
                    <div className="message flex flex-col">
                        <label className="mb-3" htmlFor="message">Message</label>
                        <textarea className='bg-zinc-900 border-0 outline-0 px-4 py-3 rounded-xl resize-none' name="message" id="message" required cols="30" rows="10" placeholder='Your Message'></textarea>
                    </div>
                    <button type='submit' className='flex items-center justify-center w-38 mx-auto rounded-xl bg-zinc-900 px-4 py-3 border-2 border-transparent  gap-2 hover:bg-transparent hover:border-2 hover:border-zinc-400 transition-all cursor-pointer'>Submit <div className="arrow transition duration-300"><HiOutlineMail /></div></button>
                </form>
                <div className="contact-info  bg-zinc-950 max-lg:w-full lg:w-1/2 flex flex-col gap-4 px-5 py-10">
                    <h1 className="getInTouch text-xl font-medium mb-3">Contact Information</h1>
                    <p className="text-zinc-400">If you have any questions or inquiries, please don't hesitate to contact me.</p>
                    <div className="image">
                        <img src={formImage} className=" object-cover" alt="form" loading='lazy'/>
                    </div>
                    <div className="gap-10 flex flex-col items-start">
                        <div className="flex items-center justify-center gap-2">
                            <MdLocationPin className='text-zinc-400 text-2xl font-bold' />
                            <p className="text-zinc-400 max-md:text-xs">Alex, Egypt</p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <MdOutlineWhatsapp className='text-zinc-400 text-2xl font-bold' />
                            <p className="text-zinc-400 max-md:text-xs">+201002603554</p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <HiOutlineMail className='text-zinc-400 text-2xl font-bold' />
                            <p className="text-zinc-400 max-md:text-xs">abdurahmanmustafa2910@gmail.com</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;
