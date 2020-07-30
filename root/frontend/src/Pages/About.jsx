import React from "react";
import '../index.css';
import { Card, Button, CardDeck, Container } from "react-bootstrap";

export default function About() {


    return (
        <div class="container">
            <div class="row my-4">
                <div class="col">
                    <div class="">
                        <h4>About Us</h4>
                        <span class="text-muted"></span>

                        <div class="container-fluid" >
                            <div class="row">
                                <div class="col-sm d-flex">
                                    <div class="card card-body flex-fill">
                                        <Card >
                                            <Card.Img variant="top" src="https://avatars0.githubusercontent.com/u/50530639?s=460&u=d547e690a2ffcecd469cf38723ae1bfcabb06faa&v=4" />
                                            <Card.Body>
                                                <Card.Title>Nicole </Card.Title>
                                                <Card.Text>
                                                I have loved being a trainee at QA Consulting. 
                                                I have learnt more than I ever thought possible in 12 weeks and feel 
                                                exciting to keep developing those skills as a Junior Software Consultant.
                                            
                                     </Card.Text>

                                            </Card.Body>
                                            <Card.Footer>
                                                <small><Button variant="outline-danger" href="https://github.com/technicole-t">Github</Button></small>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                </div>
                                <div class="col-sm d-flex">
                                    <div class="card card-body flex-fill">
                                        <Card>
                                            <Card.Img variant="top" width="20%" src="https://avatars0.githubusercontent.com/u/56489791?s=460&u=b1b8c20b7856816fd91c3aeff1db66bb7c63b433&v=4" />
                                            <Card.Body>
                                                <Card.Title>Rebecca</Card.Title>
                                                <Card.Text>
                                                Rebecca had very little experience in coding before joining QA Academy. 
                                                She has since been learning Java, MERN and Spring Boot among other technologies 
                                                and has really enjoyed the challenge.
                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small><Button variant="outline-danger" href="https://github.com/BeccaStaple">Github</Button></small>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                </div>
                                <div class="col-sm d-flex">
                                    <div class="card card-body flex-fill">
                                        <Card>
                                            <Card.Img variant="top" width="20%" src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/18300804_1575335579157202_1488179071913989711_n.jpg?_nc_cat=104&_nc_sid=da31f3&_nc_ohc=BfupMkybZ1EAX9I30dD&_nc_ht=scontent-lhr8-1.xx&oh=682d58b629a9d0e884f045ddf44e2864&oe=5F3CC42C" />
                                            <Card.Body>
                                                <Card.Title>Tayyibah</Card.Title>
                                                <Card.Text>
                                               Tayyibah has learnt alot during her time at the QA academy. 
                                               She has learnt to work with Java, MERN stack, Springboot and various testing methods.
                                               She has loved this experience.
                                    </Card.Text>

                                            </Card.Body>
                                            <Card.Footer>
                                                <small><Button variant="outline-danger" href='https://github.com/Tayyibah906'>Github</Button></small>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 