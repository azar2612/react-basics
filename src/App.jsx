import React from "react";
import "./App.css";
import Color from "./Color";
import PhotoToggle from "./PhotoToggle";
import MultiButton from "./MultiButton";
import Counter from "./Counter";

const App = () => (
  <div className="app">
    <p>hey</p>

    <Color title="RED" />
    <Color title="BLUE" />
    <Color title="YELLOW" />
    <Color title="GREEN" />
    <Color />
    <MultiButton />

    <PhotoToggle />
    <Counter />
  </div>
);

export default App;
