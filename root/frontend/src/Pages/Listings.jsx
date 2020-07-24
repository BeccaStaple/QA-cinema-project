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
    const movies = res.data;
    this.setState({ movies });
    });
  }

  render() {
    const movieTitles = this.state.movies.map(movie => {
      return (
      <div>
        <p>Title: {movie.title}</p>
        <img src={movie.movie_image} />
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
