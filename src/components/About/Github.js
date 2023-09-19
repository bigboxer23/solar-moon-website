import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Col, Row } from "react-bootstrap";

const minimalTheme = {
  dark: ["#ebebeb", "#354068", "#405081", "#4a6098", "#556fb1"],
  light: ["#ebebeb", "#354068", "#405081", "#4a6098", "#556fb1"],
  // for `dark` the default theme will be used
};
function Github() {
  return (
    <Row>
      <Col md={8} className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>Platform Contributions</h1>
      </Col>
      <GitHubCalendar
        username="bigboxer23"
        blockSize={15}
        blockMargin={5}
        color="#5178c2"
        theme={minimalTheme}
        fontSize={16}
        hideTotalCount={true}
      />
    </Row>
  );
}

export default Github;
