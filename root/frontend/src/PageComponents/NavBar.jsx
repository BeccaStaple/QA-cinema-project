import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import HomePage from "../Pages/HomePage";



export default function NavBar() {

    
    return(
        <div>
            
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                <Router>
                    
                    
                        <Nav.Link>
                            <Link to="./">  Home </Link>
                        </Nav.Link>
                    
                        <Nav.Link>
                            <Link to="./listings">Listings</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="./opening-times">Opening Times</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="./new-releases">New Releases</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="./screens">Screens</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="./bookings">Bookings</Link>
                        </Nav.Link>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                        </Switch>
                    </Router>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
                
            </Navbar>
            
        </div>
    );
        
        
    
}