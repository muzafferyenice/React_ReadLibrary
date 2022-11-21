import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Book = (props) => {
  const {
    name,
    authorName,
    isbn,

    categoryName,
    publisherName,
    featured,
    shelfCode,
    handlePage,
  } = props;

  return (
    <Container onClick={handlePage}>
      <Row>
        <Col sm={2} md={2} lg={2}>
          <img
            src={`/assets/img/books/${name}.jpg`}
            className="img-fluid"
            alt="..."
          />
        </Col>

        <Col sm={7} md={7} lg={7}>
          <div className="col">
            <h3>{name}</h3>
            <div className="book-info col">
              <p>{authorName}</p>
            </div>
          </div>
        </Col>
        <Col sm={3} md={3} lg={3}>
          <div className="book-info col">
            <p>{isbn}</p>
            <p>{shelfCode}</p>
            <p>available</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Book;
