import React from "react";
import SearchBar from "../../../components/admin/book/SearchBar";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const BooksPage = () => {
  return (
    <>
      <BreadCrump title1="DashBoard" title3="Books" link1="/budak" />
      <SearchBar />
    </>
  );
};

export default BooksPage;
