import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./createAuthor.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { createAuthor } from "../../../api/author-service";
import { toast } from "../../../utils/functions/swal";
import { useNavigate } from "react-router-dom";

const CreatePub = () => {
  const [text, setText] = useState("");
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleAuthor = async (text) => {
    setLoading(true);
    try {
      const dto = {
        name: text,
      };
      const resp = await createAuthor(dto);
      setAuthors(resp);
      console.log(resp);
      toast("Author was created", "success");
      navigate(-1);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="create text-end">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          className="btn-new"
          type="submit"
          onClick={() => {
            handleAuthor(text);
            setText("");
          }}
        >
          Create Author
        </Button>
        {!loading && <div>{authors.name}</div>}
      </div>
      <div>
        <img
          className="logo"
          src={require("../../../assets/img/logo/lrl.png")}
        />
      </div>
    </>
  );
};

export default CreatePub;
