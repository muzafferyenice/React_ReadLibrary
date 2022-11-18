import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "react-bootstrap";
import {
  getAllBooksWithPageOnlyWithBookName,
  getAllWithPageForAdmin,
} from "../../../api/book-service";
import { useNavigate, useParams } from "react-router-dom";
import Books from "./Books";
const SearchBar = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const { bookId } = useParams();

  const handleSearch = async (text) => {
    setLoading(true);
    try {
      let q = "";
      const resp = await getAllBooksWithPageOnlyWithBookName((q = text));
      setBooks(resp.data.content);
      console.log(resp.data.content);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handlePage = () => {
    navigate(`/budak/books/book-new-page`);
  };
  return (
    <>
      <div className="p-search text-end">
        <input
          type="search"
          name=""
          id=""
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          className="icon"
          type="submit"
          onClick={() => {
            handleSearch(text);
            setText("");
          }}
        >
          <AiOutlineSearch />
        </Button>

        <Button className="btn-new" type="submit" onClick={handlePage}>
          New Book
        </Button>
      </div>
      {loading ? (
        <Books />
      ) : (
        <>
          <ul>
            <li>Books Name</li>
            {books.map((book, index) => (
              <li key={index}>{book[1]}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default SearchBar;
