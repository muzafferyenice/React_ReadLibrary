import React from "react";
import CreateCat from "../../../components/admin/category/CreateCat";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import "./cat.scss";

const CategoryNewPage = () => {
  return (
    <div>
      <BreadCrump />
      <CreateCat />
    </div>
  );
};

export default CategoryNewPage;
