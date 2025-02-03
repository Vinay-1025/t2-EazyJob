import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Support from './Support/Support';
import Details from './Details/Details';
import ScrollTop from './ScrollTop/ScrollTop';
import ContactUs from './ContactUs/ContactUs';
import Accordion from './Accordion/Accordion';
import Testimonials from './Testimonials/Testimonials';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Support />
      <Details />
      <Testimonials />
      {showScrollTop && <ScrollTop />}
      {showScrollTop && <ContactUs />}
    </div>
  );
};

export default LandingPage;
