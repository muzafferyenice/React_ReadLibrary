import React from "react";
import ExpiredBooks from "../../../components/admin/reports/ExpiredBooks";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const ExpiredBooksPage = () => {
  return (
    <div>
      <BreadCrump />
      <ExpiredBooks />
    </div>
  );
};

export default ExpiredBooksPage;
