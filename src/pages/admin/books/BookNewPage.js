import React from "react";
import BookCreateForm from "../../../components/admin/book/BookCreateForm";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const BookNewPage = () => {
  return (
    <div>
      <BreadCrump
        title1="DashBoard"
        title3="New Books"
        link1="/budak"
        link2="/budak/books"
        title2="Books"
      />
      <BookCreateForm />
    </div>
  );
};

export default BookNewPage;
