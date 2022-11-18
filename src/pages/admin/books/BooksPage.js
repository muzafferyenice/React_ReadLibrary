import React from "react";
import Books from "../../../components/admin/book/Books";
import SearchBar from "../../../components/admin/book/SearchBar";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const BooksPage = () => {
  return (
    <>
      <BreadCrump />
      <SearchBar />
      {/*   <Books /> */}
    </>
  );
};

export default BooksPage;
