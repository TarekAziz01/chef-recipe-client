/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {

  const { signIn } = useContext(AuthContext)
  
  const handleTost = () => {
    toast("Login Success😎😎");
  };

  const handleLogin = (event) => {
    event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      
      signIn(email,password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset();
          handleTost();
        })
        .catch(error => {
          console.log(error)
        })
    
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
              New here?<Link to="/register">Register please</Link>
            </small>
          </p>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <div className="border-bottom border-3 my-3"></div>

        <div className="d-grid gap-2">
          <button type="button" className="btn btn-outline-secondary">
            Continue with Google
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Continue with Github
          </button>
        </div>
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

export default Login;