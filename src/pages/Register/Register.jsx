/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.url.value;
        console.log(name, email,password, photoUrl);

    }

    return (
        <div className='w-25 mx-auto mt-5'>
            <h5 className='mb-4'>Please Register !!!</h5>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="name" name='name' placeholder="Your name" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name='email' placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" name='password' placeholder="Password" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicUrl">
            <Form.Control type="link" name='url' placeholder="Photo url" />
          </Form.Group>
          
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
};

export default Register;