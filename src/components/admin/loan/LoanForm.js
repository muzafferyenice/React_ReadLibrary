import React, { useState } from "react";
import { useFormik } from "formik";
import { Form, Button, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { toast } from "../../../utils/functions/swal";
import { createLoan } from "../../../api/loan-service";
import { useLocation, useParams } from "react-router-dom";

const LoanForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    userId: 0,
    bookId: 0,
    notes: "",
  };

  const validationSchema = Yup.object({
    userId: Yup.number().required("Please enter  userId"),
    bookId: Yup.number().required("Please enter  bookId"),
    notes: Yup.string().required("Please enter  notes"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      const respAuth = await createLoan(values);

      toast("Loan Created Successfully", "success");
    } catch (err) {
      toast("an error occured", "error");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>User Id</Form.Label>
        <Form.Control
          type="number"
          {...formik.getFieldProps("userId")}
          isInvalid={formik.touched.userId && formik.errors.userId}
          isValid={formik.touched.userId && !formik.errors.userId}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.userId}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Book Id</Form.Label>
        <Form.Control
          type="number"
          {...formik.getFieldProps("bookId")}
          isInvalid={formik.touched.bookId && formik.errors.bookId}
          isValid={formik.touched.bookId && !formik.errors.bookId}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.bookId}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Notes</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("notes")}
          isInvalid={formik.touched.notes && formik.errors.notes}
          isValid={formik.touched.notes && !formik.errors.notes}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.notes}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={loading}>
        {loading && <Spinner animation="border" size="sm" />} Create Loan
      </Button>
    </Form>
  );
};

export default LoanForm;
