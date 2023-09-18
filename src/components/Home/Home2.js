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
              As a Minneapolis-based software development firm with a strong
              commitment to clean energy, we specialize in utilizing data and AI
              technologies to create top-tier solutions for maximizing the ROI
              of solar energy devices. Our mission is to lead the way in
              leveraging technology to make clean energy more accessible and
              efficient for everyone.
              <br />
              <br />
              <span className="purple">Location:</span> Based in Minneapolis,
              Minnesota, our location reflects our commitment to serving both
              local and global markets.
              <br />
              <br />
              <span className="purple">Mission and Passion:</span> Our core
              mission revolves around clean energy. We are deeply passionate
              about addressing environmental concerns and reducing the carbon
              footprint. This passion drives our teams to innovate and
              contribute to the clean energy sector.
              <br />
              <br />
              <span className="purple">Data and AI Expertise:</span> At our
              core, we harness the potential of cutting-edge technologies. We
              specialize in data analytics and artificial intelligence (AI).
              These tools are pivotal in solving complex challenges.
              <br />
              <br />
              <span className="purple">Best-in-Class Solutions:</span> We don't
              settle for mediocrity. Our commitment to excellence drives us to
              create industry-leading solutions. Our aim is to deliver tools and
              services that set a new standard.
              <br />
              <br />
              <span className="purple">Solar Energy Focus:</span> We are
              particularly focused on solar energy. Solar power is a sustainable
              and renewable energy source that holds immense potential. We aim
              to optimize the benefits of solar energy by providing innovative
              software solutions.
              <br />
              <br />
              <span className="purple">ROI Enhancement:</span> Our primary
              objective is to enhance the return on investment (ROI) for
              individuals and organizations investing in solar energy devices.
              We achieve this through data-driven insights and AI-driven
              optimizations.
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
