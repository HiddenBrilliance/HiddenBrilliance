import React from 'react';
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap';

// TODO: Figure out why the import is not working

// import hbLogo from '../resources/hbLogo.png'; 

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" bg="body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="navbarTogglerDemo02" />
        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" active>Home</Nav.Link>
            <Nav.Link href="#">Shop</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav>

          {/* <Navbar.Brand href="#">
          <img
            src={hbLogo} // Using the image directly in the src attribute
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand> */}
          
          <Form className="d-flex" role="search">
            <FormControl type="search" placeholder="Search" aria-label="Search" />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;