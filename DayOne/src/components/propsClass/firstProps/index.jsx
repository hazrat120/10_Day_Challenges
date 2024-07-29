/* eslint-disable react/prop-types */
import { Component } from "react";
import ClockComponent2 from "./../secondProps/index";

class Clock extends Component {
  render() {
    return (
      <div className="heading">
        <h2 className="text">
          Hello {new Date().toLocaleTimeString(this.props.locale)}{" "}
          {this.props.children}
        </h2>

        <div>
          <p>Child Component</p>

          <ClockComponent2
            locale="en-EN"
            name={"Clock From Class Component"}
          ></ClockComponent2>
        </div>
      </div>
    );
  }
}

// const ClockComponent = new Clock();

export default Clock;
