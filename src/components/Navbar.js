"use client"

import { useState } from "react"
import "./Navbar.css"
import { FiSearch, FiShoppingCart } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

const Navbar = ({ cartItems = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const cartItemCount = cartItems.length

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
        </div>
        <div className="logo">La Couture</div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/testimonials">Testimonials</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="nav-icons">
          <FiSearch className="icon" />
          <div className="cart-icon-container">
            <FiShoppingCart className="icon" onClick={() => navigate("/cart")} />
            {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

