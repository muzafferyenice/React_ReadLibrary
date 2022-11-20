import React from "react";
import { Card, Container, Form, Row } from "react-bootstrap";
import "./Author.scss";
import { useSelector, useDispatch } from "react-redux";
import { setBook } from "../../../../../store/slices/booksSearch-slice";

const Author = () => {
  const bookA = useSelector((state) => state.booksearch.book);
  const uniqueAuthor = [...new Set(bookA.map((item) => item.authorName))];
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (!e.target.checked) {
      dispatch(
        setBook(
          bookA.filter(
            (book) =>
              book.authorName.toUpperCase() !== e.target.name.toUpperCase()
          )
        )
      );
      e.target.checked = true;
    }
    // console.log("e.label = " + JSON.stringify(e.target.name));
  };
  return (
    <Container fluid>
      <Card>
        <Card.Body className="sidebarcard">
          <Card.Text className="sidebarText">
            {uniqueAuthor.map((book, index) => (
              <Row className="g-5 authors-row" key={index}>
                <Form.Check
                  className="chk"
                  onChange={handleChange}
                  inline
                  label={book}
                  name={book}
                  type="checkbox"
                  id="11"
                  defaultChecked={true}
                />
              </Row>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Author;
