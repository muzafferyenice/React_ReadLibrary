import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import "./authors.scss";
import Loading from "../../common/loading/loading";
import { getAuthorsByPage } from "../../../api/author-service";

const columns = [
  {
    name: "Author id",
    selector: (row) => row.id,
  },
  {
    name: "Author Name",
    selector: (row) => row.name,
  },
];

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();

  const loadAuthors = async (page) => {
    setLoading(true);
    try {
      const resp = await getAuthorsByPage(page, perPage);
      setAuthors(resp.data.content);
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
    loadAuthors(page - 1);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    loadAuthors(page - 1);
    setPerPage(newPerPage);
  };

  const handlePage = (row) => {
    navigate(`/budak/authors/${row.id}`);
  };
  useEffect(() => {
    loadAuthors();
  }, []);
  return (
    <div className="authors">
      <DataTable
        columns={columns}
        data={authors}
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

export default Authors;
