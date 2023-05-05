/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LazyLoad from "react-lazy-load";

const ChefCard = (props) => {
    const { name, id, likes, description, experience, photo, numRecipes, recipes } = props.chef;
    return (
      <Col md={6} lg={4}>
        <Card style={{ width: "" }} className="m-2">
          <LazyLoad height={""}>
            <Card.Img
              style={{ height: "286px" }}
              className="img-fluid object-fit-cover"
              variant="top"
              src={photo}
            />
          </LazyLoad>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Experience of {experience}</ListGroup.Item>
            <ListGroup.Item>{likes} People Likes </ListGroup.Item>
            <ListGroup.Item>Number of Recipe {numRecipes}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Link to={`/chef/${id}`}>
              {/* <Link to={`/category/${category_id}`}></Link> */}
              <Button variant="outline-primary" size="lg">
                View Recipes
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default ChefCard;