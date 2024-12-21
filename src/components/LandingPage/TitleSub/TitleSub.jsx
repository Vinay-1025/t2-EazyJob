import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './TitleSub.css';

const TitleSub = ({ title, subtitle }) => {
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
      className="title-sub"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="title-titlesub">
        {title}
      </div>
      <div className="sub-titlesub">
        {subtitle}
      </div>
    </motion.div>
  );
};

export default TitleSub;
