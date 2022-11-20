import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import {
  getCategoriesByPage,
  getCategoryById,
} from "../../../../../api/category-service";
import Loading from "../../../../common/loading/loading";
import Categories from "./Categories";
import "./Categories.scss";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadCategories = async () => {
    try {
      const resp = await getCategoriesByPage();
      console.log(resp.data);
      setCategories(resp.data);
      console.log(categories);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <Container className="auth-container">
        <Row className="author-row">
          <Col>{<Categories categories={categories} />}</Col>
        </Row>
      </Container>

      {loading && <Loading />}
    </>
  );
};

export default Category;
