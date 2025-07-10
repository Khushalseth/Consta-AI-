import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import shared components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import page components
import Home from './pages/Home';
import Projects from './pages/Projects';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;