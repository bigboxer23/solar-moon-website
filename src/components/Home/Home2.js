import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Projects from "../Projects/Projects";
import Features from "../Features/Features";
import Github from "../About/Github";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> Solar Moon Analytics</span>
            </h1>
            <p className="home-about-body">
              We are a Minneapolis, MN based software development firm
              passionate about clean energy. We leverage the power of data and
              AI to provide best in class tools for helping generating ROI from
              your solar energy devices.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
