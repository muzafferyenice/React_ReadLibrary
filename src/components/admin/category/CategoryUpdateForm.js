import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import "./categories.scss";
import { useNavigate, useParams } from "react-router-dom";

import { question, toast } from "../../../utils/functions/swal";
import { deleteCategory, getCategoryById } from "../../../api/category-service";

const CategoryUpdateForm = () => {
  const [deleting, setDeleting] = useState(false);
  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { catId } = useParams();

  const getCategory = async () => {
    setLoading(true);

    try {
      console.log(catId);
      const resp = await getCategoryById(catId);
      console.log(resp.data);
      const list = Object.entries(resp.data);
      setName(list[0][1]);
      console.log(name);
    } catch (err) {
      console.log(catId);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const removeCategory = async () => {
    setDeleting(true);
    try {
      await deleteCategory(catId);
      toast("Category was deleted", "success");
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
        removeCategory();
      }
    });
  };

  const goToBookPage = () => {
    navigate(`/budak/categories`);
  };

  useEffect(() => {
    getCategory();
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
        <Button
          variant="secondary"
          type="button" /* onClick={() => navigate(-1)} */
        >
          Show Books
        </Button>
        <Button
          variant="danger"
          type="button"
          onClick={handleDelete}
          disabled={deleting}
        >
          {deleting && <Spinner animation="border" size="sm" />} Delete
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default CategoryUpdateForm;
