import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getLoansWithPageAuthenticatedUser } from "../../../../api/loan-service";

import Loading from "../../../common/loading/loading";
import Spacer from "../../../common/spacer/Spacer";
import MyBook from "./MyBook";
import "./book.scss";
const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();
  const { id } = useParams();
  const loadData = async (page) => {
    try {
      const resp = await getLoansWithPageAuthenticatedUser(page, perPage);
      console.log(resp.data);
      const { numberOfElements, size, totalElements, totalPages, pageable } =
        resp.data;
      setBooks(resp.data);
      setPagination({
        numberOfElements,
        size,
        totalElements,
        totalPages,
        pageable,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handlePage = (id) => {
    navigate(`/books/${id}`);
  };
  useEffect(() => {
    loadData(0);
  }, []);
  return (
    <Container>
      <Spacer height={50} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Row className="g-5 book">
            {books.map((book, index) => (
              <Col key={index}>
                <MyBook {...book} handlePage={() => handlePage(book.id)} />
              </Col>
            ))}
          </Row>
          {pagination.totalPages > 1 && (
            <Row className="books-pagination">
              <Pagination>
                <Pagination.First
                  onClick={() => loadData(0)}
                  disabled={pagination.pageable.pageNumber <= 0}
                />
                <Pagination.Prev
                  onClick={() => loadData(pagination.pageable.pageNumber - 1)}
                  disabled={pagination.pageable.pageNumber <= 0}
                />
                {[...Array(pagination.totalPages)].map((item, index) => (
                  <Pagination.Item
                    active={index === pagination.pageable.pageNumber}
                    key={index}
                    onClick={() => loadData(index)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => loadData(pagination.pageable.pageNumber + 1)}
                  disabled={
                    pagination.pageable.pageNumber >= pagination.totalPages - 1
                  }
                />
                <Pagination.Last
                  onClick={() => loadData(pagination.totalPages - 1)}
                  disabled={
                    pagination.pageable.pageNumber >= pagination.totalPages - 1
                  }
                />
              </Pagination>
            </Row>
          )}
        </>
      )}
    </Container>
  );
};
export default MyBooks;
