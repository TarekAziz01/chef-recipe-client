/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bfood from '../../photos/bfood.jpg'

const AboutUs = () => {
    return (
      <section className="about-us py-5">
        <Container>
          <h2 className="text-center mb-5">About us</h2>
          <Row>
            <Col lg={6} md={12}>
              <p className="lead mb-4">
                Welcome to Spice Garden, where we bring the flavors of India to
                your plate. Our restaurant is dedicated to serving delicious,
                authentic Indian cuisine in a warm and inviting atmosphere.
              </p>
              <p className="lead mb-4">
                At Spice Garden, we believe that great food should be
                accompanied by great service. Our friendly staff is committed to
                providing you with a dining experience that will exceed your
                expectations.
              </p>
              <p className="lead mb-0">
                Come visit us today and discover why Spice Garden is the best
                Indian restaurant in town!
              </p>
            </Col>
            <Col
              lg={6}
              md={12}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                src={bfood}
                alt="Spice Garden Restaurant"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default AboutUs;



// const AboutUs = () => {
//   return (
   
//   );
// };

// export default AboutUs;
