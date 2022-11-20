import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Pagination, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getAllBooksWithNamesByPage } from "../../../../api/book-service";
import "./Books.scss";
const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();

  const loadData = async (page) => {
    try {
      const resp = await getAllBooksWithNamesByPage(page, perPage);
      console.log(resp.data);
      const {
        content,
        numberOfElements,
        size,
        totalElements,
        totalPages,
        pageable,
      } = resp.data;
      setBooks(content);
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
    loadData();
  }, []);
  return (
    <>
      <Row>
        {books.map((book, index) => (
          <Col md={4} key={index} onClick={() => handlePage(book.id)}>
            <Card className="bookCard">
              <Card.Img
                variant="top"
                src={`/assets/img/books/${book.name}.jpg`}
              />
              <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>
                  {/* {book.name} */}
                  {book.authorName}
                </Card.Text>
              </Card.Body>
            </Card>
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
  );
};

export default Books;
