import React from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapStateToDispatch(dispatch) {
  return {
    onIncrement: () => {
      dispatch(increment());
    },

    onDecrement: () => {
      dispatch(decrement());
    }
  };
}

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Counter);
