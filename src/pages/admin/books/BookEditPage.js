import React from "react";
import BookEditForm from "../../../components/admin/book/BookEditForm";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import Loan from "../../../components/admin/loan/Loan";
import LoanForm from "../../../components/admin/loan/LoanForm";
import Spacer from "../../../components/common/spacer/Spacer";
const BookEditPage = () => {
  return (
    <>
      <BreadCrump />
      <BookEditForm />
      <Spacer />
      <LoanForm />
      <Spacer />
      <Loan />
    </>
  );
};

export default BookEditPage;
