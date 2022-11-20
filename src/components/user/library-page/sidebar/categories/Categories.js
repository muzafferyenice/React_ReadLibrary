import React, { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getCategoriesByPage } from "../../../../../api/category-service";
import Category from "./Category";

const Categories = (props) => {
  const { categories } = props;
  return (
    <Container className="categories-container">
      <Row className="g-5 categories-row" >
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
