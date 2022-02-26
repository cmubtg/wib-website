import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LogoColor from "../images/wib-logo-gold.svg";
import { Link } from "gatsby";

function Navigation() {

  const NavigationStyle = {
    textDecoration: 'none',
  }

  return (
    <div>
      <div >
        <Container>
          <Navbar
            collapseOnSelect
            fluid
            expand="sm"
          >
            <Link to="/">
              <Navbar.Brand href="/" className="py-0 my-0">
                <img
                  src={LogoColor}
                  width="150"
                  height="150"
                  className="align-top"
                  alt="WIB Logo"
                />
              </Navbar.Brand>            
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="flex-column">
              {/* <Nav className="mr-auto"></Nav> */}
              <Nav>
              <Link to="/" style={NavigationStyle}>
                  <Nav.Link as="span" href="/"> 
                    Home
                  </Nav.Link>
                </Link>  
                <Link to="/members" style={NavigationStyle}>
                  <Nav.Link as="span" href="/members"> 
                    Members
                  </Nav.Link>
                </Link>                  
                <Link to="/projects" style={NavigationStyle}>
                  <Nav.Link as="span" href="/projects"> 
                    Projects
                  </Nav.Link>
                </Link>
                <Link to="/events" style={NavigationStyle}>
                  <Nav.Link as="span" href="/events"> 
                    Events
                  </Nav.Link>
                </Link>                     
                <Link to="/alumni" style={NavigationStyle}>
                  <Nav.Link as="span" href="/alumni"> 
                    Alumni
                  </Nav.Link>
                </Link>                       
                <Link to="/contact" style={NavigationStyle}>
                  <Nav.Link as="span" href="/contact"> 
                    Contact
                  </Nav.Link>
                </Link>              
                {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
}

export default Navigation;
