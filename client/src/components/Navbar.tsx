import React from 'react';
import Button from "./Button";
import campushoodLogo from "../assets/logo.png"


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
          <a href="/">
          <img src={campushoodLogo} alt="Edit Image" style={{ width: '100%', height: '100%' }}  />
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
