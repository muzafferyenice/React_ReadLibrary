import React from "react";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import Publishers from "../../../components/admin/publisher/Publishers";
import PublisherSearch from "../../../components/admin/publisher/PublisherSearch";

const PublisherPage = () => {
  return (
    <>
      <BreadCrump />
      <PublisherSearch />
      <Publishers />
    </>
  );
};

export default PublisherPage;
