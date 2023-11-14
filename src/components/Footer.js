import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  let company = "Solar Moon Analytics, LLC";
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3></h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>
            Copyright © {year} {company}
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
