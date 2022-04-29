import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LogoColor from "../images/wib-logo-horizontal-2.png";
import { Link } from "gatsby";
import Button from 'react-bootstrap/Button'
import NavDropdown from "react-bootstrap/NavDropdown"

function Navigation2(props){
  return (
    <Container>
    <Navbar expand="lg">
      <Navbar.Brand>
        <img
          src={LogoColor}
          width="235"
          height="55"
          alt="WIB Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive"/>
      <Navbar.Collapse id="navbarResponsive">
        <Nav as="ul" className="ms-auto">
          <Nav.Item as="li">
            <Link to="/" className="nav-link" activeClassName="active">
              <p className={props.text}>Home</p>
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/executive-board" className="nav-link" activeClassName="active">
              <p className={props.text}>Executive Board</p>
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/events" className="nav-link" activeClassName="active">
              <p className={props.text}>Events</p>
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/past-events" className="nav-link" activeClassName="active">
              <p className={props.text}>Past Events</p>
            </Link>
          </Nav.Item>
          {/* <NavDropdown id="nav-dropdown"
            title={
              <span className={props.text}>Events</span>
            }
          >
            <NavDropdown.Item>
            <Link as="span" to="/contact" className="nav-link" activeClassName="active">
                <span className={props.text}>Contact</span>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link as="span" to="/contact" className="nav-link" activeClassName="active">
                <span className={props.text}>Contact</span>
              </Link>
            </NavDropdown.Item> 
          </NavDropdown> */}
          <Nav.Item as="li">
            <Link to="/contact" className="nav-link" activeClassName="active">
              <p className={props.text}>Contact</p>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Button className={props.button}>
              <Link to="/join">Become a Member</Link>
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  )
}

export default Navigation2