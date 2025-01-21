import React from 'react';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import GridGallery from './GridGallery';
import Footer from './Footer';

const Home = ({ onAddToCart }) => {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <GridGallery onAddToCart={onAddToCart} />
      <Footer />
    </div>
  );
};

export default Home;
