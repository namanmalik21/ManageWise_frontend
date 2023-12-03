import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../Styles/Navbar.css';

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
          alt="Logo"
        />
      </div>
      <div className="nav-links">
        <a href="#features" onClick={() => scrollToSection('features')}>
          Features
        </a>
        <div className="separator"></div>
        <a href="#faq" onClick={() => scrollToSection('faq')}>
          FAQ
        </a>
        <div className="separator"></div>
        <a href="#pricing" onClick={() => scrollToSection('pricing')}>
          Pricing
        </a>
        <div className="separator"></div>
        <a href="#testimonials" onClick={() => scrollToSection('testimonials')}>
          Testimonials
        </a>
        <button  className="buy-button" >
          Buy Template
        </button>
      </div>
    </div>
  );
}
