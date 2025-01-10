import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/Testimonials.css';

const Testimonials = () => {
  return (
    <div>
      <Navbar />
      <div className="testimonials">
        <h1>Our Wall of Love</h1>
        <p>Read what our community members are saying about La Couture.</p>
        <div className="testimonial-grid">
          {/* Add testimonial cards here */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
