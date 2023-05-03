/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

const Recipecard = (props) => {
    const { id, name, ingredients, method, rating } = props.recipe;
    console.log(props)
    return (
      <div>
        <Card border="primary" style={{ width: "" }}>
          <Card.Header>
            <Card.Title>{name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="d-flex">
              <Card.Img src="holder.js/100px270" alt="Card image" />
              <div className="list-group-flush">
                <Card.Text>Ingredients</Card.Text>
                {ingredients.map((ingre) => (
                  <ListGroup.Item key={ingre}>{ingre}</ListGroup.Item>
                ))}
              </div>
            </div>
            <Card.Text>{rating}</Card.Text>
            <Card.Text class="border-bottom">Process Method</Card.Text>
            <Card.Text>{method}</Card.Text>
            {/* {method.map((ingre) => (
              <ListGroup.Item key={ingre}>{ingre}</ListGroup.Item>
            ))} */}
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card is content.
            </Card.Text>
            <div className="d-flex ">
              <Button variant="outline-primary" size="lg">
                Favourite
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Recipecard;