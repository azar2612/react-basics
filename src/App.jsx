import React from "react";
import "./App.css";
import Color from "./color";
import PhotoToggle from "./PhotoToggle";

const App = () => (
  <div className="app">
    <p>hey</p>

    <Color title="RED" />
    <Color title="BLUE" />
    <Color title="YELLOW" />
    <Color title="GREEN" />
    <PhotoToggle />
  </div>
);

export default App;
