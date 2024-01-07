import React from 'react';
import './Header.css'; 
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap';
import hbLogo from '../resources/hbLogo.png'
// TODO: Figure out why the import is not working


const Header: React.FC = () => {
  return (
    <Navbar expand="lg" bg="black">
      <Container>
        <Navbar.Toggle aria-controls="navbarTogglerDemo02" />
           <Navbar.Brand href="#">
          <img 
            src={hbLogo} 
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand> 
        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className='custom-text' active>Home</Nav.Link>
            <Nav.Link href="#">Shop</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav>

          
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