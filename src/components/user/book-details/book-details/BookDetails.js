import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Checkbox } from "react-bootstrap";
import { getBookById } from "../../../../api/book-service";
import "./BookDetail.scss";
import BookDetailPage from "../../../../pages/visitor/BookDetailPage";
import { useParams } from "react-router-dom";
import Spacer from "../../../common/spacer/Spacer";

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
        <Spacer height={50} />
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
              <Col md="5">Author :</Col>
              <Col md="7">{books.authorName}</Col>
            </Row>
            <hr />
            <Row className="p-2">
              <Col md="5">Publisher :</Col>
              <Col md="7">{books.publisherName}</Col>
            </Row>
            <hr />
            <Row className="p-2">
              <Col md="5">ISBN :</Col>
              <Col md="7">{books.isbn}</Col>
            </Row>
            <hr />
            <Row className="p-2">
              <Col md="5">Page Count :</Col>
              <Col md="7">{books.pageCount}</Col>
            </Row>
            <hr />
            <Row className="p-2">
              <Col md="5">Publish Date :</Col>
              <Col md="7">{books.publishDate}</Col>
            </Row>
            <hr />
            <Row className="p-2">
              <Col md="5">Category :</Col>
              <Col md="7">{books.categoryName}</Col>
            </Row>
            <hr />
            <Row className="p-2">
              <Col md="5">Available :</Col>
              <Col md="7">
                {books.featured && <Form.Check type="checkbox" checked />}
              </Col>
            </Row>
            <hr />
            <Row className="p-2">
              <Col md="5">Shelf code : </Col>
              <Col md="7">{books.shelfCode}</Col>
            </Row>
            <hr />
          </Col>
        </Row>
        <Spacer height={200} />
      </Container>
    </>
  );
};
export default BookDetails;
