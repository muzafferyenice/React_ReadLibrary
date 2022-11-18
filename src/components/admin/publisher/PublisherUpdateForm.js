import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {
  deletePublisher,
  getPublisherById,
} from "../../../api/publisher-service";
import { question, toast } from "../../../utils/functions/swal";
import "./publishers.scss";

const PublisherUpdateForm = () => {
  const [deleting, setDeleting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { pubId } = useParams();

  const getNameById = async () => {
    setLoading(true);

    try {
      const resp = await getPublisherById(pubId);
      console.log(resp.data);
      const list = Object.entries(resp.data);
      setName(list[0][1]);
      console.log(name);
    } catch (err) {
      console.log(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const removePublisher = async () => {
    setDeleting(true);
    try {
      await deletePublisher(pubId);
      toast("Publisher was deleted", "success");
      navigate(-1);
    } catch (err) {
      toast(err.response.data.message, "error");
    } finally {
      setDeleting(false);
    }
  };

  const handleDelete = () => {
    question(
      "Are you sure to delete?",
      "You won't be able to revert this!"
    ).then((result) => {
      if (result.isConfirmed) {
        removePublisher();
      }
    });
  };

  const goToBookPage = () => {
    navigate(`/budak/books`);
  };

  useEffect(() => {
    getNameById(pubId);
  }, []);

  return (
    <div className="p-update-form">
      {!loading && (
        <div>
          <p>Name</p>
          <input type="text" name="" id="" defaultValue={name} />
        </div>
      )}

      <ButtonGroup aria-label="Basic example" className="btn-edit-page">
        <Button variant="primary" type="submit" disabled={saving}>
          {saving && <Spinner animation="border" size="sm" />} Save
        </Button>
        <Button variant="secondary" type="button" onClick={goToBookPage}>
          Show Books
        </Button>
        <Button
          variant="danger"
          type="submit"
          onClick={handleDelete}
          disabled={deleting}
        >
          {deleting && <Spinner animation="border" size="sm" />} Delete
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default PublisherUpdateForm;
