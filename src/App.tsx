import React, { useState } from "react";
import logo from "./logo.svg";
import HomePage from "./pages/HomePage";
// import './App.css'

function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="box">First column</div>
        </div>
        <div className="column">
          <div className="box">Second column</div>
        </div>
        <div className="column">
          <div className="box">Third column</div>
        </div>
        <div className="column">
          <div className="box">Fourth column</div>
        </div>
      </div>
    </div>
  );
}

export default App;
