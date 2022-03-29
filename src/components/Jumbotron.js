import React from "react";
import Col from "react-bootstrap/Col";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FaLinkedinIn } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image"

function Jumbotron({children}) {

  return (
    <div class="jumbotron jumbotron-fluid">
      <div>
        {children}
      </div>
    </div>
  )
}

export default Jumbotron