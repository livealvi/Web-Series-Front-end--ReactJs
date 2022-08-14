import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="signup_form d-flex flex-column align-items-center">
          <div className="">
            <h3>Sign Up</h3>
          </div>
          <Form className="mt-3 mb-3 w-100">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <div className="mt-1">
            Already have an account?{" "}
            <Link className="linkText" to="/login">
              Login
            </Link>
          </div>
          <div className="m-2">
            <span>OR</span>
          </div>
          <div className="">
            <Link className="linkText" to="/">
              Goto Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
