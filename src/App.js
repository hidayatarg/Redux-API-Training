import React from "react";
import "./styles.css";
import Counter from "./Counter";
import { createStore } from "redux";

const initalState = {
  count: 0
};

function reducer() {
  console.log("reducer");
  return initalState;
}

const store = createStore(reducer);
console.log("Connected to store: ", store.getState());

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
