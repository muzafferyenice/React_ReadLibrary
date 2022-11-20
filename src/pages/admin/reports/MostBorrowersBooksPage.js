import React from "react";
import MostBorrowersBooks from "../../../components/admin/reports/MostBorrowersBooks";
import BreadCrump from "../../../components/admin/common/BreadCrump";
const MostBorrowersBooksPage = () => {
  return (
    <div>
      <BreadCrump
        title1="DashBoard"
        title3="Most Borrowers Books"
        link1="/budak"
        link2="/budak/reports"
        title2="Reports"
      />
      <MostBorrowersBooks />
    </div>
  );
};

export default MostBorrowersBooksPage;
