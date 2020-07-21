import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import HomePage from "../Pages/HomePage";
import Listings from "../Pages/Listings";
import OpeningTimes from "../Pages/OpeningTimes";
import NewReleases from "../Pages/NewReleases";
import Screens from "../Pages/Screens";
import Bookings from "../Pages/Bookings";

export default function NavBar() {

    
    return(
        <div>
            
            <Navbar expand="sm" bg="dark" variant="dark">
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
                            <Route exact path="/listings" component={Listings}/>
                            <Route exact path="/opening-times" component={OpeningTimes}/>
                            <Route exact path="/new-releases" component={NewReleases}/>
                            <Route exact path="/screens" component={Screens}/>
                            <Route exact path="/bookings" component={Bookings}/>
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