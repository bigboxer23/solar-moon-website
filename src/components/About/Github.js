import React from "react";
import GitHubCalendar from "react-github-calendar";
import {Col, Row} from "react-bootstrap";

function Github() {
  return (
		  <Row>
			  <Col md={8} className="home-about-description">
				  <h1 style={{ fontSize: "2.6em" }}>
					  Platform Contributions
				  </h1>
			  </Col>
			  <GitHubCalendar
					  username="bigboxer23"
					  blockSize={15}
					  blockMargin={5}
					  color="#5178c2"
					  fontSize={16}
					  hideTotalCount={true}
			  />
		  </Row>
  );
}

export default Github;
