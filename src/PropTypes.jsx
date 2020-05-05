import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Title =({ title, noOfCount }) => <h3>{`${title} ${noOfCount}`}</h3>;

Title.propTypes = {
    title: PropTypes.string,
    noOfCount: PropTypes.number,
}

  // Types of prop-types

  //   optionalArray: PropTypes.array, []
  //   optionalBool: PropTypes.bool, false
  //   optionalFunc: PropTypes.func, ()
  //   optionalNumber: PropTypes.number, 44
  //   optionalObject: PropTypes.object, {}
  //   optionalString: PropTypes.string, ""
  //   optionalSymbol: PropTypes.symbol,

class Counter extends Component {
    state = {
      count: 0
    };
  
    increment = () => this.setState({ count: this.state.count + 1 })
  
    decrement = () => this.setState({ count: this.state.count - 1 })
  
    render() {
      const { count, name } = this.state;
      return (
        <div>
          <Title title="Counter" noOfCount={count} />
          <button type="button" onClick={this.increment}>+</button>
          <p>{count}</p>
          <p>{name}</p>
          <button type="button" onClick={this.decrement}>-</button>
        </div>
      );
    }
  }

export default Counter;