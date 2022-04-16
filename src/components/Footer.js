import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import LogoGray from "../images/wib-logo-gold.svg";
import MailchimpForm from "../components/MailchimpForm";



const SocialMedia = () => {
  return (
    <Row>
      <Button
        variant="light"
        href="https://facebook.com/wibcmu"
        target="_blank"
        className="mr-1"
      >
        <FaFacebookF />
      </Button>
      <Button
        variant="light"
        href="https://instagram.com/wibcmu/"
        target="_blank"
        className="mr-1"
      >
        <FaInstagram />
      </Button>
      <Button
        variant="light"
        href="https://linkedin.com/company/womeninbusiness-carnegie-mellon"
        target="_blank"
        className="mr-1"
      >
        <FaLinkedinIn />
      </Button>
    </Row>
  )
}

const Footer1 = () => {
  return (
    <Row className="mt-4">
      <Col>
        <img src={LogoGray} alt=""width="150" height="150" />
      </Col>
  </Row>   
  )
}
const Footer2 = () => {
  return (
    <Container>
      <Row>
              <br></br>
              <br></br>
      </Row>
      <Row className="mt-2">
        4765 Forbes Ave        
      </Row>   
      <Row className="mt-2">
      Pittsburgh, PA 15213
      </Row>
      <Row className="mt-2">  
      wibcmu@gmail.com            
      </Row>       
    </Container>
  )
}
const Footer3 = () => {
  return (
    <Container>
      <Row>
              <br></br>
              <br></br>
      </Row>
      <Row className="mt-2">
        <a href="https://wibcmu.com/about/"
          rel="noreferrer"
          class="link-secondary"
        >
        About    
        </a>
      </Row>  
      <Row className="mt-2">
        <a href="https://wibcmu.com/events/"
          rel="noreferrer"
          class="link-secondary"
        >
        Events
        </a>
      </Row>  
      <Row className="mt-2">
        <a href="https://wibcmu.com/contact/"
          rel="noreferrer"
          class="link-secondary"
        >
        Contact us   
        </a>
      </Row>      
    </Container>
  )
}
const Footer4 = () => {
  return (
    <Container>
      <Row>
              <br></br>
              <br></br>
      </Row>
      <Row>
      <SocialMedia/>            
      </Row>       
    </Container>
  )
}



const Footer = () => {
  return (
    <div className="mt-5 bg-white">
      <Container className="py-3 mt-3" id="contact">
        <div class="bg-light text-dark">
          <Row>
            <Col>
              <Footer1 />
            </Col>
            <Col>
            <Footer2 />
            </Col>
            <Col>
            <Footer3 />
            </Col>
            <Col>
              <Footer4 />         
            </Col>
          </Row>
        </div> 
      </Container>
    </div>

  );
};

export default Footer;
