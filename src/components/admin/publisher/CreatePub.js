import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./createPub.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { createPublisher } from "../../../api/publisher-service";
import { useNavigate } from "react-router-dom";
import { toast } from "../../../utils/functions/swal";

const CreatePub = () => {
  const [text, setText] = useState("");
  const [publishers, setPublishers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handlePublisher = async (text) => {
    setLoading(true);
    try {
      const dto = {
        name: text,
      };
      const resp = await createPublisher(dto);
      setPublishers(resp);
      toast("Publisher was created", "success");
      navigate(-1);

      console.log(resp);
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
            handlePublisher(text);
            setText("");
          }}
        >
          Create Publisher
        </Button>
        {!loading && <div>{publishers.name}</div>}
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
