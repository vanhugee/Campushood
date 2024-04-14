import React, { useState } from 'react';
import '../styles/Sidebar.css'
import { UserPoints } from './UserPoints';
 


const Sidebar = () => {

  return (
    <div>
    <div className={'sidebar'}>
      
      <ul className="sidebar-links">
        <li><a href="/all">All</a></li>
        <li><a href="/food">Food</a></li>
        
        <li><a href="/transpo">Transport</a></li>
        <li><a href="/misc">Misc</a></li>
      </ul>
    </div>
    <UserPoints/>

    </div>
  );
};

export default Sidebar;
