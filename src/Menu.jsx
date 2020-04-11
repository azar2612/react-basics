import React from "react";

// Array
const menuData = ["Home", "About", "Gallery", "Contact"];

// Named Export
export const Menu = () => (
  <ul>
    {menuData.map((c) => (
      <li>{c}</li>
    ))}
  </ul>
);

// Array with Object
const navMenuData = [
  {
    name: "chaal",
    location: "vellore",
  },
  {
    name: "sathish",
    location: "vellore",
  },
  {
    name: "ashok",
    location: "kanchipuram",
  },
];

export const NavMenu = () => (
  <div>
    {navMenuData.map((l) => (
      // <h3>Name : Location</h3>
      // <h3>Name : Location</h3>
      // <h3>Name : Location</h3>
      <h3>
        {l.name}:{l.location}
      </h3>
    ))}
  </div>
);
