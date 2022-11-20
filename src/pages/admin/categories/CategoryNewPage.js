import React from "react";
import CreateCat from "../../../components/admin/category/CreateCat";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import "./cat.scss";

const CategoryNewPage = () => {
  return (
    <div>
      <BreadCrump
        title1="DashBoard"
        title3="New Category"
        link1="/budak"
        link2="/budak/categories"
        title2="Categories"
      />
      <CreateCat />
    </div>
  );
};

export default CategoryNewPage;
