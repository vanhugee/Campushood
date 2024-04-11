import React, { useState } from 'react';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <ul className="sidebar-links">
        <li><a href="/all">All</a></li>
        <li><a href="/food">Food</a></li>
        
        <li><a href="/transpo">Transport</a></li>
        <li><a href="/misc">Misc</a></li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
