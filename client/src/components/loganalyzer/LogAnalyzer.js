import React, { Component } from "react";
import JsonEditor from "./JsonEditor";
class LogAnalyzer extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testApi")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return <JsonEditor />;
  }
}

export default LogAnalyzer;
