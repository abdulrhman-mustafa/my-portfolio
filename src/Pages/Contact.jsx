import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineWhatsapp } from "react-icons/md";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './alert.css'
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
        <div className="contact text-zinc-100 lg:p-8 max-lg:p-5 bg-zinc-950 lg:ml-80 lg:flex-1">
            <div className="touch py-5 flex flex-col items-center justify-center">
                <h1 className="getInTouch text-3xl font-bold mb-3">Get In Touch</h1>
                <div className="dividerLine" aria-hidden="true"></div>
            </div>
            <form onSubmit={handleSubmit} className='bg-zinc-800 mb-14 py-10 px-5 rounded-xl flex flex-col gap-4 [box-shadow:0_-20px_80px_-40px_#ffffff3f_inset,0_0_20px_-5px_rgba(255,255,255,0.1)]'>
                <div className="name flex flex-col">
                    <label className="mb-3" htmlFor="name">Name</label>
                    <input className='bg-zinc-900 border-0 outline-0 px-4 py-3 rounded-xl' type="text" name="name" required placeholder='Your Name' />
                </div>
                <div className="email flex flex-col">
                    <label className="mb-3" htmlFor="email">Email</label>
                    <input className='bg-zinc-900 border-0 outline-0 px-4 py-3 rounded-xl' type="email" name="email" required placeholder='Your Email' />
                </div>
                <div className="message flex flex-col">
                    <label className="mb-3" htmlFor="message">Message</label>
                    <textarea className='bg-zinc-900 border-0 outline-0 px-4 py-3 rounded-xl resize-none' name="message" required cols="30" rows="10" placeholder='Your Message'></textarea>
                </div>
                <button type='submit' className='flex items-center justify-center w-38 mx-auto rounded-xl bg-zinc-900 px-4 py-3 border-2 border-transparent  gap-2 hover:bg-transparent hover:border-2 hover:border-zinc-400 transition-all cursor-pointer'>Submit <div className="arrow transition duration-300"><HiOutlineMail /></div></button>
            </form>
        </div>
    );
}

export default Contact;
