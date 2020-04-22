import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { title, count, plus, minus } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <button type="button" onClick={plus}>
          +
        </button>
        <p>{count}</p>
        <button type="button" onClick={minus}>
          -
        </button>
      </div>
    );
  }
}

class LiftState extends Component {
  state = {
    count: 0,
  };

  increment = () => this.setState({ count: this.state.count + 1 });

  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    const { count } = this.state;
    return (
      <>
        <Counter
          title="Product Page Counter"
          count={count}
          plus={this.increment}
          minus={this.decrement}
        />
        <Counter
          title="Checkout Page Counter"
          count={count}
          plus={this.increment}
          minus={this.decrement}
        />
      </>
    );
  }
}
export default LiftState;
