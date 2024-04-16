import React, { useState } from 'react';
import campushoodLogo from "../assets/logo.png";
import Sidebar from './Sidebar';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
          <a href="/">
          <img src={campushoodLogo} alt="Campushood Logo" style={{ width: '100%', height: '100%' }}  />
          </a>
      </div>

      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Account</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
