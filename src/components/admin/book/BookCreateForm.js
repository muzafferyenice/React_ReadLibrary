import React, { useRef, useState } from "react";

import { Form, Button, Spinner, Row, Col, Badge } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import { toast } from "../../../utils/functions/swal";
import { createBook, createBookWithImage } from "../../../api/book-service";
import { useNavigate } from "react-router-dom";

const BookCreateForm = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileImageRef = useRef();
  const navigate = useNavigate();
  /*   const getFormData = (object) =>
    Object.keys(object).reduce((formData, key) => {
      formData.append(key, object[key]);
      return formData;
    }, new FormData()); */

  const initialValues = {
    name: "",
    isbn: "",
    pageCount: 0,
    publisherId: 0,
    authorId: 0,
    publishDate: 0,
    categoryId: 0,
    shelfCode: "",
    featured: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter name"),
    isbn: Yup.string().required("Please enter isbn"),
    pageCount: Yup.number().required("Please enter pageCount"),
    publisherId: Yup.number().required("Please enter publisherId"),
    authorId: Yup.number().required("Please enter authorId"),
    publishDate: Yup.number().required("Please enter publishDate"),
    categoryId: Yup.number().required("Please enter  categoryId"),
    shelfCode: Yup.string().required("Please enter  shelfCode"),
  });

  const onSubmit = async (values) => {
    console.log(values);
    //const formdt = getFormData(values);

    /*      const formData = new FormData();

    const formdt2 = Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });  */

    setLoading(true);
    try {
      const dto = {
        name: values.name,
        isbn: values.isbn,
        pageCount: values.pageCount,
        publisherId: values.publisherId,
        authorId: values.authorId,
        publishDate: values.publishDate,
        categoryId: values.categoryId,
        shelfCode: values.shelfCode,
        featured: values.featured,
      };
      await createBook(dto);
      toast("book created successfully!", "success");
      formik.resetForm();
      navigate(-1);
    } catch (err) {
      toast(err.response.data.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const handleSelectImage = () => {
    fileImageRef.current.click();
  };
  const handleImageChange = () => {
    const file = fileImageRef.current.files[0];
    console.log(file);
    if (!file) return;

    formik.setFieldValue("image", file);
    //formik state ini manuel olarak set ettik.Seçilen dosyayı image alanına yerleştirdik.

    const reader = new FileReader(); //Seçilen görüntüyü ekrana yerleştirdik
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
  };

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Row>
        <Col xl={3} className="image-area">
          <Form.Control
            type="file"
            name="image"
            className="d-none"
            onChange={handleImageChange}
            ref={fileImageRef}
          />
          <img src={imageSrc} className="img-fluid" alt="..." />
          {formik.errors.image && (
            <Badge bg="danger" className="image-area-error">
              Please select an image
            </Badge>
          )}
          <Button
            variant={formik.errors.image ? "danger" : "primary"}
            onClick={handleSelectImage}
          >
            Select Image
          </Button>
        </Col>
        <Col xl={9}>
          <Row>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("name")}
                isInvalid={formik.touched.name && formik.errors.name}
                isValid={formik.touched.name && !formik.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
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
            <Form.Group className="mb-3">
              <Form.Label>Page Count</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("pageCount")}
                isInvalid={formik.touched.pageCount && formik.errors.pageCount}
                isValid={formik.touched.pageCount && !formik.errors.pageCount}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.pageCount}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>publisher Id</Form.Label>
              <Form.Control
                type="number"
                {...formik.getFieldProps("publisherId")}
                isInvalid={
                  formik.touched.publisherId && formik.errors.publisherId
                }
                isValid={
                  formik.touched.publisherId && !formik.errors.publisherId
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.publisherId}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>author Id</Form.Label>
              <Form.Control
                type="number"
                {...formik.getFieldProps("authorId")}
                isInvalid={formik.touched.authorId && formik.errors.authorId}
                isValid={formik.touched.authorId && !formik.errors.authorId}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.authorId}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
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
            <Form.Group className="mb-3">
              <Form.Label>category Id</Form.Label>
              <Form.Control
                type="number"
                {...formik.getFieldProps("categoryId")}
                isInvalid={
                  formik.touched.categoryId && formik.errors.categoryId
                }
                isValid={formik.touched.categoryId && !formik.errors.categoryId}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.categoryId}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>shelf Code</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("shelfCode")}
                isInvalid={formik.touched.shelfCode && formik.errors.shelfCode}
                isValid={formik.touched.shelfCode && !formik.errors.shelfCode}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.shelfCode}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
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
          </Row>
        </Col>
      </Row>
      <Button variant="primary" type="submit" disabled={loading}>
        {loading && <Spinner animation="border" size="sm" />} Create
      </Button>
    </Form>
  );
};

export default BookCreateForm;
