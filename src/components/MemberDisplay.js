import React from "react";
import Col from "react-bootstrap/Col";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FaLinkedinIn } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import "../css/styles2.css";

function MemberDisplay(props) {

  const popover = (
    <Popover>
      <Popover.Header className="board-popover-head">{props.title}</Popover.Header>
      <Popover.Body>
      {props.role} <br/> {props.degree}, {props.major} <br/> Class of {props.year}
      </Popover.Body>     
    </Popover>
  );

  return (
    <OverlayTrigger
      placement="right"
      overlay={popover}
    >
      <Col md={3} sm={6} xs={6} className="member-col" onClick={()=>navigate(props.slug)}>
      <div className="team-photo-wrapper">
        <div className="team-photo">
          <GatsbyImage image={props.photo} alt={props.title}/>
        </div>
        <div className="team-description px-3">
          <h5 className="font-weight-bold mt-md-3">{props.title}</h5>
          <a className="icon-link" href={props.linkedIn} target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>                  
        </div>
        
      </div>
      
      </Col>
    </OverlayTrigger>
  );
}

export default MemberDisplay;