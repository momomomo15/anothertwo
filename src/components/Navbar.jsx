import React from 'react';
import './Navbar.css'; // Optional: Add a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">MyWebsite</a>
      </div>
      <div className="navbar-menu">
        <a href="/" className="navbar-item">Home</a>
        <a href="/about" className="navbar-item">About</a>
        <a href="/services" className="navbar-item">Services</a>
        <a href="/contact" className="navbar-item">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
