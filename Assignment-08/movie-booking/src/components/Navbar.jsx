import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">🎬 Movie Booking</Link>
    </nav>
  );
};

export default Navbar;
