/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";



const Recipecard = (props) => {
    const {name, ingredients, method, rating,photo } = props.recipe;

    const handleTost = () => {
      toast("🙌Added to Favourit🙌");
    };

    return (
      <div className="d-flex align-items-stretch">
        <Card
          className="position-relative"
          border="primary"
          style={{ width: "", height: "" }}
        >
          <Card.Header>
            <Card.Title>{name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="d-flex">
              <Card.Img
                style={{ height: "286px" }}
                src={photo}
                alt="Card image"
              />
            </div>
            <div className="d-flex align-items-center gap-2">
              <Card.Text className="mt-3">{rating}</Card.Text>
              <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
            </div>
            <div className="mb-3">
              <h5>Ingredients</h5>
              {ingredients.map((ingre) => (
                <ListGroup.Item key={ingre}>{ingre}</ListGroup.Item>
              ))}
            </div>
            <div className='mb-5'>
              <h5 className="border-bottom">Process Method</h5>
              <Card.Text>{method}</Card.Text>
            </div>
            <div className="mt-auto ">
              <Button
                onClick={handleTost}
                className="d-flex align-items-end position-absolute bottom-0 py-2"
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