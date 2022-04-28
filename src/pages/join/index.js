import React from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"

import Layout from "../../components/Layout"
import Helmet from "react-helmet"
import BTGCover from "../../images/btg-cover.png";
import JoinPicture from "../../images/wib-join-photo.jpg";

import "../../css/styles2.css";
import MailchimpForm from "../../components/MailchimpForm";



function join(){
    return (
        <Layout>
            <Helmet>
                <title>Become A Member | CMUBTG</title>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:image" content={BTGCover}></meta>
            </Helmet>
            <Container className="mt-md-1 pt-md-4">
             <h1 className="tall-underline">BECOME AN OFFICIAL WIB MEMBER</h1>

             <div id="membership-content">
                <img src={JoinPicture} alt="spring-conference" width="48%"></img>
                <Card id="membership-card">
                    <h1>Requirements</h1>
                    <a href="/executive-board">Meet the Board</a>
                    <a href="/events">Attend 5 Meetings</a>
                    <a href="/executive-board">Schedule a Coffee Chat with an Executive Board Member</a>
                    <a href="/executive-board">Meet your Mentor</a>
                </Card>
             </div>

             <MailchimpForm/>

            </Container>


        </Layout>    
    );
}

export default join;