import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import Author from "./Author/Author";
import Categories from "./categories/Categories";
import Publisher from "./Publisher/Publisher";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <Container fluid className="sidebar-container" >
        <Row className="sidebar-row">
          <Col className="sidebar-col">
            <p>
              {" "}
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              Author
            </p>
            <Author />
            <p>
              {" "}
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              Categories
            </p>
            <Categories />
            <p>
              {" "}
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              Publisher
            </p>
            <Publisher />
            <Button variant="primary" size="lg">
            <FaFilter />
              &nbsp;&nbsp;Filter
      </Button>
         
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sidebar;
