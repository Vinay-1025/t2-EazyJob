import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Support from './Support/Support';
import Details from './Details/Details';
import ScrollTop from './ScrollTop/ScrollTop';
import ContactUs from './ContactUs/ContactUs';

const LandingPage = () => {
  const navigate = useNavigate();

  // State to track if the user has scrolled 30px
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Listen to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
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
      {showScrollTop && <ScrollTop />}
      {showScrollTop && <ContactUs />}
    </div>
  );
};

export default LandingPage;
