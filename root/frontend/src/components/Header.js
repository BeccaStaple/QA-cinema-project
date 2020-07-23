import React from "react";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar position="fixed" bg="black" variant="dark">
      <Navbar.Brand href="#">
        <img
          alt=""
          src="/cinema-logo.png"
          width="15%"
          height="100%"
          margin-middle="35vw"
          className="image wp-image-5260  attachment-full size-full"
        />{" "}
      </Navbar.Brand>
    </Navbar>
  );
}
