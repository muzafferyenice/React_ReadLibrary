import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import Author from "./Author/Author";
import Categories from "./categories/Categories";
import Category from "./categories/Category";
import Publisher from "./Publisher/Publisher";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <Container fluid  >

        <Row><h3 className="text-center">Author</h3></Row>
        <Author />
        <div style={{ height: 30 }}></div>
        <Row><h3 className="text-center">Category</h3></Row>   
        <Category />
        <div style={{ height: 30 }}></div>
        <Row><h3 className="text-center">Publisher</h3></Row>   
        <Publisher />

        {/* <Button variant="primary" size="lg">
          <FaFilter />
          &nbsp;&nbsp;Filter
        </Button> */}


      </Container>
    </>
  );
};

export default Sidebar;
