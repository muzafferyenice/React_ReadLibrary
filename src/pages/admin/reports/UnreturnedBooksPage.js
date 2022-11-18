import React from "react";
import UnreturnedBooks from "../../../components/admin/reports/UnreturnedBooks";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const UnreturnedBooksPage = () => {
  return (
    <div>
      <BreadCrump />
      <UnreturnedBooks />
    </div>
  );
};

export default UnreturnedBooksPage;
