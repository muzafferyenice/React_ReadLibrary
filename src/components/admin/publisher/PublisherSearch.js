import React, { useState } from "react";
import "./publishers.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "react-bootstrap";
import {
  getAllBooksWithPageOnlyWithPubId,
  getAllWithPageForAdmin,
} from "../../../api/book-service";
import { useNavigate } from "react-router-dom";

const PublisherSearch = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [publishers, setPublishers] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (text) => {
    setLoading(true);
    try {
      const resp = await getAllBooksWithPageOnlyWithPubId(text);
      setPublishers(resp.data.content);
      console.log(resp.data.content);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handlePage = () => {
    navigate("/budak/publisher-new-page");
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
        New Publisher
      </Button>
    </div>
  );
};

export default PublisherSearch;
