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
import Validateform from "./Validateform";
import Todo from "./Todo";
import LiftState from "./LiftState";
import Lifecycle from "./Lifecycle";
import PropTypes from "./PropTypes";
import CompoWrap from "./CompoWrap";
import RouteExample from "./RouteExample";
import { BlogPost, ArticlePost } from "./RouteExample/Url";
import CheckBoxEco from "./CheckBoxEco";
import TestCase from "./TestCase";

import LocalStorage from "./LocalStorage";

import HooksBasic from "./HooksBasic";
import CRUDwoHooks from "./CRUDwoHooks";
import CRUDHooks from "./CRUDHooks";

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
        <Route exact path="/Todo" component={Todo} />
        <Route exact path="/LiftState" component={LiftState} />
        <Route exact path="/LocalStorage" component={LocalStorage} />
        <Route exact path="/Validateform" component={Validateform} />

        <Route exact path="/hooks-basic" component={HooksBasic} />
        <Route exact path="/crud-wo-hooks" component={CRUDwoHooks} />
        <Route exact path="/crud-hooks" component={CRUDHooks} />
        <Route exact path="/lifecycle" component={Lifecycle} />
        <Route exact path="/proptypes" component={PropTypes} />
        <Route exact path="/compo-wrap" component={CompoWrap} />
        <Route exact path="/route-example" component={RouteExample} />
        <Route exact path="/route-example/nested" component={RouteExample} />
        <Route exact path="/route-example/nested" component={RouteExample} />
        <Route exact path="/url" component={BlogPost} />
        <Route exact path="/a/:articlepost" component={ArticlePost} />
        <Route exact path="/checkbox-eco" component={CheckBoxEco} />
        <Route exact path="/test-case" component={TestCase} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
