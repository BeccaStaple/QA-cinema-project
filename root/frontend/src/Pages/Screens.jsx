import React from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";

export default function Screens() {
    return (

        <div>
            <h1>Screens</h1>
            <Container>
                <Row>
                    <p style={{ color: 'white' }}>Standard Screens</p>
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
                    <Jumbotron width= "50%" style={{background: 'black' }}>
                    </Jumbotron>
                </Row>

                <Row>
                    <p style={{ color: 'white' }}>Directors Box - Deluxe Screen</p>
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