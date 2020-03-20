import React from "react";
import "./App.css";

const Red = () => (
  <div className="red">
    <p>RED</p>
  </div>
);

const Blue = () => (
  <div className="blue">
    <p>BLUE</p>
  </div>
);

const Green = () => (
  <div className="green">
    <p>GREEN</p>
  </div>
);

const App = () => (
  <div className="app">
    <p>hey</p>

    <Red />
    <Blue />
    <Red />
    <Green />
  </div>
);

export default App;
