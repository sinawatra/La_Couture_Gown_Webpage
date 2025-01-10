import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/Contact.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact">
        <h1>Get in Touch</h1>
        <form>
          <input type="text" placeholder="Your Full Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Write something..."></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
