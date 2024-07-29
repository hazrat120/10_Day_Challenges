/* eslint-disable react/prop-types */
import { Component } from "react";

class Clock2 extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <h1 className="heading">
        <span className="text" style={this.props.styled}>
          Clock {this.state.date.toLocaleTimeString(this.props.locale)}{" "}
          {this.props.name}
        </span>
      </h1>
    );
  }
}

export default Clock2;
