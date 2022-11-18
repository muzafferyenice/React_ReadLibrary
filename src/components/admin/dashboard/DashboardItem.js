import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./dashboardItem.scss";
import { BsSquare } from "react-icons/bs";
const DashBoardItem = (props) => {
  const { reportName, reportNum, reportIcon } = props;
  return (
    <div className="dashboard-item">
      <div>
        <p>
          <BsSquare className="square" />
          &nbsp;
          {reportName}
        </p>
        <h3>{reportNum}</h3>
      </div>
      <div>{reportIcon}</div>
    </div>
  );
};
export default DashBoardItem;
