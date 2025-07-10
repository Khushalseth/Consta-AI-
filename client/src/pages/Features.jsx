import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // 1. IMPORT LINK
import './Features.css'; // <--- CORRECT PATH

// 2. UPDATED DATA
const featuresData = [
  { icon: '🚀', title: 'Upcoming Projects', description: 'Explore the next generation of AI solutions we are building. Click here to see the future.' },
  { icon: '💡', title: 'Custom Solutions', description: 'Tailor-made AI integrations to solve your unique business challenges.' },
  { icon: '🌐', title: 'Global Community', description: 'Connect with developers, researchers, and innovators in the AI space.' },
];

const Features = () => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title gradient-text">What We Offer</h2>
        <div className="features-grid">
          {featuresData.map((feature, index) => {
            const card = (
              <motion.div
                className="feature-card"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            );

            // 3. WRAP THE FIRST CARD WITH A LINK
            if (index === 0) {
              return <Link to="/projects" key={index} style={{ textDecoration: 'none' }}>{card}</Link>;
            }
            return <div key={index}>{card}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;