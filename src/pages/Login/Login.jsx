/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBeer, FaGithub, FaGoogle } from "react-icons/fa";


const Login = () => {
  const [errorLogin, setErrorLogin] = useState('')
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location);
  const from = location.state?.from?.pathname || "/";

  const { googleSignin, githubSignin, signIn, user } = useContext(AuthContext);
  
  const handleTost = () => {
    toast("Login Success😎😎");
  };

  const handleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        handleTost();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubSignin = () => {
    githubSignin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        handleTost();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleLogin = (event) => {
    event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      
      signIn(email,password)
        .then(result => {
          const loggedUser = result.user;
          form.reset();
          navigate(from, { replace: true });
          setErrorLogin('');
          handleTost();
        })
        .catch(error => {
          console.log(error);
          setErrorLogin(error.message);
        })
    
  };

    return (
      <div className="w-25 mx-auto mt-5 d-grid gap-2">
        <h5 className="mb-4">Please Login</h5>
        {errorLogin && <small className="text-warning">{errorLogin}</small>}
        <Form onSubmit={handleLogin} >
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
          <button
            onClick={handleGoogleSignin}
            className="btn btn-outline-primary"
          >
            <FaGoogle /> Continue with Google
          </button>

          <button
            onClick={handleGithubSignin}
            className="btn btn-outline-primary"
          >
            <FaGithub /> Continue with Github
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