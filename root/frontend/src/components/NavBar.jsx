import React from "react";
import '../index.css';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Navigate from "../components/Navigate";


export default function NavBar() {


return (
    <div>
        <div>
            <Navbar className="navbarLink" expand="sm" bg="black" variant="dark">
                <Nav className="navbarLink">

                    <Nav.Link >
                        <Link className="navbarLink" to="/">  Home </Link>
                    </Nav.Link>

                    <Nav.Link >
                        <Link className="navbarLink" to="/about">About</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link className="navbarLink" to="/listings">Listings</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="navbarLink" to="/opening-times">Opening Times</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="navbarLink" to="/newReleases">New Releases</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link  className="navbarLink" to="/screens">Screens</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link className="navbarLink" to="/bookings">Bookings</Link>
                    </Nav.Link>

                </Nav>

                {/*Search bar to go here*/}
            </Navbar>

        </div>

        <div>
            <Navigate />
        </div>


    </div>
);
        
        
    
}