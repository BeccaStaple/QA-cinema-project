import React from "react";
import '../index.css';
import Axios from "axios";

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:9090/cinema/movies").then((res) => {
      debugger;
    const movies = res.data;
    this.setState({ movies });
    });
  }

  render() {
    const movieTitles = this.state.movies.map(movie => {
      return (
      <div>
        <p>Title: {movie.title}</p>
      </div>
      )
      
    })
    return (
      <div>
        {movieTitles}
      </div>
    );
  }
}
