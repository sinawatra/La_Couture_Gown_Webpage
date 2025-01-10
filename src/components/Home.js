import React from 'react';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import GridGallery from './GridGallery';
import Footer from './Footer';

const Home = () => {
  const images = [
    { src: 'cover.png', alt: 'Gown 1', price: '$785', stock: 'In stock' },
    { src: '/images/', alt: 'Gown 1', price: '$785', stock: 'In stock' },
    // Add more gown details here
  ];

  return (
    <div>
      <Navbar />
      <Slideshow />
      <GridGallery images={images} />
      <Footer />
    </div>
  );
};

export default Home;
