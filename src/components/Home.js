import React from 'react';
import Slideshow from './Slideshow';
import GridGallery from './GridGallery';
import Footer from './Footer';

const Home = ({ onAddToCart }) => {
  return (
    <div>
      <Slideshow />
      <GridGallery onAddToCart={onAddToCart} />
      <Footer />
    </div>
  );
};

export default Home;
