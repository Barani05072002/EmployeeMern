// Nav.js
import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import '../styles/Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src="logo.png" alt="Logo" /> */}
        <FaUserAlt />
      </div>
      <div className={`menu ${menuOpen ? 'active' : ''}`}>
        <a href="#" className="menu-item">Home</a>
        <a href="#" className="menu-item">Employee List</a>
        <a href="#" className="menu-item">Profile</a>
        <a href="#" className="menu-item">Logout</a>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Nav;
