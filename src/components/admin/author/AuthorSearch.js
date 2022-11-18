import "./authors.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { getAllBooksWithPageOnlyWithAuthorId } from "../../../api/book-service";
import { useState } from "react";

const AuthorSearch = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (text) => {
    setLoading(true);
    try {
      const resp = await getAllBooksWithPageOnlyWithAuthorId(text);
      setAuthors(resp.data.content);
      console.log(resp.data.content);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handlePage = () => {
    navigate("/budak/author-new-page");
  };
  return (
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
        New Author
      </Button>
    </div>
  );
};

export default AuthorSearch;
