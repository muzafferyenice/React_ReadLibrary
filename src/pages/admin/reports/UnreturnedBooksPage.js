import React from "react";
import UnreturnedBooks from "../../../components/admin/reports/UnreturnedBooks";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const UnreturnedBooksPage = () => {
  return (
    <div>
      <BreadCrump
        title1="DashBoard"
        title3="Unreturned Books"
        link1="/budak"
        link2="/budak/reports"
        title2="Reports"
      />
      <UnreturnedBooks />
    </div>
  );
};

export default UnreturnedBooksPage;
