import React from "react";
import "./App.css";

const Red = ({ title, bg }) => (
  <div className="red" style={{ background: bg }}>
    <p>{title}</p>
  </div>
);

const Blue = ({ title, bg }) => (
  <div className="blue" style={{ background: bg }}>
    <p>{title}</p>
  </div>
);

const Green = ({ title, bg }) => (
  <div className="green" style={{ background: bg }}>
    <p>{title}</p>
  </div>
);

const App = () => (
  <div className="app">
    <p>hey</p>

    <Red title="RED" bg="red" />
    <Blue title="BLUE" bg="blue" />
    <Red title="YELLOW" bg="yellow" />
    <Green title="GREEN" bg="green" />
  </div>
);

export default App;
