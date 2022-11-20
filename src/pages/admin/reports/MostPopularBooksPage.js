import React from "react";
import MostPopularBooks from "../../../components/admin/reports/MostPopularBooks";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const MostPopularBooksPage = () => {
  return (
    <div>
      <BreadCrump
        title1="DashBoard"
        title3="Most Popular Books"
        link1="/budak"
        link2="/budak/reports"
        title2="Reports"
      />
      <MostPopularBooks />
    </div>
  );
};

export default MostPopularBooksPage;
