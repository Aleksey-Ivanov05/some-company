import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <div className="text-center mb-2">
        <NavLink to="fast-food" className="btn btn-primary me-3">Fast-food</NavLink>
        <NavLink to="chat" className="btn btn-danger me-3">Chat</NavLink>
        <NavLink to="user-form" className="btn btn-success me-3">User Form</NavLink>
      </div>
      <Outlet/>
    </>
  );
};

export default Portfolio;