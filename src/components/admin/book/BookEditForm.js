import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Spinner, Row, Col, Badge } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { question, toast } from "../../../utils/functions/swal";
import { deleteBook, getBookById, updateBook } from "../../../api/book-service";
import { useNavigate, useParams } from "react-router-dom";
const BookEditForm = (props) => {
  const { book } = props;
  const { id } = useParams();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const initialValues = {
    name: books.name,
    isbn: books.isbn,
    pageCount: books.pageCount,
    publisherName: books.publisherName,
    authorName: books.authorName,
    publishDate: books.publishDate,
    categoryName: books.categoryName,
    shelfCode: books.shelfCode,
    featured: books.featured,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter name"),
    isbn: Yup.string().required("Please enter isbn"),
    pageCount: Yup.number().required("Please enter pageCount"),
    publisherName: Yup.string().required("Please enter publisher name"),
    authorName: Yup.string().required("Please enter author name"),
    publishDate: Yup.number().required("Please enter publishDate"),
    categoryName: Yup.string().required("Please enter  category name"),
    shelfCode: Yup.string().required("Please enter  shelfCode"),
  });

  const onSubmit = async () => {
    // debugger;
    const values = {
      name: "kral bekir hoca",
      isbn: "555-45-55555-99-9",
      pageCount: 150,
      authorId: 3,
      publisherId: 4,
      publishDate: 1998,
      categoryId: 2,
      shelfCode: "WF-211",
      active: false,
      featured: true,
    };
    console.log(values);

    setSaving(true);

    try {
      await updateBook(values, params.id);
      console.log(values);
      toast("book updated successfully!", "success");
      formik.resetForm();
    } catch (err) {
      toast(err.response.data.message, "error");
    } finally {
      setSaving(false);
    }
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });
  const removeBook = async () => {
    setDeleting(true);
    try {
      await deleteBook(id);
      toast("book was deleted", "success");
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
        removeBook();
      }
    });
  };
  const loadBook = async () => {
    setLoading(true);
    try {
      const resp = await getBookById(id);
      console.log(resp.data);
      setBooks(resp.data);
      console.log(books);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadBook();
  }, []);
  return (
    <>
      {!loading && (
        <Form className="book-edit" noValidate onSubmit={formik.handleSubmit}>
          <Row>
            {book.map((bo, index) => (
              <Col xl={3} className="image-area" key={index}>
                <img
                  src={`/assets/img/books/${bo.name}.jpg`}
                  className="img-fluid"
                  alt="..."
                />
              </Col>
            ))}
            <Col className="form" xl={9}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={formik.values.name}
                  type="text"
                  {...formik.getFieldProps("name")}
                  isInvalid={formik.touched.name && formik.errors.name}
                  isValid={formik.touched.name && !formik.errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>isbn</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("isbn")}
                  isInvalid={formik.touched.isbn && formik.errors.isbn}
                  isValid={formik.touched.isbn && !formik.errors.isbn}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.isbn}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Page Count</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("pageCount")}
                  isInvalid={
                    formik.touched.pageCount && formik.errors.pageCount
                  }
                  isValid={formik.touched.pageCount && !formik.errors.pageCount}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.pageCount}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>publisher name</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("publisherName")}
                  isInvalid={
                    formik.touched.publisherName && formik.errors.publisherName
                  }
                  isValid={
                    formik.touched.publisherName && !formik.errors.publisherName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.publisherName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>author name</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("authorName")}
                  isInvalid={
                    formik.touched.authorName && formik.errors.authorName
                  }
                  isValid={
                    formik.touched.authorName && !formik.errors.authorName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.authorName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>publish Date</Form.Label>
                <Form.Control
                  type="number"
                  {...formik.getFieldProps("publishDate")}
                  isInvalid={
                    formik.touched.publishDate && formik.errors.publishDate
                  }
                  isValid={
                    formik.touched.publishDate && !formik.errors.publishDate
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.publishDate}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>category name</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("categoryName")}
                  isInvalid={
                    formik.touched.categoryName && formik.errors.categoryName
                  }
                  isValid={
                    formik.touched.categoryName && !formik.errors.categoryName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.categoryName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>shelf Code</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("shelfCode")}
                  isInvalid={
                    formik.touched.shelfCode && formik.errors.shelfCode
                  }
                  isValid={formik.touched.shelfCode && !formik.errors.shelfCode}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.shelfCode}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>featured</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("featured")}
                  isInvalid={formik.touched.featured && formik.errors.featured}
                  isValid={formik.touched.featured && !formik.errors.featured}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.featured}
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                variant="danger"
                type="submit"
                disabled={deleting}
                onClick={handleDelete}
              >
                {deleting && <Spinner animation="border" size="sm" />} Delete
              </Button>
              <Button variant="primary" type="submit" disabled={saving}>
                {saving && <Spinner animation="border" size="sm" />} Save
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
};
export default BookEditForm;
