import React from 'react';
import './Header.css';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className="header container">
      <Link to="/" className="logo">Site Name</Link>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About as</NavLink></li>
          <li><NavLink to="/how">How it works</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;