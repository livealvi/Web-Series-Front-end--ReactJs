import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import service from "../../api/service";

// const initialState = {
//   loading: false,
//   error: "",
//   spinner: "",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SUCCESS":
//       return {
//         loading: false,
//         spinner: action.result,
//         error: "",
//       };
//     case "ERROR":
//       return {
//         loading: false,
//         spinner: "",
//         error: "There was a problem",
//       };
//     default: {
//       return state;
//     }
//   }
// };

const Login = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resp, setResp] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: response } = await service.post("/login", {
        email,
        password,
      });
      // .then((ma) => {
      //   dispatch({
      //     type: "SUCCESS",
      //     result: ma.data,
      //   });
      // })
      // .catch(() => {
      //   dispatch({
      //     type: "ERROR",
      //   });
      // });
      setResp(response);
    } catch (error) {
      console.log(error);
      setResp(error);
    }
  };

  return (
    <div className="login">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="login_form d-flex flex-column align-items-center">
          <div className="">
            <h3>Login</h3>
          </div>
          <Form className="mt-3 mb-3 w-100">
            <div className="text-center" style={{ color: "red" }}>
              {resp}
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              onClick={handleLoginSubmit}
              className="w-100"
              variant="primary"
              type="submit"
            >
              Login
            </Button>
          </Form>
          <div className="mt-1">
            New on our platform?{" "}
            <Link className="linkText" to="/singup">
              Create an account
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

export default Login;
