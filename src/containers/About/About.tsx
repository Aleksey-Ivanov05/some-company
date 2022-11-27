import React from 'react';
import './About.css';
import AboutPic from "../../images/about-pic.jpg"

const About = () => {
  return (
    <div className="about-block">
      <div className="about-col">
        <img src={AboutPic} alt="" width="850" height="623"/>
      </div>
      <div className="about-col">
        <div className="container-half">
          <h3 className="about-title">About us</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the ore
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <span className="btn-1">Read more</span>
        </div>
      </div>
    </div>
  );
};

export default About;