import React from "react";
import '../index.css';
import Carousel from "react-bootstrap/Carousel";

export default function HomepageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/movie-10.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/movie-17.jpg" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/movie-16.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
