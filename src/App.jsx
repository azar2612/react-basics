import React from "react";
import "./App.css";
import Color from "./Color";
import PhotoToggle from "./PhotoToggle";
import MultiButton from "./MultiButton";
import Counter from "./Counter";
import { Menu, NavMenu } from "./Menu";
import Navigation from "./Navigation";
import Instagram from "./Instagram";
import Githubfetch from "./Githubfetch";
import Gallery from "./Gallery";
import Form from "./Form";

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
const MapEx = () => (
  <>
    <Menu />
    <NavMenu />
  </>
);

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/compo" component={Compo} />
        <Route exact path="/counter" component={CounterCompo} />
        <Route exact path="/map" component={MapEx} />
        <Route exact path="/photo-toggle" component={PhotoToggle} />
        <Route exact path="/multi-button" component={MultiButton} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/Instagram" component={Instagram} />
        <Route exact path="/Githubfetch" component={Githubfetch} />
        <Route exact path="/form" component={Form} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
