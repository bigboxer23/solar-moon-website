import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeatureCards from "./FeatureCards";
import dataView from "../../Assets/Features/data-view.svg";
import aggregation from "../../Assets/Features/aggregation.svg";
import configurable from "../../Assets/Features/configurable.svg";
import exportData from "../../Assets/Features/export.svg";
import alerting from "../../Assets/Features/alerting.svg";
import reporting from "../../Assets/Features/reporting.svg";
import logo from "../../Assets/logo.svg";

function Features() {
  return (
    <Container fluid>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <img src={logo} className="img-fluid logo logo-2" alt="brand" />
              <span className="purple"> Solar Moon Analytics</span> Features
            </h1>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <FeatureCards
              imgPath={aggregation}
              isBlog={false}
              title="Aggregation"
              description="Our system provides the capability to manage a multitude of devices seamlessly.
              You can group devices together into virtual sites, allowing you to organize them logically and efficiently.
              All these devices and virtual sites are accessible through a single, unified dashboard. This central hub simplifies your management tasks."
            />
          </Col>

          <Col md={4} className="project-card">
            <FeatureCards
              imgPath={configurable}
              isBlog={false}
              title="Configurability"
              description="Our dashboards are highly flexible. They can be tailored them to meet your specific needs, whether you want to monitor individual devices, or specific clusters/sites. Virtual devices provide aggregated views of specific clusters or sites. This feature simplifies the monitoring of complex networks."
            />
          </Col>

          <Col md={4} className="project-card">
            <FeatureCards
              imgPath={dataView}
              isBlog={false}
              title="Live Data View"
              description="You can explore live data from all your devices in a tabular format. This real-time view allows you to monitor the current status and performance of your devices."
            />
          </Col>
          <Col md={4} className="project-card">
            <FeatureCards
              imgPath={exportData}
              isBlog={false}
              title="Historic Data Export"
              description="Our system allows you to export historic data from user-defined time periods. This feature is valuable for analysis, compliance reporting, and decision-making."
            />
          </Col>
          <Col md={4} className="project-card">
            <FeatureCards
              imgPath={alerting}
              isBlog={false}
              title="Alerting"
              description="Receive timely alerts via email or text message when our system detects anomalies or irregularities in device behavior. Customize alert thresholds to match your specific requirements. This ensures that you're only notified when deviations from normal operation warrant attention."
            />
          </Col>
          <Col md={4} className="project-card">
            <FeatureCards
              imgPath={reporting}
              isBlog={false}
              title="Reporting"
              description="Our system can automatically generate and send emailed digests of device information at regular intervals. These reports include key data points and insights, helping you track the return on investment (ROI) of your systems. This feature enables you to assess the efficiency and profitability of your device network."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Features;
