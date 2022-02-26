import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LogoColor from "../images/wib-logo-gold.svg";
import { Link } from "gatsby";
import Button from 'react-bootstrap/Button'

function Navigation2(){
  return (
    <Container>
    <Navbar bg="white" expand="lg">
      <Navbar.Brand>
        <img
          src={LogoColor}
          width="150"
          height="150"
          alt="WIB Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive"/>
      <Navbar.Collapse id="navbarResponsive">
        <Nav as="ul" className="ms-auto">
          <Nav.Item as="li">
            <Link to="/" className="nav-link" activeClassName="active">
              <p className="nav-link-gold">Home</p>
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/members" className="nav-link" activeClassName="active">
              <p className="nav-link-gold">About</p>
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/projects" className="nav-link" activeClassName="active">
              <p className="nav-link-gold">Executive Board</p>
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/events" className="nav-link" activeClassName="active">
              <p className="nav-link-gold">Events</p>
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/contact" className="nav-link" activeClassName="active">
              <p className="nav-link-gold">Contact</p>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Button variant="outline-warning">Become a Member</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  )
}

export default Navigation2