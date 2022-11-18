import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import { getPublisherByPage } from "../../../api/publisher-service";
import "./publishers.scss";
import Loading from "../../common/loading/loading";

const columns = [
  {
    name: "id",
    selector: (row) => row.id,
  },
  {
    name: "Publisher Name",
    selector: (row) => row.name,
  },
];

const Publishers = () => {
  const [publishers, setPublishers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();

  const loadPublishers = async (page) => {
    setLoading(true);
    try {
      const resp = await getPublisherByPage(page, perPage);
      setPublishers(resp.data.content);
      setTotalRows(resp.data.totalElements);
      console.log(resp.data.totalElements);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handlePageChange = (page) => {
    // Data table componenti 1 tabanlı, bizim api 0 tabanlı çalıştığı için 1 eksiltip gönderiyoruz
    loadPublishers(page - 1);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    loadPublishers(page - 1);
    setPerPage(newPerPage);
  };

  const handlePage = (row) => {
    navigate(`/budak/publishers/${row.id}`);
  };
  useEffect(() => {
    loadPublishers();
  }, []);
  return (
    <div className="publishers">
      <DataTable
        columns={columns}
        data={publishers}
        progressPending={loading}
        progressComponent={<Loading />}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        onRowClicked={handlePage}
      />
    </div>
  );
};

export default Publishers;
