import React from "react";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import Users from "../../../components/admin/users/Users";
import UserSearch from "../../../components/admin/users/UserSearch";

const UsersPage = () => {
  return (
    <>
      <BreadCrump title1="DashBoard" title3="Users" link1="/budak" />
      <UserSearch />
    </>
  );
};

export default UsersPage;
