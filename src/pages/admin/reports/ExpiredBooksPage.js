import React from "react";
import ExpiredBooks from "../../../components/admin/reports/ExpiredBooks";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const ExpiredBooksPage = () => {
  return (
    <div>
      <BreadCrump
        title1="DashBoard"
        title3="Expired Books"
        link1="/budak"
        link2="/budak/reports"
        title2="Reports"
      />
      <ExpiredBooks />
    </div>
  );
};

export default ExpiredBooksPage;
