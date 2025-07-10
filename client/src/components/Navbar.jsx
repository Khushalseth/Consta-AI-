import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container nav-container">
        <div className="nav-logo gradient-text">CONSTA AI</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Releases</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="nav-button">Get Started</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;