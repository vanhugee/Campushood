import React from 'react';
import Button from "./Button";
import { LoginButton } from '../components/LogIn'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <a href="/">
        <img src="/client/public/img/logo.png" alt="Logo" /></a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Account</a></li>
      </ul>
      <LoginButton/>
    </nav>
  );
};

export default Navbar;
