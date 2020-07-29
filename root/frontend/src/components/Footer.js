
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="#000000" className="footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="8">
            <h3 className="title">FrontRow Co.</h3>
            <p>
              An Unforgetable Movie Experience!
            </p>
          </MDBCol>
          <MDBCol md="8">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/" style={{ color: "#f40f0f" }}>
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" style={{ color: "#f40f0f" }}>
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" style={{ color: "#f40f0f" }}>
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" style={{ color: "#f40f0f" }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://localhost:3000/"> FrontRow Co. </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
