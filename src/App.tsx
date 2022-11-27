import React from 'react';
import './App.css';
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import How from "./containers/How/How";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Portfolio from "./containers/Portfolio/Portfolio";
import FastFood from "./containers/FastFood/FastFood";
import Chat from "./containers/Chat/Chat";
import UsersForm from "./containers/UsersForm/UsersForm";

function App() {
  return (
    <>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}/>
          <Route path="/about" element={(
            <About/>
          )}/>
          <Route path="/how" element={(
            <How/>
          )}/>
          <Route path="/portfolio" element={(
            <Portfolio/>
          )}>
            <Route path="fast-food" element={(
              <FastFood/>
            )}/>
            <Route path="chat" element={(
              <Chat/>
            )}/>
            <Route path="user-form" element={(
              <UsersForm/>
            )}/>
          </Route>
          <Route path="*" element={(
            <h1>Not found!</h1>
          )}/>
        </Routes>
      </div>
    </>

  );
}

export default App;
