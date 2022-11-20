import { React, useEffect, useState, useRef } from "react";
import { Col, Button, Form, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeSearch.scss";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAllBooksWithNamesByPage } from "../../../../api/book-service";
import { useSelector, useDispatch } from "react-redux";
import { setBook } from "../../../../store/slices/booksSearch-slice";
import {
  SetSearchCat,
  SetSearchText,
} from "../../../../store/slices/search-book-cat";

// getAllUserLoansPage

const HomeSearch = () => {
  const navigate = useNavigate();
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const bookA = useSelector((state) => state.booksearch.book);
  const searchBookCat = useSelector((state) => state.searchC.cat);
  const searchBookText = useSelector((state) => state.searchC.text);
  const dispatch = useDispatch();

  const options = [
    { value: "Book", text: "Book" },
    { value: "Publisher", text: "Publisher" },
    { value: "Author", text: "Author" },
    { value: "Category", text: "Category" },
  ];

  const inputRef = useRef(null);

  const [selected, setSelected] = useState(options[0].cat);

  const handleChange = (event) => {
    dispatch(SetSearchCat(event.target.value));
    dispatch(SetSearchText(""));
    //console.log(searchBookCat);
    setSelected(event.target.value);
    inputRef.current.value = "";
  };
  const handleChangeText = (event) => {
    dispatch(SetSearchText(event.target.value));
    // console.log(event.target.value);
  };

  const loadBooks = async (page) => {
    setLoading(true);
    try {
      const resp = await getAllBooksWithNamesByPage(page, perPage);
      if (searchBookCat === "Book" && searchBookText !== "")
        dispatch(
          setBook(
            resp.data.content.filter((book) =>
              book.name.toUpperCase().includes(searchBookText.toUpperCase())
            )
          )
        );
      if (searchBookCat === "Publisher" && searchBookText !== "")
        dispatch(
          setBook(
            resp.data.content.filter((book) =>
              book.publisherName
                .toUpperCase()
                .includes(searchBookText.toUpperCase())
            )
          )
        );
      if (searchBookCat === "Author" && searchBookText !== "")
        dispatch(
          setBook(
            resp.data.content.filter((book) =>
              book.authorName
                .toUpperCase()
                .includes(searchBookText.toUpperCase())
            )
          )
        );
      if (searchBookCat === "Category" && searchBookText !== "")
        dispatch(
          setBook(
            resp.data.content.filter((book) =>
              book.categoryName
                .toUpperCase()
                .includes(searchBookText.toUpperCase())
            )
          )
        );
      if (searchBookText === "*") dispatch(setBook(resp.data.content));
      // if (searchBookCat === "Book") dispatch(setBook([]));
      //console.log("bookA = " + JSON.stringify(resp.data));
      //console.log("searchBookCat = " + searchBookCat);
      //console.log("searchBookText = " + searchBookText);

      setTotalRows(resp.data.totalElements);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const shoot = async (page) => {
    navigate("/library-page");
    loadBooks();
  };

  const [perPage, setPerPage] = useState(100);

  //console.log("Kitap sayısı = " + bookA.length);
  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <Container>
        <Row className="g-0">
          <Col size="sm" xs="9">
            <Form.Control
              className="searchText"
              ref={inputRef}
              onChange={handleChangeText}
              style={{ fontSize: 17, padding: 3 }}
              type="text"
              placeholder="write * for all books"
            />
          </Col>
          <Col xs="2">
            <select
              className="searchSelect"
              value={searchBookCat}
              onChange={handleChange}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </Col>
          <Col xs="1">
            <Button onClick={shoot} className="searchButton" type="submit">
              <FaSearch className="searchicon" />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeSearch;
