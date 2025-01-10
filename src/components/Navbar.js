import React, { useState } from 'react';
import './Navbar.css';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
        </div>

        {/* Logo */}
        <div className="logo">La Couture</div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Search and Cart Icons */}
        <div className="nav-icons">
          <FiSearch className="icon" />
          <FiShoppingCart className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
