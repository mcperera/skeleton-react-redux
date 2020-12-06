import { INCREMENT, DECREMENT } from "../actionTypes/counter";

const incrementCount = (state) => {
  return (dispatch) => {
    dispatch({
      type: INCREMENT,
      payload: state + 1,
    });
  };
};

const decrementCount = (count) => {
  return (dispatch) => {
    dispatch({
      type: DECREMENT,
      payload: count - 1,
    });
  };
};

export { incrementCount, decrementCount };
