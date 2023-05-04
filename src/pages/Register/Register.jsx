/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [regError, setRegError] = useState('');
  const [show, setShow] = useState(false);

  const { user, createUser } = useContext(AuthContext);
  // console.log(createUser)


   const handleTost = () => {
      toast("Registration Success.Welcome to Haveli😉😉");
    };

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.url.value;
        
        createUser(email,password)
          .then(result => {
            result.displaName = name;
            result.photoURL = photoUrl;
            const loggedUser = result.user;
            form.reset();
            setRegError('');
            handleTost();
          })
          .catch(error => {
            console.log(error.message)
            setRegError(error.message)
          })

    }

    return (
      <div className="w-25 mx-auto mt-5">
        <h5 className="mb-4">Please Register</h5>
        {regError && <small className="text-warning">{regError}</small>}
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="name" name="name" placeholder="Your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
            />
            <p onClick={() => setShow(!show)}>
              <small>
                {show ? (
                  <span>Hide Password</span>
                ) : (
                  <span> Show Password</span>
                )}
              </small>
            </p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUrl">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control type="link" name="url" placeholder="Photo url" />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <p>
            <small>
              Already have an account? <Link to="/login">Login</Link>
            </small>
          </p>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
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

export default Register;