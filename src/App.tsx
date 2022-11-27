import React from 'react';
import './App.css';
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import How from "./containers/How/How";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <header className="header container">
          <a href="#" className="logo">Site Name</a>
          <nav className="main-nav">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About as</a></li>
              <li><a href="#">How it works</a></li>
            </ul>
          </nav>
        </header>
        <div>
          <Home/>
          <About/>
          <How/>
        </div>
      </div>
      <footer className="footer">
        <div className="container footer-container">
          <p className="sub-1">All contents © copyright 2014 Business Theme. All rights reserved Designed by :
            akhilwebfolio</p>
          <p className="sub-2">Телефон: <span>+987 9976 999</span></p>
          <div className="social-links">
            <span className="skype social-link">Skype</span>
            <span className="tw social-link">Twitter</span>
            <span className="google social-link">Google</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
