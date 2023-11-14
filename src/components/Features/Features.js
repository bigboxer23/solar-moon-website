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
              description="Solar Moon Analytics provides the capability to manage a multitude of devices seamlessly.
              Devices can be grouped together into virtual sites, allowing them to be organized logically and efficiently.
              All these devices and virtual sites are accessible through a single, unified dashboard. This central hub simplifies managing your devices."
            />
          </Col>

          <Col md={4} className="project-card">
            <FeatureCards
              imgPath={configurable}
              isBlog={false}
              title="Flexibility"
              description="Dashboards can be tailored to meet your specific needs, whether you want to monitor individual devices, or aggregated sites. Virtual devices provide collected views of specific clusters or sites, so larger trends can be surfaced."
            />
          </Col>

          <Col md={4} className="project-card">
            <FeatureCards
              imgPath={dataView}
              isBlog={false}
              title="Live Data View"
              description="Explore live data from all your devices in a tabular format. This real-time view allows you to monitor the current status and performance of your devices. Filter down by time period, site or individual devices."
            />
          </Col>
          <Col md={4} className="project-card">
            <FeatureCards
              imgPath={exportData}
              isBlog={false}
              title="Historic Data Export"
              description="All collected data is available for export. Anything shown in the live data view can be exported into csv format. Reports can be useful for external analysis, compliance reporting, and decision-making."
            />
          </Col>
          <Col md={4} className="project-card">
            <FeatureCards
              imgPath={alerting}
              isBlog={false}
              title="Alerting"
              description="Receive timely alerts via email when our system detects anomalies or irregularities in device behavior. Customize alert thresholds to match your specific requirements. This ensures that you're only notified when deviations from normal operation warrant attention."
            />
          </Col>
          <Col md={4} className="project-card">
            <FeatureCards
              imgPath={reporting}
              isBlog={false}
              title="Reporting"
              description="Automatically generate and receive emailed digests of device information at regular intervals. Reports include key data points and insights, enabling assessment of the efficiency and profitability of your devices, as well as helping track the return on investment (ROI) of devices."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Features;
