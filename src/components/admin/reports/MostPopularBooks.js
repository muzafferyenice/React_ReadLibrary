import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./reports.scss";
import Loading from "../../common/loading/loading";
import { getReportMostPopularBooks } from "../../../api/report-service";

const columns = [
  {
    name: "Book id",
    selector: (row) => row[1],
  },
  {
    name: "Books Name",
    selector: (row) => row[0],
  },
  {
    name: "ISBN",
    selector: (row) => row[2],
  },
];

const MostPopularBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBooks = async (page) => {
    setLoading(true);
    try {
      const resp = await getReportMostPopularBooks(page);
      setBooks(resp.data);
      console.log(resp.data);
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

export default MostPopularBooks;
