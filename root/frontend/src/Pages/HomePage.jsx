import React from "react";
import '../index.css';
import HomepageCarousel from "../components/HomepageCarousel";
import Quickbook from "../components/quickbook";
import {Container, Button } from "react-bootstrap";



export default function HomePage() {
    return (
        <div>
            
      <HomepageCarousel />
      <Quickbook/>
        <Container>
  <h1 style={{ color: 'white' }}>Welcome To The Front Row Co.</h1>
  <p style={{ color: 'white' }}>
  ourscreen allows film fans to watch the films they love at our cinema, 
  whether that’s a cult classic, foreign thriller or modern masterpiece.
  Fans can start by booking their tickets to screenings. 
  For first-time fans, this page is designed to help you navigate the waters 
  to enjoying a screening and booking a ticket. 
  </p>
  <p>
    <Button variant="danger">Contact Us</Button>
  </p>
</Container>
        </div>
    );
}