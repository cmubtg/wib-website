import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Layout from "../components/Layout"

import MailchimpForm from "../components/MailchimpForm";
import Helmet from "react-helmet"
import BTGCover from "../images/btg-cover.png";

class BecomeMember extends React.Component {
  
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
              <h1 className="display-4 text-black font-weight-boldest">Become an Official WIB Member!</h1>
            </Col>
          </Row>

          <Row className="pt-1 mt-4 ms-2">
            <Col>
              <div className = 'border-0' style = {{backgroundColor:'black', color: 'white'}}>
                Image here
              </div>
            </Col>
            <Col>
              <div className = 'border-0' style = {{backgroundColor:"#0A5471", color: 'white', textAlign: "center"}}>
                <p>REQUIREMENTS</p>
                <p>Attend 3 Meetings</p>
                <p>Schedule a Coffee Chat with an Executive Board Member</p>                  
              </div>            
            </Col>
          </Row>  
          <Row className="mt-4 mb-4">
            <div className = 'border-0' style = {{backgroundColor:'white', color: '#0A5471', textAlign: "center"}}>
              Sign up for our mailing list to stay updated with WIB events and new opportunities!
            </div>            
          </Row>   
          <div style = {{display:'block', margin:'auto'}}>
            <MailchimpForm />
          </div>                             
         
        </Container>
      
        

        </Layout>
      
    );
  }
}

export default BecomeMember

