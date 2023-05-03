/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Recipecard = (props) => {
    const { id, name, ingredients, method, rating } = props.recipe;
    console.log(props);

    const handleTost = () => {
      toast("🙌Added to Favourit🙌");
    };

    return (
      <div className="d-flex align-items-stretch">
        <Card border="primary" style={{ width: "", height: "" }}>
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
            <div className="mt-auto w-100">
              <Button
                onClick={handleTost}
                className="align-self-end"
                variant="outline-primary"
                size="lg"
              >
                Favourite
              </Button>
            </div>
          </Card.Body>
        </Card>
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
      </div>
    );
};

export default Recipecard;