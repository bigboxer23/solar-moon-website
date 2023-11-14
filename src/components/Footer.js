import React from "react";
import { Container } from "react-bootstrap";
import { MdCopyright, MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  let company = "Solar Moon Analytics, LLC";
  return (
    <Container fluid className="footer container">
      <hr />
      <div className={"d-flex m-4"}>
        <div className={"d-flex flex-column"}>
          <div>
            <MdOutlineEmail className={"button-icon"} />
            info@solarmoonanalytics.com
          </div>
          <div>
            <MdCopyright className={"button-icon"} />
            {year} {company}, All Rights Reserved
          </div>
        </div>
        <div className={"flex-grow-1"} />
        <div className={"me-5"}>
          <div>Company</div>
          <div className={"text-muted smaller-text"}>Roadmap</div>
          <div className={"text-muted smaller-text"}>Changelog</div>
        </div>
        <div className={"d-flex flex-column me-4"}>
          <div>Legal</div>
          <NavLink className={"text-muted smaller-text"} to="/tos">
            Terms of Service
          </NavLink>{" "}
          <NavLink className={"text-muted smaller-text"} to="/privacy">
            Privacy Policy
          </NavLink>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
