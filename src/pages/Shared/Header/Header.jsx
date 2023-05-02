/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Spice Garden</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="text-black text-decoration-none me-3">
                Home
              </Link>
              <Link to="/blog" className="text-black text-decoration-none me-3">
                Blog
              </Link>
              <Link
                to="/favorite-recipe"
                className="text-black text-decoration-none me-3"
              >
                Favorite Recipe
              </Link>
              <Link
                to="/login"
                className="text-black text-decoration-none me-3"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-black text-decoration-none me-3"
              >
                Register
              </Link>
            </Nav>
            <Nav className="">
              <Nav.Link href="#deets">profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;