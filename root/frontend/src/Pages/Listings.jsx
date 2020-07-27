import React from "react";
import '../index.css';
import Axios from "axios";
import {Card, ListGroupItem, ListGroup } from "react-bootstrap";

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

    const showMovies = this.state.movies.map(movie => {
      return (
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.movie_image}/>
            <Card.Body>
              <Card.Title>Title: {movie.title}</Card.Title>
              <Card.Text>
              Description: {movie.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Duration: {movie.duration}</ListGroupItem>
              <ListGroupItem>Year Released: {movie.year_released}</ListGroupItem>
              <ListGroupItem>Director: {movie.director}</ListGroupItem>
              <ListGroupItem>Cast: {movie.cast}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://www.bbfc.co.uk/">Classifications</Card.Link>
            </Card.Body>
          </Card>
        </div>
      )

    })
    return (
      <div>

        {showMovies}


      </div>
    );
  }
}

