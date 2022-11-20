import React from "react";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import Reports from "../../../components/admin/reports/Reports";

const ReportsPage = () => {
  return (
    <>
      <BreadCrump title1="DashBoard" title3="Reports" link1="/budak" />
      <Reports />
    </>
  );
};

export default ReportsPage;
