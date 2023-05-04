/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FeatureSection = () => {
  return (
    <div className="feature-section py-5">
      <Container>
        <h2 className="text-center my-5 ">Our Features</h2>
        <Row>
          <Col lg={4} md={6}>
            <Card className="text-center shadow">
              <Card.Body>
                <i className="fas fa-utensils fa-3x mb-3"></i>
                <Card.Title className="mb-3">
                  Authentic Indian Cuisine
                </Card.Title>
                <Card.Text className="text-muted">
                  We use only the freshest ingredients and traditional Indian
                  spices to create dishes that will transport your taste buds to
                  the streets of Mumbai or the palaces of Rajasthan.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="text-center shadow">
              <Card.Body>
                <i className="fas fa-wine-glass-alt fa-3x mb-3"></i>
                <Card.Title className="mb-3">
                  Wide Selection of Beverages
                </Card.Title>
                <Card.Text className="text-muted">
                  In addition to our flavorful dishes, we also offer a wide
                  selection of refreshing beverages, including Indian tea,
                  lassi, and beer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="text-center shadow">
              <Card.Body>
                <i className="fas fa-hand-holding-heart fa-3x mb-3"></i>
                <Card.Title className="mb-3">
                  Warm and Inviting Atmosphere
                </Card.Title>
                <Card.Text className="text-muted">
                  At Spice Garden, we believe that great food should be
                  accompanied by great service. Our friendly staff is committed
                  to providing you with a dining experience that will exceed
                  your expectations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeatureSection;
