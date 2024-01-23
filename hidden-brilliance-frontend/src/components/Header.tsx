import React from "react";
import "./Header.css";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import hbLogo from "../resources/hbLogo.png";

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" bg="black">
      <Container className="nav-align">
        <Navbar.Toggle aria-controls="navbarTogglerDemo02" />
        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="text-color" disabled>
              Home
            </Nav.Link>
            <Nav.Link href="#">Shop</Nav.Link>
            <Nav.Link href="">Blog</Nav.Link>
          </Nav>

          <Navbar.Brand href="#">
            <img
              src={hbLogo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
