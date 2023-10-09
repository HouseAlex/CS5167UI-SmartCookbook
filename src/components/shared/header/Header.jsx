import { NavItem } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { AppBar, Container, Typography } from "@mui/material";

function Header() {
  return (
    <Container className="title">
      <Navbar expand="md" className="fixed-top d-flex justify-context-between nav-setting">
        <Navbar.Brand href="/search">Cookbook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href="/search">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/new-recipe">New Recipe</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/my-recipes">My Recipes</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
