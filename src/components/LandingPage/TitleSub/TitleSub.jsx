import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './TitleSub.css';
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';

const TitleSub = ({ title, subtitle }) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const quoteLeftRef = useRef(null);
  const quoteRightRef = useRef(null);

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
        <motion.div
          className="quote-left"
          ref={quoteLeftRef}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0,
            rotate: inView ? 0 : -15,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <BiSolidQuoteLeft className='quote-mark' />
        </motion.div>
        {subtitle}
        <motion.div
          className="quote-right"
          ref={quoteRightRef}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0,
            rotate: inView ? 0 : 15,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <BiSolidQuoteRight className='quote-mark' style={{float: 'right'}} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TitleSub;
