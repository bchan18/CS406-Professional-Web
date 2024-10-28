import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Projects from './pages/Projects';
import Internship from './pages/Internship';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navigation bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
