import React, { useEffect, useReducer } from "react";
import { Container, Row } from "react-bootstrap";
import { MutatingDots } from "react-loader-spinner";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.result,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        post: {},
        error: "There was a problem",
      };
    default: {
      return state;
    }
  }
};

const Users = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SUCCESS",
          result: data,
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR",
        });
      });
  }, []);

  return (
    <>
      <Container>
        <Row>
          <div>
            {state.loading ? (
              <div className="container">
                <div className="d-flex justify-content-center align-items-center vh-100">
                  <MutatingDots
                    height="100"
                    width="100"
                    color="#4fa94d"
                    secondaryColor="#4fa94d"
                    radius="12.5"
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              </div>
            ) : (
              state.post.title
            )}
            {state.error || null}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Users;
