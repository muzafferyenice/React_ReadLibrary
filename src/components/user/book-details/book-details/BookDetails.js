import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Checkbox } from "react-bootstrap";
import { getBookById } from "../../../../api/book-service";
import "./BookDetail.scss";
import BookDetailPage from "../../../../pages/visitor/BookDetailPage";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const loadBooks = async () => {
    console.log(params.id);

    setLoading(true);
    try {
      const resp = await getBookById(params.id);

      console.log(resp.data);
      setBooks(resp.data);

      console.log(books);
      console.log(books.authorName);
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
    <>
      <Container className="detailBook">
        <Row>
          <Col md="4">
            <Card>
              <img
                variant="top"
                src={`/assets/img/books/${books.name}.jpg`}
                alt=""
              />
            </Card>
          </Col>
          <Col md="8">
            <h3>{books.name}</h3>
            <Row className="p-2">
              <Col md="3">Author</Col>
              <Col md="9">{books.authorName}</Col>
            </Row>
            <Row className="p-2">
              <Col md="3">Publisher:</Col>
              <Col md="9">{books.publisherName}</Col>
            </Row>
            <Row className="p-2">
              <Col md="3">ISBN:</Col>
              <Col md="9">{books.isbn}</Col>
            </Row>
            <Row className="p-2">
              <Col md="3">Page Count:</Col>
              <Col md="9">{books.pageCount}</Col>
            </Row>
            <Row className="p-2">
              <Col md="3">Publish Date:</Col>
              <Col md="9">{books.publishDate}</Col>
            </Row>
            <Row className="p-2">
              <Col md="3">Category:</Col>
              <Col md="9">{books.categoryName}</Col>
            </Row>
            <Row className="p-2">
              <Col md="4">Available:</Col>
              <Col md="9">{books.featured}</Col>
            </Row>
            <Row className="p-2">
              <Col md="4">Shelf code </Col>
              <Col md="9">{books.shelfCode}</Col>
            </Row>
          </Col>
        </Row>

        <div style={{ height: 60 }}></div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <div style={{ height: 60 }}></div>
      </Container>
    </>
  );
};
export default BookDetails;
