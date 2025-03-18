import React, { useState } from 'react';
import Footer from './Footer';
import '../components/Contact.css';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    setIsModalOpen(true); // Show the modal on form submission
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      <div className="contact">
        <div className="map-section">
          <div className="gmap-frame">
          <iframe width="100%" height="600" title = "La Couture PhnomPenh" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=La%20Couture%20PhnomPenh+(La%20Couture%20PhnomPenh)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
          </div>
        </div>

        <div className="contact-card">
          <img src="/images/watra.jpg" alt="Profile" className="profile-image" />
          <h2>We take Gowns personally, with your thoughts in hand...</h2>
          <p>
          “If your actions inspire others to dream more, learn more, do more and become more, you are a leader.” “Don't worry about people stealing your design work. Worry about the day they stop.” “People buy into the leader before they buy into the vision.”
          </p>
        </div>

        <h1 className="form-header">Get in Touch!</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Full Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Write something..." required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Modal Section */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Thank You!</h2>
              <p>Your query has been received. Our team will contact you soon!</p>
              <button className="close-modal" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
