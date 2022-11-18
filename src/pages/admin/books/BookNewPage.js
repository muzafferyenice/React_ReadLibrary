import React from "react";
import BookCreateForm from "../../../components/admin/book/BookCreateForm";
import BreadCrump from "../../../components/admin/common/BreadCrump";

const BookNewPage = () => {
  return (
    <div>
      <BreadCrump />
      <BookCreateForm />
    </div>
  );
};

export default BookNewPage;
