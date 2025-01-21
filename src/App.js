import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Cartpage from './components/Cartpage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/gallery" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cartpage cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
