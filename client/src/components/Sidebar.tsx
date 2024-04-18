import React, { useState } from 'react';
import '../styles/Sidebar.css'
 
interface SidebarProps {
  callBackFunction: (tagData: string) => void;
}

const Sidebar = ({callBackFunction}: SidebarProps ) => {
  const handleClickHome = (e: React.MouseEvent) => {
    callBackFunction('ALL');
  }
  const handleClickFood = (e: React.MouseEvent) => {
    callBackFunction('FOOD');
  }
  const handleClickTranspo = (e: React.MouseEvent) => {
    callBackFunction('TRANSPO');
  }
  const handleClickMisc = (e: React.MouseEvent) => {
    callBackFunction('MISC');
  }
  return (
    <section className={'sidebar'}>
      
      <ul className="sidebar-links">
        <li><a onClick={handleClickHome}>All</a></li>
        <li><a onClick={handleClickFood}>Food</a></li>
        <li><a onClick={handleClickTranspo}>Transport</a></li>
        <li><a onClick={handleClickMisc}>Misc</a></li>
      </ul>
    </section>
  
  );
};

export default Sidebar;
