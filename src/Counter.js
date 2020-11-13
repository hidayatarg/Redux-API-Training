import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };

  incrementHandler = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementHandler = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  resetHandler = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    const buttonMargin = {
      margin: "0 4px",
      color: "white",
      background: "grey",
      padding: "5px 10px",
      outline: "none",
      cursor: "pointer"
    };

    return (
      <div>
        <h3>Counter: {this.state.count}</h3>
        <button style={buttonMargin} onClick={this.incrementHandler}>
          UP
        </button>
        <button style={buttonMargin} onClick={this.decrementHandler}>
          Down
        </button>
        <button style={buttonMargin} onClick={this.resetHandler}>
          Reset
        </button>
      </div>
    );
  }
}
