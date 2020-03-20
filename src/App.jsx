import React from "react";
import "./App.css";

const Color = ({ title }) => (
  <div className="color" style={{ background: title }}>
    <p>{title}</p>
  </div>
);

const App = () => (
  <div className="app">
    <p>hey</p>

    <Color title="RED" />
    <Color title="BLUE" />
    <Color title="YELLOW" />
    <Color title="GREEN" />
  </div>
);

export default App;
