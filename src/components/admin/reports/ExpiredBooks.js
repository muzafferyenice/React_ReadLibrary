import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./reports.scss";
import Loading from "../../common/loading/loading";
import { getReportsWithPageExpiredBooks } from "../../../api/report-service";

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

const ExpiredBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBooks = async (page) => {
    setLoading(true);
    try {
      const resp = await getReportsWithPageExpiredBooks(page);
      console.log(resp.data);
      setBooks(resp.data);

      console.log(resp.data.totalElements);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
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
      />
    </div>
  );
};

export default ExpiredBooks;
