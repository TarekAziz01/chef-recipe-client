/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <p>Please fill out the form below to contact us.</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Spice Garden</h3>
          <p>123 Main St.</p>
          <p>New York, NY 10001</p>
          <p>Phone: (555) 555-5555</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
