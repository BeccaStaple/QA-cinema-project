import React from "react";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar position="fixed" bg="dark" variant="dark">
      <Navbar.Brand href="#">
        <img
          alt=""
          src="/cinema-logo.png"
          width="125"
          height="125"
          margin-left="35vw"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>
    </Navbar>
  );
}
