import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Projects.css';

const projectData = [
  { title: 'Multi-Lingual Voice Assistant and Chatbot', description: 'Communicate without barriers by instantly translating voice or text conversations. Our AI will be specially train to understand the nuances of Emirati, Egyptian, and other Arabic dialects, ensuring you can connect flawlessly with clients, colleagues, and friends across Dubai diverse cultures.' },
  { title: 'AI Agent Builder', description: 'Build and deploy a custom AI agent on your website in minutes, with no coding required. Simply upload your business data and prompts to create a 24/7 virtual employee that can automate customer support, answer questions instantly, and capture leads while you sleep.' },
  { 
    title: 'AI Voice Assistant for Presentations', 
    description: 'Deliver flawless presentations effortlessly. Simply upload your slides, and our AI Voice Assistant will present your content on your behalf with a clear, professional, and engaging voice. Save hours of practice, conquer stage fright, and captivate your audience every single time.',
    url: 'https://ai-voice-assistant-jytgnt9d2yngca8hbt3dzg.streamlit.app/', // <-- YOUR LIVE LINK
    isExternal: true 
  },
  { title: 'Your AI Friend  (getting live soon!)', description: 'Find a supportive, empathetic companion for life in a bustling city. Chat privately, share your feelings, and de-stress with an AI friend who will be available 24/7. It will be your personal, non-judgmental space to connect and reflect whenever you need it.' },
  { title: 'The Halal Compliance Verifier', description: 'Shop with absolute confidence by getting an instant answer to the question, "Is this product truly Halal?" Scan any items barcode or ingredients with your phone, and our AI will immediately verify its compliance against official UAE standards, empowering you to make choices that align with your faith.' },
  { title: 'The Real Estate Agent', description: 'Invest in Dubai property smarter by moving beyond simple listings. Our AI analyzes thousands of official data points on market value, rental yield, and community growth to recommend the most profitable investment properties or help you find your dream home at a fair price.' },
  { title: 'AI Healthcare Assistant', description: 'Get health clarity, fast. Our 24/7 AI Health Concierge helps you understand potential concerns by intelligently checking your symptoms. It then simplifies your next step by helping you find and instantly book an appointment with a verified, nearby doctor.' },
  { title: 'AI for Digital Marketing & Content Generation', description: 'Fuel your marketing with content that truly converts in the local market. Our AI generates engaging social media posts, compelling ad copy, and SEO-optimized articles specifically tailored for the Dubai and wider GCC audience, helping you save time and outperform your competition.' },
  { title: 'AI for Predictive Business Analytics', description: 'Stop running your business on guesswork and see its future today. Our AI analyzes your sales data, market trends, and operational metrics to deliver accurate forecasts for revenue, inventory, and customer demand, empowering you to make proactive, data-driven decisions for growth.' },
  { title: 'AI Tourism Guide', description: 'Experience the real Dubai, tailored just for you. Ditch the generic guides and let our AI learn your unique interests to craft a personalized itinerary—from hidden culinary gems and cultural hotspots to exclusive desert adventures.' }
];

const Projects = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

// Replace the entire return block in Projects.jsx with this

return (
    <motion.section 
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2 className="projects-title gradient-text">Upcoming Projects</h2>
        <p className="projects-intro">
          A glimpse into the future of CONSTA AI. Here are the innovative solutions we are currently building.
        </p>
        <Link to="/" className="back-link">← Back to Home</Link>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              {/* --- THIS IS THE NEW LOGIC FOR THE BUTTON --- */}
              {project.isExternal && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="demo-button"
                >
                  TRY DEMO
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;