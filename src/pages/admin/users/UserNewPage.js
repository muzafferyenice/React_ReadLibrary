import React from "react";
import CreateUser from "../../../components/admin/users/CreateUser";
import BreadCrump from "../../../components/admin/common/BreadCrump";
const UserNewPage = () => {
  return (
    <div>
      <BreadCrump
        title1="DashBoard"
        title3="New Users"
        link1="/budak"
        link2="/budak/users"
        title2="Users"
      />
      <CreateUser />
    </div>
  );
};

export default UserNewPage;
