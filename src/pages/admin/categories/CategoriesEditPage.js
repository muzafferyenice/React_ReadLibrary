import React from "react";
import CategoryUpdateForm from "../../../components/admin/category/CategoryUpdateForm";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const CategoriesEditPage = () => {
  return (
    <>
      <BreadCrump
        title1="DashBoard"
        title3="Categories Edit"
        link1="/budak"
        link2="/budak/categories"
        title2="Categories"
      />
      <CategoryUpdateForm />
    </>
  );
};

export default CategoriesEditPage;
