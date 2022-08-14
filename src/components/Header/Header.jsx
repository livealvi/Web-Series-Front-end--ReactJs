import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="w-100"
      >
        <Container>
          <Link className="brand text-white" to="/">
            Web Series
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-between"
            id="responsive-navbar-nav"
          >
            <Nav>
              <div>
                <Link className="nav_bar text-white" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="nav_bar text-white" to="/contact">
                  Contact
                </Link>
                <Link className="nav_bar text-white" to="/about">
                  About
                </Link>
              </div>
            </Nav>
            <Nav>
              <div className="">
                <Link className="nav_bar text-white " to="/login">
                  Login
                </Link>
              </div>
              {/* <button
                onClick={() => {
                  localStorage.removeItem("token");
                  history.replace("/signin");
                }}
              >
                Logout
              </button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
