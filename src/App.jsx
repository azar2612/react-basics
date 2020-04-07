import React from "react";
import "./App.css";
import Color from "./Color";
import PhotoToggle from "./PhotoToggle";
import MultiButton from "./MultiButton";
import Counter from "./Counter";
import Navigation from "./Navigation";
import Instagram from "./Instagram";
import Githubfetch from "./Githubfetch";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = () => <p>Home</p>;
const Compo = () => (
  <>
    <Color title="RED" />
    <Color title="BLUE" />
    <Color title="YELLOW" />
    <Color title="GREEN" />
  </>
);
const CounterCompo = () => (
  <>
    <Counter title=" Counter" />
  </>
);

const Gallery = () => <p>Gallery</p>;

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/compo" component={Compo} />
        <Route exact path="/counter" component={CounterCompo} />
        <Route exact path="/photo-toggle" component={PhotoToggle} />
        <Route exact path="/multi-button" component={MultiButton} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/Instagram" component={Instagram} />
        <Route exact path="/Githubfetch" component={Githubfetch} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
