import React from "react";
import "./App.css";
import Color from "./Color";
import PhotoToggle from "./PhotoToggle";

const App = () => (
  <div className="app">
    <p>hey</p>

    <Color title="RED" />
    <Color title="BLUE" />
    <Color title="YELLOW" />
    <Color title="GREEN" />
    <Color />

    <PhotoToggle />
  </div>
);

export default App;
