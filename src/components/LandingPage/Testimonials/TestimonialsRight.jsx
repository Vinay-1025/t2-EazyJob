import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./TestimonialsRight.css";
import I1 from '../../../assets/T1.jpg';
import I2 from '../../../assets/T3.webp';
import I3 from '../../../assets/T4.png';
import { CgQuote } from 'react-icons/cg'

const TestimonialsRight = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const testimonialRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: "Venkatesh Ganisetti",
            position: "CEO at Company",
            image: I1,
            testimonial: "This product is amazing! It has changed the way we do business. I’ve seen incredible results in just a few weeks of use. The support team is fantastic and always available to assist with any issues. It’s easy to integrate with our existing systems. Highly recommend to anyone looking for an efficient solution.",
        },
        {
            id: 2,
            name: "Srinivas Apanna",
            position: "Co Founder",
            image: I2,
            testimonial: "I can't imagine working without this. The results speak for themselves! This tool has drastically improved our marketing strategies. We’ve seen a significant increase in engagement and sales. It’s incredibly user-friendly and intuitive. A game changer for our team.",
        },
        {
            id: 3,
            name: "Mohan Patro",
            position: "Co Founder",
            image: I3,
            testimonial: "Fantastic tool! It has saved me so much time and effort. The features are easy to use, and I can get more done in less time. It integrates seamlessly with other tools I use daily. It’s made coding and debugging a lot smoother. I’m more productive thanks to this tool.",
        },
        {
            id: 4,
            name: "Pavan Gedamuri",
            position: "Marketing Manager",
            image: I1,
            testimonial: "This product is amazing! It has changed the way we do business. The results speak for themselves, and we are now able to streamline operations efficiently. The team’s response time is exceptional. Highly recommend it for any business looking to optimize their processes.",
        },
        {
            id: 5,
            name: "Surya Sidhini",
            position: "Project Manager",
            image: I1,
            testimonial: "I can't imagine working without this. The results speak for themselves! It has improved our team's workflow and boosted productivity. The insights provided are extremely valuable for decision-making. It's a must-have tool for any marketer.",
        },
        {
            id: 6,
            name: "Vinay Sriram Gavara",
            position: "Senior Developer",
            image: I1,
            testimonial: "Fantastic tool! It has saved me so much time and effort. The interface is simple yet powerful. I’ve been able to speed up my work processes and deliver better results. It’s the best tool I’ve used in a while. Highly recommend it to other developers.",
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (testimonialRef.current) {
            observer.observe(testimonialRef.current);
        }

        return () => {
            if (testimonialRef.current) {
                observer.unobserve(testimonialRef.current);
            }
        };
    }, []);

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="testimonials-container">
            <CgQuote className="quote-style"/>
            <motion.div
                ref={testimonialRef}
                className="testimonials"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 50,
                }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="testimonial-card"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="testimonial-text">
                    <h3>{testimonials[currentIndex].name}</h3>
                        <p className="position">{testimonials[currentIndex].position}</p>
                        <p className="testimonial-message">{testimonials[currentIndex].testimonial}</p>
                    </div>
                    <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="testimonial-image"
                    />
                </motion.div>
            </motion.div>

            <div className="indicators">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${currentIndex === index ? "active" : ""}`}
                        onClick={() => handleIndicatorClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsRight;
