import React from 'react';
import { motion } from 'framer-motion';
import './ContactUs.css';
import { SiGooglemessages } from "react-icons/si";

const ContactUs = () => {
    return (
        <motion.div
            className='contactus-fixed'
            whileHover={{
                scale: 0.8,
                transition: { duration: 0.3 }
            }}
        >
            <SiGooglemessages />
        </motion.div>
    );
}

export default ContactUs;
