import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/About.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about">
        <div className="about-header">
          <h1>About Us</h1>
          <p>Where gowns are our inspiration</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h2>We take <span className="highlight">Gowns</span> personally</h2>
            <h3>We bring you happiness</h3>
            <p>
            The couple’s wedding was a heartfelt celebration of love and resilience. Though their journey wasn’t easy, they faced every challenge together, growing stronger along the way. On their special day, they stood before family and friends, exchanging vows under a canopy of lights, each word filled with promise and devotion. The bride’s glowing smile and the groom’s emotional gaze reflected the depth of their bond. Laughter, happy tears, and joy filled the air, a reminder of what they had achieved. Their wedding was more than a celebration—it was a triumph of love, hope, and a future built on unshakable trust.
            </p>
            <div className="image-row">
              <img 
                src="/images/decorated-room.png" 
                alt="Decorated Room" 
                className="image-large" 
              />
            </div>
          </div>
          <div className="about-images">
            <img 
              src="/images/couple.png" 
              alt="Couple in Wedding Attire" 
              className="image-small" 
            />
          </div>
        </div>
        <div className="stakeholders-section">
          <h1>Our Stakeholders</h1>
          <div className="stakeholders">
            <img src="/images/5456 (2).jpeg" alt="Stakeholder 1" />
            <img src="/images/5456 (3).jpeg" alt="Stakeholder 2" />
            <img src="/images/5456 (4).jpeg" alt="Stakeholder 3" />
            <img src="/images/watra.jpg" alt="Stakeholder 4" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;