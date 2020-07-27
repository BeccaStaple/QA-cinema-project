import React from "react";
import '../index.css';
import Axios from "axios";
import { Container, CardDeck, Card } from "react-bootstrap";

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
          <Container>
            <CardDeck>

              <Card  >
                <Card.Body >
                  <p>Title: {movie.title}</p>
                  <img src={movie.movie_image} className="w-100"/>
                </Card.Body>

              </Card>

            </CardDeck>
          </Container>
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

