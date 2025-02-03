import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 40) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/registration');
    }

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-logo">
                <h1 className={`logo-name ${isScrolled ? 'scrolled-logo' : ''}`}>Edu Assist</h1>
            </div>

            {/* Desktop Links */}
            <div className="navbar-links">
                <ul className="desktop-nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#support">Support</a></li>
                    <li><a href="#stat">Statistics</a></li>
                    <li><a href="#testi">Testimonials</a></li>
                
                </ul>
                <button className="login-button" onClick={handleLogin}>Login</button>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu">
                <button className="login-button" onClick={handleLogin}>Login</button>
                <button className="menu-icon" onClick={toggleMenu}>
                    {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu4Line />}
                </button>
            </div>

            {/* Mobile Nav Links */}
            {isMobileMenuOpen && (
                <motion.div 
                    className="mobile-nav-links"
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                            <a href="#home" onClick={closeMenu}>Home</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                            <a href="#services" onClick={closeMenu}>Services</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                            <a href="#support" onClick={closeMenu}>Support</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                            <a href="#stat" onClick={closeMenu}>Statistics</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                            <a href="#testi" onClick={closeMenu}>Testimonials</a>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
