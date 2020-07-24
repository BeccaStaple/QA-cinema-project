import React from "react";
import '../index.css';
import Axios from "axios";

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Axios.get("http://localhost:9090/cinema/movies").then((res) => {
      this.setState({ res: res.data });
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.data.title} </h1>
      </div>
    );
  }
}
