import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p4 from '../assets/p4.jpg';

const containerVariants = {
hidden: { y: -50, opacity: 0 },
visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const boxHolderVariants = {
hidden: { y: 200, opacity: 0 },
visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const TestimonialCard = React.memo(({ image, name, platformIcon: PlatformIcon, testimonial }) => (
<div className="box rounded-2xl p-6 bg-zinc-900 hover:bg-zinc-700 transition-colors [box-shadow:0_-20px_80px_-40px_#ffffff3f_inset,0_0_20px_-5px_rgba(255,255,255,0.1)]">
<div className="info flex items-center justify-between">
    <div className="image flex items-center gap-3">
    <img
        className="w-14 h-14 border-2 border-zinc-600 object-cover rounded-full"
        src={image}
        alt={`${name}'s profile picture`}
        loading="lazy"
    />
    <h2 className="text-zinc-100 font-semibold text-lg">{name}</h2>
    </div>
    <div className="icon">
    <PlatformIcon className="text-zinc-400 text-xl" aria-label={`${name}'s ${PlatformIcon.name} profile`} />
    </div>
</div>
<p className="text-zinc-400 mt-3">{testimonial}</p>
</div>
));

const Testimonials = () => {
return (
<div className="testimonials max-lg:p-5 lg:ml-80 lg:flex-1">
    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="hidden md:flex items-center justify-between will-change-transform"
    >
    <div className="title">
        <h1 className="text-zinc-100 text-4xl font-bold mb-3">Testimonials</h1>
        <div className="dividerLine" aria-hidden="true"></div>
        <p className="text-zinc-400 w-full my-3">Read what people are saying about me.</p>
    </div>
    </motion.div>

    <motion.div
    variants={boxHolderVariants}
    initial="hidden"
    animate="visible"
    className="box-holder grid gap-6 mb-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 will-change-transform"
    >
    <TestimonialCard
        image={p1}
        name="Cleyton Leite"
        platformIcon={FiFacebook}
        testimonial="“Abdulrahman did a great job helping me build a beautiful and attractive website. He was very attentive, quick to respond and really knew his stuff. Working with him was a pleasure. I highly recommend him!”"
    />
    <TestimonialCard
        image={p2}
        name="Toni Dumančić"
        platformIcon={FiLinkedin}
        testimonial="“Working with Abdulrahman was a fantastic experience. He brought a positive, can-do attitude to every task. His technical skills as a developer were top-notch, delivering clean, efficient code. I’d highly recommend to anyone looking for a reliable and talented developer.”"
    />
    <TestimonialCard
        image={p4}
        name="Siyam Hosan"
        platformIcon={FiGithub}
        testimonial="“He made our messy idea into a polished user-friendly interface. also functions exceptionally well. If you need a frontend developer, I can't recommend him enough”"
    />
    </motion.div>
</div>
);
};

export default Testimonials;