import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/About.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about">
        <h1>About Us</h1>
        <p>Where gowns are our inspiration.</p>
        {/* Add about details here */}
      </div>
      <Footer />
    </div>
  );
};

export default About;
