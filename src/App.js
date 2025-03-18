"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import "./App.css"
import Home from "./components/Home"
import Testimonials from "./components/Testimonials"
import About from "./components/About"
import Contact from "./components/Contact"
import Cartpage from "./components/Cartpage"

function App() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (item) => {
    // Check if product is already in cart
    const existingProduct = cartItems.find((product) => product.id === item.id)

    if (existingProduct) {
      // If product exists, you could update quantity instead
      // For now, we'll just show a notification or alert
      alert(`${item.name} is already in your cart!`)
      return
    }

    // Add the product to cart
    setCartItems((prev) => [...prev, item])

    // Optional: Show a confirmation message
    console.log(`Added ${item.name} to cart`)
  }

  return (
    <Router>
      <div className="App">
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} cartItems={cartItems} />} />
          <Route path="/gallery" element={<Home onAddToCart={handleAddToCart} cartItems={cartItems} />} />
          <Route path="/testimonials" element={<Testimonials cartItems={cartItems} />} />
          <Route path="/about" element={<About cartItems={cartItems} />} />
          <Route path="/contact" element={<Contact cartItems={cartItems} />} />
          <Route path="/cart" element={<Cartpage cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

