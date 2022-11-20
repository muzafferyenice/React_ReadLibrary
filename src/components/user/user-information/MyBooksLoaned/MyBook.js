import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MyBook = (props) => {
  const { expireDate, loanDate, bookId, handlePage } = props;
  const { name } = bookId;

  return (
    <Container onClick={handlePage}>
      <Row>
        <Col sm={3} md={3} lg={3}>
          <img
            src={`/assets/img/books/${name}.jpg`}
            className="img-fluid"
            alt="..."
          />
        </Col>

        <Col sm={9} md={9} lg={9}>
          <div>
            <h3>{name}</h3>
            <div className="book-info">
              <p>Expire Date</p>

              <p>{expireDate}</p>
              <p>Loan Date</p>
              <p>{loanDate}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyBook;
