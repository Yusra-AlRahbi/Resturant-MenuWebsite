import React from "react";
import { Button, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../assets/img/logo.jpg";

function NavBar() {
  return (
    <Row>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-logo">
              <img className="img-logo" src={logo} alt="logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="mx-2"
                aria-label="Search"
              />
              <button className="btn-search">Search</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export default NavBar;
