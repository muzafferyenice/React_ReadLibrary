import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAuthorById,
  getAuthorsByPage,
} from "../../../../../api/author-service";

import Loading from "../../../../common/loading/loading";
import "./Author.scss";
import Authors from "./Authors";

const Author = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAuthors = async () => {
    try {
      const resp = await getAuthorsByPage();
      console.log(resp.data);
      setAuthors(resp.data.content);
      console.log(authors);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadAuthors();
  }, []);

  return (
    <>
      <Container className="auth-container">
        <Row className="author-row">
          <Col>{<Authors authors={authors} />}</Col>
        </Row>
      </Container>

      {loading && <Loading />}
    </>
  );
};

export default Author;
