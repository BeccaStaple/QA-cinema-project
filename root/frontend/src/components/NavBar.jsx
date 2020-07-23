import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Navigate from "../components/Navigate";


export default function NavBar() {

    const linkStyle = {
        color: "white",
        fontsize: 100,
        padding: 40,
        fontfamily: "sans-serif",
        textalign: "center",
}

return (
    <div>
        <div>
            <Navbar expand="sm" bg="black" variant="dark">
                <Nav className="mr-auto  text-center">

                    <Nav.Link >
                        <Link style={linkStyle} to="/">  Home </Link>
                    </Nav.Link>

                    <Nav.Link >
                        <Link style={linkStyle} to="/about">About</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link style={linkStyle} to="/listings">Listings</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={linkStyle} to="/opening-times">Opening Times</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={linkStyle} to="/new-releases">New Releases</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={linkStyle} class="color-me" to="/screens">Screens</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link style={linkStyle} to="/bookings">Bookings</Link>
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