import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10,
    };
  }
  render() {
    return <h1>{this.state.counter}</h1>;
  }
}

export default Counter;
