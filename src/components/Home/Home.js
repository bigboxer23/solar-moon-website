import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import Home2 from "./Home2";
import Features from "../Features/Features";
import Particle from "../Particle";
import Github from "../About/Github";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to Solar Moon Analytics!{" "}
              </h1>

              <h1 className="heading-name">
                Our platform empowers businesses to efficiently manage all their
                solar energy devices with:
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "500px", height: "500px" }}
              />
            </Col>
          </Row>
          <Row>
            {" "}
            <Features />
          </Row>
          <Row>
            {" "}
            <Home2 />
          </Row>
          <Row>
            {" "}
            <Github />
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
