/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {

  const {user} = useContext(AuthContext)
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
                to="/favorite"
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

              {user && <FaUserCircle className="fs-2 me-2"></FaUserCircle>}

              {user ? (
                <Button variant="secondary">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;