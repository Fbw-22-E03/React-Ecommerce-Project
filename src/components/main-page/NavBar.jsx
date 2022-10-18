import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Route, Link } from "react-router-dom";


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <div className="d-flex">
          <button type="button" className="btn btn-light btn-lg">
            <Link to="/Registration">
              <i className="bi bi-person"></i>
            </Link>
          </button>
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-light dropdown-toggle btn-lg"
              data-toggle="dropdown"
            >
              <i className="bi bi-basket"></i>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Option A
              </a>
              <a className="dropdown-item" href="#">
                Option B
              </a>
              <a className="dropdown-item" href="#">
                Option C
              </a>
              <a className="dropdown-item" href="#">
                Option D
              </a>
            </div>
          </div>
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
