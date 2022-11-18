import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAuthor, getAuthorById } from "../../../api/author-service";
import { question, toast } from "../../../utils/functions/swal";
import "./authors.scss";

const AuthorUpdateForm = () => {
  const [deleting, setDeleting] = useState(false);
  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { authorId } = useParams();

  const getNameById = async () => {
    setLoading(true);

    try {
      const resp = await getAuthorById(authorId);
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

  const removeAuthor = async () => {
    setDeleting(true);
    try {
      await deleteAuthor(authorId);
      toast("Author was deleted", "success");
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
        removeAuthor();
      }
    });
  };

  const goToBookPage = () => {
    navigate(`/budak/books`);
  };

  useEffect(() => {
    getNameById(authorId);
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

export default AuthorUpdateForm;
