import React from "react";
import Authors from "../../../components/admin/author/Authors";
import AuthorSearch from "../../../components/admin/author/AuthorSearch";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const AuthorsPage = () => {
  return (
    <>
      <BreadCrump title1="DashBoard" title3="Authors" link1="/budak" />
      <AuthorSearch />
      <Authors />
    </>
  );
};

export default AuthorsPage;
