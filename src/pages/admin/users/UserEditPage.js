import React from "react";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import UserLoan from "../../../components/admin/loan/UserLoan";

import UserUpdateForm from "../../../components/admin/users/UserUpdateForm";
import Spacer from "../../../components/common/spacer/Spacer";

const UserEditPage = () => {
  return (
    <>
      <BreadCrump />

      <UserUpdateForm />
      <Spacer />
      <UserLoan />
    </>
  );
};

export default UserEditPage;
