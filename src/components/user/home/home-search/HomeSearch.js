import React from 'react'
import { Col, Button, Form, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeSearch.scss";
import { FaSearch } from 'react-icons/fa';



const HomeSearch = () => {
  return (
    <div>
      <Container>
        <Row className='g-0'>
          <Col size="sm" xs="9">
            <Form.Control className='searchText' style={{ fontSize: 17, padding: 3 }} type="text" placeholder="Book, publisher or author name isbn" />
          </Col>
          <Col xs="2">
            <Form.Select className='searchSelect' style={{ fontSize: 17, padding: 3 }} aria-label="Default select example">
              <option value="Book">Book</option>
              <option value="publisher">publisher</option>
              <option value="author_name">author name</option>
              <option value="isbn">isbn</option>
            </Form.Select>
          </Col>
          <Col xs="1" >
            <Button href="/library-page" className='searchButton' type="submit"><FaSearch className='searchicon' /></Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeSearch