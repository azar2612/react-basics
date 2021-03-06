import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const naviData = [
  "home",
  "compo",
  "counter",
  "map",
  "photo-toggle",
  "multi-button",
  "gallery",
  "Instagram",
  "Githubfetch",
  "Form",
  "Validateform",
  "Todo",
  "LiftState",
  "LocalStorage",
  "redux",
  "mobx",
  "hooks-basic",
  "CRUD-WO-Hooks",
  "CRUD-Hooks",
  "lifecycle",
  "proptypes",
  "compo-wrap",
  "route-example",
  "url",
  "checkbox-eco",
  "test-case",
];

const Navigation = () => (
  <div className="navigation">
    <ul>
      {/* <a href="/gallery">gallery</a> */}

      {/* <Link to="/gallery">Gellery</Link> */}
      {naviData.map((m) => (
        <Link to={m}>
          <li>{m}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export default Navigation;
