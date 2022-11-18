import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./reports.scss";
import Loading from "../../common/loading/loading";
import { getReportMostBorrowers } from "../../../api/report-service";

const columns = [
  {
    name: "User Name",
    selector: (row) => row[0],
  },
  {
    name: "User Id",
    selector: (row) => row[1],
  },
  {
    name: "Loan Count",
    selector: (row) => row[2],
  },
];

const MostBorrowersBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBooks = async (page) => {
    setLoading(true);
    try {
      const resp = await getReportMostBorrowers(page);

      setBooks(resp.data.content);
      console.log(resp.data.content[0][0]);
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
        pagination
        paginationServer
      />
    </div>
  );
};

export default MostBorrowersBooks;
