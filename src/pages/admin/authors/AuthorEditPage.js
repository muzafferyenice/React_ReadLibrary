import React from "react";
import AuthorUpdateForm from "../../../components/admin/author/AuthorUpdateForm";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const AuthorEditPage = () => {
  return (
    <>
      <BreadCrump
        title1="DashBoard"
        title3="Author Edit"
        link1="/budak"
        link2="/budak/authors"
        title2="Author"
      />
      <AuthorUpdateForm />
    </>
  );
};

export default AuthorEditPage;
