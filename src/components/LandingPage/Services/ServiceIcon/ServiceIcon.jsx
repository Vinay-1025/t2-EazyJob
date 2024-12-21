import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './ServiceIcon.css';

const ServiceIcon = ({ serviceIcon }) => {
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
            { threshold: 0.2 }
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
        <motion.div 
            className='service-icon' 
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{
                scale: 1.05,
                boxShadow: "10px 0 30px rgba(0, 0, 0, 0.8)",
                rotateX: 8,
                rotateY: 8,
                cursor: "pointer",
                transition: { duration: 0.3 },
            }}
            whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
            }}
        >
            <div className="ser-icon">
                {serviceIcon.icon}
            </div>
            <div className="ser-name">
                {serviceIcon.name}
            </div>
            <div className="ser-desc">
                {serviceIcon.desc}
            </div>
        </motion.div>
    );
}

export default ServiceIcon;
