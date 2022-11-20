import React from "react";
import { Container, Form, Row } from "react-bootstrap";

const Categories = (props) => {
  const { categories } = props;
  return (
    <Container className="categories-container">
      <Row className="g-5 categories-row">
        {categories.map((category, index) => (
          <div className="categories-check-div" key={index}>
            <Form.Check type="checkbox" />
            {category.name}
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
