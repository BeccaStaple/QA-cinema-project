import React from "react";
import '../index.css';
import { Card, Button, CardDeck, Container } from "react-bootstrap";

export default function About() {


    return (
        <div>
            <h1>About Us</h1>
            <Container>
                <CardDeck>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="https://avatars0.githubusercontent.com/u/50530639?s=460&u=d547e690a2ffcecd469cf38723ae1bfcabb06faa&v=4" />
                            <Card.Body>
                                <Card.Title>Nicole </Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                     </Card.Text>

                            </Card.Body>
                            <Card.Footer>
                                <small><Button variant="outline-danger" href="https://github.com/technicole-t">Github</Button></small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://avatars0.githubusercontent.com/u/56489791?s=460&u=b1b8c20b7856816fd91c3aeff1db66bb7c63b433&v=4" />
                            <Card.Body>
                                <Card.Title>Rebecca</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small><Button variant="outline-danger" href="https://github.com/BeccaStaple">Github</Button></small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" width="50%" src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/18300804_1575335579157202_1488179071913989711_n.jpg?_nc_cat=104&_nc_sid=da31f3&_nc_ohc=BfupMkybZ1EAX9I30dD&_nc_ht=scontent-lhr8-1.xx&oh=682d58b629a9d0e884f045ddf44e2864&oe=5F3CC42C" />
                            <Card.Body>
                                <Card.Title>Tayyibah</Card.Title>
                                <Card.Text>
                                    Tayyibah enjoys learning new technologies, she has enjoyed her time at the QA academy and has learnt a lot of
                                    skills that will help her in her career as a consultant software developer.
                                    </Card.Text>

                            </Card.Body>
                            <Card.Footer>
                                <small><Button variant="outline-danger" href='https://github.com/Tayyibah906'>Github</Button></small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </CardDeck>
            </Container>
        </div>
    );
} 