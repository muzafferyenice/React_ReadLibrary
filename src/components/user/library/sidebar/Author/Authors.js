import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Author from "./Author";
import "./Authors.scss";

const Authors = (props) => {
  const { authors } = props;
  return (
    <Container className="authors-container">
      <Row className="g-5 authors-row">
        {authors.map((author, index) => (
          <div className="check-div" key={index}>
            <Form.Check type="checkbox" />
            {author.name}
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Authors;
