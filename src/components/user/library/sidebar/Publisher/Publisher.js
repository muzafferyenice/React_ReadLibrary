import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { getPublisherByPage } from "../../../../../api/publisher-service";

import Loading from "../../../../common/loading/loading";

const Publisher = () => {
  const [publishers, setPublishers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPublishers = async () => {
    try {
      const resp = await getPublisherByPage();
      console.log(resp.data);
      setPublishers(resp.data.content);
      console.log(publishers);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadPublishers();
  }, []);

  return (
    <>
      <Container className="auth-container">
        <Row className="author-row">
          <Col>{publishers}</Col>
        </Row>
      </Container>

      {loading && <Loading />}
    </>
  );
};

export default Publisher;
