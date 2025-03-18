import React from 'react';
import Footer from './Footer';
import '../components/Testimonials.css';
import { motion } from 'framer-motion';
import WordReveal from './prismui/WordReveal'; // Ensure the path is correct

const Testimonials = () => {
  const testimonialsData = [
    {
      text: "There is absolutely no doubt in my mind that without Dribbble, I would not have been able to make the jump to Ueno, a digital agency I started in 2014.",
      image: "/images/watra.jpg", // Replace with actual image paths
      name: "Rith Sinawatra",
    },
    {
      text: "There is absolutely no doubt in my mind that without Dribbble, I would not have been able to make the jump to Ueno, a digital agency I started in 2014.",
      image: "/images/5456 (2).jpeg", // Replace with actual image paths
      name: "Rith Sinawatra",
    },
    {
      text: "There is absolutely no doubt in my mind that without Dribbble, I would not have been able to make the jump to Ueno, a digital agency I started in 2014.",
      image: "/images/5456 (3).jpeg", // Replace with actual image paths
      name: "Rith Sinawatra",
    },
    {
      text: "There is absolutely no doubt in my mind that without Dribbble, I would not have been able to make the jump to Ueno, a digital agency I started in 2014.",
      image: "/images/5456 (4).jpeg", // Replace with actual image paths
      name: "Rith Sinawatra",
    },
    {
      text: "There is absolutely no doubt in my mind that without Dribbble, I would not have been able to make the jump to Ueno, a digital agency I started in 2014.",
      image: "/images/5456 (2).jpeg", // Replace with actual image paths
      name: "Rith Sinawatra",
    },
    {
      text: "There is absolutely no doubt in my mind that without Dribbble, I would not have been able to make the jump to Ueno, a digital agency I started in 2014.",
      image: "/images/5456 (5).jpeg", // Replace with actual image paths
      name: "Rith Sinawatra",
    },
    {
      text: "There is absolutely no doubt in my mind that without Dribbble, I would not have been able to make the jump to Ueno, a digital agency I started in 2014.",
      image: "/images/5456 (6).jpeg", // Replace with actual image paths
      name: "Rith Sinawatra",
    },
    {
      text: "There is absolutely no doubt in my mind that without Dribbble, I would not have been able to make the jump to Ueno, a digital agency I started in 2014.",
      image: "/images/5456 (7).jpeg", // Replace with actual image paths
      name: "Rith Sinawatra",
    },
    {
      text: "There is absolutely no doubt in my mind that without Dribbble, I would not have been able to make the jump to Ueno, a digital agency I started in 2014.",
      image: "/images/5456 (8).jpeg", // Replace with actual image paths
      name: "Rith Sinawatra",
    },
    {
      text: "There is absolutely no doubt in my mind that without Dribbble, I would not have been able to make the jump to Ueno, a digital agency I started in 2014.",
      image: "/images/5456 (9).jpeg", // Replace with actual image paths
      name: "Rith Sinawatra",
    },
    {
      text: "There is absolutely no doubt in my mind that without Dribbble, I would not have been able to make the jump to Ueno, a digital agency I started in 2014.",
      image: "/images/watra.jpg", // Replace with actual image paths
      name: "Rith Sinawatra",
    },
    {
      text: "There is absolutely no doubt in my mind that without Dribbble, I would not have been able to make the jump to Ueno, a digital agency I started in 2014.",
      image: "/images/watra.jpg", // Replace with actual image paths
      name: "Rith Sinawatra",
    },
  ];

  return (
    <div>
      <div className="customer-stories-button-container">
        <button className="customer-stories-button">Customer Stories</button>
      </div>
      <motion.div 
        className="testimonials" 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.8 }}
      >
        {/* Use WordReveal for the heading */}
        <WordReveal
          text="Our wall of loves"
          className="text-2xl md:text-4xl font-light text-secondary-foreground"
        />
        <p>Read what our talented community members are saying about La Couture's.</p>
        
        <div className="testimonial-grid">
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
              className="testimonial-card" 
              key={index}
              whileInView={{ opacity: 1, scale: 1 }} 
              initial={{ opacity: 0, scale: 0.9 }} 
              transition={{ duration: 0.6 }}
            >
              <p>{testimonial.text}</p>
              <div className="profile">
                <img src={testimonial.image} alt={testimonial.name} />
                <span>{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Testimonials;
