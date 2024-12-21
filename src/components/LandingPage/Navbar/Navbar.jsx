import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

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

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-logo">
                <h1 className={`logo-name ${isScrolled ? 'scrolled-logo' : ''}`}>Logo Name</h1>
            </div>

            {/* Desktop Links */}
            <div className="navbar-links">
                <ul className="desktop-nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="login-button">Login</button>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu">
                <button className="login-button">Login</button>
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
                            <a href="#about" onClick={closeMenu}>About</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                            <a href="#services" onClick={closeMenu}>Services</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                            <a href="#contact" onClick={closeMenu}>Contact</a>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
