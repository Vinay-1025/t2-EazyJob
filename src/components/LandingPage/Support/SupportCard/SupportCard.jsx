import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './SupportCard.css';

const SupportCard = ({ cardData }) => {
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
            className='support-card' 
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: { duration: 0.3 }
            }}
            whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
            }}
        >
            <div className="card-name d-flex justify-content-between">
                {cardData.name}
                <div className="support-card-icon">
                    {cardData.icon}
                    {cardData.icon}
                    {cardData.icon}
                </div>
            </div>
            <div className="card-desc">
                {cardData.desc}
            </div>
        </motion.div>
    );
}

export default SupportCard;
