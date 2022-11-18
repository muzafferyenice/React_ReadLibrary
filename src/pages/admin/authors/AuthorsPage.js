import React from "react";
import Authors from "../../../components/admin/author/Authors";
import AuthorSearch from "../../../components/admin/author/AuthorSearch";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const AuthorsPage = () => {
  return (
    <>
      <BreadCrump />
      <AuthorSearch />
      <Authors />
    </>
  );
};

export default AuthorsPage;
