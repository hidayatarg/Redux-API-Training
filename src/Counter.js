import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  state = {
    count: 0
  };

  incrementHandler = () => {};

  decrementHandler = () => {};

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
        <h3>Counter: {this.props.count}</h3>
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

// it recive the state from the redux store
// state will be the object with the count property
// return an object => key names are the prop names
function mapStateToProps(state) {
  return {
    // give the count key with value from state.count
    // reach it via this.props.countp
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);

// You need to tell connect explicitly which data to pull off the store
// or it will give empty we can do this using a function called
// mapStateToProps
