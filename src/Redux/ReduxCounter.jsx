import React from "react";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "./actions";

const Counter = ({ title, incre, decre, counter }) => (
  <>
    <h3>{title}</h3>
    <button type="button" onClick={incre}>
      +
    </button>
    <p>{counter}</p>
    <button type="button" onClick={decre}>
      -
    </button>
  </>
);
// Mapping state into Props
const mapStateToProps = (state) => ({
  counter: state.count,
});
// Calling Actions thro Props
const mapDispatchToProps = {
  incre: incrementAction,
  decre: decrementAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
