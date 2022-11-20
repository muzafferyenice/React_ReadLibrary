import React from "react";
import BookEditForm from "../../../components/admin/book/BookEditForm";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import Loan from "../../../components/admin/loan/Loan";
import LoanForm from "../../../components/admin/loan/LoanForm";
import Spacer from "../../../components/common/spacer/Spacer";
const BookEditPage = () => {
  return (
    <>
      <BreadCrump
        title1="DashBoard"
        title3="Books Edit"
        link1="/budak"
        link2="/budak/books"
        title2="Books"
      />
      <BookEditForm />
      <Spacer />
      <LoanForm />
      <Spacer />
      <Loan />
    </>
  );
};

export default BookEditPage;
