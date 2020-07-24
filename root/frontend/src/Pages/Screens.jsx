import React from "react";
import '../index.css';
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";

export default function Screens() {
    return (

        <div>
            <h3>Screens</h3>
            <Container>
            <p>Standard Screens</p>
                <Row>
                    <Col xs={6} md={3}>
                        <Image src={require('../img/screen-standard.jpg')} width="100%" height="100%" rounded />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={require('../img/standard-screen2.jpg')} width="100%" height="100%" rounded />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={require('../img/standard-screen-plan.jpg')} width="100%" height="100%" rounded />
                    </Col>
                </Row>
                <Row>
                    
                </Row>
                
                <p>Directors Box - Deluxe Screen</p>
                <Row>
                    <Col xs={6} md={3}>
                        <Image src={require('../img/deluxe-screen.jpg')} width="100%" height="100%" rounded />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={require('../img/deluxe-screen2.jpg')} width="100%" height="100%" rounded />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={require('../img/deluxe-screen-plan.jpg')} width="100%" height="100%" rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}