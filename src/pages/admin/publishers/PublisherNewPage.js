import React from "react";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import CreatePub from "../../../components/admin/publisher/CreatePub";

const PublisherNewPage = () => {
  return (
    <div>
      <BreadCrump
        title1="DashBoard"
        title3="New Publishers"
        link1="/budak"
        link2="/budak/publishers"
        title2="Publishers"
      />
      <CreatePub />
    </div>
  );
};

export default PublisherNewPage;
