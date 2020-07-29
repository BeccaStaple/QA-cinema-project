import React from "react";
import '../index.css';
import {Carousel} from "react-bootstrap";

export default function HomepageCarousel() {
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col">
          <Carousel
            autoplay={true}
            pauseOnVisibility={true}
            slidesshowSpeed={5000}
            version={4}
            indicators={false}>
            <Carousel style={{ height: 500, width: "100%" }}>
              <Carousel.Item className="carousel-center">
                <img style={{ height: 600 }} className="d-block w-100" src="/movie-10.jpg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item className="carousel-center">
                <img style={{ height: 600 }} className="d-block w-100" src="/movie-17.jpg" alt="second slide" />
              </Carousel.Item>
              <Carousel.Item className="carousel-center">
                <img style={{ height: 600 }} className="d-block w-100" src="/movie-16.jpg" alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Carousel>
        </div>
      </div>
    </div>

  );
}
