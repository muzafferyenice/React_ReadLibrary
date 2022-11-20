import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./createCat.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { createCategory } from "../../../api/category-service";
import { toast } from "../../../utils/functions/swal";
import { useNavigate } from "react-router-dom";

const CreateCat = () => {
  const [text, setText] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleCategory = async (text) => {
    setLoading(true);
    try {
      const dto = {
        name: text,
      };
      const resp = await createCategory(dto);
      const list = Object.entries(resp.data);
      setCategories(list);
      toast("Category was created", "success");
      navigate(-1);

      console.log(resp);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(true);
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
            handleCategory(text);
            setText("");
          }}
        >
          Create Category
        </Button>
        {loading && <div>{categories}ss</div>}
      </div>

      <img className="logo" src={require("../../../assets/img/logo/lrl.png")} />
    </>
  );
};

export default CreateCat;
