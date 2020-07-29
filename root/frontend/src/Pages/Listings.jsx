import React from "react";
import '../index.css';
import Axios from "axios";
import { Card, Container, CardDeck } from "react-bootstrap";

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

        <div className="col-md-3 col-sm-6">
          <div className="card">
            <Container >
              <CardDeck>
                <CardDeck >
                  <Card>
                    <Card.Img variant="top" src={movie.movie_image} />
                    <Card.Header>
                      <Card.Title>{movie.title} </Card.Title>
                      <Card.Text>
                        <p style={{ color: "black" }}>{movie.description}</p>
                      </Card.Text>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <p style={{ color: "black" }}>Year Released: {movie.year_released}</p>
                        <p style={{ color: "black" }}> Duration: {movie.duration}</p>
                      </Card.Text>
                    </Card.Body>

                    <Card.Footer>
                      <p style={{ color: "black" }}>Director: {movie.director} </p>
                      <p style={{ color: "black" }}>Cast: {movie.cast}</p>
                    </Card.Footer>
                  </Card>

                </CardDeck>
              </CardDeck>
            </Container>
          </div>
        </div>

      )

    })

    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
          </div>
        </div>
        <div className="row mt-3">{showMovies}
        </div>
      </div >
    );
  }
}

