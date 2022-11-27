import React from 'react';
import './Home.css';
import Laptop from "../../images/laptop.png"

const Home = () => {
  return (
    <>
      <div className="main-block">
        <div className="main-block-inner">
          <div className="container">
            <h1 className="main-title">Boost up your Local business</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum typesetting
              Iste a incidunt eius velit, tenetur voluptate cupiditate aspernatur aut minima, aliquid aperiam
              accusamus.
              doloribus sequi hic modi culpa blanditiis quaerat. Pariatur nemo, hic rem minima totam impedit id ea
              ab.
              Error animi expedita sunt molestiae quaerat voluptate illo quibusdam magnam nesciunt.</p>
            <img src={Laptop} alt=""/>
          </div>
        </div>
      </div>
      <div className="services container">
        <h3 className="services-title">Our Services</h3>
        <p className="services-sub">Lorem Ipsum is simply dummy Business industry.</p>
        <div className="columns">
          <div className="column column-1">
            <h5>Font-Awesome Icons</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting ind
              ustry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer.</p>
            <span>Read More</span>
          </div>
          <div className="column column-2">
            <h5>Fully Responsive Design</h5>
            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' </p>
            <span>Read More</span>
          </div>
          <div className="column column-3">
            <h5>Working Contact form</h5>
            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
              text, and a search for infancy</p>
            <span >Read More</span>
          </div>
          <div className="column column-4">
            <h5>Retina Ready icons here</h5>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour
              or randomised words which don't look even slightly believable.</p>
            <span >Read More</span>
          </div>
          <div className="column column-5">
            <h5>Friendly Code</h5>
            <p>Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914 translation by H. Rackham</p>
            <span >Read More</span>
          </div>
          <div className="column column-6">
            <h5>Flat trendy landing page Design</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since
              the 1500s, when an unknown printer.</p>
            <span >Read More</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;