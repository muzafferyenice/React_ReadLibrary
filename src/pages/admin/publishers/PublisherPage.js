import React from "react";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import Publishers from "../../../components/admin/publisher/Publishers";
import PublisherSearch from "../../../components/admin/publisher/PublisherSearch";

const PublisherPage = () => {
  return (
    <>
      <BreadCrump title1="DashBoard" title3="Publishers" link1="/budak" />
      <PublisherSearch />
      <Publishers />
    </>
  );
};

export default PublisherPage;
