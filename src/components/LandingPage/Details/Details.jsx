import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Details.css';

const Details = () => {
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
        <div className='details-cont'>
            <div className='d-cont d-flex align-items-center justify-content-center'>
                <motion.div
                    ref={sectionRef}
                    className="details-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <motion.p
                        className='d-title'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        400K+ Students have been placed from us.
                    </motion.p>
                    <motion.p
                        className='d-title'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        500+ Students are Trained from us
                    </motion.p>
                    <motion.p
                        className='d-desc'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Phasellus nascetur vulputate donec rhoncus elit suscipit augue venenatis est pede gravida commodo
                    </motion.p>
                    <motion.div
                        className="details-butn"
                        initial={{ scale: 0 }}
                        animate={{ scale: inView ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        whileTap={{
                            scale: 0.9,
                            transition: { duration: 0.2 }
                        }}
                    >
                        Get Now
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Details;
