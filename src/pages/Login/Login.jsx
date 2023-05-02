/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = (event) => {
      event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };

    return (
      <div className="w-25 mx-auto mt-5 d-grid gap-2">
        <h5 className="mb-4">Please Login !!!</h5>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <p>
            <small>
              {" "}
              New here?<Link to="/register">Register please</Link>{" "}
            </small>
          </p>
          <Button size="lg" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="border-bottom border-3 my-3"></div>

        <div className="d-grid gap-2">
          <Button variant="secondary" size="lg">
            Continue with Google
          </Button>
          <Button variant="secondary" size="lg">
            Continue with Github
          </Button>
        </div>
      </div>
    );
};

export default Login;