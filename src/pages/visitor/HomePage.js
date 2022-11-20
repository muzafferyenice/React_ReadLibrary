import { MDBContainer, MDBInputGroup } from "mdb-react-ui-kit";
import React from "react";
import { Button, ButtonGroup, Col, Container, Nav, Row } from "react-bootstrap";
import Spacer from "../../components/common/spacer/Spacer";
import HomeSearch from "../../components/user/home/home-search/HomeSearch";
import MenuBar from "../../components/user/home/menubar/MenuBar";
import TopBar from "../../components/user/home/topbar/TopBar";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.scss";
import { useSelector, useDispatch } from "react-redux";
import Books from "./Books/Books";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(20);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <>
      <div className="home-main">
        <TopBar />
        <MenuBar />
        <Spacer />
        <HomeSearch />
        <Container>
          <Nav
            className="justify-content-center"
            defaultActiveKey="/home"
            as="ul"
          >
            <Nav.Item as="li">
              ________________________. or .________________________
            </Nav.Item>
          </Nav>

          <div style={{ height: 30 }}></div>
          <div className="exploreBooks">
            <Button
              className="exploreBooksButton"
              onClick={() => {
                navigate("/library-page");
              }}
            >
              Explore books
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
