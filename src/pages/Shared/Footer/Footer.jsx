/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h4>Spice Garden</h4>
            <p className="text-muted">Authentic Indian Cuisine</p>
            <p className="text-muted">123 Main St.</p>
            <p className="text-muted">Anytown, USA</p>
          </Col>
          <Col md={4}>
            <h4>Hours</h4>
            <p className="text-muted">Monday - Friday: 11am - 9pm</p>
            <p className="text-muted">Saturday: 12pm - 10pm</p>
            <p className="text-muted">Sunday: Closed</p>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <p className="text-muted">Phone: 555-555-5555</p>
            <p className="text-muted">Email: info@spicegarden.com</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <p className="text-center">© 2023 Spice Garden. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
