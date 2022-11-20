import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findLoanedBookByBookId } from "../../../api/loan-service";
import Loading from "../../common/loading/loading";
import ModalEditBook from "../common/ModalEditBook";
import ModalEdit from "../common/ModalEditBook";
const Loan = () => {
  const [loanId, setLoanId] = useState(0);
  const setAsReturned = (row) => {
    setModalShow(true);
    setLoanId(row);
  };

  const columns = [
    {
      name: "Loan Id",
      selector: (row) => row.id,
    },
    {
      name: "Book Name",
      selector: (row) => row.bookId.name,
    },
    {
      name: "Loan Date",
      selector: (row) => row.loanDate,
    },
    {
      name: "Expire Date",
      selector: (row) => row.expireDate,
    },
    {
      name: "Return Date",
      selector: (row) =>
        row.returnDate != null ? (
          row.returnDate
        ) : (
          <Button variant="primary" onClick={() => setAsReturned(row)}>
            set As Returned
          </Button>
        ),
    },
  ];
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();
  const { id } = useParams();
  const loadLoans = async (page) => {
    setLoading(true);
    try {
      const resp = await findLoanedBookByBookId(id, page, perPage);
      console.log(resp.data);
      setLoans(resp.data);
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
    loadLoans(page - 1);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    loadLoans(page - 1);
    setPerPage(newPerPage);
  };
  const handlePage = (row) => {
    navigate(`/budak/loan-edit/${row.id}`);
  };
  useEffect(() => {
    loadLoans();
  }, []);
  return (
    <div className="loans">
      <DataTable
        columns={columns}
        data={loans}
        progressPending={loading}
        progressComponent={<Loading />}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        onRowClicked={handlePage}
      />
      {modalShow && (
        <ModalEditBook
          id={loanId}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
    </div>
  );
};
export default Loan;
