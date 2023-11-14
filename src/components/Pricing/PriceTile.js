import { Button, Card, CardBody } from "react-bootstrap";
import React from "react";

function PriceTile({
  label,
  label2,
  label3,
  count,
  setCount,
  priceId,
  price,
  checkoutClicked,
}) {
  return (
    <Card className={"price w-100 m-3"}>
      <CardBody className={"d-flex flex-column"}>
        <div className={"d-flex mb-3 align-items-center"}>
          <div className={"h3"}>{label}</div>
          <div className={"text-muted ps-2"}>{label3}</div>
        </div>
        <div className={"d-flex mb-1 align-content-center"}>
          <div className={"h5 "}>{20 * count}</div>
          <div className={"text-muted ps-1"}> devices per seat</div>
        </div>
        <div className={"d-flex mb-1 align-content-center"}>
          <div className={"h5"}>${price * count}</div>
          <div className={"text-muted ps-1"}> per seat per {label2}</div>
        </div>
        <div className={"flex-grow-1"} />
        <Button
          className={"mt-3"}
          variant="primary"
          type="button"
          onClick={() => checkoutClicked(priceId, count)}
        >
          Choose plan
        </Button>
      </CardBody>
    </Card>
  );
}
export default PriceTile;
