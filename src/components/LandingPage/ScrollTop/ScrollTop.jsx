import React, { useState, useEffect, useRef } from 'react';
import './ScrollTop.css';
import { FaJetFighterUp } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (buttonRef.current) {
            observer.observe(buttonRef.current);
        }

        return () => {
            if (buttonRef.current) {
                observer.unobserve(buttonRef.current);
            }
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.div
            className="scroll-top"
            onClick={scrollToTop}
            ref={buttonRef}
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 50,
                scale: isVisible ? 1 : 0.5
            }}
            transition={{
                duration: 0.5,
                ease: 'easeOut',
            }}
            whileHover={{
                scale: 0.6,
                transition: { duration: 0.3 }
            }}
            whileTap={{
                scale: 1.2,
                transition: { duration: 0.1 }
            }}
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                cursor: 'pointer'
            }}
        >
            <FaJetFighterUp size={30} />
        </motion.div>
    );
};

export default ScrollTop;
