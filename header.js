import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar className="navbarCSS" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Expense Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-primary" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
