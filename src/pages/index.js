import React from "react";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Companies from "../components/Companies";
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import BTGCover from "../images/btg-cover.png";
import Jumbotron from "../components/Jumbotron";
import Navigation2 from "../components/Navigation2"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap"
import { navigate } from "gatsby"

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | CMUBTG</title>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={BTGCover}></meta>
      </Helmet>
      <Jumbotron>
        <Navigation2/>
        <div class="overlay">
          <h1 class="display-3 text-white font-weight-boldest">Carnegie Mellon University</h1>
          <h1 class="display-3 text-white  font-weight-boldest">Women in Business</h1>
        </div>
      </Jumbotron>

      <Container>
        <Row className="pt-1 mt-5">
          <h1 class="text-center display-4">OUR MISSION</h1>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="md-4" style={{ backgroundColor:'#0A547'}}>
          <Card className="blue-card">
            <Card.Body>
              <Card.Title>
                <h3 class="text-center display-6 nav-link-gold" >Education</h3>
              </Card.Title>
              <Card.Text className="nav-link-gold">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa. 
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col className="md-4">
          <Card className="blue-card">
            <Card.Body>
              <Card.Title>
                <h3 class="text-center display-6 nav-link-gold">Networking</h3>
              </Card.Title>
              <Card.Text className="nav-link-gold">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa. 
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col className="md-4">
          <Card className="blue-card">
            <Card.Body>
              <Card.Title>
                <h3 class="text-center display-6 nav-link-gold">Family</h3>
              </Card.Title>
              <Card.Text className="nav-link-gold">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa. 
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="pt-1 mt-5">
          <h3 className="text-center">Become a Member!</h3>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col onClick={()=>navigate("members/")}>
            <div className="yellow-col text-center p-3">
              <p className="background-blue">Visit our membership page</p>
            </div>
          {/* <Button variant="outline-warning" className="d-flex">Become a Member</Button> */}
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>

      <Container className="blue-card">
      <Row className="pt-1 mt-5">
          <h1 class="text-center display-4 nav-link-gold">EVENT HIGHLIGHTS</h1>
      </Row>
      <p class="nav-link-gold">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
      </p>
      </Container>
    </div>
  );
}

export default Home;
