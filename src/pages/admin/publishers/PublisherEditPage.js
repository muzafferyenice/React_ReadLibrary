import React from "react";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import PublisherUpdateForm from "../../../components/admin/publisher/PublisherUpdateForm";

const PublisherEditPage = () => {
  return (
    <>
      <BreadCrump
        title1="DashBoard"
        title3="Publishers Edit"
        link1="/budak"
        link2="/budak/publishers"
        title2="Publishers"
      />
      <PublisherUpdateForm />
    </>
  );
};

export default PublisherEditPage;
