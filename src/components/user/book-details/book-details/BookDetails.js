import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Checkbox } from "react-bootstrap";
import { getBookById } from "../../../../api/book-service";
import "./BookDetail.scss";
import BookDetailPage from "../../../../pages/visitor/BookDetailPage";

const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
  },
  {
    name: "Author",
    selector: (row) => row.author,
  },
  {
    name: "Publisher",
    selector: (row) => row.publisher,
  },

  {
    name: "Book Name",
    selector: (row) => row.name,
  },
  {
    name: "Isbn",
    selector: (row) => row.Isbn,
  },
  {
    pageCount: "Page Count",
    selector: (row) => row.pageCount,
  },
  {
    publishDate: "Publish Date",
    selector: (row) => row.publishDate,
  },
  {
    category: "Category",
    selector: (row) => row.category,
  },
];

const BookDetails = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBooks = async (id) => {
    setLoading(true);
    try {
      const resp = await getBookById(100);
      console.log(id);
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
                src="/assets/img/books/HarryPotter5.jpg"
                alt=""
              />
            </Card>
          </Col>
          <Col md="8">
            {/*  <h3>{books.name}</h3> */}
            <Row className="p-2">
              <Col md="3">Author</Col>
              {/*  <Col md="9">{books.Author}</Col> */}
            </Row>
            <Row className="p-2">
              <Col md="3">Publisher:</Col>
              {/*   <Col md="9">{books.publisher}</Col> */}
            </Row>
            <Row className="p-2">
              <Col md="3">Isbn:</Col>
              {/* <Col md="9">{books.Isbn}</Col> */}
            </Row>
            <Row className="p-2">
              <Col md="3">Page Count:</Col>
              {/*  <Col md="9">{books.page}</Col> */}
            </Row>
            <Row className="p-2">
              <Col md="3">Publish Date:</Col>
              {/*  <Col md="9">{books.publishDate}</Col> */}
            </Row>
            <Row className="p-2">
              <Col md="3">Catedgory:</Col>
              {/*  <Col md="9">{books.category}</Col> */}
            </Row>
            <Row className="p-2">
              <Col md="4">Available:</Col>
              <Col md="4">Shelf code </Col>
              <Col md="4">AD-123</Col>
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
