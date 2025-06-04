    import React, { useState } from 'react';
    import { HiOutlineMail } from 'react-icons/hi';
    import { MdOutlineWhatsapp, MdLocationPin } from 'react-icons/md';
    import emailjs from 'emailjs-com';
    import Swal from 'sweetalert2';
    import './alert.css';
    import formImage from '../assets/3D-character_.png';
    import { motion } from 'framer-motion';

    const containerVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        exit: { y: -50, opacity: 0 },
    };

    const formContainerVariants = {
        hidden: { y: 200, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        exit: { y: 200, opacity: 0 },
    };

    const ContactForm = React.memo(({ onSubmit, errors }) => (
    <form onSubmit={onSubmit} className="max-lg:w-full lg:w-2/3 mb-14 py-10 px-5 rounded-xl flex flex-col gap-4">
        <h1 className="getInTouch text-xl font-medium mb-3">Send Me a Message</h1>
        <div className="name flex flex-col">
        <label className="mb-3" htmlFor="name">Name</label>
        <input
            className={`bg-zinc-900 border-0 outline-0 px-4 py-3 rounded-xl ${errors.name ? 'border-2 border-red-500' : ''}`}
            type="text"
            name="name"
            id="name"
            required
            placeholder="Your Name"
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
            <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
        </div>
            <div className="email flex flex-col">
            <label className="mb-3" htmlFor="email">Email</label>
            <input
                className={`bg-zinc-900 border-0 outline-0 px-4 py-3 rounded-xl ${errors.email ? 'border-2 border-red-500' : ''}`}
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your Email"
                aria-required="true"
                aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
            </div>
        <div className="message flex flex-col">
            <label className="mb-3" htmlFor="message">Message</label>
            <textarea
            className={`bg-zinc-900 border-0 outline-0 px-4 py-3 rounded-xl resize-none ${errors.message ? 'border-2 border-red-500' : ''}`}
            name="message"
            id="message"
            required
            cols="30"
            rows="10"
            placeholder="Your Message"
            aria-required="true"
            aria-describedby={errors.message ? 'message-error' : undefined}
            ></textarea>
            {errors.message && (
            <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
        </div>
        <button
            type="submit"
            aria-label="Submit contact form"
            className="flex items-center justify-center w-32 mx-auto rounded-xl bg-zinc-900 px-4 py-3 border-2 border-transparent gap-2 hover:bg-transparent hover:border-2 hover:border-zinc-400 transition-all cursor-pointer"
        >
        Submit
            <div className="arrow transition duration-300">
                <HiOutlineMail />
            </div>
        </button>
    </form>
    ));

    const ContactInfo = React.memo(({ image }) => (
    <div className="contact-info bg-zinc-950 max-lg:w-full lg:w-1/2 flex flex-col gap-4 px-5 py-10">
        <h1 className="getInTouch text-xl font-medium mb-3">Contact Information</h1>
        <p className="text-zinc-400">If you have any questions or inquiries, please don't hesitate to contact me.</p>
            <div className="image">
            <img src={image} className="object-cover max-w-full h-auto max-h-64" alt="3D character illustration" loading="lazy" />
            </div>
        <div className="gap-10 flex flex-col items-start">
            <div className="flex items-center justify-center gap-2">
                <MdLocationPin className="text-zinc-400 text-2xl font-bold" aria-hidden="true" />
                <p className="text-zinc-400 max-md:text-xs">Alex, Egypt</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <MdOutlineWhatsapp className="text-zinc-400 text-2xl font-bold" aria-hidden="true" />
                <a href="tel:+201002603554" className="text-zinc-400 max-md:text-xs" aria-label="Contact via WhatsApp">+201002603554</a>
            </div>
            <div className="flex items-center justify-center gap-2">
                <HiOutlineMail className="text-zinc-400 text-2xl font-bold" aria-hidden="true" />
                <a href="mailto:abdurahmanmustafa2910@gmail.com" className="text-zinc-400 max-md:text-xs" aria-label="Contact via email">abdurahmanmustafa2910@gmail.com</a>
            </div>
        </div>
    </div>
    ));

    const Contact = () => {
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const validateForm = (formData) => {
        const errors = { name: '', email: '', message: '' };
        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate Name
        if (!formData.name) {
        errors.name = 'Name is required';
        } else if (formData.name.length < 10) {
        errors.name = 'Name must be at least 10 characters long';
        } else if (!nameRegex.test(formData.name)) {
        errors.name = 'Name can only contain letters and spaces';
        }

        // Validate Email
        if (!formData.email) {
        errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
        }

        // Validate Message
        if (!formData.message) {
        errors.message = 'Message is required';
        } else if (formData.message.length < 10) {
        errors.message = 'Message must be at least 10 characters long';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
        };

        // Validate form
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        // Check if there are any errors
        const hasErrors = Object.values(validationErrors).some((error) => error);
        if (hasErrors) {
        Swal.fire({
            title: 'Validation Error',
            text: 'Please fix the errors in the form before submitting.',
            icon: 'error',
            confirmButtonText: 'Ok',
            customClass: {
            popup: 'custom-swal',
            },
        });
        return;
        }

        // Proceed with form submission
        Swal.fire({
        title: 'Sending...',
        text: 'Please wait...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
        customClass: {
            popup: 'custom-swal',
        },
        });

        try {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (!publicKey) {
            throw new Error('EmailJS Public Key is not defined. Check your .env file.');
        }
        const result = await emailjs.sendForm(
            'service_bdqgzmk',
            'template_batm61b',
            e.target,
            publicKey
        );
        console.log('Success:', result.text);
        const name = e.target.name.value;
        Swal.fire({
            title: 'Sent',
            text: `Thank you, ${name}, your message was sent successfully.`,
            icon: 'success',
            confirmButtonText: 'Ok',
            customClass: {
            popup: 'custom-swal',
            },
        });
        e.target.reset();
        setErrors({ name: '', email: '', message: '' }); // Reset errors after successful submission
        } catch (error) {
        console.error('Error:', error.message || error.text || error);
        Swal.fire({
            title: 'Error',
            text: error.message || error.text || 'Something went wrong. Please try again later.',
            icon: 'error',
            confirmButtonText: 'Ok',
            customClass: {
            popup: 'custom-swal',
            },
        });
        }
    };

    return (
        <div className="contact text-zinc-100 max-lg:p-5 max-lg:mx-auto pb-15 lg:ml-80 lg:flex-1">

        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="touch py-5 flex flex-col items-center justify-center mb-8 will-change-transform"
        >
            <h1 className="getInTouch text-3xl font-bold mb-3">Get In Touch</h1>
            <div className="dividerLine" aria-hidden="true"></div>
        </motion.div>

        <motion.div
            variants={formContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:flex max-lg:flex-col lg:justify-between bg-zinc-800 rounded-xl [box-shadow:0_-20px_80px_-40px_#ffffff3f_inset,0_0_20px_-5px_rgba(255,255,255,0.1)] will-change-transform"
        >
            <ContactForm onSubmit={handleSubmit} errors={errors} />
            <ContactInfo image={formImage} />
        </motion.div>
        </div>
    );
    };

    export default Contact;