import React from "react";
import { Badge, Card, CardBody, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Step from "./Step";
import uploadChannel from "../../Assets/upload-channel.jpg";
import CopyButton from "../CopyButton";

function Docs() {
  return (
    <div className={"root-page  container min-vh-88"}>
      <div className={"d-flex flex-column ps-5"}>
        <div className={"h3 p-4"}>Connecting your first device</div>

        <Card>
          <CardBody>
            <Step
              number={1}
              title={"Sign Up"}
              content={
                <Link to={"https://app.solarmoonanalytics.com"}>
                  Create Account
                </Link>
              }
            />
            <Step
              number={2}
              title={"Verify your email address"}
              content={
                "Check your email box for a verification code and paste this into the window from the previous step."
              }
            />
            <Step
              number={3}
              title={"Sign up for a plan"}
              content={
                <div>
                  Plans are available monthly or annually in packs of 10
                  devices. (
                  <Link to={"https://solarmoonanalytics.com/pricing"}>
                    see here
                  </Link>
                  )
                </div>
              }
            />
            <Step
              number={4}
              title={"Collect your access key"}
              content={
                <div>
                  Navigate to the{" "}
                  <Link
                    to={"https://app.solarmoonanalytics.com/userManagement"}
                  >
                    user profile section
                  </Link>
                  &nbsp; and locate the access key underneath the API
                  Information section. Copy this for a future step.
                </div>
              }
            />
            <Step
              number={5}
              title={"Login to your Obvius data acquisition server"}
              content={
                <div>
                  Login to your device and navigate to the{" "}
                  <span className={"fw-bolder"}>
                    Log File Data -> Setup/Upload
                  </span>{" "}
                  page.
                </div>
              }
            />
            <Step
              number={6}
              title={"Setup an upload channel"}
              content={
                <div>
                  There are a few things to change in this step:
                  <ul>
                    <li>
                      <div>
                        Update the protocol to{" "}
                        <span className={"fw-bolder"}>
                          {" "}
                          Obvius AcquiSuite XML
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className={"d-flex align-items-center"}>
                        Upload URL should be updated to point to &nbsp;
                        <div className={"fw-bolder"}>
                          http://solarmoonanalytics.com/upload
                        </div>
                        <CopyButton
                          title={"Copy Upload URL"}
                          dataSrc={() => "http://solarmoonanalytics.com/upload"}
                        />
                      </div>
                    </li>
                    <li>
                      Password should be updated with your Access Key retrieved
                      in step 3
                    </li>
                    <li>
                      Optionally set filters to determine which devices are sent
                      to the platform
                    </li>
                    <li>
                      <div>
                        Press the <span className={"fw-bolder"}>Apply</span>{" "}
                        button
                      </div>
                    </li>
                  </ul>
                  <img
                    src={uploadChannel}
                    className="img-fluid pe-4 pt-4"
                    alt="brand"
                  />
                </div>
              }
            />
            <Step
              number={7}
              title={"Trigger sending data from the server to the platform"}
              content={
                <div>
                  Press the <span className={"fw-bolder"}>Upload Data Now</span>{" "}
                  button.
                </div>
              }
            />
            <Step
              number={8}
              title={"Validate device was created"}
              content={
                <div>
                  Navigate to the&nbsp;
                  <Link to={"https://app.solarmoonanalytics.com/sites"}>
                    site management page
                  </Link>{" "}
                  &nbsp;and validate you see your device. Devices will show up
                  under <span className={"fw-bolder"}>No Site</span> until they
                  are added to a site. If no device shows up, validate within
                  the Obvius device's logs whether data has successfully been
                  sent. If a further error occurs, please contact&nbsp;
                  <Link to={"mailto:support@solarmoonanalytics.com"}>
                    support@solarmoonanalytics.com
                  </Link>
                </div>
              }
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Docs;
