/* eslint-disable react/prop-types */
import { Component } from "react";

class Clock3 extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1 className="time">
          Bangla Clock {this.state.date.toLocaleTimeString(this.props.locale)}{" "}
          {this.props.children}
        </h1>
      </div>
    );
  }
}

export default Clock3;
