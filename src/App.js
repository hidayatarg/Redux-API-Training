import React from "react";
import "./styles.css";
import Counter from "./Counter";
import { createStore } from "redux";

const initalState = {
  count: 0
};

// take current state and action
function reducer(state = initalState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
}

const store = createStore(reducer);
console.log("Connected to store: ", store.getState());

// reducer is called with new action
store.dispatch({ type: "INCREMENT" });
console.log("Connected to store: ", store.getState());

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
console.log("Connected to store: ", store.getState());

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
