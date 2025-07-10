import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const sentence = "Home for latest AI releases and solution".split(" ");

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.h1 
          className="hero-title glow-text"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          CONSTA AI
        </motion.h1>
        <motion.h2 
          className="hero-slogan"
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
        >
          {sentence.map((word, index) => (
            <motion.span key={index} variants={letterVariants}>
               {word} {/* <-- Just the word, nothing else */}
            </motion.span>
          ))}
        </motion.h2>
        <motion.button 
          className="hero-button"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(0, 255, 127, 0.8)" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Solutions
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;