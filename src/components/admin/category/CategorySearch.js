import React, { useState } from "react";
import "./categories.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const CategorySearch = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handlePage = () => {
    navigate("/budak/category-new-page");
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
          //handleSearch(text);
          setText("");
        }}
      >
        <AiOutlineSearch />
      </Button>
      <Button className="btn-new" type="submit" onClick={handlePage}>
        New Category
      </Button>
    </div>
  );
};
export default CategorySearch;
