import React, { useState } from 'react'; // 1. Import useState
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // 2. Import icons
import './Navbar.css';

const Navbar = () => {
  // 3. State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container nav-container">
        <div className="nav-logo gradient-text">
          CONSTA AI
          <img src="/assets/" alt="" className="nav-logo-img" />
        </div>

        {/* 4. Add conditional class to nav-links */}
        <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#features" onClick={toggleMenu}>Releases</a></li>
          <li><a href="#solutions" onClick={toggleMenu}>Solutions</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>

        <button className="nav-button">Get Started</button>

        {/* 5. The hamburger menu icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;