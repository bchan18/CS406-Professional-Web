import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    padding: '10px',
    backgroundColor: '#333',
  };

  const linkStyle = {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/projects" style={linkStyle}>Projects</Link>
      <Link to="/internship" style={linkStyle}>Internship</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;