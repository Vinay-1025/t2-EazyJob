import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import I1 from '../../../assets/T1.jpg';
import I2 from '../../../assets/T2.jpg';
import I3 from '../../../assets/T3.webp';
import I4 from '../../../assets/T4.png';
import I5 from '../../../assets/T5.png';

const Hero = () => {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    const backgroundImages = [I1, I2, I3,I4, I5];
    const heroImages = [I2, I3, I4, I5, I1 ];
    const secondaryHeroImages = [I3, I4, I5, I1, I2];
    const thirdHeroImages = [I4, I5, I1, I2, I3];
    const fourthHeroImages = [I5, I1, I2, I3, I4];

    // Description text for each background
    const descriptions = [
        'The next generation of software is here. Embrace the future with innovative technology The next generation of software is here. Embrace the future with innovative technologyThe next generation of software is here. Embrace the future with innovative technology',
        'Redefining the way we interact with digital systems. Efficiency at its best.',
        'Revolutionizing industries with powerful, scalable solutions. The future is now.',
        'Redefining the way we interact with digital systems. Efficiency at its best.',
        'Revolutionizing industries with powerful, scalable solutions. The future is now.'
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
            setImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <motion.div
            className="hero-section"
            style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <motion.div
                            className="hero-title"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            The new software era.
                        </motion.div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-12">
                            <motion.div
                                className="hero-desc"
                                key={backgroundIndex}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 1 }}
                            >
                                {descriptions[backgroundIndex]}
                            </motion.div>
                        </div>
                        <div className="col-12">
                            <div className="hero-image-container">
                                <motion.div
                                    className="hero-image"
                                    style={{ backgroundImage: `url(${heroImages[imageIndex]})` }}
                                    initial={{ scale: 2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1 }}
                                />
                                <motion.div
                                    className="hero-image"
                                    style={{ backgroundImage: `url(${secondaryHeroImages[imageIndex]})` }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1 }}
                                />
                                <motion.div
                                    className="hero-image"
                                    style={{ backgroundImage: `url(${thirdHeroImages[imageIndex]})` }}
                                    initial={{ scale: 2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1 }}
                                />
                                <motion.div
                                    className="hero-image"
                                    style={{ backgroundImage: `url(${fourthHeroImages[imageIndex]})` }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;