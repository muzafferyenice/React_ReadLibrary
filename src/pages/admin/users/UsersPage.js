import React from "react";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import Users from "../../../components/admin/users/Users";
import UserSearch from "../../../components/admin/users/UserSearch";

const UsersPage = () => {
  return (
    <>
      <BreadCrump />
      <UserSearch />
    </>
  );
};

export default UsersPage;
