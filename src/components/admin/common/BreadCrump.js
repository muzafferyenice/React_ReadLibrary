import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import "./adminMenu.scss";

const BreadCrump = () => {
  return (
    <Breadcrumb className="brdcrmp">
      <Breadcrumb.Item as={Link} to="/admin">
        Dashboard
      </Breadcrumb.Item>
      <Breadcrumb.Item href="http://trartofcoding.com/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrump;
