import React from "react";
import Categories from "../../../components/admin/category/Categories";
import CategorySearch from "../../../components/admin/category/CategorySearch";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const CategoriesPage = () => {
  return (
    <>
      <BreadCrump title1="DashBoard" title3="Categories" link1="/budak" />
      <CategorySearch />
      <Categories />
    </>
  );
};

export default CategoriesPage;
