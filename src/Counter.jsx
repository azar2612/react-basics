import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () => this.setState(({ count }) => ({ count: count + 1 }));

  decrement = () => this.setState(({ count }) => ({ count: count - 1 }));

  render() {
    const { title } = this.props;
    const { count, name } = this.state;
    return (
      <div>
        <h3>{title}</h3>
        <button type="button" onClick={this.increment}>
          +
        </button>

        <p>{count}</p>
        <p>{name}</p>

        <button type="button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
