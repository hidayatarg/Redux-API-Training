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
  return initalState;
}

const store = createStore(reducer);
console.log("Connected to store: ", store.getState());

// reducer is called with new action
store.dispatch({ type: "INCREMENT" });

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
