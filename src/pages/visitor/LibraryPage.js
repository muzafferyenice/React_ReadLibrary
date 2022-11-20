import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeSearch from "../../components/user/home/home-search/HomeSearch";
import Books from "../../components/user/library-page/Books/Books";
import SearchOptionBar from "../../components/user/library-page/Search/SearchOptionBar";
import Sidebar from "../../components/user/library-page/sidebar/Sidebar";
import { getAllBooksWithNamesByPage } from "../../api/book-service";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBook } from "../../store/slices/booksSearch-slice";

const LibraryPage = () => {
  //const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);

  const bookA = useSelector((state) => state.booksearch.book);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loadBooks = async (page) => {};

  const [perPage, setPerPage] = useState(bookA.lengt);

  //console.log("Kitap sayısı = " + bookA.length);
  useEffect(() => {
    loadBooks();
  }, []);

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
            <Books books={bookA} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LibraryPage;
