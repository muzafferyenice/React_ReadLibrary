import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import "./adminMenu.scss";

const BreadCrump = (props) => {
  return (
    <Breadcrumb className="brdcrmp">
      <Breadcrumb.Item linkProps={{ to: props.link1 }} linkAs={Link}>
        {props.title1}
      </Breadcrumb.Item>

      <Breadcrumb.Item linkProps={{ to: props.link2 }} linkAs={Link}>
        {props.title2}
      </Breadcrumb.Item>

      <Breadcrumb.Item active> {props.title3}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrump;
