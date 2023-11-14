import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import Features from "../Features/Features";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <Container fluid className="home-section">
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 className={"heading mb-4"}>Welcome to Solar Moon Analytics!</h1>
            <h2 className="heading-name">
              Our platform empowers businesses to seamlessly oversee their solar
              energy infrastructure, offering an array of indispensable
              features, including:
            </h2>
            <div style={{ padding: 50, textAlign: "left" }}>
              <Type />
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <Tilt>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "500px", height: "500px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          {" "}
          <Features />
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
