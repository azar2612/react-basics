import React, { Component } from "react";

class MultiButton extends Component {
  state = {
    color: "rat"
  };

  changeColor = clr => this.setState({ color: clr });

  render() {
    const { color } = this.state;
    return (
      <div>
        <button type="button" onClick={() => this.setState({ color: "Red" })}>
          Red
        </button>
        <button type="button" onClick={() => this.changeColor("Blue")}>
          Blue
        </button>
        <button type="button" onClick={() => this.changeColor("Green")}>
          Green
        </button>

        <button type="button" onClick={() => this.setState({ color: "" })}>
          Reset
        </button>
        <p>{color}</p>
      </div>
    );
  }
}
export default MultiButton;
