import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../common/loading/loading";
import "./categories.scss";
import { getCategoriesByPage } from "../../../api/category-service";

const columns = [
  {
    name: "id",
    selector: (row) => row.id,
  },
  {
    name: "Category Name",
    selector: (row) => row.name,
  },
];

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();

  const loadCategories = async (page) => {
    setLoading(true);
    try {
      const resp = await getCategoriesByPage(page, perPage);

      setCategories(resp.data.content);
      setTotalRows(resp.data.totalElements);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    // Data table componenti 1 tabanlı, bizim api 0 tabanlı çalıştığı için 1 eksiltip gönderiyoruz
    loadCategories(page - 1);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    loadCategories(page - 1);
    setPerPage(newPerPage);
  };

  const handlePage = (row) => {
    navigate(`/budak/${row.id}`);
  };
  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div className="categories">
      <DataTable
        columns={columns}
        data={categories}
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

export default Categories;
