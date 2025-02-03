import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactUs.css';
import { SiGooglemessages } from "react-icons/si";
import { HiX } from "react-icons/hi";
import { IoMdSend } from "react-icons/io";

const ContactUs = () => {
    // State to toggle the contact form visibility
    const [isOpen, setIsOpen] = useState(false);

    // Toggle form visibility
    const toggleForm = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div id='contact'>
            {/* Google Message Icon */}
            <motion.div
                className='contactus-fixed'
                whileHover={{
                    scale: 0.8,
                    transition: { duration: 0.3 }
                }}
                onClick={toggleForm}
            >
                <SiGooglemessages />
            </motion.div>

            {/* Contact Form Container */}
            {isOpen && (
                <motion.div
                    className='contactus-form-container'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='contactus-form-header'>
                        <h3>Contact Us</h3>
                        <motion.div
                            className='close-button'
                            whileHover={{ scale: 1.2 }}
                            onClick={toggleForm}
                        >
                            <HiX />
                        </motion.div>
                    </div>
                    <form className='contactus-form'>
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            required
                        ></textarea>
                        <motion.button
                            type="submit"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <IoMdSend /> Send
                        </motion.button>
                    </form>
                </motion.div>
            )}
        </div>
    );
}

export default ContactUs;
