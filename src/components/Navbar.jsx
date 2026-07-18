import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">Dr. Ahmed Aboasy</a>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Expertise</a>
        </div>

        <a href="#contact" className="contact-btn desktop-only" onClick={() => setIsOpen(false)}>
          Contact Me <span>↗</span>
        </a>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
