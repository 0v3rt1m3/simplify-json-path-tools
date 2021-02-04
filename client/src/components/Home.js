import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import ReactMarkdown from "react-markdown";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "Loading...." };
  }

  callAPI() {
    fetch("http://localhost:9000/help")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <Container>
        <ReactMarkdown source={this.state.apiResponse} />
      </Container>
    );
  }
}

export default Home;

// function Home() {
//   const [markdownSource, setMarkdown] = useState("Loading....");
//   const input = "";
//   return (
// <Container>
//   <ReactMarkdown source={markdownSource} />
// </Container>
//   );
// }
// Class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
//   }

//   callAPI() {
//     fetch("http://localhost:9000/testApi")
//       .then((res) => res.text())
//       .then((res) => this.setState({ apiResponse: res }));
//   }

//   componentWillMount() {
//     this.callAPI();
//   }

//   render() {
//     return <JsonEditor />
//   }
// }

// export default Home;
