import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeSearch from "../../components/user/home/home-search/HomeSearch";
import Books from "../../components/user/library/Books/Books";
import SearchOptionBar from "../../components/user/library/Search/SearchOptionBar";
import Sidebar from "../../components/user/library/sidebar/Sidebar";
import { getAllBooksWithNamesByPage } from "../../api/book-service";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBook } from "../../store/slices/booksSearch-slice";

const LibraryPage = () => {
  const bookA = useSelector((state) => state.booksearch.book);

  return (
    <>
      <div style={{ height: 10 }}></div>
      <Container>
        <Row>
          <Col xs={4}>
            <Sidebar />
          </Col>
          <Col xs={8}>
            <HomeSearch />
            <SearchOptionBar books={bookA} />
            <Books />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LibraryPage;
