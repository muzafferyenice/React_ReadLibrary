import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthorById } from "../../../../api/author-service";
import "./book/Book.scss";

//library books
const Books = (props) => {
  const { books } = props;
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchBookCat = useSelector((state) => state.searchC.cat);
  const searchBookText = useSelector((state) => state.searchC.text);
  const navigate = useNavigate();
  return (
    <>
      <Row>
        {books.map((book, index) => (
          <Col md={4} key={index}>
            <Card
              className="bookCard1"
              onClick={() => {
                navigate(`/books/${book.id}`);
              }}
            >
              <Card.Img
                variant="top"
                src={`/assets/img/books/${book.name}.jpg`}
              />
              <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>{book.authorName}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Books;
