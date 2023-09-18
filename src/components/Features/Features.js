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
			<Container fluid >
				<Container>
					<Row>
						<Col md={8} className="home-about-description">
							<h1 style={{ fontSize: "2.6em" }}>
								<img src={logo} className="img-fluid logo logo-2" alt="brand" /><span className="purple"> Solar Moon Analytics</span> Features
							</h1>
						</Col>
					</Row>
					<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
						<Col md={4} className="project-card">
							<FeatureCards
									imgPath={aggregation}
									isBlog={false}
									title="Aggregation"
									description="Manage multiple devices grouped together into virtual sites, all on one dashboard."
							/>
						</Col>

						<Col md={4} className="project-card">
							<FeatureCards
									imgPath={configurable}
									isBlog={false}
									title="Configurability"
									description="Dashboards are flexible enough to scale down to individual devices, or can show whole fleets of devices. Virtual devices allow rolled up views of specific clusters or sites."
							/>
						</Col>

						<Col md={4} className="project-card">
							<FeatureCards
									imgPath={dataView}
									isBlog={false}
									title="Live Data View"
									description="Explore live data from all devices in a tabular format."
							/>
						</Col>
						<Col md={4} className="project-card">
							<FeatureCards
									imgPath={exportData}
									isBlog={false}
									title="Historic Data Export"
									description="Export historic data from user defined time periods."
							/>
						</Col>
						<Col md={4} className="project-card">
							<FeatureCards
									imgPath={alerting}
									isBlog={false}
									title="Alerting"
									description="Alerting via e-mail or text message when device anomalies are detected. User configurable thresholds for messaging can be set."
							/>
						</Col>
						<Col md={4} className="project-card">
							<FeatureCards
									imgPath={reporting}
									isBlog={false}
									title="Reporting"
									description="Emailed digests of device information can be sent out at a regular cadence to show ROI of systems."
							/>
						</Col>
					</Row>
				</Container>
			</Container>
	);
}

export default Features;
