import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './ServiceData.css';

const ServiceData = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the component is in view
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className='service-data' ref={sectionRef}>
            <motion.div
                className='data-text'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                Our platform connects you with experts, offers personalized courses, and builds a collaborative community. With EduAssist, you get instant access to the tools and guidance to succeed in your studies and career.
        </motion.div>
            <motion.div
                className="service-butn"
                initial={{ scale: 0 }}
                animate={{ scale: inView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileTap={{
                    scale: 0.9,
                    transition: { duration: 0.2 }
                }}
            >
                Check Now!
            </motion.div>
        </div>
    );
};

export default ServiceData;
