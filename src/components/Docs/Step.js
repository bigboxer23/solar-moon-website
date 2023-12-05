import { Badge } from "react-bootstrap";
import React from "react";

function Step({ number, title, content }) {
  return (
    <div className={"d-flex flex-column mb-5"}>
      <div className={"d-flex align-items-center "}>
        <Badge className={"me-2 h5"} bg="secondary" pill>
          {number}
        </Badge>

        <div className={"fw-bolder h5"}>{title}</div>
      </div>
      <div className={"step-content"}>{content}</div>
    </div>
  );
}
export default Step;
