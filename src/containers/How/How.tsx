import React from 'react';
import './How.css';

const How = () => {
  return (
    <div className="how container">
      <h3 className="how-title">How it works</h3>
      <p className="how-sub">Lorem Ipsum is simply dummy Business industry</p>
      <div className="how-columns">
        <div className="how-column how-column-1">
          <h5>step 1</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting ind
            ustry. Lorem Ipsum has been</p>
        </div>
        <div className="how-column how-column-2">
          <h5>step 2</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting ind
            ustry. Lorem Ipsum has been</p>
        </div>
        <div className="how-column how-column-3">
          <h5>step 3</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting ind
            ustry. Lorem Ipsum has been</p>
        </div>
        <div className="how-column how-column-4">
          <h5>step 4</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting ind
            ustry. Lorem Ipsum has been</p>
        </div>
      </div>
      <button className="btn-2" type="button">Get start now</button>
    </div>
  );
};

export default How;