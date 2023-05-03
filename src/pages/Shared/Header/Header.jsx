/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleTost = () => {
    toast("LogOut Success.tata byby🥲🥲");
  };

  const handleLogout = () => {
    logOut()
      .then((result) => {
        handleTost();
      })
      .catch((error) => console.log(error));
  };

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
            <Link to="/login" className="text-black text-decoration-none me-3">
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
            {/* {user && <span>{user?.displayName}</span>} */}
            {user && (
              <img
                className="rounded-circle"
                style={{ width: "2rem" }}
                src={user?.photoURL}
              />
            )}

            {user ? (
              <Button onClick={handleLogout} variant="secondary">
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Navbar>
  );
};

export default Header;