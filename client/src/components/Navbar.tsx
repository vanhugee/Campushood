import campushoodLogo from "../assets/logo.png";
import '../styles/Navbar.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import user from '../assets/user.png'


const Navbar = () => {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar className="navbar">
          
            <a href="/">
              <img src={campushoodLogo} alt="Campushood Logo" style={{ width: '80%', height: '80%' }} />
            </a>
          

          <ul className="navbar-links">
            <li className="login-btn"><img src={user} alt="user icon" style={{ float:'left', width: '25px', marginRight: '10px', display: 'inline-block' }} /><a href="/">My Account</a></li>
          </ul>
          
        </Toolbar>
      </AppBar>
    </Box>


  );
};

export default Navbar;
