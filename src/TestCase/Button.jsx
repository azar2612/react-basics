import React from "react";

const Button = ({ increment, Azar }) => (
  <button type="button" onClick={() => Azar(increment)}>
    +{increment}
  </button>
);

console.log(Button);

export default Button;
