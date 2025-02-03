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

    const backgroundImages = [I1, I2, I3, I4, I5];
    const heroImages = [I2, I3, I4, I5, I1];
    const secondaryHeroImages = [I3, I4, I5, I1, I2];
    const thirdHeroImages = [I4, I5, I1, I2, I3];
    const fourthHeroImages = [I5, I1, I2, I3, I4];

    // Description text for each background
    const descriptions = [
        {
            title: "Real Time Doubt EduAssistcation",
            desc: "The platform ensures that students and learners can get their doubts resolved instantly through live chat, video calls, or community discussions.",
            help: "This feature is designed for students, learners, and professionals who need quick answers to their academic, technical, or subject-specific questions."
        },
        {
            title: "Personalized Learning Assistance",
            desc: "EduAssist offers personalized learning paths by assessing user progress and recommending tailored resources, videos, or reading materials to improve their understanding.",
            help: "This helps individual learners, self-paced students, and professionals who want to advance their knowledge at their own pace, but with guided support based on their learning needs."
        },
        {
            title: "Expert-Led Sessions",
            desc: "The platform connects users to subject-matter experts who can lead live sessions or provide one-on-one tutoring for difficult topics, offering both group webinars and private tutoring.",
            help: "Students, working professionals, and career changers who need deeper insights into specific topics, concepts, or courses, and benefit from direct interaction with experts."
        },
        {
            title: "Collaborative Learning Community",
            desc: "It provides a space for users to engage in group discussions, peer-to-peer learning, and community forums where they can exchange ideas, resources, and solutions with others.",
            help: "This benefits students, learners, and online course participants who want to engage with a like-minded community, share knowledge, and clarify doubts with peers."
        },
        {
            title: "Instant Feedback and Assessment",
            desc: "EduAssist offers instant quizzes, self-assessments, and feedback on submitted assignments or practice tests to help users identify areas where they need improvement.",
            help: "This is designed for students, learners, and professionals who want to evaluate their progress and receive constructive feedback to improve their understanding and performance."
        }
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
            id="home"
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="hero-title">EduAssist.</h1>
                            <p className='hero-motiv'>"Empowering learners through instant support."</p>
                            <p className="hero-intro">
                            "EduAssist is a cutting-edge online learning and doubt EduAssistcation platform designed to help students and professionals unlock their full potential. Whether you're tackling complex subjects or seeking personalized learning paths, EduAssist connects you with experts, peers, and resources that empower you to learn with confidence. Our mission is to provide instant support, enabling you to grow and excel in your academic and professional journey."
                            </p>
                        </motion.div>
                    </div>
                    <div className="col-md-5">
                        <div className="col-12">
                            <motion.div
                                className="hero-desc"
                                key={backgroundIndex}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 1 }}
                            >
                                {/* Use map to dynamically display title and description */}
                                {descriptions.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{ display: backgroundIndex === index ? 'block' : 'none' }}
                                    >
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                        <h6>How It Helps</h6>
                                        <p>{item.help}</p>
                                    </div>
                                ))}
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
