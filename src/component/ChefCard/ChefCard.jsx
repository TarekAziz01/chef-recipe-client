/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCard = (props) => {
    const { name, id, likes, description, experience, photo, numRecipes, recipes } = props.chef;
    return (
      <Card style={{ width: "18rem" }} className="m-2">
        <Card.Img variant="top" src={photo} />
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
    );
};

export default ChefCard;