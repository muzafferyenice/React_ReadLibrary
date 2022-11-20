import React from "react";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import CreateAuthor from "../../../components/admin/author/CreateAuthor";
const AuthorNewPage = () => {
  return (
    <div>
      <BreadCrump
        title1="DashBoard"
        title3="New Authors"
        link1="/budak"
        link2="/budak/authors"
        title2="Authors"
      />
      <CreateAuthor />
    </div>
  );
};

export default AuthorNewPage;
