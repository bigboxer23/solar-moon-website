import { Card, CardBody } from "react-bootstrap";
import React, { useState } from "react";

import PriceTile from "./PriceTile";

function PricingPage() {
  const [monCount, setMonCount] = useState(1);
  const [yearCount, setYearCount] = useState(1);

  const checkoutClicked = () => {
    window.location.href = "https://app.solarmoonanalytics.com";
  };

  return (
    <div className={"root-page  container min-vh-95"}>
      <div className={"d-flex ps-5"}>
        <div className={"h2 p-4"}>
          Choose a <span className="purple">Plan</span>
        </div>
        {/* <div className={"h2 p-4"}>Choose a Plan</div>*/}
      </div>
      <div className={"d-flex ms-3 me-3 justify-content-center flex-wrap"}>
        <PriceTile
          label={"Monthly"}
          label2={"mo"}
          label3={""}
          count={monCount}
          setCount={setMonCount}
          price={40}
          priceId={"price_1O6zd9A8dDzAfRCMVFwdeAyJ"}
          checkoutClicked={checkoutClicked}
        />
        <PriceTile
          label={"Yearly"}
          label2={"yr"}
          label3={"Save 10%!"}
          count={yearCount}
          setCount={setYearCount}
          price={432}
          priceId={"price_1O6zdQA8dDzAfRCMdAdXq7Bw"}
          checkoutClicked={checkoutClicked}
        />
      </div>
      <Card className={"m-5"}>
        <CardBody>
          <div className={"h5 align-self-start"}>Plans include:</div>
          <div className={"text-muted"}>
            <ul>
              <li>Up to 20 devices per seat</li>
              <li>Site level data via virtual devices</li>
              <li>Live data reporting</li>
              <li>Historic data export</li>
              <li>Device alerting via email</li>
              <li>Periodic account digest</li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default PricingPage;
