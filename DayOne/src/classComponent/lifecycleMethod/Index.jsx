import { Component } from "react";

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    const dataString = this.state.data
      ? JSON.stringify(this.state.data, null, 2)
      : "Loading...";

    return <div>{dataString}</div>;
  }
}

export default DataFetcher;
