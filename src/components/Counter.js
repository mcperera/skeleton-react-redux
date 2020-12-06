import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
} from "../store/actionCreators/counter";

const styles = {
  margin: "10px",
  padding: "15px",
  fontSize: "20px",
  width: "50px",
};

export default function Counter() {
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incrementCount(count))} style={styles}>
        +
      </button>
      <h1>Count {count}</h1>
      <button onClick={() => dispatch(decrementCount(count))} style={styles}>
        -
      </button>
    </div>
  );
}
