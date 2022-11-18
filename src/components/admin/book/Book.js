import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Book = (props) => {
  const {
    name,
    authorName,
    isbn,
    image,
    categoryName,
    publisherName,
    featured,
    shelfCode,
    handlePage,
  } = props;

  return (
    <Container onClick={handlePage}>
      <Row>
        <Col sm={3} md={3} lg={3}>
          <img src={require("../../../assets/img/logo/logo1.png")} />
        </Col>

        <Col sm={9} md={9} lg={9}>
          <div>
            <h3>{name}</h3>
            <div className="book-info">
              <p>{authorName}</p>
              <p>{isbn}</p>
              <p>{shelfCode}</p>
              <p>available</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Book;
