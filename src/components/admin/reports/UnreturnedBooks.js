import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./reports.scss";
import Loading from "../../common/loading/loading";
import { getReportsUnreturnedWithPage } from "../../../api/report-service";

const columns = [
  {
    name: "Book id",
    selector: (row) => row.id,
  },
  {
    name: "Books Name",
    selector: (row) => row.name,
  },
  {
    name: "ISBN",
    selector: (row) => row.isbn,
  },
];

const UnreturnedBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const loadBooks = async (page) => {
    setLoading(true);
    try {
      const resp = await getReportsUnreturnedWithPage(page, perPage);
      console.log(resp.data);
      setBooks(resp.data.content);
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
    loadBooks(page - 1);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    loadBooks(page - 1);
    setPerPage(newPerPage);
  };

  useEffect(() => {
    loadBooks();
  }, []);
  return (
    <div className="unreturned-books">
      <DataTable
        columns={columns}
        data={books}
        progressPending={loading}
        progressComponent={<Loading />}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
      />
    </div>
  );
};

export default UnreturnedBooks;
