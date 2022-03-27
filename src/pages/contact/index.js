import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Layout from "../../components/Layout"

import emailjs from '@emailjs/browser';
import Helmet from "react-helmet"
import BTGCover from "../../images/btg-cover.png";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        name: "",
        email: "",
        message: "",
        subject: ""
      };

    // this.serviceID = "service_spe5xqb";
    // this.templateID = "template_frd8g5y";    
    // this.userID = "user_630XM9CowdEeazima9GIF";
    
    // This will need to be changed to the wib email
  }


  handleChange = (param, event) => {
    this.setState({ [param]: event.target.value })
  }

  handleSubmit(event) {
    
    event.preventDefault();

    let templateParams = {
      subject: this.state.subject,
      message: this.state.message,
      name: this.state.name,
      email: this.state.email,    
    }

    emailjs.send(
      this.serviceID, 
      this.templateID, 
      templateParams,
      this.userID
    )
        .then((result) => {
          alert("Message Sent! Thank you.")
        })
        .catch((error) => {
          alert(error.text)
        })
  }

  
  render() {
    
    return (
      <Layout>
        <Helmet>
          <title>Contact | CMUBTG</title>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
        </Helmet>
        <Container className="mt-md-1 pt-md-4">
          <Row className="mt-1">
            <Col>
              <h1 className="display-3 text-black font-weight-boldest">Contact Us</h1>
            </Col>
          </Row>

          <Row className="pt-1 mt-4 ms-5 ps-5 me-5 pe-5">
            <p style={{ textAlign: "center" }}>Have any questions or suggestions for us? 
            Fill out the form below and we will try to get back to you as soon as possible. 
            If you would like to join our mailing list, please fill out the form and let us know 🙂</p>
          </Row>

          <Row className="pt-1 mt-5">
            <Col className="ms-5 ps-5">
              <Row>
                <h1 className="display-10 text-black">Contact Information</h1>
              </Row>
              <Row className="pt-1 mt-4">      
                <p>Feel free to also contact us via email or Instagram!</p>
                <p>Instagram: <a href="https://www.instagram.com/wibcmu/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} >@wibcmu</a></p>
                <p>Email: <a href = "mailto: wibcmu@gmail.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>wibcmu@gmail.com</a></p>                
              </Row>            
            </Col>
            <Col>
              <Row>
                <h1 className="display-10 text-black">Send Us a Message!</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <Row className="pt-1 mt-4 col-md-8">
                    <input 
                      class="form-control"
                      type="text" 
                      value={this.state.name} 
                      onChange={this.handleChange.bind(this, "name")} 
                      placeholder="Name"
                      name="name"
                    />
                  </Row>
                  
                  <Row className="pt-1 mt-4 col-md-8">
                    <input 
                      class="form-control"
                      type="email" 
                      value={this.state.email} 
                      onChange={this.handleChange.bind(this, "email")} 
                      placeholder="Email"
                      name="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                  </Row>

                  <Row className="pt-1 mt-4 col-md-8">
                    <input 
                      class="form-control"
                      type="text" 
                      value={this.state.subject} 
                      onChange={this.handleChange.bind(this, "subject")} 
                      placeholder="Subject"
                      name="subject"
                    />
                  </Row>            

                  <Row className="pt-1 mt-4 col-md-8">
                    <textarea 
                      class="form-control"
                      rows="5"
                      value={this.state.message} 
                      onChange={this.handleChange.bind(this, "message")}    
                      placeholder="Write your message here"    
                      name="message"      
                    />              
                  </Row>            

                  <Row className="pt-4 mt-3 col-md-2">
                    <button 
                      type="submit" 
                      value="Submit" 
                      class="btn btn-primary" 
                    >
                      Submit
                    </button>
                  </Row>      
                </form>                    
              </Row>                        
            </Col>
          </Row>
          
      
        </Container>
          

        </Layout>
      
    );
  }
}

export default Contact

