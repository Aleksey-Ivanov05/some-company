import React from 'react';
import './Header.css';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className="header container">
      <Link to="/" className="logo">Site Name</Link>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/" className="link">Home</NavLink></li>
          <li><NavLink to="/about" className="link">About us</NavLink></li>
          <li><NavLink to="/how" className="link">How it works</NavLink></li>
          <li><NavLink to="/portfolio" className="link">Portfolio</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;